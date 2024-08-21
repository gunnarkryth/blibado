import s from "./Style.module.scss";

export const Hgroup = (props) => {
  return <hgroup className={s.Hgroup}>{props.children}</hgroup>;
};
