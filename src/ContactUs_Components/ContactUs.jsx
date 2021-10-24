import { useState,useEffect } from "react";
import { Form } from "react-bootstrap";
import { format} from 'date-fns';
import CommentsList from "./CommentsList";
import "./Comments.css";
import { allComments } from "../Data/AllComments";

const ContactUs = () => {

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [date,setDate] = useState(null);

  useEffect(() => {
    const time = format(new Date(),'EEEE, MMMM dd yyyy');
    setDate(time);
  },[]);
  const [yourComments,setYourComments] = useState(allComments);


/*
---------------------------------------------------------
             -----Creating-New-Comment-----
---------------------------------------------------------
*/
  const handleSubmit = (e) => {

    e.preventDefault();
    const comment = { name, content, date };
    const newComment = allComments.concat(comment);
    setYourComments(newComment);
    setName("");
    setContent("");
    
  };


  return (
    <>
    <div className="comments-form-holder">
      <h2 className="comments-form-title">Your Comments</h2>
      <Form
        className="form comments-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label className="h5 ">Name*</label>
          <input
            type="text"
            required
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="form-group">
        <label className="h5">Comments</label>
          <textarea
            className="form-control"
            required
            value={content}
            onChange={e => setContent(e.target.value)}
          ></textarea>
        </div>
        <button className="btn btn-block form-btn home-card-btn">
          Add Comment
        </button>
      </Form>
    </div>
      <CommentsList data={yourComments} />
          </>
  );
};

export default ContactUs;
