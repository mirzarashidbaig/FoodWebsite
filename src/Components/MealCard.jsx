/* eslint-disable react/prop-types */


const MealCard = ({data,RecipyBtn}) => {

    const Recipy =(id)=>{
        RecipyBtn(id)
    }

  return (
    <>
    {
        (!data)? <h1>Sorry</h1>:
        data.map((cur)=>{
            return(
                <>
                <div className="card" key={cur.idMeal} >
                <div className="cardhead">
                    <img src={cur.strMealThumb} alt=""/>
                </div>
                <div className="card_body">
                    <h1>{cur.strMeal}</h1>
                </div>
                <div className="btn">
                    <button className="get_recipy" onClick={()=>Recipy(cur.idMeal)}>Get Recipy</button>
                </div>
            </div>
        </>
            )
        })
    }
    </>
  )
}

export default MealCard
