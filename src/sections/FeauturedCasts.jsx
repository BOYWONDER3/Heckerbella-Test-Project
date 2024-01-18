import cast1 from "../assests/images/cast1.png";
import Poster2 from "../assests/images/Poster2.png";
import cast3 from "../assests/images/cast3.png";
import Poster4 from "../assests/images/Poster4.png";

export default function FeaturedCasts() {
  return (
    <div className="feature_cast">
    <div className="name_cast">
    <h2>Featured Casts</h2>
      <p>See more</p>
    </div>
      <div className="main_cast">
        <div>
          <img src={cast1} />
          <h3>Keanu Reeves</h3>
        </div>
        <div>
        <img src={Poster2} />
        <h3>Ryan Reynolds</h3>
        </div>
        <div>
        <img src={cast3} />
        <h3>Timothée Chalamet</h3>
        </div>
        <div>
        <img src={Poster4} />
        <h3>Chloë Grace Moretz</h3>
        </div>
      </div>
    </div>
  );
}
