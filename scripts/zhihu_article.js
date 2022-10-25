try {
  let res = $response.body;
  let body = JSON.parse(res);

  if(body.hasOwnProperty('ad_info')) {
    delete body.ad_info;
  }
  
  JSON.stringify(body);
  $done(result);
} catch (err) {
  console.log(`bilibili_tab.js 出现异常：${err}`);
}
