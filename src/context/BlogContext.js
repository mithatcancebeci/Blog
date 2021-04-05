import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";
const blogReducer = (state, action) => {
  switch (action.type) {
    case "search_blogpost":
      return action.payload;
    case "get_blogpost":
      return action.payload;
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};
const searchBlogPost=(dispatch)=>{
  return async(id)=>{
    const response =await jsonServer.get(`/blogposts/${id}`)
    dispatch({type:'search_blogpost',payload:response.data})
  }
}
const editBlogPost = (dispatch) => {
  return async(id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`,{title,content})
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    callback();
  };
};
const addBlogPost = (dispatch) => {
  return async(title, content, callback) => {
  await jsonServer.post('/blogposts',{title,content})
  if(callback){
    callback();
  }
//  dispatch({ type: "add_blogpost", payload: { title, content } });
   
  };
};
const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "get_blogpost", payload: response.data });
  };
};
const deleteBlogPost = (dispatch) => {
  return async(id) => {
    await jsonServer.delete(`/blogposts/${id}`)
    dispatch({ type: "delete_blogpost", payload: id });
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts ,searchBlogPost},
  []
);
