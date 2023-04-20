import { useState } from 'react'

const Carousel = ({slides}) => {
    const [currentIndex, setCurrentUser] = useState(0);
    return (
        <div className="CarouselImg">
            <div>
                <i class="fa-sharp fa-regular fa-chevron-left"></i>
                <i class="fa-sharp fa-regular fa-chevron-right"></i>
            </div>
            <div className="Images"></div>
        </div>
    )
}

export default Carousel;