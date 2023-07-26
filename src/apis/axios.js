import axios from "axios";
// import Swal from 'sweetalert2'

const baseURL = "https://joy-portfolio.uiuxblog.tw/api";

export const apiHelper = axios.create({
  timeout: 1000,
  async: true,
  crossDomain: true,
});

// export const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 3000
// })
