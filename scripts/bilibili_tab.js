try {
  const tablist=['追番','推荐','动画','影视'];
  const bottomlist=['首页','动态','我的']

  let body = $response.body;
  body=JSON.parse(body);

  let tabArr=body.data.tab.filter((e) => {
    return tablist.includes(e.name);
  });
  delete body.data.tab;
  body.data.tab=tabArr;

  let bottomArr=body.data.bottom.filter((e) => {
    return bottomlist.includes(e.name);
  });
  delete body.data.bottom;
  body.data.bottom=bottomArr;

  body=JSON.stringify(body);
  $done({body});
} catch (err) {
  console.log(`bilibili_tab.js 出现异常：${err}`);
}
