import React from 'react';

const CommentForm = () => (
  <form name='CommentForm'>
    <textarea className='CommentForm_Body' name='comment_body' value='' />
    <div className='CommentForm_Signature'>
      <label className='CommentForm_Signature_Label' htmlFor='Signature'>
        Signature
        <input id='Signature' type='text' name='comment_signature' value='' />
      </label>
    </div>
    <input className='CommentForm_Submit' type='submit' value='Submit' />
  </form>
);

export default CommentForm;
