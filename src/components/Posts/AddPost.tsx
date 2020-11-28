import React, { useState } from "react";
import postsDI from "../../core/configuration/PostDI";

interface IProps {
  handlePosts: () => void;
}

const AddPost = ({ handlePosts }: IProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    postsDI
      .createPost({ title: value, author: "typicode" })
      .then(res => {
        setValue("");
        handlePosts();
      })
      .catch(e => {
        console.log(e);
      });
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
