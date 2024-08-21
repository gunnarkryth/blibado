import s from "./Style.module.scss";

export const Motto = ({MottoMessage}) => {
    // console.log(MottoMessage)
  return <h2 className={s.Motto}>{MottoMessage}</h2>;
};
