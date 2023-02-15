import classes from "./styles/Form.module.css";
const Form = ({ children, className, ...rest }) => {
  return (
    <form className={`${classes.signup} classes.form`} action="#" {...rest}>
      {children}
    </form>
  );
};

export default Form;
