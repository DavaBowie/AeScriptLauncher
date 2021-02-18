// NthLayerSelectorjsx
// ©August2008  Lloyd Alvarez  http://aescripts.com
//
//   Selects every Nth Layer
//
// If you have a set of layers selected it will select every Nth layer from within the selected set
// Otherwise it will select every Nth layer of the whole comp.
//
//


var NthLayerToSelect = 3;


var proj = app.project;
	var undoStr = "Nth Layer Selector";
	if (proj){
		var myComp = app.project.activeItem;
		
			if (myComp != null && (myComp instanceof CompItem)){
		
		NthLayerToSelect = prompt ("你想多少层选一层?", NthLayerToSelect);
		
		if (NthLayerToSelect) {
	
			app.beginUndoGroup(undoStr);
			if (myComp.selectedLayers.length != 0) {
				var myLayers = myComp.selectedLayers;
				
					for (i=0; i <= myLayers.length-1; i++){
				
				if (i%NthLayerToSelect == 0) {
					myLayers[i].selected = true;
					}else{
					myLayers[i].selected = false;
					}
				}
				}else{
					var myLayers = myComp.layers; 
				for (i=1; i <= myLayers.length; i++){
				
				if ((i-1)%NthLayerToSelect == 0) {
					myLayers[i].selected = true;
					}else{
						myLayers[i].selected = false;
						}									
}		
}
			app.endUndoGroup();
			}
		} else {
			alert("Please select an active comp to use this script");
		}
	}
	else
	{
		alert("Please open a project first to use this script.");
	}
