import s from "./Style.module.scss";

export const Header = (props) => {
  return <header className={s.Header}>{props.children}</header>;
};
