let whitelist=['追番','推荐','动画','影视']

let body = $response.body
body=JSON.parse(body)

body['data']['tab'].forEach((element, index) => {
if(!(whitelist.includes(element['name']))) body['data']['tab'].splice(index,1)  
});
//console.log(body['data']['tab']);

body['data']['bottom'].forEach((element, index)=> {
    if(element['pos']==4){      
       body['data']['bottom'].splice(index,1)  
    }
})

body=JSON.stringify(body)

//console.log(body)

$done({body}) 