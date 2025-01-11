                (function() {
                    // iframe制限が有効な場合
                    if (true) {
                        if (window.top !== window) {
                            // iframe内で表示されている場合、親ウィンドウにリダイレクト
                            window.top.location.href = window.location.href;
                            return;
                        }
                    }

                    // 開発者ツールの制限
                    if (true) {
                        document.addEventListener('keydown', function(e) {
                            // F12やCtrl+Shift+Iなどで開発者ツールを開くのを防ぐ
                            if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
                                e.preventDefault();
                                alert('開発者ツールは禁止されています');
                            }
                        });

                        document.addEventListener('contextmenu', function(e) {
                            e.preventDefault();
                            alert('右クリックは禁止されています');
                        });
                    }
                    
                    // 現在のホスト名をチェック
                    if (window.location.hostname === 'http://kouta8888.pages.dev/') {
                        // クエリパラメータを削除してリダイレクト
                        let newUrl = 'https://kouta0202.pages.dev';
                        window.location.href = newUrl;
                    }
                })();
