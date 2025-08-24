import React, { useState } from 'react'

export default function Heart() {
    const [isLave, setIsLave] = useState(false);
    const laveToggle = () => setIsLave(!isLave);


    return (
        <>
            {
                isLave ?
                    <i className="fa-solid fa-heart text-purple-500 text-2xl cursor-pointer me-2" onClick={laveToggle}></i>
                    :
                    <i className="fa-regular fa-heart text-purple-500 text-2xl cursor-pointer me-2" onClick={laveToggle}></i>
            }
        </>
    )
}
