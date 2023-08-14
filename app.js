const fs = require("fs");

const content = "Hello world!";

fs.writeFile("test.txt", content, (error) => console.error(error));

let count = 1;
setInterval(() => {
  if (count < 2) {
    fs.readFile("test.txt", "utf8", (error, data) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(data);
    });
    count++;
  }
}, 2000);
