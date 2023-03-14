import Carousel from "components/Carousel";
import LineLayout from "components/LineLayout";
import Post from "components/Post";
import PostModal from "components/PostModal";
import { useState } from "react";

const postList = [
    {
        url : require("assets/images/tmp12.jpg"),
        title :  "Lorem Ipsum",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },{
        url : require("assets/images/tmp11.jpg"),
        title :  "Lorem Ipsum",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },{
        url : require("assets/images/tmp10.jpg"),
        title :  "Lorem Ipsum",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },{
        url : require("assets/images/tmp9.jpg"),
        title :  "Lorem Ipsum",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },{
        url : require("assets/images/tmp8.jpg"),
        title :  "Lorem Ipsum",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },{
        url : require("assets/images/tmp7.jpg"),
        title :  "Lorem Ipsum",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },{
        url : require("assets/images/tmp6.jpg"),
        title :  "Lorem Ipsum",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },{
        url : require("assets/images/tmp5.jpg"),
        title :  "Lorem Ipsum",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },{
        url : require("assets/images/tmp4.jpg"),
        title :  "Lorem Ipsum",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },{
        url : require("assets/images/tmp3.jpg"),
        title :  "Lorem Ipsum",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },{
        url : require("assets/images/tmp2.jpg"),
        title :  "Lorem Ipsum",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },{
        url : require("assets/images/tmp1.jpg"),
        title :  "Lorem Ipsum",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
]

export default function Main() {
    const [modalSrc, setModalSrc] = useState("");
    const [onModal, setOnModal] = useState(false);

    const postLeft = [];
    const postRight = [];

    const onModalHandler = (src) => {
        setModalSrc(src);
        setOnModal(true);
    }

    const offModalHandler = () => {
        setOnModal(false);
    } 

    postList.forEach((data, index) => {
        const post = <Post key={`post_${index}`} title={data.title} description={data.description} url={data.url} modalHandler={onModalHandler}/>;
        if(index % 2 === 0) { postLeft.push(post); }
        else { postRight.push(post); }
    })

    return (
        <div className="main">
            {onModal ? <PostModal src={modalSrc} closeHandler={offModalHandler} /> : null}
            <Carousel/>
            <div className="container">
                <h2>GALLERYS</h2>
                <div>
                    <LineLayout>{postLeft}</LineLayout>
                    <LineLayout>{postRight}</LineLayout>
                </div>
            </div>
        </div>
    )
}