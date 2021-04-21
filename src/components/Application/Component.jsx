import React from 'react'
import { HeaderCmp } from '../Header'
import { Sider } from '../Sider'
import { Layout } from 'antd'
import { ContentCmp } from '../Content'

export function Application () {
  return (
    <Layout style={{ minHeight: '100vh' }}
            className="Application">
      <HeaderCmp/>
      <Layout>
        <Sider/>
        <Layout>
          <ContentCmp/>
        </Layout>
      </Layout>
    </Layout>
  )
}

