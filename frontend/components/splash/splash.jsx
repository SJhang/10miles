import React, { PropTypes } from 'react'
import { Link, withRouter, Route } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: ''
    }
  }

  updateNickname(e) {
    this.setState({nickname: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    document.cookie = '';
    if (this.state.nickname) {
      localStorage.setItem('currentUser', this.state.nickname);
      this.props.history.push('/chat');
    } else {
      alert('Type in your nickname');
    }
  }

  render () {
    return(
      <div className="splash-container">
        <div className="splash-bg"/>
        <form className="splash-form" onSubmit={e => this.handleSubmit(e)}>
          <input
            autoFocus
            className="nickname"
            type='text'
            placeholder="Type your name"
            onChange={e => this.updateNickname(e)}>
          </input>
          <i
            className="fa fa-arrow-circle-right"
            aria-hidden="true"
            onClick={e => this.handleSubmit(e)}></i>
        </form>
      </div>
    )
  }
}

export default Splash;
