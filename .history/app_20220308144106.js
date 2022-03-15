const http = require('http');

const sever = http.createServer(() => {
    console.log("Tạo server thành công");
})
const PORT = 3001;
sever.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng: ", PORT);
});