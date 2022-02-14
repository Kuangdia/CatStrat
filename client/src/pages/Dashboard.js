import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./Dashboard.scss";

export default function Dashboard(props) {
  return(
    <main className="layout">
      <Navbar />
      <Sidebar />
    </main>
  );
}