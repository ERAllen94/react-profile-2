import React from 'react';
import budgetmaster from '../images/budget-master.png';
import youeat from '../images/U_wanna_eat.PNG'
import trackt from '../images/Trackt.png'
import notetaker from '../images/note-taker.PNG'
import { Grid, Cell} from 'react-mdl';

    function Project() {
    
        return(
           <Grid className='project' >
            <Cell col={6}>
                <a href="https://sirubu.github.io/budget-master/"><div ></div>
          <img src={budgetmaster} style={{width: '75%'}} alt='bmaster' href=''></img>
        </a>
          <a href='https://github.com/SirUbu/budget-master'>
        <i className='fa fa-github-square' aria-hidden='true'/>
          </a>
        </Cell>

            <Cell col={6}>
                <a href="https://secret-fortress-68356.herokuapp.com/"><div></div>
            <img src={youeat} style ={{width: '70%'}} alt='eat'></img>
            </a>
            <a href='https://github.com/ChazzKreutzkamp/recipes-r-us-group-project-2'>
        <i className='fa fa-github-square' aria-hidden='true'/>
          </a></Cell>

            <Cell col={6}>
                <a href="https://stark-scrubland-31176.herokuapp.com/"><div></div> 
            <img src={notetaker} style={{width:'70%'}} alt='rbuddy'></img>
          </a>
            <a href='https://github.com/ERAllen94/Note-Taker'>
        <i className='fa fa-github-square' aria-hidden='true'/>
            </a>
            </Cell>
           
           <Cell col={6}>
               <a href='https://fierce-basin-22098.herokuapp.com/'><div></div>
           <img src={trackt} style ={{width: '70%'}} alt='planning'></img>
           </a> 
           <a href='https://github.com/heather-everton/trackt'>
        <i className='fa fa-github-square' aria-hidden='true'/>
           </a>
           </Cell>
            </Grid>
            
            )
        }
        
        
        export default Project;
       