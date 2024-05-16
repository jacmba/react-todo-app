import { PropTypes } from 'prop-types'
import './Counter.css'

const Counter = ({increment, incrementCounter, decrementCounter}) => {

  const inc = () => {
    incrementCounter(increment)
  }

  const dec = () => {
    decrementCounter(increment)
  }

  return (
    <div className="Counter">
      <h2>My counter by {increment}</h2>
      <button className="counterButton" onClick={inc}>
        Increment
      </button>
      <button className="counterButton" onClick={dec}>
        Decrement
      </button>
    </div>
  )
}

Counter.propTypes = {
  increment: PropTypes.number
}

Counter.defaultProps = {
  increment: 1
}

export default Counter