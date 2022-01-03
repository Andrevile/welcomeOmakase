import axios from "axios";

export const Axios = async (Url, Method, Data) => {
  let option = {};
  switch (Method) {
    case "GET":
      option = {
        url: Url,
      };
      break;
    case "POST":
      option = {
        url: Url,
        method: Method,
        data: {
          ...Data,
        },
      };
      break;
    case "PUT":
      option = {
        url: Url,
        method: Method,
        data: {
          ...Data,
        },
      };
      break;
    case "DELETE":
      option = {
        url: Url,
        method: Method,
      };
      break;
  }
  try {
    let response = await axios(option);
    // response = await response.json();
    return response.data;
  } catch (err) {
    console.log("Axios module call err:", err);
  }
};
