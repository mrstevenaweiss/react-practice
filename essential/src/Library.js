import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

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

// THE RIGHT TYPES ARE PROVIDED
Library.propTypes = {
  books: PropTypes.array
}

Book.propTypes = {
  title: propTypes.string,
  author: propTypes.string,
  pages: propTypes.number,
  freeBookMark: propTypes.bool
}

export default Library
