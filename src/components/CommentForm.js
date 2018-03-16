/* eslint-disable import/no-named-as-default */
import React from 'react';
import moment from 'moment-es6';
import PropTypes from 'prop-types';

export class CommentForm extends React.Component {

  constructor(props){
    super(props)
    this.state={
      author:"",
      message:""
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleInputChange=this.handleInputChange.bind(this);
  }

  render() {

    return (
      <div className="comment-form">
        <div><input placeholder={"Enter your name"} type="text" name="author" value={this.state.author} onChange={this.handleInputChange}/></div>
        <div><textarea placeholder={"Enter your comment"} name="message" value={this.state.message} onChange={this.handleInputChange}/></div>
        <input type="submit" onClick={this.handleSubmit}/>
      </div>

    );
  }

   handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  handleSubmit(){

    if(this.state.author.length && this.state.message.length)
    var comment = {
      author:this.state.author,
      message:this.state.message,
      date:moment().format('YYYY-MM-DD HH:mm:ss')
    }
    this.setState({
      author:"",
      message:""
    });
    this.props.addComment(comment)
  }
}

CommentForm.propTypes={
  addComment:PropTypes.func
}

export default CommentForm;
