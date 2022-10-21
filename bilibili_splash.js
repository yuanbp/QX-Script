delete $response.body;
//console.log(JSON.stringify($response));

let res = $response.body;
let body = JSON.parse(res);

//body.data = {};
body.data.max_time = 0;
body.data.min_interval = 31536000;
body.data.pull_interval = 31536000;
for (let i = 0; i < body.data.list.length; i++) {
  body.data.list[i].duration = 0;
  body.data.list[i].begin_time = 1915027200;
  body.data.list[i].end_time = 1924272000;
}
result = JSON.stringify(body);

//console.log(result);

$done(result);
