import React from 'react';
import logo from '../img/yutube-logo.png';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment' style={{ display: 'flex' }}>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div
            className='ui left icon input'
            style={{ width: '800px', marginTop: '30px' }}
          >
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
            <i className='search icon'></i>
          </div>
        </form>
        <div>
          <a href='http://localhost:3000/'>
            <img
              src={logo}
              alt='yutube-logo'
              width='70%'
              style={{ marginLeft: '50px' }}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
