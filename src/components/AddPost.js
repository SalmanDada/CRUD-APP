import React from "react";

const AddPost = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.id.value,evt.target.title.value, evt.target.body.value);
    evt.target.id.value = "";
    evt.target.title.value = "";
    evt.target.body.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h1 className="heading">Add Post</h1>
      <input placeholder="Id" name="id" />
      <input placeholder="Title" name="title" />
      <input placeholder="Body" name="body" />
      <button className="addButton" onSubmit={handleOnSubmit}>Add</button>
    </form>
  );
};

export default AddPost;