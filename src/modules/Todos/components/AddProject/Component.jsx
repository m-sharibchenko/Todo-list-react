import React from 'react'
import PropTypes from 'prop-types'
import { ModalWindow } from '../../../../components/Modal'

export function AddProjectCmp (props) {
  const { onAddProject } = props

  const onHandleChange = () => {}

  return (
    <ModalWindow
      onAddItem={onAddProject}
      btnText="+ Новый проект"
      btnType="primary"
      title="Добавление проекта"
      onChange={onHandleChange}
    >
      {/*<div>Выбрать формат отображения</div>*/}
    </ModalWindow>
  )
}

AddProjectCmp.propTypes = {
  onAddProject: PropTypes.func
}
