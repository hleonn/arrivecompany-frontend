import logo from "../logo.svg";
import "../App.css";
import Navbar from '../components/Navbar/Navbar';

function HomePage({ handleLogout, user, }) {
  return (
    <>
      <Navbar handleLogout={handleLogout} user={user} />
      <div className="background">
        <div className="overlay" />
        <img src="/ironhack.png" alt="" id="ihlogo" />

        <div>
          {/*<img src="/ironhack.png" alt="" />*/}
        </div>
        <p className="title1">
          Arrive-
          <span className="title2">Company</span>
        </p>
        <p className="title3">Arrive & Tracking by QR's
        </p>
        <p className="title4">Welcome!
        </p>
      </div>
    </>
  );
}

export default HomePage;
