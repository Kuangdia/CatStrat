import ListTabs from "./ListTabs";
import "./Sidebar.scss";


export default function Sidebar(props) {

  return (
    <section className="sidebar">
      <div className="sidebar__head">
        <img 
            className="sidebar--centered sidebar__logo"
            src="logo192.png"
            alt="CatStrat"
        />
        <p className="sidebar__title">CatStrat</p>
      </div>
      <hr className="sidebar__separator sidebar--centered"/>
      <nav className="siderbar__menu">
        <ListTabs wow="yes" />
      </nav>
    </section>
  );
}