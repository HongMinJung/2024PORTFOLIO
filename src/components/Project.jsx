import React from 'react';
import { siteText } from '../contents';


export default function Project() {
  return (
    <section id='project'>
      <div className='project_inner'>
        <div className='project_title'>PROJECT</div>
        <div className='project_wrap'>
          {/* Project 01 */}
          {siteText.map ((project,key) => (
            <article className={`project_box s${key + 1}`} key={key}>
              <span className='num'>{project.num}</span>
              <a href={project.code} target='_blank' className='img' rel='noreferrer'>
                <img src={project.img} alt={project.name} />
              </a>
              <h3 className='title'>{project.title}</h3>
              <p className='dec'>{project.desc}</p>
              <a href={project.view} target='_blank' className='site' rel='noreferrer'>View</a>
            </article>
            ))}
        </div>
      </div>
    </section>
  )
}
