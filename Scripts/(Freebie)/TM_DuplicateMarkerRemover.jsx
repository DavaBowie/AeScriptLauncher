/*
	TM_DuplicateMarkerRemover.jsx

	Copyright (c) 2013 Dan Ebberts
	debberts@motionscript.com

	Revision History
	----------------
	v1_0	initial release


*/


function TM_duplicateMarkerRemover(){

	function main(){ // main routine

		var myComp = app.project.activeItem;
		if (myComp == null || ! (myComp instanceof CompItem)){
			alert("No comp active.");
			return;
		}
		if (myComp.selectedLayers.length != 1){
			alert("Please select exactly one layer.");
			return;
		}

		var myLayer = myComp.selectedLayers[0];
		var myProp = myLayer.property("Marker");

		var myComment;
		var myPrevComment = "";
		var myTime;
		var myPrevTime = -1;
		var myMarkerVal;


		for (var i = myProp.numKeys; i > 0; i--){
			
			myMarkerVal = myProp.keyValue(i);
			myComment = myMarkerVal.comment;
			myTime = myProp.keyTime(i);
			if ((myComment == myPrevComment) && (Math.abs(myTime - myPrevTime) < myComp.frameDuration*1.1)){
				myProp.removeKey(i);
			}
			myPrevComment = myComment;
			myPrevTime = myTime;
		}
	}
	main()
}

TM_duplicateMarkerRemover();