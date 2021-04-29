import PropTypes from 'prop-types'
import { ACTIVE_TODO_STATUS, DONE_TODO_STATUS } from './modules/Todos/constants/todoStatus'
import { FIRST_PRIORITY, SECOND_PRIORITY, THIRD_PRIORITY } from './modules/Todos/constants/todoPriority'

export const priorityPropTypes = PropTypes.oneOf([FIRST_PRIORITY, SECOND_PRIORITY, THIRD_PRIORITY])

export const todoPropTypes = PropTypes.shape({
    id: PropTypes.string,
    status: PropTypes.oneOf([ACTIVE_TODO_STATUS, DONE_TODO_STATUS]),
    description: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    project: PropTypes.string,
    priority: priorityPropTypes
})

export const todosPropTypes = PropTypes.arrayOf(todoPropTypes)

export const projectPropTypes = PropTypes.shape({
    id: PropTypes.string,
    projectName: PropTypes.string,
    todos: PropTypes.arrayOf(PropTypes.string)
})

export const projectsPropTypes = PropTypes.arrayOf(projectPropTypes)

