import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './CommentForm.css';

const CommentForm = ({ handlerSubmit }) => {
  const [body, setBody] = useState('');
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  const [comment, setComment] = useState({});

  useEffect(() => {
    setComment({ body, name, email });
  }, [body, name, email]);

  const resetCommentForm = () => {
    setBody('');
    setName(null);
    setEmail(null);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    return handlerSubmit(comment)
      .then(() => {
        resetCommentForm();
      })
      .catch(() => {
        alert('Cannot add comment');
      });
  };

  return (
    <form name='CommentForm' className={styles.CommentForm}>
      <textarea required id='CommentBody' className={styles.CommentForm_Body} name='comment_body' defaultValue={body} onChange={({ target: { value } }) => setBody(value)} />
      <div className={styles.CommentForm_Signature}>
        <label className={styles.CommentForm_Signature_Label} htmlFor='Signature'>
          Name
          <input id='CommentName' type='text' name='comment_name' defaultValue={name} onChange={({ target: { value } }) => setName(value)} />
        </label>
        <label className={styles.CommentForm_Signature_Label} htmlFor='Signature'>
          Email
          <input id='CommentEmail' type='email' name='comment_email' defaultValue={email} onChange={({ target: { value } }) => setEmail(value)} />
        </label>
      </div>
      <input onClick={onSubmit} className={styles.CommentForm_Submit} type='submit' value='Submit' />
    </form>
  );
};

CommentForm.propTypes = {
  handlerSubmit: PropTypes.func.isRequired,
};

export default CommentForm;
