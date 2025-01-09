// クッキーを取得する関数
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [key, value] = cookie.trim().split('=');
        if (key === name) return value;
    }
    return null;
}

// クッキーを設定する関数
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// 中国からのアクセスかチェックしてリダイレクト
async function checkAndRedirect() {
    const countryCodeCookie = getCookie('country_code');

    if (countryCodeCookie) {
        // クッキーが存在する場合は判定をスキップ
        console.log('Country code from cookie:', countryCodeCookie);
        if (countryCodeCookie === 'CN') {
            window.location.href = '/404.html'; // 404.html にリダイレクト
        }
    } else {
        try {
            // クッキーがない場合はAPIを呼び出す
            console.log('Fetching IP information from API...');
            const response = await fetch('https://ipapi.co/json/');
            if (!response.ok) {
                throw new Error('Failed to fetch IP geolocation data');
            }
            const data = await response.json();
            const countryCode = data.country_code;

            // クッキーに保存（7日間有効）
            setCookie('country_code', countryCode, 7);

            // 中国からのアクセスであればリダイレクト
            if (countryCode === 'JA') {
                window.location.href = '/404.html';
            }
        } catch (error) {
            console.error('Error determining user location:', error);
        }
    }
}

// ページロード時にチェック
window.onload = checkAndRedirect;
