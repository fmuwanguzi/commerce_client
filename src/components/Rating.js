import React from 'react'

function Rating({ value, text, color}) {
    return (
        <div className="rating">
            {/* Each span is a star -  hence 5 */}
            <span>
                <i style={{ color }} 
                // ternary -if statement to set up how the stars will appear
                className={ 
                    value >= 1 
                    ? 'fas fa-star' //this is full star
                    :value >= 0.5
                        ? 'fas fa-star-half-alt' //this is half start
                        : 'far fa-star'//this makes sure it empty
                }>

                </i>
            </span>

            <span>
                <i style={{ color }} 
                // ternary -if statement to set up how the stars will appear
                className={ 
                    value >= 2 
                    ? 'fas fa-star' //this is full star
                    :value >= 1.5
                        ? 'fas fa-star-half-alt' //this is half start
                        : 'far fa-star'//this makes sure it empty
                }>

                </i>
            </span>

            <span>
                <i style={{ color }} 
                // ternary -if statement to set up how the stars will appear
                className={ 
                    value >= 3 
                    ? 'fas fa-star' //this is full star
                    :value >= 2.5
                        ? 'fas fa-star-half-alt' //this is half start
                        : 'far fa-star'//this makes sure it empty
                }>

                </i>
            </span>

            <span>
                <i style={{ color }} 
                // ternary -if statement to set up how the stars will appear
                className={ 
                    value >= 4 
                    ? 'fas fa-star' //this is full star
                    :value >= 3.5
                        ? 'fas fa-star-half-alt' //this is half start
                        : 'far fa-star'//this makes sure it empty
                }>

                </i>
            </span>

            <span>
                <i style={{ color }} 
                // ternary -if statement to set up how the stars will appear
                className={ 
                    value >= 5 
                    ? 'fas fa-star' //this is full star
                    :value >= 4.5
                        ? 'fas fa-star-half-alt' //this is half start
                        : 'far fa-star'//this makes sure it empty
                }>

                </i>
            </span>

            {/* if text exists then add it if it dones't don't add it */}
            <span>{text && text}</span>
        </div>
    )
}

export default Rating
