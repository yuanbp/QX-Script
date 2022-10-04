let body = $response.body;
let obj = JSON.parse(body);

obj['data'] = {};
body = JSON.stringify(obj);

//console.log(body);

$done(body);
