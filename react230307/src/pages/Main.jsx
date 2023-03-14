import Carousel from "components/Carousel";
import LineLayout from "components/LineLayout";
import Post from "components/Post";

export default function Main() {
    const postLeft = [
        <Post

            key="8"
            url={require("assets/images/tmp12.jpg")}
            title={"Lorem Ipsum"}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        />,
        <Post

            key="7"
            url={require("assets/images/tmp11.jpg")}
            title={"Lorem Ipsum"}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        />,
        <Post
            key="6"
            url={require("assets/images/tmp5.jpg")}
            title={"Lorem Ipsum"}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        />,
        <Post

            key="5"
            url={require("assets/images/tmp7.jpg")}
            title={"Lorem Ipsum"}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        />
    ];
    const postRight = [
        <Post

            key="4"
            url={require("assets/images/tmp2.jpg")}
            title={"Lorem Ipsum"}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        />,
        <Post

            key="3"
            url={require("assets/images/tmp4.jpg")}
            title={"Lorem Ipsum"}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        />,
        <Post
            key="2"
            url={require("assets/images/tmp6.jpg")}
            title={"Lorem Ipsum"}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        />,
        <Post
            key="1"
            url={require("assets/images/tmp9.jpg")}
            title={"Lorem Ipsum"}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        />
    ]
    return (
        <div className="main">
            <Carousel/>
            <div className="container">
                <h2>GALLERYS</h2>
                <div>
                    <LineLayout>
                        {postLeft}
                    </LineLayout>
                    <LineLayout>
                        {postRight}
                    </LineLayout>
                </div>
            </div>
        </div>
    )
}