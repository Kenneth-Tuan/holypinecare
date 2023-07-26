import { apiHelper } from "./axios";
export default {
  submitForm({ formData }) {
    return apiHelper.post(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdZwPuGZsOjlgxoMJWtWBWpsShwaMbQsMPlaMiOyInDudGt3Q/formResponse",
      //   "https://docs.google.com/forms/d/e/1FAIpQLSeijRuLDQE62gbapDYgd_3pbmg7GyWY1CWPVeaEK-TiLDKzPw/formResponse",
      formData,
      {
        crossDomain: true, // 解決跨網域CORS的問題
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // 設置Content-Type為表單格式
        },
      }
    );
  },
};
