import type { ParentComponent, JSX } from "solid-js";
import "./index.scss";
import classNames from "classnames";
export type ButtonType = "primary" | "secondary" | "danger" | "warning";
export type ButtonProps = {
  type?: ButtonType;
} & Omit<JSX.ButtonHTMLAttributes<HTMLButtonElement>, "type">;

const Button: ParentComponent<ButtonProps> = (props) => {
  const prefix = "sparrow-btn";
  const classes = classNames("sparrow-btn", {
    [`${prefix}-${props.type}`]: props.type,
  });
  return (
    <button
      {...(props as Omit<JSX.ButtonHTMLAttributes<HTMLButtonElement>, "type">)}
      class={`${classes} ${props.class}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
