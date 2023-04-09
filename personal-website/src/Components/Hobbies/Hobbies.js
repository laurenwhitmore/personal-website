import './Hobbies.css';
import React from 'react';
import Fade from 'react-reveal/Fade';


function Hobbies(){


     return(
        <div id = "Hobbies">
            <Fade top>
                <div className='hobbies-container'>
                    <div className= 'description'>
                        <h1>some things i LOVE</h1>
                        <ul className = "hobbyList">
                            <li>
                                all sports! my current favorite is triathlon as i am training for an ironman this summer
                            </li>
                            <li>
                                listening to music
                            </li>
                            <li>
                                trying new hobbies, currently loving knitting and painting pottery
                            </li>
                            <li>
                                reading -- check out my<a style={{ color: 'blue' }} href="https://www.goodreads.com/user/show/41687658-lauren" target="_blank" rel="noopener noreferrer">goodreads</a>
                            </li>
                        </ul>

                    </div>
                    <div className='playlist'>
                        <h3>currently listening to ...</h3>
                        <iframe id = "playlist" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/ca/playlist/sem-2/pl.u-8aAVVJafoavVYbm"></iframe>
                    </div>
                </div>
            </Fade>
        </div>
    )
}export default Hobbies