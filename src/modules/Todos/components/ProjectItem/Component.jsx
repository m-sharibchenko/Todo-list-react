import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { projectPropTypes } from '../../../../propTypes'
import { ModalWindow } from '../../../../components/Modal'
import './style.css'

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
    <div className="project">
      <div className="project__link">
        <Link to={`${url}/${project.id}`}>
          {project.projectName.length < 20
            ? project.projectName
            : `${project.projectName.substring(0, 16)}...` }
        </Link>
      </div>


      <ModalWindow
        onAddItem={onEditProject}
        btnType="text"
        styleClass="btn-edit"
        title="Изменение"
        onChange={onHandleChange}
        descriptionValue={item.projectName}
      >
        {/*<div>Изменить формат отображения</div>*/}
      </ModalWindow>
    </div>
  )
}

ProjectItemCmp.propTypes = {
  url: PropTypes.string,
  item: projectPropTypes,
  onEditProject: PropTypes.func,
}
