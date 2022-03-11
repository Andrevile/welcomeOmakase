import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5000';

class api {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:5000',
    });
  }
  async get(url) {
    const response = await this.instance.get(url);
    return response.data;
  }
  async post(url, data) {
    const response = await this.instance.post(url, data);
    return response.data;
  }
}

export default new api();

// export const Axios = async (Url, Method, Data) => {
//   let option = {};
//   switch (Method) {
//     case 'GET':
//       option = {
//         url: Url,
//       };
//       break;
//     case 'POST':
//       option = {
//         url: Url,
//         method: Method,
//         data: {
//           ...Data,
//         },
//       };
//       break;
//     case 'PUT':
//       option = {
//         url: Url,
//         method: Method,
//         data: {
//           ...Data,
//         },
//       };
//       break;
//     case 'DELETE':
//       option = {
//         url: Url,
//         method: Method,
//       };
//       break;
//     default:
//       break;
//   }
//   try {
//     let response = await axios(option);
//     // response = await response.json();
//     return response.data;
//   } catch (err) {
//     console.log('Axios module call err:', err);
//   }
// };
