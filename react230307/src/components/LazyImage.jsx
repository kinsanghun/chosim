import { useEffect, useRef, useState } from "react";


function LazyImage({src}) {
    const [isLoading, setIsLoading] = useState(false);

    const imgRef = useRef(null);
    const observerRef = useRef();

    useEffect(()=>{
        observerRef.current = new IntersectionObserver(intersectionObserver);
        imgRef && observerRef.current.observe(imgRef.current);
    }, [])

    const intersectionObserver = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                observer.unobserve(entry.target);
                setIsLoading(true);
            }
        })
    }
    return (
        <img ref={imgRef} src={isLoading ? src : "lazy.png"} alt="image"/>
    )
}

export default LazyImage;
