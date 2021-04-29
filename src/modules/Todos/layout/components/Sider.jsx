import React from 'react'
import { Layout } from 'antd'
import { SiderMenu } from '../../components/Layout/SiderMenu'

const SiderAntd = Layout.Sider

export function Sider () {
  return (
    <SiderAntd className="Sider">
      <SiderMenu/>
    </SiderAntd>
  )
}
