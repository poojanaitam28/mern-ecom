import { Link } from "react-router-dom";

function BannerBox(props) {
  return (
    
      <div className="box rounded-lg overflow-hidden group">
        <Link to="/">
          <img
            src={props.img}
            alt="banner"
            className=" transition-all w-full group-hover:scale-105 "
          />
        </Link>
      
    </div>
  );
}

export default BannerBox;
