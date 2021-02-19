/* 
 Name:
	DistributeLayers
 Version:
	2.2 (15 January 2011)
 Author:
	Charles Bordenave
 Description:  
	This script allows you to distribute the selected layers in 3D space.
	In addition to offset position, you can offset rotation, scale, opacity and add some randomness.
	The Factor parameter allows non-linear offset between layers. 
 Usage:
	In After Effects CS4 or later, run the script
	Select at least two layers  
	Select a property in the script interface 
	Drag sliders or edit text fields to see the changes in real time
 */


// This class represents the main class of the script
function DistributeLayers()
{
	// Variable used to keep track of 'this' reference
	var distributeLayers = this;
	
	// Create an instance of the utils class to use its functions
	var utils = new DistributeLayersUtils();

	// Script infos
	this.scriptMinSupportVersion = "9.0";
	this.scriptName = "DistributeLayers.jsx";	
	this.scriptVersion = "2.2";
	this.scriptTitle = "Distribute Layers";
	this.scriptCopyright = "Copyright (c) 2011 Charles Bordenave";
	this.scriptHomepage = "http://www.nabscripts.com";
	this.scriptDescription = {en: "This script allows you to distribute the selected layers in 3D space.\\r\\rIn addition to offset position, you can offset rotation, scale, opacity and add some randomness.\\r\\rThe Factor parameter allows non-linear offset between layers.", fr:"Ce script permet de distribuer les calques dans l\\'espace 3D.\\r\\rEn plus de pouvoir décaler la position, vous pouvez décaler la rotation, l\\'échelle, l\\'opacité et ajouter de l\\'aléatoire.\\r\\rLe paramètre Facteur permet d\\'obtenir un décalage non-linéaire entre les calques."};
	this.scriptAbout = {en:this.scriptName + ", v" + this.scriptVersion + "\\r" + this.scriptCopyright + "\\r" + this.scriptHomepage + "\\r\\r" + utils.loc(this.scriptDescription), 
						fr:this.scriptName + ", v" + this.scriptVersion + "\\r" + this.scriptCopyright + "\\r" + this.scriptHomepage + "\\r\\r" + utils.loc(this.scriptDescription)};		
	this.scriptUsage = {en:	"\u25BA In After Effects CS4 or later, run the script \\r" +
							"\u25BA Select at least two layers \\r" +
							"\u25BA Select a property in the script interface \\r" +
							"\u25BA Drag sliders or edit text fields to see the changes in real time",
						fr:	"\u25BA Dans After Effects CS4 ou supérieur, exécuter le script \\r" +
							"\u25BA Sélectionner au moins deux calques \\r" +
							"\u25BA Sélectionner une propriété dans l\\\'interface du script \\r" +
							"\u25BA Déplacer les curseurs ou modifier les champs de texte pour voir les changements en temps réel"};
	 
	// Errors
	this.requirementErr = {en:"This script requires After Effects CS4 or later.", fr:"Ce script nécessite After Effects CS4 ou supérieur."};	
	this.noCompErr = {en:"A comp must be active.", fr:"Une composition doit être active."};
	this.noLayersErr = {en:"Select at least two layers.", fr:"Sélectionnez au moins deux calques."};
	this.duringProcessErr = {en:"An error occurred while accessing transform properties of selected layers.", fr:"Une erreur s'est produite lors de l'accès aux propriétés de transformation des calques sélectionnés."};

	// UI strings 
	this.aboutBtnName = "?";
	this.runBtnName = {en:"Run", fr:"Exécuter"};
	
	// Creates and displays the script interface
	this.buildUI = function (thisObj)
	{
		// dockable panel or palette
		var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", this.scriptTitle, undefined, {resizeable:true});

		// resource specifications
		var res =
		"group { orientation:'column', alignment:['fill','top'], alignChildren:['right','top'], \
			gr1: Group { alignment:['fill','fill'], \
				aboutBtn: Button { text:'?', preferredSize:[25,20], alignment:['right','center'] } \
			}, \
			pnl: Panel { type:'tabbedpanel', alignment:['fill','fill'], \
				pnl1: Panel { type:'tab', text:'Pos', orientation:'row', alignment:['fill','fill'], alignChildren:['right','top'], \
					gr1: Group { orientation:'column', alignment:['left','top'], alignChildren:['right','center'], \
						xOffsetSt: StaticText { text:'X Offset:', preferredSize:[-1,18] }, \
						yOffsetSt: StaticText { text:'Y Offset:', preferredSize:[-1,18] }, \
						zOffsetSt: StaticText { text:'Z Offset:' } \
					}, \
					gr2: Group { orientation:'column', alignment:['fill','top'], \
						gr21: Group { orientation:'row', alignment:['fill','top'], \
							xOffsetScl: Scrollbar { minvalue:-100, alignment:['fill','center'] }, \
							xOffsetEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr22: Group { orientation:'row', alignment:['fill','top'], \
							yOffsetScl: Scrollbar { minvalue:-100, alignment:['fill','center'] }, \
							yOffsetEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr23: Group { orientation:'row', alignment:['fill','top'], \
							zOffsetScl: Scrollbar { minvalue:-100, alignment:['fill','center'] }, \
							zOffsetEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr24: Group { alignment:'fill', alignChildren:['left','top'], \
							sliderRangeBtn: Button { text:'Slider Range' } \
						} \
					} \
				}, \
				pnl2: Panel { type:'tab', text:'Rot', orientation:'row', alignment:['fill','fill'], alignChildren:['right','top'], \
					gr1: Group { orientation:'column', alignment:['left','top'], alignChildren:['right','top'], \
						xRotationSt: StaticText { text:'X Rotation:', preferredSize:[-1,18] }, \
						yRotationSt: StaticText { text:'Y Rotation:', preferredSize:[-1,18] }, \
						zRotationSt: StaticText { text:'Z Rotation:' } \
					}, \
					gr2: Group { orientation:'column', alignment:['fill','top'], \
						gr21: Group { orientation:'row', alignment:['fill','top'], \
							xRotationScl: Scrollbar { minvalue:-100, alignment:['fill','center'] }, \
							xRotationEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr22: Group { orientation:'row', alignment:['fill','top'], \
							yRotationScl: Scrollbar { minvalue:-100, alignment:['fill','center'] }, \
							yRotationEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr23: Group { orientation:'row', alignment:['fill','top'], \
							zRotationScl: Scrollbar { minvalue:-100, alignment:['fill','center'] }, \
							zRotationEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr24: Group { alignment:'fill', alignChildren:['left','top'], \
							sliderRangeBtn: Button { text:'Slider Range' } \
						} \
					} \
				}, \
				pnl3: Panel { type:'tab', text:'Sca/Opa', orientation:'row', alignment:['fill','fill'], alignChildren:['right','top'], \
					gr1: Group { orientation:'column', alignment:['left','top'], alignChildren:['right','top'], \
						xScaleSt: StaticText { text:'X Scale Offset:', preferredSize:[-1,18] }, \
						yScaleSt: StaticText { text:'Y Scale Offset:', preferredSize:[-1,18] }, \
						opacitySt: StaticText { text:'Opacity Offset:', preferredSize:[-1,18] }, \
						fooSt: StaticText { visible:false, text:'foo:' } \
					}, \
					gr2: Group { orientation:'column', alignment:['fill','top'], \
						gr21: Group { orientation:'row', alignment:['fill','top'], \
							xScaleScl: Scrollbar { minvalue:-100, alignment:['fill','center'] }, \
							xScaleEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr22: Group { orientation:'row', alignment:['fill','top'], \
							yScaleScl: Scrollbar { minvalue:-100, alignment:['fill','center'] }, \
							yScaleEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr23: Group { orientation:'row', alignment:['fill','top'], \
							opacityScl: Scrollbar { minvalue:0, maxvalue:100, alignment:['fill','center'] }, \
							opacityEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr24: Group { alignment:'fill', alignChildren:['left','top'], \
							sliderRangeBtn: Button { text:'Slider Range' } \
						} \
					} \
				}, \
				pnl4: Panel { type:'tab', text:'Rand Pos', orientation:'row', alignment:['fill','fill'], alignChildren:['right','top'], \
					gr1: Group { orientation:'column', alignment:['left','top'], alignChildren:['right','top'], \
						xRandomSt: StaticText { text:'X Random:', preferredSize:[-1,18] }, \
						yRandomSt: StaticText { text:'Y Random:', preferredSize:[-1,18] }, \
						zRandomSt: StaticText { text:'Z Random:' } \
					}, \
					gr2: Group { orientation:'column', alignment:['fill','top'], \
						gr21: Group { orientation:'row', alignment:['fill','top'], \
							xRandomScl: Scrollbar { alignment:['fill','center'] }, \
							xRandomEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr22: Group { orientation:'row', alignment:['fill','top'], \
							yRandomScl: Scrollbar { alignment:['fill','center'] }, \
							yRandomEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr23: Group { orientation:'row', alignment:['fill','top'], \
							zRandomScl: Scrollbar { alignment:['fill','center'] }, \
							zRandomEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr24: Group { alignment:'fill', alignChildren:['left','top'], \
							sliderRangeBtn: Button { text:'Slider Range' } \
						} \
					} \
				}, \
				pnl5: Panel { type:'tab', text:'Rand Rot', orientation:'row', alignment:['fill','fill'], alignChildren:['right','top'], \
					gr1: Group { orientation:'column', alignment:['left','top'], alignChildren:['right','top'], \
						xRandomSt: StaticText { text:'X Random:', preferredSize:[-1,18] }, \
						yRandomSt: StaticText { text:'Y Random:', preferredSize:[-1,18] }, \
						zRandomSt: StaticText { text:'Z Random:' } \
					}, \
					gr2: Group { orientation:'column', alignment:['fill','top'], \
						gr21: Group { orientation:'row', alignment:['fill','top'], \
							xRandomScl: Scrollbar { alignment:['fill','center'] }, \
							xRandomEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr22: Group { orientation:'row', alignment:['fill','top'], \
							yRandomScl: Scrollbar { alignment:['fill','center'] }, \
							yRandomEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr23: Group { orientation:'row', alignment:['fill','top'], \
							zRandomScl: Scrollbar { alignment:['fill','center'] }, \
							zRandomEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr24: Group { alignment:'fill', alignChildren:['left','top'], \
							sliderRangeBtn: Button { text:'Slider Range' } \
						} \
					} \
				}, \
				pnl6: Panel { type:'tab', text:'Rand Sca/Opa', orientation:'row', alignment:['fill','fill'], alignChildren:['right','top'], \
					gr1: Group { orientation:'column', alignment:['left','top'], alignChildren:['right','top'], \
						xRandomSt: StaticText { text:'X Random:', preferredSize:[-1,18] }, \
						yRandomSt: StaticText { text:'Y Random:', preferredSize:[-1,18] }, \
						opacityRandomSt: StaticText { text:'Opacity Random:', preferredSize:[-1,18] }, \
						fooSt: StaticText { visible:false, text:'foo:' } \
					}, \
					gr2: Group { orientation:'column', alignment:['fill','top'], \
						gr21: Group { orientation:'row', alignment:['fill','top'], \
							xRandomScl: Scrollbar { minvalue:-100, alignment:['fill','center'] }, \
							xRandomEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr22: Group { orientation:'row', alignment:['fill','top'], \
							yRandomScl: Scrollbar { minvalue:-100, alignment:['fill','center'] }, \
							yRandomEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr23: Group { orientation:'row', alignment:['fill','top'], \
							opacityRandomScl: Scrollbar { minvalue:0, maxvalue:100, alignment:['fill','center'] }, \
							opacityRandomEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr24: Group { alignment:'fill', alignChildren:['left','top'], \
							sliderRangeBtn: Button { text:'Slider Range' } \
						} \
					} \
					gr3: Group { orientation:'column', \
						fooEt: EditText { visible:false, preferredSize:[-1,5] }, \
						uniformCb: Checkbox { text:'Uniform', value:true } \
					} \
				}, \
				pnl7: Panel { type:'tab', text:'Factor', orientation:'row', alignment:['fill','fill'], alignChildren:['right','top'], \
					gr1: Group { orientation:'column', alignment:['left','top'], alignChildren:['right','center'], \
						factorSt: StaticText { text:'Factor:', preferredSize:[-1,20] }, \
						fooSt: StaticText { visible:false, text:'Offset:', preferredSize:[-1,20] }, \
						fooSt: StaticText { visible:false, text:'Z Random:' } \
					}, \
					gr2: Group { orientation:'column', alignment:['fill','top'], \
						gr21: Group { orientation:'row', alignment:['fill','top'], \
							factorScl: Scrollbar { minvalue:0.75, maxvalue:1.5, value:1.0, stepdelta:0.01, jumpdelta:0.05, alignment:['fill','center'] }, \
							factorEt: EditText { text:'1.0', characters:5, alignment:['right','center'] } \
						}, \
						gr22: Group { orientation:'row', alignment:['fill','top'], \
							fooScl: Scrollbar { visible:false, alignment:['fill','center'] }, \
							fooEt: EditText { visible:false, text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr23: Group { orientation:'row', alignment:['fill','top'], \
							fooScl: Scrollbar { visible:false, minvalue:-100, alignment:['fill','center'] }, \
							fooEt: EditText { visible:false, text:'0', characters:5, alignment:['right','center'] } \
						}, \
						gr24: Group { alignment:'fill', alignChildren:['left','top'], \
							sliderRangeBtn: Button { text:'Slider Range' } \
						} \
					} \
				} \
			} \
		}"; 
		pal.gr = pal.add(res);
				
		pal.layout.layout(true);
		pal.gr.minimumSize = pal.gr.size;
		
		// event callbacks
		pal.onResizing = pal.onResize = function () 
		{
			this.layout.resize();
		};
				
		pal.gr.gr1.aboutBtn.onClick = function () 
		{ 
			utils.createAboutDlg(distributeLayers.scriptAbout, distributeLayers.scriptUsage); 
		};
		
		pal.gr.pnl.pnl1.gr2.gr21.xOffsetScl.onChange = pal.gr.pnl.pnl1.gr2.gr21.xOffsetScl.onChanging = function () 
		{
			this.value = Math.floor(this.value);			
			this.parent.xOffsetEt.text = this.value;
			distributeLayers.offsetPosition(pal);
		};		

		pal.gr.pnl.pnl1.gr2.gr21.xOffsetEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 0;
			this.parent.xOffsetScl.value = parseInt(this.text);
			distributeLayers.offsetPosition(pal);			
		};	
		
		pal.gr.pnl.pnl1.gr2.gr22.yOffsetScl.onChange = pal.gr.pnl.pnl1.gr2.gr22.yOffsetScl.onChanging = function () 
		{
			this.value = Math.floor(this.value);			
			this.parent.yOffsetEt.text = this.value;
			distributeLayers.offsetPosition(pal);
		};

		pal.gr.pnl.pnl1.gr2.gr22.yOffsetEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 0;
			this.parent.yOffsetScl.value = parseInt(this.text);
			distributeLayers.offsetPosition(pal);			
		};
		
		pal.gr.pnl.pnl1.gr2.gr23.zOffsetScl.onChange = pal.gr.pnl.pnl1.gr2.gr23.zOffsetScl.onChanging = function () 
		{
			this.value = Math.floor(this.value);			
			this.parent.zOffsetEt.text = this.value;
			distributeLayers.offsetPosition(pal);
		};

		pal.gr.pnl.pnl1.gr2.gr23.zOffsetEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 0;
			this.parent.zOffsetScl.value = parseInt(this.text);
			distributeLayers.offsetPosition(pal);			
		};

		pal.gr.pnl.pnl1.gr2.gr24.sliderRangeBtn.onClick = function () 
		{
			var minVal = parseInt(prompt("Minimum value:", pal.gr.pnl.pnl1.gr2.gr21.xOffsetScl.minvalue, "Slider Range"));
			var maxVal = parseInt(prompt("Maximum value:", pal.gr.pnl.pnl1.gr2.gr21.xOffsetScl.maxvalue, "Slider Range"));
			if (isNaN(minVal)) minVal = pal.gr.pnl.pnl1.gr2.gr21.xOffsetScl.minvalue;
			if (isNaN(maxVal)) maxVal = pal.gr.pnl.pnl1.gr2.gr21.xOffsetScl.maxvalue;
						
			pal.gr.pnl.pnl1.gr2.gr21.xOffsetScl.minvalue = 
			pal.gr.pnl.pnl1.gr2.gr22.yOffsetScl.minvalue = 
			pal.gr.pnl.pnl1.gr2.gr23.zOffsetScl.minvalue = minVal;
			
			pal.gr.pnl.pnl1.gr2.gr21.xOffsetScl.maxvalue = 
			pal.gr.pnl.pnl1.gr2.gr22.yOffsetScl.maxvalue = 
			pal.gr.pnl.pnl1.gr2.gr23.zOffsetScl.maxvalue = maxVal;
		};
		
		pal.gr.pnl.pnl2.gr2.gr21.xRotationScl.onChange = pal.gr.pnl.pnl2.gr2.gr21.xRotationScl.onChanging = function () 
		{
			this.value = Math.floor(this.value);			
			this.parent.xRotationEt.text = this.value;
			distributeLayers.offsetRotation(pal, "x");
		};

		pal.gr.pnl.pnl2.gr2.gr21.xRotationEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 0;
			this.parent.xRotationScl.value = parseInt(this.text);
			distributeLayers.offsetRotation(pal, "x");			
		};

		pal.gr.pnl.pnl2.gr2.gr22.yRotationScl.onChange = pal.gr.pnl.pnl2.gr2.gr22.yRotationScl.onChanging = function () 
		{
			this.value = Math.floor(this.value);			
			this.parent.yRotationEt.text = this.value;
			distributeLayers.offsetRotation(pal, "y");
		};

		pal.gr.pnl.pnl2.gr2.gr22.yRotationEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 0;
			this.parent.yRotationScl.value = parseInt(this.text);
			distributeLayers.offsetRotation(pal, "y");			
		};
		
		pal.gr.pnl.pnl2.gr2.gr23.zRotationScl.onChange = pal.gr.pnl.pnl2.gr2.gr23.zRotationScl.onChanging = function () 
		{
			this.value = Math.floor(this.value);			
			this.parent.zRotationEt.text = this.value;
			distributeLayers.offsetRotation(pal, "z");
		};

		pal.gr.pnl.pnl2.gr2.gr23.zRotationEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 0;
			this.parent.zRotationScl.value = parseInt(this.text);
			distributeLayers.offsetRotation(pal, "z");			
		};		
 
		pal.gr.pnl.pnl2.gr2.gr24.sliderRangeBtn.onClick = function () 
		{
			var minVal = parseInt(prompt("Minimum value:", pal.gr.pnl.pnl2.gr2.gr21.xRotationScl.minvalue, "Slider Range"));
			var maxVal = parseInt(prompt("Maximum value:", pal.gr.pnl.pnl2.gr2.gr21.xRotationScl.maxvalue, "Slider Range"));
			if (isNaN(minVal)) minVal = pal.gr.pnl.pnl2.gr2.gr21.xRotationScl.minvalue;
			if (isNaN(maxVal)) maxVal = pal.gr.pnl.pnl2.gr2.gr21.xRotationScl.maxvalue;
						
			pal.gr.pnl.pnl2.gr2.gr21.xRotationScl.minvalue = 
			pal.gr.pnl.pnl2.gr2.gr22.yRotationScl.minvalue = 
			pal.gr.pnl.pnl2.gr2.gr23.zRotationScl.minvalue = minVal;
			
			pal.gr.pnl.pnl2.gr2.gr21.xRotationScl.maxvalue = 
			pal.gr.pnl.pnl2.gr2.gr22.yRotationScl.maxvalue = 
			pal.gr.pnl.pnl2.gr2.gr23.zRotationScl.maxvalue = maxVal;
		};

		pal.gr.pnl.pnl3.gr2.gr21.xScaleScl.onChange = pal.gr.pnl.pnl3.gr2.gr21.xScaleScl.onChanging = function () 
		{
			this.value = Math.floor(this.value);			
			this.parent.xScaleEt.text = this.value;
			distributeLayers.offsetScale(pal);
		};

		pal.gr.pnl.pnl3.gr2.gr21.xScaleEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 0;
			this.parent.xScaleScl.value = parseInt(this.text);
			distributeLayers.offsetScale(pal);			
		};
		
		pal.gr.pnl.pnl3.gr2.gr22.yScaleScl.onChange = pal.gr.pnl.pnl3.gr2.gr22.yScaleScl.onChanging = function () 
		{
			this.value = Math.floor(this.value);			
			this.parent.yScaleEt.text = this.value;
			distributeLayers.offsetScale(pal);
		};

		pal.gr.pnl.pnl3.gr2.gr22.yScaleEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 0;
			this.parent.yScaleScl.value = parseInt(this.text);
			distributeLayers.offsetScale(pal);			
		};		
		
		pal.gr.pnl.pnl3.gr2.gr23.opacityScl.onChange = pal.gr.pnl.pnl3.gr2.gr23.opacityScl.onChanging = function () 
		{
			this.value = Math.floor(this.value);			
			this.parent.opacityEt.text = this.value;
			distributeLayers.offsetOpacity(pal);
		};

		pal.gr.pnl.pnl3.gr2.gr23.opacityEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 0;
			else if (parseFloat(this.text) < 0) this.text = 0;
			else if (parseFloat(this.text) > 100) this.text = 100;
			this.parent.opacityScl.value = parseInt(this.text);
			distributeLayers.offsetOpacity(pal);			
		};		

		pal.gr.pnl.pnl3.gr2.gr24.sliderRangeBtn.onClick = function () 
		{
			var minVal = parseInt(prompt("Minimum value:", pal.gr.pnl.pnl3.gr2.gr21.xScaleScl.minvalue, "Slider Range"));
			var maxVal = parseInt(prompt("Maximum value:", pal.gr.pnl.pnl3.gr2.gr21.xScaleScl.maxvalue, "Slider Range"));
			if (isNaN(minVal)) minVal = pal.gr.pnl.pnl3.gr2.gr21.xScaleScl.minvalue;
			if (isNaN(maxVal)) maxVal = pal.gr.pnl.pnl3.gr2.gr21.xScaleScl.maxvalue;			
			
			pal.gr.pnl.pnl3.gr2.gr21.xScaleScl.minvalue = 
			pal.gr.pnl.pnl3.gr2.gr22.yScaleScl.minvalue = minVal;			 
			pal.gr.pnl.pnl3.gr2.gr23.opacityScl.minvalue = Math.max(0,minVal);
			
			pal.gr.pnl.pnl3.gr2.gr21.xScaleScl.maxvalue =
			pal.gr.pnl.pnl3.gr2.gr22.yScaleScl.maxvalue = maxVal; 
			pal.gr.pnl.pnl3.gr2.gr23.opacityScl.maxvalue = Math.min(100,maxVal);
		};
						
		pal.gr.pnl.pnl4.gr2.gr21.xRandomScl.onChange = pal.gr.pnl.pnl4.gr2.gr21.xRandomScl.onChanging = function () 
		{
			this.value = Math.floor(this.value);			
			this.parent.xRandomEt.text = this.value;
			distributeLayers.offsetPositionRandom(pal);
		};

		pal.gr.pnl.pnl4.gr2.gr21.xRandomEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 0;
			this.parent.xRandomScl.value = parseInt(this.text);
			distributeLayers.offsetPositionRandom(pal);			
		};
		
		pal.gr.pnl.pnl4.gr2.gr22.yRandomScl.onChange = pal.gr.pnl.pnl4.gr2.gr22.yRandomScl.onChanging = function () 
		{
			this.value = Math.floor(this.value);			
			this.parent.yRandomEt.text = this.value;
			distributeLayers.offsetPositionRandom(pal);
		};

		pal.gr.pnl.pnl4.gr2.gr22.yRandomEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 0;
			this.parent.yRandomScl.value = parseInt(this.text);
			distributeLayers.offsetPositionRandom(pal);			
		};		 

		pal.gr.pnl.pnl4.gr2.gr23.zRandomScl.onChange = pal.gr.pnl.pnl4.gr2.gr23.zRandomScl.onChanging = function () 
		{
			this.value = Math.floor(this.value);			
			this.parent.zRandomEt.text = this.value;
			distributeLayers.offsetPositionRandom(pal);
		};

		pal.gr.pnl.pnl4.gr2.gr23.zRandomEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 0;
			this.parent.zRandomScl.value = parseInt(this.text);
			distributeLayers.offsetPositionRandom(pal);			
		};
 
		pal.gr.pnl.pnl4.gr2.gr24.sliderRangeBtn.onClick = function () 
		{
			var minVal = parseInt(prompt("Minimum value:", pal.gr.pnl.pnl4.gr2.gr21.xRandomScl.minvalue, "Slider Range"));
			var maxVal = parseInt(prompt("Maximum value:", pal.gr.pnl.pnl4.gr2.gr21.xRandomScl.maxvalue, "Slider Range"));
			if (isNaN(minVal)) minVal = pal.gr.pnl.pnl4.gr2.gr21.xRandomScl.minvalue;
			if (isNaN(maxVal)) maxVal = pal.gr.pnl.pnl4.gr2.gr21.xRandomScl.maxvalue;
			 
			pal.gr.pnl.pnl4.gr2.gr21.xRandomScl.minvalue = 
			pal.gr.pnl.pnl4.gr2.gr22.yRandomScl.minvalue = 
			pal.gr.pnl.pnl4.gr2.gr23.zRandomScl.minvalue = minVal;
			
			pal.gr.pnl.pnl4.gr2.gr21.xRandomScl.maxvalue = 
			pal.gr.pnl.pnl4.gr2.gr22.yRandomScl.maxvalue = 
			pal.gr.pnl.pnl4.gr2.gr23.zRandomScl.maxvalue = maxVal;
		};
		
		pal.gr.pnl.pnl5.gr2.gr21.xRandomScl.onChange = pal.gr.pnl.pnl5.gr2.gr21.xRandomScl.onChanging = function () 
		{
			this.value = Math.floor(this.value);			
			this.parent.xRandomEt.text = this.value;
			distributeLayers.offsetRotationRandom(pal, "x");
		};

		pal.gr.pnl.pnl5.gr2.gr21.xRandomEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 0;
			this.parent.xRandomScl.value = parseInt(this.text);
			distributeLayers.offsetRotationRandom(pal, "x");			
		};
		
		pal.gr.pnl.pnl5.gr2.gr22.yRandomScl.onChange = pal.gr.pnl.pnl5.gr2.gr22.yRandomScl.onChanging = function () 
		{
			this.value = Math.floor(this.value);			
			this.parent.yRandomEt.text = this.value;
			distributeLayers.offsetRotationRandom(pal, "y");
		};

		pal.gr.pnl.pnl5.gr2.gr22.yRandomEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 0;
			this.parent.yRandomScl.value = parseInt(this.text);
			distributeLayers.offsetRotationRandom(pal, "y");			
		};		 

		pal.gr.pnl.pnl5.gr2.gr23.zRandomScl.onChange = pal.gr.pnl.pnl5.gr2.gr23.zRandomScl.onChanging = function () 
		{
			this.value = Math.floor(this.value);			
			this.parent.zRandomEt.text = this.value;
			distributeLayers.offsetRotationRandom(pal, "z");
		};

		pal.gr.pnl.pnl5.gr2.gr23.zRandomEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 0;
			this.parent.zRandomScl.value = parseInt(this.text);
			distributeLayers.offsetRotationRandom(pal, "z");			
		};
 
		pal.gr.pnl.pnl5.gr2.gr24.sliderRangeBtn.onClick = function () 
		{
			var minVal = parseInt(prompt("Minimum value:", pal.gr.pnl.pnl5.gr2.gr21.xRandomScl.minvalue, "Slider Range"));
			var maxVal = parseInt(prompt("Maximum value:", pal.gr.pnl.pnl5.gr2.gr21.xRandomScl.maxvalue, "Slider Range"));
			if (isNaN(minVal)) minVal = pal.gr.pnl.pnl5.gr2.gr21.xRandomScl.minvalue;
			if (isNaN(maxVal)) maxVal = pal.gr.pnl.pnl5.gr2.gr21.xRandomScl.maxvalue;
						
			pal.gr.pnl.pnl5.gr2.gr21.xRandomScl.minvalue = 
			pal.gr.pnl.pnl5.gr2.gr22.yRandomScl.minvalue = 
			pal.gr.pnl.pnl5.gr2.gr23.zRandomScl.minvalue = minVal;
			
			pal.gr.pnl.pnl5.gr2.gr21.xRandomScl.maxvalue = 
			pal.gr.pnl.pnl5.gr2.gr22.yRandomScl.maxvalue = 
			pal.gr.pnl.pnl5.gr2.gr23.zRandomScl.maxvalue = maxVal;
		};
		
		pal.gr.pnl.pnl6.gr2.gr21.xRandomScl.onChange = pal.gr.pnl.pnl6.gr2.gr21.xRandomScl.onChanging = function () 
		{
			this.value = Math.floor(this.value);			
			this.parent.xRandomEt.text = this.value;
			distributeLayers.offsetScaleRandom(pal, "x");
		};

		pal.gr.pnl.pnl6.gr2.gr21.xRandomEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 0;
			this.parent.xRandomScl.value = parseInt(this.text);
			distributeLayers.offsetScaleRandom(pal, "x");			
		};
		
		pal.gr.pnl.pnl6.gr2.gr22.yRandomScl.onChange = pal.gr.pnl.pnl6.gr2.gr22.yRandomScl.onChanging = function () 
		{
			this.value = Math.floor(this.value);			
			this.parent.yRandomEt.text = this.value;
			distributeLayers.offsetScaleRandom(pal, "y");
		};

		pal.gr.pnl.pnl6.gr2.gr22.yRandomEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 0;
			this.parent.yRandomScl.value = parseInt(this.text);
			distributeLayers.offsetScaleRandom(pal, "y");			
		};		
		
		pal.gr.pnl.pnl6.gr2.gr23.opacityRandomScl.onChange = pal.gr.pnl.pnl6.gr2.gr23.opacityRandomScl.onChanging = function () 
		{
			this.value = Math.floor(this.value);			
			this.parent.opacityRandomEt.text = this.value;
			distributeLayers.offsetOpacityRandom(pal);
		};

		pal.gr.pnl.pnl6.gr2.gr23.opacityRandomEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 0;
			else if (parseFloat(this.text) < 0) this.text = 0;
			else if (parseFloat(this.text) > 100) this.text = 100;
			this.parent.opacityRandomScl.value = parseInt(this.text);
			distributeLayers.offsetOpacityRandom(pal);			
		};		

		pal.gr.pnl.pnl6.gr2.gr24.sliderRangeBtn.onClick = function () 
		{
			var minVal = parseInt(prompt("Minimum value:", pal.gr.pnl.pnl6.gr2.gr21.xRandomScl.minvalue, "Slider Range"));
			var maxVal = parseInt(prompt("Maximum value:", pal.gr.pnl.pnl6.gr2.gr21.xRandomScl.maxvalue, "Slider Range"));
			if (isNaN(minVal)) minVal = pal.gr.pnl.pnl6.gr2.gr21.xRandomScl.minvalue;
			if (isNaN(maxVal)) maxVal = pal.gr.pnl.pnl6.gr2.gr21.xRandomScl.maxvalue;			
			
			pal.gr.pnl.pnl6.gr2.gr21.xRandomScl.minvalue = 
			pal.gr.pnl.pnl6.gr2.gr22.yRandomScl.minvalue = minVal;		 
			pal.gr.pnl.pnl6.gr2.gr23.opacityRandomScl.minvalue = Math.max(0,minVal);
			
			pal.gr.pnl.pnl6.gr2.gr21.xRandomScl.maxvalue =
			pal.gr.pnl.pnl6.gr2.gr22.yRandomScl.maxvalue = maxVal; 
			pal.gr.pnl.pnl6.gr2.gr23.opacityRandomScl.maxvalue = Math.min(100,maxVal);
		};
						
		pal.gr.pnl.pnl7.gr2.gr21.factorScl.onChange = pal.gr.pnl.pnl7.gr2.gr21.factorScl.onChanging = function () 
		{
			//this.value = this.value.toFixed(2);			
			this.parent.factorEt.text = this.value;
			distributeLayers.offsetPosition(pal);
			distributeLayers.offsetRotation(pal, "x");
			distributeLayers.offsetRotation(pal, "y");
			distributeLayers.offsetRotation(pal, "z");
			distributeLayers.offsetScale(pal);
			distributeLayers.offsetOpacity(pal); 
		};		

		pal.gr.pnl.pnl7.gr2.gr21.factorEt.onChange = function () 
		{
			if (isNaN(this.text)) this.text = 1.0;
			this.parent.factorScl.value = parseFloat(this.text).toFixed(2);
			distributeLayers.offsetPosition(pal); 
			distributeLayers.offsetRotation(pal, "x");
			distributeLayers.offsetRotation(pal, "y");
			distributeLayers.offsetRotation(pal, "z");
			distributeLayers.offsetScale(pal);
			distributeLayers.offsetOpacity(pal); 
		};	

		pal.gr.pnl.pnl7.gr2.gr24.sliderRangeBtn.onClick = function () 
		{
			var minVal = parseInt(prompt("Minimum value:", pal.gr.pnl.pnl7.gr2.gr21.factorScl.minvalue, "Slider Range"));
			var maxVal = parseInt(prompt("Maximum value:", pal.gr.pnl.pnl7.gr2.gr21.factorScl.maxvalue, "Slider Range"));
			if (isNaN(minVal)) minVal = pal.gr.pnl.pnl7.gr2.gr21.factorScl.minvalue;
			if (isNaN(maxVal)) maxVal = pal.gr.pnl.pnl7.gr2.gr21.factorScl.maxvalue;
						
			pal.gr.pnl.pnl7.gr2.gr21.factorScl.minvalue = minVal;			
			pal.gr.pnl.pnl7.gr2.gr21.factorScl.maxvalue = maxVal;
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
	
	// Offsets position of the selected layers along x/y/z axis 
	this.offsetPosition = function (pal)
	{
		try
		{
			var comp = app.project.activeItem;
			var err = this.noCompErr;
			if (this.checkActiveItem(comp)) throw(err);
					
			var selLayers = comp.selectedLayers;
			var err = this.noLayersErr;
			if (selLayers.length < 1) throw(err);
			
			var xOffset = parseInt(pal.gr.pnl.pnl1.gr2.gr21.xOffsetEt.text);
			var yOffset = parseInt(pal.gr.pnl.pnl1.gr2.gr22.yOffsetEt.text);
			var zOffset = parseInt(pal.gr.pnl.pnl1.gr2.gr23.zOffsetEt.text);
			var factor = parseFloat(pal.gr.pnl.pnl7.gr2.gr21.factorEt.text);
			
			var prevOffset = [xOffset, yOffset, zOffset];
			
			app.beginUndoGroup(this.scriptTitle);
			 
			var err = this.duringProcessErr;			 
			try
			{
				selLayers[0].threeDLayer = true;
				 
				for (var i = 1; i < selLayers.length; i++)
				{
					selLayers[i].threeDLayer = true;
					
					if (!selLayers[i].position.dimensionsSeparated)
					{				 
						var prevP = selLayers[i-1].position;
						var curP = selLayers[i].position;
					
						var curOffset = factor * prevOffset;				
						var newP = prevP.valueAtTime(comp.time, false) + curOffset;							
					
						curP.numKeys ? curP.setValueAtTime(comp.time, newP) : curP.setValue(newP);
					
						prevOffset = curOffset;
					}
					else
					{
						var prevPx = selLayers[i-1].property("ADBE Transform Group").property("ADBE Position_0");
						var prevPy = selLayers[i-1].property("ADBE Transform Group").property("ADBE Position_1");
						var prevPz = selLayers[i-1].property("ADBE Transform Group").property("ADBE Position_2");
						var curPx = selLayers[i].property("ADBE Transform Group").property("ADBE Position_0");
						var curPy = selLayers[i].property("ADBE Transform Group").property("ADBE Position_1");
						var curPz = selLayers[i].property("ADBE Transform Group").property("ADBE Position_2");
					
						var curOffsetx = factor * prevOffset[0];
						var curOffsety = factor * prevOffset[1];
						var curOffsetz = factor * prevOffset[2];				
						var newPx = prevPx.valueAtTime(comp.time, false) + curOffsetx;
						var newPy = prevPy.valueAtTime(comp.time, false) + curOffsety;
						var newPz = prevPz.valueAtTime(comp.time, false) + curOffsetz;
						
						curPx.numKeys ? curPx.setValueAtTime(comp.time, newPx) : curPx.setValue(newPx);
						curPy.numKeys ? curPy.setValueAtTime(comp.time, newPy) : curPy.setValue(newPy);
						curPz.numKeys ? curPz.setValueAtTime(comp.time, newPz) : curPz.setValue(newPz);
					
						prevOffset = [curOffsetx,curOffsety,curOffsetz];
					}
				}
			}
			catch(e)
			{
				throw(err);
			}
				  
			app.endUndoGroup();
		}
		catch(err)
		{
			utils.throwErr(err);
		}				
	};

	// Offsets x/y/z rotation of the selected layers 
	this.offsetRotation = function (pal, axis)
	{
		try
		{
			var comp = app.project.activeItem;
			var err = this.noCompErr;
			if (this.checkActiveItem(comp)) throw(err);
					
			var selLayers = comp.selectedLayers;
			var err = this.noLayersErr;
			if (selLayers.length < 1) throw(err);
			
			var prevOffset = (axis == "x") ? parseInt(pal.gr.pnl.pnl2.gr2.gr21.xRotationEt.text) : 
							((axis == "y") ? parseInt(pal.gr.pnl.pnl2.gr2.gr22.yRotationEt.text) : parseInt(pal.gr.pnl.pnl2.gr2.gr23.zRotationEt.text));

			var factor = parseFloat(pal.gr.pnl.pnl7.gr2.gr21.factorEt.text);
			
			app.beginUndoGroup(this.scriptTitle);
			 
			 var err = this.duringProcessErr;			 
			 try
			 {
				 if (!selLayers[0].threeDLayer) selLayers[0].threeDLayer = true;
				 
				 for (var i = 1; i < selLayers.length; i++)
				 {
					 if (!selLayers[i].threeDLayer) selLayers[i].threeDLayer = true;
					 
					 var prevR, curR;
					 if (axis == "x") 
					 {
						 prevR = selLayers[i-1].rotationX;
						 curR = selLayers[i].rotationX;
					 }
					 else if (axis == "y")
					 {
						 prevR = selLayers[i-1].rotationY;
						 curR = selLayers[i].rotationY;
					 }
					 else
					 {
						 prevR = selLayers[i-1].rotationZ;
						 curR = selLayers[i].rotationZ;
					 }
					
					 var curOffset = factor * prevOffset;							   
					 var newR = prevR.valueAtTime(comp.time, false) + curOffset;							
					
					 curR.numKeys ? curR.setValueAtTime(comp.time, newR) : curR.setValue(newR);
					
					 prevOffset = curOffset;				
				 }
			 }
			 catch(e)
			 {
				 throw(err);
			 }
				  
			app.endUndoGroup();
		}
		catch(err)
		{
			utils.throwErr(err);
		}				
	};

	// Offsets scale of the selected layers 
	this.offsetScale = function (pal)
	{
		try
		{
			var comp = app.project.activeItem;
			var err = this.noCompErr;
			if (this.checkActiveItem(comp)) throw(err);
					
			var selLayers = comp.selectedLayers;
			var err = this.noLayersErr;
			if (selLayers.length < 1) throw(err);
			
			var xOffset = parseInt(pal.gr.pnl.pnl3.gr2.gr21.xScaleEt.text);
			var yOffset = parseInt(pal.gr.pnl.pnl3.gr2.gr22.yScaleEt.text);							
			var factor = parseFloat(pal.gr.pnl.pnl7.gr2.gr21.factorEt.text);
			
			var prevOffset = [xOffset, yOffset, 0];
			
			app.beginUndoGroup(this.scriptTitle);
			 
			 var err = this.duringProcessErr;			 
			 try
			 {
				 if (!selLayers[0].threeDLayer) selLayers[0].threeDLayer = true;
				 
				 for (var i = 1; i < selLayers.length; i++)
				 {
					 if (!selLayers[i].threeDLayer) selLayers[i].threeDLayer = true;
					 
					 var prevS = selLayers[i-1].scale;
					 var curS = selLayers[i].scale;
					
					 var curOffset = factor * prevOffset;							   
					 var newS = prevS.valueAtTime(comp.time, false) + curOffset;							
					
					 curS.numKeys ? curS.setValueAtTime(comp.time, newS) : curS.setValue(newS);
					
					 prevOffset = curOffset;				
				 }
			 }
			 catch(e)
			 {
				 throw(err);
			 }
				  
			app.endUndoGroup();
		}
		catch(err)
		{
			utils.throwErr(err);
		}				
	};
	
	// Offsets opacity of the selected layers 
	this.offsetOpacity = function (pal)
	{
		try
		{
			var comp = app.project.activeItem;
			var err = this.noCompErr;
			if (this.checkActiveItem(comp)) throw(err);
					
			var selLayers = comp.selectedLayers;
			var err = this.noLayersErr;
			if (selLayers.length < 1) throw(err);
			
			var offset = parseInt(pal.gr.pnl.pnl3.gr2.gr23.opacityEt.text);							
			var factor = parseFloat(pal.gr.pnl.pnl7.gr2.gr21.factorEt.text);
			
			var prevOffset = offset;
			
			app.beginUndoGroup(this.scriptTitle);
			 
			 var err = this.duringProcessErr;			 
			 try
			 {
				 for (var i = 1; i < selLayers.length; i++)
				 {
					 var prevO = selLayers[i-1].opacity;
					 var curO = selLayers[i].opacity;
					
					 var curOffset = factor * prevOffset;							   
					 var newO = Math.max(0, Math.min(100, prevO.valueAtTime(comp.time, false) - curOffset));							
					
					 curO.numKeys ? curO.setValueAtTime(comp.time, newO) : curO.setValue(newO);
					
					 prevOffset = curOffset;								
				 }
			 }
			 catch(e)
			 {
				 throw(err);
			 }
				  
			app.endUndoGroup();
		}
		catch(err)
		{
			utils.throwErr(err);
		}				
	};
	
	// Randomly offsets position of the selected layers 
	this.offsetPositionRandom = function (pal)
	{
		try
		{
			var comp = app.project.activeItem;
			var err = this.noCompErr;
			if (this.checkActiveItem(comp)) throw(err);
					
			var selLayers = comp.selectedLayers;
			var err = this.noLayersErr;
			if (selLayers.length < 1) throw(err);
			
			var xRandom = parseInt(pal.gr.pnl.pnl4.gr2.gr21.xRandomEt.text);
			var yRandom = parseInt(pal.gr.pnl.pnl4.gr2.gr22.yRandomEt.text);
			var zRandom = parseInt(pal.gr.pnl.pnl4.gr2.gr23.zRandomEt.text);
			
			app.beginUndoGroup(this.scriptTitle);
			 
			var err = this.duringProcessErr;			 
			try
			{
				for (var i = 1; i < selLayers.length; i++)
				{
					if (!selLayers[i].position.dimensionsSeparated)
					{
						var curP = selLayers[i].position;
						var offset = [-xRandom + 2*xRandom*Math.random(), -yRandom + 2*yRandom*Math.random(), -zRandom + 2*zRandom*Math.random()];
						var newP = curP.valueAtTime(comp.time, false) + offset;							
					
						curP.numKeys ? curP.setValueAtTime(comp.time, newP) : curP.setValue(newP);
					}
					else
					{
						var curPx = selLayers[i].property("ADBE Transform Group").property("ADBE Position_0");
						var curPy = selLayers[i].property("ADBE Transform Group").property("ADBE Position_1");
						var curPz = selLayers[i].property("ADBE Transform Group").property("ADBE Position_2");
						var offsetx = -xRandom + 2*xRandom*Math.random();
						var offsety = -yRandom + 2*yRandom*Math.random();
						var offsetz = -zRandom + 2*zRandom*Math.random();
						var newPx = curPx.valueAtTime(comp.time, false) + offsetx;
						var newPy = curPy.valueAtTime(comp.time, false) + offsety;
						var newPz = curPz.valueAtTime(comp.time, false) + offsetz;
						
						curPx.numKeys ? curPx.setValueAtTime(comp.time, newPx) : curPx.setValue(newPx);
						curPy.numKeys ? curPy.setValueAtTime(comp.time, newPy) : curPy.setValue(newPy);
						curPz.numKeys ? curPz.setValueAtTime(comp.time, newPz) : curPz.setValue(newPz);
					}
				 }
			 }
			 catch(e)
			 {
				 throw(err);
			 }
				  
			app.endUndoGroup();
		}
		catch(err)
		{
			utils.throwErr(err);
		}				
	};

	// Randomly offsets x/y/z rotation of the selected layers 
	this.offsetRotationRandom = function (pal, axis)
	{
		try
		{
			var comp = app.project.activeItem;
			var err = this.noCompErr;
			if (this.checkActiveItem(comp)) throw(err);
					
			var selLayers = comp.selectedLayers;
			var err = this.noLayersErr;
			if (selLayers.length < 1) throw(err);
			
			var xRandom = parseInt(pal.gr.pnl.pnl5.gr2.gr21.xRandomEt.text);
			var yRandom = parseInt(pal.gr.pnl.pnl5.gr2.gr22.yRandomEt.text);
			var zRandom = parseInt(pal.gr.pnl.pnl5.gr2.gr23.zRandomEt.text);
											 
			app.beginUndoGroup(this.scriptTitle);
			 
			 var err = this.duringProcessErr;			 
			 try
			 {
				 for (var i = 1; i < selLayers.length; i++)
				 {
					 var curR = (axis == "x") ? selLayers[i].rotationX : ((axis == "y") ? selLayers[i].rotationY : selLayers[i].rotationZ);
					
					 var offset = (axis == "x") ? -xRandom + 2*xRandom*Math.random() : 
								 ((axis == "y") ? -yRandom + 2*yRandom*Math.random() : -zRandom + 2*zRandom*Math.random());
								
					 var newR = curR.valueAtTime(comp.time, false) + offset;							
					
					 curR.numKeys ? curR.setValueAtTime(comp.time, newR) : curR.setValue(newR);
				 }
			 }
			 catch(e)
			 {
				 throw(err);
			 }
				  
			app.endUndoGroup();
		}
		catch(err)
		{
			utils.throwErr(err);
		}				
	};	
	
	// Randomly offsets scale of the selected layers 
	this.offsetScaleRandom = function (pal, axis)
	{
		try
		{
			var comp = app.project.activeItem;
			var err = this.noCompErr;
			if (this.checkActiveItem(comp)) throw(err);
					
			var selLayers = comp.selectedLayers;
			var err = this.noLayersErr;
			if (selLayers.length < 1) throw(err);
			
			var sRandom = (axis == "x") ? parseInt(pal.gr.pnl.pnl6.gr2.gr21.xRandomEt.text) : parseInt(pal.gr.pnl.pnl6.gr2.gr22.yRandomEt.text);
			var uniform = pal.gr.pnl.pnl6.gr3.uniformCb.value;
			
			app.beginUndoGroup(this.scriptTitle);
			 
			var err = this.duringProcessErr;			 
			try
			{
				for (var i = 1; i < selLayers.length; i++)
				{
					var curS = selLayers[i].scale;
					var offset = (axis == "x") ? [-sRandom + 2*sRandom*Math.random(), 0, 0] : [0, -sRandom + 2*sRandom*Math.random(), 0];
					if (uniform && axis == "x") offset[1] = offset[0];
					else if (uniform && axis == "y") offset[0] = offset[1]; 
					var newS = curS.valueAtTime(comp.time, false) + offset;							
					
					curS.numKeys ? curS.setValueAtTime(comp.time, newS) : curS.setValue(newS);
				 }
			 }
			 catch(e)
			 {
				 throw(err);
			 }
				  
			app.endUndoGroup();
		}
		catch(err)
		{
			utils.throwErr(err);
		}				
	};
	
	// Randomly offsets opacity of the selected layers 
	this.offsetOpacityRandom = function (pal)
	{
		try
		{
			var comp = app.project.activeItem;
			var err = this.noCompErr;
			if (this.checkActiveItem(comp)) throw(err);
					
			var selLayers = comp.selectedLayers;
			var err = this.noLayersErr;
			if (selLayers.length < 1) throw(err);
			
			var oRandom = parseInt(pal.gr.pnl.pnl6.gr2.gr23.opacityRandomEt.text);
			
			app.beginUndoGroup(this.scriptTitle);
			 
			var err = this.duringProcessErr;			 
			try
			{
				for (var i = 1; i < selLayers.length; i++)
				{
					var curO = selLayers[i].opacity;
					var offset = -oRandom + 2*oRandom*Math.random();
					var newO = Math.max(0, Math.min(100, curO.valueAtTime(comp.time, false) + offset));							
					
					curO.numKeys ? curO.setValueAtTime(comp.time, newO) : curO.setValue(newO);
				 }
			 }
			 catch(e)
			 {
			 	throw(err);
			 }
				  
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
function DistributeLayersUtils()
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
new DistributeLayers().run(this);
