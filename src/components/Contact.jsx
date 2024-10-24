import React from 'react';

export default function Contact() {
  return (
    <section id='contact'>
      <div className='contact_inner'>
        <h2 className='contact_title'>CONTACT</h2>
        <div className='contact_form'>
          <form action='#' className='form_box'>
            <fieldset>
              <legend className='form_title'>Please send the email</legend>
              <div className='form'>
                <label for='name' className='blind'></label>
                <input type='text' d="name" placeholder="Name" required autocomplete="off" />
                <label for='phone' className='blind'></label>
                <input type='tel' d="phone" placeholder="Phone" required autocomplete="off" />
                <label for='email' className='blind'></label>
                <input type='email' d="email" placeholder="Email" required autocomplete="off" />
              </div>

              <div className='txt_form'>
                <label for="message" class="blind"></label>
                <textarea name="message" id="message" placeholder="Message" />
              </div>
            </fieldset>
          </form>
          <div class="send_btn">
            <button type="submit">SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </section>
  )
}
