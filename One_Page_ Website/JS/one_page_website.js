var x = 10;  
    var l = 10;  
    var t = 10;  
    function ShowImage1() {  
        document.getElementById('imgMain').src = "Koala.jpg";  
    }  
    function Show() {  
  
        document.getElementById('light').style.width = "0px";  
        document.getElementById('light').style.height = "0px";  
        setTimeout("Show1()", 500);  
    }  
    function Show1() {  
        if ((x < 400) && (l < 500)) {  
            if (t < 150) {  
                document.getElementById('light').style.top = t + "px";  
            }  
            else {  
                document.getElementById('light').style.top = "120px";  
  
            }  
            document.getElementById('light').style.left = l + "px";  
            document.getElementById('light').style.width = x + "px";  
            document.getElementById('light').style.height = x + "px";  
  
            x = x + 10;  
            l = l + 10;  
            t = t + 10;  
            setTimeout("Show1()", 10);  
        }  
        else {  
            x = 0  
            l = 0;  
            t = 0;  
        }  
    }  
</script> 