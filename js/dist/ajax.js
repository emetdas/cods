// http://youmightnotneedjquery.com/
// https://blog.garstasio.com/you-dont-need-jquery/ajax/
// https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started
// https://www.sitepoint.com/guide-vanilla-ajax-without-jquery/
// https://xhr.spec.whatwg.org/
// setRequestHeader
setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
setRequestHeader("X-Requested-With", "XMLHttpRequest");
// setRequestHeader
function ajaxlodad() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "", true);
  xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        let data = xhr.response;
        // .innerHTML = data;
      }
    }
  };
  xhr.send();
}
ajaxlodad();