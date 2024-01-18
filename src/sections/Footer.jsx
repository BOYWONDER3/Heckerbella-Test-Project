import yt from "../assests/pictures/yt.svg";
import twi from "../assests/pictures/twi.svg";
import ing from "../assests/pictures/ing.svg";
import fbc from "../assests/pictures/fbc.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="media_icon">
        <img src={yt} />
        <img src={twi} />
        <img src={ing} />
        <img src={fbc} />
      </div>
      <div className="uses">
        <h3>Conditions of Use</h3>
        <h3>Privacy & Policy</h3>
        <h3>Press Room</h3>
      </div>
      <div className="end">
        <h3>@ 2024 HBMovies by Heckerbella/BoyWonder[BOYTECH]</h3>
      </div>
    </div>
  );
}
