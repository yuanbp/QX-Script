let res = $response.body;
let body = JSON.parse(res);

body.launch = '{}';
let result = JSON.stringify(body);

//console.log(result);

$done(result);
