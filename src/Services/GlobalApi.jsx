import axios from "axios";


// const BASE_URL='http://localhost:1337/api';
// const BASE_URL='http://localhost:5173/api';

// const getPost=axios.get(BASE_URL+'/blogs?populate=*');
// const getPostById=(id)=>axios.get(BASE_URL+'/blogs/'+id+'?populate=*');

const BLOG_ID = "2379131446618331340";  // your Blogger blog ID
const API_KEY = "AIzaSyCSAEchH4iKC-yI_5XChgDXOief8i5Phq0"; // replace with your API key

// Get all posts
const getPost = () =>
  axios.get(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`);

// Get a single post by ID
const getPostById = (id) =>
  axios.get(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${id}?key=${API_KEY}`);


export default{
    getPost,
    getPostById
}
