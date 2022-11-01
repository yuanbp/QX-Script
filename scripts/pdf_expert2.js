try{
  let res = $response.body;
  //console.log(res);
  let body = JSON.parse(res);

  body.linkedProducts.inAppStates.subscriptionExpirationDate = '10:05 30\/10\/2023';
  body.linkedProducts.inAppStates.subscriptionState = 'active';
  body.linkedProducts.inAppStates.isEligibleForIntroPeriod = true;
  body.linkedProducts.inAppStates.isInGracePeriod = true;
  body.linkedProducts.inAppStates.isPDFExpert6User = true;

  let result = JSON.stringify(body);

  //console.log(result);

  $done(result);
} catch (err) {
  console.log(`pdf_expert2.js 出现异常：${err}`);
}
