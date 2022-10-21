try {
  let res = $response.body;
  let body = JSON.parse(res);
  
//   delete body.data.mall_home;
    
//   console.log(body);
  
//   let sections_v2 = body.data.sections_v2.filter((e, i) => {
//     return e.title != '创作中心';
//   });
  
  let sections_v2 = body.data.sections_v2;
  
  let recommendedMenuWhiteList = ['我的课程', '我的钱包'];
  //let recommendedMenuWhiteList = [400, 404];
  
  let recommendedIndex = -1;
  recommendedIndex = sections_v2.findIndex(e => {
    return findRecommendedIndex(e, '推荐服务');
  });
  
  if(recommendedIndex != -1) {
    let items = recommendedMenu(sections_v2[recommendedIndex].items);
    sections_v2[recommendedIndex].items = items;
  }
  
  body.data.sections_v2 = sections_v2;
  
  function recommendedMenu(items) {
    return items.filter(e => {
      if(e.hasOwnProperty('title')) {
//         console.log(e.title);
        return recommendedMenuWhiteList.includes(e.title);
      }
      return true;
   });
  }

  function findRecommendedIndex(item, keyword) {
    if(item.hasOwnProperty('title')) {
      return keyword == item.title;
    }
    return false;
  }

//   console.log(body);
} catch(err) {
  console.log(`bilibili_mine.js 出现异常：${err}`)
}
