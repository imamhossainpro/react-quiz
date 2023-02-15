import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import classes from "./styles/Account.module.css";
const Account = () => {
  return (
    <div className={classes.account}>
      <AccountCircleIcon />
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>

      {/* <span class="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
  );
};
export default Account;
