import React, { Component } from 'react'
import { Link } from 'react-router'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render () {
    return (
      <div className='layout'>
        <nav>
          <h1 className='main-logo'>Caleb's Cronuts</h1>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/menu'>Menu</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/locations'>Locations</Link>
            </li>
          </ul>
        </nav>
        <main>
          {this.props.children}
        </main>
        <footer>
          <h2>As seen in</h2>
          <div className='footer-logos'>
            <ul>
              <li><img src='./src/images/logo-sainsbury-magazine.png' /></li>
              <li><img src='./src/images/logo-sarasota-mag.png' /></li>
              <li><img src='./src/images/logo-sunday-post.png' /></li>
              <li><img src='./src/images/logo-tampa-bay-times.png' /></li>
              <li><img src='./src/images/logo-toronto-star.png' /></li>
              <li><img src='./src/images/logo-visit-florida.png' /></li>
              <li><img src='./src/images/logo-wall-street-journal.png' /></li>
            </ul>
          </div>
          <p>&copy; 2017 Caleb's Cronuts. Built with &hearts; at The Iron Yard, in St. Petersburg, FL.</p>
        </footer>
      </div>
    )
  }
}

export default Layout
