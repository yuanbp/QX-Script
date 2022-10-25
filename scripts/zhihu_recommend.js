try {
  
  let body = $response.body;
  body=JSON.parse(body);

  let data = body.data.filter(e => {
    return e.type != 'feed_advert';
  });
  body.data = data;

  body=JSON.stringify(body);
  $done({body});
} catch (err) {
  console.log(`zhihu_recommend.js 出现异常：${err}`);
}
