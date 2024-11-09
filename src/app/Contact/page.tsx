import React from 'react'
import Header from '../Header/page'
import Css from "./contact.module.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from '../Footer/page';

const Contact = () => {
  return (
    <div>
      <Header/>
      <div className={Css.contact}>
        <form action=""className={Css.contactleft}>
          <div>
            <h2 className={Css.h2}>Get in touch</h2>
            <hr className={Css.hr}/>
          </div>
          <input type="text" name='name'placeholder='Your Name' className={Css.input}required />
          <input type="email"name='email'placeholder='Your Email'className={Css.input} required />
          <textarea name="message" placeholder='Your Message'className={Css.input2} required></textarea>
          <button type='submit' className={Css.button}>Submit</button>
        </form>
      </div>
      <div>
        <p className={Css.p}>Email:kanwal0155@gmail.com</p>
        <p className={Css.p2}>connect with me:</p>
        <div className={Css.sociallinks}>
          <div className={Css.icon}>
          <i className='fab fa-linkedin'></i>
          <a href="https://www.linkedin.com/in/saniya-kanwal-72582a250/" target='_blank'>LinkedIn</a>
           <i className='fab fa-instagram'></i>
          <a href="https://www.instagram.com/saniya_kanwal_/"target='_blank'>Instagram</a>
          <i className='fab fa-github'></i>
          <a href="https://github.com/Saniyakanwal" target='_blank'>github</a>
        </div>
        </div>
      </div>
      <Footer/>
      </div>
  )
}

export default Contact
