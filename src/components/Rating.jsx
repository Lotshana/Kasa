const Stars = ({ note }) => {
  const Star = [1, 2, 3, 4, 5];

    return(
        <div className='Stars'>
          {
            Star.map((item) =>
            item <= note ?
            <i key={`${item}`} className='fa-solid fa-star orange-star'></i>
            :
            <i key={`${item}`} className='fa-solid fa-star grey-star'></i>
            )
          }
        </div>
    )
}

export default Stars;