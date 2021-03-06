
var json2={"requestId":"4",
"kbLanguageCode":"en",
 "detectedLanguage":"", 
 "answers": [{"id":"38990462", "rechanneling":[{
  "channel": 5,
  "buttonText": "Call",
  "phoneNumber": "1-800-986-9248",
  "customContent": "",
  "name": "Support (nanorep.com only)",
  "description": "Support"
}], "keywordsetId":"185", "likes":0, "title":"Can I register an  account and make a deposit if I'm outside New Jersey?", "summary":"<p>You can register for an account and make deposits from anywhere in the US; however, you must be physically located in New Jersey to play for real money.</p><p>Additional information: Withdrawals may be requested from anywhere in the world, once your CaesarsCasino.com account and withdrawal method have been verified.</p>", "actions":""},{"id":"35462430", "rechanneling":[{
  "channel": 5,
  "buttonText": "Call",
  "phoneNumber": "1-800-986-9248",
  "customContent": "",
  "name": "Support (nanorep.com only)",
  "description": "Support"
}], "keywordsetId":"7", "likes":184, "title":"How to deposit?", "summary":"<div><div><p>In order to deposit, you must be a registered player.The following payment methods are accepted at CaesarsCasino.com:</p><ul><li><a href=\"javascript:void(0)\" nanoreplinkid=\"38990294\">ACH (Electronic Check)</a></li><li><a href=\"javascript:void(0)\" nanoreplinkid=\"38990254\">MasterCard/Visa Credit Card*</a></li><li><a href=\"javascript:void(0)\" nanoreplinkid=\"38990214\">Online Bank Transfer</a></li><li><a href=\"javascript:void(0)\" nanoreplinkid=\"68048668\">PayPal</a></li><li><a href=\"javascript:void(0)\" nanoreplinkid=\"38990379\">Cash at the Caesars Atlantic City casino cage</a></li><li><a href=\"javascript:void(0)\" nanoreplinkid=\"38989979\">NETELLER</a></li><li><a href=\"javascript:void(0)\" nanoreplinkid=\"38989849\">PayNearMe</a></li></ul><p>*Some credit card issuers do not accept online gaming transactions.</p><p>If your transaction was declined, you may want to try another credit card or an alternative deposit method that we offer. When using ACH (bank transfer), your deposits are available immediately.</p><p>If you&rsquo;re looking for a pre-paid card option, some players have had success with a pre-paid MasterCard (like the one offered by PayPal). These are available at leading drugstores, convenience stores and other well-known retailers.</p><p>If you are already a player, please follow the instructions below to deposit into your CaesarsCasino.com account:</p><ol><li>Log in by entering your registered email address and password.</li><li>Click on the &quot;Cashier&quot; button (located next to your name on the upper right hand corner of the screen).</li><li>Click on your preferred payment method and follow the on screen instructions.</li><li>You can also deposit cash directly at the Caesars Atlantic City casino cage.</li></ol><p>Please note, if you deposit with a credit card, additional costs and/or fees may be assessed by your card issuer pursuant to your cardholder agreement. CaesarsCasino.com utilizes the most advanced security and encryption technologies available, to ensure that your transaction and privacy are completely secure.</p></div></div><p>&nbsp;</p>", "actions":""},{"id":"38991140", "rechanneling":[{
  "channel": 5,
  "buttonText": "Call",
  "phoneNumber": "1-800-986-9248",
  "customContent": "",
  "name": "Support (nanorep.com only)",
  "description": "Support"
}], "keywordsetId":"75", "likes":0, "title":"How do I claim a Deposit bonus?", "summary":"<p>To claim a Deposit bonus you must be logged into your account.</p><ol style=\"list-style-type: upper-alpha;\"><li>Select &ldquo;Deposit&rdquo;</li></ol><p><img alt=\"\" src=\"https://nr1.s3.amazonaws.com/kb/21C1050/21C106D/252F524/1/B1.png\" style=\"width: 384px; height: 56px;\" /></p><ol style=\"list-style-type: upper-alpha;\"><li value=\"2\">Select your desired deposit method</li></ol><p><img alt=\"\" src=\"https://nr1.s3.amazonaws.com/kb/21C1050/21C106D/252F524/2/B2.png\" style=\"width: 263px; height: 158px;\" /></p><ol style=\"list-style-type: upper-alpha;\"><li value=\"3\">Enter in your deposit amount and click &ldquo;I have a bonus code&rdquo;</li></ol><p><img alt=\"\" src=\"https://nr1.s3.amazonaws.com/kb/21C1050/21C106D/252F524/3/B3.png\" style=\"width: 255px; height: 77px;\" /></p><ol style=\"list-style-type: upper-alpha;\"><li value=\"4\">Enter in your bonus code and click on the &ldquo; &gt; &ldquo; button to continue</li></ol><p><img alt=\"\" src=\"https://nr1.s3.amazonaws.com/kb/21C1050/21C106D/252F524/4/B4.png\" style=\"width: 203px; height: 92px;\" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><ol style=\"list-style-type: upper-alpha;\"><li value=\"5\">Select the appropriate bonus once it appears on your screen (please be aware there may be several bonuses available to you, please make sure you pick the bonus you want from the list)</li></ol><p><img alt=\"\" src=\"https://nr1.s3.amazonaws.com/kb/21C1050/21C106D/252F524/5/B5.png\" style=\"width: 199px; height: 117px;\" /></p><p style=\"text-align: center;\">&nbsp;Note- If you would like to make a deposit and not claim a bonus select &ldquo;No thanks, continue without a bonus&rdquo;</p><p style=\"text-align: center;\"><img alt=\"\" src=\"https://nr1.s3.amazonaws.com/kb/21C1050/21C106D/252F524/6/B6.png\" style=\"width: 386px; height: 48px;\" /></p><ol style=\"list-style-type: upper-alpha;\"><li value=\"6\">To finish claiming the bonus click &ldquo;NEXT&rdquo; to continue</li></ol><p><img alt=\"\" src=\"https://nr1.s3.amazonaws.com/kb/21C1050/21C106D/252F524/7/B7.png\" style=\"width: 260px; height: 190px;\" /></p><p>&nbsp;</p><p>Please review all terms and conditions for promotions/bonuses before accepting.</p><p>To view CaesarsCasino.com bonus policy click <a href=\"https://www.caesarscasino.com/en/policies/bonus-policy\">here</a>!</p>", "actions":""}]};

var li = document.querySelectorAll('.json_list');
console.log(li);
for (var i=0; i<json2.answers.length; i++){
  //  console.log(json2.answers[i].title);//нашли названия для списка
    var arr = json2.answers[i].title.split(" ", 5); //обрезали 5 слов для вывода
    var str = arr.join(' ');
    li[i].innerHTML = str;
}
var list_item = document.querySelectorAll('.list_item');
console.log(list_item);

for(var j=0; j<list_item.length; j++){
  var first_titles = list_item[j].innerHTML;
  console.log(first_titles);
  var arr = first_titles.split(" ", 5); //обрезали 5 слов для вывода
  var str = arr.join(' ');
    list_item[j].innerHTML = str;
}