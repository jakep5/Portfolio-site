import React, { Component } from 'react'
import styles from './styles.module.css'
import jQuery from 'jquery'

export default class SkillsSection extends Component {

    componentDidMount() {
        jQuery(document).ready(function($) {
          $("a#scrollSkills").on("click", function(e) {
            e.preventDefault();
            $("body, html").animate({ 
              scrollTop: $( $(this).attr('href') ).offset().top 
            }, 600);
          });
        });
    }

    render() {
        return (
            <div role="wrapper" className={styles.skillsWrapper} id="skills">
                <div role="skillsDisplay" className={styles.skillsHolder}>
                    <h1 className={styles.skillsHeading}>Skills</h1>

                    <img className={styles.img1} src="https://user-images.githubusercontent.com/53489910/71267334-38718980-2342-11ea-83cc-313c0e6e8a25.png" />
                    <img className={styles.img2} src="https://user-images.githubusercontent.com/53489910/71267340-3a3b4d00-2342-11ea-99d1-696d108c0cde.png" />
                    <img className={styles.img3} src="https://user-images.githubusercontent.com/53489910/71267345-3ad3e380-2342-11ea-925d-79ecab828652.png" />
                    
                </div>
                <div role="buttonHolder3" className={styles.buttonHolder3}>
                        <a href="#projects" className={styles.scrollDown} id="scrollSkills" address="true"></a>
                </div>
            </div>
        )
    }
}
