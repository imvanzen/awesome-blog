import React from 'react';

const CommentForm = () => (
  <form name='CommentForm'>
    <textarea className='CommentForm_Body' name='comment_body' onChange={() => {}} />
    <div className='CommentForm_Signature'>
      <label className='CommentForm_Signature_Label' htmlFor='Signature'>
        Signature
        <input id='Signature' type='text' name='comment_signature' onChange={() => {}} />
      </label>
    </div>
    <input className='CommentForm_Submit' type='submit' value='Submit' />
  </form>
);

export default CommentForm;
