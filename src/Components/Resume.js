import React from 'react';
import LinkResume from '../Components/Evan-Allen-Resume.pdf';

function Resume () {
        return(
            <section className="landing-grid">
            <article id="Resume">
              <div className="content-title">
                <h2>Resume</h2>
              </div>
              <div className="content-body">
                  <h3>Front-End Skills</h3>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                <p>
                  click here for my resume <a href={LinkResume} download="file:///C:/Users/evana/OneDrive/Desktop/Evan-Allen-Resume.pdf" target="_blank" rel="noopener noreferrer">download</a>.
               </p>
              </div>
            </article>
          </section>
        )
    }


export default Resume;