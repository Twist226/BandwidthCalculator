
var imageAddr=["https://upload.wikimedia.org/wikipedia/commons/7/71/2005-malabar-parkeet-p.jpg","https://upload.wikimedia.org/wikipedia/commons/8/8c/Biltmore_Estate-27527-2.jpg","https://upload.wikimedia.org/wikipedia/commons/7/71/Aerial_view_of_Love_valley_Cappadocia_from_hot_air_balloon_1510232_3_4_Compressor.jpg","https://upload.wikimedia.org/wikipedia/commons/3/3f/Sun_pillar_and_kitesurfers.jpg"];


var downloadSize = [67520,1609200,1569303,975171]; //bytes
var average=[];
var avg = 0;
var total = 0;
var runs = 3;
var i = 0;

function restart(){
    

   if(i < runs)
        {        
        InitiateSpeedDetection();
         
       } 
}

 

function InitiateSpeedDetection() {
    document.getElementById("info").innerHTML = ("Loading the image, please wait...");
    window.setTimeout(MeasureConnectionSpeed, 1);
 
};    


function MeasureConnectionSpeed() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }
    
    download.onerror = function (err, msg) {
        document.getElementById("info").innerHTML = ("Invalid image, or error downloading");
    }
    
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr[i] + cacheBuster;
     

        

    function showResults() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize[i] * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        var count = (i+1);
        var avg = (total/average.length);
        average.push(speedMbps);
        total += parseFloat(average[i]);
            move();
            restart();
            i++;
    
        function move() {
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= runs) {
      clearInterval(id);
    } else {
      width += (i/imageAddr.length) * 100;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}
      
            document.getElementById("info").innerHTML = ("Your connection speed is:<br/>" + speedBps + " bps<br/>" + speedKbps + " kbps<br/>"  + speedMbps + " Mbps<br/>" + "Count: " + count + "<br/>Average: " + avg + 
             "<br/>Total: " + total)

            
         
    }
 
}
