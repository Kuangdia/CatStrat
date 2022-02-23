import ListTabs from "./ListTabs";
import "./Sidebar.scss";
import logo from "../../images/logo192.png"


export default function Sidebar(props) {

  return (
    <div className="sidebar">
      <div className="sidebar__head">
        <img 
            className="sidebar--centered sidebar__logo"
            src={logo}
            alt="CatStrat"
        />
        <p className="sidebar__title">CatStrat</p>
      </div>
      <hr className="sidebar__separator sidebar--centered"/>
      <nav className="sidebar__menu__container">
        <ListTabs wow="yes" />
      </nav>
    </div>
  );
}