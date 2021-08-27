import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './NewCommentForm.scss';

export const NewCommentForm = ({ selectedPostId, setComments }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      date: new Date (),
      description,
      productId: selectedPostId,
    };

    const addNewComment = async(coment) => {
      await addPostComment(coment);
      setComments(await getPostComments(selectedPostId));
    };

    addNewComment(newComment);
    setName('');
    setEmail('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="NewCommentForm">
      <div className="form-field">
        <input
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
          placeholder="Your name"
          className="NewCommentForm__input"
        />
      </div>

      <div className="form-field">
        <input
          type="text"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder="Your email"
          className="NewCommentForm__input"
        />
      </div>

      <div className="form-field">
        <textarea
          name="body"
          value={body}
          onChange={event => setBody(event.target.value)}
          placeholder="Type comment here"
          className="NewCommentForm__input"
        />
      </div>

      <button
        type="submit"
        className="NewCommentForm__submit-button button"
      >
        Add a comment
      </button>
    </form>
  );
};

NewCommentForm.propTypes = {
  selectedPostId: PropTypes.number.isRequired,
  setComments: PropTypes.func.isRequired,
};
