import React, { useEffect, useRef} from 'react';
import { siteText } from '../contents';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function Project() {
  const horizontalRef = useRef (null);
  const sectionsRef = useRef ([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal =  horizontalRef.current;
    const sections =  sectionsRef.current;

    let scrollTween = gsap.to(sections, {
      xPercent: -120 * (sections.length -1),
      ease: 'none',
      scrollTrigger: {
        trigger: horizontal,
        start: "top 56px",
        end: () => "+=" + horizontal.offsetWidth,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1
      },
    });

    return () => {
      scrollTween.kill();
    }

  })

  return (
    <section id='project' ref={horizontalRef}>
      <div className='project_inner'>
        <div className='project_title'>PROJECT</div>
        <div className='project_wrap'>
          {/* Project*/}
          {siteText.map ((project,key) => (
            <article className={`project_box s${key + 1}`} key={key} ref={(el) => (sectionsRef.current[key] = el)}>
              <a href={project.code} target='_blank' className='img' rel='noopener noreferrer'>
                <img src={project.img} alt={project.name} />
              </a>
              <h3 className='title'>{project.title}</h3>
              <p className='day'>{project.day}</p>
              <p className='dec'>{project.desc}</p>
              <a href={project.view} target='_blank' className='site' rel='noopener noreferrer'>사이트 보러가기</a>
            </article>
            ))}
        </div>
      </div>
    </section>
  )
}
