// todo: add common modal component (with common onOk, onCancel, title etc. from props)
//  visible state is state in common component
//  add {props.children} for adding custom content
//  and use it when it is needed


import { Button, Input, Modal } from 'antd'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export function ModalWindow (props) {
  const { btnText, title, onAddItem } = props

  const [inputValue, setInputValue] = useState('')
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const onHandleChange = (evt) => {
    setInputValue(evt.target.value)
  }

  const onAdd = () => {
    onAddItem(inputValue)

    setVisible(false)
    setInputValue('')
  }

  return (
    <>
      <Button onClick={showModal}>{btnText}</Button>

      <Modal
        visible={visible}
        title={title}
        onOK={onAdd}
        onCancel={handleCancel}
        footer={[<Button key={title} onClick={onAdd}>Добавить</Button>]}
      >
        <Input value={inputValue} onChange={onHandleChange}/>
        {props.children}
      </Modal>
    </>
  )
}

ModalWindow.propTypes = {
  children: PropTypes.element,
  btnText: PropTypes.string,
  title: PropTypes.string,
  onAddItem: PropTypes.func
}
