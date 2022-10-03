/** {
  "code": "00",
  "materialsList": [{
    "billId": "4501",
    "billMaterialsId": "6085",
    "filePath": "https://ad.12306.cn/res/adfiles//delivery/2022/09/30/c72732f894ec471194b4c8bcb7c3dc45.jpg",
    "title": "12306约车",
    "linkUri": "app#60000020#/www/index.html?showTitleBar=false&channel=003",
    "linkType": 3,
    "viewUrlList": ["https://ad.12306.cn/ad/mon/mzc?bid=4501&appId=2&mid=6085&pn=0007&n=1&ct=0&cn=CH&reqDate=1664784537511&rid=e01bdd1956fd491db99dec7d55979911&did=3AC59762-7C09-43DC-89A6-83410D0F774F&t=1"],
    "clickUrlList": ["https://ad.12306.cn/ad/mon/mzc?bid=4501&appId=2&mid=6085&pn=0007&n=1&ct=0&cn=CH&reqDate=1664784537511&rid=e01bdd1956fd491db99dec7d55979911&did=3AC59762-7C09-43DC-89A6-83410D0F774F&t=2&w=__WIDTH__&h=__HEIGHT__&dx=__DOWN_X__&dy=__DOWN_Y__&ux=__UP_X__&uy=__UP_Y__"],
    "textDesc": "",
    "dplUrl": "",
    "advNature": 4,
    "pn": "0007",
    "creativeType": 1,
    "dc": 1,
    "dd": "向上滑动#跳转至详情页",
    "dv": 0,
    "ds": 6,
    "mp": 30
  }],
  "rid": "e01bdd1956fd491db99dec7d55979911",
  "advertParam": {
    "marginBottom": 15,
    "skipTime": 3000,
    "showSkipBtn": 1,
    "skipTimeAgain": 20,
    "chacheTime": 600000,
    "fixedscreen": 3,
    "isFullScreen": 0,
    "isDefault": 0,
    "displayNumDi": 1,
    "index": 0,
    "bs": 2
  }
} */

let res = $response.body;
let body = JSON.parse(res);

body['code'] = '00';
body['materialsList'] = [];
body['rid'] = '';

body.advertParam.skipTime = 0;

//body['advertParam'] = {};

/**
body['advertParam']['marginBottom'] = 0;
body['advertParam']['skipTime'] = 0;
body['advertParam']['showSkipBtn'] = 0;
body['advertParam']['skipTimeAgain'] = 0;
body['advertParam']['chacheTime'] = 0;
body['advertParam']['fixedscreen'] = 0;
body['advertParam']['isDefault'] = 1;
body['advertParam']['displayNumDi'] = 0;
body['advertParam']['index'] = 0;
body['advertParam']['bs'] = 0;
*/

result = JSON.stringify(body);

console.log(result);

$done(result);
