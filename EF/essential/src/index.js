import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

let bookList = [
  {"title": "Hunger", "author": "Roxane Gay"},
  {"title": "The Sun", "author": "Hemingway", "pages": 250},
  {"title": "Animal Farm", "author": "Orwell", "pages": 120},
  {"title": "Cat's Cradle", "author": "Kurt Von", "pages": 200}
]

const Book = ({title="No Title Provided", author= "No Author", pages=0, freeBookMark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} page</p>
      <p>Free Bookmark Today: {freeBookMark ? "yes!" : "no!"}</p>
    </section>
  )
}

const Hiring = () => {
  return (
    <div>
      <p>Hiring! Go to www.library.com/hiring for more info</p>
    </div>
)}

const NotHiring = () => {
  return (
    <div>
      <p>We not though.</p>
  </div>
)}

class Library extends Component {

  static defaultProps = {
    books: [
      { "title": "Tahoe Tales", "author": "chet whitley", "pages": 1000}
    ]
  }

  state = {
    open: true,
    freeBookMark: true,
    hiring: true,
    data: [],
    loading: false
  }

  componentDidMount() {

    this.setState({loading: true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data => data.json())
      .then(data => this.setState({data, loading:false}))
  }

  // componentDidUpdate() {
  //   console.log("the something changed");
  // }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    console.log(this.state);
    const { books } = this.props
    return (
      <div>
        { this.state.hiring  ? <Hiring /> : <NotHiring /> }
        { this.state.loading
          ? "loading"
          : <div>
              {this.state.data.map(product => {
                  return (
                    <div key={product.id}>
                        <h3>Library Product of the Week!</h3>
                        <h4>{product.name}</h4>
                        <img alt={product.name} src={product.image} height={100} />
                    </div>
                  )
              })}
          </div>
        }
        <h1>The Library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map(
          (book, i) => <Book
          key={i}
          title={book.title}
          author={book.author}
          pages={book.pages}
          freeBookMark={this.state.freeBookMark}
          />
      )}
    </div>
    )
  }
}
//
// class FavoriteColorForm extends Component {
//   state = { value: ' '}
//
//   newColor = (e) => this.setState({ value: e.target.value })
//   submit = (e) => {
//     console.log(`new color: ${this.state.value}`);
//     e.preventDefault()
//   }
//
//   render() {
//     console.log(this.state);
//     return (
//       <form onSubmit={this.submit}>
//
//         <label>Favorite Color:
//           <input
//             type="color"
//             onChange={this.newColor}
//             />
//         </label>
//         <button>Submit</button>
//       </form>
//     )
//   }
// }




ReactDOM.render(
    <Library books={bookList} />,
  document.getElementById('root')
)
