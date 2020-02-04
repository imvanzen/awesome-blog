import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CommentForm = ({ handlerSubmit }) => {
  const [body, setBody] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  const [comment, setComment] = useState({});

  useEffect(() => {
    setComment({ body, name, email });
  }, [body, name, email]);

  const resetCommentForm = () => {
    setName(null);
    setEmail(null);
    setBody(null);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    handlerSubmit(comment)
      .then(() => resetCommentForm());
  };

  return (
    <form name='CommentForm' onSubmit={onSubmit}>
      <textarea required id='CommentBody' className='CommentForm_Body' name='comment_body' value={body} />
      <div className='CommentForm_Signature'>
        <label className='CommentForm_Signature_Label' htmlFor='Signature'>
          Name
          <input id='CommentName' type='text' name='comment_name' value={name} />
        </label>
        <label className='CommentForm_Signature_Label' htmlFor='Signature'>
          Email
          <input id='CommentEmail' type='email' name='comment_email' value={email} />
        </label>
      </div>
      <input className='CommentForm_Submit' type='submit' value='Submit' />
    </form>
  );
};

CommentForm.propTypes = {
  handlerSubmit: PropTypes.func.isRequired,
};

export default CommentForm;
