import React, { PropTypes } from 'react'

let loadSocket = false;
class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: localStorage.getItem('currentUser') || '',
      users: [],
      messages: []
    }

    this._initialize = this._initialize.bind(this);
    this._messageReceive = this._messageReceive.bind(this);
  }

  componentWillMount() {
    $("body").append(`<script src="\/socket.io\/socket.io.js"><\/script>`);
    $("body").append(`<script>var socket = io();</script>`);
  }

  componentDidMount() {
    socket.on('init', this._initialize)
    socket.on('send:message', this._messageReceive)
  }

  _initialize(data) {
    let {users, name} = data;
    this.setState({ users, user:name });
  }

  _messageReceive(message) {
    let {messages} = this.state;
    messages.push(message);
    this.setState({messages})
  }

  handleChatSubmit(e) {
    e.preventDefault();
    let inputText = document.querySelector('.chat-input').value;
    let messageObject = {
      user: this.state.currentUser,
      message: inputText
    };
    let message = JSON.stringify(messageObject);
    let {messages} = this.state;

    messages.push(message);
    this.setState({messages});

    socket.emit('send:message', message);

    e.target.reset();
    return false;
  }

  renderChatBubble(name, text, key, className) {
    return (
      <li key={key} className={`chat-bubble-container ${className}`}>
        <div className="chat-bubble">
          <label>{name}</label>
          <br></br>
          <p>{text}</p>
        </div>
      </li>
    )
  }

  renderChatMessages() {
    return(
      this.state.messages.map((message, idx) => {
        message = JSON.parse(message);

        if (message.user === this.state.currentUser) {
          return (this.renderChatBubble(this.state.currentUser, message.message, idx, 'own-message'));
        } else if (message.user === 'TenmBot') {
          return (this.renderChatBubble('TenmBot', message.message, idx, 'bot-message'));
        }
      })
    )
  }

  render () {
    return (
      <div className="chat-container">
        <form className="chat-form" onSubmit={e => this.handleChatSubmit(e)}>
          <ul className="chat-messages">
            {this.renderChatMessages()}
          </ul>
          <div className="chat-input-container">
            <input autoFocus type='text' className="chat-input" placeholder="Enter Text here" tabIndex='1'></input>
            <button type='submit' className="chat-submit" tabIndex='2'>
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Chat;
