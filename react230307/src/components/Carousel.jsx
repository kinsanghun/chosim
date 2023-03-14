import CAROUSEL_DATA from "assets/json/carousel";
import { useEffect, useMemo, useRef, useState } from "react";
import LazyImage from "./LazyImage";

function Carousel() {
    const datas = CAROUSEL_DATA.carousels;
    const itemLength = datas.length;
    const [viewIndex, setViewIndex] = useState(0);
    const carouselRef = useRef([]);

    const items = useMemo(()=>{
        return datas.map((data, index) => 
            <div 
                key={data.id} 
                className="item fade-out" 
                ref={(el) => (carouselRef.current[index] = el)}>
                <div className="info">
                    <h3>{data.artist}</h3>
                    <h1>{data.title}</h1>
                    <span>{data.description}</span>
                </div>
                <LazyImage src={require("assets/images/" + data.url)} />
            </div>);
    }, [datas])

    useEffect(()=>{
        const rotate = setInterval(()=>{
            setViewIndex(prev => (prev + 1) % itemLength);
        }, 5000)

        return () => { clearInterval(rotate); }
    }, [itemLength, viewIndex])
    
    useEffect(()=>{
        if(carouselRef.current[viewIndex]) {
            carouselRef.current.map((ref, index) => {
                if(index === viewIndex) {
                    carouselRef.current[viewIndex].classList.remove("fade-out");
                    carouselRef.current[viewIndex].classList.add("fade-in");
                } else {
                    carouselRef.current[index].classList.remove("fade-in");
                    carouselRef.current[index].classList.add("fade-out");
                    carouselRef.current[viewIndex].classList.remove("fade-out");
                }
            })
        }
    }, [viewIndex])

    const navigationHandler = (number) => {
        setViewIndex(number);
    }

    const navigate = [];
    for(let i = 0; i < itemLength; i++) {
        const dot = (<span key={i} className={i === viewIndex ? "dot active" :"dot"} onClick={()=>{navigationHandler(i)}}></span>)
        navigate.push(dot);
    }

    return (
        <div className="carousel">
            <div className="items">
                {items}
            </div>
            <div className="dots">{navigate}</div>
        </div>
    )
}

export default Carousel;