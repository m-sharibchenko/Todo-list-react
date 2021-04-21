import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Input, Modal } from 'antd'

export function AddProjectCmp (props) {
  const [inputValue, setInputValue] = useState('')
  const [visible, setVisible] = useState(false)

  const onHandleChange = (evt) => {
    setInputValue(evt.target.value)
  }

  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const onAddProject = () => {
    const { onAddProject } = props
    onAddProject(inputValue)

    setVisible(false)
    setInputValue('')
  }

  return (
    <>
      <Button onClick={showModal}>+ Add project</Button>

      <Modal
        visible={visible}
        title="Добавление проекта"
        onOK={onAddProject}
        onCancel={handleCancel}
        footer={[<Button key='addProject' onClick={onAddProject}>Добавить</Button>]}
      >
        <Input value={inputValue} onChange={onHandleChange}/>
        <div>
          <div>Выбрать цвет</div>
          <div>Выбрать формат отображения</div>
        </div>
      </Modal>
    </>
  )
}

AddProjectCmp.propTypes = {
  onAddProject: PropTypes.func
}
