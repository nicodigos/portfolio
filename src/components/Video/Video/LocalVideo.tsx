import "./LocalVideo.css";

function LocalVideo() {
  return (
    <div className="video-responsive">
      <video width="853" height="480" controls title="Local Video">
        <source src="./videos/howCanadaWorks.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default LocalVideo;
