/* eslint-disable react/prop-types */
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

const InstDiv = ({ sendData, btnClose }) => {

    const [item, Setitems] = useState("");
    const close = () => {
        btnClose()
    }

    if(sendData!==""){

        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${sendData}`)
            .then((res) => res.json())
            .then(data => {
                Setitems(data.meals[0])
            })
    }


    return (
        <>
            <div className="recepyshow show">

                <div className="head" >
                    <div className="icon">
                        <IoMdClose className='iconClose' onClick={close} />
                    </div>
                    <h1></h1>
                    <div className="image">
                        <img src={item.strMealThumb} alt="" />
                    </div>

                    <div className="bodycontent">
                        <h1>{item.strMeal}</h1>

                        <div className="instruc">
                            <h2>Instruction:-</h2>
                            <p>{item.strInstructions}</p>
                        </div>
                    </div>

                    <div className="watch">
                        <button className="watchvid">
                            <a href={item.strYoutube} target='_mirza'>Watch Video</a>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InstDiv
