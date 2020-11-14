import axios from 'axios'
import IPost from '../core/domain/entities/Posts'


const URL = `${process.env.REACT_APP_API_BASE_URL}/posts`

export const getPosts = () => axios.get<IPost[]>(URL)

export const getPost = (id: string) => axios.get<IPost>(`${URL}/${id}`)

export const createPost = (data: Object) => axios.post(URL, {...data, author: "typicode"})
