import { useRef, useState, useEffect } from 'react'

const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const setBackground = () => {
        const element = ref.current;
        element.style.backgroundImage = `url('${slides[currentIndex]}')`;
    };

    useEffect(() => {
        setBackground();
    }, [setBackground]);

    const goPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
        setBackground();
    };

    const goNext = () => {
        setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
        setBackground();
    };

    return (
        <div className="CarouselImg">
            {slides.length !== 1 ?
                <div>
                    <div onClick={goPrevious}><i className="fa-solid fa-chevron-up left"></i></div>
                    <div onClick={goNext}><i className="fa-solid fa-chevron-up right"></i></div>
                </div>
                :
                " "
            }
            <div ref={ref} className="Images"></div>
            <p className="indexImg">{currentIndex + 1}/{slides.length}</p>
        </div>
    )
}

export default Carousel;