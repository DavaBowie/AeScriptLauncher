{
//   LayerCurveShifter.jsx
//   Feb 2008 Lloyd Alvarez  http://aescripts.com
//	 
//   Shift layers using curves
//
//

// 2.1 Fixed prefs bug - Apr 2011
// 2.0 Added Snap to Frame option - March 2011

	function RandomLayerShifter(thisObj)
	{
		// Globals
		var rls_Data = new Object();	
		rls_Data.scriptName = "层曲线偏移Layer Curve Shifter";
		rls_Data.scriptTitle = rls_Data.scriptName + " v1.0";
		rls_Data.strButton = "偏移";
         rls_Data.strSnapBtn = "吸附到帧";
         rls_Data.strAbsBtn = "正值";
         rls_Data.strAbsBtnHelp = "The curve is based on a sine curve. The curve will only be positive.  Like a bouncing ball.";
         rls_Data.strSnapBtnHelp = "吸附到最近的帧";
          rls_Data.curveAmp = "曲线振幅";
         rls_Data.curveAmpHelp = "The curve is based on a sine curve. This defines how many frames the maximum point of the curve will be.";
         rls_Data.curveAmpDef = 60;
         rls_Data.curveFreq = "曲线频率";
         rls_Data.curveFreqHelp = "The curve is based on a sine curve. This defines how many curves go through the selected layers.";
         rls_Data.curveFreqDef = 1;
          rls_Data.curvePhase = "曲线相位";
         rls_Data.curvePhaseHelp = "The curve is based on a sine curve. This offsets the beginning of the curve.";
         rls_Data.curvePhaseDef = 0;
		rls_Data.strHelp = "关于";
		rls_Data.strMinAE80 = "This script requires Adobe After Effects CS3 or later.";
		rls_Data.strSelComp = "Please select an active comp to use this script.";
		rls_Data.strSelProj = "Please open a project first to use this script.";
		rls_Data.strSelLayers = "Please select select some layers to shift!";
		
		// buildUI()
		function RandomLayerShifter_buildUI(thisObj)
		{
			var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", rls_Data.scriptName, undefined, {resizeable:true});
			
			if (pal != null)
			{
				var res =
				"group { \
					orientation:'column', alignment:['left','top'], \
                    ampGrp: Group { \
                    alignment:['left','top'], \
						ampTxt: StaticText { text:'" + rls_Data.curveAmp + "'}, \
						amp: EditText {  characters:3, text:'" + rls_Data.curveAmpDef + "'}, \
                    } \
                    freqGrp: Group { \
                    alignment:['left','top'], \
						freqTxt: StaticText { text:'" + rls_Data.curveFreq + "'}, \
						freq: EditText {  characters:3, text:'" + rls_Data.curveFreqDef + "'}, \
                    } \
                        abs: Checkbox { text:'" + rls_Data.strAbsBtn +"',  helpTip:'" + rls_Data.strAbsBtnHelp +"', alignment:['left','left']}, \
                       snap: Checkbox { text:'" + rls_Data.strSnapBtn +"',  helpTip:'" + rls_Data.strSnapBtnHelp +"', alignment:['left','left']}, \
					footer: Group { \
						alignment:['fill','top'], \
						help: Button { text:'" + rls_Data.strHelp +"', maximumSize:[60,20], alignment:['left','center'] }, \
						shiftBtn: Button { text:'" + rls_Data.strButton +"', maximumSize:[60,20], alignment:['right','center'] }, \
					}, \
				} ";

				pal.grp = pal.add(res);
				
                if (parseFloat(app.version == 8)) {
				// Workaround to ensure the edittext text color is black, even at darker UI brightness levels
				var winGfx = pal.graphics;
				var darkColorBrush = winGfx.newPen(winGfx.BrushType.SOLID_COLOR, [0,0,0], 1);
				pal.grp.ampGrp.amp.graphics.foregroundColor = darkColorBrush;
				pal.grp.freqGrp.freq.graphics.foregroundColor = darkColorBrush;
                }

				pal.layout.layout(true);
				pal.grp.minimumSize = pal.grp.size;
				pal.layout.resize();
				pal.onResizing = pal.onResize = function () {this.layout.resize();}
				
				pal.grp.footer.help.onClick = function () { eval(unescape('%20%20var%20dlg%20%3D%20new%20Window%28%22palette%22%2C%20%22%u5173%u4E8E%22%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20res%20%3D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22group%20%7B%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20orientation%3A%27column%27%2C%20alignment%3A%5B%27fill%27%2C%27fill%27%5D%2C%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aboutPnl%3A%20Panel%20%7B%20properties%3A%7B%20borderStyle%3A%27sunken%27%20%7D%2C%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aboutEt%3A%20EditText%20%7B%20text%3A%27%22%20+%22%u6B64%u811A%u672C%u5141%u8BB8%u4F60%u5BF9%u9009%u62E9%u7684%u5C42%u5728%u65F6%u95F4%u7EBF%u4E0A%u6309%u66F2%u7EBF%u504F%u79FB%20%u8001%u9E70%u6C49%u5316%20%20QQ%20867753667%20%u535A%u5BA2http%3A//blog.sina.com.cn/ykcmgzs%20%20BY%20%u8001%u9E70%20%202011.1.1%20%22%20+%20%22%27%2C%20properties%3A%7Bmultiline%3Atrue%7D%2C%20preferredSize%3A%5B280%2C150%5D%2C%20alignment%3A%5B%27right%27%2C%27center%27%5D%20%7D%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20btnsGr%3A%20Group%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20%20%20%20%20%20alignment%3A%5B%27fill%27%2C%27fill%27%5D%2C%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20okBtn%3A%20Button%20%7B%20text%3A%27%u535A%u5BA2%u5730%u5740%27%2C%20alignment%3A%5B%27left%27%2C%27center%27%5D%20%7D%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20visitBtn%3A%20Button%20%7B%20text%3A%27OK%27%2C%20alignment%3A%5B%27right%27%2C%27center%27%5D%20%7D%2C%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%22%3B%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.gr%20%3D%20dlg.add%28res%29%3B%20%20%20%0D%0A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.gr.btnsGr.visitBtn.onClick%20%3D%20function%28%29%7B%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.close%28%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.gr.btnsGr.okBtn.onClick%20%3D%20function%28%29%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20url%20%3D%22http%3A//blog.sina.com.cn/ykcmgzs%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20cmd%3D%22%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28%24.os.indexOf%28%22Win%22%29%20%21%3D%20-1%29%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28File%28%22C%3A/Program%20Files/Mozilla%20Firefox/firefox.exe%22%29.exists%29%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cmd%20+%3D%20%22C%3A/Program%20Files/Mozilla%20Firefox/firefox.exe%20%22%20+%20url%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20else%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cmd%20+%3D%20%22C%3A/Program%20Files/Internet%20Explorer/iexplore.exe%20%22%20+%20url%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20else%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cmd%20+%3D%20%22open%20%5C%22%22%20+%20url%20+%20%22%5C%22%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20try%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20system.callSystem%28cmd%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20catch%28e%29%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert%28e%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.center%28%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.show%28%29%3B'))
}
				pal.grp.footer.shiftBtn.onClick =  shiftEm;

			} //close if pal!=null
			
			return pal;
		} // close LayerShift_builtUI
		
		
		
		
		// main function

		function shiftEm(palObj)
		{
                app.beginUndoGroup(rls_Data.scriptName);
				var proj = app.project;
				var undoStr = rls_Data.scriptName;
				if (proj){
				var myComp = app.project.activeItem;
			if (myComp != null && (myComp instanceof CompItem)){
				var selectedLayers = myComp.selectedLayers;
				if (selectedLayers.length != 0) {
				
				var amp = parseFloat(this.parent.parent.ampGrp.amp.text)*myComp.frameDuration;
                 var frequency  = parseFloat(this.parent.parent.freqGrp.freq.text);
                 //var phase  = parseFloat(this.parent.parent.phaseGrp.phase.text);
                 var phase = 0;

				for (i = 0; i < selectedLayers.length; ++i) {
	
                  var length = selectedLayers.length-1;
                  var freq = frequency;
                  var sin = Math.sin((i/length)*freq*2*Math.PI + phase) * amp;
                  if (this.parent.parent.abs.value) sin = Math.abs(sin);
				var shiftAmount = sin;
                
                    if (this.parent.parent.snap.value) shiftAmount = Math.round(shiftAmount*myComp.frameRate)/myComp.frameRate;
	
					var currentLayer = selectedLayers[i];
					currentLayer.startTime += shiftAmount;
					
					} // for close
				app.endUndoGroup();
				} // if selected layers close
			else 
			{alert(rls_Data.strSelLayers);}
				} // if myComp close
				else 
					{alert(rls_Data.strSelComp);} 
				} // if proj close
			else{alert(rls_Data.strSelProj);}
		} //shiftem close
		
		
		
		
		// main code:
		//
		
		// Prerequisites check
		if (parseFloat(app.version) < 8.0)
			alert(rls_Data.strMinAE80, rls_Data.scriptName);
		else
		{
			// Build and show the console's floating palette
			var myPal = RandomLayerShifter_buildUI(thisObj);
			if (myPal != null)
			{
				
				// Update UI values, if saved in the settings
				if (app.settings.haveSetting("aescripts", "LayerCurveShifter_Amp"))
					{myPal.grp.ampGrp.amp.text = parseInt(app.settings.getSetting("aescripts", "LayerCurveShifter_Amp"));}
				if (app.settings.haveSetting("aescripts", "LayerCurveShifter_Freq"))
					{myPal.grp.freqGrp.freq.text = parseInt(app.settings.getSetting("aescripts", "LayerCurveShifter_Freq"));}
                   if (app.settings.haveSetting("aescripts", "LayerCurveShifter_SnapToFrame"))
					{ myPal.grp.snap.value =! (app.settings.getSetting("aescripts", "LayerCurveShifter_SnapToFrame") == "false");}
                     if (app.settings.haveSetting("aescripts", "LayerCurveShifter_Abs"))
					{ myPal.grp.abs.value =! (app.settings.getSetting("aescripts", "LayerCurveShifter_Abs") == "false");}
			// Save current UI settings upon closing the palette
				myPal.onClose = function()
				{
					app.settings.saveSetting("aescripts", "LayerCurveShifter_Amp", myPal.grp.ampGrp.amp.text );
					app.settings.saveSetting("aescripts", "LayerCurveShifter_Freq", myPal.grp.freqGrp.freq.text );
                        app.settings.saveSetting("aescripts", "LayerCurveShifter_SnapToFrame", myPal.grp.snap.value);
                         app.settings.saveSetting("aescripts", "LayerCurveShifter_Abs", myPal.grp.abs.value);
				}
				
				
				if (myPal instanceof Window)
				{
					// Show the palette
					myPal.center();
					myPal.show();
				}
				else
					{myPal.layout.layout(true);}
			}  // if myPal close
		} // prereq close
	} //layer shifter close
	
	RandomLayerShifter(this);
} //main close
