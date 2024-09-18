
const appName = document.getElementById("appName")
const appCodeName = document.getElementById("appCodeName")
const product = document.getElementById("product")
const appVersion = document.getElementById("appVersion")
const userAgent = document.getElementById("userAgent")
const platform = document.getElementById("platform")
const language = document.getElementById("language")
const onLine = document.getElementById("onLine")
const cookieEnabled = document.getElementById("cookieEnabled")
const javaEnabled = document.getElementById("javaEnabled")



appName.innerHTML = "navigator appName: " + navigator.appName;
appCodeName.innerHTML = "navigator appCodeName: " + navigator.appCodeName;
product.innerHTML = "navigator product: " + navigator.product;
appVersion.innerHTML = "navigator appVersion: " + navigator.appVersion;
userAgent.innerHTML = "navigator userAgent: " + navigator.userAgent;
platform.innerHTML = "navigator platform: " + navigator.platform;
language.innerHTML = "navigator language: " + navigator.language;
onLine.innerHTML = "navigator onLine: " + navigator.onLine;
cookieEnabled.innerHTML = "navigator cookieEnabled: " + navigator.cookieEnabled;
javaEnabled.innerHTML = "navigator javaEnabled(): " + navigator.javaEnabled();










