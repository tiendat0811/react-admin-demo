import _ from "lodash";
import { AuthProvider } from "react-admin";
import * as api from "../api";
import { storage } from "./index";

const login = async (params: any): Promise<boolean> => {
  try {
    await api.login(params);
    return true;
  } catch (error) {
    console.log("err", error);
    throw error;
  }
};

const logout = async () => {
  localStorage.removeItem("auth");
  return Promise.resolve();
};

const checkError = (error: any) => {
  const status = error.status;
  console.log("status", status);
  if (status === 401) {
    storage.remove("auth");
    return Promise.reject();
  }
  if (status === 403) {
    return Promise.reject({ redirectTo: "/unauthorized", logoutUser: false });
  }
  // other error code (404, 500, etc): no need to log out
  return Promise.resolve();
};

const checkAuth = (params: any) => {
  return storage.load("auth") ? Promise.resolve() : Promise.reject();
};

const getPermissions = (params: any) => {
  const user = storage.load("auth");
  const isAdmin = _.get(user, "isAdmin", false);
  const teams = _.get(user, "teams", {});
  const team = _.get(user, "team", {});
  const permissions = {
    isAdmin,
    ...teams[0],
    ...team,
  };
  return Promise.resolve(permissions);
};

const getIdentity = () => {
  const user = storage.load("auth");
  const identity = {
    id: user.id,
    email: user.email,
  };
  return Promise.resolve(identity);
};

export const authProvider: AuthProvider = {
  login,
  logout,
  checkAuth,
  checkError,
  getPermissions,
  getIdentity,
};
