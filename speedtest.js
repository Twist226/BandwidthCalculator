//JUST AN EXAMPLE, PLEASE USE YOUR OWN PICTURE!
var imageAddr = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Towin.jpg"; 

var downloadSize = 125950; //bytes
var average=[];
var avg = 0;
var total = 0;
var i = 0;


function ShowProgressMessage(msg) {
    if (console) {
        if (typeof msg == "string") {
            console.log(msg);
        } else {
            for (var i = 0; i < msg.length; i++) {
                console.log(msg[i]);
            }
        }
    }
    
    var oProgress = document.getElementById("progress");
    if (oProgress) {
        var actualHTML = (typeof msg == "string") ? msg : msg.join("<br />");
        oProgress.innerHTML = actualHTML;
    }
}
 

function InitiateSpeedDetection() {
    ShowProgressMessage("Loading the image, please wait...");
    document.write("Loading the image please wait...");
    window.setTimeout(MeasureConnectionSpeed, 1);
    
 
};    

if (window.addEventListener) {
    window.addEventListener('click', InitiateSpeedDetection, false);
} else if (window.attachEvent) {
    window.attachEvent('onclick', InitiateSpeedDetection);
}



function MeasureConnectionSpeed() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }
    
    download.onerror = function (err, msg) {
        ShowProgressMessage("Invalid image, or error downloading");
    }
    
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;
     

        

    function showResults() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        var count = (i+1);
        var runs = 2;
        var avg = (total/average.length);
        average.push(speedMbps);
        total += parseFloat(average[i]);
    
          
     
        ShowProgressMessage([
            "Your connection speed is: \n", 
            speedBps + " bps \n", 
            speedKbps + " kbps \n", 
            speedMbps + " Mbps \n"
        ]);
            window.alert("Your connection speed is: \n" + speedBps + " bps \n" + speedKbps + " kbps \n"  + speedMbps + " Mbps \n" + "Count: " + count + "\nAverage: " + avg + 
             "\nTotal: " + total)
            
            
        if(i < runs)
        {        
        i++;
        InitiateSpeedDetection();
         
       }        
    }
}
