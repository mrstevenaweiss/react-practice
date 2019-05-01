
React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time. 

Components mount, then re-render as data is updated.

componentWillMount()
The componentWillMount() method is called before the render()


componentDidMount()
Most web developers, at some point, need to call an API endpoint to retrieve data
The best practice with React is to place API calls or any calls to your server in the lifecycle method
It  is also the best place to attach any event listeners you need to add for specific functionality.
This is called after components are mounted

  componentDidMount() {
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }


componentWillReceiveProps()
called whenever a component is receiving new props. 


shouldComponentUpdate()
a lifecycle method you can call when child components receive new state or props, 
and declare specifically if the components should update or not


componentWillUpdate()

componentDidUpdate()
called whenever a component is receiving new props. 

componentWillUnmount()
