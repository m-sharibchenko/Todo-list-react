import React from 'react'
import '../style.css'
import { HeaderMenu } from '../../components/Layout/HeaderMenu'

export function Header () {
  return (
    <header className="Header">
      <HeaderMenu/>
    </header>
  )
}
