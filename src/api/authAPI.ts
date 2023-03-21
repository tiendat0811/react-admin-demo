import { API_URL } from "../configs";

export const login = async (params: any): Promise<boolean> => {
  try {
    const request = new Request(API_URL + "/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: params.username,
        password: params.password,
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token }) => {
        localStorage.setItem("token", token);
        const getUser = new Request(API_URL + "/whoAmI", {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }),
        });
        fetch(getUser)
          .then((response) => {
            if (response.status < 200 || response.status >= 300) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .then((user) => {
            localStorage.setItem(
              "auth",
              JSON.stringify({
                timestamp: new Date().getTime() + 3600000,
                value: user,
              })
            );
          });
      });

    return true;
  } catch (error) {
    console.log("err", error);
    throw error;
  }
};
