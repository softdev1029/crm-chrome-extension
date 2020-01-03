chrome.runtime.onInstalled.addListener(() => {
  // TODO: have a look https://www.gmass.co/blog/redirect-user-to-website-after-installing-chrome-extension/
  chrome.tabs.create({
    url: 'https://mail.google.com',
    active: true
  });

  return false;
});

