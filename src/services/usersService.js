import api from "./api";

export const registerNewUser = async (newUser) => {
  const res = await api.post("mongo/auth/register", newUser);
  return res.data;
};

export const loginUser = async (user) => {
    const res = await api.post("mongo/auth/login", user);
    return res.data;
};
