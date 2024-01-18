import tv from "../assests/pictures/tv.svg";
import search from "../assests/icon/Search.svg";
import Menu from "../assests/icon/Menu alt 4.svg";
import imbm from "../assests/icon/imbm.svg";
import berry from "../assests/icon/berry.svg";

export default function Header() {
  return (
    <header className="header-main">
      <nav className="nav-top">
        <div className="title">
          <a href="">
            <img src={tv} alt="logo" />
          </a>
          <h2 className="c-name">HBMovies</h2>
        </div>
        <div className="input-field">
          <img src={search} />
          <input placeholder="what do you want to watch?" />
        </div>
        <div className="end-nav">
          <button>Sign in</button>
          <img src={Menu} />
        </div>
      </nav>
      <div className="last-section-nav">
        <h1 className="hero_text">
          John Wick 3: <br /> Parabellum
        </h1>
        <div className="hero_subtext">
          <img src={imbm} />
          <p>86.0 / 100</p>
          <img src={berry} />
          <p>97%</p>
        </div>

        <p className="hero_subtext_text">
          John Wick is on the run after killing a member of the international{" "}
          <br />
          assassins' guild, and with a $14 million price tag on his head, he is{" "}
          <br />
          the target of hit men and women everywhere.
        </p>
        <button className="hero_btn">WATCH TRAILER</button>
      </div>
      {/* <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>- 3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div> */}
    </header>
  );
}
