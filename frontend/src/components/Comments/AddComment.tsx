import React, { useState } from "react";

import { createComment } from "../../api/comments";

interface IProps {
  handleComments: () => void;
  postId: number;
}

const AddComment = ({ handleComments, postId }: IProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    createComment({ postId: postId, body: value });
    setValue("");
    handleComments();
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="add comment"
      />
      <button type="button" onClick={handleClick}>
        submit
      </button>
    </div>
  );
};

export default AddComment;
