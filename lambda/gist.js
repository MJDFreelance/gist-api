const axios = require('axios');

exports.handler = async function(event) {
    const {data} = await axios({
        method:"GET",
        url : `https://api.github.com/users/${event?.queryStringParameters?.username}/gists`
    });
    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(data)
    };
};