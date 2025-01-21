let devtoolsOpen = false;
const threshold = 200; // 閾値を設定

// ショートカットキーの無効化
document.addEventListener('keydown', function(e) {
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key.toUpperCase()))) {
    e.preventDefault();
    alert('開発者ツールを開こうとしています!');
  }
});

// 右クリックの無効化
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  alert('右クリックが無効化されています。');
});

// 開発者ツールの検出
setInterval(function() {
  const widthThreshold = window.outerWidth - window.innerWidth > threshold;
  const heightThreshold = window.outerHeight - window.innerHeight > threshold;

  if (widthThreshold || heightThreshold) {
    if (!devtoolsOpen) {
      devtoolsOpen = true;
      alert('開発者ツールが検出されました。');
      // 必要に応じてリダイレクト
      // window.location.href = 'about:blank';
    }
  } else {
    devtoolsOpen = false;
  }
}, 1000);

// URLのチェックとリダイレクト
if (window.location.hostname !== 'kouta8888.pages.dev') {
  window.location.href = 'https://kouta8888.pages.dev/';
}
