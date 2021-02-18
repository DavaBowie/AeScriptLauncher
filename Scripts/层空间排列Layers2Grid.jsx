//  层空间排列  展翅鹰汉化
//Arrange Layers in a Grid by Lloyd Alvarez (http://aescripts.com) - July 2006
//
//updated to save position of 1st layer and fixed spacing calculation - Feb 2008
//
//
//Arranges selected layers into a grid with a choice to flow layers by columns or by rows  
// 
//Layers should all be of the same size.  
// 
// 
	
	clearOutput();
	app.beginUndoGroup("Layers2Grid");
	
	var myGridOrder = confirm("你希望让选择的层按行的什么形式排列（从左到右）？ \r 点否 将按从上到下的形式进行排列");
	
	var myComp = app.project.activeItem;
   	var selectedLayers = myComp.selectedLayers; 
	var savePosition = selectedLayers[0].property("Position").value;

	var rspacing = 5;
	
	if (myGridOrder) { //order by Row
	var myRows = "4" //default value
	myRows = prompt("向下排列多少行？",myRows);
	
	rspacing = prompt("你打算让相邻的层间隔多少像素？",rspacing);
	rspacing = parseInt(rspacing);
	
    

  
      

	for (var i = 0; i < selectedLayers.length; i++) { 
		
		var myLayer = selectedLayers[i]; 
		
		var ind=((i)%myRows)+1;
		var w= myLayer.width * (myLayer.scale.valueAtTime(0,true)[0]/100) + (rspacing*2);
		var h= myLayer.height * (myLayer.scale.valueAtTime(0,true)[1]/100) +(rspacing*2);
		var x=(w*(Math.floor(((i+1)+(myRows-1))/myRows)))-(w/1);
		var y=(h*ind)-(h/1); 
				myLayer.property("Anchor Point").setValue([myLayer.width/2,myLayer.height/2]);
				myLayer.property("Position").setValue([x+savePosition[0],y+savePosition[1]]);
						}		
		
		writeLn("Arranged " + selectedLayers.length + " layers in a grid");	 
		writeLn("by Rows Left to Right");	
				
	}else { //order by Column
		var myCols = "10" //default value
	   	myCols = prompt("多少列排列?",myCols);
		rspacing = prompt("你打算让相邻的层间隔多少像素？",rspacing);
		rspacing = parseInt(rspacing);
	for (var i = 0; i < selectedLayers.length; i++) { 
		var myLayer = selectedLayers[i]; 

		var ind=((i)%myCols)+1;
		var w= myLayer.width * (myLayer.scale.valueAtTime(0,true)[0]/100) + (rspacing*2);
		var h= myLayer.height * (myLayer.scale.valueAtTime(0,true)[1]/100) +(rspacing*2);
		var x=((w+0)*ind)-(w/1);
		var y=((h+0)*(Math.floor(((i+1)+(myCols-1))/myCols)))-(h/1);
				myLayer.property("Anchor Point").setValue([myLayer.width/2,myLayer.height/2]);
				myLayer.property("Position").setValue([x+savePosition[0],y+savePosition[1]]);
						}		
		writeLn("Arranged " + selectedLayers.length + " layers in a grid");
		writeLn("by Columns Top to Bottom");			
	}					
		
		app.endUndoGroup();