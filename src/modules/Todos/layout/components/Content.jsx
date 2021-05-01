import React from 'react'
import { Layout } from 'antd'
import { Content } from '../../components/Layout/Content'

const ContentAntd = Layout.Content

export function ContentLayout () {
  return (
    <ContentAntd className="Content">
      <Content/>
    </ContentAntd>
  )
}