import logo from './logo.svg';
import './App.css';

import React, { useEffect } from 'react'


import { camera, faceDetectionAdapter, loadFaceDetectorModels } from '@biopassid/face-sdk'

 function Validation() {

    
  const { takePicture } = camera();
  
  async function handleTakePicture() {
      await loadFaceDetectorModels();
  
      const resp = await takePicture({
        element: document.querySelector("#camera"),
        options: {
            mask: {
                enabled: true,
                type: 'face',
                backgroundColor: 'black',
                backgroundOpacity: .6,
                frameColor: 'white',
                frameThickness: 3,
            },
            backButton: {
                enabled: true,
                size: '30px',
                backgroundColor: 'transparent',
                label: {
                    enabled: false,
                    content: "",
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    color: 'white',
                },
                icon: {
                    enabled: true,
                    source: null,
                    color: 'white',
                    size: '30px',
                },
                padding: "0",
            },
            captureButton: {
                enabled: true,
                size: '30px',
                backgroundColor: 'white',
                label: {
                    enabled: false,
                    content: "",
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    color: 'black',
                },
                icon: {
                    enabled: true,
                    source: null,
                    color: 'black',
                    size: '30px',
                },
                padding: '1em',
            },
            cancelButton: {
                enabled: true,
                size: '30px',
                backgroundColor: 'red',
                label: {
                    enabled: false,
                    content: "",
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    color: 'white',
                },
                icon: {
                    enabled: true,
                    source: null,
                    color: 'white',
                    size: '30px',
                },
                padding: "0",
            },
            confirmButton: {
                enabled: true,
                size: '30px',
                backgroundColor: 'white',
                label: {
                    enabled: false,
                    content: "",
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    color: 'black',
                },
                icon: {
                    enabled: true,
                    source: null,
                    color: 'black',
                    size: '30px',
                },
                padding: "1em",
            },
            legend: {
                title: {
                    enabled: true,
                    content: "Captura Facial",
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'white',
                },
                subtitle: {
                    enabled: true,
                    content: "",
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    color: 'white',
                }
            },
            faceDetection: {
                enabled: true,
                autoCapture: false,
                timeToCapture: 3000,
                timeToCaptureFeedbackColor: "#FF0000",
                multipleFacesEnabled: true,
                scoreThreshold: 0.1
            },
            width: '100%',
            height: '100%',
            modelsDirectory: '/models',
            cameraPresets: {
                aspectRatio: 16/9,
                preferredResolution: 480,
                deviceId: null,
            },
            fontFamily: 'inherit',
        }
    })
  }
  
  
  useEffect(() => {
    
    handleTakePicture();
  },[])
    return (
      <>    <div id='#elementId' ></div>
      <input type="file" name="" id="" />
      </>
  
    )
  }

function App() {
  return (
    <div className="App">
     <Validation></Validation>
    </div>
  );
}

export default App;
