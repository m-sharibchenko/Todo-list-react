import React from 'react'
import { Layout } from 'antd'
import { UserSider } from '../../components/Layout/Sider'

const SiderAntd = Layout.Sider

export function Sider () {
  return (
    <SiderAntd className="user__sider">
      <UserSider/>
    </SiderAntd>
  )
}