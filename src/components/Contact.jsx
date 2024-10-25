import React from 'react';
import { contactText } from '../contents';

export default function Contact() {
  return (
    <section id='contact'>
      <div className='contact_inner'>
        <h2 className='contact_title'>CONTACT</h2>
        <div className='contact_link'>
          <div className='link_text'>
            {contactText.map((contact, key) => (
              <div key={key}>
                <a href={contact.link} target='_blank' rel='noreferrer'>{contact.title}</a>
              </div>
            ))}
          </div>
        </div>
        <p className='contact_dec'>Thank you for visiting my site✋🏻</p>
      </div>
    </section>
  )
}
