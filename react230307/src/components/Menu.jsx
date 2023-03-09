import { useState } from "react";
import {
    AiOutlineMenu
} from "react-icons/ai";
import { Link } from "react-router-dom";
function Menu() {
    const menuList = [
        {
            id:1,
            title: "HOME",
            url : ""
        },{
            id:2,
            title: "ABOUT",
            url : "about"
        },{
            id:3,
            title: "WORK",
            url : "work"
        },{
            id:4,
            title: "CONTACT",
            url : "contact"
        },
    ];

    const [toggle, setToggle] = useState(false);
    const toggleHandler = () => {
        setToggle(prev => !prev);
        console.log(toggle);
    }

    const menu = menuList.map((data, index) => {
        return (<li><Link key={data.id} to={data.url}>{data.title}</Link></li>)
    })
    return (
        <nav>
            <div onClick={toggleHandler}>
                <AiOutlineMenu/>
                {toggle ? <ul>{menu}</ul> : null}
            </div>
        </nav>
    )
}

export default Menu;