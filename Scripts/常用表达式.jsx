{
//这个脚本是我边学习AE边写的 纯属娱乐
//脚本中的效果都是刚刚学习的，比较简单的效果，不知道对别人有没有用处
//脚本中用的插件有中文也有英文的，估计要是不和我一样，应该看不到效果，呵呵
//问题：不知道怎么开启图层样式，哪位兄弟之知道请联系我吧！这里先说生谢谢了
//因为一些效果插件是用绝对参数写的，各个版本不同，所以有可能会达不到效果。
//我用的AE是CS4绿色版，不知道本脚本在其他AE版本中效果。
//我的邮箱：badmon@163.com
//                                                                                    by   满墙乱画
//最后说一句，学习AE脚本只是为了好玩，有志同道合的朋友也可以联系我啊，一起学习，一起进步。


	function myroot(thisObj)
	{
		var scriptName = "常用表达式 by 满墙乱画";

		function onliuguang()
		{
var rootcom=app.project.activeItem;
var myavi=rootcom.selectedLayers[0];
e1=myavi.effect.addProperty("ADBE Slider Control");
e1.name="振幅系数";
e1(1).setValue(0.1);
e2=myavi.effect.addProperty("ADBE Slider Control");
e2.name="频率系数";
e2(1).setValue(2);
e3=myavi.effect.addProperty("ADBE Slider Control");
e3.name="阻力系数";
e3(1).setValue(2);
e4=myavi.effect.addProperty("ADBE Checkbox Control");
e4.name="单向弹动";
e4(1).setValue(0);
myavi.position.expression=
"""amp = effect("振幅系数")(1);
freq = effect("频率系数")(1);
decay = effect("阻力系数")(1);
flag=effect("单向弹动")(1)
n = 0;
if (numKeys > 0){
n = nearestKey(time).index;
if (key(n).time > time){n--;}
					}
if (n == 0){ t = 0;}else{t = time - key(n).time;}
if (n > 0){
     v = velocityAtTime(key(n).time - thisComp.frameDuration/10);
	if(flag==0){temp=Math.sin(freq*t*2*Math.PI);}
	else{temp=-Math.abs(Math.sin(freq*t*2*Math.PI))}
	value + v*amp*temp/Math.exp(decay*t);
}else{value}""";
alert("表达式添加结束！");
		}
		function onliuguangHP()
		{
			alert(
				"　　添加弹性表达式要求：\n\n" +
				"　　1、选定要添加表达式的层，点击要添加表达式名称按钮。\n\n" +
				"　　2、单向弹动是小球落地的方式的弹动。\n\n" +
				"　　3、根据个人需要调节参数控制滑块。\n\n"
,"弹性表达式 by 满墙乱画");
		}


		function onyinying()
		{
var rootcom=app.project.activeItem;
var myavi=rootcom.selectedLayers[0];
e1=myavi.effect.addProperty("ADBE Slider Control");
e1.name="放大倍数(%)";
e1(1).setValue(300)
e2=myavi.effect.addProperty("ADBE Slider Control");
e2.name="过渡帧数";
e2(1).setValue(5)

myavi.scale.expression=
"""snapScale = effect("放大倍数(%)")(1);
trans = effect("过渡帧数")(1);
n = 0;
trans = trans * thisComp.frameDuration; 
inTrans  = easeOut(time, inPoint, inPoint + trans, [snapScale,snapScale], [0,0]); 
outTrans = easeIn(time, outPoint, outPoint - trans, [0,0], [snapScale, snapScale]); 
value+ inTrans + outTrans """
		}


		function onyinyingHP()
		{
			alert(
				"　　文字飞入飞出表达式要求：\n\n" +
				"　　１、选择的必须是文字层。\n\n" +
				"　　２、根据自己需要调整滑杆。\n\n","文字飞入飞出 by 满墙乱画");
		}
	
		function onsaoguang()
		{
var rootcom=app.project.activeItem;
var myavi=rootcom.selectedLayers[0];
e1=myavi.effect.addProperty("ADBE Slider Control");
e1.name="过渡帧数";
e1(1).setValue(20);
myavi.opacity.expression=
"""transition = effect("过渡帧数")(1);
if (marker.numKeys<2){ 
tSecs = transition / ( 1 / thisComp.frameDuration); 
linear(time, inPoint, inPoint + tSecs, 0, 100) - linear(time, outPoint - tSecs, outPoint, 0, 100); 
}else{ 
linear(time, inPoint, marker.key(1).time, 0, 100) - linear(time, marker.key(2).time, outPoint, 0, 100); 
} """

		}
	
			function onsaoguangHP()
		{
			alert(
				"　　渐变过渡表达式：\n\n" +
				"　　１、选择一个任意对象图层，点击表达式添加按钮。\n\n" +
"　　２、根据自己需要调节过渡帧数滑块。\n\n","渐变过渡 by 满墙乱画");
		}
			function onlitizi()
		{
var rootcom=app.project.activeItem;
var myavi=rootcom.selectedLayers[0];
e1=myavi.effect.addProperty("ADBE Slider Control");
e1.name="晃动几率";
e1(1).setValue(8);
e2=myavi.effect.addProperty("ADBE Slider Control");
e2.name="晃动幅度";
e2(1).setValue(50);
e4=myavi.effect.addProperty("ADBE Checkbox Control");
e4.name="交换轴向";
e4(1).setValue(0);
myavi.position.expression=
"""probability = effect("晃动几率")(1);
pos = effect("晃动幅度")(1);
flag=effect("交换轴向")(1);
val  = random(-probability-2, 1);
m = clamp(val, 0, 1);
y = wiggle(10, pos*m)-position;
if(flag==0){value + [0, y[1]];}
else{value + [y[0],0];}
"""


		}
			function onlitiziHP()
		{
			alert(
				"　　随机晃动表达式：\n\n" +
				"　　１、选择要发生晃动的对象层，点击表达式添加按钮。\n\n" +
				"　　２、根据个人喜好调整滑杆，注意晃动几率的数值越大实际几率越小。\n\n"+
				"　　３、默认只在Y轴有晃动，如果勾选交换轴向，那么只在X轴有晃动。","随机晃动表达式 by 满墙乱画");
		}
		function onqitaHP()
		{
			var myact=app.project.activeItem
			var ly=myact.layer(1)
			alert( ly.width);
		}

	

		
	

		
		if (parseFloat(app.version) < 8)
		{
			alert("这个脚本只能运行在CS3以上版本", scriptName);
			return;
		}
		else
		{

			var my_palette = (thisObj instanceof Panel) ? thisObj : new Window("palette", scriptName, undefined, {resizeable:true});
			if (my_palette != null)
			{
				var res = 
				"group { \
					orientation:'column', alignment:['fill','fill'], alignChildren:['left','top'], spacing:5, margins:[0,0,0,0], \
					cmds: Group { \
						alignment:['fill','top'], \
						liuguang: Button { text:'弹性表达式', alignment:['fill','center'] }, \
						liuguangHP: Button { text:'?', alignment:['right','center'], preferredSize:[25,20] }, \
						yinying: Button { text:'文字飞入飞出', alignment:['fill','center'] }, \
						yinyingHP: Button { text:'?', alignment:['right','center'], preferredSize:[25,20] }, \
					}, \
					cmds1: Group { \
						alignment:['fill','top'], \
						saoguang: Button { text:'透明过渡', alignment:['fill','center'] }, \
						saoguangHP: Button { text:'?', alignment:['right','center'], preferredSize:[25,20] }, \
						litizi: Button { text:'随机振动', alignment:['fill','center'] }, \
						litiziHP: Button { text:'?', alignment:['right','center'], preferredSize:[25,20] }, \
					}, \
				}";
				
				my_palette.margins = [10,10,10,10];
				my_palette.grp = my_palette.add(res);
				
				my_palette.grp.cmds.liuguang.onClick    = onliuguang;
				my_palette.grp.cmds.yinying.onClick = onyinying;
				my_palette.grp.cmds.liuguangHP.onClick    = onliuguangHP;
				my_palette.grp.cmds.yinyingHP.onClick    = onyinyingHP;
				my_palette.grp.cmds1.saoguang.onClick = onsaoguang;
				my_palette.grp.cmds1.saoguangHP.onClick    = onsaoguangHP;
				my_palette.grp.cmds1.litizi.onClick = onlitizi;
				my_palette.grp.cmds1.litiziHP.onClick    = onlitiziHP;
				
				my_palette.layout.layout(true);
				my_palette.layout.resize();
				my_palette.onResizing = my_palette.onResize = function () {this.layout.resize();}
			
				if (my_palette instanceof Window) {
					my_palette.center();
					my_palette.show();
				} else {
					my_palette.layout.layout(true);
				}
			}
			else {
				alert("不能打开用户界面", scriptName);
			}
		}
	}
	
	
	myroot(this);

}