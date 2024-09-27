var videomodal = document.getElementById("video-modal")
var openvideo = document.getElementById("p3")
var closevideo = document.getElementById("video-modal-close")

openvideo.addEventListener("click",()=>{
    videomodal.style.visibility = "visible"
})

closevideo.addEventListener("click",()=>{
    videomodal.style.visibility = "hidden"
})