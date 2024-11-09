import Image from "next/image";
import Header from "./Header/page";
import CssStyle from "./page.module.css"
import Footer from "./Footer/page";

export default function() {
  return(
    <div>
      <Header/>
      <div className={CssStyle.div}>
        <div className={CssStyle.para}>
        <h1 className={CssStyle.h1}>"I'm Saniya Kanwal"</h1>
        <h2 className={CssStyle.h2}>"Frontend Enthusiast | HTML, CSS & TypeScript| Currently Learning Next.js"</h2> 
        <button className={CssStyle.button}>View My Work</button>
        </div>
        <div className={CssStyle.img}>
        <Image  src="/Images/front.png" alt="img" height={500} width={700} />
        </div>
        </div>
        <br />
        <Footer/>
      </div>
  )
}