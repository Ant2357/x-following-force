(() => {
  const TARGET_TEXT = "フォロー中";

  const switchToFollowing = () => {
    const tabs = document.querySelectorAll('[role="tab"]');

    for (const tab of tabs) {
      if (tab.innerText.includes(TARGET_TEXT)) {
        tab.click();
        return true;
      }
    }
    return false;
  };

  // 初回試行
  if (switchToFollowing()) return;

  // X は SPA なので DOM 変化を監視
  const observer = new MutationObserver(() => {
    if (switchToFollowing()) {
      observer.disconnect();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
