document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggle");

  chrome.storage.local.get("autoClickEnabled", (data) => {
    const isEnabled = data.autoClickEnabled ?? true;
    updateButton(isEnabled);
  });

  button.addEventListener("click", () => {
    chrome.storage.local.get("autoClickEnabled", (data) => {
      const current = data.autoClickEnabled ?? true;
      const next = !current;
      chrome.storage.local.set({ autoClickEnabled: next }, () => {
        updateButton(next);
      });
    });
  });

  function updateButton(isEnabled) {
    button.textContent = isEnabled ? "Turn OFF" : "Turn ON";
    button.style.backgroundColor = isEnabled ? "#e74c3c" : "#2ecc71";
  }
});
