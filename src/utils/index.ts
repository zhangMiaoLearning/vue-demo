import axios from 'axios'

export const request = axios.create({
  baseURL: 'http://localhost:3004',
  timeout: 30000
})
// export function get(url: string, params: any) {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(url, {
//         params: params
//       })
//       .then((res) => {
//         resolve(res.data)
//       })
//       .catch((err) => {
//         reject(err.data)
//       })
//   })
// }
// export function post(url: string, params: any) {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(url,params)
//       .then((res) => {
//         resolve(res.data)
//       })
//       .catch((err) => {
//         reject(err.data)
//       })
//   })
// }
