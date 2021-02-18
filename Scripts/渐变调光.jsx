function RampLight(thisObj){
var hueBin="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u00C8\x00\x00\x00\x14\b\x02\x00\x00\x00G\u00C6\u00E5\u009D\x00\x00\x00\tpHYs\x00\x00\x00\x01\x00\x00\x00\x01\x018\"\u00F4@\x00\x00\x00$zTXtCreator\x00\x00x\u009CsL\u00C9OJUpL+I-RpMKKM.)\x06\x00Az\x06\u00CE\u00E7\u00CDsf\x00\x00\x00\u0094IDATh\u0081\u00ED\u00D2\u00B1\x0E\u0082@\x10\x06\u00E1_Q\x0B\u00E4\u00FD\u009F\u00F4l rVW\x01J\u0090\u00E9\u00E6\u00CB\x15\x1B\u00B2\u00C5\u0086\u00CC\u00A5&\u00B9'C\u00F2hou>\u00B6\u00D0\u0086\u00F7-%\x19\u00DB+\u008Bak\u00DE\u00B90%cR\u00D3\u00FFw\u00EE\u00AF\u0085\u00F9y\u00CE\u00B9_\u00E6W\u00BA\u00F9\u00F0o\u00DE\u00BFPO:}\u00F5\u00E3\u0094\u0094k$\u0080a\taXB\x18\u0096\x10\u0086%\u0084a\taXB\x18\u0096\x10\u0086%\u0084a\taXB\x18\u0096\x10\u0086%\u0084a\taXB\x18\u0096\x10\u0086%\u0084a\taXB|\x00\"\u0087h07\x15\u00F2\u00EA\x00\x00\x00\x00IEND\u00AEB`\u0082";
var thisFolder=new Folder(Folder.userData.fullName+"/RampLight");
thisFolder.create();
var hueImage=new File(thisFolder.fullName+"/hue.png");
hueImage.encoding="BINARY";
hueImage.open("w");
hueImage.write(hueBin);
hueImage.close();
function buideUI(obj){
    var myPanel=(obj instanceof Panel)? obj : new Window("palette","RampLight", [0,0,220,140]);
    with(myPanel){
	myPanel.image_hue = add( "image", [10,5,210,25],hueImage);
	myPanel.slider_hue = add( "slider", [0,25,222,45],200,0,360);
	myPanel.but_zs = add( "button", [10,45,40,75], '↘' );
	myPanel.but_s = add( "button", [40,45,70,75], '↓' );
	myPanel.but_ys = add( "button", [70,45,100,75], '↙' );
	myPanel.but_z = add( "button", [10,75,40,105], '→' );
	myPanel.but_m = add( "button", [40,75,70,105], '+' );
	myPanel.but_y = add( "button", [70,75,100,105], '←' );
	myPanel.but_zx = add( "button", [10,105,40,135], '↗' );
	myPanel.but_x = add( "button", [40,105,70,135], '↑' );
	myPanel.but_yx = add( "button", [70,105,100,135], '↖' );
	}
    return myPanel;
}
var win=buideUI(thisObj);
if(win instanceof Window){
    win.center();
    win.show();
}
//
var thisComp,sl,cw,ch,pix,dur;
function selComp(){
    thisComp=app.project.activeItem;
    if(!(thisComp instanceof CompItem)){
        alert("没有选中合成");
        return false;
    }else{
        cw=thisComp.width;
        ch=thisComp.height;
        pix=thisComp.pixelAspect;
        dur=thisComp.duration;
        return true;
    }
}
function selLayer(){
    thisComp=app.project.activeItem;
    if(!(thisComp instanceof CompItem)){
        //alert("没有选中合成");
        return false;
    }else if(thisComp.selectedLayers.length<1){
        //alert("没有选中层");
        return false;
    }else{
        sl=thisComp.selectedLayers;
        return true;
    }
}
//
function thisCount(){
    var count=1;
    for(var i=1;i<=thisComp.numLayers;i++){
        if(thisComp.layer(i).name.substr(0,9)=="RampLight"){
            count++;
        }
    }
    return count;
}
//
function addLight(startPoint,endPoint){
    app.beginUndoGroup("RampLight");
    var tempLayer=0;
    if(selLayer()==true){
        tempLayer=sl[0];
    }
    var tSolid=thisComp.layers.addSolid([0,0,0],"RampLight"+thisCount(),cw,ch,pix,dur);
    if(tempLayer != 0){
        tSolid.moveBefore(tempLayer);
        tSolid.inPoint=tempLayer.inPoint;
        tSolid.outPoint=tempLayer.outPoint;
    }
    var tRamp=tSolid.effect.addProperty('ADBE Ramp');
    tRamp(1).setValue(startPoint);
    tRamp(3).setValue(endPoint);
    tRamp(4).setValue([0,0,0,1]);
    tRamp(2).expression="hslToRgb(["+win.slider_hue.value/360+",1,0.5,1]);";
    tRamp(2).setValue(tRamp(2).value);
    tRamp(2).expression="";
    tRamp(5).setValue(2);
    var tExtract=tSolid.effect.addProperty('ADBE Extract');
    tExtract(3).setValue(128);
    tExtract(5).expression="thisProperty.propertyGroup(1)(3);";
    tSolid.blendingMode=BlendingMode.SCREEN;
    tSolid.effect(1).selected=true;
    app.endUndoGroup();
}
//
win.but_zs.onClick=function (){
    if(selComp()==true){
         addLight([0,0],[cw,ch]);
    }
}
win.but_s.onClick=function (){
    if(selComp()==true){
         addLight([cw/2,0],[cw/2,ch]);
    }
}
win.but_ys.onClick=function (){
    if(selComp()==true){
         addLight([cw,0],[0,ch]);
    }
}
win.but_z.onClick=function (){
    if(selComp()==true){
         addLight([0,ch/2],[cw,ch/2]);
    }
}
win.but_m.onClick=function (){
    if(selComp()==true){
         addLight([cw/2,ch/2],[cw,ch]);
    }
}
win.but_y.onClick=function (){
    if(selComp()==true){
         addLight([cw,ch/2],[0,ch/2]);
    }
}
win.but_zx.onClick=function (){
    if(selComp()==true){
         addLight([0,ch],[cw,0]);
    }
}
win.but_x.onClick=function (){
    if(selComp()==true){
         addLight([cw/2,ch],[cw/2,0]);
    }
}
win.but_yx.onClick=function (){
    if(selComp()==true){
         addLight([cw,ch],[0,0]);
    }
}
}
RampLight(this);












