(function() {
  // 開発者ツールが開かれているかどうかをチェックする関数
  let devToolsOpen = false;

  const checkDevTools = () => {
    const threshold = 160; // 開発者ツールを開いたときのウィンドウサイズの変化量
    const widthThreshold = window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold;
    
    // 開発者ツールが開かれている場合
    if (widthThreshold) {
      devToolsOpen = true;
      debugger;  // 開発者ツールが開かれているときにコードを停止させる
    }
  };

  // 定期的に開発者ツールが開かれているか確認
  setInterval(checkDevTools, 1000);  // 毎秒確認

  // キーが押されたときの処理
  document.addEventListener('keydown', function(e) {
    // Ctrl + Shift + I（開発者ツールのショートカット）または F12
    if ((e.ctrlKey && e.shiftKey && e.keyCode === 73) || e.keyCode === 123) {
      // about:blank に移動
      window.location.href = 'about:blank';
    }
  });
})();
