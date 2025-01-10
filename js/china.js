async function checkAndRedirect() {
    try {
        // Cloudflare WorkerのAPIを呼び出す
        const response = await fetch('https://1.bujitianzhong03.workers.dev/');
        const data = await response.json();

        // 中国からのアクセスであればリダイレクト
        if (data.country_code === 'JP') {
            window.location.href = '/404.html';
        }
    } catch (error) {
        console.error('Error checking location:', error);
    }
}

// ページロード時に実行
window.onload = checkAndRedirect;
