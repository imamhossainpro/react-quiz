import img from "../assets/images/3.jpg";
import classes from "./styles/video.module.css";
const Video = () => {
  return (
    <div className={classes.video}>
      <img src={img} alt="video title" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      <div className={classes.qmeta}>
        <p>10 Questions</p>
        <p>Score : Not taken yet</p>
      </div>
    </div>
  );
};

export default Video;
