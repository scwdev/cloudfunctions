
module.exports = (request, response) => {
    response.json({
        body: request.body,
        header: request.header,
        query: request.query,
        cookie: request.cookie,
        method: request.method
    })
}