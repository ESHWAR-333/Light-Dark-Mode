import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    mode: 'Light Mode',
    container: 'container2',
    heading: 'heading2',
    button: 'button2',
  }

  changeMode = () => {
    this.setState(prevState => {
      if (prevState.mode === 'Light Mode') {
        return {
          mode: 'Dark Mode',
          container: 'container1',
          heading: 'heading1',
          button: 'button1',
        }
      }
      return {
        mode: 'Light Mode',
        container: 'container2',
        heading: 'heading2',
        button: 'button2',
      }
    })
  }

  render() {
    const {mode} = this.state
    const {container, heading, button} = this.state
    return (
      <div className="mainContainer">
        <div className={`subContainer ${container}`}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button type="button" className={button} onClick={this.changeMode}>
            {mode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
