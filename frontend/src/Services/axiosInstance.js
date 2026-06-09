import axios from 'axios';

const axoisInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Timeout requests after 10 seconds
});

// // Optional: Add request interceptors
// axoisInstance.interceptors.request.use(
//   (config) => {
//   if(mergeConfig.data.instanceOf.formdata){
//     Config.headers["content-type"]="multipart formdata";
//     else
//       {
//       Config.headers["content type"]="application.json";
//     }
//   }
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// Optional: Add response interceptors for error handling
axoisInstance.interceptors.response.use(
  (response) => response
);

export default axoisInstance;