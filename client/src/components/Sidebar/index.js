import "./Sidebar.scss";

export default function Sidebar(props) {

  return (
    <section className="sidebar">
      <div className="sidebar__head">
        <img 
            className="sidebar--centered"
            src="logo192.png"
            alt="CatStrat"
        />
        <h1 className="sidebar__title">CatStrat</h1>
      </div>
      <hr className="sidebar_separator sidebar--centered" />
      <hr />
      <nav className="siderbar__menu">
        <h2>button1</h2>
        <h2>button2</h2>
        <h2>button3</h2>
      </nav>

    </section>
  );
}