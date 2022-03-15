const http = require('http');

const sever = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if(url === "/api/products") {
        const data = [
            {id: 1, name: "Product A"},
            {id: 2, name: "Product B"}
        ];
    res.end(JSON.stringify(data))
    } else if (url === "/api/posts") {
        console.log(" API Post")
    } else {
        res.setHeader("Conten-Type","text/html");
        res.write("<html><body><h1>Home Page</h1></body></html>");
        res.end();
    }
})
const PORT = 3001;
sever.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng: ", PORT);
});