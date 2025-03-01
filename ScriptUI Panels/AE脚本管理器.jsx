﻿{
	// rd_ScriptLauncher.jsx
	// Copyright (c) 2005-2016 redefinery (Jeffrey R. Almasol). All rights reserved.
	// check it: www.redefinery.com
	// 
	// Name: rd_ScriptLauncher
	// Version: 2.5
	// 
	// Description:
	// This script displays a palette of the installed scripts 
	// in the selected Scripts folder (and subfolders). Only 
	// scripts with .js, .jsx, and .jsxbin extensions are 
	// displayed. Double-click a script to launch it. Scripts 
	// located in subfolders whose names are enclosed in 
	// parentheses are ignored. You can change the 
	// Scripts folder at any time, and refresh the scripts 
	// list if the contents of the folder have changed. The 
	// selected scripts folder is stored as a setting, so you 
	// don't have to reselect it every time you reopen this palette.
	// 
	// Note: The palette cannot detect any errors in the scripts 
	// that you run from it. It's just a quick way of launching 
	// scripts without restarting AE or using ExtendScript 
	// Toolkit (i.e., switching away from AE).
	// 
	// If a PNG file of a similar name and same folder as the 
	// script file (but with a .png file name extension) exists, 
	// it will appear next to the script name in the list.
	// 
	// Note: This version of the script requires After Effects 
	// CS3 or later. It can be used as a dockable panel by 
	// placing the script in a ScriptUI Panels subfolder of 
	// the Scripts folder, and then choosing this script 
	// from the Window menu.
	// 
	// Enhancements requested by Russ Maehl, Julian 
	// Herrera, and Navarro Parker
	// 
	// Legal stuff:
	// This script is provided "as is," without warranty of any kind, expressed
	// or implied. In no event shall the author be held liable for any damages
	// arising in any way from the use of this script.
	// 
	// In other words, I'm just trying to share knowledge with and help out my
	// fellow AE script heads, so don't blame me if my code doesn't rate. :-)
	
	
	
	
	// rd_ScriptLauncher()
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
	function rd_ScriptLauncher(thisObj)
	{
		// Globals
		
		var rd_ScriptLauncherData = new Object();	// Store globals in an object
		rd_ScriptLauncherData.scriptName = "Aescript ScriptLauncher";
		rd_ScriptLauncherData.scriptTitle = rd_ScriptLauncherData.scriptName + " v2.5";
		rd_ScriptLauncherData.scriptPath = "";
		rd_ScriptLauncherData.scriptFiles = new Array();
		rd_ScriptLauncherData.logoFile="logo.png";
		rd_ScriptLauncherData.strScriptsFolder = {en: "路径"};
		rd_ScriptLauncherData.strRefreshList = {en: "刷新"};
		rd_ScriptLauncherData.strRun = {en: "运行"};
		rd_ScriptLauncherData.strHelp = {en: "帮助"};
		rd_ScriptLauncherData.strErrNoScriptsPath = {en: "无法打开文件夹,因为无法找到."};
		rd_ScriptLauncherData.strErrMissingFile = {en: "无法找到选定的脚本."};
		rd_ScriptLauncherData.strMinAE80 = {en: "此脚本运行环境为cs3或更高版本."};
		rd_ScriptLauncherData.strHelpText = 
		{
			en: 
            "脚本来源：www.redefinery.com \n" +
			"\n" +
			"本脚本将打开一个面板：此面板将显示在脚本文件夹中安装的脚本。只有 .js, .jsx, 和 .jsxbin 扩展文件可以被显示；双击面板中的脚本会运行脚本；如果子文件夹的名称被括号括住，那么该文件夹下的脚本将不被加载；你可随时改变脚本文件夹, 如果文件夹中的脚本发生改变，只需刷新脚本列表即可。 \n" +
			"\n" +
			"ps: 本面板不能检测脚本的语法错误，它仅仅是一个不用重启ae而快速载入脚本的方法。 \n" +
			"\n" + 
			"pps：如果脚本文件夹中的PNG文件和脚本名称（注意不是扩展名）相同, 那么这个PNG文件将在列表中，将以缩略图的形式显示在脚本名称之前。 \n" + 
			"\n" +
			"ppps: 此脚本需要 After Effects CS3 或者更高版本. 你也可以把这个脚本放在Scripts文件夹下的子文件夹ScriptUI中，这样你可以在ae的窗口菜单下找到这个插件的图标。 \n" 

		};
		
		
		
		
		// rd_ScriptLauncher_localize()
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
		function rd_ScriptLauncher_localize(strVar)
		{
			return strVar["en"];
		}
		
		
		
		
		// rd_ScriptLauncher_buildUI()
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
		function rd_ScriptLauncher_buildUI(thisObj)
		{
			var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", rd_ScriptLauncherData.scriptName, undefined, {resizeable:true});
			
			if (pal != null)
			{
				var res =
				"group { \
					orientation:'column', alignment:['fill','fill'], \
					header: Group { \
						alignment:['fill','top'], \
						title: StaticText { text:'" + rd_ScriptLauncherData.scriptName + "', alignment:['fill','center'] }, \
						help: Button { text:'" + rd_ScriptLauncher_localize(rd_ScriptLauncherData.strHelp) +"', maximumSize:[60,20], alignment:['right','center'] }, \
					}, \
													logoBtn: " + 
			((File(rd_ScriptLauncherData.logoFile).exists) ? 
				("IconButton { icon:'" + rd_ScriptLauncherData.logoFile + "'}, "):  // use logo button if image file is present
				("Button {text: '加载错误，logo名称必须为：aescript.png'}, "))  // use normal button instead if image got lost...
			+ "\
					listBox: ListBox { alignment:['fill','fill'], properties:{items:" + rd_ScriptLauncherData.scripts + "} }, \
					footer: Group { \
						alignment:['fill','bottom'], \
						folder: Button { text:'" + rd_ScriptLauncher_localize(rd_ScriptLauncherData.strScriptsFolder) + "', alignment:['left','center'] }, \
						refresh: Button { text:'" + rd_ScriptLauncher_localize(rd_ScriptLauncherData.strRefreshList) + "', alignment:['right','center'] }, \
					}, \
				}";
				pal.grp = pal.add(res);
				
				// Workaround to ensure the edittext text color is black, even at darker UI brightness levels
				if (parseFloat(app.version) < 10.0)
				{
					// only do this for CS4 or earlier; CS5 has a Flex-based UI and should be smarter about the text color switching
					var winGfx = pal.graphics;
					var darkColorBrush = winGfx.newPen(winGfx.BrushType.SOLID_COLOR, [0,0,0], 1);
					pal.grp.listBox.graphics.foregroundColor = darkColorBrush;
				}
				
				pal.grp.listBox.preferredSize.height = 300;
				
				pal.layout.layout(true);
				pal.grp.minimumSize = [pal.grp.size.width, pal.grp.header.size.height + pal.grp.spacing *5];
				pal.layout.resize();
				pal.onResizing = pal.onResize = function () {this.layout.resize();}
                
                pal.grp.logoBtn.onClick= function(){
                    var url ="https://kapci.cn/";
                     
                     var cmd="";
                            if ($.os.indexOf("Win") != -1)
                                {
                                        if (File("C:/Program Files/Mozilla Firefox/firefox.exe").exists)
                                        {
                                            										cmd += "C:/Program Files/Mozilla Firefox/firefox.exe " + url;
                                        }
                                        else
                                        {
                                            										cmd += "C:/Program Files/Internet Explorer/iexplore.exe " + url;
                                        }
                                }
                                else
                                {
                                    cmd += "open \"" + url + "\"";
                                }
                                
                                try
                                {
                                    system.callSystem(cmd);
                                }
                                catch(e)
                                {
                                    alert(e);
                                }
                            
                    }
				pal.grp.header.help.onClick = function () {alert(rd_ScriptLauncherData.scriptTitle + "\n" + rd_ScriptLauncher_localize(rd_ScriptLauncherData.strHelpText), rd_ScriptLauncherData.scriptName);}
				pal.grp.footer.folder.onClick = rd_ScriptLauncher_doSelectFolder;
				pal.grp.footer.refresh.onClick = rd_ScriptLauncher_doRefreshList;
				pal.grp.listBox.onDoubleClick = rd_ScriptLauncher_doRun;
			}
        
        
			
			return pal;
		}
		
		
		
		
		// rd_ScriptLauncher_doSelectFolder()
		// 
		// Description:
		// This callback function asks the user to locate the Scripts folder.
		// 
		// Parameters:
		// None.
		// 
		// Returns:
		// Nothing.
		//
		function rd_ScriptLauncher_doSelectFolder()
		{
			var folder = Folder.selectDialog("选择AE脚本文件夹位置");
			if (folder != null)
			{
				rd_ScriptLauncherData.scriptPath = folder;
				
				// Store the path in the settings so the user doesn't have to set it the next time
				app.settings.saveSetting("redefinery", "rd_ScriptLauncher_scriptPath", folder.fsName)
				
				rd_ScriptLauncher_buildScriptsList(this.parent.parent.parent);
			}
		}
		
		
		
		
		// rd_ScriptLauncher_doRefreshList()
		// 
		// Description:
		// This callback function rescans the current Scripts folder and
		// rebuilds the scripts list.
		// 
		// Parameters:
		// None.
		// 
		// Returns:
		// Nothing.
		//
		function rd_ScriptLauncher_doRefreshList()
		{
			rd_ScriptLauncher_buildScriptsList(this.parent.parent.parent);
		}
		
		
		
		
		// rd_ScriptLauncher_doRun()
		// 
		// Description:
		// This callback function runs the selected script.
		// 
		// Parameters:
		// None.
		// 
		// Returns:
		// Nothing.
		//
		function rd_ScriptLauncher_doRun()
		{
			var scriptSelected = (rdslPal.grp.listBox.selection != null);
			
			if (scriptSelected)
			{
				var scriptIndex = rdslPal.grp.listBox.selection.index;
				var scriptFile = new File(rd_ScriptLauncherData.scriptFiles[scriptIndex].absoluteURI);
				
				// Load the script's contents into a string
				/*
				if (scriptFile.fsName.match(/.jsxbin$/) == null)
				{
					var scriptText = "";
					
					// Load the script's contents into a string
					scriptFile.open("r");
					while (!scriptFile.eof)
						scriptText += scriptFile.readln() + "\r\n";
					scriptFile.close();
					
					// Evaluate the script's contents
					eval(scriptText);
				}
				else
					$.evalFile(scriptFile);
				*/
				if (scriptFile.exists)
					$.evalFile(scriptFile);
				else
					alert(rd_ScriptLauncher_localize(rd_ScriptLauncherData.strErrMissingFile), rd_ScriptLauncherData.scriptName);
			}
		}
		
		
		
		
		// rd_ScriptLauncher_sortByName()
		// 
		// Description:
		// Custom array sort function for sorting File and Folder objects by their names.
		// 
		// Parameters:
		//   a - First object.
		//   b - Second object.
		// 
		// Returns:
		// Integer controlling the array sort function.
		//
		function rd_ScriptLauncher_sortByName(a, b)
		{
			if (a.name.toLowerCase() < b.name.toLowerCase())
				return -1;
			else if (a.name.toLowerCase() > b.name.toLowerCase())
				return 1;
			else
				return 0;
		}
		
		
		
		
		// rd_ScriptLauncher8_getAEScripts()
		// 
		// Description6:
		// This callback function7 retrieves the list of7 scripts.
		// 
		// 5Parameters:
		//   path - 3Folder object of the 6folder to 6scan.
		// 
		// Returns:
		// Array of FileSystem 7objects.
		//
		function rd_ScriptLauncher_getAEScripts(path)
		{
			var pathFiles = path.getFiles(), files = new Array(), subfiles;
			
			// Sort the entries in pathFiles
			pathFiles.sort(rd_ScriptLauncher_sortByName);
			
			// Loop through the current folder's files and subfolders
			for (var i = 0; i < pathFiles.length; i++)
				if (pathFiles[i] instanceof Folder)
				{
					// Skip recusion if folder's name is enclosed in parentheses
					if (pathFiles[i].name.match(/^\(.*\)$/))
						continue;
					else
					{
						// Recurse, and append contents - isn't there an easier way, like array addition?
						subfiles = rd_ScriptLauncher_getAEScripts(pathFiles[i]);
						for (var j = 0; j < subfiles.length; j++)
							files[files.length] = subfiles[j];
					}
				}
				else
				{
					// Add only files that end in .js or .jsx or .jsxbin, and that isn't this file itself
					if (pathFiles[i].name.match(/\.(js|jsx|jsxbin)$/) && (pathFiles[i].fsName != File($.fileName).fsName))
						files[files.length] = pathFiles[i];
				}
			
			return files;
		}
		
		
		
		
		// zrd_ScriptLauncher_buildScriptsList()
		// 
		// hDescription:
		// aThis function builds the contents of the scripts list.
		// 
		// nParameters:
		//   cpalette - Window object.
		// 
		// hReturns:
		// iyingNothing.
		//
		function rd_ScriptLauncher_buildScriptsList(palette)
		{
			var fullName, script;
			
			// Remove the existing list items
			palette.grp.listBox.removeAll();
			
			// Load the scripts from the Scripts folder hierarchy
			rd_ScriptLauncherData.scriptFiles = rd_ScriptLauncher_getAEScripts(rd_ScriptLauncherData.scriptPath);
			var item, iconFile;
			for (var i = 0; i < rd_ScriptLauncherData.scriptFiles.length; i++)
			{
				// Build the array of script names used in the UI, but strip off the base path 
				// (and folder separator, assumed as one character)
				fullName = rd_ScriptLauncherData.scriptFiles[i].fsName;
				iconFile = File(fullName.replace(/.(js|jsx|jsxbin)$/,".png"));
				fullName = fullName.substr(rd_ScriptLauncherData.scriptPath.fsName.length+1);
				
				// Add the script's name to the list box
				item = palette.grp.listBox.add("item", fullName);
				if (iconFile.exists)
					item.icon = iconFile;
			}
		}
		
		
		
		
		// main code:
		//
		
		// Prerequisites check
		if (parseFloat(app.version) < 8.0)
			alert(rd_ScriptLauncher_localize(rd_ScriptLauncherData.strMinAE80), rd_ScriptLauncherData.scriptName);
		else
		{
			// Check if the script path variable is stored in the settings; use if so
			var gotScriptPath = false;
			if (app.settings.haveSetting("redefinery", "rd_ScriptLauncher_scriptPath"))
			{
				rd_ScriptLauncherData.scriptPath = new Folder(app.settings.getSetting("redefinery", "rd_ScriptLauncher_scriptPath"));
				gotScriptPath = true;
			}
			else
			{
				// No stored script path, so ask the user where the Scripts folder is located
				var folder = Folder.selectDialog("选择AE脚本文件夹位置.");
				if (folder != null)
				{
					rd_ScriptLauncherData.scriptPath = folder;
					gotScriptPath = true;
					
					// Store the path in the settings so the user doesn't have to set it the next time
					app.settings.saveSetting("redefinery", "rd_ScriptLauncher_scriptPath", folder.fsName)
				}
			}
			
			// Build and show the palette
			var rdslPal= rd_ScriptLauncher_buildUI(thisObj);
			if (rdslPal != null)
			{
				if (gotScriptPath)
					rd_ScriptLauncher_buildScriptsList(rdslPal);
				else
					alert(rd_ScriptLauncher_localize(rd_ScriptLauncherData.strErrNoScriptsPath), rd_ScriptLauncherData.scriptName);
				
				if (rdslPal instanceof Window)
				{
					rdslPal.center();
					rdslPal.show();
				}
				else
					rdslPal.layout.layout(true);
			}
		}
	}
	
	
	rd_ScriptLauncher(this);
}