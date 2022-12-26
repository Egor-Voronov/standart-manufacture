import video from "../../assets/video.mp4";
import playerBtnImg from "../../assets/playerBtn.svg";
import poster from "../../assets/poster.png";
import { useState } from "react";

export default function Video() {
  const [playPause, setPlayPause] = useState(true);

  const playPauseHandler = () => setPlayPause(!playPause);

  const playPauseClassArr = ["video_playPause_btn"];

  playPause
    ? (playPauseClassArr[1] = "play")
    : (playPauseClassArr[1] = "pause");

  return (
    <div className="video__body">
      <h2 className="heading video__heading">наше производство</h2>
      <div className="video__container" onClick={() => playPauseHandler()}>
        <img
          src={playerBtnImg}
          alt="начать просмотр"
          className={playPauseClassArr.join(" ")}
        />
        <video
          className="video"
          controls
          poster={poster}
          onClick={() => playPauseHandler()}
        >
          <source src={video} />
        </video>
      </div>
    </div>
  );
}
