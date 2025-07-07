let timeTracker = 5000;

//#region Auto Continue Button
let continueButtonIntervalId = null;

function autoClickContinueButton() {
  const popup = document.querySelector("yt-confirm-dialog-renderer[dialog]");

  if (popup) {
    const continueButton = popup.querySelector("#confirm-button button");
    if (continueButton) {
      console.log("🔁 Found YouTube pause popup. Clicking 'Continue' button. " + new Date().toLocaleString());
      continueButton.click();
      console.log("🔁 Clicking 'Continue' button successful. " + new Date().toLocaleString());
      popup.remove();
    }
  }
}

function startAutoClickContinueButton() {
  if (!continueButtonIntervalId) {
    continueButtonIntervalId = setInterval(autoClickContinueButton, timeTracker);
    console.log("▶️ AutoClick ContinueButton started");
  }
}

function stopAutoClickContinueButton() {
  if (continueButtonIntervalId) {
    clearInterval(continueButtonIntervalId);
    continueButtonIntervalId = null;
    console.log("⏹️ AutoClick ContinueButton stopped");
  }
}

chrome.storage.local.get("autoContinueButtonEnabled", (data) => {
  const isEnabled = data.autoContinueButtonEnabled ?? true;
  if (isEnabled) startAutoClickContinueButton();
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.autoContinueButtonEnabled) {
    const newValue = changes.autoContinueButtonEnabled.newValue;
    if (newValue) {
      startAutoClickContinueButton();
    } else {
      stopAutoClickContinueButton();
    }
  }
});
//#endregion
