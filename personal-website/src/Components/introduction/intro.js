import './intro.css';


function Intro(){


     return(
        <div>
        <div className='intro-name'>
            <div className='image-wrapper'>
            <img src={require('./img.jpeg')} alt="logo" />
            </div>
            <div className='text'>
            <h1>hi! i'm lauren</h1>
            </div>
        </div>
        </div>
    )
}export default Intro