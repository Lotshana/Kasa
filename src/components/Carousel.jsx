import { useState } from 'react'

const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="CarouselImg">
            <div onClick={goPrevious}><i class="fa-sharp fa-regular fa-chevron-left"></i></div>
            <div onClick={goNext}><i class="fa-sharp fa-regular fa-chevron-right"></i></div>
            <div className="Images"></div>
        </div>
    )
}

export default Carousel;