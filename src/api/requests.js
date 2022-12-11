import axios from "axios";
let BASEURL = "http://mc.sopy.one:3000";
import $ from "jquery";

export const login = async (username, password) => {
  let response = $.ajax({
    url: BASEURL + "/auth/password",
    type: "POST",
    async: false,
    data: {
      username,
      password,
    },
    xhrFields: {
      withCredentials: true,
    },
    withCredentials: true,
    crossDomain: true,
  });
  console.log("respone", response);
  return response;
};

export const register = async (username, password, email) => {
  let response = $.ajax({
    url: BASEURL + "/auth/register",
    type: "POST",
    async: false,
    data: {
      username,
      password,
      email,
    },
    xhrFields: {
      withCredentials: true,
    },
    withCredentials: true,
    crossDomain: true,
  });
  console.log("respone", response);
  return response;
}

export const logout = async () => {
  let response = $.ajax({
    url: BASEURL + "/auth/logout",
    type: "POST",
    async: false,
    xhrFields: {
      withCredentials: true,
    },
    withCredentials: true,
    crossDomain: true,
  });
  console.log("respone", response);
  return response;
}

export const check = async () => {
  let response = $.ajax({
    url: BASEURL + "/auth/check",
    type: "GET",
    async: false,
    xhrFields: {
      withCredentials: true,
    },
    withCredentials: true,
    crossDomain: true,
  });
  console.log("respone", response);
  return response;
}

export const getPost = async (id) => {
  let response = $.ajax({
    url: BASEURL + "/posts/get/" + id,
    type: "GET",
    async: false,
    xhrFields: {
      withCredentials: true,
    },
    withCredentials: true,
    crossDomain: true,
  });
  console.log("respone", response);
  return response;
}

export const searchPosts = async (term) => {
  let response = $.ajax({
    url: BASEURL + "/posts/search/" + term,
    type: "GET",
    async: false,
    xhrFields: {
      withCredentials: true,
    },
    withCredentials: true,
    crossDomain: true,
  });
  console.log("respone", response);
  return response;
}

export const getTopPosts = async () => {
  let response = $.ajax({
    url: BASEURL + "/posts/getTop",
    type: "GET",
    async: false,
    xhrFields: {
      withCredentials: true,
    },
    withCredentials: true,
    crossDomain: true,
  });
  console.log("respone", response);
  return response;
}

export const getNewPosts = async () => {
  let response = $.ajax({
    url: BASEURL + "/posts/getNew",
    type: "GET",
    async: false,
    xhrFields: {
      withCredentials: true,
    },
    withCredentials: true,
    crossDomain: true,
  });
  console.log("respone", response);
  return response;
}

export const getTrendingPosts = async () => {
  let response = $.ajax({
    url: BASEURL + "/posts/getTrending",
    type: "GET",
    async: false,
    xhrFields: {
      withCredentials: true,
    },
    withCredentials: true,
    crossDomain: true,
  });
  console.log("respone", response);
  return response;
}

export const createPost = async (title, description, content) => {
  let response = $.ajax({
    url: BASEURL + "/posts/create",
    type: "POST",
    async: false,
    data: {
      title,
      description,
      content,
    },
    xhrFields: {
      withCredentials: true,
    },
    withCredentials: true,
    crossDomain: true,
  });
  console.log("respone", response);
  return response;
}

export const editPost = async (id, title, description, content) => {
  let response = $.ajax({
    url: BASEURL + "/posts/edit/" + id,
    type: "POST",
    async: false,
    data: {
      title,
      description,
      content,
    },
    xhrFields: {
      withCredentials: true,
    },
    withCredentials: true,
    crossDomain: true,
  });
  console.log("respone", response);
  return response;
}

export const deletePost = async (id) => {
  let response = $.ajax({
    url: BASEURL + "/posts/delete/" + id,
    type: "POST",
    async: false,
    xhrFields: {
      withCredentials: true,
    },
    withCredentials: true,
    crossDomain: true,
  });
  console.log("respone", response);
  return response;
}

export const ratePost = async (id, rating) => {
  let response = $.ajax({
    url: BASEURL + "/posts/rate/" + id,
    type: "POST",
    async: false,
    data: {
      rating,
    },
    xhrFields: {
      withCredentials: true,
    },
    withCredentials: true,
    crossDomain: true,
  });
  console.log("respone", response);
  return response;
}