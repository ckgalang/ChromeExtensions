// alert('Hello World')
// chrome.runtime.onMessage.addListener(function (request, sender, senderResponse) {
//   const re = new RegExp('bear', 'gi')
//   const matches = document.documentElement.innerHTML.match(re)
//   senderResponse({count: matches.length})
// })
const re = new RegExp('bear', 'gi')
const matches = document.documentElement.innerHTML.match(re)
chrome.runtime.sendMessage({
  url: window.location.href,
  count: matches.length
})
