import Link from 'next/link'
import React from 'react'
import CssStyle from './header.module.css'

const Header = () => {
  return (
    <div className={CssStyle.div}>
      <h1 className={CssStyle.h1}>Saniya Kanwal</h1>
      <nav className={CssStyle.nav}>
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/Contact">Contact</Link>
      </nav>
      <button className={CssStyle.button}>Download</button>
    </div>
  )
}

export default Header
