let whitelist=['追番','推荐','动画','影视']

let body = $response.body
body=JSON.parse(body)

body['data']['tab'].forEach((element, index) => {
  console.log(element['name']);
  if(!(whitelist.includes(element['name']))) {
    body['data']['tab'].splice(index,1);
    console.log(element['name']);
  }  
});

body['data']['bottom'].forEach((element, index)=> {
    if(element['pos']==4){      
       body['data']['bottom'].splice(index,1)  
    }
})

body=JSON.stringify(body)
$done({body})
