async function checkAndRedirect() {
    try {
        // IP Geolocation API を利用
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) {
            throw new Error('Failed to fetch IP geolocation data');
        }
        const data = await response.json();
        // 中国からのアクセスか確認
        if (data.country_code === 'CN') {
            window.location.href = '/404.html'; // 404.html にリダイレクト
        }
    } catch (error) {
        console.error('Error determining user location:', error);
    }
}

// ページロード時にチェック
window.onload = checkAndRedirect;
