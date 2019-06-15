import React, { Component } from 'react'
import styled from 'styled-components'
import * as Colors from '../utils/colors'

export default class SendMessageForm extends Component {
  constructor() {
    super()

    this.NameInput = React.createRef()
    this.EmailInput = React.createRef()
    this.MessageInput = React.createRef()

    this.state = {
      Name: '',
      Email: '',
      Message: '',
    }

    this.onNameChange = this.onNameChange.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onMessageChange = this.onMessageChange.bind(this)
  }

  onNameChange(e) {
    this.setState({ Name: e.target.value })
    // this.NameInput.current.setAttribute('value', e.target.value)
  }
  onEmailChange(e) {
    this.setState({ Email: e.target.value })
  }
  onMessageChange(e) {
    this.setState({ Message: e.target.value })
    this.MessageInput.current.setAttribute('myvalue', e.target.value)
  }

  render() {
    const { Name, Email, Message } = this.state
    return (
      <Wrapper>
        <form name="sendmessage" data-netlify-recaptcha="true" netlify-honeypot="bot-field" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="sendmessage" />
          <div style={{ display: 'none' }}>
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </div>
          <div>
            <input ref={this.NameInput} value={Name} onChange={this.onNameChange} id="Name" required />
            <label htmlFor="Name">NAME</label>
          </div>
          <div>
            <input ref={this.EmailInput} value={Email} onChange={this.onEmailChange} id="Email" type="email" required />
            <label htmlFor="Email">EMAIL</label>
          </div>
          <div>
            <textarea ref={this.MessageInput} myvalue={Message} value={Message} onChange={this.onMessageChange} id="Message" required />
            <label htmlFor="Message">MESSAGE</label>
          </div>
          <div data-netlify-recaptcha="true"></div>
          <button>SEND</button>
        </form>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  & > form {
    & > button {
      background-color: ${Colors.Peach};
      border: none;
      width: 100%;
      font-family: 'Teko';
      font-size: 200%;
      cursor: pointer;
    }

    & > div {
      position: relative;

      & label {
        position: absolute;
        height: 40px;
        margin: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        top: 0;
        transition: font-size 250ms, margin 250ms;
      }

      & input, textarea {
        width: 100%;
        background-color: transparent;
        border: ${Colors.Black} 1px solid;
        margin: 15px 0;
        padding: 15px;
      }

      & input {
        height: 40px;
      }

      & textarea {
        height: 150px;
      }

      & input:focus + label,
      textarea:focus + label,
      input:valid + label,
      textarea:valid + label,
      input:not([value=""]) + label,
      textarea:not([myvalue=""]) + label {
        margin: -15px 0;
        font-size: 90%;
      }

      & input:invalid:not([value=""]) + label,
      textarea:invalid:not([myvalue=""]) + label {
        color: #ff6a6a;
      }
    }
  }
`
