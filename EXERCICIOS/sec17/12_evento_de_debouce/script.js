let timout;
window.addEventListener("mousemove", function(e){
    
    clearTimeout(timout);
    
    timout = setTimeout(function() {
        console.log(e.x)
    }, 500)
})