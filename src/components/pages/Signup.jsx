import { Link } from "react-router-dom";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
const Signup = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <Form className={`&{classes.signup}`}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the Terms &amp; Conditions" />
          <Button>
            <span>Submit Now</span>
          </Button>
          <div className="info">
            Don't have an account? <Link to="/login">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
