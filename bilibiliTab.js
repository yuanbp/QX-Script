let whitelist=['追番','推荐','动画','影视'];

let body = $response.body;
body=JSON.parse(body);

let tabArr = body['data']['tab'].filter((element) => {
  console.log(element);
  return whitelist.includes(element['name']);
});
body['data']['tab'].splice(0,body['data']['tab'].length)
body['data']['tab'].push(...tanArr);
console.log(body['data']['tab']);

body=JSON.stringify(body);
$done({body});
