import React, { useState } from 'react'
import { Button, Input, Modal } from 'antd'
import PropTypes from 'prop-types'

export function ModalWindow (props) {
  const { btnText, title, onAddItem, descriptionValue } = props

  const [inputValue, setInputValue] = useState(descriptionValue ? descriptionValue: '')
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const onHandleChange = (evt) => {
    setInputValue(evt.target.value)

    const {onChange} = props
    onChange(evt)
  }

  const onAdd = () => {
    onAddItem(inputValue)

    setVisible(false)
    setInputValue('')
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>{btnText}</Button>

      <Modal
        visible={visible}
        title={title}
        onOK={onAdd}
        onCancel={handleCancel}
        footer={[<Button key={title} onClick={onAdd}>Принять</Button>]}
      >
        <Input value={inputValue} onChange={onHandleChange}/>
        <>
          {props.children}
        </>
      </Modal>
    </>
  )
}

ModalWindow.propTypes = {
  descriptionValue: PropTypes.string,
  children: PropTypes.element,
  btnText: PropTypes.string,
  title: PropTypes.string,
  onAddItem: PropTypes.func,
  onChange: PropTypes.func,
}
