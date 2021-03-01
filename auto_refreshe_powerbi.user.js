// ==UserScript==
// @name     Automatically refresh PowerBI
// @version  1.0.0
// @grant    none
// @match https://app.powerbi.com/*
// ==/UserScript==
var refresh = confirm('Automatically refresh?\nPress OK to refresh every 10 seconds.');

if(refresh) {
  var interval = setInterval(function(){
    document.getElementById("reportAppBarRefreshBtn").click();
  },1000*10)
}
