import React, { useState} from 'react';
import { validateEmail } from './Main'


function Contact() {
    const [formState, setFormState] = useState({ name:'',email:'',message:''});
    const[errorMessage, setErrorMessage] =useState('');
    const{name,email,message} = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid)
            if (!isValid) {
                setErrorMessage('email is invalid');
            }else{
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]:e.target.value});
            console.log('Handle Form, formState');
        }
    }

        return(
            <section className= 'landing-grid'>
                <form className='contact' onSubmit={handleSubmit}>
                    <h1>Contact me</h1>
                    
                    <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange}></input>
                    </div>
                    <br></br>
                    
                    <div>
                    <label htmlFor='email'>Email-address</label>
                    <input type='text' name='email' defaultValue={email} onBlur={handleChange}></input>                  
                      </div>
                      <br></br>
                    
                    <div>
                    <label htmlFor='message'>Message Here</label>
                    <textarea name='message' rows='5'defaultValue={message} onBlur={handleChange}></textarea>                      
                     </div>
                     {errorMessage && (
                         <div>
                             <p className='error-text'>{errorMessage}</p>
                         </div>
                     )}
                
                    <input type='submit' value='Submit'></input>
                </form>
               

               
            </section>
        )
    }

export default Contact;