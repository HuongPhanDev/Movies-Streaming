import React, { useState, useEffect } from "react";
import axios from 'axios'; 

  
  
export const requestToken = async (url:any) => {
    return await axios
      .get(url)
      .then((response) => response.data)
      .catch((response) => response.data);
  };

export const authorize = async (url: string, username: any, password: any, requestToken: any) => {
  return await axios
    .post(url, { username, password, request_token: requestToken })
    .then((response) => response.data)
    .catch((error) => error.response.data);
};


export const getSessionId = async (url:any) => {
    return await axios
      .get(url)
      .then((response) => response.data)
      .catch((response) => response.data);
  };

 