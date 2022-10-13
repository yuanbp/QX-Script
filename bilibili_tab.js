let tablist=['追番','推荐','动画','影视'];
let bottomlist=['首页','动态','我的']

let body = $response.body;
body=JSON.parse(body);

let tabArr=body['data']['tab'].filter((element) => {
//let tabArr=body.data.tab.filter((element) => {
  //console.log(element);
  return tablist.includes(element['name']);
  //return tablist.includes(element.name);
});
//body['data']['tab'].splice(0,body['data']['tab'].length)
//body['data']['tab'].push(...tabArr);
//body.data.tab=tabArr;
body['data']['tab']=tabArr;
//console.log(body['data']['tab']);

let bottomArr=body['data']['bottom'].filter((element) => {
//let bottomArr=body.data.bottom.filter((element) => {
  //console.log(element.name);
  return bottomlist.includes(element['name']);
  //return bottomlist.includes(element.name);
});
//console.log(bottomArr.length);
//body['data']['bottom'].splice(0,body['data']['bottom'].length)
//body['data']['bottom'].push(...bottomArr);
//body.data.bottom=bottomArr;
body['data']['bottom']=bottomArr;

body=JSON.stringify(body);
$done({body});
