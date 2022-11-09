//import React from 'react'
import React, {useState, useEffect, useRef } from "react";
import video1 from './Video/v1.mov'
import video2 from './Video/v2.mov'
import image from './Video/image.jpg'
import video3 from './Video/v3.mov'
import video4 from './Video/v4.mov'
import video5 from './Video/v..mov'
import video6 from './Video/v6.mov'
import image1 from './Video/image1.jpg'

const Home = () => {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
 
      function handleResize() {
      
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
        
      }
      
      window.addEventListener("resize", handleResize);

      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []); 
    const [windowSize1, setWindowSize1] = useState({
        width: undefined,
        height: undefined,
      });
    useEffect(() => {
 
        function handleResize() {
        
          setWindowSize1({
            width: window.innerWidth,
            height: window.innerHeight,
          });
          
        }
        
        window.addEventListener("resize", handleResize);
  
        handleResize();
        
        return () => window.removeEventListener("resize", handleResize);
      }, []); 
      const imageRef=useRef(null);
      const imageRef1=useRef(null);
      
    
  
    const videoRef1 = useRef(null);
    const videoRef2=useRef(null);
    const videoRef3=useRef(null);
    const videoRef4=useRef(null);
    const videoRef5=useRef(null);
    const videoRef6=useRef(null);
  
   useEffect(() => {
      let options = {
        rootMargin: "0px",
        threshold: [1, 0.75]
      };
      let handlePlay = (entries, observer) => {
        entries.forEach((entry) => {
    
            if (entry.isIntersecting) {
            observer.current.play();
          } else {
            observer.current.pause();
          }
        });
      };
      let observer = new IntersectionObserver(handlePlay, options);
      observer.observe(videoRef1.current);
      observer.observe(videoRef2.current);
      observer.observe(videoRef3.current);
      observer.observe(videoRef4.current);
      observer.observe(videoRef5.current);
      observer.observe(videoRef6.current);
      
    });
    //let height=window.innerHeight;
    //let width=window.innerWidth;
  
    return (
      <>
       <video ref={videoRef1} src={video1} height={windowSize.height} width={windowSize.width} loop autoPlay muted></video>
       <img ref={imageRef} src={image} height={windowSize1.height} width={windowSize1.width}></img>
       <img ref={imageRef1} src={image1} height={windowSize1.height} width={windowSize1.width}></img>
       <video ref={videoRef2} src={video2} height={windowSize.height} width={windowSize.width} loop autoPlay muted></video>
       <video ref={videoRef3} src={video3 } height={windowSize.height} width={windowSize.width} loop autoPlay muted></video>
       <video ref={videoRef4} src={video4} height={windowSize.height} width={windowSize.width} loop autoPlay muted></video>
       <video ref={videoRef6} src={video6} height={windowSize.height} width={windowSize.width} loop autoPlay muted></video>
       <video ref={videoRef5} src={video5} height={windowSize.height} width={windowSize.width} loop autoPlay muted></video>
       
      


      </>
    )
  }
  
  export default Home
  
