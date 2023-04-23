import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInput = event => {
    this.setState({inputPhrase: event.target.value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="main-bg-container">
        <div className="app-container">
          <div className="image-container">
            <img
              className="image"
              alt="letters calculator"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            />
          </div>
          <div className="function-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label className="label-text" htmlFor="Phrase">
                Enter the phrase
              </label>
              <br />
              <input
                className="input-box"
                type="text"
                id="Phrase"
                placeholder="Enter the phrase"
                onChange={this.onChangeInput}
                value={inputPhrase}
              />
            </div>
            <div className="count-container">
              <p className="count-text">No.of letters: {inputPhrase.length}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
