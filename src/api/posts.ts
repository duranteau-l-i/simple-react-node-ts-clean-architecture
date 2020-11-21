import axios from 'axios'
import Post  from '../core/domain/entities/Post'


const URL = `${process.env.REACT_APP_API_BASE_URL}/posts`

export const getPosts = () => axios.get<Post[]>(URL)

export const getPost = (id: string) => axios.get<Post>(`${URL}/${id}`)

export const createPost = (data: Object) => axios.post(URL, {...data, author: "typicode"})
