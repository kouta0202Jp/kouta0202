// Google翻訳の設定
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'ja', // ページの言語
    includedLanguages: 'en,ja,es,fr,de,it,pt,zh-CN,zh-TW', // 対応する言語
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

// Google翻訳ウィジェットのスクリプトを読み込む
(function() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.body.appendChild(script);
})();
