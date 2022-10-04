let whitelist=['追番','推荐','动画','影视']

let body = $response.body
body=JSON.parse(body)

let tabArr = body['data']['tab'].filter((element) => {
  return whitelist.includes(element['name'])(
});
body['data']['tab'] = tabArr;

body=JSON.stringify(body)
$done({body})
