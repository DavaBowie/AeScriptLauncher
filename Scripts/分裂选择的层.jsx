{
	// rd_Slicer.jsx
	// Copyright (c) 2006-2007 redefinery (Jeffrey R. Almasol). All rights reserved.
	
	//
	function rd_Slicer(thisObj)
	{
		// Globals
		
		var rd_SlicerData = new Object();	// Store globals in an object
		rd_SlicerData.scriptName = "分裂选择的层";
		rd_SlicerData.scriptTitle = rd_SlicerData.scriptName + " v2.0";
		
		rd_SlicerData.strRows = {en: "行:"};
		rd_SlicerData.strCols = {en: "列:"};
		rd_SlicerData.strMargin = {en: "间距:"}
		rd_SlicerData.strRoundness = {en: "圆角:"};
		rd_SlicerData.strParentNull = {en: "生成空物体作为其父物体"};
		rd_SlicerData.strUseAlphaAdd = {en: "使用alpha叠加混合方式"};
		rd_SlicerData.strSlice = {en: "生成阵列"};
		rd_SlicerData.strHelp = {en: "帮助"}
		rd_SlicerData.strErrNoCompSel = {en: "不能运行. 请选择一个单独的层或者在项目窗口中重新打开一个合成 然后再试一次。"};
		rd_SlicerData.strErrNoSingleAVLayerSel = {en: "不能运行,请选择一个单独的视频或者固态层  然后再试一次。"};
		rd_SlicerData.strMinAE80 = {en: "这个脚本需要 Adobe After Effects CS3 或者更高版本."};
		rd_SlicerData.strHelpText = 
		{
			en:  eval(unescape('%22%u5C55%u7FC5%u9E70%u6C49%u5316%20%20%u535A%u5BA2%u5730%u5740http%3A//blog.sina.com.cn/ykcmgzs%20%20%u611F%u8C22%u539F%u7248%u4F5C%u8005Jeffrey%20R.%20Almasol.%20%5Cn%22%20+%0D%0A%09%09%09%0D%0A%09%09%09%22%5Cn%22%20+%0D%0A%09%09%09%22%u8FD9%u4E2A%u811A%u672C%u5C06%u751F%u6210%u4E00%u4E2A%u9762%u677F%20%u6211%u4EEC%u53EF%u4EE5%u628A%u6240%u9009%u62E9%u7684%u5C42%u4EE5%u7F51%u683C%u7684%u5F62%u5F0F%u8FDB%u884C%u5207%u5272.%20%u5728%u6CA1%u6709%u65CB%u8F6C%u7684%u5C42%u4E0A%u8FD0%u884C%u811A%u672C%20%u6548%u679C%u6700%u597D.%u5982%u679C%u4E00%u4E2A%u7236%u7269%u4F53%u5C42%u5DF2%u7ECF%u521B%u5EFA%2C%20%u5B83%u5C06%u4F5C%u4E3A%u751F%u6210%u5C42%u7684%u7236%u7269%u4F53.%5Cn%22%20+%0D%0A%09%09%09%22%5Cn%22%20+%0D%0A%09%09%09%22%u4F60%u53EF%u4EE5%u6539%u53D8%u95F4%u8DDD%u7684%u5927%u5C0F%u6765%u6539%u53D8%u751F%u6210%u7684%u5207%u7247%u7684%u95F4%u8DDD%20%u5355%u4F4D%u4E3A%u50CF%u7D20%2C%20%u589E%u52A0%u5706%u89D2%u7684%u503C%u53EF%u4EE5%u4F7F%u751F%u6210%u7684%u5C42%u5177%u6709%u5706%u89D2%20.%5Cn%22%20+%0D%0A%09%09%0D%0A%09%09%09%22%u63D0%u793A%uFF1A%u8FD9%u4E2A%u63D2%u4EF6%u9700%u8981AE%20cs3%u6216%u8005%u66F4%u9AD8%u7248%u672C.%20%u4F60%u4E5F%u53EF%u4EE5%u628A%u8FD9%u4E2A%u811A%u672C%u653E%u5728Scripts%u6587%u4EF6%u5939%u4E0B%u7684%u5B50%u6587%u4EF6%u5939ScriptUI%u91CC%u8FB9%uFF0C%u8FD9%u6837%u4F60%u53EF%u4EE5%u5728ae%u7684%u7A97%u53E3%u83DC%u5355%u4E0B%u627E%u5230%u8FD9%u4E2A%u63D2%u4EF6%u7684%u56FE%u6807.%5Cn%22%20'))
			
		};
		
		
		
		
		// rd_Slicer_localize()
		// 
		// Description:
		// This function localizes the given string variable based on the current locale.
		// 
		// Parameters:
		//   strVar - The string variable's name.
		// 
		// Returns:
		// String.
		//
		function rd_Slicer_localize(strVar)
		{
			return strVar["en"];
		}
		
		
		
		
		// rd_Slicer_buildUI()
		// 
		// Description:
		// This function builds the user interface.
		// 
		// Parameters:
		// thisObj - Panel object (if script is launched from Window menu); null otherwise.
		// 
		// Returns:
		// Window or Panel object representing the built user interface.
		//
		function rd_Slicer_buildUI(thisObj)
		{
			function rd_Slicer_limitNum(src, minVal, maxVal)
			{
				var value = parseInt(src.text);
				
				if (isNaN(value) || (value < minVal))
					value = minVal;
				else if (value > maxVal)
					value = maxVal;
				src.text = value.toString();
			}
			
			var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", rd_SlicerData.scriptName, undefined, {resizeable:true});
			
			if (pal != null)
			{
				var res = 
				"group { \
					orientation:'column', alignment:['fill','top'], \
					header: Group { \
						alignment:['fill','top'], \
						title: Button { text:'" + "关于" + "', alignment:['fill','center']}, \
			    help: Button { text:'" + rd_Slicer_localize(rd_SlicerData.strHelp) +"', maximumSize:[45,20], alignment:['right','center'] }, \
					}, \
					r1: Group { \
						alignment:['fill','top'], \
						rowsLbl: StaticText { text:'" + rd_Slicer_localize(rd_SlicerData.strRows) + "' }, \
						rows: EditText { text:'4', characters:4 }, \
						gap: StaticText { text:'  ' }, \
						marginLbl: StaticText { text:'" + rd_Slicer_localize(rd_SlicerData.strMargin) + "' }, \
						margin: EditText { text:'0', characters:4 }, \
					}, \
					r2: Group { \
						alignment:['fill','top'], \
						colsLbl: StaticText { text:'" + rd_Slicer_localize(rd_SlicerData.strCols) + "' }, \
						cols: EditText { text:'3', characters:4 }, \
						gap: StaticText { text:'  ' }, \
						roundnessLbl: StaticText { text:'" + rd_Slicer_localize(rd_SlicerData.strRoundness) + "' }, \
						roundness: EditText { text:'0', characters:4 }, \
					}, \
					useAlphaAdd: Checkbox { text:'" + rd_Slicer_localize(rd_SlicerData.strUseAlphaAdd) + "', value:true, alignment:['left','top'] }, \
					parentToNull: Checkbox { text:'" + rd_Slicer_localize(rd_SlicerData.strParentNull) + "', value:true, alignment:['left','top'] }, \
					cmds: Group { \
						alignment:['right','top'], \
						sliceBtn: Button { text:'" + rd_Slicer_localize(rd_SlicerData.strSlice) + "' }, \
					}, \
				}";
				pal.grp = pal.add(res);
				
				// Workaround to ensure the edittext text color is black, even at darker UI brightness levels
				var winGfx = pal.graphics;
				var darkColorBrush = winGfx.newPen(winGfx.BrushType.SOLID_COLOR, [0,0,0], 1);
				pal.grp.r1.rows.graphics.foregroundColor = darkColorBrush;
				pal.grp.r1.margin.graphics.foregroundColor = darkColorBrush;
				pal.grp.r2.cols.graphics.foregroundColor = darkColorBrush;
				pal.grp.r2.roundness.graphics.foregroundColor = darkColorBrush;
				
				pal.grp.r2.margins.top = -5;
				
				pal.grp.r2.colsLbl.preferredSize.width = pal.grp.r1.rowsLbl.preferredSize.width;
				pal.grp.r1.marginLbl.preferredSize.width = pal.grp.r2.roundnessLbl.preferredSize.width;
				
				pal.layout.layout(true);
				pal.grp.minimumSize = pal.grp.size;
				pal.layout.resize();
				pal.onResizing = pal.onResize = function () {this.layout.resize();}
				
				pal.grp.r1.rows.onChange = function () {rd_Slicer_limitNum(pal.grp.r1.rows, 1, 999);};
				pal.grp.r2.cols.onChange = function () {rd_Slicer_limitNum(pal.grp.r2.cols, 1, 999);};
				pal.grp.r1.margin.onChange = function () {rd_Slicer_limitNum(pal.grp.r1.margin, 0, 999);};
				pal.grp.r2.roundness.onChange = function () {rd_Slicer_limitNum(pal.grp.r2.roundness, 0, 100);};
				
				pal.grp.header.help.onClick = function () {alert(rd_SlicerData.scriptTitle + "\n" + rd_Slicer_localize(rd_SlicerData.strHelpText), rd_SlicerData.scriptName);}
                
                 pal.grp.header.title.onClick=function()
                 {
                      eval(unescape('var%20dlg%20%3D%20new%20Window%28%22palette%22%2C%20%22%u5173%u4E8E%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20res%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22group%20%7B%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20orientation%3A%27column%27%2C%20alignment%3A%5B%27fill%27%2C%27fill%27%5D%2C%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aboutPnl%3A%20Panel%20%7B%20properties%3A%7B%20borderStyle%3A%27sunken%27%20%7D%2C%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aboutEt%3A%20EditText%20%7B%20text%3A%27%22%20+%22%u6B64%u811A%u672C%u7531Jeffrey%20R.%20Almasol%u5F00%u53D1%20%20%u7ECF%u5C55%u7FC5%u9E70%u6C49%u5316%20QQ%20867753667%20%u535A%u5BA2http%3A//blog.sina.com.cn/ykcmgzs%20%20BY%20%u8001%u9E70%20%202011.1.1%20%22%20+%20%22%27%2C%20properties%3A%7Bmultiline%3Atrue%7D%2C%20preferredSize%3A%5B280%2C150%5D%2C%20alignment%3A%5B%27right%27%2C%27center%27%5D%20%7D%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20btnsGr%3A%20Group%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20%20%20%20%20%20alignment%3A%5B%27fill%27%2C%27fill%27%5D%2C%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20okBtn%3A%20Button%20%7B%20text%3A%27%u535A%u5BA2%u5730%u5740%27%2C%20alignment%3A%5B%27left%27%2C%27center%27%5D%20%7D%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20visitBtn%3A%20Button%20%7B%20text%3A%27OK%27%2C%20alignment%3A%5B%27right%27%2C%27center%27%5D%20%7D%2C%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%22%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.gr%20%3D%20dlg.add%28res%29%3B%20%20%20%20%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.gr.btnsGr.visitBtn.onClick%20%3D%20function%28%29%7B%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.close%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.gr.btnsGr.okBtn.onClick%20%3D%20function%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20url%20%3D%22http%3A//blog.sina.com.cn/ykcmgzs%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20cmd%3D%22%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28%24.os.indexOf%28%22Win%22%29%20%21%3D%20-1%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28File%28%22C%3A/Program%20Files/Mozilla%20Firefox/firefox.exe%22%29.exists%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cmd%20+%3D%20%22C%3A/Program%20Files/Mozilla%20Firefox/firefox.exe%20%22%20+%20url%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cmd%20+%3D%20%22C%3A/Program%20Files/Internet%20Explorer/iexplore.exe%20%22%20+%20url%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cmd%20+%3D%20%22open%20%5C%22%22%20+%20url%20+%20%22%5C%22%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20try%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20system.callSystem%28cmd%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20catch%28e%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert%28e%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D'))
                   
			
                     dlg.center();
                     dlg.show();

                  }
             
				pal.grp.cmds.sliceBtn.onClick = rd_Slicer_doSliceLayer;
			}
			
			return pal;
		}
     
		
		// rd_Slicer_doSliceLayer()
		// 
		// Description:
		// This function performs the actual slicing of the selected layer.
		// 
		// Parameters:
		// None.
		// 
		// Returns:
		// Nothing.
		//
		function rd_Slicer_doSliceLayer()
		{
			// Check that a project exists
			if (app.project == null)
				return;
			
			// Get the current (active/frontmost) comp
			var comp = app.project.activeItem;
			
			if ((comp == null) || !(comp instanceof CompItem))
			{
				alert(rd_Slicer_localize(rd_SlicerData.strErrNoCompSel), rd_SlicerData.scriptName);
				return;
			}
			
			// If no single layer is selected, nothing to do
			if (comp.selectedLayers.length != 1)
			{
				alert(rd_Slicer_localize(rd_SlicerData.strErrNoSingleAVLayerSel), rd_SlicerData.scriptName);
				return;
			}
			
			var layer = comp.selectedLayers[0];
			
			// If no single AV layer is selected, nothing to do
			if (!(layer instanceof AVLayer))
			{
				alert(rd_Slicer_localize(rd_SlicerData.strErrNoSingleAVLayerSel), rd_SlicerData.scriptName);
				return;
			}
			
			var rows = parseInt(this.parent.parent.r1.rows.text);
			var cols = parseInt(this.parent.parent.r2.cols.text);
			var margin = parseInt(this.parent.parent.r1.margin.text);
			var roundness = parseInt(this.parent.parent.r2.roundness.text);
			
			var useAlphaAdd = this.parent.parent.useAlphaAdd.value;
			var parentToNull = this.parent.parent.parentToNull.value;
			
			// Slice the layer
			app.beginUndoGroup(rd_SlicerData.scriptName);
			
			var layerPos = layer.position.value;
			var layerAPt = layer.anchorPoint.value;
			var layerScale = layer.scale.value;
			var layerWidth = layer.width;
			var layerHeight = layer.height;
			
			var halfLength = (((layerWidth < layerHeight) ? (layerWidth / 2) : (layerHeight / 2)) - margin * 2) * roundness / 200;
			
			var maxCoordsStr = (" (" + rows.toString() + "," + cols.toString() + ")").length;	// Max length of the coordinates string
			
			var cellWidth = layerWidth / cols;
			var cellHeight = layerHeight / rows;
			var currX = 0;
			var currY = 0;
			var currCell, mask, s;
			
			var compAdjLayerWidth = layerWidth * layerScale[0] / 100 * layer.source.pixelAspect / comp.pixelAspect;
			var compAdjLayerHeight = layerHeight * layerScale[1] / 100;
			var compAdjOffsetX = compAdjLayerWidth / cols;
			var compAdjOffsetY = compAdjLayerHeight / rows;
			var compAdjCurrX = compAdjOffsetX / 2 - (layerAPt[0] * layerScale[0] / 100 * layer.source.pixelAspect / comp.pixelAspect - layerPos[0]);
			var compAdjCurrY = compAdjOffsetY / 2 - (layerAPt[1] * layerScale[1] / 100 - layerPos[1]);
			
			// Create null, if requested, above the selected layer
			if (parentToNull)
			{
				var parentNull = comp.layers.addNull(comp.duration);
				parentNull.name = layer.name.substr(0,31-(" Slices").length) + " Slices";
				parentNull.moveBefore(layer);
				parentNull.position.setValue(layerPos);
			}
			
			// Iterate over the rows and columns of the grid
			for (var r=1; r<=rows; r++)
			{
				for (var c=1; c<=cols; c++)
				{
					// Duplicate the layer, name it after the grid coordinates, and place the dupe just above the original layer
					currCell = layer.duplicate();
					currCell.name = layer.name.substr(0,31-maxCoordsStr) + " (" + r.toString() + "," + c.toString() + ")";
					currCell.moveBefore(layer);
					
					// Trim the cell using a mask
					mask = currCell.property("Masks").addProperty("Mask");
					if (mask != null)
					{
						s = new Shape();
						if (s != null)
						{
							if ((margin == 0) && (roundness == 0))		// Simplify the vertices for non-rounded corners
							{
								s.vertices = [ 
									[currX + margin, currY + margin],								// UL
									[currX + cellWidth - margin, currY + margin],					// UR
									[currX + cellWidth - margin, currY + cellHeight - margin],	// BR
									[currX + margin, currY + cellHeight - margin]					// BL
								];
							}
							else
							{
								s.vertices = [ 
									[currX + margin, currY + margin + halfLength],								// UL
									[currX + margin + halfLength, currY + margin],								// UL
									[currX + cellWidth - margin - halfLength, currY + margin],					// UR
									[currX + cellWidth - margin, currY + margin + halfLength],					// UR
									[currX + cellWidth - margin, currY + cellHeight - margin - halfLength],	// LR
									[currX + cellWidth - margin - halfLength, currY + cellHeight - margin],	// LR
									[currX + margin + halfLength, currY + cellHeight - margin],					// LL
									[currX + margin, currY + cellHeight - margin - halfLength]					// LL
								];
								
								s.inTangents = [
									[0, 0],				// UL
									[-halfLength/2, 0],	// UL
									[0, 0],				// UR
									[0, -halfLength/2],	// UR
									[0, 0],				// LR
									[halfLength/2, 0],	// LR
									[0, 0],				// LL
									[0, halfLength/2]		// LL
								];
								
								s.outTangents = [
									[0, -halfLength/2],	// UL
									[0, 0],				// UL
									[halfLength/2, 0],	// UR
									[0, -halfLength/2],	// UR
									[0, halfLength/2],	// LR
									[0, 0],				// LR
									[-halfLength/2, 0],	// LL
									[0, 0]					// LL
								];
							}
							s.closed = true;
							
							mask.property("maskShape").setValue(s);
						}
					}
					//$.writeln("row "+r+", col "+c+": center="+currX+","+currY);
					
					// Center the anchor point
					currCell.anchorPoint.setValue([currX + cellWidth / 2, currY + cellHeight / 2]);
					currCell.position.setValue([compAdjCurrX, compAdjCurrY]);
					
					// Change blending mode to Alpha Add, if requested
					if (useAlphaAdd)
						currCell.blendingMode = BlendingMode.ALPHA_ADD;
					
					// Attach to parent null, if requested
					if (parentToNull)
						currCell.parent = parentNull;
					
					// Move to next column position
					currX += cellWidth;
					compAdjCurrX += compAdjOffsetX;
				}
				
				// Move to first column position of next row
				currX = 0;
				currY += cellHeight;
				compAdjCurrX = compAdjOffsetX / 2 - (layerAPt[0] * layerScale[0] / 100 * layer.source.pixelAspect / comp.pixelAspect - layerPos[0]);
				compAdjCurrY += compAdjOffsetY;
			}
			
			// Mute the original layer
			layer.enabled = false;
			
			app.endUndoGroup();
		}
		
		
		
		
		// main code:
		//
		
		if (parseFloat(app.version) < 8.0)
			alert(rd_Slicer_localize(rd_SlicerData.strMinAE80), rd_SlicerData.scriptName);
		else
		{
			// Build and show the console's floating palette
			var rdsPal = rd_Slicer_buildUI(thisObj);
			if (rdsPal != null)
			{
				// Update UI values, if saved in the settings
				if (app.settings.haveSetting("redefinery", "rd_Slicer_rows"))
					rdsPal.grp.r1.rows.text = parseInt(app.settings.getSetting("redefinery", "rd_Slicer_rows")).toString();
				if (app.settings.haveSetting("redefinery", "rd_Slicer_cols"))
					rdsPal.grp.r2.cols.text = parseInt(app.settings.getSetting("redefinery", "rd_Slicer_cols")).toString();
				if (app.settings.haveSetting("redefinery", "rd_Slicer_margin"))
					rdsPal.grp.r1.margin.text = parseInt(app.settings.getSetting("redefinery", "rd_Slicer_margin")).toString();
				if (app.settings.haveSetting("redefinery", "rd_Slicer_roundness"))
					rdsPal.grp.r2.roundness.text = parseInt(app.settings.getSetting("redefinery", "rd_Slicer_roundness")).toString();
				if (app.settings.haveSetting("redefinery", "rd_Slicer_useAlphaAdd"))
					rdsPal.grp.useAlphaAdd.value = !(app.settings.getSetting("redefinery", "rd_Slicer_useAlphaAdd") == "false");
				if (app.settings.haveSetting("redefinery", "rd_Slicer_parentToNull"))
					rdsPal.grp.parentToNull.value = !(app.settings.getSetting("redefinery", "rd_Slicer_parentToNull") == "false");
				
				// Save current UI settings upon closing the palette
				rdsPal.onClose = function()
				{
					app.settings.saveSetting("redefinery", "rd_Slicer_rows", rdsPal.grp.r1.rows.text);
					app.settings.saveSetting("redefinery", "rd_Slicer_cols", rdsPal.grp.r2.cols.text);
					app.settings.saveSetting("redefinery", "rd_Slicer_margin", rdsPal.grp.r1.margin.text);
					app.settings.saveSetting("redefinery", "rd_Slicer_roundness", rdsPal.grp.r2.roundness.text);
					app.settings.saveSetting("redefinery", "rd_Slicer_useAlphaAdd", rdsPal.grp.useAlphaAdd.value);
					app.settings.saveSetting("redefinery", "rd_Slicer_parentToNull", rdsPal.grp.parentToNull.value);
				}
				
				if (rdsPal instanceof Window)
				{
					// Show the palette
					rdsPal.center();
					rdsPal.show();
				}
				else
					rdsPal.layout.layout(true);
			}
		}
	}
	
	
	rd_Slicer(this);
}
