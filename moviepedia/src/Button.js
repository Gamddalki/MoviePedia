import PropTypes from "prop-types";
import Style from "./Button.module.css";

function Button({ text }) {
  return <button className={Style.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
