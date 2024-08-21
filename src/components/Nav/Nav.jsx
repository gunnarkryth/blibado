import s from "./Style.module.scss";
import { NavBarItems } from "./NavBarItems";

export const Nav = () => {
  return (
    <nav className={s.Nav}>
      <ul>
        {NavBarItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
