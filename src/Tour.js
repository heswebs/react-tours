import React, {useState} from 'react'

const Tour = ({id, image, info, price, name, removeTour})=> {
    const [readMore, setReadMore] = useState(false);
    return (
        <article className="tour">
            <figure>
                <img src={image} alt={name} />
            </figure>
            <div className="tour__info">
                <h4 className="tour__name">{name}</h4>
                <h4 className="tour__price">${price}</h4>
                <p className="tour__description">{readMore?info:info.substring(0,200)}...
                    <button className="tour__btn-read" onClick={()=>setReadMore(!readMore)}>{readMore?'show less':'read more'}</button>
                </p>
                <button className="tour__btn-delete" onClick={()=>removeTour(id)}>not interested</button>
            </div>
        </article>
    )
}

export default Tour
