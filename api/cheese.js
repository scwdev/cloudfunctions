module.exports = ( request, response ) => {
    response.json({
        body: request.body,
        headers: request.headers,
        query: request.query,
        cookie: request.cookie,
        method: request.method
    })
}