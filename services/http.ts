/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import cookie from "./cookie";
import type { QueryClient } from "@tanstack/react-query";
import { LogoutReason } from "@/types";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/v1",
  withCredentials: false,
  timeout: 90000,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config: any) => {
    if (config.headers === undefined) {
      config.headers = {};
    }
    const token = cookie.get("auth-user")
      ? cookie.get("auth-user")?.access_token
      : false;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token.toString()}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (!error.response) {
      return Promise.reject(error);
    }
    switch (error.response.status) {
      case 401:
        httpLogout("expired");
        return Promise.reject(error);
      case 404:
        return Promise.reject(error);
      case 422:
        return Promise.reject(error);
      case 429:
        return Promise.reject(error);
      default:
        break;
    }
    return Promise.reject(error);
  },
);

// small registration API so the app can provide a QueryClient and a logout action
let queryClient: QueryClient | null = null;
let logoutHandler: ((reason: LogoutReason) => void) | null = null;

export const registerQueryClient = (qc: QueryClient) => {
  queryClient = qc;
};

export function registerLogoutHandler(handler: (reason: LogoutReason) => void) {
  logoutHandler = handler;
  return () => {
    if (logoutHandler === handler) logoutHandler = null;
  };
}

export function triggerLogout(reason: LogoutReason = "unknown") {
  logoutHandler?.(reason);
}

export const httpLogout = (reason: LogoutReason) => {
  // cancel ongoing queries and remove cached server state
  if (queryClient) {
    try {
      queryClient.cancelQueries();
      // remove all queries (unmounts cached data)
      queryClient.removeQueries();
      // optional: reset mutation/query state
      queryClient.resetQueries();
    } catch (e) {
      // ignore if QueryClient methods aren't available
      console.log(e);
    }
  }

  // handling of clearing tokens, redirecting, etc. in the app query provider
  if (logoutHandler) {
    logoutHandler(reason);
    return;
  }

  // fallback: clear cookie and redirect to login
  if (typeof window !== "undefined") {
    try {
      cookie.delete?.("auth-user");
    } catch {
      // ignore if cookie.remove not available
    }
    window.location.href = "/login";
  }
};

export default http;
