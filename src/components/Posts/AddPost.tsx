import React, { useState } from "react";
import postsDI from "../../core/configuration/PostDI";

// use with redux
import // createPost
"../../core/adapters/secondary/posts/redux/posts/actions";
import { createPost } from "../../core/adapters/secondary/posts/redux/posts/actionsThunks";
import { useDispatch } from "react-redux";

type IProps = {
  handlePosts: () => void;
};

const AddPost = ({ handlePosts }: IProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // use API
  // const handleClick = () => {
  //   postsDI
  //     .createPost({ title: value, author: "typicode" })
  //     .then(res => {
  //       setValue("");
  //       handlePosts();
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  // use REDUX
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(createPost({ title: value, author: "typicode" }));
    setValue("");
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
