const fs = require("fs");

// 讀取 Word 檔案並轉換為 ArrayBuffer
export function readWordFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const arrayBuffer = ArrayBuffer.from(data.buffer);
      resolve(arrayBuffer);
    });
  });
}

// 使用範例
const filePath = "../articles/ddw/001.docx";

readWordFile(filePath)
  .then((arrayBuffer) => {
    console.log(arrayBuffer);
    // 在這裡可以對 ArrayBuffer 做進一步的處理
  })
  .catch((err) => {
    console.error(err);
  });
