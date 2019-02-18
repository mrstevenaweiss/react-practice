import React, {Component} from 'react'
import NavDrawer from '../components/NavDrawer'

class Template extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Turing</h1>
          <NavDrawer />
        </header>
        <main>
          {this.props.children}
        </main>
      </div>

    )
  }
}

export default Template
