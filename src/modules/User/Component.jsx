import React from 'react'
import { Layout } from 'antd'
import { ContentLayout, Header, Sider } from './layout'

const Content = Layout.Content

export function UserProfile () {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header/>

      <Content style={{ padding: '64px 50px 0 50px' }}>
        <Layout>
          <Sider/>

          <ContentLayout/>
        </Layout>
      </Content>

    </Layout>
  )
}