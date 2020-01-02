import React from 'react'
import PropTypes from 'prop-types'

export default function Task({ categoryId }) {
  return (
    <div>
      <h2>Task</h2>
      <p>id: {categoryId}</p>
    </div>
  )
}
Task.propTypes = {
  categoryId: PropTypes.string
}
Task.defaultProps = {
  categoryId: '1'
}