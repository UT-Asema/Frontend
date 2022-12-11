import axios from "axios";
let BASEURL = "http://mc.sopy.one:3000";
import $ from "jquery";

export const login = async (username, password) => {
  let response = $.ajax({
    url: BASEURL + "/auth/login",
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
export const login2 = async (username, password) => {
  console.log("try");

  const update = {
    title: "A blog post by Kingsley",
    body: "Brilliant post on fetch API",
    userId: 1,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      username,
      password,
    },
    // body: JSON.stringify(update),
  };
  let response = await fetch(BASEURL + "/auth/password", options);
  return response;
};
