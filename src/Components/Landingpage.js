import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render() {
        return(
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className= "landing-grid">
                <Cell col={12}>
                    <img src= 'https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg'
                        alt='avatar'
                        className='avatar-img'
                         />

                         <div className='banner-text'>
                             <h1>Developer In Training
                             </h1>
                        <hr/>
                        <p> Html/Css | Bootstrap | JavaScript | React | MongoDB</p>
                         <div className='social-links'>
                             <a href='https://github.com/ERAllen94'>
                             <i className='fa fa-github-square' aria-hidden='true'/>
                             </a>

                             <a href='https://www.facebook.com/evan.allen.984/'>
                             <i className='fa fa-facebook-square' aria-hidden='true'/>
                             </a>

                             <a href='https://www.instagram.com/evan.allen.984/'>
                             <i className="fa fa-instagram" aria-hidden="true"></i>
                             </a>

                         </div>
                         </div>
                </Cell>
            </Grid>
        </div>
        )
    }
}

export default Landing;