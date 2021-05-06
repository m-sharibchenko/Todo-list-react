import React from 'react'
import { Header, ContentLayout, Sider } from './layout'
import { Layout } from 'antd'
import './style.css'

export function Todos () {
  return (
    <Layout style={{ minHeight: '100vh' }} className="Application">
      <Header/>

      <Layout className="sider-and-content">
        <Sider/>

        <ContentLayout/>
      </Layout>
    </Layout>
  )
}
