// created by KOUTA
async function checkAccess() {
    try {
        const response = await fetch('http://ip-api.com/json/');
        const data = await response.json();

        // 国コードがCN（中国）であれば404.htmlにリダイレクト
        if (data.countryCode === 'IE') {
            window.location.href = '404.html';
        }
    } catch (error) {
        console.error('エラーが発生しました:', error);
    }
}

// ページが読み込まれたときに実行
window.onload = checkAccess;
