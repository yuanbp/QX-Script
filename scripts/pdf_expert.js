try{
  let res = $response.body;
  //console.log(res);
  let body = JSON.parse(res);

  let body = {};
  let jsonStr= '{"originalTransactionId":"730000355073823","subscriptionState":"active","isInGracePeriod":true,"subscriptionExpirationDate":"02:33 19\/08\/2020","subscriptionAutoRenewStatus":"autoRenewOff","isEligibleForIntroPeriod":true,"isPDFExpert6User":true,"subscriptionReceiptId":"1559207582000"}';
  body = JSON.parse(jsonStr);
  body.subscriptionExpirationDate = '10:05 30\/10\/2023';
  
  let result = JSON.stringify(body);

  //console.log(result);

  $done(result);
} catch (err) {
  console.log(`pdf_expert.js 出现异常：${err}`);
}
