let intervalId = null;

function autoClickConfirmButton() {
  const popup = document.querySelector("yt-confirm-dialog-renderer[dialog]");

  if (popup) {
    const button = popup.querySelector("#confirm-button button");
    if (button) {
      console.log("🔁 Found YouTube pause popup. Clicking 'Yes' button.");
      button.click();
    }
  }
}

function startAutoClick() {
  if (!intervalId) {
    intervalId = setInterval(autoClickConfirmButton, 3000);
    console.log("▶️ AutoClick started");
  }
}

function stopAutoClick() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    console.log("⏹️ AutoClick stopped");
  }
}

chrome.storage.local.get("autoClickEnabled", (data) => {
  const isEnabled = data.autoClickEnabled ?? true;
  if (isEnabled) startAutoClick();
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.autoClickEnabled) {
    const newValue = changes.autoClickEnabled.newValue;
    if (newValue) {
      startAutoClick();
    } else {
      stopAutoClick();
    }
  }
});
