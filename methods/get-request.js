module.exports = (req, res) => {
    //encontra o ultimo indice
    let baseUrl = req.url.subtring(0, req.url.lastIndexOf("/") + 1);
    let id = req.url.split("/")[3];
    const regexV4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

    if (req.url === "/api/movies"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(req.movies));
        res.end();
    } else if(!regexV4.test(id)) {
        res.writeHead(400, {"Content-Type": "application/json"});
        res.end(
            JSON.stringify({ 
                title: "Validation Failed", 
                message: "UUID is not valido", // UUID é um identificador universalmente exclusivo 
            })
        );
    }
};