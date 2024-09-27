var videomodal = document.getElementById("video-modal")
var openvideo = document.getElementById("p3")
var closevideo = document.getElementById("video-modal-close")

openvideo.addEventListener("click",()=>{
    videomodal.style.visibility = "visible"
})

closevideo.addEventListener("click",()=>{
    videomodal.style.visibility = "hidden"
})

var image_list = document.getElementsByClassName("nav-pane-image")

for(var i=0 ; i<image_list.length ; i++){
    (function(index){
        image_list[index].addEventListener("click",()=>{
            resetImageNavPane()
            image_list[index].src = "image/nav_ck.png"
        })
    })(i)
}

// Reset all image to nav_hover
function resetImageNavPane(){
    var image_list = document.getElementsByClassName("nav-pane-image")
    for(var i=0 ; i<image_list.length ; i++){
        image_list[i].src = "image/nav_hover.png"
    }
}





















