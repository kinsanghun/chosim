import { IoIosArrowRoundForward } from "react-icons/io";
import LazyImage from "./LazyImage";
function Post({url, title, description}) {
    return (
        <div className="post">
            <div className="image-box">
                <LazyImage src={url}/>
                {/* <img src={url} alt="post"/> */}
            </div>
            <div className="content">
                <h3>{title}</h3>
                <div className="description">{description}</div>
                <div className="more">Learn More <IoIosArrowRoundForward/></div>
            </div>
        </div>
    )
}

export default Post;