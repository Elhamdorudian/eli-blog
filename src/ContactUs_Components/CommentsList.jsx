import Like from "../Like";

const CommentsList = ({ data: comments }) => {
  let latestComments = [...comments].reverse();

  return (
    <div className="comments-list">
      {latestComments.map((comment,index) => (
        <div key={index}>
        <div className="list-holder">
        <div className="img-holder"></div>
          <h4 className="comments-title">{comment.name} - </h4>
          <p>{comment.date}</p>
        </div>
          <p className="comments-content">{comment.content}</p>
          <div className="like-holder"><Like/></div>
          <hr/>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
