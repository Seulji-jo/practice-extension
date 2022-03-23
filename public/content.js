/*global chrome*/
const messagesFromAppListener = (message, sender, response) => {
  console.log('[content.js]. Message received', {message, sender});

  if (sender.id === chrome.runtime.id && message.message === 'Hello from React') {
    const title = document.querySelector('h1');
    console.log(title);
    if (title) response(`Title: ${title.textContent}`)
    else response('No <h1> Title')
    // response('Hello from content.js')
  }

  if (sender.id === chrome.runtime.id && message.message === 'delete logo') {
    // const logo = document.getElementById('hplogo');
    const logo = document.querySelector('.lnXdpd');
    if (logo) {
      logo.parentElement.removeChild(logo);
      response('구글 로고를 삭제했습니다.')
    } else {
      response('구글 로고가 존재하지 않습니다.')
    }
  }
}

// * Fired when a message is sent from either an extension process or a content script.
chrome.runtime.onMessage.addListener(messagesFromAppListener);
console.log(chrome.runtime.id);