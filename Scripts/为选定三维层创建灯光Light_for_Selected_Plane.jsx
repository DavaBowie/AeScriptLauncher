/*
Light_for_Selected_Plane.jsx
Version 1
After Effects JavaScript by Christopher R. Green
(the guy who runs crgreen.com)
Places a light in comp pointed at selected layer
展翅鹰汉化 
*/

var activeItem = app.project.activeItem;

if ( (activeItem == null) || !(activeItem instanceof CompItem) ) {
	
} else {
	var selectedLayers = activeItem.selectedLayers;
	var selNum = activeItem.selectedLayers.length;
	if (!(selNum == 1)) {
		if (selNum == 0) {selNum = "No"} 
		alert(selNum + " 个层被选择了. 请只选择一个层.");
	} else {
		mainPlane = selectedLayers[0];
		origMainPlane = null;
		planesParent=mainPlane.parent;
		
		if (!mainPlane.threeDLayer) {
			alert("这不是一个3D 图层.");
             
		}else{
			
			planeName = mainPlane.name;
			///////////////////////////////////////////////////////
			app.beginUndoGroup("Place Light");
			if (planesParent != null) {
				// swicheroo
				origMainPlane = mainPlane;
				mainPlane = ( mainPlane.duplicate() );
				// 'bake' parented values:
				mainPlane.parent = null;
			}
			timeNow = mainPlane.time;
			startPos = mainPlane.position.valueAtTime(timeNow, false);
			ori=mainPlane.property("orientation").valueAtTime(timeNow, false);
			rots=[mainPlane.property("X Rotation").valueAtTime(timeNow, false), mainPlane.property("Y Rotation").valueAtTime(timeNow, false), mainPlane.property("Z Rotation").valueAtTime(timeNow, false)];
			// there is undoubtedly a formula to calculate the best distance, but for now, do rough back-off ...
			scFctrX=mainPlane.property("Scale").valueAtTime(timeNow, false)[0]*.01;
			scFctrY=mainPlane.property("Scale").valueAtTime(timeNow, false)[1]*.01;
			// based on size (scale factored in) of plane
			zAdj=( (mainPlane.width*scFctrX)+(mainPlane.height*scFctrY) )/2;
			if (planesParent != null) {
				// switcheroo backeroo
				doomedLayer = mainPlane;
				mainPlane=origMainPlane;
				doomedLayer.remove();
			}
			
			///////////////////////////////////////////////////////
			newName=(planeName.substr(0,25));//truncate for new object's name
			newLight=activeItem.layers.addLight((newName + "_light"), [activeItem.width/2, activeItem.height/2]);
			newLight.autoOrient = AutoOrientType.NO_AUTO_ORIENT;
			// light gets positioned at plane's point in space, but backed off a bit in z
			newLight.property("position").setValue([startPos[0], startPos[1], (startPos[2]-zAdj)]);
			
			tempNull = activeItem.layers.addNull();
			tempNull.threeDLayer=true;
			// i don't think this makes any diff, but it's aesthetically pleasing to me (i'm insane)
			tempNull.property("Anchor Point").setValue([50, 50, 0]);
			
			// tempNull is placed at plane's point in space
			tempNull.property("position").setValue(startPos);
			// make tempNull light's parent
			newLight.parent = tempNull;
			
			// shake
			
			// rotate tempNull so that light is oriented correctly
			
			tempNull.property("orientation").setValue(ori);
			tempNull.property("X Rotation").setValue(rots[0]);
			tempNull.property("Y Rotation").setValue(rots[1]);
			tempNull.property("Z Rotation").setValue(rots[2]);
			
			// and bake
			
			doomedNullSrc=tempNull.source;
			//note: must delete layer first, then source in order to 'bake' parented values (cannot just remove source)
			newLight.parent=null;
			tempNull.remove();
			doomedNullSrc.remove();
			
			newLight.moveBefore(mainPlane);
			newLight.selected = true;
			app.endUndoGroup();
			///////////////////////////////////////////////////////
		}
	}
}
