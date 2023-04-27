import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const Stars = ({ note }) => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate)
    }

    return(
        <div className='Stars'>
          <Rating
            onClick={handleRating}
            ratingValue={rating}
            fillColor='#FF6060'
            /* Available Props */
          />
        </div>
    )
}

export default Stars;