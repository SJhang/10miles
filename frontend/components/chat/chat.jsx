import React, { PropTypes } from 'react'

let loadSocket = false;
class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: localStorage.getItem('currentUser') || ''
    }
  }

  componentWillMount() {
    $("body").append(`<script src="\/socket.io\/socket.io.js"><\/script>`);
    $("body").append(`<script>var socket = io();</script>`);
  }

  componentDidMount() {
  }

  render () {
    return (
      <div>Chat</div>
    )
  }
}

export default Chat;
