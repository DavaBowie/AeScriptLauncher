/** 
 @
*/
function DistributeLayers()
{
    eval(unescape('%20//%20Variable%20used%20to%20keep%20track%20of%20%27this%27%20reference%0D%0A%20%20%20%20var%20distributeLayers%20%3D%20this%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20//%20Create%20an%20instance%20of%20the%20utils%20class%20to%20use%20its%20functions%0D%0A%20%20%20%20var%20utils%20%3D%20new%20DistributeLayersUtils%28%29%3B%0D%0A%0D%0A%20%20%20%20//%20Script%20infos%0D%0A%20%20%20%20this.scriptMinSupportVersion%20%3D%20%229.0%22%3B%0D%0A%20%20%20%20this.scriptName%20%3D%20%22%u9635%u5217%u5206%u914D%u5C42.jsx%22%3B%20%20%20%20%0D%0A%20%20%20%20this.scriptVersion%20%3D%20%222.0%22%3B%0D%0A%20%20%20%20this.scriptTitle%20%3D%20%22%u9635%u5217%u5206%u914D%u5C42%u811A%u672C%22%3B%0D%0A%20%20%20%20this.scriptCopyright%20%3D%20%22%u5C55%u7FC5%u9E70%u6C49%u5316%20%20%u611F%u8C22%u539F%u7248%u4F5C%u8005%20Charles%20Bordenave%20%22%3B%0D%0A%20%20%20%20this.scriptHomepage%20%3D%20%22%u535A%u5BA2%u5730%u5740%20http%3A//blog.sina.com.cn/ykcmgzs%22%3B%0D%0A%20%20%20%20this.scriptDescription%20%3D%20%7Ben%3A%20%22%u8FD9%u4E2A%u811A%u672C%u5141%u8BB8%u4F60%u5BF9%u9009%u62E9%u7684%u5C42%u8FDB%u884C%u4E09%u7EF4%u7A7A%u95F4%u7684%u5206%u5E03.%5C%5Cr%5C%5Cr%u9664%u4E86%u53EF%u4EE5%u5BF9%u4F4D%u7F6E%u8FDB%u884C%u504F%u79FB%u8BBE%u7F6E%u4E4B%u5916%2C%u4F60%u8FD8%u53EF%u4EE5%u5BF9%u6240%u9009%u5C42%u7684%u65CB%u8F6C%u3001%u7F29%u653E%u3001%u4E0D%u900F%u660E%u5EA6%20%u8FDB%u884C%u8BBE%u7F6E%20%u540C%u65F6%u8FD8%u53EF%u4EE5%u6DFB%u52A0%u968F%u673A%u503C.%5C%5Cr%5C%5Cr%20%20%u6539%u53D8%5C%22%u56E0%u6570%5C%22%u7684%u5927%u5C0F%u53EF%u4EE5%u4F7F%u9009%u62E9%u7684%u5C42%u4EE5%u975E%u7EBF%u6027%u8FDB%u884C%u504F%u79FB%20.%22%2C%20fr%3A%22Ce%20script%20permet%20de%20distribuer%20les%20calques%20dans%20l%5C%5C%27espace%203D.%5C%5Cr%5C%5CrEn%20plus%20de%20pouvoir%20d%E9caler%20la%20position%2C%20vous%20pouvez%20d%E9caler%20la%20rotation/l%5C%5C%27%E9chelle/l%5C%5C%27opacit%E9%20et%20ajouter%20de%20l%5C%5C%27al%E9atoire.%5C%5Cr%5C%5CrLe%20param%E8tre%20%5C%22%20Facteur%5C%22%20permet%20d%5C%5C%27obtenir%20un%20d%E9calage%20non-lin%E9aire%20entre%20les%20calques.%22%7D%3B%0D%0A%20%20%20%20this.scriptAbout%20%3D%20%7Ben%3Athis.scriptName%20+%20%22%2C%20v%22%20+%20this.scriptVersion%20+%20%22%5C%5Cr%5C%5Cr%22%20+%20this.scriptCopyright%20+%20%22%5C%5Cr%22%20+%20this.scriptHomepage%20+%20%22%5C%5Cr%5C%5Cr%22%20+%20utils.loc%28this.scriptDescription%29%2C%20fr%3Athis.scriptName%20+%20%22%2C%20v%22%20+%20this.scriptVersion%20+%20%22%5C%5Cr%5C%5Cr%22%20+%20this.scriptCopyright%20+%20%22%5C%5Cr%22%20+%20this.scriptHomepage%20+%20%22%5C%5Cr%5C%5Cr%22%20+%20utils.loc%28this.scriptDescription%29%7D%3B%20%20%20%20%20%20%20%20%0D%0A%0D%0A%20%20%20%20//%20Errors%0D%0A%20%20%20%20this.requirementErr%20%3D%20%7Ben%3A%22This%20script%20requires%20After%20Effects%20CS4%20or%20later.%22%2C%20fr%3A%22Ce%20script%20n%E9cessite%20After%20Effects%20CS4%20ou%20sup%E9rieur.%22%7D%3B%20%20%20%20%0D%0A%20%20%20%20this.noCompErr%20%3D%20%7Ben%3A%22A%20comp%20must%20be%20active.%22%2C%20fr%3A%22Une%20composition%20doit%20%EAtre%20active.%22%7D%3B%0D%0A%20%20%20%20this.noLayersErr%20%3D%20%7Ben%3A%22Select%20at%20least%20two%20layers.%22%2C%20fr%3A%22S%E9lectionnez%20au%20moins%20deux%20calques.%22%7D%3B%0D%0A%20%20%20%20this.duringProcessErr%20%3D%20%7Ben%3A%22An%20error%20occurred%20while%20accessing%20transform%20properties%20of%20selected%20layers.%22%2C%20fr%3A%22Une%20erreur%20s%27est%20produite%20lors%20de%20l%27acc%E8s%20aux%20propri%E9t%E9s%20de%20transformation%20des%20calques%20s%E9lectionn%E9s.%22%7D%3B%0D%0A%0D%0A%20%20%20%20//%20UI%20strings%20%0D%0A%20%20%20%20this.aboutBtnName%20%3D%20%22%3F%22%3B%0D%0A%20%20%20%20this.runBtnName%20%3D%20%7Ben%3A%22Run%22%2C%20fr%3A%22%C9x%E9cuter%22%7D%3B%0D%0A%20'))
    //this.sclWidth =     
    /**
     Creates and displays the script interface
     @param {Object} thisObj A Panel object if the script is launched from the Window menu, null otherwise    
    */
    this.buildUI = function (thisObj)
    {
        // dockable panel or palette
        var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", this.scriptTitle, undefined, {resizeable:true});

        // resource specifications
        var res =
        "group { orientation:'column', alignment:['fill','top'], alignChildren:['right','top'], \
            gr1: Group { alignment:['fill','fill'], \
                aboutBtn: Button { text:'关于', preferredSize:[45,20], alignment:['right','center'] } \
            }, \
            pnl: Panel { type:'tabbedpanel', alignment:['fill','fill'], \
                pnl1: Panel { type:'tab', text:'位置', orientation:'row', alignment:['fill','fill'], alignChildren:['right','top'], \
                    gr1: Group { orientation:'column', alignment:['left','top'], alignChildren:['right','center'], \
                           xOffsetSt: StaticText { text:'X 偏移:', preferredSize:[-1,18] }, \
                        yOffsetSt: StaticText { text:'Y 偏移:', preferredSize:[-1,18] }, \
                        zOffsetSt: StaticText { text:'Z 偏移:' } \
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
                            sliderRangeBtn: Button { text:'滑块范围' } \
                        } \
                    } \
                }, \
                pnl2: Panel { type:'tab', text:'旋转', orientation:'row', alignment:['fill','fill'], alignChildren:['right','top'], \
                    gr1: Group { orientation:'column', alignment:['left','top'], alignChildren:['right','top'], \
                           xRotationSt: StaticText { text:'X 旋转:', preferredSize:[-1,18] }, \
                        yRotationSt: StaticText { text:'Y 旋转:', preferredSize:[-1,18] }, \
                        zRotationSt: StaticText { text:'Z 选择:' } \
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
                            sliderRangeBtn: Button { text:'滑块范围' } \
                        } \
                    } \
                }, \
                pnl3: Panel { type:'tab', text:'缩放', orientation:'row', alignment:['fill','fill'], alignChildren:['right','top'], \
                    gr1: Group { orientation:'column', alignment:['left','top'], alignChildren:['right','top'], \
                           xScaleSt: StaticText { text:'X 缩放偏移:', preferredSize:[-1,18] }, \
                           yScaleSt: StaticText { text:'Y 缩放偏移:', preferredSize:[-1,18] }, \
                        opacitySt: StaticText { text:'透明偏移:', preferredSize:[-1,18] }, \
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
                            opacityScl: Scrollbar { alignment:['fill','center'] }, \
                            opacityEt: EditText { text:'0', characters:5, alignment:['right','center'] } \
                        }, \
                        gr24: Group { alignment:'fill', alignChildren:['left','top'], \
                            sliderRangeBtn: Button { text:'滑块范围' } \
                        } \
                    } \
                }, \
                pnl4: Panel { type:'tab', text:'随机位置', orientation:'row', alignment:['fill','fill'], alignChildren:['right','top'], \
                    gr1: Group { orientation:'column', alignment:['left','top'], alignChildren:['right','top'], \
                           xRandomSt: StaticText { text:'X 随机:', preferredSize:[-1,18] }, \
                        yRandomSt: StaticText { text:'Y 随机:', preferredSize:[-1,18] }, \
                        zRandomSt: StaticText { text:'Z 随机:' } \
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
                            sliderRangeBtn: Button { text:'滑块范围' } \
                        } \
                    } \
                }, \
                pnl5: Panel { type:'tab', text:'随机旋转', orientation:'row', alignment:['fill','fill'], alignChildren:['right','top'], \
                    gr1: Group { orientation:'column', alignment:['left','top'], alignChildren:['right','top'], \
                           xRandomSt: StaticText { text:'X 随机:', preferredSize:[-1,18] }, \
                        yRandomSt: StaticText { text:'Y 随机:', preferredSize:[-1,18] }, \
                        zRandomSt: StaticText { text:'Z 随机:' } \
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
                            sliderRangeBtn: Button { text:'滑块范围' } \
                        } \
                    } \
                }, \
                pnl6: Panel { type:'tab', text:'因数', orientation:'row', alignment:['fill','fill'], alignChildren:['right','top'], \
                    gr1: Group { orientation:'column', alignment:['left','top'], alignChildren:['right','center'], \
                           factorSt: StaticText { text:'因数:', preferredSize:[-1,20] }, \
                        fooSt: StaticText { visible:false, text:'偏移:', preferredSize:[-1,20] }, \
                        fooSt: StaticText { visible:false, text:'Z 随机:' } \
                    }, \
                    gr2: Group { orientation:'column', alignment:['fill','top'], \
                        gr21: Group { orientation:'row', alignment:['fill','top'], \
                            factorScl: Scrollbar { minvalue:0.75, maxvalue:1.5, value:1.0, stepdelta:0.01, jumpdelta:0.2, alignment:['fill','center'] }, \
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
                            sliderRangeBtn: Button { text:'滑块范围' } \
                        } \
                    } \
                } \
            } \
        }"; 
        pal.gr = pal.add(res);
                
        pal.gr.pnl.pnl1.gr2.gr21.xOffsetEt.graphics.foregroundColor = 
        pal.gr.pnl.pnl1.gr2.gr22.yOffsetEt.graphics.foregroundColor = 
        pal.gr.pnl.pnl1.gr2.gr23.zOffsetEt.graphics.foregroundColor = 
        pal.gr.pnl.pnl2.gr2.gr21.xRotationEt.graphics.foregroundColor = 
        pal.gr.pnl.pnl2.gr2.gr22.yRotationEt.graphics.foregroundColor = 
        pal.gr.pnl.pnl2.gr2.gr23.zRotationEt.graphics.foregroundColor = 
        pal.gr.pnl.pnl3.gr2.gr21.xScaleEt.graphics.foregroundColor = 
        pal.gr.pnl.pnl3.gr2.gr22.yScaleEt.graphics.foregroundColor = 
        pal.gr.pnl.pnl3.gr2.gr23.opacityEt.graphics.foregroundColor = 
        pal.gr.pnl.pnl4.gr2.gr21.xRandomEt.graphics.foregroundColor = 
        pal.gr.pnl.pnl4.gr2.gr22.yRandomEt.graphics.foregroundColor = 
        pal.gr.pnl.pnl4.gr2.gr23.zRandomEt.graphics.foregroundColor = 
        pal.gr.pnl.pnl5.gr2.gr21.xRandomEt.graphics.foregroundColor = 
        pal.gr.pnl.pnl5.gr2.gr22.yRandomEt.graphics.foregroundColor = 
        pal.gr.pnl.pnl5.gr2.gr23.zRandomEt.graphics.foregroundColor = 
        pal.gr.pnl.pnl6.gr2.gr21.factorEt.graphics.foregroundColor = pal.graphics.newPen(pal.graphics.BrushType.SOLID_COLOR, [0,0,0], 1);

        pal.layout.layout(true);
        pal.gr.minimumSize = pal.gr.size;
        
        // event callbacks
        pal.onResizing = pal.onResize = function () 
        {
            this.layout.resize();
        };
                
        pal.gr.gr1.aboutBtn.onClick = function () 
        { 
            utils.createAboutDlg(distributeLayers.scriptAbout); 
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
            var minVal = parseInt(prompt("最小值:", pal.gr.pnl.pnl1.gr2.gr21.xOffsetScl.minvalue, "滑块范围"));
            var maxVal = parseInt(prompt("最大值:", pal.gr.pnl.pnl1.gr2.gr21.xOffsetScl.maxvalue, "滑块范围"));
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
            var minVal = parseInt(prompt("最小值:", pal.gr.pnl.pnl2.gr2.gr21.xRotationScl.minvalue, "滑块范围"));
            var maxVal = parseInt(prompt("最大值:", pal.gr.pnl.pnl2.gr2.gr21.xRotationScl.maxvalue, "滑块范围"));
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
            this.parent.opacityScl.value = parseInt(this.text);
            distributeLayers.offsetOpacity(pal);            
        };        

        pal.gr.pnl.pnl3.gr2.gr24.sliderRangeBtn.onClick = function () 
        {
            var minVal = parseInt(prompt("最小值:", pal.gr.pnl.pnl2.gr2.gr21.xScaleScl.minvalue, "滑块范围"));
            var maxVal = parseInt(prompt("最大值:", pal.gr.pnl.pnl2.gr2.gr21.xScaleScl.maxvalue, "滑块范围"));
            if (isNaN(minVal)) minVal = pal.gr.pnl.pnl2.gr2.gr21.xScaleScl.minvalue;
            if (isNaN(maxVal)) maxVal = pal.gr.pnl.pnl2.gr2.gr21.xScaleScl.maxvalue;            
            
            pal.gr.pnl.pnl3.gr2.gr21.xScaleScl.minvalue = 
            pal.gr.pnl.pnl3.gr2.gr22.yScaleScl.minvalue =             
            pal.gr.pnl.pnl3.gr2.gr23.opacityScl.minvalue = minVal;
            
            pal.gr.pnl.pnl3.gr2.gr21.xScaleScl.maxvalue =
            pal.gr.pnl.pnl3.gr2.gr22.yScaleScl.maxvalue =             
            pal.gr.pnl.pnl3.gr2.gr23.opacityScl.maxvalue = maxVal;
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
            var minVal = parseInt(prompt("最小值:", pal.gr.pnl.pnl4.gr2.gr21.xRandomScl.minvalue, "滑块范围"));
            var maxVal = parseInt(prompt("最大值:", pal.gr.pnl.pnl4.gr2.gr21.xRandomScl.maxvalue, "滑块范围"));
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
            var minVal = parseInt(prompt("最小值:", pal.gr.pnl.pnl5.gr2.gr21.xRandomScl.minvalue, "滑块范围"));
            var maxVal = parseInt(prompt("最大值:", pal.gr.pnl.pnl5.gr2.gr21.xRandomScl.maxvalue, "滑块范围"));
            if (isNaN(minVal)) minVal = pal.gr.pnl.pnl5.gr2.gr21.xRandomScl.minvalue;
            if (isNaN(maxVal)) maxVal = pal.gr.pnl.pnl5.gr2.gr21.xRandomScl.maxvalue;
                        
            pal.gr.pnl.pnl5.gr2.gr21.xRandomScl.minvalue = 
            pal.gr.pnl.pnl5.gr2.gr22.yRandomScl.minvalue = 
            pal.gr.pnl.pnl5.gr2.gr23.zRandomScl.minvalue = minVal;
            
            pal.gr.pnl.pnl5.gr2.gr21.xRandomScl.maxvalue = 
            pal.gr.pnl.pnl5.gr2.gr22.yRandomScl.maxvalue = 
            pal.gr.pnl.pnl5.gr2.gr23.zRandomScl.maxvalue = maxVal;
        };
                        
        pal.gr.pnl.pnl6.gr2.gr21.factorScl.onChange = pal.gr.pnl.pnl6.gr2.gr21.factorScl.onChanging = function () 
        {
            this.value = this.value.toFixed(2);            
            this.parent.factorEt.text = this.value;
            distributeLayers.offsetPosition(pal);
            distributeLayers.offsetRotation(pal, "x");
            distributeLayers.offsetRotation(pal, "y");
            distributeLayers.offsetRotation(pal, "z");
            distributeLayers.offsetScale(pal);
            distributeLayers.offsetOpacity(pal); 
        };        

        pal.gr.pnl.pnl6.gr2.gr21.factorEt.onChange = function () 
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

        pal.gr.pnl.pnl6.gr2.gr24.sliderRangeBtn.onClick = function () 
        {
            var minVal = parseInt(prompt("最小值:", pal.gr.pnl.pnl6.gr2.gr21.factorScl.minvalue, "滑块范围"));
            var maxVal = parseInt(prompt("最大值:", pal.gr.pnl.pnl6.gr2.gr21.factorScl.maxvalue, "滑块范围"));
            if (isNaN(minVal)) minVal = pal.gr.pnl.pnl6.gr2.gr21.factorScl.minvalue;
            if (isNaN(maxVal)) maxVal = pal.gr.pnl.pnl6.gr2.gr21.factorScl.maxvalue;
                        
            pal.gr.pnl.pnl6.gr2.gr21.factorScl.minvalue = minVal;            
            pal.gr.pnl.pnl6.gr2.gr21.factorScl.maxvalue = maxVal;
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

    /**
     Determines whether the active item is a composition  
     @return True if the active item is not a composition, False otherwise
    */    
    this.checkActiveItem = function () 
    {
        var err = false;
        var comp = app.project.activeItem;
        if (!comp || !(comp instanceof CompItem))
        {
            err = true;
        }
        return err;
    }; 
    
    /**
     Offsets the position of selected layers along x/y/z axis 
     @param {Object} pal A palette or a dockable panel containing all user parameters         
    */    
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
            var factor = parseFloat(pal.gr.pnl.pnl6.gr2.gr21.factorEt.text);
            
            var prevOffset = [xOffset, yOffset, zOffset];
            
            app.beginUndoGroup(this.scriptTitle);
             
             var err = this.duringProcessErr;             
             try
             {
                 selLayers[0].threeDLayer = true;
                 
                 for (var i = 1; i < selLayers.length; i++)
                 {
                     selLayers[i].threeDLayer = true;
                                     
                    var prevP = selLayers[i-1].position;
                    var curP = selLayers[i].position;
                    
                    var curOffset = factor * prevOffset;                
                    var newP = prevP.valueAtTime(comp.time, false) + curOffset;                            
                    
                    curP.numKeys ? curP.setValueAtTime(comp.time, newP) : curP.setValue(newP);
                    
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

    /**
     Offsets the x/y/z rotation of selected layers 
     @param {Object} pal A palette or a dockable panel containing all user parameters
     @param {String} axis A character that indicates the rotation axis ("x", "y" or "z")
    */    
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

            var factor = parseFloat(pal.gr.pnl.pnl6.gr2.gr21.factorEt.text);
            
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

    /**
     Offsets the scale of selected layers 
     @param {Object} pal A palette or a dockable panel containing all user parameters
    */    
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
            var factor = parseFloat(pal.gr.pnl.pnl6.gr2.gr21.factorEt.text);
            
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
    
    /**
     Offsets the opacity of selected layers 
     @param {Object} pal A palette or a dockable panel containing all user parameters
    */    
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
            var factor = parseFloat(pal.gr.pnl.pnl6.gr2.gr21.factorEt.text);
            
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
    
    /**
     Randomly offsets the position of selected layers 
     @param {Object} pal A palette or a dockable panel containing all user parameters
    */    
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
                    var curP = selLayers[i].position;
                    var offset = [-xRandom + 2*xRandom*Math.random(), -yRandom + 2*yRandom*Math.random(), -zRandom + 2*zRandom*Math.random()];
                    var newP = curP.valueAtTime(comp.time, false) + offset;                            
                    
                    curP.numKeys ? curP.setValueAtTime(comp.time, newP) : curP.setValue(newP);
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

    /**
     Randomly offsets the x/y/z rotation of selected layers 
     @param {Object} pal A palette or a dockable panel containing all user parameters
     @param {String} axis A character that indicates the rotation axis ("x", "y" or "z")
    */    
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
            
    /**
     Runs the script  
     @param {Object} thisObj A Panel object if the script is launched from the Window menu, null otherwise
    */
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


/**
 This class provides some utility functions used by DistributeLayers
 @class Some utility functions grouped in a class
*/
function DistributeLayersUtils()
{
    /**
     String localization function: english and french languages are supported
     @param {Object} str A localization object containing the localized versions of a string    
     @return Appropriate localized version of str
    */    
    this.loc = function (str)
    {
        return app.language == Language.FRENCH ? str.fr : str.en;
    };

    /**
     Displays a window containg a localized error message
     @param {Object} err A localization object containing the localized versions of an error message
    */    
    this.throwErr = function (err)
    {
        var wndTitle = $.fileName.substring($.fileName.lastIndexOf("/")+1, $.fileName.lastIndexOf("."));
        Window.alert("Script error:\r" + this.loc(err), wndTitle, true);
    };            

    /**
     Displays a customized window containg the About text
     @param {String} aboutStr The text to display
    */
    this.createAboutDlg = function (aboutStr)
    {        
        eval(unescape('%20%20%20%20%20%20%20%20/**%20%0D%0A%20%20%20%20%20%20%20%20%20Draw%20some%20random%20rectangles%20%28position%2C%20size%2C%20color%2C%20alpha%29%20on%20the%20window%20background%0D%0A%20%20%20%20%20%20%20%20%20@ignore%20%0D%0A%20%20%20%20%20%20%20%20*/%0D%0A%20%20%20%20%20%20%20%20function%20addNabscriptsBackgroundSignature%28wnd%29%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20numRect%20%3D%2024%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20minOpacity%20%3D%200.05%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20maxOpacity%20%3D%200.15%3B%0D%0A%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20leftEdge%20%3D%200%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20topEdge%20%3D%200%3B%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20rightEdge%20%3D%20wnd.windowBounds.width%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20bottomEdge%20%3D%20wnd.windowBounds.height%3B%0D%0A%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20for%20%28var%20i%20%3D%200%20%3B%20i%20%3C%20numRect%3B%20i++%29%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20xLoc%20%3D%2010%20+%20%28rightEdge%20-%2020%29%20*%20Math.random%28%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20yLoc%20%3D%2010%20+%20%28bottomEdge%20-%2020%29%20*%20Math.random%28%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20width%20%3D%205%20+%2015%20*%20Math.random%28%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20height%20%3D%205%20+%2015%20*%20Math.random%28%29%3B%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20borderWidth%20%3D%201%20+%204%20*%20Math.random%28%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20borderColor%20%3D%20%5BMath.random%28%29%2C%20Math.random%28%29%2C%20Math.random%28%29%2C%20minOpacity%20+%20%28maxOpacity%20-%20minOpacity%29%20*%20Math.random%28%29%5D%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20colorBrush%20%3D%20wnd.graphics.newBrush%28wnd.graphics.BrushType.SOLID_COLOR%2C%20borderColor%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wnd.g1%20%3D%20wnd.add%28%22group%22%2C%20%5BxLoc%2C%20yLoc%2C%20xLoc%20+%20width%2C%20yLoc%20+%20borderWidth%5D%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wnd.g2%20%3D%20wnd.add%28%22group%22%2C%20%5BxLoc%2C%20yLoc%20+%20height%20-%20borderWidth%2C%20xLoc%20+%20width%2C%20yLoc%20+%20height%5D%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wnd.g3%20%3D%20wnd.add%28%22group%22%2C%20%5BxLoc%2C%20yLoc%20+%20borderWidth%2C%20xLoc%20+%20borderWidth%2C%20yLoc%20+%20height%20-%20borderWidth%5D%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wnd.g4%20%3D%20wnd.add%28%22group%22%2C%20%5BxLoc%20+%20width%20-%20borderWidth%2C%20yLoc%20+%20borderWidth%2C%20xLoc%20+%20width%2C%20yLoc%20+%20height%20-%20borderWidth%5D%29%3B%0D%0A%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wnd.g1.graphics.backgroundColor%20%3D%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wnd.g2.graphics.backgroundColor%20%3D%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wnd.g3.graphics.backgroundColor%20%3D%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wnd.g4.graphics.backgroundColor%20%3D%20colorBrush%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20var%20dlg%20%3D%20new%20Window%28%22dialog%22%2C%20%22%u5173%u4E8E%22%29%3B%0D%0A%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20//%20panel%20borderStyle%3A%20one%20of%20black%2C%20etched%2C%20gray%2C%20raised%2C%20sunken.%20Default%20is%20etched.%0D%0A%20%20%20%20%20%20%20%20//%20resource%20specifications%0D%0A%20%20%20%20%20%20%20%20var%20res%20%3D%0D%0A%20%20%20%20%20%20%20%20%22group%20%7B%20orientation%3A%27column%27%2C%20alignment%3A%5B%27fill%27%2C%27fill%27%5D%2C%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20aboutPnl%3A%20Panel%20%7B%20properties%3A%7B%20borderStyle%3A%27sunken%27%20%7D%2C%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aboutEt%3A%20EditText%20%7B%20text%3A%27%22%20+%20this.loc%28aboutStr%29%20+%20%22%27%2C%20properties%3A%7Bmultiline%3Atrue%7D%2C%20preferredSize%3A%5B280%2C150%5D%2C%20alignment%3A%5B%27right%27%2C%27center%27%5D%20%7D%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20btnsGr%3A%20Group%20%7B%20alignment%3A%5B%27fill%27%2C%27fill%27%5D%2C%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20visitBtn%3A%20Button%20%7B%20text%3A%27%u6211%u7684%u535A%u5BA2%27%2C%20alignment%3A%5B%27left%27%2C%27center%27%5D%20%7D%2C%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20okBtn%3A%20Button%20%7B%20text%3A%27Ok%27%2C%20alignment%3A%5B%27right%27%2C%27center%27%5D%20%7D%20%5C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20%5C%0D%0A%20%20%20%20%20%20%20%20%7D%22%3B%20%0D%0A%20%20%20%20%20%20%20%20dlg.gr%20%3D%20dlg.add%28res%29%3B%0D%0A%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20//%20on%20Mac%20we%20can%20disable%20edit%20text%20while%20allowing%20scrolling%2C%20on%20Windows%20we%20can%27t%0D%0A%20%20%20%20%20%20%20%20dlg.gr.aboutPnl.aboutEt.enabled%20%3D%20%28%24.os.indexOf%28%22Win%22%29%20%21%3D%20-1%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20//%20draw%20random%20background%20color%20%28grayscale%29%0D%0A%20%20%20%20%20%20%20%20if%20%28parseFloat%28app.version%29%20%3E%3D%209.0%29%20//%20CS4%20or%20later%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20whiteBrush%20%3D%20dlg.graphics.newBrush%28dlg.graphics.BrushType.SOLID_COLOR%2C%20%5B1%2C%201%2C%201%2C%201%5D%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20rand%20%3D%20Math.random%28%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20bgBrush%20%3D%20dlg.graphics.newBrush%28dlg.graphics.BrushType.SOLID_COLOR%2C%20%5Brand%2C%20rand%2C%20rand%2C%201%5D%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20dlg.graphics.backgroundColor%20%3D%20bgBrush%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20dlg.gr.aboutPnl.graphics.backgroundColor%20%3D%20whiteBrush%3B%0D%0A%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20dlg.layout.layout%28true%29%3B%20//%20to%20get%20window%20bounds%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20addNabscriptsBackgroundSignature%28dlg%29%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20dlg.gr.btnsGr.okBtn.onClick%20%3D%20function%20%28%29%20%7B%20dlg.close%28%29%3B%20%7D%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20//%20open%20homepage%20url%0D%0A%20%20%20%20%20%20%20%20dlg.gr.btnsGr.visitBtn.onClick%20%3D%20function%20%28%29%20%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20cmd%20%3D%20%22%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20url%20%3D%20%22http%3A//blog.sina.com.cn/ykcmgzs/%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28%24.os.indexOf%28%22Win%22%29%20%21%3D%20-1%29%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28File%28%22C%3A/Program%20Files/Mozilla%20Firefox/firefox.exe%22%29.exists%29%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%09%09%09%09%09cmd%20+%3D%20%22C%3A/Program%20Files/Mozilla%20Firefox/firefox.exe%20%22%20+%20url%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20else%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09cmd%20+%3D%20%22C%3A/Program%20Files/Internet%20Explorer/iexplore.exe%20%22%20+%20url%3B%0D%0A%09%09%09%09%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20else%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%09cmd%20+%3D%20%22open%20%5C%22%22%20+%20url%20+%20%22%5C%22%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20try%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%09%09%09%09system.callSystem%28cmd%29%3B%0D%0A%09%09%09%7D%0D%0A%09%09%09catch%28e%29%0D%0A%09%09%09%7B%0D%0A%09%09%09%09alert%28e%29%3B%0D%0A%09%09%09%7D%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20dlg.center%28%29%3B%0D%0A%20%20%20%20%20%20%20%20dlg.show%28%29%3B'));
    };
}


/**
 Creates an instance of the main class and run it
*/
new DistributeLayers().run(this);
