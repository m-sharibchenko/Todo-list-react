import React from 'react'
import { Layout } from 'antd'
import './style.css'
import { ContentLayout, Header, Sider } from './layout'

export function UserProfile () {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header/>

      <Layout className="user-page__content">
        <Sider/>

        <ContentLayout/>
      </Layout>
    </Layout>
  )
}