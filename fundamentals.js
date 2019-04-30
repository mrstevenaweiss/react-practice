// create a simple jsx element


// Use state to toggle an element
  toggleVisibility() {
    if (this.state.visibility == false) {
      this.setState({
        visibility: true
      })
    } else {
      this.setState({
        visibility: false
      })
    }
  }



// Increment, Decrement 
  increment() {
    this.setState({
      count: this.state.count+1
    })
  }

  decrement() {
    this.setState({
      count: this.state.count-1
    })    
  }

  reset() {
    this.setState({
      count: 0
    })  
  }


// Controlled Input
handleChange(event) {
    this.setState({
      input: event.target.value
    })
}

<input value={this.state.input} onChange={this.handleChange} />


// Controlled Form
    this.state = {
      input: '',
      submit: ''
    };

handleSubmit(event) {
    // change code below this line
    event.preventDefault()
    this.setState({
      input: '',
      submit: this.state.input
    })

        <form onSubmit={this.handleSubmit}>
          { /* change code below this line */ }
          <input value={this.state.input} onChange={this.handleChange} />
          { /* change code above this line */ }
          <button type='submit'>Submit!</button>
        </form>
        { /* change code below this line */ }
        <h1>{this.state.submit}</h1>




