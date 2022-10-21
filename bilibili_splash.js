try {
  //delete $response.body;
  //console.log(JSON.stringify($response));
  //console.log(JSON.stringify($request));
  let requestJson = JSON.stringify($request);
  let request = JSON.parse(requestJson);
  console.log(request.path);
  
//   let res = $response.body;
//   let body = JSON.parse(res);
//   
//   if($request.path.startsWith('/x/v2/splash/list?'))) {
//     body.data.max_time = 0;
//     body.data.min_interval = 31536000;
//     body.data.pull_interval = 31536000;
//     for (let i = 0; i < body.data.list.length; i++) {
//       body.data.list[i].duration = 0;
//       body.data.list[i].begin_time = 1915027200;
//       body.data.list[i].end_time = 1924272000;
//     }
//   } else {  
//     body.data = {};
//   }
//   result = JSON.stringify(body);
//   
//console.log(result);
//   
//   $done(result);
} catch (err) {
  console.log(`bilibili_splash.js 出现异常：${err}`);
}
