document.getElementById('convertButton').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: convertSelectedTextToAudio
      });
    });
  });
  
  function convertSelectedTextToAudio() {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      const utterance = new SpeechSynthesisUtterance(selectedText);
      speechSynthesis.speak(utterance);
    } else {
      alert("Please select text to convert.");
    }
  }
  