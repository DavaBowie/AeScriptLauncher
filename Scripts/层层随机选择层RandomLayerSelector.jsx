//  随机选择层 展翅鹰汉化RandomLayerSelectorjsx
// ©August2008  Lloyd Alvarez  http://aescripts.com
//
//   Randomly selects layers
//
// If you have a set of layers selected it will randomly select layers from within the selected set
// Otherwise it will randomly select  layers of the whole comp.
//
//
// 






 
function selectRandomLayers() {
				if (myComp.selectedLayers.length != 0) {  //select from selected layers
				var myLayers = myComp.selectedLayers;
				min=0;
				max=myLayers.length-1;
				var myRandom = new Array();
					for (i=0; i <= myLayers.length-1; i++){
						myRandom[i] = Math.round(min + (max-min)*Math.random());
						myLayers[i].selected = false;
						}
					for (j=0; j <= myRandom.length-1; j++){
						myLayers[myRandom[j]].selected = true;
					}
				}else{  // select from whole comp
					var myLayers = myComp.layers; 
					min=1;
					max=myLayers.length;
				var myRandom = new Array();
					for (i=1; i <= myLayers.length; i++){
						myRandom[i-1] = Math.round(min + (max-min)*Math.random());
						myLayers[i].selected = false;
						}
					for (j=0; j <= myRandom.length-1; j++){
						myLayers[myRandom[j]].selected = true;
					}
				}
			}
        
        
              var proj = app.project;
	var undoStr = "Random Layer Selector";
	if (proj){
		var myComp = app.project.activeItem;
		
			if (myComp != null && (myComp instanceof CompItem)){
			
			var myPercent = 1;
			var myPromptText = "你想随机选择多少层？      "+
										"输入1会选择绝大多数层, 2选择多数层, 3 选择少数层,4选择很少层";
			myPercent = prompt(myPromptText, myPercent);
			
			if (myPercent) {
				if (parseInt(myPercent) >= 0 && parseInt(myPercent) <= 4) {
			
			app.beginUndoGroup(undoStr);
			
			for (g=0; g<=parseInt(myPercent)-1;g++){
				selectRandomLayers();
				}
			app.endUndoGroup();
			} else {
				alert("请输入1 到4的数字.");
				}
			}
		} else {
			alert("使用这个脚本请激活一个合成.");
		}
	}   
	else
	{
		alert("使用这个脚本请先激活一个工程.");
	}