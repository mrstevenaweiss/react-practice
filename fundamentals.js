// The Basics.  
// 
// Outside of JSX, regular Javascript/ES6 can be written.
// Keep STATE (useful data) in parent components. 
// Pass down STATE from parent. 
//  Receive STATE as properties (PROPS).  
In previous challenges, you learned how to inject JavaScript code into JSX code using curly braces, { }, for tasks like accessing props, passing props, accessing state, inserting comments into your code, and most recently, styling your components. These are all common use cases to put JavaScript in JSX, but they aren't the only way that you can utilize JavaScript code in your React components.

You can also write JavaScript directly in your render methods, before the return statement, without inserting it inside of curly braces. This is because it is not yet within the JSX code. When you want to use a variable later in the JSX code inside the return statement, you place the variable name inside curly braces.



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


// add unique key ids
const renderFrameworks = frontEndFrameworks.map((item) =>
  <li key={item+1}>{item}</li>
);

