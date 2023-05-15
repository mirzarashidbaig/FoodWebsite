/* eslint-disable react/prop-types */


const Header = ({
    onchange,
    value,
    SearchBtn

}) => {
  return (
    <>
    <div className="header">
            <div className="heading">
                <h1>Search for Your Favaorite Food And Get Receipy</h1>
            </div>
            <div className="inputbox">
                <input type="search" name="" id="" value={value} onChange={onchange}/>
                <button className="search" onClick={SearchBtn}> Search</button>
            </div>

            
        </div>
    </>
  )
}

export default Header
