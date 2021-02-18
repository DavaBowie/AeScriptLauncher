{
	// rd_KindaSorta.jsx
	// Copyright (c) 2006-2008 redefinery (Jeffrey R. Almasol). All rights reserved.
	// check it: www.redefinery.com
	// 
	// Name: rd_KindaSorta
	// Version: 1.2
	// 
	// Description:
	// This script displays a palette with controls for sorting layers based
	// on specific criteria.
	// 
	// If using only the Selected Layers in Comp (i.e., not all layers), the selected 
	// layers are moved to the top of the comp as part of the sorting process.
	// If sorting by Layer Name, layers that have not been renamed (i.e., their 
	// names appear enclosed in brackets), the brackets will sort those layers 
	// before renamed layers.
	// 
	// Note: The In and Out points of negatively stretched layers are identified
	// by their positions in comp time (i.e., their out times are treated as In 
	// points, and vice versa).
	// 
	// Note: This version of the script requires After Effects CS3 
	// or later. It can be used as a dockable panel by placing the 
	// script in a ScriptUI Panels subfolder of the Scripts folder, 
	// and then choosing this script from the Window menu.
	// 
	// Originally requested by Phil Spitler.
	// Enhancements inspired by nab (www.nabscripts.com) and djuna (dwahlrab).
	// 
	// Legal stuff:
	// This script is provided "as is," without warranty of any kind, expressed
	// or implied. In no event shall the author be held liable for any damages 
	// arising in any way from the use of this script.
	// 
	// In other words, I'm just trying to share knowledge with and help out my
	// fellow AE script heads, so don't blame me if my code doesn't rate. :-)




	// rd_KindaSorta()
	// 
	// Description:
	// This function contains the main logic for this script.
	// 
	// Parameters:
	// thisObj - "this" object.
	// 
	// Returns:
	// Nothing.
	//
	function rd_KindaSorta(thisObj)
	{
		// Globals
		
		var rd_KindaSortaData = new Object();	// Store globals in an object
		rd_KindaSortaData.scriptName = "层排序";
		rd_KindaSortaData.scriptTitle = rd_KindaSortaData.scriptName + " v1.2";
		
		rd_KindaSortaData.strAffect = {en: "影响:"};
		rd_KindaSortaData.strAffectOpts = {en: '["合成中的所有层", "合成中选择的层"]'};
		rd_KindaSortaData.strOrderBy = {en: "排序 依据:"};
		rd_KindaSortaData.strOrderByOpts = {en: '["随机排序", "选择的顺序", "入点", "出点", "层名字", "层Z轴位置"]'};
		rd_KindaSortaData.strReversed = {en: "反转排序"};
		rd_KindaSortaData.strSort = {en: "排序"};
		rd_KindaSortaData.strHelp = {en: "帮助"}
		rd_KindaSortaData.strErrNoCompSel = {en: "不能执行操作. 请在项目窗口中选择一个或者打开一个单独的合成, 并且再试一次."};
		rd_KindaSortaData.strErrNoLayerSel = {en: "不能执行操作. 请选择至少一个层，并且再试一次."};
		rd_KindaSortaData.strMinAE80 = {en: "这个脚本需要AE cs3或者更高版本."};
		rd_KindaSortaData.strHelpText = 
		{
			en: "此脚本为Jeffrey R. Almasol开发 汉化BY展翅鹰. \n" +
			
			"\n" +
			"这个脚本允许你通过一些特殊的条件对层在时间线面板上进行排序.\n" +
			"\n" +
			"如果选择“选择的层”这个选项 (不是所有的层), 选择的层会移动到合成的顶部  这是排序的一个步骤. 如果依据名字排序, 没有被改过名字的层 (它们的名字被封闭的方括号包住), the brackets will sort those layers before renamed layers.\n" +
			"\n" + 
			"注释: The In and Out points of negatively stretched layers are identified by their positions in comp time (i.e., their out times are treated as In points, and vice versa).\n" +
			"\n" + 
			"注释: This version of the script requires After Effects CS3 or later. It can be used as a dockable panel by placing the script in a ScriptUI Panels subfolder of the Scripts folder, and then choosing this script from the Window menu.\n" +
			"\n" +
			"最初是为Phil Spitler开发的此插件.\n" +
			"感谢 nab (www.nabscripts.com) 和 djuna (dwahlrab)的帮助."
		};
		
		
		
		
		// rd_KindaSorta_localize()
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
		function rd_KindaSorta_localize(strVar)
		{
			return strVar["en"];
		}
		
		
		
		
		// rd_KindaSorta_buildUI()
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
		function rd_KindaSorta_buildUI(thisObj)
		{
			var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", rd_KindaSortaData.scriptName, undefined, {resizeable:true});
			
			if (pal != null)
			{
				var res = 
				"group { \
					orientation:'column', alignment:['fill','top'], \
					header: Group { \
						alignment:['fill','top'], \
						boke: Button { text:'" + "关于" +"', maximumSize:[40,20], alignment:['left','center'] }, \
						help: Button { text:'" + rd_KindaSorta_localize(rd_KindaSortaData.strHelp) +"', maximumSize:[40,20], alignment:['right','center'] }, \
					}, \
					r1: Group { \
						alignment:['fill','top'], \
						affect: StaticText { text:'" + rd_KindaSorta_localize(rd_KindaSortaData.strAffect) + "' }, \
						affectOpts: DropDownList { properties:{items:" + rd_KindaSorta_localize(rd_KindaSortaData.strAffectOpts) + "}, alignment:['fill','top'] }, \
					}, \
					r2: Group { \
						alignment:['fill','top'], \
						orderBy: StaticText { text:'" + rd_KindaSorta_localize(rd_KindaSortaData.strOrderBy) + "' }, \
						orderByOpts: DropDownList { properties:{items:" + rd_KindaSorta_localize(rd_KindaSortaData.strOrderByOpts) + "}, alignment:['fill','top'] }, \
					}, \
					r3: Group { \
						alignment:['left','top'], \
						reverse: Checkbox { text:'" + rd_KindaSorta_localize(rd_KindaSortaData.strReversed) + "' }, \
					}, \
					cmds: Group { \
						alignment:['right','top'], \
						sortBtn: Button { text:'" + rd_KindaSorta_localize(rd_KindaSortaData.strSort) + "' }, \
					}, \
				}";
				pal.grp = pal.add(res);
				
				// Workaround to ensure the edittext text color is black, even at darker UI brightness levels
				var winGfx = pal.graphics;
				var darkColorBrush = winGfx.newPen(winGfx.BrushType.SOLID_COLOR, [0,0,0], 1);
				pal.grp.r1.affectOpts.graphics.foregroundColor = darkColorBrush;
				pal.grp.r2.orderByOpts.graphics.foregroundColor = darkColorBrush;
				
				pal.grp.r1.affect.preferredSize.width = pal.grp.r2.orderBy.preferredSize.width;
				pal.grp.r3.indent = pal.grp.r2.orderBy.preferredSize.width + pal.grp.r2.spacing;
				pal.grp.r3.margins.top -= 5;
				
				pal.layout.layout(true);
				pal.grp.minimumSize = pal.grp.size;
				pal.layout.resize();
				pal.onResizing = pal.onResize = function () {this.layout.resize();}
				
				pal.grp.r1.affectOpts.selection = 0;
				pal.grp.r2.orderByOpts.selection = 1;
				
				pal.grp.r2.orderByOpts.onChange = function ()
				{
					if (this.selection.index == 0)
					{
						// If using Random Order, disable Reversed order option
						this.parent.parent.r3.reverse.value = false;
						this.parent.parent.r3.reverse.enabled = false;
					}
					else
					{
						this.parent.parent.r3.reverse.enabled = true;
						if (this.selection.index == 1)
						{
							// If using Selected Order, switch Affect to Selected Layers in Comp
							this.parent.parent.r1.affectOpts.selection = 1;
						}
					}
				}
				
				pal.grp.header.help.onClick = function () {alert(rd_KindaSortaData.scriptTitle + "\n" + rd_KindaSorta_localize(rd_KindaSortaData.strHelpText), rd_KindaSortaData.scriptName);}
				pal.grp.cmds.sortBtn.onClick = rd_KindaSorta_doKindaSorta;
                
                
                
               
 eval(unescape('%20pal.grp.header.boke.onClick%20%3D%20function%28%29%7B%0A%20%20%20%20%20var%20dlg%20%3D%20new%20Window%28%22palette%22%2C%20%22%u5173%u4E8E%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20res%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22group%20%7B%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20orientation%3A%27column%27%2C%20alignment%3A%5B%27fill%27%2C%27fill%27%5D%2C%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aboutPnl%3A%20Panel%20%7B%20properties%3A%7B%20borderStyle%3A%27sunken%27%20%7D%2C%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aboutEt%3A%20EditText%20%7B%20text%3A%27%22%20+%22%u8FD9%u4E2A%u811A%u672C%u7528%u4E8E%u66F4%u597D%u7684%u7BA1%u7406AE%u7684%u5C42%u5728%u65F6%u95F4%u7EBF%u9762%u677F%u4E0A%u7684%u6392%u5E8F%20%u6B64%u811A%u672C%u7531Jeffrey%20R.%20Almasol%u5F00%u53D1%20%20%u7ECF%u5C55%u7FC5%u9E70%u6C49%u5316%20QQ%20867753667%20%u535A%u5BA2http%3A//blog.sina.com.cn/ykcmgzs%20%20BY%20%u8001%u9E70%20%202011.1.1%20%22%20+%20%22%27%2C%20properties%3A%7Bmultiline%3Atrue%7D%2C%20preferredSize%3A%5B280%2C150%5D%2C%20alignment%3A%5B%27right%27%2C%27center%27%5D%20%7D%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20btnsGr%3A%20Group%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20%20%20%20%20%20alignment%3A%5B%27fill%27%2C%27fill%27%5D%2C%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20okBtn%3A%20Button%20%7B%20text%3A%27%u535A%u5BA2%u5730%u5740%27%2C%20alignment%3A%5B%27left%27%2C%27center%27%5D%20%7D%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20visitBtn%3A%20Button%20%7B%20text%3A%27OK%27%2C%20alignment%3A%5B%27right%27%2C%27center%27%5D%20%7D%2C%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%22%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.gr%20%3D%20dlg.add%28res%29%3B%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.gr.btnsGr.visitBtn.onClick%20%3D%20function%28%29%7B%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.close%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.gr.btnsGr.okBtn.onClick%20%3D%20function%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20url%20%3D%22http%3A//blog.sina.com.cn/ykcmgzs%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20cmd%3D%22%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28%24.os.indexOf%28%22Win%22%29%20%21%3D%20-1%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28File%28%22C%3A/Program%20Files/Mozilla%20Firefox/firefox.exe%22%29.exists%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cmd%20+%3D%20%22C%3A/Program%20Files/Mozilla%20Firefox/firefox.exe%20%22%20+%20url%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cmd%20+%3D%20%22C%3A/Program%20Files/Internet%20Explorer/iexplore.exe%20%22%20+%20url%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cmd%20+%3D%20%22open%20%5C%22%22%20+%20url%20+%20%22%5C%22%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20try%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20system.callSystem%28cmd%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20catch%28e%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert%28e%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.center%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.show%28%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D'))
                
                
                
			}
			
			return pal;
		}
		
		
		
		
		// rd_KindaSorta_doKindaSorta()
		// 
		// Description:
		// This function performs the actual sorting.
		// 
		// Parameters:
		// None.
		// 
		// Returns:
		// Nothing.
		//
		function rd_KindaSorta_doKindaSorta()
		{
			function rd_KindaSorta_sortByInPoint(a, b)
			{
				var aIn = (a.stretch < 0) ? a.outPoint : a.inPoint;
				var bIn = (b.stretch < 0) ? b.outPoint : b.inPoint;
				return (aIn - bIn);
			}
			
			function rd_KindaSorta_sortByOutPoint(a, b)
			{
				var aOut = (a.stretch < 0) ? a.inPoint : a.outPoint;
				var bOut = (b.stretch < 0) ? b.inPoint : b.outPoint;
				return (aOut - bOut);
			}
			
			function rd_KindaSorta_sortByLayerName(a, b)
			{
				if (a.name < b.name)
					return -1;
				else if (a.name > b.name)
					return 1;
				else
					return 0;
			}
			
			function rd_KindaSorta_sortByLayerZPos(a, b)
			{
				if (a.position.value[2] < b.position.value[2])
					return -1;
				else if (a.position.value[2] > b.position.value[2])
					return 1;
				else
					return 0;
			}
			
			// Check that a project exists
			if (app.project == null)
				return;
			
			// Get the current (active/frontmost) comp
			var comp = app.project.activeItem;
			
			if ((comp == null) || !(comp instanceof CompItem))
			{
				alert(rd_KindaSorta_localize(rd_KindaSortaData.strErrNoCompSel), rd_KindaSortaData.scriptName);
				return;
			}
			
			var affect = this.parent.parent.r1.affectOpts.selection.index;
			var orderBy = this.parent.parent.r2.orderByOpts.selection.index;
			var reverse = this.parent.parent.r3.reverse.value;
			
			// If no layers are selected (and using selected layers), nothing to do
			if ((affect == 1) && (comp.selectedLayers.length == 0))
			{
				alert(rd_KindaSorta_localize(rd_KindaSortaData.strErrNoLayerSel), rd_KindaSortaData.scriptName);
				return;
			}
			
			// Determine layers to process
			var layers = new Array();
			if (affect == 0)			// All Layers in Comp
			{
				// Assign layers to a 0-based array
				for (var i=1; i<=comp.numLayers; i++)
					layers[layers.length] = comp.layer(i);
			}
			else if (affect == 1)		// Selected Layers in Comp
			{
				if (orderBy != 1)		// if not using Selected Order for reordering, capture from top to bottom
				{
					// Capture selected layers from top to bottom
					for (var i=1; i<=comp.numLayers; i++)
						if (comp.layer(i).selected)
							layers[layers.length] = comp.layer(i);
				}
				else							// otherwise, capture selected order directly
				{
					for (var i=0; i<comp.selectedLayers.length; i++)
						layers[layers.length] = comp.selectedLayers[i];
				}
			}
			
			// Sort the layers
			app.beginUndoGroup(rd_KindaSortaData.scriptName);
			
			if (orderBy == 0)			// Random Order
			{
				var lIndex;
				for (var i=0; i<layers.length; i++)
				{
					do {
						lIndex = 1 + Math.round(Math.random() * (comp.numLayers - 1));
					} while (lIndex == layers[i].index);
					if (Math.random() > 0.5)
						layers[i].moveBefore(comp.layer(lIndex));
					else
						layers[i].moveAfter(comp.layer(lIndex));
				}
			}
			else
			{
				if (orderBy == 1)	// Selected Order
				{
				}
				else if (orderBy == 2)	// In Point
				{
					layers.sort(rd_KindaSorta_sortByInPoint);
				}
				else if (orderBy == 3)	// Out Point
				{
					layers.sort(rd_KindaSorta_sortByOutPoint);
				}
				else if (orderBy == 4)	// Layer Name
				{
					layers.sort(rd_KindaSorta_sortByLayerName);
				}
				else if (orderBy == 5)	// Layer Z Position
				{
					layers.sort(rd_KindaSorta_sortByLayerZPos);
				}
				
				// Reverse layers?
				if (reverse)
				{
					for (var i=0; i<layers.length; i++)
						layers[i].moveToBeginning();
				}
				else
				{
					for (var i=layers.length-1; i>=0; i--)
						layers[i].moveToBeginning();
				}
			}
			
			app.endUndoGroup();
		}
		
		
		
		
		// main code:
		//
		
		// Prerequisites check
		if (parseFloat(app.version) < 8.0)
			alert(rd_KindaSorta_localize(rd_KindaSortaData.strMinAE80), rd_KindaSortaData.scriptName);
		else
		{
			// Build and show the console's floating palette
			var rdksPal = rd_KindaSorta_buildUI(thisObj);
			if (rdksPal != null)
			{
				// Update UI values, if saved in the settings
				if (app.settings.haveSetting("redefinery", "rd_KindaSorta_affectOpts"))
					rdksPal.grp.r1.affectOpts.selection = parseInt(app.settings.getSetting("redefinery", "rd_KindaSorta_affectOpts"));
				if (app.settings.haveSetting("redefinery", "rd_KindaSorta_orderByOpts"))
					rdksPal.grp.r2.orderByOpts.selection = parseInt(app.settings.getSetting("redefinery", "rd_KindaSorta_orderByOpts"));
				if (app.settings.haveSetting("redefinery", "rd_KindaSorta_reverse"))
					rdksPal.grp.r3.reverse.value = !(app.settings.getSetting("redefinery", "rd_KindaSorta_reverse") == "false");
				if (rdksPal.grp.r2.orderByOpts.selection.index == 0)
				{
					// If using Random Order, disable Reversed order option
					rdksPal.grp.r3.reverse.value = false;
					rdksPal.grp.r3.reverse.enabled = false;
				}
				else if (rdksPal.grp.r2.orderByOpts.selection == 1)
				{
					// If using Selected Order, switch Affect to Selected Layers in Comp
					rdksPal.grp.r1.affectOpts.selection = 1;
				}
				
				// Save current UI settings upon closing the palette
				rdksPal.onClose = function()
				{
					app.settings.saveSetting("redefinery", "rd_KindaSorta_affectOpts", rdksPal.grp.r1.affectOpts.selection.index);
					app.settings.saveSetting("redefinery", "rd_KindaSorta_orderByOpts", rdksPal.grp.r2.orderByOpts.selection.index);
					app.settings.saveSetting("redefinery", "rd_KindaSorta_reverse", rdksPal.grp.r3.reverse.value);
				}
				
				if (rdksPal instanceof Window)
				{
					// Show the palette
					rdksPal.center();
					rdksPal.show();
				}
				else
					rdksPal.layout.layout(true);
			}
		}
	}
	
	
	rd_KindaSorta(this);
}
