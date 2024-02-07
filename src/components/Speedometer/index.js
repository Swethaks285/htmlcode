// Write your code here
import {Speedometer} from 'react'

class Speedometers extends Speedometer {
   state={count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt=""
        />
        <p>Speed is 0mph</p>
        <p>
          min limit is {count}mph max limit is {count}mph
        </p>
        <div>
          <button type="button" onClick={this.onIncrement}>
            Accelarate
          </button>
          <button type="button" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometers
