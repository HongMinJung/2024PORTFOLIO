import React from 'react';
import html from '../assets/images/Html5.png';
import css from '../assets/images/Css3.png';
import scss from '../assets/images/Scss.png';
import js from '../assets/images/JavaScript.png';
import jq from '../assets/images/jQuery.png';
import react from '../assets/images/React.png';
import ps from '../assets/images/Photoshop.png';
import al from '../assets/images/lIIstrator.png';
import figma from '../assets/images/Figma.png';
import git from '../assets/images/Github.png';
import notion from '../assets/images/Notion.png';

export default function Skill() {
  return (
    <div className='icon_container'>
      <div className='icon_box'>
        <img className='icon' src={html} alt='html_로고' />
        <img className='icon' src={css} alt='css_로고' />
        <img className='icon' src={scss} alt='scss_로고' />
        <img className='icon' src={js} alt='js_로고' />
        <img className='icon' src={jq} alt='jq_로고' />
        <img className='icon' src={react} alt='react_로고' />
        <img className='icon' src={ps} alt='ps_로고' />
        <img className='icon' src={al} alt='al_로고' />
        <img className='icon' src={figma} alt='figma_로고' />
        <img className='icon' src={git} alt='github_로고' />
        <img className='icon' src={notion} alt='notion_로고' />
      </div>
    </div>
  )
}
