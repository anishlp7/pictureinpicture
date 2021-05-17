const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to media stream, pss to video element and then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch(err){
        console.log(error)
    }
}

button.addEventListener('click', async () => {
    //Button Disable
    button.disabled = true;
    // Start Picture in picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false
})

//On Load
selectMediaStream()