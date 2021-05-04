import React from 'react'
import '../style.css'
import { Layout } from 'antd'
import { SettingHeader } from '../../components/Layout/Header'

const HeaderAntd = Layout.Header

export function Header () {
  return (
    <HeaderAntd className="user__header">
      <SettingHeader/>
    </HeaderAntd>
  )
}
