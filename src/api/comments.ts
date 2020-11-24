import axios from "axios";

export interface IComment {
  id: number;
  body: string;
  postId: string;
}

const URL = `${process.env.REACT_APP_API_BASE_URL}/comments`;

export const getComments = (postId: number) =>
  axios.get<IComment[]>(`${URL}?id=${postId}&author.name=typicode`);

export const getComment = (id: string) =>
  axios.get<IComment>(`${URL}/${id}?author.name=typicode`);

export const createComment = (data: any) => axios.post(URL, data);
