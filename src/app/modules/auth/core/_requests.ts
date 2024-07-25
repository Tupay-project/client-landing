/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { AuthModel, UserModel } from "./_models";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/auth/current-user`;
export const LOGIN_URL = `${API_URL}/auth/login`;
export const REGISTER_URL = `${API_URL}/auth/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/auth/forgot_password`;
export const REFRESH_TOKEN_URL = `${API_URL}/auth/refresh-token`;

// Server should return AuthModel
export function login(email: string, password: string) {
  console.log('login',email,password)

  return axios.post<AuthModel>(LOGIN_URL, {
    email,
    password,
  });
}

// Server should return AuthModel
export function register(
  email: string,
  fullname: string,
  lastname: string,
  password: string,
  password_confirmation: string,
  countryCode: string,
  mobil: string,
  acceptTerms: boolean,
  profilePicture: string
) {
  return axios.post(REGISTER_URL, {
    email,
    fullname,
    lastname,
    password,
    password_confirmation,
    countryCode,
    mobile: mobil,
    terminos: acceptTerms,
    profilePicture,
  });
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email,
  });
}

// export function getUserByToken(token: string) {
//   console.log('getUserByToken',token)
//   return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
//     api_token: token,
//   });
// }

// export function getUserByToken(token: string) {
//   console.log('getUserByToken', token);
//   return axios.get<any>(GET_USER_BY_ACCESSTOKEN_URL, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// }

// export function getUserByToken(token: string) {
//   console.log('getUserByToken', token);
//   return axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// }

// export function getUserByToken(token: string) {
//   console.log('getUserByToken', token);
//   return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
//     api_token: token,
//   });
// }

export function getUserByToken(token: string) {
  console.log('getUserByToken', token);
  return axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
