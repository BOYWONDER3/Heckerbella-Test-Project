import cast1 from "../assests/images/cast1.png";
import poster2 from "../assests/images/poster2.png";
import cast3 from "../assests/images/cast3.png";
import poster4 from "../assests/images/poster4.png";

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
        <img src={poster2} />
        <h3>Ryan Reynolds</h3>
        </div>
        <div>
        <img src={cast3} />
        <h3>Timothée Chalamet</h3>
        </div>
        <div>
        <img src={poster4} />
        <h3>Chloë Grace Moretz</h3>
        </div>
      </div>
    </div>
  );
}
