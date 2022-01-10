import React, { useState } from "react";

const Post = ({ title, body, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.title.value, evt.target.body.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input className="editInput" placeholder="Title" name="title" defaultValue={title} />
          <input className="editInput" placeholder="Body" name="body" defaultValue={body} />
          <button className="saveButton" onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <>
          <table>
            <tr>
              <td>{id}</td>
              <td>{title}</td>
              <td>{body}</td>
              <td><button onClick={handleEdit}>Edit</button></td>
              <td><button onClick={handleDelete}>Delete</button></td>
            </tr>
          </table>
        </>
      )}
    </div>
  );
};


export default Post;