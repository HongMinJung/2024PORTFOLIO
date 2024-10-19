import React from 'react';
import {introText} from '../contents';

export default function Intro() {
  return (
    <section id='intro'>
        <div className='intro__inner'>
            <h1 className='top_title'>{introText.title}</h1>

            <div className='lines' aria-hidden='true'>
                <span className='line'></span>    
            </div>

            <div className='bottom_text'>
                <div className='text'>
                    <h4 className='first_text'>{introText.desc[0]}</h4>
                    <p className='second_text'>{introText.desc[1]}</p>
                    <h4 className='third_text'>{introText.desc[2]}</h4>
                </div>
            </div>

        </div>

    </section>
  )
}
