import axios from 'axios'

export interface IPost {
  id: number, title: string, author: string
}

const URL = `${process.env.REACT_APP_API_BASE_URL}/posts`

export const getPosts = () => axios.get(URL)

export const getPost = (id: string) => axios.get(`${URL}/${id}`)

export const createPost = (data: Object) => axios.post(URL, {...data, author: "typicode"})
