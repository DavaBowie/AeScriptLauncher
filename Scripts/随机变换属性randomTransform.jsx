/*
    Name............randomTransform.jsx    
    Version.........2.0   
    Author..........www.nabscripts.com
    Description.....This script sets random values to the transform properties of the selected layers.
    Support.........7.0/CS3
*/


{
    /*---------------------------------------------------------------------------------------------------------*/    
    function initGlobals(G)
    /*---------------------------------------------------------------------------------------------------------*/
    {                
        G.NAME                      =   "随机变换 randomTransform.jsx";
        G.VERSION                   =   "2.0";
        G.TITLE                     =   "随机变换Random Transform";
        G.AUTHOR                    =   "此脚本来源于www.nabscripts.com  汉化BY 展翅鹰";
        G.DESCR                     =   {en:"这个脚本可以随机的改变选择的层的变换属性.\r\r请先选择一些层 然后选择需要随机变换的属性 然后设置随机变换的最小 最大值. 如果你不想让某个维度发生改变 请不要填写数字 (例如 position Y).", fr:"Ce script permet d'attribuer des valeurs aléatoires aux propriétés de\rtransformation des calques sélectionnés.\r\rAprès avoir sélectionné des calques, choisissez la propriété à modifier\ret spécifiez l'intervalle min/max parmi lequel seront choisies les valeurs\raléatoires. Laissez un blanc si vous souhaitez ne pas modifier une\rcomposante particulière (par exemple position Y)."};
        G.ABOUT                     =   {en:"\"" + G.NAME + "\", v" + G.VERSION + "\r" + G.AUTHOR + "\r\r" + loc(G.DESCR), fr:"\"" + G.NAME + "\", v" + G.VERSION + "\r" + G.AUTHOR + "\r\r" + loc(G.DESCR)};        
        //-----------------------------------------------------------------------------------------------------
        G.ABOUT_BTN_NAME            =   "帮助";
        G.PROPERTY_ST_NAME          =   {en:"属性:", fr:"Propriété:"};
        G.PROPERTY_LST_CHOICES      =   {en:["Anchor Point","Position","Scale","Rotation (2D)","Orientation","X Rotation","Y Rotation","Z Rotation","Opacity"], fr:["Point d'ancrage","Position","Echelle","Rotation (2D)","Orientation","Rotation X","Rotation Y","Rotation Z","Opacité"]};
        G.X                         =   "X";
        G.Y                         =   "Y";
        G.Z                         =   "Z";
        G.MIN_ST_NAME               =   {en:"最小:", fr:"Min;"};
        G.MAX_ST_NAME               =   {en:"最大:", fr:"Max:"};
        G.RANDOMIZE_BTN_NAME        =   {en:"应用", fr:"Randomiser"};
        //-----------------------------------------------------------------------------------------------------
        G.ANCHORPOINT_MINX          =   -2000;
        G.ANCHORPOINT_MINY          =   -2000;
        G.ANCHORPOINT_MINZ          =   -2000;
        G.ANCHORPOINT_MAXX          =   2000;
        G.ANCHORPOINT_MAXY          =   2000;
        G.ANCHORPOINT_MAXZ          =   2000;
        
        G.POSITION_MINX             =   -2000;
        G.POSITION_MINY             =   -2000;
        G.POSITION_MINZ             =   -2000;        
        G.POSITION_MAXX             =   2000;
        G.POSITION_MAXY             =   2000;
        G.POSITION_MAXZ             =   2000;
        
        G.SCALE_MINX                =   0;
        G.SCALE_MINY                =   0;
        G.SCALE_MINZ                =   0;
        G.SCALE_MAXX                =   100;
        G.SCALE_MAXY                =   100;
        G.SCALE_MAXZ                =   100;
        
        G.ROTATION_MIN              =   0;
        G.ROTATION_MAX              =   360;
        
        G.ORIENTATION_MINX          =   -180;
        G.ORIENTATION_MINY          =   -180;
        G.ORIENTATION_MINZ          =   -180;
        G.ORIENTATION_MAXX          =   180;
        G.ORIENTATION_MAXY          =   180;
        G.ORIENTATION_MAXZ          =   180;
        
        G.ROTATIONX_MIN             =   0;
        G.ROTATIONX_MAX             =   360;
        G.ROTATIONY_MIN             =   0;
        G.ROTATIONY_MAX             =   360;
        G.ROTATIONZ_MIN             =   0;
        G.ROTATIONZ_MAX             =   360;

        G.OPACITY_MIN               =   0;
        G.OPACITY_MAX               =   100;
        //-----------------------------------------------------------------------------------------------------
        G.PROP_INDEX                =   null;
        //-----------------------------------------------------------------------------------------------------        
        G.APP_VERSION               =   parseFloat(app.version);
        G.MIN_VERSION               =   7.0;
        //-----------------------------------------------------------------------------------------------------
        G.BAD_VERSION_ERR           =   {en:"此脚本需要AE 7.0或者更高版本.", fr:"Ce script nécessite AE 7.0 ou supérieur."};        
        G.NO_COMP_ERR               =   {en:"至少选择一个图层.", fr:"Sélectionnez au moins un calque."};
        G.NO_LAYER_ERR              =   {en:"至少选择一个图层.", fr:"Sélectionnez au moins un calque."};
    }
        
    /*---------------------------------------------------------------------------------------------------------*/
    function initUI(UI)
    /*---------------------------------------------------------------------------------------------------------*/
    {
        // palette
        UI.pal = new Window("palette", G.TITLE, [0,0,250,165]);
        UI.pal.add("statictext", [10,7,150,20], G.TITLE);
        UI.pal.add("panel", [10,22,217,26]);

        // about button
        UI.pal.aboutBtn = UI.pal.add("button", [205,5,250,25], G.ABOUT_BTN_NAME);
        
        
         
 eval(unescape('UI.pal.boke%20%3D%20UI.pal.add%28%22button%22%2C%20%5B150%2C5%2C200%2C25%5D%2C%20%22%u5173%u4E8E%22%29%3B%0A%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20UI.pal.boke.onClick%20%3D%20function%28%29%7B%0A%20%20%20%20%20var%20dlg%20%3D%20new%20Window%28%22palette%22%2C%20%22%u5173%u4E8E%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20res%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22group%20%7B%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20orientation%3A%27column%27%2C%20alignment%3A%5B%27fill%27%2C%27fill%27%5D%2C%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aboutPnl%3A%20Panel%20%7B%20properties%3A%7B%20borderStyle%3A%27sunken%27%20%7D%2C%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aboutEt%3A%20EditText%20%7B%20text%3A%27%22%20+%22%u6B64%u811A%u672C%u6765%u6E90%u4E8Ewww.nabscripts.com%20%20%20%u7ECF%u5C55%u7FC5%u9E70%u6C49%u5316%20%u7ECF%u5C55%u7FC5%u9E70%u6C49%u5316%20QQ%20867753667%20%u535A%u5BA2http%3A//blog.sina.com.cn/ykcmgzs%20%20BY%20%u8001%u9E70%20%202011.1.1%20%22%20+%20%22%27%2C%20properties%3A%7Bmultiline%3Atrue%7D%2C%20preferredSize%3A%5B280%2C150%5D%2C%20alignment%3A%5B%27right%27%2C%27center%27%5D%20%7D%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20btnsGr%3A%20Group%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20%20%20%20%20%20alignment%3A%5B%27fill%27%2C%27fill%27%5D%2C%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20okBtn%3A%20Button%20%7B%20text%3A%27%u535A%u5BA2%u5730%u5740%27%2C%20alignment%3A%5B%27left%27%2C%27center%27%5D%20%7D%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20visitBtn%3A%20Button%20%7B%20text%3A%27OK%27%2C%20alignment%3A%5B%27right%27%2C%27center%27%5D%20%7D%2C%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%22%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.gr%20%3D%20dlg.add%28res%29%3B%20%20%20%20%0A%20%20%0A%20dlg.gr.btnsGr.visitBtn.onClick%20%3D%20function%28%29%7B%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.close%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.gr.btnsGr.okBtn.onClick%20%3D%20function%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20url%20%3D%22http%3A//blog.sina.com.cn/ykcmgzs%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20cmd%3D%22%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28%24.os.indexOf%28%22Win%22%29%20%21%3D%20-1%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28File%28%22C%3A/Program%20Files/Mozilla%20Firefox/firefox.exe%22%29.exists%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cmd%20+%3D%20%22C%3A/Program%20Files/Mozilla%20Firefox/firefox.exe%20%22%20+%20url%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cmd%20+%3D%20%22C%3A/Program%20Files/Internet%20Explorer/iexplore.exe%20%22%20+%20url%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cmd%20+%3D%20%22open%20%5C%22%22%20+%20url%20+%20%22%5C%22%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20try%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20system.callSystem%28cmd%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20catch%28e%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert%28e%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.center%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.show%28%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D'))
         
         

        // property list
        UI.pal.add("statictext", [15,39,75,59], loc(G.PROPERTY_ST_NAME));
        UI.pal.propertyLst = UI.pal.add("dropdownlist", [75,35,220,55], loc(G.PROPERTY_LST_CHOICES));
        UI.pal.propertyLst.selection = 1;
        
        // min/max
        UI.pal.add("statictext", [93,65,100,80], G.X);
        UI.pal.add("statictext", [138,65,145,80], G.Y);
        UI.pal.add("statictext", [183,65,190,80], G.Z);
        
        UI.pal.minSt = UI.pal.add("statictext", [15,88,75,105], loc(G.MIN_ST_NAME));
        UI.pal.minXEdt = UI.pal.add("edittext", [75,85,115,105], G.POSITION_MINX);
        UI.pal.minYEdt = UI.pal.add("edittext", [120,85,160,105], G.POSITION_MINY);
        UI.pal.minZEdt = UI.pal.add("edittext", [165,85,205,105], G.POSITION_MINZ);
        
        UI.pal.maxSt = UI.pal.add("statictext", [15,118,75,135], loc(G.MAX_ST_NAME));
        UI.pal.maxXEdt = UI.pal.add("edittext", [75,115,115,135], G.POSITION_MAXX);
        UI.pal.maxYEdt = UI.pal.add("edittext", [120,115,160,135], G.POSITION_MAXY);
        UI.pal.maxZEdt = UI.pal.add("edittext", [165,115,205,135], G.POSITION_MAXZ);
        
        // randomize button
        UI.pal.randomizeBtn = UI.pal.add("button", [75,145,175,165], loc(G.RANDOMIZE_BTN_NAME));
        
        // events
        UI.pal.aboutBtn.onClick = function () 
        { 
            throwMsg(G.ABOUT); 
        };
        
        UI.pal.propertyLst.onChange = function ()
        {
            var propIndex = this.selection.index;
            
            switch (propIndex)
            {
                case 0:
                    UI.pal.minXEdt.visible = true;
                    UI.pal.minYEdt.visible = true;
                    UI.pal.minZEdt.visible = true;
                    UI.pal.minXEdt.text = G.ANCHORPOINT_MINX;
                    UI.pal.minYEdt.text = G.ANCHORPOINT_MINY;
                    UI.pal.minZEdt.text = G.ANCHORPOINT_MINZ;
                    UI.pal.maxXEdt.visible = true;
                    UI.pal.maxYEdt.visible = true;
                    UI.pal.maxZEdt.visible = true;
                    UI.pal.maxXEdt.text = G.ANCHORPOINT_MAXX;
                    UI.pal.maxYEdt.text = G.ANCHORPOINT_MAXY;
                    UI.pal.maxZEdt.text = G.ANCHORPOINT_MAXZ;                    
                    break;
                case 1:
                    UI.pal.minXEdt.visible = true;
                    UI.pal.minYEdt.visible = true;
                    UI.pal.minZEdt.visible = true;                
                    UI.pal.minXEdt.text = G.POSITION_MINX;
                    UI.pal.minYEdt.text = G.POSITION_MINY;
                    UI.pal.minZEdt.text = G.POSITION_MINZ;
                    UI.pal.maxXEdt.visible = true;
                    UI.pal.maxYEdt.visible = true;
                    UI.pal.maxZEdt.visible = true;                
                    UI.pal.maxXEdt.text = G.POSITION_MAXX;
                    UI.pal.maxYEdt.text = G.POSITION_MAXY;
                    UI.pal.maxZEdt.text = G.POSITION_MAXZ;                    
                    break;
                case 2:
                    UI.pal.minXEdt.visible = true;
                    UI.pal.minYEdt.visible = true;
                    UI.pal.minZEdt.visible = true;                
                    UI.pal.minXEdt.text = G.SCALE_MINX;
                    UI.pal.minYEdt.text = G.SCALE_MINY;
                    UI.pal.minZEdt.text = G.SCALE_MINZ;
                    UI.pal.maxXEdt.visible = true;
                    UI.pal.maxYEdt.visible = true;
                    UI.pal.maxZEdt.visible = true;                
                    UI.pal.maxXEdt.text = G.SCALE_MAXX;
                    UI.pal.maxYEdt.text = G.SCALE_MAXY;
                    UI.pal.maxZEdt.text = G.SCALE_MAXZ;                    
                    break;
                case 3:
                    UI.pal.minXEdt.text = G.ROTATION_MIN;
                    UI.pal.minYEdt.visible = false;
                    UI.pal.minZEdt.visible = false;
                    UI.pal.maxXEdt.text = G.ROTATION_MAX;
                    UI.pal.maxYEdt.visible = false;
                    UI.pal.maxZEdt.visible = false;
                    break;
                case 4:
                    UI.pal.minXEdt.visible = true;
                    UI.pal.minYEdt.visible = true;
                    UI.pal.minZEdt.visible = true;                
                    UI.pal.minXEdt.text = G.ORIENTATION_MINX;
                    UI.pal.minYEdt.text = G.ORIENTATION_MINY;
                    UI.pal.minZEdt.text = G.ORIENTATION_MINZ;
                    UI.pal.maxXEdt.visible = true;
                    UI.pal.maxYEdt.visible = true;
                    UI.pal.maxZEdt.visible = true;                
                    UI.pal.maxXEdt.text = G.ORIENTATION_MAXX;
                    UI.pal.maxYEdt.text = G.ORIENTATION_MAXY;
                    UI.pal.maxZEdt.text = G.ORIENTATION_MAXZ;
                    break;
                case 5:
                    UI.pal.minXEdt.text = G.ROTATIONX_MIN;
                    UI.pal.minYEdt.visible = false;
                    UI.pal.minZEdt.visible = false;                    
                    UI.pal.maxXEdt.text = G.ROTATIONX_MAX;
                    UI.pal.maxYEdt.visible = false;
                    UI.pal.maxZEdt.visible = false;                    
                    break;
                case 6:
                    UI.pal.minXEdt.text = G.ROTATIONY_MIN;
                    UI.pal.minYEdt.visible = false;
                    UI.pal.minZEdt.visible = false;                    
                    UI.pal.maxXEdt.text = G.ROTATIONY_MAX;
                    UI.pal.maxYEdt.visible = false;
                    UI.pal.maxZEdt.visible = false;                    
                    break;
                case 7:
                    UI.pal.minXEdt.text = G.ROTATIONZ_MIN;
                    UI.pal.minYEdt.visible = false;
                    UI.pal.minZEdt.visible = false;                    
                    UI.pal.maxXEdt.text = G.ROTATIONZ_MAX;
                    UI.pal.maxYEdt.visible = false;
                    UI.pal.maxZEdt.visible = false;                    
                    break;
                case 8:
                    UI.pal.minXEdt.text = G.OPACITY_MIN;
                    UI.pal.minYEdt.visible = false;
                    UI.pal.minZEdt.visible = false;                    
                    UI.pal.maxXEdt.text = G.OPACITY_MAX;
                    UI.pal.maxYEdt.visible = false;
                    UI.pal.maxZEdt.visible = false;                    
                    break;
                default:
                    break;                
            }            
        };
        
        UI.pal.minXEdt.onChange = function ()
        {
            if (isNaN(this.text))
            {
                this.text = "0";
                return;
            }
            
            var propIndex = UI.pal.propertyLst.selection.index;
            
            switch (propIndex)
            {
                case 0:
                    G.ANCHORPOINT_MINX = parseFloat(UI.pal.minXEdt.text);        
                    break;
                case 1:
                    G.POSITION_MINX = parseFloat(UI.pal.minXEdt.text);        
                    break;
                case 2:
                    G.SCALE_MINX = parseFloat(UI.pal.minXEdt.text);                    
                    break;
                case 3:
                    G.ROTATION_MIN = parseFloat(UI.pal.minXEdt.text);
                    break;
                case 4:
                    G.ORIENTATION_MINX = parseFloat(UI.pal.minXEdt.text);
                    break;
                case 5:
                    G.ROTATIONX_MIN = parseFloat(UI.pal.minXEdt.text); 
                    break;
                case 6:
                    G.ROTATIONY_MIN = parseFloat(UI.pal.minXEdt.text); 
                    break;
                case 7:
                    G.ROTATIONZ_MIN = parseFloat(UI.pal.minXEdt.text); 
                    break;
                case 8:
                    G.OPACITY_MIN = parseFloat(UI.pal.minXEdt.text);   
                    break;
                default:
                    break;                
            }            
        };  
        
        UI.pal.maxXEdt.onChange = function ()
        {
            if (isNaN(this.text))
            {
                this.text = "0";
                return;
            }
            
            var propIndex = UI.pal.propertyLst.selection.index;
            
            switch (propIndex)
            {
                case 0:
                    G.ANCHORPOINT_MAXX = parseFloat(UI.pal.maxXEdt.text);        
                    break;
                case 1:
                    G.POSITION_MAXX = parseFloat(UI.pal.maxXEdt.text);        
                    break;
                case 2:
                    G.SCALE_MAXX = parseFloat(UI.pal.maxXEdt.text);                    
                    break;
                case 3:
                    G.ROTATION_MAX = parseFloat(UI.pal.maxXEdt.text);
                    break;
                case 4:
                    G.ORIENTATION_MAXX = parseFloat(UI.pal.maxXEdt.text);
                    break;
                case 5:
                    G.ROTATIONX_MAX = parseFloat(UI.pal.maxXEdt.text); 
                    break;
                case 6:
                    G.ROTATIONY_MAX = parseFloat(UI.pal.maxXEdt.text); 
                    break;
                case 7:
                    G.ROTATIONZ_MAX = parseFloat(UI.pal.maxXEdt.text); 
                    break;
                case 8:
                    G.OPACITY_MAX = parseFloat(UI.pal.maxXEdt.text);   
                    break;
                default:
                    break;                
            }            
        };       

        UI.pal.minYEdt.onChange = function ()
        {
            if (isNaN(this.text))
            {
                this.text = "0";
                return;
            }
            
            var propIndex = UI.pal.propertyLst.selection.index;
            
            switch (propIndex)
            {
                case 0:
                    G.ANCHORPOINT_MINY = parseFloat(UI.pal.minYEdt.text);        
                    break;
                case 1:
                    G.POSITION_MINY = parseFloat(UI.pal.minYEdt.text);        
                    break;
                case 2:
                    G.SCALE_MINY = parseFloat(UI.pal.minYEdt.text);                    
                    break;
                case 3:
                    break;
                case 4:
                    G.ORIENTATION_MINY = parseFloat(UI.pal.minYEdt.text);
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 8:  
                    break;
                default:
                    break;                
            }            
        };  
        
        UI.pal.maxYEdt.onChange = function ()
        {
            if (isNaN(this.text))
            {
                this.text = "0";
                return;
            }
            
            var propIndex = UI.pal.propertyLst.selection.index;
            
            switch (propIndex)
            {
                case 0:
                    G.ANCHORPOINT_MAXY = parseFloat(UI.pal.maxYEdt.text);        
                    break;
                case 1:
                    G.POSITION_MAXY = parseFloat(UI.pal.maxYEdt.text);        
                    break;
                case 2:
                    G.SCALE_MAXY = parseFloat(UI.pal.maxYEdt.text);                   
                    break;
                case 3:
                    break;
                case 4:
                G.ORIENTATION_MAXY = parseFloat(UI.pal.maxYEdt.text);
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 8: 
                    break;
                default:
                    break;                
            }            
        };       

        UI.pal.minZEdt.onChange = function ()
        {
            if (isNaN(this.text))
            {
                this.text = "0";
                return;
            }
            
            var propIndex = UI.pal.propertyLst.selection.index;
            
            switch (propIndex)
            {
                case 0:
                    G.ANCHORPOINT_MINZ = parseFloat(UI.pal.minZEdt.text);        
                    break;
                case 1:
                    G.POSITION_MINZ = parseFloat(UI.pal.minZEdt.text);        
                    break;
                case 2:
                    G.SCALE_MINZ = parseFloat(UI.pal.minZEdt.text);                    
                    break;
                case 3:
                    break;
                case 4:
                    G.ORIENTATION_MINZ = parseFloat(UI.pal.minZEdt.text);
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 8:  
                    break;
                default:
                    break;                
            }            
        };  
        
        UI.pal.maxZEdt.onChange = function ()
        {
            if (isNaN(this.text))
            {
                this.text = "0";
                return;
            }
            
            var propIndex = UI.pal.propertyLst.selection.index;
            
            switch (propIndex)
            {
                case 0:
                    G.ANCHORPOINT_MAXZ = parseFloat(UI.pal.maxZEdt.text);        
                    break;
                case 1:
                    G.POSITION_MAXZ = parseFloat(UI.pal.maxZEdt.text);        
                    break;
                case 2:
                    G.SCALE_MAXZ = parseFloat(UI.pal.maxZEdt.text);                    
                    break;
                case 3:
                    break;
                case 4:
                G.ORIENTATION_MAXZ = parseFloat(UI.pal.maxZEdt.text);
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 8: 
                    break;
                default:
                    break;                
            }            
        };       
        
        UI.pal.randomizeBtn.onClick = Main;

        // show        
        UI.pal.center();
        UI.pal.show();        
    }
        
    /*---------------------------------------------------------------------------------------------------------*/
    function loc(str) 
    /*---------------------------------------------------------------------------------------------------------*/
    {
        return app.language == Language.FRENCH ? str["fr"] : str["en"];
    }
    
    /*---------------------------------------------------------------------------------------------------------*/
    function throwMsg(msg)
    /*---------------------------------------------------------------------------------------------------------*/
    {
        alert(loc(msg), G.TITLE);
    }

    /*---------------------------------------------------------------------------------------------------------*/
    function getPropName()
    /*---------------------------------------------------------------------------------------------------------*/
    {
        var propName = "";    
        
        switch (G.PROP_INDEX)
        {
            case 0:
                propName = "ADBE Anchor Point";
                break;
            case 1:
                propName = "ADBE Position";
                break;
            case 2:
                propName = "ADBE Scale";
                break;
            case 3:
                propName = "ADBE Rotate Z";  // 2D rot is equivalent to Z rot
                break;
            case 4:
                propName = "ADBE Orientation";
                break;
            case 5:
                propName = "ADBE Rotate X";
                break;
            case 6:
                propName = "ADBE Rotate Y";
                break;
            case 7:
                propName = "ADBE Rotate Z";
                break;
            case 8:
                propName = "ADBE Opacity";
                break;
            default:
                break;
        }
        
        return propName;
    }
    
    /*---------------------------------------------------------------------------------------------------------*/
    function getRandomValue(comp, layer)
    /*---------------------------------------------------------------------------------------------------------*/
    {
        var val;
        
        var x, y, z;
        
        switch (G.PROP_INDEX)
        {
            case 0:            
                x = (isNaN(G.ANCHORPOINT_MINX) || isNaN(G.ANCHORPOINT_MAXX)) ? layer.anchorPoint.valueAtTime(comp.time, false)[0] : G.ANCHORPOINT_MINX + (G.ANCHORPOINT_MAXX - G.ANCHORPOINT_MINX) * Math.random();
                y = (isNaN(G.ANCHORPOINT_MINY) || isNaN(G.ANCHORPOINT_MAXY)) ? layer.anchorPoint.valueAtTime(comp.time, false)[1] : G.ANCHORPOINT_MINY + (G.ANCHORPOINT_MAXY - G.ANCHORPOINT_MINY) * Math.random();
                z = (isNaN(G.ANCHORPOINT_MINZ) || isNaN(G.ANCHORPOINT_MAXZ)) ? layer.anchorPoint.valueAtTime(comp.time, false)[2] : G.ANCHORPOINT_MINZ + (G.ANCHORPOINT_MAXZ - G.ANCHORPOINT_MINZ) * Math.random();
                val = [x,y,z];
                break;
            case 1:
                x = (isNaN(G.POSITION_MINX) || isNaN(G.POSITION_MAXX)) ? layer.position.valueAtTime(comp.time, false)[0] : G.POSITION_MINX + (G.POSITION_MAXX - G.POSITION_MINX) * Math.random();
                y = (isNaN(G.POSITION_MINY) || isNaN(G.POSITION_MAXY)) ? layer.position.valueAtTime(comp.time, false)[1] : G.POSITION_MINY + (G.POSITION_MAXY - G.POSITION_MINY) * Math.random();
                z = (isNaN(G.POSITION_MINZ) || isNaN(G.POSITION_MAXZ)) ? layer.position.valueAtTime(comp.time, false)[2] : G.POSITION_MINZ + (G.POSITION_MAXZ - G.POSITION_MINZ) * Math.random();
                val = [x,y,z];
                break;
            case 2:
                x = (isNaN(G.SCALE_MINX) || isNaN(G.SCALE_MAXX)) ? layer.scale.valueAtTime(comp.time, false)[0] : G.SCALE_MINX + (G.SCALE_MAXX - G.SCALE_MINX) * Math.random();
                y = (isNaN(G.SCALE_MINY) || isNaN(G.SCALE_MAXY)) ? layer.scale.valueAtTime(comp.time, false)[1] : G.SCALE_MINY + (G.SCALE_MAXY - G.SCALE_MINY) * Math.random();
                z = (isNaN(G.SCALE_MINZ) || isNaN(G.SCALE_MAXZ)) ? layer.scale.valueAtTime(comp.time, false)[2] : G.SCALE_MINZ + (G.SCALE_MAXZ - G.SCALE_MINZ) * Math.random();
                val = [x,y,z];
                break;
            case 3:
                val = (isNaN(G.ROTATION_MIN) || isNaN(G.ROTATION_MAX)) ? layer.rotation.valueAtTime(comp.time, false) : G.ROTATION_MIN + (G.ROTATION_MAX - G.ROTATION_MIN) * Math.random();
                break;
            case 4:
                x = (isNaN(G.ORIENTATION_MINX) || isNaN(G.ORIENTATION_MAXX)) ? layer.orientation.valueAtTime(comp.time, false)[0] : G.ORIENTATION_MINX + (G.ORIENTATION_MAXX - G.ORIENTATION_MINX) * Math.random();
                y = (isNaN(G.ORIENTATION_MINY) || isNaN(G.ORIENTATION_MAXY)) ? layer.orientation.valueAtTime(comp.time, false)[1] : G.ORIENTATION_MINY + (G.ORIENTATION_MAXY - G.ORIENTATION_MINY) * Math.random();
                z = (isNaN(G.ORIENTATION_MINZ) || isNaN(G.ORIENTATION_MAXZ)) ? layer.orientation.valueAtTime(comp.time, false)[2] : G.ORIENTATION_MINZ + (G.ORIENTATION_MAXZ - G.ORIENTATION_MINZ) * Math.random();
                val = [x,y,z];
                break;
            case 5:
                val = (isNaN(G.ROTATIONX_MIN) || isNaN(G.ROTATIONX_MAX)) ? layer.rotationX.valueAtTime(comp.time, false) : G.ROTATIONX_MIN + (G.ROTATIONX_MAX - G.ROTATIONX_MIN) * Math.random();
                break;
            case 6:
                val = (isNaN(G.ROTATIONY_MIN) || isNaN(G.ROTATIONY_MAX)) ? layer.rotationY.valueAtTime(comp.time, false) : G.ROTATIONY_MIN + (G.ROTATIONY_MAX - G.ROTATIONY_MIN) * Math.random();
                break;
            case 7:
                val = (isNaN(G.ROTATIONZ_MIN) || isNaN(G.ROTATIONZ_MAX)) ? layer.rotationZ.valueAtTime(comp.time, false) : G.ROTATIONZ_MIN + (G.ROTATIONZ_MAX - G.ROTATIONZ_MIN) * Math.random();
                break;
            case 8:
                val = (isNaN(G.OPACITY_MIN) || isNaN(G.OPACITY_MAX)) ? layer.opacity.valueAtTime(comp.time, false) : G.OPACITY_MIN + (G.OPACITY_MAX - G.OPACITY_MIN) * Math.random();
                break;
            default:
                break;
        }
        
        return val;
    }
    
    /*---------------------------------------------------------------------------------------------------------*/
    function randomize(comp, layers)
    /*---------------------------------------------------------------------------------------------------------*/
    {
        var propName = getPropName();
        
        for (var i = 0; i < layers.length; i++)
        {
            try
            {
                var prop = layers[i].property("ADBE Transform Group").property(propName);           
                
                if (prop.numKeys)
                {
                    prop.setValueAtTime(comp.time, getRandomValue(comp, layers[i]));
                }
                else
                {
                    prop.setValue(getRandomValue(comp, layers[i]));
                }
            }
            catch (e)
            {
                // miam-miam
            }
        }
    }
    
    /*---------------------------------------------------------------------------------------------------------*/
    function Main()
    /*---------------------------------------------------------------------------------------------------------*/
    {
        var comp = app.project.activeItem;
        if (!comp || !(comp instanceof CompItem))
        {
            throwMsg(G.NO_COMP_ERR);
            return;
        }
        var selLayers = comp.selectedLayers;
        if (selLayers.length < 1)
        {
            throwMsg(G.NO_LAYER_ERR);
            return;
        }
        
        G.PROP_INDEX = UI.pal.propertyLst.selection.index;
        
        app.beginUndoGroup(G.TITLE);
        
        randomize(comp, selLayers);
            
        app.endUndoGroup();
    }
    
    /*---------------------------------------------------------------------------------------------------------*/
    // Entry Point
    /*---------------------------------------------------------------------------------------------------------*/
    var G = new Object(); 
    initGlobals(G);
    
    if (G.APP_VERSION < G.MIN_VERSION)
    {
        throwMsg(G.BAD_VERSION_ERR);
    }
    else
    {
        var UI = new Object();
        initUI(UI);
    }
    
}    
