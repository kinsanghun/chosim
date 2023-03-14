import LazyImage from "./LazyImage";
import { AiOutlineClose } from "react-icons/ai";
function PostModal({src, closeHandler}) {
    return (
        <div className="modal-window">
            <div className="close-btn" onClick={closeHandler}><AiOutlineClose/></div>
            <div className="image">
                <LazyImage src={src}/>
            </div>
        </div>
    )
}

export default PostModal;