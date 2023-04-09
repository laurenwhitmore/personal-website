import './about.css'
function About(){
    return(
      <div >
       <div className = 'about-info'>
        <span>
           <div className='about'>
            <div className ='header'>
                 <h1>about me</h1>
            </div>
            <div className='about-text'>
                <p>I  am a third-year software engineering student at Western Univeristy. I grew up in Calgary </p>
            </div>
               
               
           </div>
           <div className ='image'>
               <img 
               src={require('./img.jpeg')} 
               alt="logo" 
               />
           </div>
           </span>
       </div>
 
      </div>
   )
}export default About