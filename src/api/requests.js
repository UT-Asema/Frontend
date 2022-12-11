import axios from "axios";
let BASEURL = "http://mc.sopy.one:3000";
import $ from "jquery";

// data json
let DATA
window.data = DATA
try {
  DATA = JSON.parse(localStorage.getItem("data"));
} catch (e) {
  DATA = {loggedin: false, users:[], posts:[],likes:[]}
  console.log("error parsing stored data")
}

let updateData = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
  DATA = data
}

export const login = async (username, password) => {
  let filter = DATA.find((user) => user.username === username && user.password === password);

  if (filter?.[0] !== undefined) {
    DATA.loggedin = true;
    updateData(DATA);
    return filter[0];
  } else return false;
};

export const register = (username, password, email) => {
  let filter = DATA.find((user) => user.username === username);

  if (filter?.[0] === undefined) {
    return false;
  } else {
    let data = DATA;
    data.users.push({ username, password, email });
    // logged in
    data.loggedin = true;

    updateData(data);
    return true;
  }
}

export const logout = () => {
  DATA.loggedin = false;
  updateData(DATA);
  return true;
}

export const getPost = async (id) => {
  let filter = DATA.posts.find((post) => post.id === id);
  if (filter !== undefined) {
    return filter;
  } else return false;
}

export const searchPosts = async (term) => {
  let filter = DATA.posts.filter((post) => post.title.includes(term));
  if (filter?.length > 0) {
    return filter;
  } else return false;
}

export const getTopPosts = async () => {
  let filter = DATA.posts.sort((a, b) => b.likes - a.likes);
  if (filter?.length > 0) {
    return filter;
  } else return false;
}

export const getNewPosts = async () => {
  let filter = DATA.posts.sort((a, b) => b.date - a.date);
  if (filter?.length > 0) {
    return filter;
  } else return false;
}

export const getTrendingPosts = async () => {
  // trending posts are posts with the most likes in the last 7 days
  let filter = DATA.posts.sort((a, b) => b.likes.filter((like) => like.date > Date.now() - 604800000).length - a.likes.filter((like) => like.date > Date.now() - 604800000).length);
  if (filter?.length > 0) {
    return filter;
  } else return false;
}

export const createPost = async (title, description, content) => {
  // check if user is logged in
  if (!DATA.loggedin) return false;

  let data = DATA;
  data.posts.push({ title, description, content, date: Date.now(), date_edited: Date.now(), likes: [] });
  updateData(data);
  return true;
}

export const editPost = async (id, title, description, content) => {
  // check if user is logged in
  if (!DATA.loggedin) return false;

  let data = DATA;
  let filter = data.posts.find((post) => post.id === id);
  if (filter !== undefined) {
    filter.title = title;
    filter.description = description;
    filter.content = content;
    filter.date_edited = Date.now();
    updateData(data);
    return true;
  } else return false;
}

export const deletePost = async (id) => {
  // check if user is logged in
  if (!DATA.loggedin) return false;

  let data = DATA;
  let filter = data.posts.find((post) => post.id === id);
  if (filter !== undefined) {
    data.posts.splice(data.posts.indexOf(filter), 1);
    updateData(data);
    return true;
  } else return false;
}

export const likePost = async (id) => {
  // check if user is logged in
  if (!DATA.loggedin) return false;

  // check if user has already liked post
  let filter = DATA.posts.find((post) => post.id === id);
  if (filter.likes.find((like) => like.user === DATA.loggedin) !== undefined) {
    // unlike post
    filter.likes.splice(filter.likes.indexOf(filter.likes.find((like) => like.user === DATA.loggedin)), 1);
    updateData(DATA);
    return true;
  } else {
    // like post
    filter.likes.push({ user: DATA.loggedin, date: Date.now() });
    updateData(DATA);
    return true;
  }
}