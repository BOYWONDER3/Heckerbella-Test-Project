import xclusive1 from "../assests/pictures/xclusive1.png";
import xclusive2 from "../assests/pictures/xclusive2.png";
import xclusive3 from "../assests/pictures/xclusive3.png";

export default function ExclusiveVideos() {
  return (
    <div className="xclsuive-pg">
      <div className="xclusive-title">
        <h1>ExclusiveVideos</h1>
        <p>See More</p>
      </div>
      <div className="xclusive-image">
       
        <div>
          <img src={xclusive2} />
          <p>The sucide Squad</p>
        </div>
        <div>
          <img src={xclusive3} />
          <p>Horror Movie</p>
        </div>
        <div>
          <img src={xclusive1} />
          <p>Lamb (2021) Trailer</p>
        </div>
      </div>
    </div>
  );
}
