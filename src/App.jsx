import "./assets/styles/App.scss";

import { Wrapper } from "./components/Wrapper/Wrapper";
import { Hgroup } from "./components/Hgroup/Hgroup";
import { Header } from "./components/Header/Header";
import { Logo } from "./components/Logo/Logo";
import { Motto } from "./components/Motto/Motto";
import { Nav } from "./components/Nav/Nav";

function App() {
  return (
    <Wrapper>
      <Hgroup>
        <Header>
          <Logo />
          <Motto MottoMessage={"Vi ved hvor du bor!"}></Motto>
          <Nav></Nav>
        </Header>
      </Hgroup>
    </Wrapper>
  );
}

export default App;
