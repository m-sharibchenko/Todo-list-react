import React from 'react'
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    }
  },
};

export function UploadFile () {
  return (
    <Upload {...props}>
      <Button
        type="link"
        icon={<UploadOutlined />}
      >
        Click to Upload
      </Button>
    </Upload>
  )
}