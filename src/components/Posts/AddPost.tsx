import React, { useState } from "react";

import { createPost } from "../../api/posts";

interface IProps {
  handlePosts: () => void;
}

const AddPost = ({ handlePosts }: IProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    createPost({ title: value });
    setValue("");
    handlePosts();
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="add post"
      />
      <button type="button" onClick={handleClick}>
        submit
      </button>
    </div>
  );
};

export default AddPost;
