try{
  let res = $response.body;
  //console.log(res);
  let body = JSON.parse(res);

  body.linkedProducts[0].inAppStates[0].subscriptionExpirationDate = '12:04 01/11/2023';
  body.linkedProducts[0].inAppStates[0].subscriptionState = 'active';
  body.linkedProducts[0].inAppStates[0].isEligibleForIntroPeriod = true;
  body.linkedProducts[0].inAppStates[0].isInGracePeriod = true;
  body.linkedProducts[0].inAppStates[0].isPDFExpert6User = true;

  let result = JSON.stringify(body);

  console.log(result);

  $done(result);
} catch (err) {
  console.log(`pdf_expert2.js 出现异常：${err}`);
}
