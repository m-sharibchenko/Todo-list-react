import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { projectPropTypes } from '../../../../propTypes'
import { ModalWindow } from '../../../../components/Modal/Component'

export function ProjectItemCmp (props) {
  const { url, item } = props

  const [project, setProject] = useState(item)

  const onEditProject = () => {
    const {onEditProject} = props
    onEditProject(project)
  }

  const onHandleChange= (value) => {
    setProject(prevState => {
      return {
        ...prevState,
        projectName: value.target.value
      }
    })
  }

  return (
    <>
      <Link to={`${url}/${project.id}`}>{project.projectName}</Link>

      <ModalWindow
        onAddItem={onEditProject}
        btnText="Ed"
        title="Изменение"
        onChange={onHandleChange}
        descriptionValue={item.projectName}
      >
        <div>Изменить формат отображения</div>
      </ModalWindow>
    </>
  )
}

ProjectItemCmp.propTypes = {
  url: PropTypes.string,
  item: projectPropTypes,
  onEditProject: PropTypes.func,
}
