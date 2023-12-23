import React, { useState, useEffect } from "react";
import axios from 'axios'; 

  
  
export const fetchData = async (url:string) => {
    return await axios
      .get(url)
      .then((response) => response.data)
      .catch((response) => response.data);
  };

export const authorize = async (url: string, username: string, password: string, requestToken: any) => {
  return await axios
    .post(url, { username, password, request_token: requestToken })
    .then((response) => response.data)
    .catch((error) => error.response.data);
};


export const requestToken = async (url: string) => fetchData(url);

 
export const getSessionId = async (url: string) => fetchData(url);

export const fetchFilm = async (url: string) => fetchData(url);

export const fetchGenre= async (url: string) => fetchData(url);

export const fetchLan =async (url:string) => fetchData(url) ;