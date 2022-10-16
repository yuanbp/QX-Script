let res = $response.body;
let body = JSON.parse(res);

let items=body['data']['items'].filter(e => {
  if(e.hasOwnProperty('banner_item')){
    delete e['banner_item'];
  }
  return ((e.hasOwnProperty('card_goto') && !e['card_goto'].startsWith('ad_')) && !e.hasOwnProperty('ad_info'));
})
body['data']['items']=items;

let result = JSON.stringify(body);

//console.log(result);

$done(result);
