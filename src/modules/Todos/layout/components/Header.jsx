import React from 'react'
import '../style.css'
import { Layout } from 'antd'
import { HeaderMenu } from '../../components/Layout/HeaderMenu'

const HeaderAntd = Layout.Header

export function Header () {
  return (
    <HeaderAntd className="Header">
      <HeaderMenu/>
    </HeaderAntd>
  )
}
