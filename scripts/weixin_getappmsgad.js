try{
  let res = $response.body;
  let body = JSON.parse(res);

  body = {};
  body.advertisement_num = 0;
  body.advertisement_info = [];
  body.no_ad_indicator_info = [];
  
  let result = JSON.stringify(body);

  //console.log(result);

  $done(result);
} catch (err) {
  console.log(`weixin_getappmsgad.js 出现异常：${err}`);
}
