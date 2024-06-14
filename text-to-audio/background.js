chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "convertToAudio",
      title: "Convert to Audio",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "convertToAudio") {
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: convertTextToAudio,
        args: [info.selectionText]
      });
    }
  });
  
  function convertTextToAudio(selectedText) {
    const utterance = new SpeechSynthesisUtterance(selectedText);
    speechSynthesis.speak(utterance);
  }
  