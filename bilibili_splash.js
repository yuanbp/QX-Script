let res = $response.body;
let body = JSON.parse(body);

body['data'] = {};
result = JSON.stringify(body);

console.log(result);

$done(result);
