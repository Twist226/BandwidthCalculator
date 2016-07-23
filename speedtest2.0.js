
var i= 1;
    

var imageAddr=["https://upload.wikimedia.org/wikipedia/commons/e/ef/Towin.jpg","https://upload.wikimedia.org/wikipedia/commons/e/ef/Towin.jpg","https://upload.wikimedia.org/wikipedia/commons/e/ef/Towin.jpg","https://upload.wikimedia.org/wikipedia/commons/e/ef/Towin.jpg","https://upload.wikimedia.org/wikipedia/commons/e/ef/Towin.jpg","https://upload.wikimedia.org/wikipedia/commons/e/ef/Towin.jpg"];
var downloadsize =[125950,125950,125950,125950,125950];
function restart()
        {
            if(imageAddr < 5)
                {   
                i++;
                InitiateSpeedDetection();
                }

        }

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
    window.attachEvent('onclick', restart);
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
    download.src = imageAddr[i] + cacheBuster;


        

    function showResults() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadsize[i] * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        var avg = (total/average.length);
        
        
        
        average.push(speedMbps);
        total += parseFloat(average[i]);
    
          
     
        ShowProgressMessage([
            "Your connection speed is: \n", 
            speedBps + " bps \n", 
            speedKbps + " kbps \n", 
            speedMbps + " Mbps \n"
        ]);
            window.alert("Your connection speed is: \n" + speedBps + " bps \n" + speedKbps + " kbps \n"  + speedMbps + " Mbps \n" + "Count: " + i + "\nAverage: " + avg + 
             "\nTotal: " + total + test[i])
            restart();
    }
}
