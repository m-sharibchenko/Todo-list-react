import React, { useState } from 'react'
import { Button, Input, Modal } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import './style.css'
import PropTypes from 'prop-types'

export function ModalWindow (props) {
  const { btnType, styleClass, btnText, title, onAddItem, descriptionValue } = props

  const [inputValue, setInputValue] = useState(descriptionValue ? descriptionValue : null)
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
      <Button
        type={btnType}
        onClick={showModal}
        className={`modal__btn-show ${styleClass}`}
      >
        {btnText || (<EditOutlined style={{ fontSize: '1rem'}}/>)}
      </Button>

      <Modal
        visible={visible}
        title={title}
        onOK={onAdd}
        onCancel={handleCancel}
        footer={[
          <Button type="primary" key={title} onClick={onAdd} disabled={!inputValue}>
            Принять
          </Button>
        ]}
      >
        <Input
          value={inputValue}
          placeholder="Введите название"
          onChange={onHandleChange}
          className="modal__input-item-name"
        />
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
  btnType: PropTypes.string,
  styleClass: PropTypes.string,
  title: PropTypes.string,
  onAddItem: PropTypes.func,
  onChange: PropTypes.func,
}
