import React from 'react'
import PropTypes from 'prop-types'
import '../assets/QuestionCount.css'

function QuestionCount(props) {
  return (
    <div className='questionCount'>
      Question <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
  )
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

export default QuestionCount
