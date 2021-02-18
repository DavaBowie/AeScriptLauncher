//quick export srt.jsx
//v1.01
//by songz meng


(function es_subtitle(thisObj) {

	var es_str = {
		title: {
			en: "Quick Export SRT",
			cn: "快捷导出字幕"
		},
		version: {
			en: " v1.01",
			cn: " v1.01"
		},
		xport: {
			en: "export",
			cn: "导出"
		},
		refresh: {
			en: "refresh",
			cn: "刷新"
		},
		website: {
			en: "https://github.com/msongz",
			cn: "https://github.com/msongz"
		},
		mail: {
			en: "me@songz.design",
			cn: "me@songz.design"
		},
		time: {
			en: "time",
			cn: "时间"
		},
		content: {
			en: "content",
			cn: "内容"
		},
		helptip: {
			en: "HelpTip",
			cn: "帮助"
		},
		about: {
			en: "About",
			cn: "关于"
		},
		descript: {
			en: "Overview",
			cn: "概述"
		},
		usage: {
			en: "Usage",
			cn: "使用"
		},
		desContent: {
			en: "Copyright © 1987 - 2018 Songz Meng\\nAll Rights Reserved.\\n\\nThis script enables AE to export .srt file for videos displaying subtitle, and recommended using iina/potplayer on macOS/Windows to play videos.\\n\\nThe main process is when you click the refresh button, the script will read the values from the marker at the end of each selected text layers. If not found, it will read the source text and create one. After that, you can click the export button to output srt file for further usage.\\n\\nThere are some different behaviores between macOS and Windows:\\n\\n• Edit area on macOS will dynamic changes list item, but on Windows will not changes unless deactivate it\\n• List item on macOS will display a \" \"(spacebar) represent the \"↵\"(enter), but Windows will display nothing\\n\\nIf you have any question, please contact songzmeng@gmail.com",
			cn: "Copyright © 1987 - 2018 Songz Meng\\nAll Rights Reserved.\\n\\n此脚本使AE能够导出视频字幕的 srt 文件，并建议在 macOS / Windows 上使用 iina / potplayer 播放视频。\\n\\n当您单击刷新按钮时，脚本将从每个选定文本图层末尾的标记读取值。\\n如果未找到，它将读取源文本并创建一个。\\n之后，您可以单击导出按钮输出 srt 文件以供进一步使用。\\n\\nmacOS 和 Windows 之间存在一些不同的行为：\\n\\n• macOS 上的编辑区域将动态更改列表项，但在 Windows 上将不会更改，除非取消激活状态\\n• macOS 上的列表项将显示\" \"(空格键)代表\"↵\"(换行)，但 Windows 将不显示任何内容\\n\\n如果您有任何疑问，请联系 @微型柠檬"
		},
		useContent: {
			en: "Each control will show a help tip while your mouse over it.\\n\\n1. select some text layers\\n2. run this script or press “refresh” button\\n3. press “export” button and select the location the file you store.\\n\\n• <> tags could be applied multiple times.\\n• {} tags could be override each time.\\n\\nsupport:\\n\\n• bold/italic/underscore/strikethough style\\n• position/fade/stroke/kerning/blur style\\n• font size/color\\n• move\\n• vertical",
			cn: "当鼠标悬停在每个控件上时，都会显示帮助提示。\\n\\n1. 选择一些文本图层\\n2. 运行此脚本或按“刷新”按钮\\n3. 按“导出”按钮并选择您存储的文件的位置。\\n\\n• <>标签可以在每一行上多次应用。\\n• { }标签可以在每一行上被其自己覆盖。\\n\\n支持\\n\\n• 粗体/斜体/下划线/删除线样式\\n• 位置/淡入淡出/笔划/字距调整/模糊样式\\n• 字体大小/颜色\\n• 移动\\n• 纵向"
		},
		other: {
			en: "other scripts",
			cn: "其他脚本"
		},
		close: {
			en: "close",
			cn: "关闭"
		},
		srtXY: {
			en: "(in srt system, maximum width map to 384 and maximum height map to 288)\\n↑ + 1\\n↓ - 1\\nshift+↑ +10\\nshift+↓ - 10",
			cn: "(srt 坐标中，将最大宽高映射为 384 和 288)\\n↑ + 1\\n↓ - 1\\nshift+↑ +10\\nshift+↓ - 10"
		},
		er2dlayer: {
			en: "(⇀‸↼‶)\rplease select only one 2D layer",
			cn: "(⇀‸↼‶)\r请只选择一个 2D 图层"
		},
		noLayer: {
			en: "(⇀‸↼‶)\rno text layers selected",
			cn: "(⇀‸↼‶)\r没有选中文字图层"
		},
		textOnly: {
			en: "(⇀‸↼‶)\rplease select text layers only",
			cn: "(⇀‸↼‶)\r请只选中文字图层"
		},
		markOnly: {
			en: "(⇀‸↼‶)\rplease select layers with srt marker",
			cn: "(⇀‸↼‶)\r请选中带有 srt 标记的图层"
		},
		overlap: {
			en: "overlap!\rcheck the highlight layer",
			cn: "重叠！\r请检查选中的图层"
		},
		epHelp: {
			en: "export\\nexport the list as srt file",
			cn: "导出\\n将列表导出为srt文件"
		},
		rfHelp: {
			en: "refresh\\nadd/read marker of selected layers and send them to the list",
			cn: "刷新\\n添加/读取所选图层的标记，并将内容添加到列表"
		},
		verticalHelp: {
			en: "checked will change {\\an} buttons behavior",
			cn: "勾选后会改变{\\an}按钮的方向"
		},
		vertical: {
			en: "vertical",
			cn: "纵向"
		},
		fadHelp: {
			en: "fade\\nset subtitle fade-in and fade-out\\navailable require {\\an}\\nif none of {\\an}, {\\an2} will be added automatically",
			cn: "淡入淡出\\n设置字幕淡入淡出的时间\\n需要{\\an}才生效\\n如果没有{\\an}，脚本会自动添加{\\an2}"
		},
		posHelp: {
			en: "position\\nset subtitle to a new position\\navailable require {\\an}\\nif none of {\\an}, {\\an2} will be added automatically",
			cn: "位置\\n设定字幕新的位置\\n需要{\\an}才生效\\n如果没有{\\an}，脚本会自动添加{\\an2}"
		},
		bordHelp: {
			en: "stroke\\nset stroke width\\navailable require {\\an}\\nif none of {\\an}, {\\an2} will be added automatically",
			cn: "描边\\n设置描边宽度\\n需要{\\an}才生效\\n如果没有{\\an}，脚本会自动添加{\\an2}"
		},
		metriHelp: {
			en: "kerning\\nset kerning between two words\\navailable require {\\an}\\nif none of {\\an}, {\\an2} will be added automatically",
			cn: "字间距\\n需要{\\an}才生效\\n如果没有{\\an}，脚本会自动添加{\\an2}"
		},
		blurHelp: {
			en: "blur\\nset blur level\\navailable require {\\an}\\nif none of {\\an}, {\\an2} will be added automatically",
			cn: "模糊\\n需要{\\an}才生效\\n如果没有{\\an}，脚本会自动添加{\\an2}"
		},
		mvHelp: {
			en: "move(x1,y1,x2,y2,t1,t2)\\nset subtitle move from (x1,y1) to (x2,y2) during t2-t1\\navailable require {\\an}\\nif none of {\\an}, {\\an2} will be added automatically",
			cn: "位移\\n让字幕从(x1,y1)到(x2,y2)运动，历经 t2-t1\\n需要{\\an}才生效\\n如果没有{\\an}，脚本会自动添加{\\an2}"
		},
		fsHelp: {
			en: "font size\\nhighlight words in edit text, and click to quote\\nif no words are being highlighted, it will quote the whole line",
			cn: "字号\\n在编辑区域高亮文字，然后点击设定字号\\n如果没有高亮，则以整句设定"
		},
		uuHelp: {
			en: "underscore\\nhighlight words in edit text, and click to quote\\nif no words are being highlighted, it will quote the whole sentence",
			cn: "下划线\\n在编辑区域高亮文字，然后点击设定下划线\\n如果没有高亮，则以整句设定"
		},
		sssHelp: {
			en: "strikethrough\\nhighlight words in edit text, and click to quote\\nif no words are being highlighted, it will quote the whole sentence",
			cn: "删除线\\n在编辑区域高亮文字，然后点击设定删除线\\n如果没有高亮，则以整句设定"
		},
		iiHelp: {
			en: "italic\\nhighlight words in edit text, and click to quote\\nif no words are being highlighted, it will quote the whole sentence",
			cn: "斜体\\n在编辑区域高亮文字，然后点击设定斜体\\n如果没有高亮，则以整句设定"
		},
		bbHelp: {
			en: "bold\\nhighlight words in edit text, and click to quote\\nif no words are being highlighted, it will quote the whole sentence",
			cn: "粗体\\n在编辑区域高亮文字，然后点击设定粗体\\n如果没有高亮，则以整句设定"
		},
		fcHelp: {
			en: "font color\\nhighlight words in edit text, and click to quote\\nif no words are being highlighted, it will quote the whole sentence",
			cn: "字体颜色\\n在编辑区域高亮文字，然后点击设定颜色\\n如果没有高亮，则以整句设定"
		},
		infoHelp: {
			en: "about",
			cn: "关于"
		},
		reselHelp: {
			en: "re-select the layers which you refresh last time",
			cn: "重选上次刷新的图层"
		},
		pickposHelp: {
			en: "show the coordinate of selected layer in srt world",
			cn: "显示所选图层在 srt 世界中的坐标"
		},
		guessFontsizeHelp: {
			en: "show the size of selected layer in srt world",
			cn: "显示所选图层在 srt 世界中的大小"
		},
		killotherHelp: {
			en: "remove all of { } tags of selected items in the list",
			cn: "清空所选项目的所有 { } 标签"
		},
		killtagHelp: {
			en: "remove restrict range of < > tags of selected items in the list",
			cn: "清空所选项目在限制范围内的所有 < > 标签"
		},
		rmmarkHelp: {
			en: "clear the list\\nremove srt marker of selected layers",
			cn: "清空列表\\n清除选中图层的 srt 标记"
		},
		preciHelp: {
			en: "timecode (00:00:00,000) precision\\nbest 1 <----> 10 better\\n↑ + 1\\n↓ - 1\\nshift+↑ +10\\nshift+↓ - 10",
			cn: "时间码 (00:00:00,000) 的精确度\\n最高 1 <----> 10 也不错\\n↑ + 1\\n↓ - 1\\nshift+↑ +10\\nshift+↓ - 10"
		},
		linenumHelp: {
			en: "restrict range for < > tags operation\\n0 is for line all\\n1 is for line 1\\n2 is for line 2\\nand so on\\n↑ + 1\\n↓ - 1\\nshift+↑ +10\\nshift+↓ - 10",
			cn: "限制 < > 标签的操作范围\\n0 代表所有行\\n1 代表只操作第 1 行\\n2 代表只操作第 2 行\\n如此类推\\n↑ + 1\\n↓ - 1\\nshift+↑ +10\\nshift+↓ - 10"
		},
		olcheckHelp: {
			en: "check overlap layers when refresh",
			cn: "刷新时检查重叠图层"
		},
		x1Help: {
			en: function () {
				return "x1\\n" + this.srtXY;
			},
			cn: function () {
				return "x1\\n" + this.srtXY;
			}
		},
		x2Help: {
			en: function () {
				return "x2\\n" + this.srtXY;
			},
			cn: function () {
				return "x2\\n" + this.srtXY;
			}
		},
		y1Help: {
			en: function () {
				return "y1\\n" + this.srtXY;
			},
			cn: function () {
				return "y1\\n" + this.srtXY;
			}
		},
		y2Help: {
			en: function () {
				return "y2\\n" + this.srtXY;
			},
			cn: function () {
				return "y2\\n" + this.srtXY;
			}
		},
		moveinHelp: {
			en: function () {
				return "t1\\n" + this.msHelp;
			},
			cn: function () {
				return "t1\\n" + this.msHelp;
			},
		},
		moveoutHelp: {
			en: function () {
				return "t2\\n" + this.msHelp;
			},
			cn: function () {
				return "t2\\n" + this.msHelp;
			},
		},
		fcvalueHelp: {
			en: "change font color",
			cn: "改变字体颜色"
		},
		bHelp: {
			en: "bold start\\nadd \"<b>\" to system clipboard",
			cn: "粗体开始\\n添加 \"<b>\" 到系统剪贴板"
		},
		bsHelp: {
			en: "bold stop\\nadd \"</b>\" to system clipboard",
			cn: "粗体结束\\n添加 \"</b>\" 到系统剪贴板"
		},
		iHelp: {
			en: "italic start\\nadd \"<i>\" to system clipboard",
			cn: "斜体开始\\n添加 \"<i>\" 到系统剪贴板"
		},
		isHelp: {
			en: "italic stop\\nadd \"</i>\" to system clipboard",
			cn: "斜体结束\\n添加 \"</i>\" 到系统剪贴板"
		},
		uHelp: {
			en: "underscore start\\nadd \"<u>\" to system clipboard",
			cn: "下划线开始\\n添加 \"<u>\" 到系统剪贴板"
		},
		usHelp: {
			en: "underscore stop\\nadd \"</u>\" to system clipboard",
			cn: "下划线结束\\n添加 \"</u>\" 到系统剪贴板"
		},
		sHelp: {
			en: "strikethrough start\\nadd \"<s>\" to system clipboard",
			cn: "删除线开始\\n添加 \"<s>\" 到系统剪贴板"
		},
		ssHelp: {
			en: "strikethrough stop\\nadd \"</s>\" to system clipboard",
			cn: "删除线结束\\n添加 \"</s>\" 到系统剪贴板"
		},
		blHelp: {
			en: "{\\an1}\\nplace subtitle to bottom left corner\\nwhile {\\pos} added, it will transfer as anchor point at bottom left\\nthe existing {\\pos} will be wiped up",
			cn: "{\\an1}\\n将字幕放置到左下角\\n当{\\pos}标签存在时，它会转换为左下角锚点"
		},
		bcHelp: {
			en: "{\\an2}\\nplace subtitle to bottom (default)\\nwhile {\\pos} added, it will transfer as anchor point at bottom\\nthe existing {\\pos} will be wiped up",
			cn: "{\\an2}\\n将字幕放置到底部（默认）\\n当{\\pos}标签存在时，它会转换为底部锚点\\n原有的{\\pos}标签会被清除"
		},
		brHelp: {
			en: "{\\an3}\\nplace subtitle to bottom right corner\\nwhile {\\pos} added, it will transfer as anchor point at bottom right\\nthe existing {\\pos} will be wiped up",
			cn: "{\\an3}\\n将字幕放置到右下角\\n当{\\pos}标签存在时，它会转换为右下角锚点\\n原有的{\\pos}标签会被清除"
		},
		mlHelp: {
			en: "{\\an4}\\nplace subtitle to left\\nwhile {\\pos} added, it will transfer as anchor point at left\\nthe existing {\\pos} will be wiped up",
			cn: "{\\an4}\\n将字幕放置到左侧\\n当{\\pos}标签存在时，它会转换为左侧锚点\\n原有的{\\pos}标签会被清除"
		},
		mcHelp: {
			en: "{\\an5}\\nplace subtitle to center\\nwhile {\\pos} added, it will transfer as anchor point at center\\nthe existing {\\pos} will be wiped up",
			cn: "{\\an5}\\n将字幕放置到中央\\n当{\\pos}标签存在时，它会转换为中心锚点\\n原有的{\\pos}标签会被清除"
		},
		mrHelp: {
			en: "{\\an6}\\nplace subtitle to right\\nwhile {\\pos} added, it will transfer as anchor point at right\\nthe existing {\\pos} will be wiped up",
			cn: "{\\an6}\\n将字幕放置到右侧\\n当{\\pos}标签存在时，它会转换为右侧锚点\\n原有的{\\pos}标签会被清除"
		},
		ulHelp: {
			en: "{\\an7}\\nplace subtitle to upper left corner\\nwhile {\\pos} added, it will transfer as anchor point at upper left\\nthe existing {\\pos} will be wiped up",
			cn: "{\\an7}\\n将字幕放置到左上角\\n当{\\pos}标签存在时，它会转换为左上角锚点\\n原有的{\\pos}标签会被清除"
		},
		ucHelp: {
			en: "{\\an8}\\nplace subtitle to top\\nwhile {\\pos} added, it will transfer as anchor point at top\\nthe existing {\\pos} will be wiped up",
			cn: "{\\an8}\\n将字幕放置到顶部\\n当{\\pos}标签存在时，它会转换为顶部锚点\\n原有的{\\pos}标签会被清除"
		},
		urHelp: {
			en: "{\\an9}\\nplace subtitle to upper right corner\\nwhile {\\pos} existed, it will transfer as anchor point at upper right\\nthe existing {\\pos} will be wiped up",
			cn: "{\\an9}\\n将字幕放置到右上角\\n当{\\pos}标签存在时，它会转换为右上角锚点\\n原有的{\\pos}标签会被清除"
		},
		writePermiss: {
			en: "(⇀‸↼‶)\rplease check the \"Allow Scripts to Write Files and Access Network\"",
			cn: "(⇀‸↼‶)\r请勾选\"允许脚本写入文件和访问网络\""
		},
		msHelp: {
			en: "millisecond\\n↑ + 1\\n↓ - 1\\nshift+↑ +10\\nshift+↓ - 10",
			cn: "毫秒\\n↑ + 1\\n↓ - 1\\nshift+↑ +10\\nshift+↓ - 10"
		},
		copied: {
			en: "copied",
			cn: "已复制"
		},
		xbHelp: {
			en: "remove all <b> </b> tags",
			cn: "清除所有 <b> </b> 标签"
		},
		xiHelp: {
			en: "remove all <i> </i> tags",
			cn: "清除所有 <i> </i> 标签"
		},
		xuHelp: {
			en: "remove all <u> </u> tags",
			cn: "清除所有 <u> </u> 标签"
		},
		xsHelp: {
			en: "remove all <s> </s> tags",
			cn: "清除所有 <s> </s> 标签"
		},
		xfHelp: {
			en: "remove all <font> </font> tags",
			cn: "清除所有 <font> </font> 标签"
		},
		rwHelp: {
			en: "write srt subtitles to the corresponding text layer\\n<> & {} tags would be ignored\\nsource text expression will be disabled",
			cn: "将 srt 字幕写入对应的文字层\\n<> 和 {} 标签会被忽略\\n源文字表达式会被禁用"
		},
		selListItem: {
			en: "(⇀‸↼‶)\rplease select some list items",
			cn: "(⇀‸↼‶)\r请在列表里选择项目"
		},
		noOutput: {
			en: "(⇀‸↼‶)\rlist is empty",
			cn: "(⇀‸↼‶)\r列表是空的"
		},
		// posyHelp: {
		// 	en: "",
		// 	cn: ""
		// },
		saveDialog: {
			en: "select folder to save",
			cn: "选择保存路径"
		}
	};
	for (var i in es_str) "zh_CN" == app.isoLanguage ?
		es_str[i] = es_str[i].cn :
		es_str[i] = es_str[i].en;

	var pickposIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00\x00àIDATHíVA \fÜ8=ê;øÿs|Ý\x00u AmkkgXa$!L\x00\r\rA´I®VµÕH©Òóïó¨# É\bB0uÃIw:IÛòN#	/}¶eS&qÜ@\b§,ãRCFPÜPX;{·¡À=ëÄ£¬q~VrÜÆ4'¬ÉK1y»_-\x00`ð4Ïàí·!kS/ÐÊé/*§8Ä³ú]ÛGÏêTÆâ\x00ã\"XöEJæê$Ý§Ã<éþUlø®\x00ô³ÿÞ$64üOÈg|_Úé\x00\x00\x00\x00IEND®B`",
		guessFontIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00\x00¸IDATHíQÄ \bDg6{Þÿ8=ÍôÃ4qÙÂ*4Ýø>@@`±ø7èî\b ^K¼ÃSsñîûÛJ,<I$'\f\x00>Õ'8ó¾!I[ÄßêÚÔÛ\"nm'k'»îu_w;F¬êY»!ûÆ'QVÂ\rS©Ædá§C£KíÛYÖ~¿­ª4@HèL±®ðÑ7\x00efw¿ðUµ{ßgëªÛ`l8cÚ,à\x00 ï*þä\x00\x00\x00\x00IEND®B`",
		removeMarkIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00\x00ÆIDATHíÕË0\fÐÝLj	MîÓ«Ù2Æ?ûx\fÒCÆ`æ×Cså!÷F ßL¡\x00ñHÝZnG±hÃ@kªp@çÚ6ègá,Ú	wá*Ú7»ZR'H_WÝÕ§Qà3ù¦ã4\"ð°Ø¿Sî 6ök=ÇüMöjk<ZwSÉçezÅQÃýd^·v^¦ÒÍc_ç 8Ø]ÂÞpØ\r6NQwgþ#opéQ\n6'\x00\x00\x00\x00IEND®B`",
		reselIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00\x00ÜIDATHíAÃ \f×UßRþÿ^³=¤@\fôP1C\"`Ø`óïÈå\rÁGÆ®LoµK¸é×õÔ¼V8Êx±¼FùÐjZ¡­X:õ Å\x00A»m=¸F\bD!ûÆ§±Äýð¢¦@1{ÅçÔÒfÈû)¨ôj,`Ø!×ÌöSôhÉ¥tY+Jbb\"^í»n«k¹íÏäþ$c¡lõ=q	ý6þ­ÎRëÆòÏRÀõãàºÓ­äºÄY*i½Ùü/è¤dú'\bøH\x00\x00\x00\x00IEND®B`",
		killtagIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00IDATHíQÂ \fD7F.¡§÷xõ©vìO§q:VûØ ´ÀgQ-w Hçx¯Q·Èìª0 Çr^L·ÂKdA)vN9ßâØ¨î¼ÜÌù<+¬à\b´r/\\ ÖI¡ÉY£ôT0t5lR%È¥J½§t¥éXÒ6ø(àìã¨`¨OB|G¡F¸ÈîíãæO8<·g`Þ­ó®j	<êj{ÚötÒ\x00Ò¾ðø}×û&¢åæª-¾cÒv\\z?¯NHðEµÚì;ì;ÑèZÒB/çàÿ>\fÜ;6Køop¿ÆCø[èd]qæø\x00:þÒkùL\x00\x00\x00\x00IEND®B`",
		killbrackIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00IDATHíQÂ0\bDÁñzÞÿ8=Þ?Ú²B2ív#&¼l)Ñ¥ÿa>B7kEä;Pw>­gõ{Ùy%.4	ynÕ<h$ÜlCu0Bg¶U`,»É&xX3m$Îë8¸@óñ°4ïI^qÖe½?«SbW¨,?êåW\\ÌÔ1i4¯bv\rS»w/®Ý[éæ°FºLÍÃcÜ_÷6ÝdtàÛI\rÙz\rÀ$÷¶mÌ+kD±â;nu¨`%|ÅwhWtFçÂb\\³ÆÝ#<¼X\bFèà3}éôYÙûÍâJ°\x00\x00\x00\x00IEND®B`",
		infoIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00\x00ÛIDATHíÁ\rÂ0wð!_PBJ :¢4¾ùQ,Ç!ÒÙq<?±|ã½D6Ðh4~ÎY6´úØ¼fZå.\fcz+úÅi)MåNõÁ-N¥ã¤ëª\"¥Æu&ÏàX(ì3åÅÈIL\x00D'Î¤-.Ç,¥-÷·:Mö]ê¶&Þ$­#6N¹Ü»¦ÖLÿ(vÆ¾EÅ@\x00=^\fÃx°UGÒ8 <£Ëá!in/1Kz/KZý.X³],èà½ºÕØH£ñÿ|\x00   ièüy\x00\x00\x00\x00IEND®B`",
		refreshIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00\x00ÚIDATHíKÃ \fDgªÞ¥÷?NNã.Ò*$xlÄX`ØÚZ$zfö8DóÎE÷.²Ç¼sÏ~ÐÏ û \x00DP½\"XÚÍ²ä§¡¸Op¿àC.:Ï£# c»BÆÁ\rôùk>Njî9I¿cá=A«Bü{<yÍu:¢q:æJ'× \b 2Wëê,²ÅÍåÁËS®ñÞ®ò¤ÓÍ5qÙMOûâäF.\\(Jõ<ü²ÆYëðê«ç;±|mm­Õ·òU/}mB\x00\x00\x00\x00IEND®B`",
		exportIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00\x00IDATHíK \fD§Æ³èm¼?§7~ÈGÁ¸ ÏÜ´/)cRÀèÇi;Y÷\f<õ'!b³8ÁQçß5¦j_Kµ<BRÜ¨yøX¥?qùï)M\x00JÃX.ÞÖ¤\\a£Î7´Q_±Qøoñ]¸üôäR¬y¼ûT¿M®úå\bÄ÷fËÝDË¹8Ý±J_^Ø+ºZ\x00\x00\x00\x00IEND®B`",
		ucIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00TIDATHí±jÂP¿[\nV\\\"tê,íàê¾}\x00ÁÝÅGÐwð\r|\x00qtª»sqT\nPuR§Ó![½ÉMÒØ¡ägIþüß=$'¹ë¿K\f\"r£zd¤½®Ñfðy!XìÊ[vå-¥õtj5«jy­Ä¼VbUí¥Ê0IÓ­Í¾x¤13a_<\"ØI;N^:c-áQü¶¥3¾*ÁEê¸¾üÃ½øóþ~÷\rªß\ràÙYWÚ\bÐ a]ig\nF°æ$Ü\b»C0^&Å§`d¦n¸gêBáP;^æÏ`Ï|ØÑÞ¼:\x00E5NÇ\n¾gÐñï1(NÇìéìÔ&FEgßÆàþ\bP(í£ñEæÁßtÍ'%`a^Ó\"Òý2Pþ3%ÞsÅ§ßî¹råJ«/gX\"ixû\x00\x00\x00\x00IEND®B`",

		ulIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00+IDATHíV;KAþV¨D\b\"ZJH!jBlcg#h)½v6Úê?°²Õ)Ó)6J\nâ#ÍíyÍí%'\nâsÌÍ{v¾=ADp®þ-Ò |)AcxÁ§ÒÄÍ\f¤	â½§¦Uñ1¼«Ëd»é0 l9¶à$¼ÅjÈâ]\ntiª3bkÄíÈë­\n(é!QV¼/³ýOçtuÈ¯ùÚsb[¨&WéFk,1UÛÒSbÓ­íëÑæ6Ùeax$ì/JØ%ëcT÷\\ÊLo±WN«,ìé!Q;%ÀVY»Ý¬Þ8)Rµ¿¯U¿§Ì¤%mWU_zë<Ä8Ìª· ÌvÁõçf¤àÛ +ùÚ¯ì.XêjÙÚLïÆ	tÕ\r·ÄiïÃÆ-ÀmË¹«Ð×v1Æ]jGîmBV*hREÄ­gÆ6ðÒ[5UCbäÁø½½)ì(+RÔË±<wã$^ûê¢{ÑXúñjqöbþ¸so²\bLÙýwâ>UP@²'P1T\baZ8è4©£Ídó |;d j\\Ù0[9ÆëÆ§ø\fÖ d[-$½'*)_NDm#eAV:sôP);ÐÀåç³RóÒc#«\x00B8ü6Ç®\x00B8TôÕ?³\x00|Z¾M±¤9\x00\x00\x00\x00IEND®B`",
		urIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00YIDATHåV½kQÿÍ%ïÔp\\qÁ\"¸V.Ø,\\¬SJ$}Ò¥Iÿ `c,E¤ó«0vH¸CåÄhîC\"#óöönß~>Üh\f\f¼}3¿y3óf13üóÖô­ÜTµaáú[uH%Á³Í#gÁ0´¤¶{ciÃ Sûxmë acÄ\r¹Ø?!ç@=wXùÁáA,ª ¸¨l¤¹¼Þö\fþ¤kºXðdïmj F´[ZNU&Ó'Ãûsò	òLîêÅpåã&óÂ6¬æ¥u&CÖ\fo1>Wîú÷ºû%Ü;¹/¢þù9S´ÿ_ªG@V°Hb#©îO£ö@îV×¼{d%¦\nÂK×íQ¾W×T'JMµOïàR«ª	ë$N_}æüÞtHÖ¬=\fúa¯ÐÇùÎ1M(uþfjÁZÁ'*¾+üB÷ÄWl]«iÁj¤Í«\x00uó}£3â?»WÛÜÎB¼>ºÀªhgR?ß±L?j;~ÓÈÆ`åÆ\f>ÌþÆ³cxeCÞ Û]îóD÷x½ñ¸Ð\"Ú¥ûxqµ¥{x,VaqèÝN4jrc}ØVMØkQ|sÑn¦Û2´¤­hC;ë³2LÀ©îÕdï\ry9¼7;LÜiòª\n«\x00Cy§fá÷Ò\\7ìLÀ\x00³°ya\x00x #&±^\rà­î?\x00\x00\x00\x00IEND®B`",
		mlIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00#IDATHí½JÃP#¥(¡bqÑÕÙAô>µK/A§â/@'GÁÅÍðÄ)¢XE^*óÛ(óo9É{sÂ°X,ãù= )gÐ¸ 'ô¬ÞÈe	´<Àç°3l<IÅýLþd!Ö|± !ÉûãbÇÆ5½Öëgáw!F¸ÜÌòZ{go;,ü!Î¼b¨Ä\rCÐÜÁÚâ|¥J×'~¥;ºï»Ø<Ì¶©Nw¹uklT¸XJ¸ Ñ®n½RLYb¡cêO.sWû-¿±»õçòWòWÍ*þ·Ïi\b\"¹F	îBt\nï¸Ð!a1	Å2þ|â³´	:q\x00\x00\x00\x00IEND®B`",
		mrIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00IDATHí1KÃ@sQBÁ\n-´ÁIGÿ³ u.¢Î:£ÁÅ¹A¥Í¢¨¼J$ÄÔÂ=á[.yï9Âww`±XÆ4()#dÂBn.ùªÈJä´Ð3^½k0ÂóDZ\b±(±ÖB\f¦<Ö¶R3¥ÃÚ¸ýúOÕ[Äja1ÊñDÅaì×é7îF8±¹b)ï*c8>´w`ý<À9¦vßòãÍU¾8dùv·ßY¸y!l3ëE_ïêïPõúñ¡òÅûp¶0çâ<7.ò¡¹½¸>ëÿ '­ôa¾¨dfbüø\x00ÜÑOÊÈäk±XÆ!M${ñÓß\x00\x00\x00\x00IEND®B`",

		bcIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00VIDATHí½jÂ`¡(8Á,í\r8:HoÀÜ»Ø;ðïÀpvÒ;)JQ(ø³øC·CãLbj6HÈÉy¾o8ÿIÛ@¤÷ß½Â#øðÃµªÐA-Ãð.}ë{47Üï¾ç?á&ø\nDâHükø¶Ó¹¾\rçÙcÁn\\/}÷î&ÙÿV/*éßù\"\rôxéÁGÚ;÷±-ÀÂ ïäÆ}ÆfÕ)èMË±Yoi á@B[<É=\nm±º[9¹?g;m>^çÅBNN é\\,`P+Jke1I\r6Ò«yEÜ&3ÝI3S±ÛÜ¯%ÁÐjÒ(îÄ¢ZÍKËÅ\"Í2¶&ßù®XÆÖnÉÕÅ`dVèdm:YY	³úóäyrHZ}fÆ½ñ¶yS#âïórTU¨K\x00\x00\x00\x00IEND®B`",

		blIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00[IDATHíV?hAÿ]Lã¿#*DHAÌ¤dºfwHp9àn&QÜ*àfW3*íX\\ÔI;)iKÖ&Ìxò®½/ßwwß}WvÐÜw÷þÝ{¿{ï!L)5%9Û6Qù@<7D:z§GcWIÊûéÐ)ánÖHA¢±0RºÙO¶ùIµ©!»cÛ´;Voî½TÎäZ°ÉûeµU{÷ð=_õÓÛÄ@¸È©9° °£S8ÁÉe¦åááñóÔ(Êg\nVf5XÁAlÃÃtû]¥i¬Í®ðï7§Ûhk°kXyBÁv¤CÁÎÈ?ª£;êÖ¤¢?5|ûbÝÄ	2vs­@PÅ¢ÀÞÊQ¥$²þÔ0aÝé+ò¿Já§Ì¥{'tÖãðÃgÇ\"ßk0hÞ£Eho%Fô 8ãeÂÚµA¨(Å\fÝ³$jI)øb¶'r{Èë×0÷\"1È\fù-[rtòÁ¯ÄA/³Ê½K«8%YiÂ½«\r7\rKÉrV +ÓVþ)^Ï»¹,qºA½'ò¾¥/z>èÐíè©~Ó fåÓi³ðÍ9 o|Ö·ûõ=¤û7	ôÑ®{, \n\x00¾Fj·Ôòâ:¦w®¨ãcØêx<ïÖp¦,U[´EÿäªaWnK*§æ	Ký¶Ç/ÿÂ+ùØÒî;bC-:¹d¼ñÍÛaè­þ;à\"'Âý¯r\x00\x00\x00\x00IEND®B`",
		brIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00BIDATHíV¿KQþÞi»Óä@A¼&©R¤¼V$Üý­ï/0U*µT°I4ic&`J»Klâub(z»p22£»îÛ·÷öÁ\b!s<Ø7ßìüøæ!*9~VÇë¡-Äê)±À¸ÒÃWð5 Þl8úK.´ô\n¾zRP¤Ç·8ÅÓÁØ6c1'bÆÅjëù\\í»á\"tËQÁ6¡´\"Ù-T_^\\Ê³÷)ÚÔDØ$Ñ³Ö/6ÑjÔ­£ÚÉéä}ÑÿÞ¡µ½îB¼:\bNóy7nNñÈÐ½ÞêSPs.	Ù\fsðx8}DQ}¦lß}©îï²tºmdö| ùLiUè×/»:ë»ùÚPKj\nÀ61ØMP®âçÏ³ú%×ßl\bÝAp\b5·Þ&T´áÓÙOímUÂÚì~ÆþãÕÔlßÐçÐõê»[äjÃxo¡À¯òW)a{èí\rÆýõv¦°³H¦¨ÿ]`Þ=<èò¿ÀbÒÄÚÓ¼·¸££ÉsÎ«(FQ pQØtY Ö2a$BÑ¨Èe¦âs0¶	Ø9h6^2½Ê§Ø9à0gíM|Jóç<ÇÂ¦íá-|ÇüG»qSJ@;½LÜººSÜä5% ë5àáýÂâ2°W~oµqMµÑÁ§Tu½JXX¾­9Oe9ÿÊY?+/%Úüçê¿\"\x00®\x00¼çxhLé@\x00\x00\x00\x00IEND®B`",
		mcIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00\x00dIDATHíÔA\n\x00!\fÀtÙ¿ôÿÏñ5õ´Y0­\b³A@Dä6F\fy#uçKO²ßãIoküÍøQoìaðà·Ý¼¨65\x004Ëï»\\xÓÑ±©} \"\"÷éï\rhÔWiÐ\x00\x00\x00\x00IEND®B`",
		posIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00F\b\x00\x00\x00q.â\x00\x001IDATxí±nÜ0\f}¤ÛMm]\n4S.yê\bL2eóÖ-Á\föÝÑ²(Qv®IÑÿ»á\x00Y\")¤(B\b!B\b!B\b!ÕûD;F(T¤ Ný%ì\x00}©×)o\\S°èxàsUK2:Ia*ètó\\ªô&\n$GO\rßFERÉÆ|iª(üWè´=æ¡E¶FË[Ë9ÜK=,¹Ç£aý8©¤a»ûRÉ*~þñIeÊÙ6K$«@`Æ.JëQ¹ÈyUÍÑ®¯k_`<b2ôÛïÇÊâ	1\bfpS³fÎ~ÞbNn#ôOédÐA~g§E/óMsÞ:µq»¸6:{²Ô\"F{ÃP¡_,o\x00ÜÎ¼`I¥U[QäÞì­(/ÞÇlD¡w°óï*nrÎ¼7s§­+¾ÜÑµéåÃ9ÆkùKQrJçÔSÉëNÚf§ûØw\x00O«µëfÍ1rpF¡ ê°¬ú980ïXCo·|$¯½þ¢öíÂ)j<_]oh×/­(OE@ÎïÁÔ0uYeX×à­õ@ìñÑÙç	ÙAUk§yÃ­ÏÈÛ% îA÷û¬-ÇÍíZkÂæÍðÑÑÅR)oáléuúmS$¸¾óoÔ-:mÿ¿>mW|!B\b!B\b!B\b!ä­yæÍ½¦k«¸p\x00\x00\x00\x00IEND®B`",
		fadIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00F\b\x00\x00\x00q.â\x00\x00ñIDATxíØ;RÃ0à@KI¥*®Å	r,f ¢M§c,e¢È¼í<fþ/ã\"¶õV\x00DDDDDDDDDDDDDÔMO´á.\x00d²Ór@îý­T®1¿!Míi¸­â¢2|(ÐeÊõQîÑsõÕÜg)â\nåÔë¨p*É½¬[I¯EcÝmã«ÃsB=\x00/\b/\x00¼ëa$áW/à8Æ¶ÔC)ö¸mXgBNÍáØJqÁû§W8³Ò@v^Dõz0ÏK¾ ß_½iOE¡?½iç;ÆË[îöÑjÐq¹Mçpeè1ílÖ:Ú«Í1Ú:\f\n,[¢!,:·'Yâ#j[¶õãôpµKLçI®þ¯Z[0¶É¾*m£¥Ç¥ñýEº'ßEtk)7ªÒ~`}§\r+ìcâýÀDî$ËjÕ«y÷]<«ö_Ý¡$ûç¥ÄÈê£E »Þô}ï°µþÎ2º4æR\r°zõ®1Ø;ÆËôÜ?K\\±³ªÏPìÆoí{úRg4ìËl¡Tg®±-msLçì\"4Ö}¿6çþ~ÜRõáT&tÅ¿5ÑÅúvú+;ªÒ\x00\x00\x00\x00IEND®B`",
		bordIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00F\b\x00\x00\x00q.â\x00\x00õIDATxíØ¿R0ðoÀÖÒ*¥V:¾¹3ZÙ^ÎÎÇX#Hv³pp3ßÏ¹!YBH\x00h11StÆY\x00\n©T§v@îýq:7³¾®aZ¡[·T´\r¦J»¹¨½H×ìÖÞ¤PH2ÚñØ}T$?çªnb-9\rîÅÌ¾û#¦ÝáYÒâ.*U8Ñ)ËhÔiíñÒá@ÛC*ËxÔb¦ëÿ`<ÚHî÷¼G©løðô¤rþ5EI~=,½Ë@¿>½~/-ÛL·ÚéÑÛ¢NßP®ûÓÊ¯Ìs:×g¬Qý&³Æ5¼9FWG\"Õî¸g8WËw¾÷ò%QË_ÇÌ'h_D$ÏºåÇk33Ûâ9&ÈrÈÓ§_|rß:0»å?JÖzà?èJíçM/0r\nFeå«9üfòÒÎcìÊ+æjúïs_ÄÈ³¼$@ wK+o	JÝÒúC ÀÈDÛ×.¨=ÆEºíRk$®0Äeºï(Ó:¤õÏ\rÚÿÓ._ÍÇH?mEý ZÁ±.=JÝèn¯eÞsÍ;ê}ßäÓfëóãÜOIe ßk\"\"\"\"\"\"\"\"\"\"\"\"¢«õ³¤\reÂÒ\x00\x00\x00\x00IEND®B`",
		fspIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00F\b\x00\x00\x00q.â\x00\x00äIDATxíØ»RÃ0Ð»\f@KI¥*þPÑ¦SGÇg,EìD²Wõð$ÃÜI?¤õZRÖ¨T¡[(4Ý<úÞm§SWIö	ëº*¯ô¾îðbòSÎÓ×ç=¤PË´îSáÒÇ]õ+ÀkKÛùìpMèX\b´|ê£_u±¹Ì4.èK\f°¾Cö°ÝgH}q8íÆc¦ÒÌp|ySî]j{-	úyêMÄÒØÄ\x00Ðçï¯Ñmûþn³=1^>¬ÍÑ¿ÈÉré¼MN]|1í[nöúÌÆ¸EË£mËÚ£Ø>?X«î¯cÊqRëNMeq­Uu*°ÃÓhËE]]®u\rs^{nAÛTJÕõ¬)R³¤u®-s2ÊW}æ_\"ÕÞtjá8sÿ\\i+ß[XcäøúñYõ²®\"4q@6÷¸Qÿ#AèT\\Ss»¶{aã¦ôJb¼¬S}:×rì»}\\*ê¬¾©Ôñôº»ÎØÆ¬1àº\fåº¯63¯.£6µéTV	º¡{GDDDDDDDDDDDDôïýÝUì\x00\x00\x00\x00IEND®B`",
		blurIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00F\b\x00\x00\x00q.â\x00\x00ÂIDATxíØ»NÃ0àÿ É#L Þ©L¬Ý²±ñ!8¾äb7ø¿ªjÔöéo	@DDDDDDDDDDDDDÕ¤º¤î8\n@¡i[rèw±	IÃ+ÖÜ©ÿw¸­/\nÀq¢É±é\\Uõ\n¸¨rý\n$¿²Mï¦©t,ô%th·­Çx¾·¬Ì~'ãÀ¯¬ÆæØË\fÙ\n6Ò«ÖØÂzÃ6¶i;¼AóÓ+Êï´X:º%½@??zÕ\r\x00\nýêY{byË­&y¼§rãK£w²të/Ä³WË£]Y!\"P¿çÎoïA\\ÕÚícö,oØâß¬'g¾¯ª\fçúÍNÌv­C©´§èc½w.ß-¿ddv¾:l^ÛÈNúïµÎ1r~~	·ó[ºX~Iw@îê£[gwK·ç'\x00Sr.¡DßKIÓK\r_»ÄÄ2Kgö§þ#¸³\b\n6¬Ø\f%£;ÚfqØÎ1oê.Ýî±6wçÌ9$A×ÑþQR¿îE´\x00\x00\x00\x00IEND®B`",
		moveIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00F\b\x00\x00\x00q.â\x00\x00IDATxí=OÄ0\f_#ÆCbedêÆ\bëmÝØø°&M{ãã>¤÷N'9®ã8ã B\b!B\b!B\b!t#ÅmN¶ÔÎ=qègyxåe?Ñ5}tH\x00\x00`HæEwdóét/\n\fé<ÝQ>P\f*+Y&Os¾Û\bÙ²ocU,Éés`beÖðØ¸G'õ-õ{P·ßmG)x{ÿAe~v6¦_}]\b$Ú4Õf¿n{7Ð1+ôîýMxÌ\"XÞ\b2Ë0@¿B rÇS\n,í$ÓÆÊFD¿sv$`~ônJ=cFyÎ3»¶vP3²î,«ªK;QVÌ¬ÂR¬Ñ4ÜÍ»¯(é¤2-ØµìhA'ð¬-«çïcþIþÓ,{³¢Z_ñ=\fËÚRg¯=åÀðï?_öQ*õû#W?zðÂY7­ÀH\fF¦óÕ±ÚOx©½ôÕnÎ9û@è|ÿ£ÆÈöá±¥]_?Þ(oµËëF{¾ï·µ~M'¦7LJªtszQgµý5½ÅøÔÎ­Fg	ðfý:ï¼öB)\r~úãmôpÕ<çZÚjÌ©eF¾÷Óæ_ï,\x00ñ^B\b!B\b!B\b!r²ü\x00Ù+`z\x00\x00\x00\x00IEND®B`",
		fsIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00\x00pâT\x00\x00ÒIDATxíÙßQÜ0ÇñR\x00sN	äá\nHh%EÒ\nI<@	¾Ø<ý³ìs&|?Ì\rc[Z¯­Õ	\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00q¡¶ÓÌ:3Y\b\n2õÛ~t¡¼¦Æuu>méh))#í§ p»ö<ÿ(ÓÝéò{£jBBûÇt4éæ¬^ð 0K%=½¤Û `ñ³gèËµy9è¤ÔGdY¼Gß/qòdÕÚü-nláÚ)7($ëus¦K²SÓØÕIF-¼OÉÂHFºË÷»ÁYÒ¯Å«OÊrBqhô|·ÒM²ãd·¤ô2³ïßµ~¾ÞÜçÉÏåþX¶=»x³?GÚÎëAêÇôqósV>~Ìs's®MJ»¤\"50Mù;­3à K:Ç»Kífü4V4u¦ãñºÇ]¬úá^MÙPCVÕñbMn{u 0I:­<oØ«ùõ«|R¤´PêÞt­,<¦Ç¨wüRÙ¾TþÞß÷Löy Ý©ÿ÷Êþb{0±otcÜÐ½ô0]y1)ö80¬w «	_Í&I÷nû[¥MQ2i*Ù\fiyÕLJX±Âª­\\ò}zFÚøvYÛôçÓÛÆØf·Lö³rî<¿¸iqsU2¤±ï!½'å¿­âV0órëÍ¤Ï*§¢MâTY«G»%CÕMÊXâÕÉù­¯1Ó¹Ï}ÙëmÿZ¼Ú~¹iË=A»%CZ÷r±LÊì¹SóB½+håj+ZõÁ\"þº\bº\"íKÓûÝéÍ{|¾ËÓ){n¼<ýàän»w2Ù¤­ý\r'e)4mIHjÑ[²þ7öþ\b\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00ðAýÞavT&s]\x00\x00\x00\x00IEND®B`",
		fcIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00\x00pâT\x00\x00êIDATxíÙÍqÛ0áoSGL	òAxÜ{JjI)ÅN:X%H7°9\b°@\x00Aù/vÞÇ%\bj	b)I\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00àÓ²tÃÝgÍ]n&«ûÕÙø£«qi&0ký¶`\x00®Ç¤´â­{ûý\n*ëöpú¿À(!Vÿsm\\º:*&¥ÔÉöö?cRLæµkËyòn?7o\\zZiiRÆÆ%m²c·I2Vé~¹üùøüBÒ¶Ï\"^Ã¥c7ÙJÒaò^¥ûá2=h¤ýÈj$#í*MËí-±äîý(.?JÂçs¶`¦Ô2UåÈÿÝRNH_2§ñ]ïä°ö\fÉ¶ì1¶e±mïþöé9òíÉÖÙ9Ócoò6Ý5újÆ'ûnLö#9×Q]é¤ÇÔ)°¾ÀØ½¤¡ÑÞ¼[B])aÊÅR|mõÚå»|\ré\f!?}kMYCº1'TC²½x]1Ù é° þ!Ùü®gi[aKôÕÆù³8¬|¦H±x$´<CnãHç¤l<VXqàyÇ×vÙì	Aç}»?eÔWáNÌÒsÃ¸¸_è´-ßWÛ\\|£ÌxÄ}[/­!¦ûát`*dÔ·#ws;µ*«pW<OÒ[j¾/{i*êIãzã?@,x'Cj¿´fÊ!¼uIª®ý|ôüNÎù*®»B[^hìfúê/'cÚX¾áªkJ¥Ïýµ¤Çs7ÓjT3¯YeåíKã'û$ã/§3¥#Ó.ß5*«ïçMû2uV[!öÏ~ªcY«ª3ã|ðx-§|'TZBëòâtqNç×Þ¯ûßógôZBõx¬HÕJµ6{ÖÔätQ}oõ{\b\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00^Ë_ÔqÆC\n\x00\x00\x00\x00IEND®B`",
		bsIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00\x00pâT\x00\x00IDATxíÙQr0á.ÀÁô­l Ýÿ\\A»7pû@\"Jâø£B\bm7¡V\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00OËí}A3[=îäÌdÎÉÉ´Þ6qnòþ5M[¿ÿî£#½íÉ<'gê-:?l¾åúMôeú:ÏÙ=zB(¹>î­Åé½IN-²Q¤~6ßQ.Þ¯xú\nSHÚe*Ì×>\fÒé8^°»úSÖJ¡OÂÈ\rYÙôýN«ºl!©óô!Ú®ÂZr/äþý ÆC©HAÌRÜà\\«¡ÔYCÂÂ#qÚ´6Ì¦¬õùN3Ý®­)/²ÜFlcýp%}Ü´Wn:ªTJ@¶¡e4=ä¶BÂ¤ðÃñ\bµÖ§ÓqÅ¾Ó'SÐæýÚ´±0¤ºwYÙPü´»u]ýÝÕIúQ£aÔ¹ør¸Æ¯1.³ñçh²kbõãÞE½<YÔçÖ¦¯óØÀý¥Z®aø×ãS£´P!Ó¸Rf¸Ý½î/±¨0èÑlu3}§«h3³Åû°/õ:Þ×ù°äun¶\nZª¸Åâç¿\\\fïK=ÓÿC\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00ð_~O	(Ù®\nùá\x00\x00\x00\x00IEND®B`",
		bIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00\x00pâT\x00\x00îIDATxíÙëm0áã%ÊÍþdNÊ_«mH#ì(ï¡´Á`â/(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00x[îì\nÍ,¹ßÉÉ)]v/·ý5M¹ïzëH_çWçäL­PRåÿï`ºuþ½2§ââ/SkÒ¥W\b%sÛÁKðõ<ÕÊùÒ$µ6øñh¦kkøzÄô$.7¼9¹FR·ªûÒK÷«/²>ètå¬DÍ%±¡kø¼tÎ;ª¬§\r$¤Æd«NÔÄv\fª¥\\ ;ÂÔï°Ã\\Òí(ßKrµRf	k<ÃæíÌMæeãESsÊÌ!ÃXÊµÔ×º§HaÑQ¤§\b$ß\bmèFã+{Îçzû¼äÀÍñj¥,ÿ×­÷)ºÔÚZö.Ï>¶=ªGòa|È8Ý¯¾!¦ÆÂèi+¨KãýaRú9$ü)·\rOìCXÕQæ¶-9|m¸#CÖ±0\nÄSK ~Ï4üûì²w¾ÊKÕS¼¿Áé§VOlf¶Ú6ëù¶|=ÔÔC¦%V×õßFÞé÷\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00¼Êiï§Àÿ\x00\x00\x00\x00IEND®B`",
		ssIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00\x00pâT\x00\x00 IDATxíÙÑq£0ás·\f®`ßÖ\rdû/ äq+0ãn@\båÌ)ÿó0ÁHñ=HÂ\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00¾-;»Cw?<n2w¹L®ã×Ö²òÛt=zÿ§WGúu~ûLæºz\f¥t|ó¨QhËõ÷6ýìÌé®«K/£b({m»>WÐ©û C9Pº¤kV÷$ûîÂßèòyDßC*^ýæÐS/£ôvûÉN8]û)ëqC>åäSÉ<ßvz»v¶T!iLH¦+I²½âçûC£:¥] a<ÙªULa£$ë56kH\\XÖíiÓ®áµy-=gÙ¹ÓìÑòCÖ§ÃHUTé+|;R¤xÓÑd¤´\bäq®q-D::öî²j¹!ñ\"©¼8¾B«5Äôv\n\n¡ø{ù¤½OîOò{>ÞYRÛ»¬ÝPÂ1ÏÚñh1aþ©Ó0Út¾½n§¯1îYý§â\\\\>'fqO×-Z¶à¯B²t­¯\rã,ê¹£éëf²4©<ÔÑÂåóK§##êa,GÒ©p»[Ú4¶Â6#¤&.\"új~¸¹^oËU²¹{zÛ%w¯Þýüñb?«­FHúÍß~¹×úNÿ\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00Àÿòmè6ÐµÄþ\x00\x00\x00\x00IEND®B`",

		sIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00\x00pâT\x00\x00øIDATxíÙëm0áóu,Qhö t\nPøúpñ%¤&ÊûD(±MãmÜJ\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00àeÙÞt÷ìç&sÉäÊ-´s«oñ¯é*}ÿÝ{GúØÿi&sµBÉ+¾\n\\nx?ÝÉt¢«uéÔ+kÇ¯lÕÖ¥FG\feÿAéÚE|OÂøi¦ç¾ÎLÖHêV×>õÒõ<YWÚ]ý)+¤ìZb2_rÔK:íÞl¤Ô\r¤¤Æå«5a<êü\\Ç>z<¤>¶@GÎË`zIvÔPê¬!aaM©6_C´î8+7[SÞd\rÙÆÃín·)Rxè¨2RjRî6\f£ôclbÚÚón¿ßO«5e\r?]ºù(ºS]x¬e¦¬FÃ:RãM¦¬Àt=1uß6ÑZsiKÔÞ$CÔ¹DÅÛÞ£Ê8ZF_ >e§¯XÂ~#5em£B<G	dødJ¢½j-àb\r?ååFFõñ²Ï®¯îþ`8Ü}Ó½Î§¯SÃFÈ´Drd»}Ë_éÿ!\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00ø/¿Y8àc+«Ç\x00\x00\x00\x00IEND®B`",
		isIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00\x00pâT\x00\x00IDATxíÙÑq£0á£ÁämÝ@Ò© [7p÷	ßI8FÊäÿ<m0ëp¹àH\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00àÇ\nGïÐÌªË,êÝ+ä¿¦iëû>:ÒÓñ»,\n¦³¥PrËýÃÂ®Ä2Û2½]¦çÎH(?LgG¥PJÛ(e;CösÔc(Ç¥I:/ÆàÃqü|ùÓW:õÄ×_8Þ¨É²ßkÝ{¥÷Ó´x½ÂáÚ²*aHJ=øU\\¤!âë ú0âvo:«¶l!i§§1-*4úQÓ¦i%;ªóPÚ²#\fIcá\né£¤Ðk(mzHj¬å02«M=Ä÷IÁõj)^úÖzÊ/é!ÃËô{¬+EJM*¥E ÛpNet{ÔÜqù¤dçÁñ\b­zHÐûi\x00/bù¾éÎýeÞ\\gaHm¯²¡ÄÓÒ]ëb¤¿ê46;_äÓÏ×ÅøOs2ÙX®¤ªñwèM}¿¤©/ÕN_é¡Z-[Ë¥9¸n+#é¡BnK|¥,iy¹ëçï±ª=atÑ£Yu2½^nVn2³Õûå<?ßOÙýü±ì~ê÷û×SøO¬þ.ÿãbz¿×Oú\b\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00¾Ë?1#î^\r\x00\x00\x00\x00IEND®B`",
		iIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00\x00pâT\x00\x00âIDATxíÙkr0á.ÀÁM\rÔý/Àt0nàëB%q|'£#\x00ÇÜZ	\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00¼-·wfÝîäÌdÎÉÉßw-7¦¥ûßýéH_ûWæäL­P^YéÔù÷ÊìK¿L­I^!Ü9¢ÏÊÊKðõ\\ÕÊþÒ$µwÏà7\nãÒÄß+×}\rÁL¼'×Hê&uzé|ô»LÚ]ù.+¤1¸-EùÇÊ¬á^Òq8ïUe-¥l aHjB½\"½ü\feIõ¡dEúÄ\fi^«52cHXÓaÌöÿ1$ªeÇCã¦-E\n\"-¥D Ë¡\rÍhvÜ=a­rÛBÂ¤ÌCe*µèÓ©»m%ÒâT÷^¼þXÙe5\n¥0>¤Ë\nÎGÿ b×Ea3{Ô6ëÃ(¤ô:$¤nXÌm6´´êÃ(s©á Ó}¥N5®¾Ç,vYQ Zñ[âPçÜ!·³¼\\Ë(Þ^ö`Ùbúé®«L13ÿ§üÄ÷q­çÛë) ¦ï1¹®-SÜwú\b\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00åHÓåJã$\x00\x00\x00\x00IEND®B`",
		usIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00\x00pâT\x00\x00IDATxíÙ]R0á/.Àxg7 û_+ðÒé$¦!¤þ8¾O©B!6C«\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00þ,wôfVÜîäÌdÎÉÉT~m-¦½÷øìHÇ¹ÍÉNBÉmæ¯\fez=ÏÏ9<·ý0LzBÙ:Æ7+gç2¨ÇP/JtJæà=\nã2Äë%ÿ7l¹ôøÃA\\m@Kè±ÇIzq×þµÆNxFí0Nn4úã®:«¶T!iûD¦B/Y6DýÅÂQÒä®CiHe÷¶¢ÉO\\¯¡´é!¡±zÆínsIû¢	\f·ËºÔÒ{,÷ÒCî#voÿØiø·\"&Ò\"ýI82Zµî¼%¾®pT¿¡Uqzç	ùPì=¿Ó}rZ×YRÛ»¬ÍPüeiÈîõ=¤uFÁoOòùkK2ÿóä&[ÛèÅ²ýºª6ÒÔS¥Ë×Ù +ï¿Ã_êu\\A²n+%¤Ìín²söËÈÑdçlÔÑED¿Íéå¼ÞXEÝü®×ÇKvgËsµ4ÐSÄ¯ÈVÀÎW(þÒÿC\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00ðS>·Yö5\r\x00\x00\x00\x00IEND®B`",
		uIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00\x00pâT\x00\x00åIDATxíÙmr0ás»\x006Q6P÷¿\x00Wà*`ÜÀíßÇÉ´åÃ`7©\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00>íÝ¡»'÷Ì]n&+}ìR6ý1]Ï>ÿî£#ýìßå<¹*¡lÙë\\·?f÷@lþåª\\:5\n¡lt	m?·BG\feÿ¢tIÕh\f®Q·\"Þ.u×¸¶bLVHªú>5Ò¥¼÷3:iwù§¬çao\bCIe÷¾½UJÞ@!©ZMæ¡¥¶>|,\fcIvÔPò¬!aaM¬§\rÇ)®ÛÜ¶nûüÕ¤Ö/YC^cC\",#çP2ê_VHøäùr(O§ýv®U\"IWÓ'õSVXñ%SV`ºí@ÄúÂbò¬uIîçÙP$ÕÝÃÜ7IÞêJ;|y.`zØf§/I¥Ëï©ÌÂül7SÖkadç(´{âPFÖ8xé½ìZíòz´¯«ø./UÙëel®¿º¿±»ß[üwê¸¹cärýúd?Á*$>âáºÖÜú~ÒÿC\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00ð.ÿ'âÏDÛ¹\x00\x00\x00\x00IEND®B`",
		uuIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00<qâ\x00\x00IDATxíÚ[rÓ0à#À¤lfè`ÿ`<²dºñP+Uâ«|)¥ý¾§àÊ²øsì¸D\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00ðK­äg&L9GN)Rä»Dê/1ÇÌº÷8ï[ò2m­OmÃ§¥H9s	bÏ©?ÏÏ_?©LÓí+w[ë)É´¹°Òø+Çcø|ÄçùNñÞkk¦.âÃ2m.ïÈñxwþßU\x00O§zDDÚr÷JNqîóó%â×ÃóÞÿ¯KVeZîNÝËò¾mm\"Ó×ÿQ8@DF\\êÝ|/Þáëª1Óº¨Lß]¬fº­°p¹?¬êòÔ¾ÊÇ)®ÆLîNÙvw¹KéúÂZYT\\\"\"½ëâ: Ófþ°L×õX¥éàîÞ§\\}/íëö¯b¢?ØÚcíõ±¾å|±\"Ó²Î»79^ç®O7lºçz«)ô¯²Ò\x007WDý9ìè1#VgÚÚ_M\\0»fº¦°æðXnkù¨+ÿöê*oÈë÷Ë´aì®®í±Rüzx>y­\"ÿ^9ë´r)RTKÞ°½ÆhÎtöëuª3Ýò©p4îö¼õ1C­4­»Ð­µþÔÔ{·ö³h9¯é8èB]Û¼ßîùy¾í\r\"ÊÂräÁÇ\rÓ§¸iÞªåJî=(x¨;4¦^ãÒ1k¸ßµ(Óþj6Ûê|Ëêü®pê~î\n£XÕËrÜ©Þ¸Å;ïgº×/¡ûA¼,pð¹KÊÖûßº¯ýùKsûþªhÎ´>¶Î·Ê¹d{ûüêMd'·?Î/ýk·å¯[ý÷ûãëq#cr|Ï½ùÌ3¶]»íÛ×ì%ó4¬aU¦Cÿæ£2mµG54buÏsï#ü¬Ï½3­kì+gç8\b\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00`«¿h¶7ñÕ¦\x00\x00\x00\x00IEND®B`",

		sssIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00<qâ\x00\x00CIDATxíÚQv8à«Y@³y«70Ýÿº>vñé4#$\fiê~_O\"$å÷N\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00¶Ô»CÎy¥Ãsä\"EzÛJ×}Ó|9Væ½uÜÏjLþÊM«öVÊ?}ÍëR¤ç<±Ôfõ«\"Ç·×·ÿµL;³»*ú9$ÓîÂªDsør1¥>òÊ×ânçñëÏV\\f:d£?Ã2í¾Fs1þI\x00¿NÓíiZ,½§óé¯³1¿\\\"¾¿¼5MñÏª¹iS¦ãjøÿP]¹é=½íT%Ó¿vÕTË×Â\bxú{÷g®«L#â4m^^³=4ÓÇ\n«!ò]%Å­Eu7O.©#ÛC3Ý^Xî,0Sãéûé©kc¦kÙé¶5Ö¸è[ Øåvó	§öó.+ëG×X{ÝÖ÷2ç99¥¨d»k}Íõk¬®\x00ûì3?Ê\"ÆpwE´Ü®ïÕfÁæLÆjÍc×L·ÖúÎãiíþãÓsÏäo®ñ\ry¬¸§G2­Év×L·®±R|y|j\b\"ÿXï`C\x00§kjåÚ®mtgº4NG¶ÿ^¶s¦Ü.1\\óOw÷h}æïÖÝæZ½5ß«MÓtÌtÔí)\"~ÆAêÖÅûío¯·kqb/9òMJÅâ=Ïë¶Iûî¢ê|\x00{Ûïýº³6å×Ò¦2rSS¦e×}ïËl§ó¹¹aÕê7|VX;¿ËõAÃ}Èê«f:ló¢ZËöÐL÷úzÄ0Á{wJKGr¼ô¨à}qûüE5ZÌ4*Ï²jÙÎúÿTæê+Ç¯ïë×;¯s×kÖÿ×\\í¿wëj»ø|­MK?Ç¦L1Ï´×k¬{-î®y¦¶º»þx²¿Çj|5Ë´¸\n<2Þj¦O}m\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00>Êÿ³ÓòÂz8)\x00\x00\x00\x00IEND®B`",
		bbIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00<qâ\x00\x00oIDATxíÚÝq£<\x00Ð«-`Ç©`]Aú/`+HÎlúlb\fBBòåçL&[Hâúêp\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00_[ê= çÜ¨0å9¥H£^v4ïbF¿÷h÷3:*¦9r)ÎÓºüêìS£íãäZ*Sý¿!Çóåú÷I6ïÚØn­¿¦;±ÒòOsøýCrUêÈÃoGÓ×úÿâ'%Wm°Nã?ý]ªsRÏ!µ{)çI^FIõï4~=\"\"Oä6Æ¤Úô\"\"â2kó÷kÄß§â9|µ¥°2³<Æõ%E¦ÇÝ²ÒI/ÆöísâZg,¿ºèýÕT×Ëµ´¸ïJ®/XëÚÄ*Åöm«%×î±'§ÒFqÁiéx§[½wßuY\\×qñQR-}ü¥ØÏíµîä_WÔ4ì.ÍækD¤o\\qmÌÎµØ:X·-Óµp?ùÉ!ix±ú&eËÅ*Óø{Â½.ë{ÚsîJªñ7±VÅv×ö²øKaWRMµ.W^)Îg®aÒãk«£Ë,j'UÄº Ö¿¥Øì¾lI¬öz¦µ¼fä§è9GØèªiC]ÁæÁÚØ_õÄv×ÁºuâïÓ5NäµÖ\r?$©Ö\f½Êì=X·Ø5®ï¹*\\L®Û(*^å²\"PÃÞb÷¤ºõµzcq¯2Í®tÖ5	Ö(óç­ØîqíUÊçËã1tê)GíZAl2»ªgDÏîçoêÎÊ.2e*}xì~G<KáªØvÇõxVXiê?d¦úÄªñ¼%Ä­`óþUÍ¡qÝë!ô<·Î*Ö,òûä{'Õ`urõÄöÐÁºÇRøøîó¥þÌ©zðâ#{ëýjýÝKaáåÙR8oc¾6ÊTú°ôÖã²8:ïÂý«¡Í5MmÎEÆR\\?äYa»ÄnÏî~Â÷±³xq°N¿C5óøænãùëýÐõðÄ¾è·ðà´|Ìû ?ÚªÅÁZJ¬í5ë·Ýt\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00°à?ZûVã]ì\x00\x00\x00\x00IEND®B`",
		iiIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00<qâ\x00\x00IDATxíÚ]r¢@ÐÛ³YÁ¼ìYÁ<Î\n´²iÈOàsEÅ¢¦ýÒÀ\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00àkKs7È9OtrR¤È1Þ¶Fºbq¯±ßGò\bÎ)?æ5\"åØçÄ]9Þ§¿ßÄX¦éòS¤ª\\:ýléì_9ö9âå%¡í[ïó@NýìâÙ&×­öÄÙnéìKaäØwöÿ§ÀÇ®½>\"\"\r|ðÒ[ÓmîK´ÃÕ>_ï¯½á«]\nS¤E´y÷©&Ûó¤mÉôþÂÊ\x00Ê«e×\f·,CñÚô÷é	Ï\\gÆ)»³ÖY©Tí¦Þ6±*(gyµãôÊ2æûL®ºIu,«ÎÎ5Ùnéò53#\"=õäz¢LÕX¥è ³ÉM5Vÿ(Fê[k¬µ¾ÖÏÙ_,È´³})lÕ^S5Öuc5×j¬Yläú((ðì1PnÒfÀâL{ê«¥VÍtÉÄÀ¾Ö®êª³Ï\bGWùÜwr¯iLÙ®éÒ+ÅûëiçmMùÏÂ^ÇCyIUû[£ÍÙ®p¹þyîjåLoùV8DszÞõnµL)ZW ëùfbß\rÅµÚT\rç¾þÔ¥Åûå·ÃemQö#~i?qtÖ¤s$_Ý(ì¹©Û×¦;Þ6#cè®ªÊ´¯¾*ãÊöâC16©þÃ³Â±Søax£T{ômr¦zp£NeWí¦®õú:fÝ§_E|ÌSY&û/ÅíóOªb0Ó¸UíeG¿õëÀs>ýüf`}{¹êÿW®î¿fi=¸x@0Õ¦¦ciw»­3k«¯Åâ§ë;ü«â¾Wo¦+À-ûÌô©¯\r\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00À½ü\\æ¿ÚR\x00\x00\x00\x00IEND®B`",

		overlapIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00\x00iIDATHíÑ»\rÀ0\bÐ;)»dÿq4NÀ6RÒD÷KþÆüÓYwï!cÌQî>7³-¯}¥îqÍÂâ;­uÇ\b$UU/æ}Ûs¾ý\rÕÇ\böSÿ º\x00°'8¸-F\x00\x00\x00\x00IEND®B`",
		verticalIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00\x00¶IDATHíÝ\rÃ \fï\"vaîÿÚÆ}	â×@T©ª?H!pB Ø@¡Áì©â\x00\x00~Ñ;LÔË;7qÅ[AÑ·RÄIXÏ6Ø2¾bxÄü¾xFrGÙX3nff÷÷Àý¼S0®ýÅv2ã¯áæKô*2Î\r+¯8P/ï@©*Y{?Õ½ÖÒÛ­6¹Ôc)AÄqÏMRîÿÎ\rÃ0å/À'YprÌ»\x00\x00\x00\x00IEND®B`",
		bxIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x003IDATHíMN!\fºP`L<r\n¯ gõ\bÁgpåî©`Â¥?+Ã;!$Ó¡eÚKKÿMÒ½yP\x004 ª¨HèZv@IÈËX49vyNcB]Äªº;ÝY\rmíSÀqÿ±rî´·ÐÚ.OÉ¾»£VTÆæqÍ¦<`«,Á¡þï$ÜL.>J`\nò!æqö¸à)xpF¹]û;vÀföÖZYþ#ð!t^oB;ìBlèZ¯ÀÍ|X2^©õ]kÞó|¼\rÁ¦ó*{ì®Û<qÍMÉìÖEbèsçt¦?¸9UQÖÚTjæ%V·LéJ-7àÒ\x00SºÈ°¿Ów\rò¼5ãñ7NL}UºI¦p_\x00\x00\x00\x00IEND®B`",
		uxIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00\x00ôIDATHí] \f7=L¹M{VÃi¶6@PûÔag|ÐÕ|ülXZú7yò$\x00\b	$û¡ç30ùâÞ{Q$âyÒw¹&dfLò(z(öihë05cû2Qmá-Tûò*õ¸`³ÔÙ|rV¢TèÉ%á](Pöwîk\bï@%aÚOÁUà¼v»\fvÓ«ÕiµCA[¹H\bÕòZ­®Ou'Ú¨äö±DÛTG-3jµÉSË»ÅÕ\"ÿ2Ø¤¹i6Ù?ÿ;Ý\nWqýÚ×kÂe çuj¯nëýL°¯.?!\x00\x00\x00\x00IEND®B`",
		sxIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00IDATHí]Â \f7Fn£gõ8f}ÀvB\bþ<9ì6m>»-°µõowåJ\x00\x00+ )þÁ¨Î:IºD7MQØ×ÅºÜÛoAnbgÓSUpL¦¡¶>ýÍDßÔÂ-T×åÖúñÝVÔ`ñ%Ø	³¨\b8KÃP ï\"<4×>JÁ2t\b^+ÃEqûºWkµSI¬ÂH\nÕ2QkM¥{ ¤q\ns¬ Á,T:wuYÔüöÝ¹c5QV70¾þ»ä96Õ³-Üéç_'uÆÒAÍæj ÇbRûØ\\ò¾ü0Ékkkë+=_´±BÚ¹{\x00\x00\x00\x00IEND®B`",
		ixIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00\x00òIDATHíQ!\fD§Fn£gÕÛpñ°VZ aýXÊÎ£Ð²ÀÖÖ¿IÌÈ\x00\x00f@ $(ì^¹9y«)yÆåZÌRH¦² f¦¡m¼q2¶#Ä«io¡:.âÇÛl¶  ;OÎN4j#°¤1¼ÊùáÓªva´ÿÓX¨_ÚOÝª>z+¨¤2wUÉØícÕV{\f:ð­õ±L,\b¶U=kQ«o-ì«fñ·Á¦éÅW+ûk§·«Dóª·Ò(w/{wkkë§z\x00±Ì³¬Æú5\x00\x00\x00\x00IEND®B`",
		fxIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00\x00þIDATHíÝ\rÃ \fï:LÙ¦µã0ÍõP9Æü¨R¥ªâ$^rÄMì\x00lmýØ<¹\x00 \f 2µ/F¾rÂs6Ö H*Áó¢Ï£¬5©Hz}+µ2õ~TÜ>®A=ÜC­ÏG§çÜµ \"É§à$\\R8RfÃ»P |ßExØ\\CxÊeh¼7\rÛÇà°{­:£VEPu-§Ð	¼»îñÐh«2ç\rv3¦D]=Ñ¨ñðÕê\\spÜT4óW5c72=ßt¶M\bú·q Ãæ*NpËÔÄÈÃµ¹­_>ÐÖÖÖOëe=³ceãþ\x00\x00\x00\x00IEND®B`",
		logoIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00P\x00\x00\x00P\b\x00\x00ùÂ;\x00\x00\x00	pHYs\x00\x00ó\x00\x00óÒé\n*\x00\x00\bIDATxí_hGÀ¿ILR0l\rÖ(6« 4BëKÔBÿ ¢¢Ò§ÖôO¤X°\n}0´õA|èCÔA,ÔAKkÎR±&h©cIr¶xINùövîfwgvgvwr¹z?9âíÍÎ}÷ÍßïÏ,¡\nJ¥\x00 ýXP¨:Mr·Ü¸×û¿ÚU/X¹|_MÓ@(ÐBÉ==Y¼öi¥{¥rÿZ)¯q«´}+ø|Ø¯ÖVÏQîZ¦!E\x00ºìw¶(ja« Ü¯¯ðµ\nwS¥÷3lÃÞc«d$@ZD;Õ¢eä\bVçÇð­_ÕE´ÀIâS#± \x00&d¢òÃHD^BÕt±nàAëREhe\x00ý®!ÉóK£ýÆ¶Î+´ÓÒ4tÓ£Ö§\\oYÇA¥Ü	«\\øÓ¹Î\\¿é«\x00p7°B~î@ýÌ%íÎki¨\fÔßÅ5cÞËò±\"BÒÚ¼~ïØW¨<×­BÑXÆ.´×u5ÆÐQxýç%²Ê°?òcy\x00ê%%ZT!?ÅÉt¡x:ÜÓõ^\"ÐJV][/@üzexÆ2±7\nq9ÉäXá2YeØX¸$ )Õ/¬ i	)3mÞ§|àæBiMax»Ó]:$´RÎÌêé¬·2/¨Ãn\ræQumþóWÎ=U¨ÎòÛ÷òeOî®_á¥UÍ®÷á§^á¶3[UáHÁ%´CV\x007EÂ¤KXh¡Ì_S&ñ¹áÐ·2ewÌSÊ5É¶¸·ÁþE:Â¹ÖdN°h2L@7\x00~kS0ßÄÄ®ÈÂé2°Vù±M\bVGfE8!ÏGüµyk(sVìÔªaÕý·ØbN3Wi¼)Ð­Zv}h1Ã×v?íÎHwAÔªåØÉ@KoG£j&ÕÊþ]?/LÚ1¿+âÉ7±SàBlizypÃçAc	p-<Q8Ö==µ¾;%vè¼	\x00c$BÃðÝ^µXcÕ1+à©ÍRa0Gss\reÞ9î7 8î8yc]rcUÄÆ\f]0Þ ú¨¼£KYq)²q\fgSz00 xz³/6ª³pòè|ùQèJÛ<H§bÙ¾>µH@¯°Çj½! ýa>:Ýµz¸#ªZ{Ýl×½Õ% ±à7AÅwÂ­ù>÷¶è	Ç°µ¹0£Z×à\rcByY0QØg9gAè4\n,Uâö@Â6´	MÔËèúAÖjßÙós£_¹=Jg7	¾\"\nvhí¤ßn+G2HÏyBdeQ%mçá=U3oú @¤1H*Ä×dÈæÍDW¢X£Ø8Úi/¨9­\f¼y/¬\bPmÖsÞÞ\\Xô|Üs_ëÎÃý¡£X-ò®ï·`«§ç+oð{áýêµ0$ÑUáñöÁH»_!Ç»å;Ï>ôÇð9þÌ«¨úò®q8ðíBÏUi3çhïãÃ+àÌü)X3U#¸K* 3â#âú&·­R=]cï`rß¼Ì¾ÙäÔ`VÀ¾8OOÞU/Í\n(sñîîmR­¢x5JS9Ãl0\nßW²Ú\f'f`°Å;Ëùb/Ó¤5]}.yéB`(ñ\\G&1Q¿!@Ôë¼¸æÂÊNô¸ã$ÿwæ|ÏuÊ\nIY1)+0&¡aº(8eÜq1÷!ÿ/-ù7ö×â1ÈÖMÁDSÜ\\÷/\\Û²ÔNÚÔ°XMà:äuvâèÜaáH.¹göÏ³ï5ê*£I3ºOåid¢*Ð:ûÍÀñîd´Ï`hÖß0ª¼$ÁHjç§õ¶W\rÃ¾«$®*¸ùä)T ±l+×\\B@1`<½Y/@7¢Á	ÆPÂúTN¢DÞ8Xi.£ÌQà4q\"Ñ#}20ïñï\x00°bVñ¹[`_÷',ãt\"e?ÿ \n»It\nAà|À¨BÝ¡NiKK5~ô\r)r®Ù;ã~cÄÜwÃÎ°'K¨B&9ââåï+B1¨=	söÙã*Q¸Z[Þ¨iR:$\\åâÊ6­ã¯^øxÈbö:)JCO\f:©KfòÐÛs=Þôïr&Ënéä¼+QÀìì¯­gUÒEcñþy\\OWÒ^E9<)c-êé)è}U)¯ÅW3oM´m\fSÁlç`fæ×À¹ýZPæbåE\"è\\®|©9gcüééåÃÊ^E¿2hÚÎ9hsreåfìÇ²ÚgLÿÃ^¬ðT§f+ÒñÂ¾å`ÅÁÓyiTKqþÜÉDà	æ`hÃ»\rå?VÌ3)Fi5o+\fGtí_hKÔÊódÄWç¨Q\x00JWU3Y­½!:Qñ\x00dÂqÒUà#Êÿ.0.\"xþ`TJSm×Fa_wô£Ç:ku²É(=îî½ß¼(}§F=Mz6¶äÆ¡òÑCø¾µGÓüCyf´Ék^ç)j¤¿V=Í#É»öÙéúÎ¹Öû»OòÈ³Ç;¼Ë\rórÎ½Ý\x00Ð«u[9G:&åË²ã\x00\x00ÿ\b. öv\x00\x00\x00\x00IEND®B`",
		rewriteIMG = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00\x00;0®¢\x00\x00\x00îIDATHíTA0\f³§ýeÿ¯ñí6èH&$$%¤­:ig]PøYÒb µ  ãm¿Ñ¸Euî/¢p»¥\nàìãÑÛ/{VXÈß>P¸×x¼Ñ(þú¯ù¼&¼Èa¸ìF¦¹Öl.ßtSxo¡$TÜÞÑ4\\÷_ÈÇ\"Ö÷×â}}jóJkg\fª5Þ\ri«Ýaî¶åÏ±ÔÛâ!1\n»æJ[Ý	ÉäÚE³\\%áP|&Zin¿3S¤\nLFqsEµ¬Â>§ÿ>¬¹.O=qPÞñÀ\x00\x00\x00\x00IEND®B`";


	var bgGreen = [0, 1, 0],
		disableGreen = [0, 0.46, 0.03];


	function es_buildUI(thisObj) {
		var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", es_str.title + es_str.version, undefined, {
			closeOnKey: "OSCmnd+W",
			resizeable: true,
		});

		if (pal !== null) {
			var res = "group{orientation:'row',alignment:['fill','fill'],minimumSize:[630, 370],margins:-14,\
								leftPart: Group {orientation:'column',alignment:['fill','fill'],spacing:3,\
									listArea:ListBox{\
										alignment:['fill','fill'],\
										properties:{numberOfColumns:3,columnTitles:['#', '" + es_str.time + "', '" + es_str.content + "'],\
										showHeaders:true,multiselect:true}\
									},\
									buttonArea: Group {orientation:'row',alignment:['fill','bottom'],spacing:2,\
										info: IconButton {text:'?',alignment:['left','fill'],\
											preferredSize:[28, 28],\
											properties:{style:'toolbutton'}\
											helpTip:'" + es_str.infoHelp + "'\
										},\
										preci: EditText {text:'1',characters:2,alignment:['left','fill'],helpTip:'" + es_str.preciHelp + "'},\
										olGroup: Group {alignment:['left','bottom'],orientation:'stack',margins:0,\
											olImage:Image{alignment:['center','fill'],size:[28, 28]}\
											olCheck:Checkbox{margins:0,alignment:['center','right'],helpTip:'" + es_str.olcheckHelp + "'},\
										},\
										pickPos: IconButton {text:'☉',alignment:['left','fill'],\
											preferredSize:[28, 28],\
											properties:{style:'toolbutton'},\
											helpTip:'" + es_str.pickposHelp + "'\
										},\
										guessFontsize: IconButton {text:'☉',alignment:['left','fill'],\
											preferredSize:[28, 28],\
											properties:{style:'toolbutton'},\
											helpTip:'" + es_str.guessFontsizeHelp + "'\
										},\
										rmMarker: IconButton {text:'⌫',alignment:['left','fill'],\
											preferredSize:[28, 28],\
											properties:{style:'toolbutton'},\
											helpTip:'" + es_str.rmmarkHelp + "'\
										},\
										\
										lineNum: EditText {text:'0',characters:2,alignment:['right','fill'],helpTip:'" + es_str.linenumHelp + "'},\
										killTag: IconButton {text:'⌧',alignment:['right','fill'],\
											preferredSize:[28, 28],helpTip:'batch remove tags',\
											properties:{style:'toolbutton'},\
											helpTip:'" + es_str.killtagHelp + "'\
										},\
										killOther: IconButton {text:'⒳',alignment:['right','fill'],\
											preferredSize:[28, 28],helpTip:'batch remove other',\
											properties:{style:'toolbutton'},\
											helpTip:'" + es_str.killotherHelp + "'\
										},\
										resel: IconButton {text:'↻',alignment:['right','fill'],\
											preferredSize:[28, 28],\
											properties:{style:'toolbutton'},\
											helpTip:'" + es_str.reselHelp + "'\
										},\
										rewrite: IconButton {text:'↻',alignment:['right','fill'],\
											preferredSize:[28, 28],\
											properties:{style:'toolbutton'},\
											helpTip:'" + es_str.rwHelp + "'\
										},\
									}\
								},\
								RPparent: Group {orientation:'stack',alignment:['right','fill'],margins:[-20,2,0,0],\
									statusText: StaticText {alignment:['right','top'],\
										text:'',characters:" + (($.os.indexOf("Win") != -1) ? "8" : "9") + "},\
								rightPart: Group {orientation:'column',alignment:['right','fill'],margins:[0,18,0,0],spacing:0,\
									editText: EditText {\
										text:'',alignment:['fill','fill'],\
										properties:{multiline:true,scrolling:false,borderless:false},\
									},\
									btGroup: Group {orientation:'column',alignment:['fill','bottom'],spacing:0,\
										bbt: Group {orientation:'row',spacing:2,alignment:['fill','fill'],\
											bButton: IconButton {text:'<b>',\
												properties:{style:'toolbutton'},\
												preferredSize:[60,30],\
												helpTip:'" + es_str.bHelp + "'\
											},\
											bsButton: IconButton {text:'</b>',\
												properties:{style:'toolbutton'},preferredSize:[60,30],\
												helpTip:'" + es_str.bsHelp + "'\
											},\
											bbButton: IconButton {text:'<b> </b>',\
												properties:{style:'toolbutton'},\
												preferredSize:[140,30],\
												helpTip:'" + es_str.bbHelp + "'\
											},\
											bbxButton: IconButton {text:'<b> </b>',alignment:['fill','fill'],\
												properties:{style:'toolbutton'},\
												helpTip:'" + es_str.xbHelp + "'\
												},\
										},\
										ibt: Group {orientation:'row',spacing:2,alignment:['fill','fill']\
											iButton: IconButton {text:'<i>',\
												properties:{style:'toolbutton'},preferredSize:[60,30],helpTip:'" + es_str.iHelp + "'},\
											isButton: IconButton {text:'</i>',\
												properties:{style:'toolbutton'},preferredSize:[60,30],helpTip:'" + es_str.isHelp + "'},\
											iiButton: IconButton {text:'<i>  </i>',\
												properties:{style:'toolbutton'},\
												preferredSize:[140,30],\
												helpTip:'" + es_str.iiHelp + "'\
											}\
											iixButton: IconButton {text:'<i>  </i>',alignment:['fill','fill'],\
												properties:{style:'toolbutton'},\
												helpTip:'" + es_str.xiHelp + "'\
												}\
										},\
										ubt: Group {orientation:'row',spacing:2,alignment:['fill','fill']\
											uButton: IconButton {text:'<u>',\
												properties:{style:'toolbutton'},preferredSize:[60,30],helpTip:'" + es_str.uHelp + "'},\
											usButton: IconButton {text:'</u>',\
												properties:{style:'toolbutton'},preferredSize:[60,30],helpTip:'" + es_str.usHelp + "'},\
											uuButton: IconButton {text:'<u> </u>',\
												properties:{style:'toolbutton'},\
												preferredSize:[140,30],\
												helpTip:'" + es_str.uuHelp + "'\
											}\
											uuxButton: IconButton {text:'<u> </u>',alignment:['fill','fill'],\
												properties:{style:'toolbutton'},\
												helpTip:'" + es_str.xuHelp + "'\
												}\
										},\
										sbt: Group {orientation:'row',spacing:2,alignment:['fill','fill']\
											sButton: IconButton {text:'<s>',\
												properties:{style:'toolbutton'},preferredSize:[60,30],helpTip:'" + es_str.sHelp + "'},\
											ssButton: IconButton {text:'</s>',\
												properties:{style:'toolbutton'},preferredSize:[60,30],helpTip:'" + es_str.ssHelp + "'},\
											sssButton: IconButton {text:'<s>  </s>',\
												properties:{style:'toolbutton'},\
												preferredSize:[140,30],\
												helpTip:'" + es_str.sssHelp + "'\
											}\
											ssxButton: IconButton {text:'<s>  </s>',alignment:['fill','fill'],\
												properties:{style:'toolbutton'},\
												helpTip:'" + es_str.xsHelp + "'\
												}\
										},\
										fbt: Group {orientation:'row',alignment:['fill','fill'],spacing:2,\
											fsButton: IconButton {text:'<font size=20>',\
												properties:{style:'toolbutton'},\
												preferredSize:[100,30],\
												helpTip:'" + es_str.fsHelp + "'\
											},\
											fsValue: EditText {text:'20',characters:" + (($.os.indexOf("Win") != -1) ? "2" : "3") + "},\
											fcButton: IconButton {text:'<font color=00FF00>',\
												properties:{style:'toolbutton'},\
												preferredSize:[100,30],\
												helpTip:'" + es_str.fcHelp + "'\
											},\
											fcValue: IconButton {preferredSize:[30,30],helpTip:'" + es_str.fcvalueHelp + "'},\
											fxButton: IconButton {alignment:['fill','fill'],\
												properties:{style:'toolbutton'},\
												helpTip:'" + es_str.xfHelp + "'\
												},\
										},\
										midGroup: Group {orientation:'row',alignment:['fill','fill'],margins:0,\
											position: Group {orientation:'column',alignment:['left','fill'],spacing:0,\
												upbt: Group {orientation:'row',alignment:['left','top'],spacing:0,\
													ulButton: IconButton {text:'↖',\
														preferredSize:[30,30],\
														properties:{style:'toolbutton'},\
														helpTip:'" + es_str.ulHelp + "'\
													},\
													ucButton: IconButton {text:'⇡',\
														preferredSize:[30,30],\
														properties:{style:'toolbutton'},\
														helpTip:'" + es_str.ucHelp + "'\
													},\
													urButton: IconButton {text:'↗',\
														preferredSize:[30,30],\
														properties:{style:'toolbutton'},\
														helpTip:'" + es_str.urHelp + "'\
													}\
												},\
												mdbt: Group {orientation:'row',alignment:['left','top'],spacing:0,\
													mlButton: IconButton {text:'⇠',\
														preferredSize:[30,30],\
														properties:{style:'toolbutton'},\
														helpTip:'" + es_str.mlHelp + "'\
													},\
													mcButton: IconButton {text:'●',\
														preferredSize:[30,30],\
														properties:{style:'toolbutton'},\
														helpTip:'" + es_str.mcHelp + "'\
													},\
													mrButton: IconButton {text:'⇢',\
														preferredSize:[30,30],\
														properties:{style:'toolbutton'},\
														helpTip:'" + es_str.mrHelp + "'\
													}\
												},\
												bobt: Group {orientation:'row',alignment:['left','top'],spacing:0,\
													blButton: IconButton {text:'↙',\
														preferredSize:[30,30],\
														properties:{style:'toolbutton'},\
														helpTip:'" + es_str.blHelp + "'\
													},\
													bcButton: IconButton {text:'☻',\
														preferredSize:[30,30],\
														properties:{style:'toolbutton'},\
														helpTip:'" + es_str.bcHelp + "'\
													},\
													brButton: IconButton {text:'↘',\
														preferredSize:[30,30],\
														properties:{style:'toolbutton'},\
														helpTip:'" + es_str.brHelp + "'\
													}\
												},\
											},\
											extraPo: Group {orientation:'column',alignment:['fill','fill'],spacing:0,\
												pos: Group {orientation:'row',alignment:['fill','fill'],\
													posButton: IconButton {text:'',\
														preferredSize:[60,30],\
														properties:{style:'toolbutton'}\
														helpTip:'" + es_str.posHelp + "'\
													},\
													textX: StaticText {text:'x:',characters:2},\
													posX: EditText {text:'192',alignment:['fill','center'],helpTip:'" + es_str.srtXY + "'},\
													textY: StaticText {text:'y:',characters:2},\
													posY: EditText {text:'144',alignment:['fill','center'],helpTip:'" + es_str.srtXY + "'},\
												},\
												fade: Group {orientation:'row',alignment:['fill','fill'],\
													fadButton: IconButton {text:'',\
														preferredSize:[60,30],\
														properties:{style:'toolbutton'}\
														helpTip:'" + es_str.fadHelp + "'\
													},\
													inText: StaticText {text:'in:'},\
													fadIn: EditText {text:'300',alignment:['fill','center'],helpTip:'" + es_str.msHelp + "'},\
													outText: StaticText {text:'out:'},\
													fadOut: EditText {text:'300',alignment:['fill','center'],helpTip:'" + es_str.msHelp + "'},\
												},\
												other: Group {orientation:'row',alignment:['fill','fill'],spacing:7,\
													bord: IconButton {text:'',\
														preferredSize:[60,30],\
														properties:{style:'toolbutton'}\
														helpTip:'" + es_str.bordHelp + "'\
													},\
													metri: IconButton {text:'',\
														preferredSize:[50,30],\
														properties:{style:'toolbutton'}\
														helpTip:'" + es_str.metriHelp + "'\
													},\
													blur: IconButton {text:'',\
														preferredSize:[45,30],\
														properties:{style:'toolbutton'}\
														helpTip:'" + es_str.blurHelp + "'\
													},\
													bfbVal: EditText {text:'2',alignment:['fill','center']},\
												},\
											}\
										},\
										fix: Group {orientation:'row',alignment:['fill','fill'],margins:0,\
												direct:  Group  {orientation:'row',alignment:['fill','fill'],spacing:0,\
													customImageViewer: Custom { type:'customView', alignment:['left','fill'],preferredSize:[35,30]},\
													vertical: Checkbox {text:'',alignment:['left','bottom'],helpTip:'" + es_str.verticalHelp + "'},\
												},\
												move: Group {orientation:'row',alignment:['right','fill'],spacing:0,\
													moveButton: IconButton {text:'',\
														preferredSize:[60,30],\
														properties:{style:'toolbutton'}\
														helpTip:'" + es_str.mvHelp + "'\
													},\
													x1: EditText {text:'384',characters:" + (($.os.indexOf("Win") != -1) ? "2" : "3") + ",helpTip:'" + es_str.x1Help() + "'},\
													y1: EditText {text:'144',characters:" + (($.os.indexOf("Win") != -1) ? "2" : "3") + ",helpTip:'" + es_str.y1Help() + "'},\
													x2: EditText {text:'-50',characters:" + (($.os.indexOf("Win") != -1) ? "2" : "3") + ",helpTip:'" + es_str.x2Help() + "'},\
													y2: EditText {text:'144',characters:" + (($.os.indexOf("Win") != -1) ? "2" : "3") + ",helpTip:'" + es_str.y2Help() + "'},\
													moveIn: EditText {text:'0',characters:" + (($.os.indexOf("Win") != -1) ? "3" : "4") + ",helpTip:'" + es_str.moveinHelp() + "'},\
													moveOut: EditText {text:'3000',characters:" + (($.os.indexOf("Win") != -1) ? "3" : "4") + ",helpTip:'" + es_str.moveoutHelp() + "'},\
												},\
										}\
										rebtGroup: Group {orientation:'row',alignment:['fill','bottom'],spacing:0,\
											rfButton: IconButton {text:'" + es_str.refresh + "',alignment:['fill','fill'],\
												properties:{style:'toolbutton'},\
												helpTip:'" + es_str.rfHelp + "'\
											},\
											epButton: IconButton {text:'" + es_str.xport + "',alignment:['fill','fill'],\
												properties:{style:'toolbutton'},\
												helpTip:'" + es_str.epHelp + "'\
											}\
										}\
									}\
								}}\
							}";


			var es_help = function () {
				var res = "group {orientation:'column', alignment:['fill','fill'], alignChildren:['fill','fill'],\
							logoG:Group{orientation:'stack',\
                                egg: Group{alignment:['fill','fill'],margins:[190,0,0,3],\
                                    text:StaticText {text:'MAKE THINGS BETTER!\\nsss',alignment:['center','center']}}\
								egg2: Group{alignment:['fill','fill'],margins:[0,0,0,3],\
									text:StaticText {text:'KEEP CREATING AND',alignment:['left','center']}}\
								imageG:Group{orientation:'row',alignment:['fill','fill'],\
									logo: Image {alignment:['center','fill'],size:[80, 80]}},\
							},\
							pnl: Panel {type:'tabbedpanel',\
								aboutTab: Panel { type:'tab', text:'" + es_str.descript + "',\
									aboutEt: EditText { text:'" + es_str.desContent + "',\
										preferredSize:[280,120],\
										properties:{multiline:true,readonly:true}}\
									},\
								usageTab: Panel { type:'tab', text:'" + es_str.usage + "',\
									usageEt: EditText { text:'" + es_str.useContent + "',\
										preferredSize:[280,120],\
										properties:{multiline:true,readonly:true}}\
									}\
							},\
							btns: Group {orientation:'row', alignment:['fill','bottom'],\
								otherScriptsBtn: Button { text:'" + es_str.other + "', alignment:['left','center'] },\
								okBtn: Button { text:'" + es_str.close + "', alignment:['right','center'] }\
							}\
						}";
				var helpWin = new Window("palette", es_str.about);
				helpWin.gr = helpWin.add(res);
				helpWin.gr.btns.otherScriptsBtn.onClick = function () {
					var cmd = "";
					var url = es_str.website;
					if ($.os.indexOf("Win") != -1) {
						if (File("C:/Program Files (x86)/Google/Chrome/Application/chrome.exe").exists) {
							cmd += "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe " + url;
						} else if (File("C:/Program Files (x86)/Mozilla Firefox/firefox.exe").exists) {
							cmd += "C:/Program Files (x86)/Mozilla Firefox/firefox.exe " + url;
						} else {
							cmd += "C:/Program Files/Internet Explorer/iexplore.exe " + url;
						}
					} else {
						cmd += "open " + url;
					}
					try {
						system.callSystem(cmd);
					} catch (e) {
						alert(e);
					}
				};
				helpWin.gr.btns.okBtn.onClick = function () {
					helpWin.close();
				};
				helpWin.gr.logoG.egg.text.graphics.foregroundColor = pal.graphics.newPen(pal.graphics.BrushType.SOLID_COLOR, bgGreen, 1);
				helpWin.gr.logoG.egg2.text.graphics.foregroundColor = pal.graphics.newPen(pal.graphics.BrushType.SOLID_COLOR, bgGreen, 1);
				helpWin.gr.logoG.egg.text.visible = !1;
				helpWin.gr.logoG.egg2.text.visible = !1;
				helpWin.gr.logoG.imageG.logo.image = ScriptUI.newImage(logoIMG);
				var eggCount = 0;
				helpWin.gr.logoG.imageG.logo.addEventListener("mouseover", function () {

					eggCount += 1;
					helpWin.gr.logoG.egg.text.visible = eggCount % 2 == 0 ? !0 : !1;
					helpWin.gr.logoG.egg2.text.visible = eggCount % 2 == 0 ? !0 : !1;
				});
				helpWin.center();
				helpWin.show();
			};
			pal.grp = pal.add(res);
			pal.layout.layout(true);
			pal.grp.minimumSize = pal.grp.size;
			pal.layout.resize();
			pal.onResizing = pal.onResize = function () {
				this.layout.resize();
			};

			pal.grp.leftPart.listArea.graphics.foregroundColor = pal.graphics.newPen(pal.graphics.BrushType.SOLID_COLOR, bgGreen, 1);
			pal.grp.RPparent.rightPart.btGroup.fbt.fcValue.colorHex = "00FF00";
			pal.grp.RPparent.statusText.graphics.foregroundColor = pal.graphics.newPen(pal.graphics.BrushType.SOLID_COLOR, bgGreen, 1);

			pal.grp.leftPart.listArea.onChange = function () {
				try {
					pal.grp.RPparent.rightPart.editText.backupSelection = "";
					var i = this.selection[0].index;
					comp.time = comp.layer(slIndex[i]).inPoint + markerTimeOffset / comp.frameRate < 0 ? 0 : comp.layer(slIndex[i]).inPoint + markerTimeOffset / comp.frameRate;
					pal.grp.RPparent.rightPart.editText.text = comp.layer(slIndex[i]).property("Marker").valueAtTime(comp.layer(slIndex[i]).inPoint + markerTimeOffset / comp.frameRate, !0).comment.replace(reg, "\r");
				} catch (e) {}
			};
			pal.grp.leftPart.buttonArea.info.onClick = function () {
				es_help();
			};
			pal.grp.leftPart.buttonArea.rewrite.onClick = function () {

				var listSel = pal.grp.leftPart.listArea.selection;

				if (null == listSel) {
					alert(es_str.selListItem);
				} else {
					app.beginUndoGroup(es_str.title);
					for (var l = 0; l < listSel.length; l++) {
						comp.layer(slIndex[listSel[l].index]).text.sourceText.setValue(listSel[l].subItems[1].text.replace(/([<{]\/?(\s|\S)*?[>}])/g, ""));
						comp.layer(slIndex[listSel[l].index]).text.sourceText.expressionEnabled = !1;
					}
					app.endUndoGroup();
				}
			};
			pal.grp.leftPart.buttonArea.resel.onClick = function () {
				var curComp = app.project.activeItem,
					curSel = curComp.selectedLayers;
				for (var o = 0; o < curSel.length; o++) {
					curSel[o].selected = !1;
				}
				for (var i = 0; i < sl.length; i++) {
					sl[i].selected = !0;
				}
			};
			pal.grp.leftPart.buttonArea.pickPos.onClick = function () {
				var curComp = app.project.activeItem;
				try {
					var curSel = curComp.selectedLayers,
						posX = Math.round(curSel[0].property("transform").property("Position").value[0] / curComp.width * 384),
						posY = Math.round(curSel[0].property("transform").property("Position").value[1] / curComp.height * 288);
				} catch (e) {}

				alert(1 != curSel.length || curSel[0].threeDLayer ?
					es_str.er2dlayer :
					"x:" + posX + " y:" + posY);
			};
			pal.grp.leftPart.buttonArea.guessFontsize.onClick = function () {
				var curComp = app.project.activeItem;
				try {
					var curSel = curComp.selectedLayers
				} catch (e) {}

				alert((1 != curSel.length || !(curSel[0] instanceof TextLayer)) ?
					es_str.noLayer :
					guessFontsize(curSel[0]));
			};
			pal.grp.leftPart.buttonArea.killOther.onClick = function () {
				triggerMarker(pal, "", "", "", "", ["", "", "", ""], null, null, !1, this.parent.lineNum.text);
			};
			pal.grp.leftPart.buttonArea.killTag.onClick = function () {
				triggerMarker(pal, null, null, null, null, [], "", "", !0, this.parent.lineNum.text, null, /(<\/?(\s|\S)*?>)/g);
			};
			pal.grp.leftPart.buttonArea.rmMarker.onClick = function () {
				var rsl = comp.selectedLayers;
				rsl.length == 0 ? alert(es_str.markOnly) : pal.grp.leftPart.listArea.removeAll();
				removeESmarker(rsl);
			};
			pal.grp.leftPart.buttonArea.preci.addEventListener("keydown", function (k) {
				numStep(k, this);
			});
			pal.grp.leftPart.buttonArea.preci.onChange = function () {
				this.text = validNum(this.text, 1, this.text <= 0);
			};
			pal.grp.leftPart.buttonArea.lineNum.addEventListener("keydown", function (k) {
				numStep(k, this);
			});
			pal.grp.leftPart.buttonArea.lineNum.onChange = function () {
				this.text = validNum(this.text, 0, this.text < 0);
			};
			pal.grp.RPparent.rightPart.editText.addEventListener("mouseout", function () {
				this.backupSelection = this.textselection;
			});
			if (-1 != $.os.indexOf("Win")) {
				pal.grp.RPparent.rightPart.editText.onChange = function () {
					triggerMarker(pal, null, null, null, null, []);
				};
			} else {
				pal.grp.RPparent.rightPart.editText.onChanging = function () {
					triggerMarker(pal, null, null, null, null, []);
				};
			}
			pal.addEventListener("keydown", function (kd) {
				pressed(kd, this);
			});
			pal.grp.RPparent.rightPart.btGroup.bbt.bButton.onClick = function () {
				tagButton(pal, "b", this.text);
			};
			pal.grp.RPparent.rightPart.btGroup.bbt.bsButton.onClick = function () {
				tagButton(pal, "/b", this.text);
			};
			pal.grp.RPparent.rightPart.btGroup.ibt.iButton.onClick = function () {
				tagButton(pal, "i", this.text);
			};
			pal.grp.RPparent.rightPart.btGroup.ibt.isButton.onClick = function () {
				tagButton(pal, "/i", this.text);
			};
			pal.grp.RPparent.rightPart.btGroup.ubt.uButton.onClick = function () {
				tagButton(pal, "u", this.text);
			};
			pal.grp.RPparent.rightPart.btGroup.ubt.usButton.onClick = function () {
				tagButton(pal, "/u", this.text);
			};
			pal.grp.RPparent.rightPart.btGroup.sbt.sButton.onClick = function () {
				tagButton(pal, "s", this.text);
			};
			pal.grp.RPparent.rightPart.btGroup.sbt.ssButton.onClick = function () {
				tagButton(pal, "/s", this.text);
			};
			pal.grp.RPparent.rightPart.btGroup.bbt.bbButton.onClick = function () {
				triggerMarker(pal, null, null, null, null, [], "b", "", !1, pal.grp.leftPart.buttonArea.lineNum.text);
			};
			pal.grp.RPparent.rightPart.btGroup.bbt.bbxButton.onClick = function () {
				triggerMarker(pal, null, null, null, null, [], "", "", !0, pal.grp.leftPart.buttonArea.lineNum.text, null, /(<\/?(b)*?>)/g);
			};
			pal.grp.RPparent.rightPart.btGroup.ibt.iiButton.onClick = function () {
				triggerMarker(pal, null, null, null, null, [], "i", "", !1, pal.grp.leftPart.buttonArea.lineNum.text);
			};
			pal.grp.RPparent.rightPart.btGroup.ibt.iixButton.onClick = function () {
				triggerMarker(pal, null, null, null, null, [], "", "", !0, pal.grp.leftPart.buttonArea.lineNum.text, null, /(<\/?(i)*?>)/g);
			};
			pal.grp.RPparent.rightPart.btGroup.sbt.sssButton.onClick = function () {
				triggerMarker(pal, null, null, null, null, [], "s", "", !1, pal.grp.leftPart.buttonArea.lineNum.text);
			};
			pal.grp.RPparent.rightPart.btGroup.sbt.ssxButton.onClick = function () {
				triggerMarker(pal, null, null, null, null, [], "", "", !0, pal.grp.leftPart.buttonArea.lineNum.text, null, /(<\/?(s)*?>)/g);
			};
			pal.grp.RPparent.rightPart.btGroup.ubt.uuButton.onClick = function () {
				triggerMarker(pal, null, null, null, null, [], "u", "", !1, pal.grp.leftPart.buttonArea.lineNum.text);
			};
			pal.grp.RPparent.rightPart.btGroup.ubt.uuxButton.onClick = function () {
				triggerMarker(pal, null, null, null, null, [], "", "", !0, pal.grp.leftPart.buttonArea.lineNum.text, null, /(<\/?(u)*?>)/g);
			};
			pal.grp.RPparent.rightPart.btGroup.fbt.fsButton.onClick = function () {
				var keyString = " size=" + this.parent.fsValue.text;
				triggerMarker(pal, null, null, null, null, [], "font", keyString, !1, pal.grp.leftPart.buttonArea.lineNum.text);
			};
			pal.grp.RPparent.rightPart.btGroup.fbt.fcButton.onClick = function () {
				var keyString = " color=" + fixBlueHex(this.parent.fcValue.colorHex);
				triggerMarker(pal, null, null, null, null, [], "font", keyString, !1, pal.grp.leftPart.buttonArea.lineNum.text);
			};
			pal.grp.RPparent.rightPart.btGroup.fbt.fcValue.onDraw = function () {
				this.graphics.ellipsePath(0, 0, this.size[0], this.size[1]);
				this.graphics.fillPath(this.fillBrush);
			};
			pal.grp.RPparent.rightPart.btGroup.fbt.fcValue.onClick = function () {
				var origin = this.colorHex;
				var colorString = $.colorPicker();
				this.colorHex = colorString == -1 ? origin : colorString.toString(16).toUpperCase();
				// this.parent.fcButton.text = "<font color=" + fixBlueHex(this.colorHex) + ">";
				this.fillBrush = this.graphics.newBrush(this.graphics.BrushType.SOLID_COLOR, hexToRgb(this.colorHex));
			};
			pal.grp.RPparent.rightPart.btGroup.fbt.fxButton.onClick = function () {
				triggerMarker(pal, null, null, null, null, [], "", "", !0, pal.grp.leftPart.buttonArea.lineNum.text, null, /(<\/?(font\s?.*?)>)/g);
			};
			pal.grp.RPparent.rightPart.btGroup.midGroup.position.bobt.blButton.onClick = function () {
				posFinal(pal, "{\\an3}", "{\\an1}", "{\\pos(0,288)}");
			};
			pal.grp.RPparent.rightPart.btGroup.midGroup.position.bobt.bcButton.onClick = function () {
				posFinal(pal, "{\\an6}", "{\\an2}", "{\\pos(192,288)}");
			};
			pal.grp.RPparent.rightPart.btGroup.midGroup.position.bobt.brButton.onClick = function () {
				posFinal(pal, "{\\an9}", "{\\an3}", "{\\pos(384,288)}");
			};
			pal.grp.RPparent.rightPart.btGroup.midGroup.position.mdbt.mlButton.onClick = function () {
				posFinal(pal, "{\\an2}", "{\\an4}", "{\\pos(0,144)}");
			};
			pal.grp.RPparent.rightPart.btGroup.midGroup.position.mdbt.mcButton.onClick = function () {
				posFinal(pal, "{\\an5}", "{\\an5}", "{\\pos(192,144)}");
			};
			pal.grp.RPparent.rightPart.btGroup.midGroup.position.mdbt.mrButton.onClick = function () {
				posFinal(pal, "{\\an8}", "{\\an6}", "{\\pos(384,144)}");
			};
			pal.grp.RPparent.rightPart.btGroup.midGroup.position.upbt.ulButton.onClick = function () {
				posFinal(pal, "{\\an1}", "{\\an7}", "{\\pos(0,0)}");
			};
			pal.grp.RPparent.rightPart.btGroup.midGroup.position.upbt.ucButton.onClick = function () {
				posFinal(pal, "{\\an4}", "{\\an8}", "{\\pos(192,0)}");
			};
			pal.grp.RPparent.rightPart.btGroup.midGroup.position.upbt.urButton.onClick = function () {
				posFinal(pal, "{\\an7}", "{\\an9}", "{\\pos(384,0)}");
			};
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.pos.posButton.onClick = function () {
				triggerMarker(pal, null, "{\\pos(" + this.parent.posX.text + "," + this.parent.posY.text + ")}", null, null, [], null, null, !1, null, true);
			};
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.fade.fadButton.onClick = function () {
				triggerMarker(pal, null, null, null, "{\\fad(" + this.parent.fadIn.text + "," + this.parent.fadOut.text + ")}", [], null, null, !1, null, true);
			};
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.other.bord.onClick = function () {
				triggerMarker(pal, null, null, null, null, ["{\\bord(" + this.parent.bfbVal.text + ")}"], null, null, !1, null, true);
			};
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.other.metri.onClick = function () {
				triggerMarker(pal, null, null, null, null, [, "{\\fsp(" + this.parent.bfbVal.text + ")}"], null, null, !1, null, true);
			};
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.other.blur.onClick = function () {
				triggerMarker(pal, null, null, null, null, [, , "{\\be(" + this.parent.bfbVal.text + ")}"], null, null, !1, null, true);
			};
			pal.grp.RPparent.rightPart.btGroup.fix.move.moveButton.onClick = function () {
				var x1 = this.parent.x1.text,
					y1 = this.parent.y1.text,
					x2 = this.parent.x2.text,
					y2 = this.parent.y2.text,
					moveIn = this.parent.moveIn.text,
					moveOut = this.parent.moveOut.text,
					moveVar = "{\\move(" + x1 + "," + y1 + "," + x2 + "," + y2 + "," + moveIn + "," + moveOut + ")}";
				triggerMarker(pal, null, null, null, null, [, , , moveVar], null, null, !1, null, true);
			};
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.other.bfbVal.onChange = function () {
				this.text = validNum(this.text, 2);

			};
			pal.grp.RPparent.rightPart.btGroup.fbt.fsValue.onChange = function () {
				this.text = validNum(this.text, 20, this.text < 0);

			};
			pal.grp.RPparent.rightPart.btGroup.fbt.fsValue.addEventListener("keydown", function (k) {
				numStep(k, this);
			});
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.other.bfbVal.addEventListener("keydown", function (k) {
				numStep(k, this);
			});
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.pos.posX.addEventListener("keydown", function (k) {
				numStep(k, this);
			});
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.pos.posX.onChange = function () {
				this.text = validNum(this.text, 192);
			};
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.pos.posY.addEventListener("keydown", function (k) {
				numStep(k, this);
			});
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.pos.posY.onChange = function () {
				this.text = validNum(this.text, 144);
			};
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.fade.fadIn.addEventListener("keydown", function (k) {
				numStep(k, this);
			});
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.fade.fadIn.onChange = function () {
				this.text = validNum(this.text, 300, this.text < 0);
			};
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.fade.fadOut.addEventListener("keydown", function (k) {
				numStep(k, this);
			});
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.fade.fadOut.onChange = function () {
				this.text = validNum(this.text, 300, this.text < 0);
			};
			pal.grp.RPparent.rightPart.btGroup.fix.move.x1.addEventListener("keydown", function (k) {
				numStep(k, this);
			});
			pal.grp.RPparent.rightPart.btGroup.fix.move.x1.onChange = function () {
				this.text = validNum(this.text, 384);
			};
			pal.grp.RPparent.rightPart.btGroup.fix.move.y1.addEventListener("keydown", function (k) {
				numStep(k, this);
			});
			pal.grp.RPparent.rightPart.btGroup.fix.move.y1.onChange = function () {
				this.text = validNum(this.text, 144);
			};
			pal.grp.RPparent.rightPart.btGroup.fix.move.x2.addEventListener("keydown", function (k) {
				numStep(k, this);
			});
			pal.grp.RPparent.rightPart.btGroup.fix.move.x2.onChange = function () {
				this.text = validNum(this.text, -50);
			};
			pal.grp.RPparent.rightPart.btGroup.fix.move.y2.addEventListener("keydown", function (k) {
				numStep(k, this);
			});
			pal.grp.RPparent.rightPart.btGroup.fix.move.y2.onChange = function () {
				this.text = validNum(this.text, -144);
			};
			pal.grp.RPparent.rightPart.btGroup.fix.move.moveIn.addEventListener("keydown", function (k) {
				numStep(k, this);
			});
			pal.grp.RPparent.rightPart.btGroup.fix.move.moveIn.onChange = function () {
				this.text = validNum(this.text, 0, this.text < 0);
			};
			pal.grp.RPparent.rightPart.btGroup.fix.move.moveOut.addEventListener("keydown", function (k) {
				numStep(k, this);
			});
			pal.grp.RPparent.rightPart.btGroup.fix.move.moveOut.onChange = function () {
				this.text = validNum(this.text, 3000, this.text < 0);
			};
			pal.grp.RPparent.rightPart.btGroup.rebtGroup.rfButton.onClick = function () {
				pal.grp.RPparent.rightPart.editText.text = "";
				refreshButton(pal);
				fixList(pal.grp.leftPart.listArea);
			};
			pal.grp.RPparent.rightPart.btGroup.rebtGroup.epButton.onClick = function () {
				if (pal.grp.leftPart.listArea.items.length == 0) {
					alert(es_str.noOutput);
				} else {
					writeSrt(pal.grp.leftPart.listArea.items);
				}
			};
			pal.grp.leftPart.buttonArea.olGroup.olImage.image = ScriptUI.newImage(overlapIMG);
			pal.grp.leftPart.buttonArea.pickPos.image = ScriptUI.newImage(pickposIMG);
			pal.grp.leftPart.buttonArea.guessFontsize.image = ScriptUI.newImage(guessFontIMG);
			pal.grp.leftPart.buttonArea.rmMarker.image = ScriptUI.newImage(removeMarkIMG);
			pal.grp.leftPart.buttonArea.resel.image = ScriptUI.newImage(reselIMG);
			pal.grp.leftPart.buttonArea.killTag.image = ScriptUI.newImage(killtagIMG);
			pal.grp.leftPart.buttonArea.killOther.image = ScriptUI.newImage(killbrackIMG);
			pal.grp.leftPart.buttonArea.info.image = ScriptUI.newImage(infoIMG);
			pal.grp.leftPart.buttonArea.rewrite.image = ScriptUI.newImage(rewriteIMG);
			pal.grp.RPparent.rightPart.btGroup.rebtGroup.rfButton.image = ScriptUI.newImage(refreshIMG);
			pal.grp.RPparent.rightPart.btGroup.rebtGroup.epButton.image = ScriptUI.newImage(exportIMG);
			pal.grp.RPparent.rightPart.btGroup.midGroup.position.bobt.blButton.image = ScriptUI.newImage(blIMG);
			pal.grp.RPparent.rightPart.btGroup.midGroup.position.bobt.bcButton.image = ScriptUI.newImage(bcIMG);
			pal.grp.RPparent.rightPart.btGroup.midGroup.position.bobt.brButton.image = ScriptUI.newImage(brIMG);
			pal.grp.RPparent.rightPart.btGroup.midGroup.position.mdbt.mlButton.image = ScriptUI.newImage(mlIMG);
			pal.grp.RPparent.rightPart.btGroup.midGroup.position.mdbt.mcButton.image = ScriptUI.newImage(mcIMG);
			pal.grp.RPparent.rightPart.btGroup.midGroup.position.mdbt.mrButton.image = ScriptUI.newImage(mrIMG);
			pal.grp.RPparent.rightPart.btGroup.midGroup.position.upbt.ulButton.image = ScriptUI.newImage(ulIMG);
			pal.grp.RPparent.rightPart.btGroup.midGroup.position.upbt.ucButton.image = ScriptUI.newImage(ucIMG);
			pal.grp.RPparent.rightPart.btGroup.midGroup.position.upbt.urButton.image = ScriptUI.newImage(urIMG);
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.pos.posButton.image = ScriptUI.newImage(posIMG);
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.fade.fadButton.image = ScriptUI.newImage(fadIMG);
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.other.bord.image = ScriptUI.newImage(bordIMG);
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.other.metri.image = ScriptUI.newImage(fspIMG);
			pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.other.blur.image = ScriptUI.newImage(blurIMG);
			pal.grp.RPparent.rightPart.btGroup.fix.move.moveButton.image = ScriptUI.newImage(moveIMG);
			pal.grp.RPparent.rightPart.btGroup.fix.direct.customImageViewer.image = ScriptUI.newImage(verticalIMG);
			pal.grp.RPparent.rightPart.btGroup.fbt.fsButton.image = ScriptUI.newImage(fsIMG);
			pal.grp.RPparent.rightPart.btGroup.fbt.fcButton.image = ScriptUI.newImage(fcIMG);
			pal.grp.RPparent.rightPart.btGroup.fbt.fxButton.image = ScriptUI.newImage(fxIMG);
			pal.grp.RPparent.rightPart.btGroup.bbt.bButton.image = ScriptUI.newImage(bIMG);
			pal.grp.RPparent.rightPart.btGroup.bbt.bsButton.image = ScriptUI.newImage(bsIMG);
			pal.grp.RPparent.rightPart.btGroup.bbt.bbButton.image = ScriptUI.newImage(bbIMG);
			pal.grp.RPparent.rightPart.btGroup.bbt.bbxButton.image = ScriptUI.newImage(bxIMG);
			pal.grp.RPparent.rightPart.btGroup.sbt.sButton.image = ScriptUI.newImage(sIMG);
			pal.grp.RPparent.rightPart.btGroup.sbt.ssButton.image = ScriptUI.newImage(ssIMG);
			pal.grp.RPparent.rightPart.btGroup.sbt.ssxButton.image = ScriptUI.newImage(sxIMG);
			pal.grp.RPparent.rightPart.btGroup.sbt.sssButton.image = ScriptUI.newImage(sssIMG);
			pal.grp.RPparent.rightPart.btGroup.ibt.iButton.image = ScriptUI.newImage(iIMG);
			pal.grp.RPparent.rightPart.btGroup.ibt.isButton.image = ScriptUI.newImage(isIMG);
			pal.grp.RPparent.rightPart.btGroup.ibt.iiButton.image = ScriptUI.newImage(iiIMG);
			pal.grp.RPparent.rightPart.btGroup.ibt.iixButton.image = ScriptUI.newImage(ixIMG);
			pal.grp.RPparent.rightPart.btGroup.ubt.uButton.image = ScriptUI.newImage(uIMG);
			pal.grp.RPparent.rightPart.btGroup.ubt.usButton.image = ScriptUI.newImage(usIMG);
			pal.grp.RPparent.rightPart.btGroup.ubt.uuButton.image = ScriptUI.newImage(uuIMG);
			pal.grp.RPparent.rightPart.btGroup.ubt.uuxButton.image = ScriptUI.newImage(uxIMG);
		}
		return pal;
	}

	function sortLayers(layers) {
		layers = layers || new Array();
		return layers.sort(function (a, b) {
			return a.inPoint - b.inPoint;
		});
	}

	function checkOverlap(layers) {
		for (var result = !1, a = 1; a < layers.length; a++) layers[a].selected = !0, parseFloat(layers[a].inPoint) < parseFloat(layers[a - 1].outPoint) && (result = !0, layers[a].selected = !1);
		try {
			layers[0].selected = !0;
		} catch (d) {}
		if (result)
			for (a = 0; a < layers.length; a++) layers[a].selected = !layers[a].selected;
		return result;
	}

	function guessFontsize(layer) {
		var textsize = layer.property("Source Text").value.fontSize,
			comp = app.project.activeItem,
			compFactor = comp.height <= comp.width ? comp.height : comp.width,
			hdFactor = comp.height <= comp.width ? 1080 : 1920,
			layerscale = Math.max(layer.transform.scale.value[0], layer.transform.scale.value[1]);

		return Math.round(textsize / 1296 * layerscale / 100 * 460 * hdFactor / compFactor)
	}

	function writeSrt(list) {
		var srtFile = File.saveDialog(es_str.saveDialog);
		srtFile.encoding = "utf-8", srtFile.open("w");
		srtFile.write("0\r00:00:00,000 --> 00:00:00,000\r//quick export srt" + es_str.version + " by songzmeng" + "\r\r");
		for (var r = 0; r < list.length; r++) srtFile.write(list[r].text + "\r" + list[r].subItems[0].text + "\r" + list[r].subItems[1].text + "\r\r");
		return srtFile.close(), srtFile;
	}

	function writeFile(fileObj, fileContent, encoding) {
		encoding = encoding || "utf-8";
		fileObj = (fileObj instanceof File) ? fileObj : new File(fileObj);
		var parentFolder = fileObj.parent;
		if (!parentFolder.exists && !parentFolder.create())
			throw new Error("Cannot create file in path " + fileObj.fsName);
		fileObj.encoding = encoding;
		fileObj.open("w");
		fileObj.write(fileContent);
		fileObj.close();
		return fileObj;
	}

	function pressed(k, control) {
		if (k.keyName == "Z" && k.metaKey) {
			app.executeCommand(16);
			control.grp.leftPart.buttonArea.resel.notify("onClick");
			control.grp.RPparent.rightPart.btGroup.rebtGroup.rfButton.notify("onClick");
		}
	}

	function checkTextLayer(layers) {
		if (0 == layers.length) {
			alert(es_str.noLayer);
			return !1;
		} else {
			for (var b = 0; b < layers.length; b++) {
				if (!(layers[b] instanceof TextLayer)) {
					alert(es_str.textOnly);
					return !1;
				}
			}
			return !0;
		}
	}

	function removeESmarker(layers) {
		app.beginUndoGroup(es_str.title);
		for (var i = 0; i < layers.length; i++) {
			if (checkMarker(layers[i])) {
				var markerIndex = layers[i].property("Marker").nearestKeyIndex(layers[i].inPoint + markerTimeOffset / comp.frameRate);
				layers[i].property("Marker").removeKey(markerIndex);
			}
		}
		app.endUndoGroup();
	}

	function triggerMarker(pal, poVar, posVar, orientVar, fadeVar, otherVar, key, arg, remove, lineNum, poDef, rmReg) {
		if (null == pal.grp.leftPart.listArea.selection) {
			alert(es_str.selListItem);
		} else {
			app.beginUndoGroup(es_str.title);
			for (var i = 0; i < pal.grp.leftPart.listArea.selection.length; i++) {
				var listIndex = pal.grp.leftPart.listArea.selection[i].index,
					esMarker = comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).inPoint + markerTimeOffset / comp.frameRate, true),
					markComment = (key == null && poVar == null && posVar == null && orientVar == null && fadeVar == null && otherVar.length == 0) ?
					String(pal.grp.RPparent.rightPart.editText.text).replace(/\n|\r/gm, newlineMark) :
					(remove ?
						removeQuote(esMarker.comment, newlineMark, lineNum, rmReg) :
						quoteText(esMarker.comment.replace(/\n|\r/gm, newlineMark), newlineMark, lineNum, pal.grp.RPparent.rightPart.editText.backupSelection, key, arg)),
					chapVar = (poVar == null) ? (poDef ? (esMarker.chapter == "" ? "{\\an2}" : esMarker.chapter) : esMarker.chapter) : poVar,
					urlVar = (posVar == null) ? esMarker.url : posVar,
					frameTargetVar = (orientVar == null) ? esMarker.frameTarget : orientVar,
					cuePointNameVar = (fadeVar == null) ? esMarker.cuePointName : fadeVar,
					paramsVar = {};
				paramsVar.bord = (otherVar[0] == null) ?
					(esMarker.getParameters().bord == void 0 ? "" : esMarker.getParameters().bord) :
					otherVar[0];
				paramsVar.fsp = (otherVar[1] == null) ?
					(esMarker.getParameters().fsp == void 0 ? "" : esMarker.getParameters().fsp) :
					otherVar[1];
				paramsVar.be = (otherVar[2] == null) ?
					(esMarker.getParameters().be == void 0 ? "" : esMarker.getParameters().be) :
					otherVar[2];
				paramsVar.move = (otherVar[3] == null) ?
					(esMarker.getParameters().move == void 0 ? "" : esMarker.getParameters().move) :
					otherVar[3];
				var markValue = new MarkerValue(markComment, chapVar, urlVar, frameTargetVar, cuePointNameVar, paramsVar);
				comp.layer(slIndex[listIndex]).property("Marker").setValueAtTime(comp.layer(slIndex[listIndex]).inPoint + markerTimeOffset / comp.frameRate, markValue);
				//re assign cause setValueAtTime()
				var esMarker2 = comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).inPoint + markerTimeOffset / comp.frameRate, true);
				pal.grp.leftPart.listArea.selection[i].subItems[1].text =
					esMarker2.chapter +
					esMarker2.url +
					esMarker2.frameTarget +
					esMarker2.cuePointName +
					esMarker2.getParameters().bord +
					esMarker2.getParameters().fsp +
					esMarker2.getParameters().be +
					esMarker2.getParameters().move +
					esMarker2.comment.replace(reg, "\r");
				pal.grp.RPparent.rightPart.editText.text = esMarker2.comment.replace(reg, "\r");
			}
			app.endUndoGroup();
			fixList(pal.grp.leftPart.listArea);
		}
	}

	function showText(pal, argument, time, count) {
		var xx = 0;
		var ccr = app.scheduleTask("checkStatus()", time, true);
		checkStatus = function () {
			if (xx < count) {
				// alert(xx);
				pal.grp.RPparent.statusText.text = argument;
				xx++;
			} else {
				pal.grp.RPparent.statusText.text = "";
				app.cancelTask(ccr);
			}
		};

	}

	function posFinal(control, anV, an, pos) {
		control.grp.RPparent.rightPart.btGroup.fix.direct.vertical.value ?
			triggerMarker(control, anV, pos, "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
			triggerMarker(control, an, "", "", null, [], null, null, !1);
	}

	function runCommand(arg) {
		var cmds = "";
		var sysarg = ($.os.indexOf("Win") != -1) ? "^^^<" + arg + "^^^>" :
			"<" + arg + ">";
		var syscmd = ($.os.indexOf("Win") != -1) ?
			"echo | set /p= " + sysarg + "|clip" :
			"printf \"" + sysarg + "\"|pbcopy";
		cmds += syscmd;
		if ($.os.indexOf("Win") != -1) {
			var echoClip = new File(Folder.temp.toString() + encodeURI("/echoClip.bat"));
			writeFile(echoClip, cmds);
		}
		if ($.os.indexOf("Win") != -1) {
			echoVbs.execute();
		} else {
			system.callSystem(cmds);
		}
	}

	function quoteText(origin, splitor, lineNum, textSel, key, arg) {
		function u(origin, textSel, key, arg) {
			var quotesel = null !== key ? "<" + key + arg + ">" + textSel + "</" + key + ">" : textSel,
				originsel = null !== key ? "<" + key + arg + ">" + origin + "</" + key + ">" : origin;
			return 0 != textSel ? origin.replace(textSel, quotesel) : origin.replace(origin, originsel);
		}
		if (0 == lineNum) return u(origin, textSel, key, arg);
		if (void 0 !== origin.split(splitor)[lineNum - 1]) {
			var o = origin.split(splitor);
			return o[lineNum - 1] = u(o[lineNum - 1], textSel, key, arg), o = o.join(splitor);
		}
		return void 0 == origin.split(splitor)[lineNum - 1] ? origin : void 0;
	}

	function removeQuote(comment, splitor, lineNum, reg) {
		if (void 0 !== comment.split(splitor)[lineNum - 1]) {
			var tmpArray = comment.split(splitor);
			return tmpArray[lineNum - 1] = tmpArray[lineNum - 1].replace(reg, ""), tmpArray = tmpArray.join(splitor);
		}
		if (0 == lineNum) return comment.replace(reg, "");
	}

	function time2code(frames, fps, precision) {
		var timeTpye = app.project.timeDisplayType,
			t = frames < 0 ? 0 : frames;
		app.project.timeDisplayType = 2012;
		var timecode = timeToCurrentFormat(t, fps),
			ms = Math.floor(timecode.substr(-fps.toFixed().toString().length) / fps * 1e3 / precision) * precision;
		for (ms = ms.toString(); ms.length < 3;) ms = 0 + ms;
		app.project.timeDisplayType = timeTpye;
		return timecode.substr(0, timecode.length - fps.toFixed().toString().length - 1) + "," + ms;
	}

	function checkMarker(layer) {
		var timeType = app.project.timeDisplayType;
		app.project.timeDisplayType = 2013;
		var esMarker = layer.property("Marker"),
			// 0010+1 = 00101, 0010-1 = 9
			esMarkerTime = Number(timeToCurrentFormat(layer.inPoint, comp.frameRate)) + markerTimeOffset;
		if (void 0 != esMarker.numKeys) {
			for (var a = 1; a <= esMarker.numKeys; a++)
				if (timeToCurrentFormat(esMarker.keyTime(a), comp.frameRate) == esMarkerTime) return app.project.timeDisplayType = timeType, !0;
			return app.project.timeDisplayType = timeType, !1;
		}
	}

	function tagButton(control, copyString, controlText) {
		control.grp.RPparent.statusText.text = controlText + " " + es_str.copied;
		runCommand(copyString);
		showText(control, controlText + " " + es_str.copied, 1000, 1);
	}

	function validMarker(layer) {
		if (!checkMarker(layer)) {
			var comment = layer.property("Source Text").valueAtTime(layer.inPoint + markerTimeOffset / comp.frameRate, !1);
			comment = String(comment).replace(/\comment/gm, newlineMark);
			var params = {};
			params.bord =
				params.fsp =
				params.be =
				params.move = "";
			var esMarker = new MarkerValue(comment, "", "", "", "", params);
			layer.property("Marker").setValueAtTime(layer.inPoint + markerTimeOffset / comp.frameRate, esMarker);
		}
	}

	function canWriteFiles() {
		if (isSecurityPrefSet()) return true;
		alert(es_str.writePermiss);
		app.executeCommand(2359);
		return isSecurityPrefSet();

		function isSecurityPrefSet() {
			return app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY") === 1;
		}
	}

	function numStep(key, control) {
		var step;
		step = key.shiftKey ? 10 / 2 : 1 / 2;
		switch (key.keyName) {
		case "Up":
			control.text = Number(control.text) + step;
			break;
		case "Down":
			control.text = Number(control.text) - step;
		}
	} // handle_key
	function hexToRgb(string) {
		"string" == typeof string && (string = parseInt(string, 16));
		var r = string >> 16 & 255,
			g = string >> 8 & 255,
			b = string >> 0 & 255;
		return [r / 255, g / 255, b / 255, 1];
	}

	function fixBlueHex(num) {
		for (var hex = num.toString(16); hex.length < 6;) hex = 0 + hex;
		return hex;
	}

	function fixList(control) {
		var wh = control.size;
		control.size = [1 + wh[0], 1 + wh[1]];
		control.size = [wh[0], wh[1]];
	}

	function validNum(inPut, def, express) {
		return String.prototype.trim || (String.prototype.trim = function () {
			return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
		}), "" == inPut.trim() || isNaN(inPut) || express ? parseFloat(def) : parseFloat(inPut);
	}

	function refreshButton(pal) {
		if (comp = app.project.activeItem, osl = sl, sl = comp ? sortLayers(comp.selectedLayers) : [], checkTextLayer(sl))
			if (pal.grp.leftPart.buttonArea.olGroup.olCheck.value && checkOverlap(sl)) sl = osl, alert(es_str.overlap);
			else {
				pal.grp.RPparent.rightPart.editText.backupSelection = "",
					slIndex = [],
					pal.grp.leftPart.listArea.removeAll(),
					app.beginUndoGroup(es_str.title);
				for (var t = 0; t < sl.length; t++) {
					slIndex.push(sl[t].index),
						validMarker(sl[t]),
						pal.grp.leftPart.listArea.add("item", t + 1),

						pal.grp.leftPart.listArea.items[t].subItems[0].text =
						time2code(sl[t].inPoint, comp.frameRate, pal.grp.leftPart.buttonArea.preci.text) +
						" --> " +
						time2code(sl[t].outPoint, comp.frameRate, pal.grp.leftPart.buttonArea.preci.text);

					var r = sl[t].property("Marker").valueAtTime(sl[t].inPoint + markerTimeOffset / comp.frameRate, !0);

					pal.grp.leftPart.listArea.items[t].subItems[1].text =
						r.chapter +
						r.url +
						r.frameTarget +
						r.cuePointName +
						r.getParameters().bord +
						r.getParameters().fsp +
						r.getParameters().be +
						r.getParameters().move +
						r.comment.replace(reg, "\r");

					sl[t].selected = !1;
				}
				app.endUndoGroup();
			}
		else sl = osl;
		pal.grp.leftPart.buttonArea.pickPos.enabled = !0;
		pal.grp.leftPart.buttonArea.guessFontsize.enabled = !0;
		pal.grp.leftPart.buttonArea.rmMarker.enabled = !0;
		for (var i = 6; i < pal.grp.leftPart.buttonArea.children.length; i++) {
			pal.grp.leftPart.buttonArea.children[i].enabled = 0 == pal.grp.leftPart.listArea.items.length ? !1 : !0;
		}
		for (var x = 0; x < pal.grp.RPparent.rightPart.btGroup.children.length - 1; x++) {
			pal.grp.RPparent.rightPart.btGroup.children[x].enabled = 0 == pal.grp.leftPart.listArea.items.length ? !1 : !0;
			pal.grp.RPparent.rightPart.btGroup.fbt.fcValue.notify("onDraw");
			pal.grp.RPparent.rightPart.btGroup.fbt.fcValue.fillBrush = 0 == pal.grp.leftPart.listArea.items.length ? pal.graphics.newBrush(pal.graphics.BrushType.SOLID_COLOR, disableGreen, 1) : pal.graphics.newBrush(pal.graphics.BrushType.SOLID_COLOR, bgGreen, 1);
		}
		pal.grp.RPparent.rightPart.editText.enabled = 0 == pal.grp.leftPart.listArea.items.length ? !1 : !0;
		pal.grp.RPparent.rightPart.btGroup.rebtGroup.epButton.enabled = 0 == pal.grp.leftPart.listArea.items.length ? !1 : !0;
	}

	if (canWriteFiles()) {
		var ui = es_buildUI(thisObj),
			comp, sl, osl, slIndex, markerTimeOffset = 1,
			newlineMark = "↵",
			bat,
			batCommand,
			vbs,
			vbsCommand,
			echoVbs,
			echoVbsCommand,
			reg = new RegExp(newlineMark, "gm");

		if (-1 != $.os.indexOf("Win")) {
			if (File(Folder.temp.toString() + encodeURI("/es-win-ctrl-v.bat")).exists) bat = File(Folder.temp.toString() + encodeURI("/es-win-ctrl-v.bat"));
			else {
				bat = new File(Folder.temp.toString() + encodeURI("/es-win-ctrl-v.bat"));
				batCommand = "powershell -Command \"$wshell = New-Object -ComObject wscript.shell;$wshell.SendKeys('^v')\"";
				writeFile(bat, batCommand);
			}
			if (File(Folder.temp.toString() + encodeURI("/es-win-ctrl-v.vbs")).exists) vbs = File(Folder.temp.toString() + encodeURI("/es-win-ctrl-v.vbs"));
			else {
				vbs = new File(Folder.temp.toString() + encodeURI("/es-win-ctrl-v.vbs"));
				vbsCommand = "CreateObject(\"Wscript.Shell\").Run \"" + bat.fsName + "\", 0, True";
				writeFile(vbs, vbsCommand);
			}
			if (File(Folder.temp.toString() + encodeURI("/echoClip.vbs")).exists) echoVbs = File(Folder.temp.toString() + encodeURI("/echoClip.vbs"));
			else {
				echoVbs = new File(Folder.temp.toString() + encodeURI("/echoClip.vbs"));
				echoVbsCommand = "CreateObject(\"Wscript.Shell\").Run \"" + File(Folder.temp.toString() + encodeURI("/echoClip.bat")).fsName + "\", 0, True";
				writeFile(echoVbs, echoVbsCommand);
			}
		}

		refreshButton(ui);

		if (ui.grp.leftPart.listArea.items.length == 0) {
			ui.grp.leftPart.buttonArea.pickPos.enabled = !1;
			ui.grp.leftPart.buttonArea.guessFontsize.enabled = !1;
			ui.grp.leftPart.buttonArea.rmMarker.enabled = !1;
		}

		if (ui !== null) {
			if (ui instanceof Window) {
				ui.center();
				ui.show();
			} else {
				ui.layout.layout(true);
			}
		}
	}
})(this);