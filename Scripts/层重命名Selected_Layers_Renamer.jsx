/*
SelectedLayersRenamer.jsx
version .98
(.94 adds numbering feature.)
(version .95 corrects minor cosmetic issue and adds progress text)
(version .96 fixes evil while block with endless loop in some situations
(version .97 fixes even more evil while block infinite loop problem. Sorry about that.
A Green Digital Entrustment (crgreen.com)
(version .98 removes truncation for CS4 or later)
(.99 search/replace now custom function, for various reasons, including my own mismanagement of files;
                                         the ultimate happy outcome is that renaming is now bug-free!)
v1.0 replaces dangerous parseInts with parseFloats (because of radix feature in parseInt)
*/
vers = "1.0";
var win = new Window('palette', '层改名Layer Rename (v' + vers + ')',[300,100,645,396]);
var w = buildUI();
if (w != null) {
    w.show();
}

function buildUI() {
    if (win != null) {
        win.nameSearchLabel = win.add('statictext', [14,15,314,37], '搜索名字:');
        win.nameSearchT = win.add('edittext', [25,40,325,62], '');
        win.nameReplaceLabel = win.add('statictext', [14,73,314,95], '替换为:');
        win.nameReplaceT = win.add('edittext', [25,98,325,120], '');
        win.typePnl = win.add('panel', [16,138,206,243+25], '改名方式:');
        win.progLbl = win.add('statictext', [20,271,206,308], '');
        
        win.repRad = win.typePnl.add('radiobutton', [14,13,174,35], '搜索并替换');
        win.repRad.value = true;
        win.repRad.onClick = function () {
            doTextChange(win.nameSearchLabel, '在名字中搜索:');
            doTextChange(win.nameReplaceLabel, '替换为:');
            
            doViz(win.startNumLabel, true);
            doViz(win.startNumT, true);
            doViz(win.countNumLabel, true);
            doViz(win.countNumT, true);
        };
        win.appRad = win.typePnl.add('radiobutton', [14,39,174,61], '添加');
        win.appRad.onClick = function () {
            doTextChange(win.nameSearchLabel, '开头添加:');
            doTextChange(win.nameReplaceLabel, '结尾添加:');
            doViz(win.startNumLabel, true);
            doViz(win.startNumT, true);
            doViz(win.countNumLabel, true);
            doViz(win.countNumT, true);
        };
        win.remRad = win.typePnl.add('radiobutton', [14,65,174,87], '移除字符');
        win.remRad.onClick = function () {
            doTextChange(win.nameSearchLabel, '从开头移除多少字符:');
            doTextChange(win.nameReplaceLabel, '从结尾移除多少字符:');
            doViz(win.startNumLabel, true);
            doViz(win.startNumT, true);
            doViz(win.countNumLabel, true);
            doViz(win.countNumT, true);
            
        };
        win.numRad = win.typePnl.add('radiobutton', [14,90,174,112], '数字');
        win.numRad.onClick = function () {
            doTextChange(win.nameSearchLabel, '数字前的字符 (或者为空白):');
            doTextChange(win.nameReplaceLabel, '数字后的字符 (或者为空白):');
            doViz(win.startNumLabel, false);
            doViz(win.startNumT, false);
            doViz(win.countNumLabel, false);
            doViz(win.countNumT, false);
            
        };
        
        win.startNumLabel = win.add('statictext', [225,143,270,165], '开始 #:');
        win.startNumLabel.visible = false;
        win.startNumT = win.add('edittext', [279,140,324,162], '0');
        win.startNumT.visible = false;
        win.countNumLabel = win.add('statictext', [225,176,281,198], '相隔:');
        win.countNumLabel.visible = false;
        win.countNumT = win.add('edittext', [290,173,324,195], '1');
        win.countNumT.visible = false;
        
        win.okBtn = win.add('button', [240,245,320,267], 'OK', {name:'OK'});
        win.okBtn.onClick = function () { doRenaming(this.parent); };
        
        win.cancBtn = win.add('button', [240,210,320,232], 'Close', {name:'Cancel'});
         win.cancBtn.onClick = function () {this.parent.close(1)};}
     
     win.gy = win.add('button', [240,175,320,197], '关于', {name:'关于'}); 
     
     win.gy.onClick = function(){
       eval(unescape('%20%20var%20dlg%20%3D%20new%20Window%28%22palette%22%2C%20%22%u5173%u4E8E%22%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20res%20%3D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22group%20%7B%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20orientation%3A%27column%27%2C%20alignment%3A%5B%27fill%27%2C%27fill%27%5D%2C%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aboutPnl%3A%20Panel%20%7B%20properties%3A%7B%20borderStyle%3A%27sunken%27%20%7D%2C%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aboutEt%3A%20EditText%20%7B%20text%3A%27%22%20+%22%u6B64%u811A%u672C%u5141%u8BB8%u4F60%u5BF9%u9009%u62E9%u7684%u5C42%u6279%u91CF%u6539%u540D%20%u8001%u9E70%u6C49%u5316%20%20QQ%20867753667%20%u535A%u5BA2http%3A//blog.sina.com.cn/ykcmgzs%20%20BY%20%u8001%u9E70%20%202011.1.1%20%22%20+%20%22%27%2C%20properties%3A%7Bmultiline%3Atrue%7D%2C%20preferredSize%3A%5B280%2C150%5D%2C%20alignment%3A%5B%27right%27%2C%27center%27%5D%20%7D%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20btnsGr%3A%20Group%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20%20%20%20%20%20alignment%3A%5B%27fill%27%2C%27fill%27%5D%2C%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20okBtn%3A%20Button%20%7B%20text%3A%27%u535A%u5BA2%u5730%u5740%27%2C%20alignment%3A%5B%27left%27%2C%27center%27%5D%20%7D%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20visitBtn%3A%20Button%20%7B%20text%3A%27OK%27%2C%20alignment%3A%5B%27right%27%2C%27center%27%5D%20%7D%2C%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%22%3B%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.gr%20%3D%20dlg.add%28res%29%3B%20%20%20%0D%0A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.gr.btnsGr.visitBtn.onClick%20%3D%20function%28%29%7B%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.close%28%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.gr.btnsGr.okBtn.onClick%20%3D%20function%28%29%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20url%20%3D%22http%3A//blog.sina.com.cn/ykcmgzs%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20cmd%3D%22%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28%24.os.indexOf%28%22Win%22%29%20%21%3D%20-1%29%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28File%28%22C%3A/Program%20Files/Mozilla%20Firefox/firefox.exe%22%29.exists%29%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cmd%20+%3D%20%22C%3A/Program%20Files/Mozilla%20Firefox/firefox.exe%20%22%20+%20url%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20else%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cmd%20+%3D%20%22C%3A/Program%20Files/Internet%20Explorer/iexplore.exe%20%22%20+%20url%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20else%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cmd%20+%3D%20%22open%20%5C%22%22%20+%20url%20+%20%22%5C%22%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20try%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20system.callSystem%28cmd%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20catch%28e%29%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert%28e%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.center%28%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dlg.show%28%29%3B'))

                  }
     
    return win
}



function doTextChange(target, newText) {
    target.text = newText;
}

function doViz(target, bool) {
    target.visible = !bool;
}

function splitReplace(st, ss, rs) {
    var stArray = st.split(ss);
    var patchedString = "";
    var i = 0;
    while (i < (stArray.length)) {
        if (i == (stArray.length-1)) {rs = "";}
        patchedString = (patchedString + (stArray[i] + rs) );
        i = (i + 1);
    }
  //  alert(patchedString);
    return patchedString
}


function doRenaming(theDialog) {
    // make sure a comp is selected
    var activeItem = app.project.activeItem;
    if (activeItem == null || !(activeItem instanceof CompItem)){
        alert("You need to select some layers first.");
    } else {
        
        var s = activeItem.selectedLayers;
        var selNum = s.length;
        if (selNum < 2) {
            alert("You need to select at least two layers first.");
        } else {
            
            app.beginUndoGroup("layer rename");
            var inputError = false;
            theDialog.progLbl.text = 'WORKING ............. PLEASE WAIT';
            theDialog.hide();
            theDialog.show();
            
            for (var n = (selNum-1); n >= 0; n--) {
                if ( ! inputError ) {
                    item = s[n];
                    oldName = item.name;
                    sear = theDialog.nameSearchT.text;
                    repl = theDialog.nameReplaceT.text
                    
                    newName = oldName;
                    
                    if (theDialog.repRad.value) {
                        
                    newName = splitReplace(newName, sear, repl);
                    
                    //now we check for pre-cs4 app version, for which we truncate:
                    if ((parseFloat(app.version) < 9.0)) { newName=(newName.substr(0,25));}
                    } else if (theDialog.appRad.value) {
                        newName=(sear + oldName + repl );
                    } else if (theDialog.remRad.value) {
                        if (sear == "") {sear = 0;}
                        if (repl == "") {repl = 0;}
                        sear = ( parseFloat(sear) );
                        repl = ( parseFloat(repl) );
                        if ( (isNaN(sear)) || (isNaN(repl)) ) {
                            alert('Error: Not a number?');
                            inputError = true;
                        } else {
                            newName=(newName.substr( sear, oldName.length-repl ));
                            sear="";
                            repl="";
                        }
                        
                    } else if (theDialog.numRad.value) {
                        
                        sear = theDialog.startNumT.text;
                        repl = theDialog.countNumT.text
                        if (sear == "") {sear = 0;}
                        if ( (repl == "") || (repl == 0) ) {repl = "NaN";}
                        sear = ( parseFloat(sear) );
                        repl = ( parseFloat(repl) );
                        
                        if ( (isNaN(sear)) || (isNaN(repl)) ) {
                            alert('Error: Not a number, or invalid number to count by.');
                            inputError = true;
                        } else {
                            h = theDialog.nameSearchT.text;
                            t = theDialog.nameReplaceT.text;
                            numNum = ((n * repl) + sear);
                            newName = (h + numNum.toString() + t);
                     //now we check for pre-cs4 app version and we error if name too long:
                    if ((parseFloat(app.version) < 9.0)) {
                            if (newName.length > 25) {
                                inputError = true ;
                                // this generates 'error', at beginning of loop,
                                // which is largest number (highest number)
                                alert('Error: Name too long.');
                            }
                     }
                            sear="";
                            repl="";
                        }
                    }
                    
                    //////////////////////
                    if (! inputError) { item.name = newName;
                        
                    } else {
                        theDialog.progLbl.text = '(ERROR)';
                    }
                    //////////////////////
                }
            }
            if (! inputError) {theDialog.progLbl.text = '';}
            app.endUndoGroup();
            
        }
    }
    
}


