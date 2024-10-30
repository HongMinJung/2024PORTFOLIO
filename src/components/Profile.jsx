import React from 'react';
import Aboutme from './Aboutme';
import Skill from './Skill';
// import Education from './Education';
// import Career from './Career';

export default function Profile() {
  return (
    <section id='proflie'>
      <div className='proflie_inner'>
        <h2 className='inner_title'>PROFLIE</h2>

        <div className='proflie_wrap'>
          {/* about me */}
          <article className='proflie_box s1'>
            <p className='box_name'>ABOUT ME</p>
            <Aboutme />
          </article>

          {/* Skill */}
          <article className='proflie_box s2'>
            <p className='box_name'>SKILL</p>
            <Skill />
          </article>

          {/* Education */}
          {/* <article className='proflie_box s3'>
            <p className='box_name'>EDUCATION</p>
            <Education />
          </article> */}

          {/* Career */}
          {/* <article className='proflie_box s4'>
            <p className='box_name'>CAREER</p>
              <Career />
          </article> */}
        </div>
      </div>
    </section>
  )
}
