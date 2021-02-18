/* 
 Name:
	CenterMasks
 Version: 
	2.1 (15 August 2010)
 Author:
	Charles Bordenave
 Description:  
	This script allows you to reposition the selected masks around the center of their containing layer.
 Usage:
	In After Effects CS4 or later, run the script 
	Select one or more masks 
	Click on Center to reposition the masks
 */


// This class represents the main class of the script 
function CenterMasks()
{
	// Variable used to keep track of 'this' reference
	var centerMasks = this;
	
	// Create an instance of the utils class to use its functions
	var utils = new CenterMasksUtils();

	// Script infos
	this.scriptMinSupportVersion = "9.0";
	this.scriptName = "CenterMasks.jsx";	
	this.scriptVersion = "2.1";
	this.scriptTitle = "Center Masks";
	this.scriptCopyright = "Copyright (c) 2010 Charles Bordenave";
	this.scriptHomepage = "http://www.nabscripts.com";
	this.scriptDescription = {en:"This script allows you to reposition the selected masks around the center of their containing layer.", 
							  fr:"Ce script permet de centrer les masques sélectionnés par rapport au centre du calque qui les contient."};
	this.scriptAbout = {en:this.scriptName + ", v" + this.scriptVersion + "\\r" + this.scriptCopyright + "\\r" + this.scriptHomepage + "\\r\\r" + utils.loc(this.scriptDescription), 
						fr:this.scriptName + ", v" + this.scriptVersion + "\\r" + this.scriptCopyright + "\\r" + this.scriptHomepage + "\\r\\r" + utils.loc(this.scriptDescription)};		
	this.scriptUsage = {en:	"\u25BA In After Effects CS4 or later, run the script \\r" +
							"\u25BA Select one or more masks \\r" +
							"\u25BA Click on Center to reposition the masks",
						fr:	"\u25BA Dans After Effects CS4 ou supérieur, exécuter le script \\r" +
							"\u25BA Sélectionner un ou plusieurs masques \\r" +
							"\u25BA Cliquer sur Centrer pour repositionner les masques"};								  
	
	// Errors
	this.requirementErr = {en:"This script requires After Effects CS4 or later.", fr:"Ce script nécessite After Effects CS4 ou supérieur."};	
	this.noCompErr = {en:"Select at least one mask.", fr:"Sélectionnez au moins un masque."};
	this.noLayerErr = {en:"Select at least one mask.", fr:"Sélectionnez au moins un masque."};
	this.noMaskErr = {en:"Select at least one mask.", fr:"Sélectionnez au moins un masque."};
	
	// UI strings 
	this.aboutBtnName = "?";
	this.runBtnName = {en:"Center", fr:"Centrer"};
	
	// Creates and displays the script interface
	this.buildUI = function (thisObj)
	{
		// dockable panel or palette
		var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", this.scriptTitle, undefined, {resizeable:true});
		
		// resource specifications
		var res =
		"group { orientation:'column', alignment:['fill','fill'], alignChildren:['right','top'], \
			gr1: Group { \
				aboutBtn: Button { text:'" + this.aboutBtnName + "', preferredSize:[25,20] } \
			}, \
			gr2: Group { orientation:'row', alignment:['fill','top'], \
				runBtn: Button { text:'" + utils.loc(this.runBtnName) + "', alignment:['fill','center'] } \
			} \
		}"; 
		pal.gr = pal.add(res);
		
		// event callbacks
		pal.onResizing = pal.onResize = function () 
		{
			this.layout.resize();
		};
				
		pal.gr.gr1.aboutBtn.onClick = function () 
		{ 
			utils.createAboutDlg(centerMasks.scriptAbout, centerMasks.scriptUsage); 
		};
		
		pal.gr.gr2.runBtn.onClick = function ()
		{
			centerMasks.repositionMasks();	
		};

		// show user interface
		if (pal instanceof Window)
		{
			pal.center();
			pal.show();
		}
		else
		{
			pal.layout.layout(true);
		}	   
	};

	// Determines whether the active item is a composition  
	this.checkActiveItem = function () 
	{
		return !(app.project.activeItem instanceof CompItem);
	};
	
	// Functional part of the script: reposition every masks of the selected masks around the center of their containing layer
	this.repositionMasks = function ()
	{
		try
		{
			var comp = app.project.activeItem;
			var err = this.noCompErr;
			if (this.checkActiveItem(comp)) throw(err);
		   
			var selLayers = comp.selectedLayers;
			var err = this.noLayerErr;
			if (selLayers.length < 1) throw(err);
			   
			var numSelMasks = 0;
			
			app.beginUndoGroup(this.scriptTitle);
			
			for (var i = 0; i < selLayers.length; i++) 
			{
				var layer = comp.selectedLayers[i];
				
				for (var j = 1; j <= layer.Masks.numProperties; j++) 
				{
					var mask = layer.Masks.property(j);
					if (mask.selected) 
					{ 
						numSelMasks++;
						
						var maskShape = mask.maskShape; 
						var shape = maskShape.valueAtTime(comp.time, false);
						var verts = shape.vertices;
						var layerCenter = [layer.width/2, layer.height/2];								
						
						var x = 0;
						var y = 0;
						for (var k = 0; k < verts.length; k++) 
						{
							x += verts[k][0];
							y += verts[k][1];
						}					
						var maskCenter = [x/verts.length, y/verts.length];					
						var delta = layerCenter - maskCenter;								
						
						var newShape = new Shape();
						var newVerts = new Array();
						for (var k = 0; k < verts.length; k++) 
						{
							newVerts.push(verts[k] + delta);
						}						
						newShape.vertices = newVerts;
						newShape.inTangents = shape.inTangents;
						newShape.outTangents = shape.outTangents;
						
						maskShape.numKeys ? maskShape.setValueAtTime(comp.time, newShape) : maskShape.setValue(newShape);
					}
				}
			}
			
			app.endUndoGroup();			
			
			var err = this.noMaskErr;
			if (numSelMasks < 1) throw(err);
		}
		catch(err)
		{
			utils.throwErr(err);
		}				
	};
	
	// Runs the script  
	this.run = function (thisObj) 
	{
		if (parseFloat(app.version) < parseFloat(this.scriptMinSupportVersion))
		{
			utils.throwErr(this.requirementErr);
		}
		else
		{
			this.buildUI(thisObj);
		}	
	};
}


// This class provides some utility functions
function CenterMasksUtils()
{
	// Variable used to keep track of 'this' reference
	var utils = this;
	
	// String localization function: english and french languages are supported
	this.loc = function (str)
	{
		return app.language == Language.FRENCH ? str.fr : str.en;
	};

	// Displays a window containg a localized error message
	this.throwErr = function (err)
	{
		var wndTitle = $.fileName.substring($.fileName.lastIndexOf("/")+1, $.fileName.lastIndexOf("."));
		Window.alert("Script error:\r" + this.loc(err), wndTitle, true);
	};			

	// Displays a dialog containg the script description and usage
	this.createAboutDlg = function (aboutStr, usageStr)
	{	
		eval(unescape('%09%09%76%61%72%20%64%6C%67%20%3D%20%6E%65%77%20%57%69%6E%64%6F%77%28%22%64%69%61%6C%6F%67%22%2C%20%22%41%62%6F%75%74%22%29%3B%0A%09%20%20%20%20%20%20%09%20%20%20%20%20%20%20%09%0A%09%20%20%20%20%76%61%72%20%72%65%73%20%3D%0A%09%09%22%67%72%6F%75%70%20%7B%20%6F%72%69%65%6E%74%61%74%69%6F%6E%3A%27%63%6F%6C%75%6D%6E%27%2C%20%61%6C%69%67%6E%6D%65%6E%74%3A%5B%27%66%69%6C%6C%27%2C%27%66%69%6C%6C%27%5D%2C%20%61%6C%69%67%6E%43%68%69%6C%64%72%65%6E%3A%5B%27%66%69%6C%6C%27%2C%27%66%69%6C%6C%27%5D%2C%20%5C%0A%09%09%09%70%6E%6C%3A%20%50%61%6E%65%6C%20%7B%20%74%79%70%65%3A%27%74%61%62%62%65%64%70%61%6E%65%6C%27%2C%20%5C%0A%09%09%09%09%61%62%6F%75%74%54%61%62%3A%20%50%61%6E%65%6C%20%7B%20%74%79%70%65%3A%27%74%61%62%27%2C%20%74%65%78%74%3A%27%44%65%73%63%72%69%70%74%69%6F%6E%27%2C%20%5C%0A%09%09%09%09%09%61%62%6F%75%74%45%74%3A%20%45%64%69%74%54%65%78%74%20%7B%20%74%65%78%74%3A%27%22%20%2B%20%74%68%69%73%2E%6C%6F%63%28%61%62%6F%75%74%53%74%72%29%20%2B%20%22%27%2C%20%70%72%65%66%65%72%72%65%64%53%69%7A%65%3A%5B%33%36%30%2C%32%30%30%5D%2C%20%70%72%6F%70%65%72%74%69%65%73%3A%7B%6D%75%6C%74%69%6C%69%6E%65%3A%74%72%75%65%7D%20%7D%20%5C%0A%09%09%09%09%7D%2C%20%5C%0A%09%09%09%09%75%73%61%67%65%54%61%62%3A%20%50%61%6E%65%6C%20%7B%20%74%79%70%65%3A%27%74%61%62%27%2C%20%74%65%78%74%3A%27%55%73%61%67%65%27%2C%20%5C%0A%09%09%09%09%09%75%73%61%67%65%45%74%3A%20%45%64%69%74%54%65%78%74%20%7B%20%74%65%78%74%3A%27%22%20%2B%20%74%68%69%73%2E%6C%6F%63%28%75%73%61%67%65%53%74%72%29%20%2B%20%22%27%2C%20%70%72%65%66%65%72%72%65%64%53%69%7A%65%3A%5B%33%36%30%2C%32%30%30%5D%2C%20%70%72%6F%70%65%72%74%69%65%73%3A%7B%6D%75%6C%74%69%6C%69%6E%65%3A%74%72%75%65%7D%20%7D%20%5C%0A%09%09%09%09%7D%20%5C%0A%09%09%09%7D%2C%20%5C%0A%09%09%09%62%74%6E%73%3A%20%47%72%6F%75%70%20%7B%20%6F%72%69%65%6E%74%61%74%69%6F%6E%3A%27%72%6F%77%27%2C%20%61%6C%69%67%6E%6D%65%6E%74%3A%5B%27%66%69%6C%6C%27%2C%27%62%6F%74%74%6F%6D%27%5D%2C%20%5C%0A%09%09%09%09%6F%74%68%65%72%53%63%72%69%70%74%73%42%74%6E%3A%20%42%75%74%74%6F%6E%20%7B%20%74%65%78%74%3A%27%4F%74%68%65%72%20%53%63%72%69%70%74%73%2E%2E%2E%27%2C%20%61%6C%69%67%6E%6D%65%6E%74%3A%5B%27%6C%65%66%74%27%2C%27%63%65%6E%74%65%72%27%5D%20%7D%2C%20%5C%0A%09%09%09%09%6F%6B%42%74%6E%3A%20%42%75%74%74%6F%6E%20%7B%20%74%65%78%74%3A%27%4F%6B%27%2C%20%61%6C%69%67%6E%6D%65%6E%74%3A%5B%27%72%69%67%68%74%27%2C%27%63%65%6E%74%65%72%27%5D%20%7D%20%5C%0A%09%09%09%7D%20%5C%0A%09%09%7D%22%3B%20%0A%09%09%64%6C%67%2E%67%72%20%3D%20%64%6C%67%2E%61%64%64%28%72%65%73%29%3B%0A%09%09%0A%09%09%64%6C%67%2E%67%72%2E%70%6E%6C%2E%61%62%6F%75%74%54%61%62%2E%61%62%6F%75%74%45%74%2E%6F%6E%43%68%61%6E%67%65%20%3D%20%64%6C%67%2E%67%72%2E%70%6E%6C%2E%61%62%6F%75%74%54%61%62%2E%61%62%6F%75%74%45%74%2E%6F%6E%43%68%61%6E%67%69%6E%67%20%3D%20%66%75%6E%63%74%69%6F%6E%20%28%29%0A%09%09%7B%0A%09%09%09%74%68%69%73%2E%74%65%78%74%20%3D%20%75%74%69%6C%73%2E%6C%6F%63%28%61%62%6F%75%74%53%74%72%29%2E%72%65%70%6C%61%63%65%28%2F%5C%5C%72%2F%67%2C%20%27%5C%72%27%29%3B%0A%09%09%7D%3B%0A%09%09%0A%09%09%64%6C%67%2E%67%72%2E%70%6E%6C%2E%75%73%61%67%65%54%61%62%2E%75%73%61%67%65%45%74%2E%6F%6E%43%68%61%6E%67%65%20%3D%20%64%6C%67%2E%67%72%2E%70%6E%6C%2E%75%73%61%67%65%54%61%62%2E%75%73%61%67%65%45%74%2E%6F%6E%43%68%61%6E%67%69%6E%67%20%3D%20%66%75%6E%63%74%69%6F%6E%20%28%29%0A%09%09%7B%0A%09%09%09%74%68%69%73%2E%74%65%78%74%20%3D%20%75%74%69%6C%73%2E%6C%6F%63%28%75%73%61%67%65%53%74%72%29%2E%72%65%70%6C%61%63%65%28%2F%5C%5C%72%2F%67%2C%20%27%5C%72%27%29%2E%72%65%70%6C%61%63%65%28%2F%5C%5C%27%2F%67%2C%20%22%27%22%29%3B%0A%09%09%7D%3B%0A%09%09%09%0A%09%09%64%6C%67%2E%67%72%2E%62%74%6E%73%2E%6F%74%68%65%72%53%63%72%69%70%74%73%42%74%6E%2E%6F%6E%43%6C%69%63%6B%20%3D%20%66%75%6E%63%74%69%6F%6E%20%28%29%0A%09%09%7B%0A%09%09%09%76%61%72%20%63%6D%64%20%3D%20%22%22%3B%0A%09%09%09%76%61%72%20%75%72%6C%20%3D%20%22%68%74%74%70%3A%2F%2F%61%65%73%63%72%69%70%74%73%2E%63%6F%6D%2F%63%61%74%65%67%6F%72%79%2F%73%63%72%69%70%74%73%2F%6E%61%62%2F%22%3B%0A%09%0A%09%09%09%69%66%20%28%24%2E%6F%73%2E%69%6E%64%65%78%4F%66%28%22%57%69%6E%22%29%20%21%3D%20%2D%31%29%0A%09%09%09%7B%0A%09%20%20%20%20%20%20%20%20%09%69%66%20%28%46%69%6C%65%28%22%43%3A%2F%50%72%6F%67%72%61%6D%20%46%69%6C%65%73%2F%4D%6F%7A%69%6C%6C%61%20%46%69%72%65%66%6F%78%2F%66%69%72%65%66%6F%78%2E%65%78%65%22%29%2E%65%78%69%73%74%73%29%0A%09%09%09%09%09%63%6D%64%20%2B%3D%20%22%43%3A%2F%50%72%6F%67%72%61%6D%20%46%69%6C%65%73%2F%4D%6F%7A%69%6C%6C%61%20%46%69%72%65%66%6F%78%2F%66%69%72%65%66%6F%78%2E%65%78%65%20%22%20%2B%20%75%72%6C%3B%0A%09%09%09%09%65%6C%73%65%20%69%66%20%28%46%69%6C%65%28%22%43%3A%2F%50%72%6F%67%72%61%6D%20%46%69%6C%65%73%20%28%78%38%36%29%2F%4D%6F%7A%69%6C%6C%61%20%46%69%72%65%66%6F%78%2F%66%69%72%65%66%6F%78%2E%65%78%65%22%29%2E%65%78%69%73%74%73%29%0A%09%09%09%09%09%63%6D%64%20%2B%3D%20%22%43%3A%2F%50%72%6F%67%72%61%6D%20%46%69%6C%65%73%20%28%78%38%36%29%2F%4D%6F%7A%69%6C%6C%61%20%46%69%72%65%66%6F%78%2F%66%69%72%65%66%6F%78%2E%65%78%65%20%22%20%2B%20%75%72%6C%3B%0A%09%09%09%09%65%6C%73%65%0A%09%09%09%09%09%63%6D%64%20%2B%3D%20%22%43%3A%2F%50%72%6F%67%72%61%6D%20%46%69%6C%65%73%2F%49%6E%74%65%72%6E%65%74%20%45%78%70%6C%6F%72%65%72%2F%69%65%78%70%6C%6F%72%65%2E%65%78%65%20%22%20%2B%20%75%72%6C%3B%0A%09%09%09%7D%0A%09%09%09%65%6C%73%65%0A%09%09%09%09%63%6D%64%20%2B%3D%20%22%6F%70%65%6E%20%5C%22%22%20%2B%20%75%72%6C%20%2B%20%22%5C%22%22%3B%20%20%20%20%20%20%20%20%20%0A%09%09%09%74%72%79%0A%09%09%09%7B%0A%09%09%09%09%73%79%73%74%65%6D%2E%63%61%6C%6C%53%79%73%74%65%6D%28%63%6D%64%29%3B%0A%09%09%09%7D%0A%09%09%09%63%61%74%63%68%28%65%29%0A%09%09%09%7B%0A%09%09%09%09%61%6C%65%72%74%28%65%29%3B%0A%09%09%09%7D%0A%09%09%7D%3B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%09%09%64%6C%67%2E%67%72%2E%62%74%6E%73%2E%6F%6B%42%74%6E%2E%6F%6E%43%6C%69%63%6B%20%3D%20%66%75%6E%63%74%69%6F%6E%20%28%29%20%0A%09%09%7B%0A%09%09%09%64%6C%67%2E%63%6C%6F%73%65%28%29%3B%20%0A%09%09%7D%3B%0A%09%20%20%20%20%20%20%20%0A%09%09%64%6C%67%2E%63%65%6E%74%65%72%28%29%3B%0A%09%09%64%6C%67%2E%73%68%6F%77%28%29%3B'));		
	};
}


// Creates an instance of the main class and run it
new CenterMasks().run(this);
