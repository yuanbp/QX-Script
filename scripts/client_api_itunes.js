try{
  let res = $response.body;
  let body = JSON.parse(res);

  delete body.result;
  body.result = {};
  delete body.meta;
  body.meta = {};
  let result = JSON.stringify(body);

  //console.log(result);

  $done(result);
} catch (err) {
  console.log(`client_api_itunes.js 出现异常：${err}`);
}
