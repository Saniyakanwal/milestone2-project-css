import React from 'react'
import Header from '../Header/page'
import Image from 'next/image'
import Style from "./about.module.css"
import Footer from '../Footer/page'

const About = () => {
  return (
    <div>
      <Header/>
      <div className={Style.div}>
      <div className={Style.about}>
        <h1 className={Style.h1}>About Me</h1>
        <p className={Style.p}>  Hi! I'm a front-end developer skilled in HTML, CSS, and TypeScript, currently diving deeper into Next.js.
            I love crafting beautiful, responsive websites and learning new web technologies."I approach each project with a mix of creativity and analytical thinking. I enjoy the process of transforming ideas into polished, user-friendly <br /> <br />
            "Learning new technologies and frameworks is a big part of why I enjoy web development. I believe that staying adaptable is key to a successful career in tech, and I’m excited to keep exploring and building on my skill set as the field evolves."

        </p>
      </div>
      <div className={Style.image}>
        <Image src="/Images/about.png" alt='about pic' height={100} width={350}/>
        </div>
      </div>
      <br />
      <br />
      <Footer/>
    </div>
  )
}

export default About
