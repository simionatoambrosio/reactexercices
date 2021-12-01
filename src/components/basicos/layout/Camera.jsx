import React from "react";
import "./Camera.css"

export default function startVideoFromCamera()
{
    const cameraStyle = {
        borderColor: 'rebeccapurple'
    }

    const specs = {video:{width:1080, aspectRatio:16/9}}



    navigator.mediaDevices.getUserMedia(specs).then(stream=>{

        const videoElement = document.querySelector("#video")
        videoElement.srcObject = stream

    }).catch(error=> {console.log(error)})
    

    // Status Filter

    document.addEventListener('DOMContentLoaded', function () {
        var checkbox = document.querySelector('input[type="checkbox"]');
      
        checkbox.addEventListener('change', function () {
          if (checkbox.checked) {
            // do this
            var filtro = document.getElementById("video");
            filtro.style.filter = 'saturate(200%) contrast(110%) brightness(120%)';

            console.log('Checked');
          } else {
            // do that
            var filtro = document.getElementById("video");
            filtro.style.filter = 'saturate(100%) contrast(100%) brightness(100%)';
            console.log('Not checked');
          }
        });
      });
    

    return(
        <div className="camera">
            <div className="frame" id="frame" style={cameraStyle} >
                <video id="video" autoPlay />
            </div>

            <div className="Status">
                <input id="rangeInput" type="range" min="0" max="100" step="10"></input>
    
                <label className="switch">
                    <input type="checkbox" className="inputSwitch" id="inputSwitch" value="ligado"  />
                    <span className="slider round"></span>
                </label>
            </div>

        </div>
    )
}

window.addEventListener("DOMContentLoaded", startVideoFromCamera)
