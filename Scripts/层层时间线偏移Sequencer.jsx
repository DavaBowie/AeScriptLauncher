// 层时间线偏移  展翅鹰汉化
function Sequencer()
{    
    var curComp = app.project.activeItem;
    if (!curComp || !(curComp instanceof CompItem))
    {
        alert("请选择一个合成.");
        return;
    }

    var offsetFrames = parseInt(prompt("需要偏移的帧数", "1"));

    for (var layerId = 0; layerId < curComp.selectedLayers.length; layerId++) 
    {
        var layer = curComp.selectedLayers[layerId];
        
        layer.startTime = layerId * offsetFrames * curComp.frameDuration;
    }
}

Sequencer();