import { forwardRef, useImperativeHandle, useRef } from "react";
import video from "../../../public/Images/vasantor-logo.mp4";

const VideoPlayer = forwardRef((props, ref) => {
  const videoRef = useRef(null);

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    playVideo() {
      if (videoRef.current) {
        videoRef.current.play();
      }
    },
    pauseVideo() {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    },
  }));

  return (
    <div>
      <video ref={videoRef} width="700px" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
});

export default VideoPlayer;
