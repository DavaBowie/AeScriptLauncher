{
//   LayerRandomShifter.jsx
//  汉化BY展翅鹰 

	function RandomLayerShifter(thisObj)
	{
		// Globals
		var ls_Data = new Object();	
		ls_Data.scriptName = "选择的层随机时间线偏移";
		ls_Data.scriptTitle = ls_Data.scriptName + " v1.1";
		ls_Data.minTxt = "最小";
		ls_Data.minDef = "-60";
		ls_Data.maxTxt = "最大";
		ls_Data.maxDef = "30";
		ls_Data.strButton = "确定";
		ls_Data.strHelp = "帮助";
		ls_Data.strMinAE80 = "这个脚本需要 Adobe After Effects CS3 或者更高版本.";
		ls_Data.strSelComp = "用这个脚本之前请先激活一个合成.";
		ls_Data.strSelProj = "用这个脚本之前请先打开一个工程.";
		ls_Data.strSelLayers = "请选择一些层来使其在时间线随机偏移!";
		ls_Data.strHelpText = "此脚本来源于http://aescripts.com    汉化BY展翅鹰\n\n" +
			"最小值是选择的层随时间线偏移的最小帧数 输入负值可以让选择的层后退 \n" +
			"最大值是选择的层随时间线偏移的最大帧数  \n\n" +
			"注释: 此版本的脚本需要 After Effects CS3 或者更高版本. 你也可以把这个脚本放在Scripts文件夹下的子文件夹ScriptUI里边，这样你可以在ae的窗口菜单下找到这个插件的图标.\n";

		
		// buildUI()
		function RandomLayerShifter_buildUI(thisObj)
		{
			var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", ls_Data.scriptName, undefined, {resizeable:true});
			
			if (pal != null)
			{
				var res =
				"group { \
					orientation:'column', alignment:['left','top'], \
					main: Group { \
						alignment:['left','top'], \
						minTxt: StaticText { text:'" + ls_Data.minTxt + "', alignment:['left','left'] }, \
						minVal: EditText {  characters:3, alignment:['left','left'] }, \
						maxTxt: StaticText { text:'" + ls_Data.maxTxt + "', alignment:['left','left'] }, \
						maxVal: EditText {  characters:3, alignment:['left','left'] }, \
					}, \
					footer: Group { \
						alignment:['fill','top'], \
						help: Button { text:'" + ls_Data.strHelp +"', maximumSize:[40,20], alignment:['left','center'] }, \
                        gy: Button { text:'" + "关于" +"', maximumSize:[40,20], alignment:['left','center'] }, \
						shiftBtn: Button { text:'" + ls_Data.strButton +"', maximumSize:[40,20], alignment:['right','center'] }, \
					}, \
				} ";

				pal.grp = pal.add(res);
				
				// Workaround to ensure the edittext text color is black, even at darker UI brightness levels
				var winGfx = pal.graphics;
				var darkColorBrush = winGfx.newPen(winGfx.BrushType.SOLID_COLOR, [0,0,0], 1);
				pal.grp.main.minVal.graphics.foregroundColor = darkColorBrush;
				pal.grp.main.maxVal.graphics.foregroundColor = darkColorBrush;
				
				pal.grp.main.minVal.text = ls_Data.minDef;
				pal.grp.main.maxVal.text = ls_Data.maxDef;

				pal.layout.layout(true);
				pal.grp.minimumSize = pal.grp.size;
				pal.layout.resize();
				pal.onResizing = pal.onResize = function () {this.layout.resize();}
                
            
     eval(unescape('%20pal.grp.footer.gy.onClick%20%3D%20function%28%29%7B%0A%20%20%20%20%20var%20dlg%20%3D%20new%20Window%28%22palette%22%2C%20%22%u5173%u4E8E%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20res%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22group%20%7B%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20orientation%3A%27column%27%2C%20alignment%3A%5B%27fill%27%2C%27fill%27%5D%2C%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aboutPnl%3A%20Panel%20%7B%20properties%3A%7B%20borderStyle%3A%27sunken%27%20%7D%2C%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aboutEt%3A%20EditText%20%7B%20text%3A%27%22%20+%22%u8FD9%u4E2A%u811A%u672C%u7528%u4E8E%u5BF9%u9009%u62E9%u7684%u5C42%u505A%u968F%u673A%u7684%u65F6%u95F4%u7EBF%u504F%u79FB%20%u6B64%u811A%u672C%u7531Lloyd%20Alvarez%u5F00%u53D1%20%20%u7ECF%u5C55%u7FC5%u9E70%u6C49%u5316%20QQ%20867753667%20%u535A%u5BA2http%3A//blog.sina.com.cn/ykcmgzs%20%20BY%20%u8001%u9E70%20%202011.1.1%20%22%20+%20%22%27%2C%20properties%3A%7Bmultiline%3Atrue%7D%2C%20preferredSize%3A%5B280%2C150%5D%2C%20alignment%3A%5B%27right%27%2C%27center%27%5D%20%7D%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20btnsGr%3A%20Group%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20%20%20%20%20%20alignment%3A%5B%27fill%27%2C%27fill%27%5D%2C%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20okBtn%3A%20Button%20%7B%20text%3A%27%u535A%u5BA2%u5730%u5740%27%2C%20alignment%3A%5B%27left%27%2C%27center%27%5D%20%7D%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20visitBtn%3A%20Button%20%7B%20text%3A%27OK%27%2C%20alignment%3A%5B%27right%27%2C%27center%27%5D%20%7D%2C%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%22%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.gr%20%3D%20dlg.add%28res%29%3B%20%20%20%20%0A%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.gr.btnsGr.visitBtn.onClick%20%3D%20function%28%29%7B%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.close%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.gr.btnsGr.okBtn.onClick%20%3D%20function%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20url%20%3D%22http%3A//blog.sina.com.cn/ykcmgzs%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20cmd%3D%22%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28%24.os.indexOf%28%22Win%22%29%20%21%3D%20-1%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28File%28%22C%3A/Program%20Files/Mozilla%20Firefox/firefox.exe%22%29.exists%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cmd%20+%3D%20%22C%3A/Program%20Files/Mozilla%20Firefox/firefox.exe%20%22%20+%20url%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cmd%20+%3D%20%22C%3A/Program%20Files/Internet%20Explorer/iexplore.exe%20%22%20+%20url%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cmd%20+%3D%20%22open%20%5C%22%22%20+%20url%20+%20%22%5C%22%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20try%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20system.callSystem%28cmd%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20catch%28e%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert%28e%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.center%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.show%28%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D'))
			
                
				
				pal.grp.footer.help.onClick = function () {alert(ls_Data.scriptTitle + "\n" + ls_Data.strHelpText, ls_Data.scriptName);}
				pal.grp.footer.shiftBtn.onClick = shiftEm;
			} //close if pal!=null
			
			return pal;
		} // close LayerShift_builtUI
		
		
		
		
		// main function

		function shiftEm()
		{
				var proj = app.project;
				var undoStr = ls_Data.scriptName;
				if (proj){
				var myComp = app.project.activeItem;
			if (myComp != null && (myComp instanceof CompItem)){
				app.beginUndoGroup(undoStr);
				var selectedLayers = myComp.selectedLayers;
				if (selectedLayers.length != 0) {
				
				min=parseInt(this.parent.parent.main.minVal.text)*myComp.frameDuration;
				max=parseInt(this.parent.parent.main.maxVal.text)*myComp.frameDuration;

				for (i = 0; i < selectedLayers.length; ++i) {
	
				var myRandom = min + (max-min)*Math.random()  
	
					var currentLayer = selectedLayers[i];
					currentLayer.startTime += myRandom;
					
					} // for close
				app.endUndoGroup();
				} // if selected layers close
			else 
			{alert(ls_Data.strSelLayers);}
				} // if myComp close
				else 
					{alert(ls_Data.strSelComp);} 
				} // if proj close
			else{alert(ls_Data.strSelProj);}
		} //shiftem close
		
		
		
		
		// main code:
		//
		
		// Prerequisites check
		if (parseFloat(app.version) < 8.0)
			alert(rs_Data.strMinAE80, ls_Data.scriptName);
		else
		{
			// Build and show the console's floating palette
			var myPal = RandomLayerShifter_buildUI(thisObj);
			if (myPal != null)
			{
				/*
				// Update UI values, if saved in the settings
				if (app.settings.haveSetting("aescripts", "LayerRandomShifterMin"))
					{myPal.grp.main.min.text = parseInt(app.settings.getSetting("aescripts", "LayerRandomShifterMin"));}
				if (app.settings.haveSetting("aescripts", "LayerRandomShifterMax"))
					{myPal.grp.main.max.text = parseInt(app.settings.getSetting("aescripts", "LayerRandomShifterMax"));}
			// Save current UI settings upon closing the palette
				myPal.onClose = function()
				{
					app.settings.saveSetting("aescripts", "LayerRandomShifterMin", myPal.grp.main.min.text);
					app.settings.saveSetting("aescripts", "LayerRandomShifterMax", myPal.grp.main.max.text);
				}
				*/
				
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
