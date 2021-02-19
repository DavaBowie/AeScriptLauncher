/* 
 Name:
	DecomposeText
 Version:
	2.2 (15 August 2010)
 Author:
	Charles Bordenave
 Description: 
	This script decomposes the content of the selected text layer and places each element on its own layer.
	Decomposition can be done by characters, words, or lines.
 Usage:
	In After Effects CS4 or later, run the script 
	Select a text layer  
	Specify the method to use
	Click on Decompose to place each character on its own layer
 */


// This class represents the main class of the script
function DecomposeText()
{
	// Variable used to keep track of 'this' reference
	var decomposeText = this;
	
	// Create an instance of the utils class to use its functions
	var utils = new DecomposeTextUtils();

	// Script infos
	this.scriptMinSupportVersion = "9.0";
	this.scriptName = "DecomposeText.jsx";	
	this.scriptVersion = "2.2 ZHLMI 汉化";
	this.scriptTitle = "分解文本";
	this.scriptCopyright = "Copyright (c) 2010 Charles Bordenave";
	this.scriptHomepage = "http://www.nabscripts.com";
	this.scriptDescription = {en:"This script decomposes the content of the selected text layer and places each element on its own layer. Decomposition can be done by characters, words, or lines.\\r\\rPreserve characters location method maintains the characters at their current location but creates text layers having the same number of characters as the original layer (therefore their anchor point is the same as the original layer anchor point).\\r\\rAppropriate anchor point method creates text layers containing only one character (therefore their anchor point is as defined in the Paragraph panel), but it superimposes all text layers.\\r\\rSeparate into words and Separate into lines methods are the same as Appropriate anchor point but create text layers containing only words or only lines.", 
							  fr:"Ce script décompose le contenu du calque texte sélectionné et place chaque élément sur un calque indépendant. La décomposition peut se faire par caractère, par mot ou par ligne.\\r\\rLa méthode Préserver la position des caractères laisse les caractères à leur position actuelle mais elle crée des calques texte ayant le même nombre de caractères que le calque original (par conséquent leur point d\\'ancrage est le même que celui du calque original).\\r\\rLa méthode Point d\\'ancrage approprié crée des calques texte contenant un seul caractère (par conséquent leur point d\\'ancrage est comme défini dans le panneau Paragraphe), mais elle superpose tous les calques texte.\\r\\rSéparation par mot et Séparation par ligne sont similaires à Ancrage approprié sauf que la décomposition du texte original se fait par mot ou par ligne."};
	this.scriptAbout = {en:this.scriptName + ", v" + this.scriptVersion + "\\r" + this.scriptCopyright + "\\r" + this.scriptHomepage + "\\r\\r" + utils.loc(this.scriptDescription), 
						fr:this.scriptName + ", v" + this.scriptVersion + "\\r" + this.scriptCopyright + "\\r" + this.scriptHomepage + "\\r\\r" + utils.loc(this.scriptDescription)};		
	this.scriptUsage = {en:	"\u25BA 在 After Effects CS4 或更高版本中运行该脚本 \\r" +
							"\u25BA 选中一个文本图层 \\r" +  
							"\u25BA 指定使用的模式 \\r" +
							"\u25BA 点击分解按钮",
						fr:	"\u25BA Dans After Effects CS4 ou supérieur, exécuter le script \\r" +
							"\u25BA Sélectionner un calque texte \\r" +
							"\u25BA Spécifier la méthode à utiliser \\r" +
							"\u25BA Cliquer sur Décomposer"};
						
	// Errors
	this.requirementErr = {en:"This script requires After Effects CS4 or later.", fr:"Ce script nécessite After Effects CS4 ou supérieur."};	
	this.noCompErr = {en:"A comp must be active.", fr:"Une composition doit être active."};
	this.noLayerErr = {en:"Select exactly one text layer.", fr:"Sélectionnez exactement un calque texte."};
	this.badSelLayerErr = {en:"Select exactly one text layer.", fr:"Sélectionnez exactement un calque texte."};

	// UI strings & default settings
	this.aboutBtnName = "?";
	this.methodStName = {en:"模式:", fr:"Méthode:"};
	this.methodLstChoices = {en:'["保留字符位置", "合适的锚点", "单独成词", "单独成线"]', fr:'["Préserver la position des caractères", "Ancrage approprié", "Séparation par mot", "Séparation par ligne"]'};
	this.methodLstSelDflt = 0;
	this.runBtnName = {en:"分解", fr:"Décomposer"};
		
	// Creates and displays the script interface
	this.buildUI = function (thisObj)
	{
		// dockable panel or palette
		var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", this.scriptTitle, undefined, {resizeable:false});

		// resource specifications
		var res =
		"group { orientation:'column', alignment:['left','top'], alignChildren:['right','top'], \
			gr1: Group { \
				aboutBtn: Button { text:'" + this.aboutBtnName + "', preferredSize:[25,20] } \
			}, \
			gr2: Group { \
				methodSt: StaticText { text:'" + utils.loc(this.methodStName) + "' }, \
				methodLst: DropDownList { properties:{items:" + utils.loc(this.methodLstChoices) + "} } \
			}, \
			gr3: Group { orientation:'row', alignment:['fill','top'], \
				runBtn: Button { text:'" + utils.loc(this.runBtnName) + "', alignment:['right','center'] } \
			} \
		}"; 
		pal.gr = pal.add(res);
		
		pal.gr.gr2.methodLst.selection = this.methodLstSelDflt;
		
		// event callbacks
		pal.gr.gr1.aboutBtn.onClick = function () 
		{ 
			utils.createAboutDlg(decomposeText.scriptAbout, decomposeText.scriptUsage); 
		};

		pal.gr.gr3.runBtn.onClick = function () 
		{ 
			decomposeText.decompose(pal); 
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

	// Determines whether a given layer is a text layer  
	this.checkLayerType = function (layer)
	{
		return !(layer instanceof TextLayer);
	}
	
	// Functional part of the script: places each character (or word or lines) of the selected text layer on its own layer 
	this.decompose = function (pal)
	{
		try
		{
			var comp = app.project.activeItem;
			var err = this.noCompErr;
			if (this.checkActiveItem(comp)) throw(err);
					
			var layer = comp.selectedLayers[0];
			var err = this.noLayerErr;
			if (!layer) throw(err);
			
			var err = this.badSelLayerErr;
			if (this.checkLayerType(layer)) throw(err);
			
			var txt = layer.sourceText.value.toString();
		
			app.beginUndoGroup(this.scriptTitle);
			
			switch (pal.gr.gr2.methodLst.selection.index)
			{
				case 0: // Preserve characters location		
					var numCharsToRemove = 0;
					for (var i = 0; i < txt.length; i++)
					{
						var curChar = txt.charAt(i);
						if (curChar.match(/\r/))
						{
							numCharsToRemove++;
							continue;
						}
						
						var newLayer = layer.duplicate();
						newLayer.name = curChar;
							
						var animator = newLayer.property("ADBE Text Properties").property("ADBE Text Animators").addProperty("ADBE Text Animator");
						var opacityProp = animator.property("ADBE Text Animator Properties").addProperty("ADBE Text Opacity");
						var expressionSelector = animator.property("ADBE Text Selectors").addProperty("ADBE Text Expressible Selector");
						opacityProp.setValue(0);
						expressionSelector.property("ADBE Text Expressible Amount").expression = "selectorValue * (textIndex != " + (i+1-numCharsToRemove) + ");";	 
						
						if (curChar.match(/\s/))
							newLayer.remove();
					}
					break;
				
				case 1: // Appropriate anchor point
					for (var i = 0; i < txt.length; i++)
					{
						var curChar = txt.charAt(i);
						if (!curChar.match(/\s|\r/))
						{
							var newLayer = layer.duplicate();
							newLayer.sourceText.numKeys ? newLayer.sourceText.setValueAtTime(comp.time,curChar) : newLayer.sourceText.setValue(curChar);
						}
					}
					break;
				
				case 2: // Separate into words
					var words = txt.split(/\s|\r/);
					for (var i = 0; i < words.length; i++) 
					{
						if (words[i].length)
						{
							var newLayer = layer.duplicate();
							newLayer.sourceText.numKeys ? newLayer.sourceText.setValueAtTime(comp.time,words[i]) : newLayer.sourceText.setValue(words[i]);
						}
					}				  
					break;
				
				case 3: // Separate into lines
					var lines = txt.split(/\r/);
					for (var i = 0; i < lines.length; i++) 
					{
						if (lines[i].length)
						{
							var newLayer = layer.duplicate();
							newLayer.sourceText.numKeys ? newLayer.sourceText.setValueAtTime(comp.time,lines[i]) : newLayer.sourceText.setValue(lines[i]);
						}
					}
					break;
				
				default:
					break;
			}
			
			layer.enabled = false;
			layer.selected = false;				  
				  
			app.endUndoGroup();
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
function DecomposeTextUtils()
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
new DecomposeText().run(this);
