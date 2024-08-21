import s from "./Style.module.scss";

export const Logo = () => {
  return (
    <h1 className={s.Logo}>
      <span className={s.Blue}>bli</span>
      <span className={s.Amber}>ba</span>
      <span className={s.Red}>do</span>
    </h1>
  );
};
