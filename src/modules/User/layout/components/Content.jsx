import React from 'react'
import { Layout } from 'antd'
import { UserContent } from '../../components/Layout/Content'

const ContentAntd = Layout.Content

export function ContentLayout () {
  return (
    <ContentAntd className="user__content">
      <UserContent/>
    </ContentAntd>
  )
}
