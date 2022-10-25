try {
  let res = $response.body;
  let body = JSON.parse(res);

  if(body.hasOwnProperty('ad_info')) {
    delete body.ad_info;
  }
  
  let result = JSON.stringify(body);
  $done(result);
} catch (err) {
  console.log(`zhihu_article.js 出现异常：${err}`);
}
