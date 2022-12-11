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