import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Rate from './Rate/Rate'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="site">
        <Header />
        <div className="container">
          <main>
            <Rate />
            
          </main>
        </div>
        <div className="container" id="cookie-info">
          <div className="site-content">
            <div className="well">Мы используем ваши куки</div>
          </div>
        </div>
        <Footer />
      </div>
    )
}
}

export default App;
