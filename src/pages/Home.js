/*global chrome*/
import logo from '../logo.svg';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Home () {
  const [url, setUrl] = useState('');
  const [responseFromContent, setResponseFromContent] = useState('');

  // * Get current URL
  useEffect(() => {
    const queryInfo = {active: true, lastFocusedWindow: true};

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      console.log('tabs:',tabs);
      const url = tabs[0].url;
      setUrl(url);
    })
  }, []);

  // * Send message to the content script
  const sendTestMessage = () => {
    const message = {
      message: "Hello from React"
    }
    const queryInfo = {
      active: true,
      currentWindow: true
    }
    console.log('sendMsg', message);
    
    // * We can't use "chrome.runtime.sendMessage" for sending messages from React.
    // * For sending messages from React we need to specify which tab to send it to.
    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      console.log('sendMsgTabs:',tabs);
      const currentTabId = tabs[0].id;
      // * Sends a single message to the content script(s) in the specified tab,
      // * with an optional callback to run when a response is sent back.
      // *
      // * The runtime.onMessage event is fired in each content script running
      // * in the specified tab for the current extension.
      chrome.tabs.sendMessage(currentTabId, message, (response) => {
        console.log(response);
        setResponseFromContent(response)});
        console.log('done to send msg to chrome');
    });
    console.log('finish to send msg');
  }
  console.log(responseFromContent);

  const sendRemoveMessage = () => {
    const message = {
      message: 'delete logo'
    };
    const queryInfo = {
      active: true,
      currentWindow: true
    };
    console.log('deleteMsg', message);

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      console.log('deleteMsgTabs:',tabs);
      const currentTabId = tabs[0].id;
      chrome.tabs.sendMessage(currentTabId, message, response => {setResponseFromContent(response)})
    })
    console.log('finish to delete msg');
  }
  return (
      <div className='App-header'>
        <Link to='/about'>About</Link>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CURRENT URL:
        </p>
        <p>
          {url}
        </p>
        <button onClick={sendTestMessage}>Get {`<h1>`}tag Title</button>
        <button onClick={sendRemoveMessage}>Remove google logo</button>
        <p>Response from content:</p>
          <p>
            {responseFromContent}
          </p>
      </div>
  );
}

export default Home;