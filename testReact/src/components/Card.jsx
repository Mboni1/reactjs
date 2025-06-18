import logo from '../assets/logo.png'


function Card() {
    return(
        <div className="card">
            <img className='card-image' src={logo} alt="logo.png"></img>
            <h2>Football</h2>
            <p>I want to know the transfers news</p>
        </div>
    );
}
export default Card