const http = require('http');

const sever = http.createServer((req, res) => {
    console.log(req);
})
const PORT = 3001;
sever.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng: ", PORT);
});