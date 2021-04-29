import React from 'react'
import { Header, ContentLayout, Sider } from './layout'
import { Layout } from 'antd'

export function Todos () {
  return (
    <Layout style={{ minHeight: '100vh' }} className="Application">
      <Header/>

      <Layout>
        <Sider/>

        <Layout>
          <ContentLayout/>
        </Layout>

      </Layout>
    </Layout>
  )
}
