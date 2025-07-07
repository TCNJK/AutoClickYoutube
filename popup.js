document.addEventListener("DOMContentLoaded", () => {
  //#region Auto Click ContinueButton
  const continueButton = document.getElementById("autoContinueButton");

  chrome.storage.local.get("autoContinueButtonEnabled", (data) => {
    const isEnabled = data.autoContinueButtonEnabled ?? true;
    updateContinueButton(isEnabled);
  });

  continueButton.addEventListener("click", () => {
    chrome.storage.local.get("autoContinueButtonEnabled", (data) => {
      const current = data.autoContinueButtonEnabled ?? true;
      const next = !current;
      chrome.storage.local.set({ autoContinueButtonEnabled: next }, () => {
        updateContinueButton(next);
      });
    });
  });

  function updateContinueButton(isEnabled) {
    continueButton.textContent = isEnabled ? "Continue Turn OFF" : "Continue Turn ON";
    continueButton.style.backgroundColor = isEnabled ? "#e74c3c" : "#2ecc71";
  }
  //#endregion
  // //#region Auto Click Skip ADS
  // const skipAdsButton = document.getElementById("autoSkipADS");

  // chrome.storage.local.get("autoSkipADSButtonEnabled", (data) => {
  //   const isEnabled = data.autoSkipADSButtonEnabled ?? true;
  //   updateSkipButton(isEnabled);
  // });

  // skipAdsButton.addEventListener("click", () => {
  //   chrome.storage.local.get("autoSkipADSButtonEnabled", (data) => {
  //     const current = data.autoSkipADSButtonEnabled ?? true;
  //     const next = !current;
  //     chrome.storage.local.set({ autoSkipADSButtonEnabled: next }, () => {
  //       updateSkipButton(next);
  //     });
  //   });
  // });

  // function updateSkipButton(isEnabled) {
  //   continueButton.textContent = isEnabled ? "Skip ADS Turn OFF" : "Skip ADS Turn ON";
  //   continueButton.style.backgroundColor = isEnabled ? "#e74c3c" : "#2ecc71";
  // }
  // //#endregion
});
