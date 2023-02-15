import Checkbox from "./Checkbox";
import classes from "./styles/Answeres.module.css";
const Answers = () => {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="Test Answere" />
    </div>
  );
};

export default Answers;
