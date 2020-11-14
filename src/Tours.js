import React from 'react';
import Tour from './Tour';

const Tours = ({tours, removeTour})=> {
    return (
        <section className="tours">
            <div className="tours__title">
                <h2>our tours</h2>
                <span className="underline"></span>
            </div>
            {tours.map((tour)=>{
                return (
                    <Tour key={tour.id} {...tour} removeTour={removeTour} />
                )
            })}
        </section>
    )
}

export default Tours
