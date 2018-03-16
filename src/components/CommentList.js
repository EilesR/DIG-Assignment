import React from 'react';
import PropTypes from 'prop-types';

export class CommentList extends React.Component {

  render() {
    const comments = this.props.comments;
    var commentsElements;
    if(comments && comments.length){
      commentsElements = comments.map( (comment,index) => {
        return (
          <div key={index} className={"comment"}>
            <div className={"comment-info"}>
              <span className={"comment-author"}>{comment.author}</span>
              <div className={"comment-date"}>
                {comment.date}
              </div>
            </div>
            
            <div className={"comment-content"}><pre>{comment.message}</pre></div>
          </div>
        );
    }); 
    }else{
      return (<div className={"comments-list"}><div className={"comment center"}><div className={"comment-content"}>Be the first to Comment !</div></div></div>);
    }
    return (
      <div className={"comments-list"}>
        {commentsElements}
      </div>
    );
  }
}

CommentList.propTypes={
  comments:PropTypes.array
}

export default CommentList;
