import React, { useState, useEffect, useCallback } from "react";
import { getComments, IComment } from "../../api/comments";

import AddComment from "./AddComment";

interface IProps {
  postId: number;
}

const Comments = ({ postId }: IProps) => {
  const [comments, setComments] = useState<IComment[] | null>(null);

  const getData = useCallback(() => {
    getComments(postId)
      .then(res => {
        setComments(res.data);
      })
      .catch(e => setComments([]));
  }, [comments]);

  useEffect(() => {
    if (!comments) {
      getData();
    }
  }, [comments]);

  const handleComments = () => {
    getData();
  };

  return (
    <div className="comments">
      <AddComment handleComments={handleComments} postId={postId} />
      {comments && (
        <>
          {comments.map(comment => (
            <p key={comment.id}>Comment: {comment.body}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default Comments;
