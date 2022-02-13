import "./Navbar.scss";

import FaceIcon from '@mui/icons-material/Face';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PetsIcon from '@mui/icons-material/Pets';

export default function Navbar(props) {
  return (
    <section className="navbar">
      <div className="navbar__button">
        <NotificationsNoneIcon className="navbar__icon"/>
        <PetsIcon className="navbar__icon"/>
      </div>
      
      <div className="navbar__user">
        <FaceIcon className="navbar__avatar navbar__icon" />
        <p className="navbar__user__name">Allen</p>
      </div>
    </section>
  );

}