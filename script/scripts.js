console.log("script.js is running ")

// Pushing SDE's to LE
lpTag.sdes = lpTag.sdes||[];
lpTag.sdes.push(
   {
        "type": "ctmrinfo",  //MANDATORY
        "info": {
           "cstatus": "テスト",  //CUSTOMER LIFECYCLE STATUS. FROM PRE-DEFINED LIST
           "ctype": "テスト",  //CUSTOMER TYPE OR TIER. FROM PRE-DEFINED LIST
           "customerId": "138766AC",  //UNIQUE CUSTOMER IDENTIFIER
           "balance": -400.99,  //THE CUSTOMER FINANCIAL BALANCE IN DECIMAL VALUE
           "currency": "USD",  //CURRENCY CODE
           "socialId": "11256324780",  //SOCIAL ID OF YOUR CHOICE: FACEBOOK, TWITTER ETC...
           "imei": "3543546543545688",  //UNIQUE DEVICE OR PHONE IDENTIFIER
           "userName": "user000",  //CONSUMER NICKNAME OR USERNAME
           "companySize": 500,  //COMPANY SIZE MEASURED BY NUMBER OF EMPLOYEES
           "accountName": "bank corp",  //THE CUSTOMER'S COMPANY NAME
           "role": "broker",  //CONSUMER ROLE TITLE
           "lastPaymentDate": {
                 "day": 15,  //THE DAY OF THE LAST PAYMENT NUMERIC VALUE
                 "month": 10,  //THE MONTH OF THE LAST PAYMENT NUMERIC VALUE
                 "year": 2014  //THE YEAR OF THE LAST PAYMENT NUMERIC VALUE
           },
           "registrationDate": {
                 "day": 23,  //THE DAY OF THE REGISTRATION NUMERIC VALUE
                 "month": 5,  //THE MONTH OF THE REGISTRATION NUMERIC VALUE
                 "year": 2013  //THE YEAR OF THE REGISTRATION NUMERIC VALUE
           },
           "storeNumber": "123865",  //STORE NUMBER
           "storeZipCode": "20505"  //STORE ZIP CODE
        }
   }
);



// Window API for ABC 
window.abctaglet = function(payload){
   window.location.href="https://bcrw.apple.com/sms:open?service=iMessage&recipient=urn:biz:44542500-8433-4337-b319-6bc47a5ba28c";
   console.log(payload);
   }
//LP authentication related setting is here
// lpTag.identities=[];
// lpTag.identities.push(identityFn);

function identityFn(callback) {
   callback({
      "iss": "https://liveperson.com",
      "sub": "Kohki2",
      "iat": 1532334785,
      "exp": 1592334785,
      "lp_sdes": [
         {
            "type": "ctmrinfo",
            "info": {
            "cstatus": "cancelled",
            "ctype": "vip",
            "balance": -400.99,
            "socialId": "11256324780",
            "imei": "3543546543545688",
            "companySize": 500,
            "accountName": "bank corp",
            "role": "broker",
            "lastPaymentDate": {
               "day": 15,
               "month": 10,
               "year": 2014
            },
            "registrationDate": {
               "day": 23,
               "month": 5,
               "year": 2013
            }
            }
         }
      ]
   });
}

window.lpGetAuthenticationToken = function (callback) {
   callback("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xpdmVwZXJzb24uY29tIiwic3ViIjoiS29oa2kyIiwiaWF0IjoxNTMyMzM0Nzg1LCJleHAiOjE1OTIzMzQ3ODUsImxwX3NkZXMiOlt7InR5cGUiOiJjdG1yaW5mbyIsImluZm8iOnsiY3N0YXR1cyI6ImNhbmNlbGxlZCIsImN0eXBlIjoidmlwIiwiYmFsYW5jZSI6LTQwMC45OSwic29jaWFsSWQiOiIxMTI1NjMyNDc4MCIsImltZWkiOiIzNTQzNTQ2NTQzNTQ1Njg4IiwiY29tcGFueVNpemUiOjUwMCwiYWNjb3VudE5hbWUiOiJiYW5rIGNvcnAiLCJyb2xlIjoiYnJva2VyIiwibGFzdFBheW1lbnREYXRlIjp7ImRheSI6MTUsIm1vbnRoIjoxMCwieWVhciI6MjAxNH0sInJlZ2lzdHJhdGlvbkRhdGUiOnsiZGF5IjoyMywibW9udGgiOjUsInllYXIiOjIwMTN9fX1dfQ.tXWDluL5pqN9vocACfITVGD_UkrOP4bzb_3Ic6ot8SFdwjktgIK5SEbCNDZ4--4_d_jl2w1j9jwb5Ya6FpOCccnJU4uKzLvAVxoi1-pm8NDSS9i0vezXdADU3aWw5JcNiEW9pgUlUcvDWbvva8iknhLdQCdrqOFvMejaSp8L9YjJsnsKmrcDCzBdiljHsbte1qM642pcgeuHLXiFuCSl-54ncxqliPyWGzlGHWNXxVq6MWle1f4GvDJzfCgX2p5DIQ4eWV9LWo7W9WsX41xI2XoCE10pkRjPpOilj25t3GpiI5_rYKfvrCu7NVBA2Y4TOP94IxpPtAvGSlssxeoYtw");
}


function clickEvent(){
   console.log("on click was called")
   
   var notifyWhenDone = function(err) {
      if (err) {
            // Do something with the error
      }
      // called when the command is completed successfully,
      // or when the action terminated with an error.
   };

   var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
   var data = {text: "Some text"};

   lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
}






// This is ABC related script
var baseUrl = "https://bcrw.apple.com/urn:biz:44542500-8433-4337-b319-6bc47a5ba28c?"
var intendId = ""
var bizGroupId = ""

$(document).ready(function () {
    var userAgent = window.navigator.userAgent.toLowerCase();
    intendId = _uac.browser ;
    bizGroupId = _uac.device;

    $('span#intendId').text(intendId);
    $('span#bizGroupId').text(bizGroupId);

    concatURL = baseUrl + "biz-intent-id=" + intendId + "&" + "biz-group-id=" + bizGroupId;

    $("#abcLink a").attr("href", concatURL)
    
});

+(function() {
   window._uac = {}; // define _uac as a global object
   var ua = window.navigator.userAgent.toLowerCase();
   var ver = window.navigator.appVersion.toLowerCase();

   // check browser version
   _uac.browser = (function(){
         if (ua.indexOf('edge') !== -1) return 'edge';                           // Edge
         else if (ua.indexOf("iemobile") !== -1)      return 'iemobile';         // ieMobile
         else if (ua.indexOf('trident/7') !== -1)     return 'ie11';             // ie11
         else if (ua.indexOf("msie") !== -1 && ua.indexOf('opera') === -1){
                  if      (ver.indexOf("msie 6.")  !== -1) return 'ie6';              // ie6
                  else if (ver.indexOf("msie 7.")  !== -1) return 'ie7';              // ie7
                  else if (ver.indexOf("msie 8.")  !== -1) return 'ie8';              // ie8
                  else if (ver.indexOf("msie 9.")  !== -1) return 'ie9';              // ie9
                  else if (ver.indexOf("msie 10.") !== -1) return 'ie10';             // ie10
         }
         else if (ua.indexOf('chrome')  !== -1 && ua.indexOf('edge') === -1)   return 'chrome';    // Chrome
         else if (ua.indexOf('safari')  !== -1 && ua.indexOf('chrome') === -1) return 'safari';    // Safari
         else if (ua.indexOf('opera')   !== -1) return 'opera';                  // Opera
         else if (ua.indexOf('firefox') !== -1) return 'firefox';                // FIrefox
         else return 'unknown_browser';
   })();

   // check device
   _uac.device = (function(){
         if(ua.indexOf('iphone') !== -1 || ua.indexOf('ipod') !== -1 ) return 'iphone';
         else if (ua.indexOf('ipad')    !== -1) return 'ipad';
         else if (ua.indexOf('android') !== -1) return 'android';
         else if (ua.indexOf('windows') !== -1 && ua.indexOf('phone') !== -1) return 'windows_phone';
         else return 'Desktop PC';
   })();

   // check ios version
   _uac.iosVer = (function(){
         if ( /iP(hone|od|ad)/.test( navigator.platform ) ) {
                  var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                  var versions = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
                  return versions[0];
         }
         else return 0;
   })();
   _uac.isIE = (_uac.browser.substr(0, 2) === 'ie' && _uac.browser !== 'iemobile');
   _uac.isiOS = (_uac.device === 'iphone' || _uac.device === 'ipad');
   _uac.isMobile = (ua.indexOf('mobi') !== -1 || _uac.device === 'iphone' || (_uac.device === 'windows_phone' && ua.indexOf('wpdesktop') === -1) || _uac.device === 'iemobile');
   _uac.isTablet = (_uac.device === 'ipad' || (_uac.device === 'android' && !_uac.isMobile));
   _uac.isTouch  = ('ontouchstart' in window);
   _uac.isModern = !(_uac.browser === 'ie6' || _uac.browser === 'ie7' || _uac.browser === 'ie8' || _uac.browser === 'ie9' || (0 < _uac.iosVer && _uac.iosVer < 8));

   // Set the results as class names of the html
   var homeClass = function() {
      var classStr = ' ';
      classStr += (_uac.browser !== '') ? _uac.browser + " " : 'browser-unknown ',
      classStr += (_uac.device  !== '') ? _uac.device + " "  : 'device-unknown ',
      classStr += (_uac.isMobile) ? 'mobile ' : 'desktop ',
      classStr += (_uac.isTouch) ? 'touch '  : 'mouse ',
   classStr += (_uac.isiOS) ? 'ios ' : '',
   classStr += (_uac.isIE) ? 'ie ' : '',
      classStr += (_uac.isModern) ? 'modern ' : 'old ';
   return classStr;
   };

   document.addEventListener('DOMContentLoaded', function() {
   document.documentElement.className += homeClass();
   });

})();