/*
 * Migrate Fontawesome 4 to Fontawesome 5
 * @website https://www.litecart.net/
*/

(function(){
  var icons = {
    "fa-500px": "fab fa-500px",
    "fa-address-book-o": "far fa-address-book",
    "fa-address-card-o": "far fa-address-card",
    "fa-adn": "fab fa-adn",
    "fa-amazon": "fab fa-amazon",
    "fa-android": "fab fa-android",
    "fa-angellist": "fab fa-angellist",
    "fa-apple": "fab fa-apple",
    "fa-area-chart": "fas fa-chart-area",
    "fa-arrow-circle-o-down": "far fa-arrow-alt-circle-down",
    "fa-arrow-circle-o-left": "far fa-arrow-alt-circle-left",
    "fa-arrow-circle-o-right": "far fa-arrow-alt-circle-right",
    "fa-arrow-circle-o-up": "far fa-arrow-alt-circle-up",
    "fa-arrows": "fas fa-arrows-alt",
    "fa-arrows-alt": "fas fa-expand-arrows-alt",
    "fa-arrows-h": "fas fa-arrows-alt-h",
    "fa-arrows-v": "fas fa-arrows-alt-v",
    "fa-asl-interpreting": "fas fa-american-sign-language-interpreting",
    "fa-automobile": "fas fa-car",
    "fa-bandcamp": "fab fa-bandcamp",
    "fa-bank": "fas fa-university",
    "fa-bar-chart": "far fa-chart-bar",
    "fa-bar-chart-o": "far fa-chart-bar",
    "fa-bathtub": "fas fa-bath",
    "fa-battery": "fas fa-battery-full",
    "fa-battery-0": "fas fa-battery-empty",
    "fa-battery-1": "fas fa-battery-quarter",
    "fa-battery-2": "fas fa-battery-half",
    "fa-battery-3": "fas fa-battery-three-quarters",
    "fa-battery-4": "fas fa-battery-full",
    "fa-behance": "fab fa-behance",
    "fa-behance-square": "fab fa-behance-square",
    "fa-bell-o": "far fa-bell",
    "fa-bell-slash-o": "far fa-bell-slash",
    "fa-bitbucket": "fab fa-bitbucket",
    "fa-bitbucket-square": "fab fa-bitbucket",
    "fa-bitcoin": "fab fa-btc",
    "fa-black-tie": "fab fa-black-tie",
    "fa-bluetooth": "fab fa-bluetooth",
    "fa-bluetooth-b": "fab fa-bluetooth-b",
    "fa-bookmark-o": "far fa-bookmark",
    "fa-btc": "fab fa-btc",
    "fa-building-o": "far fa-building",
    "fa-buysellads": "fab fa-buysellads",
    "fa-cab": "fas fa-taxi",
    "fa-calendar": "fas fa-calendar-alt",
    "fa-calendar-check-o": "far fa-calendar-check",
    "fa-calendar-minus-o": "far fa-calendar-minus",
    "fa-calendar-o": "far fa-calendar",
    "fa-calendar-plus-o": "far fa-calendar-plus",
    "fa-calendar-times-o": "far fa-calendar-times",
    "fa-caret-square-o-down": "far fa-caret-square-down",
    "fa-caret-square-o-left": "far fa-caret-square-left",
    "fa-caret-square-o-right": "far fa-caret-square-right",
    "fa-caret-square-o-up": "far fa-caret-square-up",
    "fa-cc": "far fa-closed-captioning",
    "fa-cc-amex": "fab fa-cc-amex",
    "fa-cc-diners-club": "fab fa-cc-diners-club",
    "fa-cc-discover": "fab fa-cc-discover",
    "fa-cc-jcb": "fab fa-cc-jcb",
    "fa-cc-mastercard": "fab fa-cc-mastercard",
    "fa-cc-paypal": "fab fa-cc-paypal",
    "fa-cc-stripe": "fab fa-cc-stripe",
    "fa-cc-visa": "fab fa-cc-visa",
    "fa-chain": "fas fa-link",
    "fa-chain-broken": "fas fa-unlink",
    "fa-check-circle-o": "far fa-check-circle",
    "fa-check-square-o": "far fa-check-square",
    "fa-chrome": "fab fa-chrome",
    "fa-circle-o": "far fa-circle",
    "fa-circle-o-notch": "fas fa-circle-notch",
    "fa-circle-thin": "far fa-circle",
    "fa-clipboard": "far fa-clipboard",
    "fa-clock-o": "far fa-clock",
    "fa-clone": "far fa-clone",
    "fa-close": "fas fa-times",
    "fa-cloud-download": "fas fa-cloud-download-alt",
    "fa-cloud-upload": "fas fa-cloud-upload-alt",
    "fa-cny": "fas fa-yen-sign",
    "fa-code-fork": "fas fa-code-branch",
    "fa-codepen": "fab fa-codepen",
    "fa-codiepie": "fab fa-codiepie",
    "fa-comment-o": "far fa-comment",
    "fa-commenting": "far fa-comment-dots",
    "fa-commenting-o": "far fa-comment-dots",
    "fa-comments-o": "far fa-comments",
    "fa-compass": "far fa-compass",
    "fa-connectdevelop": "fab fa-connectdevelop",
    "fa-contao": "fab fa-contao",
    "fa-copyright": "far fa-copyright",
    "fa-creative-commons": "fab fa-creative-commons",
    "fa-credit-card": "far fa-credit-card",
    "fa-credit-card-alt": "fas fa-credit-card",
    "fa-css3": "fab fa-css3",
    "fa-cutlery": "fas fa-utensils",
    "fa-dashboard": "fas fa-tachometer-alt",
    "fa-dashcube": "fab fa-dashcube",
    "fa-deafness": "fas fa-deaf",
    "fa-dedent": "fas fa-outdent",
    "fa-delicious": "fab fa-delicious",
    "fa-deviantart": "fab fa-deviantart",
    "fa-diamond": "far fa-gem",
    "fa-digg": "fab fa-digg",
    "fa-dollar": "fas fa-dollar-sign",
    "fa-dot-circle-o": "far fa-dot-circle",
    "fa-dribbble": "fab fa-dribbble",
    "fa-drivers-license": "fas fa-id-card",
    "fa-drivers-license-o": "far fa-id-card",
    "fa-dropbox": "fab fa-dropbox",
    "fa-drupal": "fab fa-drupal",
    "fa-edge": "fab fa-edge",
    "fa-eercast": "fab fa-sellcast",
    "fa-empire": "fab fa-empire",
    "fa-envelope-o": "far fa-envelope",
    "fa-envelope-open-o": "far fa-envelope-open",
    "fa-envira": "fab fa-envira",
    "fa-etsy": "fab fa-etsy",
    "fa-eur": "fas fa-euro-sign",
    "fa-euro": "fas fa-euro-sign",
    "fa-exchange": "fas fa-exchange-alt",
    "fa-expeditedssl": "fab fa-expeditedssl",
    "fa-external-link": "fas fa-external-link-alt",
    "fa-external-link-square": "fas fa-external-link-square-alt",
    "fa-eye": "far fa-eye",
    "fa-eye-slash": "far fa-eye-slash",
    "fa-eyedropper": "fas fa-eye-dropper",
    "fa-fa": "fab fa-font-awesome",
    "fa-facebook": "fab fa-facebook-f",
    "fa-facebook-f": "fab fa-facebook-f",
    "fa-facebook-official": "fab fa-facebook",
    "fa-facebook-square": "fab fa-facebook-square",
    "fa-feed": "fas fa-rss",
    "fa-file-archive-o": "far fa-file-archive",
    "fa-file-audio-o": "far fa-file-audio",
    "fa-file-code-o": "far fa-file-code",
    "fa-file-excel-o": "far fa-file-excel",
    "fa-file-image-o": "far fa-file-image",
    "fa-file-movie-o": "far fa-file-video",
    "fa-file-o": "far fa-file",
    "fa-file-pdf-o": "far fa-file-pdf",
    "fa-file-photo-o": "far fa-file-image",
    "fa-file-picture-o": "far fa-file-image",
    "fa-file-powerpoint-o": "far fa-file-powerpoint",
    "fa-file-sound-o": "far fa-file-audio",
    "fa-file-text": "fas fa-file-alt",
    "fa-file-text-o": "far fa-file-alt",
    "fa-file-video-o": "far fa-file-video",
    "fa-file-word-o": "far fa-file-word",
    "fa-file-zip-o": "far fa-file-archive",
    "fa-files-o": "far fa-copy",
    "fa-firefox": "fab fa-firefox",
    "fa-first-order": "fab fa-first-order",
    "fa-flag-o": "far fa-flag",
    "fa-flash": "fas fa-bolt",
    "fa-flickr": "fab fa-flickr",
    "fa-floppy-o": "far fa-save",
    "fa-folder-o": "far fa-folder",
    "fa-folder-open-o": "far fa-folder-open",
    "fa-font-awesome": "fab fa-font-awesome",
    "fa-fonticons": "fab fa-fonticons",
    "fa-fort-awesome": "fab fa-fort-awesome",
    "fa-forumbee": "fab fa-forumbee",
    "fa-foursquare": "fab fa-foursquare",
    "fa-free-code-camp": "fab fa-free-code-camp",
    "fa-frown-o": "far fa-frown",
    "fa-futbol-o": "far fa-futbol",
    "fa-gbp": "fas fa-pound-sign",
    "fa-ge": "fab fa-empire",
    "fa-gear": "fas fa-cog",
    "fa-gears": "fas fa-cogs",
    "fa-get-pocket": "fab fa-get-pocket",
    "fa-gg": "fab fa-gg",
    "fa-gg-circle": "fab fa-gg-circle",
    "fa-git": "fab fa-git",
    "fa-git-square": "fab fa-git-square",
    "fa-github": "fab fa-github",
    "fa-github-alt": "fab fa-github-alt",
    "fa-github-square": "fab fa-github-square",
    "fa-gitlab": "fab fa-gitlab",
    "fa-gittip": "fab fa-gratipay",
    "fa-glass": "fas fa-glass-martini",
    "fa-glide": "fab fa-glide",
    "fa-glide-g": "fab fa-glide-g",
    "fa-google": "fab fa-google",
    "fa-google-plus": "fab fa-google-plus-g",
    "fa-google-plus-circle": "fab fa-google-plus",
    "fa-google-plus-official": "fab fa-google-plus",
    "fa-google-plus-square": "fab fa-google-plus-square",
    "fa-google-wallet": "fab fa-google-wallet",
    "fa-gratipay": "fab fa-gratipay",
    "fa-grav": "fab fa-grav",
    "fa-group": "fas fa-users",
    "fa-hacker-news": "fab fa-hacker-news",
    "fa-hand-grab-o": "far fa-hand-rock",
    "fa-hand-lizard-o": "far fa-hand-lizard",
    "fa-hand-o-down": "far fa-hand-point-down",
    "fa-hand-o-left": "far fa-hand-point-left",
    "fa-hand-o-right": "far fa-hand-point-right",
    "fa-hand-o-up": "far fa-hand-point-up",
    "fa-hand-paper-o": "far fa-hand-paper",
    "fa-hand-peace-o": "far fa-hand-peace",
    "fa-hand-pointer-o": "far fa-hand-pointer",
    "fa-hand-rock-o": "far fa-hand-rock",
    "fa-hand-scissors-o": "far fa-hand-scissors",
    "fa-hand-spock-o": "far fa-hand-spock",
    "fa-hand-stop-o": "far fa-hand-paper",
    "fa-handshake-o": "far fa-handshake",
    "fa-hard-of-hearing": "fas fa-deaf",
    "fa-hdd-o": "far fa-hdd",
    "fa-header": "fas fa-heading",
    "fa-heart-o": "far fa-heart",
    "fa-hospital-o": "far fa-hospital",
    "fa-hotel": "fas fa-bed",
    "fa-hourglass-1": "fas fa-hourglass-start",
    "fa-hourglass-2": "fas fa-hourglass-half",
    "fa-hourglass-3": "fas fa-hourglass-end",
    "fa-hourglass-o": "far fa-hourglass",
    "fa-houzz": "fab fa-houzz",
    "fa-html5": "fab fa-html5",
    "fa-id-badge": "far fa-id-badge",
    "fa-id-card-o": "far fa-id-card",
    "fa-ils": "fas fa-shekel-sign",
    "fa-image": "far fa-image",
    "fa-imdb": "fab fa-imdb",
    "fa-inr": "fas fa-rupee-sign",
    "fa-instagram": "fab fa-instagram",
    "fa-institution": "fas fa-university",
    "fa-internet-explorer": "fab fa-internet-explorer",
    "fa-intersex": "fas fa-transgender",
    "fa-ioxhost": "fab fa-ioxhost",
    "fa-joomla": "fab fa-joomla",
    "fa-jpy": "fas fa-yen-sign",
    "fa-jsfiddle": "fab fa-jsfiddle",
    "fa-keyboard-o": "far fa-keyboard",
    "fa-krw": "fas fa-won-sign",
    "fa-lastfm": "fab fa-lastfm",
    "fa-lastfm-square": "fab fa-lastfm-square",
    "fa-leanpub": "fab fa-leanpub",
    "fa-legal": "fas fa-gavel",
    "fa-lemon-o": "far fa-lemon",
    "fa-level-down": "fas fa-level-down-alt",
    "fa-level-up": "fas fa-level-up-alt",
    "fa-life-bouy": "far fa-life-ring",
    "fa-life-buoy": "far fa-life-ring",
    "fa-life-ring": "far fa-life-ring",
    "fa-life-saver": "far fa-life-ring",
    "fa-lightbulb-o": "far fa-lightbulb",
    "fa-line-chart": "fas fa-chart-line",
    "fa-linkedin": "fab fa-linkedin-in",
    "fa-linkedin-square": "fab fa-linkedin",
    "fa-linode": "fab fa-linode",
    "fa-linux": "fab fa-linux",
    "fa-list-alt": "far fa-list-alt",
    "fa-long-arrow-down": "fas fa-long-arrow-alt-down",
    "fa-long-arrow-left": "fas fa-long-arrow-alt-left",
    "fa-long-arrow-right": "fas fa-long-arrow-alt-right",
    "fa-long-arrow-up": "fas fa-long-arrow-alt-up",
    "fa-mail-forward": "fas fa-share",
    "fa-mail-reply": "fas fa-reply",
    "fa-mail-reply-all": "fas fa-reply-all",
    "fa-map-marker": "fas fa-map-marker-alt",
    "fa-map-o": "far fa-map",
    "fa-maxcdn": "fab fa-maxcdn",
    "fa-meanpath": "fab fa-font-awesome",
    "fa-medium": "fab fa-medium",
    "fa-meetup": "fab fa-meetup",
    "fa-meh-o": "far fa-meh",
    "fa-minus-square-o": "far fa-minus-square",
    "fa-mixcloud": "fab fa-mixcloud",
    "fa-mobile": "fas fa-mobile-alt",
    "fa-mobile-phone": "fas fa-mobile-alt",
    "fa-modx": "fab fa-modx",
    "fa-money": "far fa-money-bill-alt",
    "fa-moon-o": "far fa-moon",
    "fa-mortar-board": "fas fa-graduation-cap",
    "fa-navicon": "fas fa-bars",
    "fa-newspaper-o": "far fa-newspaper",
    "fa-object-group": "far fa-object-group",
    "fa-object-ungroup": "far fa-object-ungroup",
    "fa-odnoklassniki": "fab fa-odnoklassniki",
    "fa-odnoklassniki-square": "fab fa-odnoklassniki-square",
    "fa-opencart": "fab fa-opencart",
    "fa-openid": "fab fa-openid",
    "fa-opera": "fab fa-opera",
    "fa-optin-monster": "fab fa-optin-monster",
    "fa-pagelines": "fab fa-pagelines",
    "fa-paper-plane-o": "far fa-paper-plane",
    "fa-paste": "far fa-clipboard",
    "fa-pause-circle-o": "far fa-pause-circle",
    "fa-paypal": "fab fa-paypal",
    "fa-pencil": "fas fa-pencil-alt",
    "fa-pencil-square": "fas fa-pen-square",
    "fa-pencil-square-o": "far fa-edit",
    "fa-photo": "far fa-image",
    "fa-picture-o": "far fa-image",
    "fa-pie-chart": "fas fa-chart-pie",
    "fa-pied-piper": "fab fa-pied-piper",
    "fa-pied-piper-alt": "fab fa-pied-piper-alt",
    "fa-pied-piper-pp": "fab fa-pied-piper-pp",
    "fa-pinterest": "fab fa-pinterest",
    "fa-pinterest-p": "fab fa-pinterest-p",
    "fa-pinterest-square": "fab fa-pinterest-square",
    "fa-play-circle-o": "far fa-play-circle",
    "fa-plus-square-o": "far fa-plus-square",
    "fa-product-hunt": "fab fa-product-hunt",
    "fa-qq": "fab fa-qq",
    "fa-question-circle-o": "far fa-question-circle",
    "fa-quora": "fab fa-quora",
    "fa-ra": "fab fa-rebel",
    "fa-ravelry": "fab fa-ravelry",
    "fa-rebel": "fab fa-rebel",
    "fa-reddit": "fab fa-reddit",
    "fa-reddit-alien": "fab fa-reddit-alien",
    "fa-reddit-square": "fab fa-reddit-square",
    "fa-refresh": "fas fa-sync",
    "fa-registered": "far fa-registered",
    "fa-remove": "fas fa-times",
    "fa-renren": "fab fa-renren",
    "fa-reorder": "fas fa-bars",
    "fa-repeat": "fas fa-redo",
    "fa-resistance": "fab fa-rebel",
    "fa-rmb": "fas fa-yen-sign",
    "fa-rotate-left": "fas fa-undo",
    "fa-rotate-right": "fas fa-redo",
    "fa-rouble": "fas fa-ruble-sign",
    "fa-rub": "fas fa-ruble-sign",
    "fa-ruble": "fas fa-ruble-sign",
    "fa-rupee": "fas fa-rupee-sign",
    "fa-s15": "fas fa-bath",
    "fa-safari": "fab fa-safari",
    "fa-scissors": "fas fa-cut",
    "fa-scribd": "fab fa-scribd",
    "fa-sellsy": "fab fa-sellsy",
    "fa-send": "fas fa-paper-plane",
    "fa-send-o": "far fa-paper-plane",
    "fa-share-square-o": "far fa-share-square",
    "fa-shekel": "fas fa-shekel-sign",
    "fa-sheqel": "fas fa-shekel-sign",
    "fa-shield": "fas fa-shield-alt",
    "fa-shirtsinbulk": "fab fa-shirtsinbulk",
    "fa-sign-in": "fas fa-sign-in-alt",
    "fa-sign-out": "fas fa-sign-out-alt",
    "fa-signing": "fas fa-sign-language",
    "fa-simplybuilt": "fab fa-simplybuilt",
    "fa-skyatlas": "fab fa-skyatlas",
    "fa-skype": "fab fa-skype",
    "fa-slack": "fab fa-slack",
    "fa-sliders": "fas fa-sliders-h",
    "fa-slideshare": "fab fa-slideshare",
    "fa-smile-o": "far fa-smile",
    "fa-snapchat": "fab fa-snapchat",
    "fa-snapchat-ghost": "fab fa-snapchat-ghost",
    "fa-snapchat-square": "fab fa-snapchat-square",
    "fa-snowflake-o": "far fa-snowflake",
    "fa-soccer-ball-o": "far fa-futbol",
    "fa-sort-alpha-asc": "fas fa-sort-alpha-down",
    "fa-sort-alpha-desc": "fas fa-sort-alpha-up",
    "fa-sort-amount-asc": "fas fa-sort-amount-down",
    "fa-sort-amount-desc": "fas fa-sort-amount-up",
    "fa-sort-asc": "fas fa-sort-up",
    "fa-sort-desc": "fas fa-sort-down",
    "fa-sort-numeric-asc": "fas fa-sort-numeric-down",
    "fa-sort-numeric-desc": "fas fa-sort-numeric-up",
    "fa-soundcloud": "fab fa-soundcloud",
    "fa-spoon": "fas fa-utensil-spoon",
    "fa-spotify": "fab fa-spotify",
    "fa-square-o": "far fa-square",
    "fa-stack-exchange": "fab fa-stack-exchange",
    "fa-stack-overflow": "fab fa-stack-overflow",
    "fa-star-half-empty": "far fa-star-half",
    "fa-star-half-full": "far fa-star-half",
    "fa-star-half-o": "far fa-star-half",
    "fa-star-o": "far fa-star",
    "fa-steam": "fab fa-steam",
    "fa-steam-square": "fab fa-steam-square",
    "fa-sticky-note-o": "far fa-sticky-note",
    "fa-stop-circle-o": "far fa-stop-circle",
    "fa-stumbleupon": "fab fa-stumbleupon",
    "fa-stumbleupon-circle": "fab fa-stumbleupon-circle",
    "fa-sun-o": "far fa-sun",
    "fa-superpowers": "fab fa-superpowers",
    "fa-support": "far fa-life-ring",
    "fa-tablet": "fas fa-tablet-alt",
    "fa-tachometer": "fas fa-tachometer-alt",
    "fa-telegram": "fab fa-telegram",
    "fa-television": "fas fa-tv",
    "fa-tencent-weibo": "fab fa-tencent-weibo",
    "fa-themeisle": "fab fa-themeisle",
    "fa-thermometer": "fas fa-thermometer-full",
    "fa-thermometer-0": "fas fa-thermometer-empty",
    "fa-thermometer-1": "fas fa-thermometer-quarter",
    "fa-thermometer-2": "fas fa-thermometer-half",
    "fa-thermometer-3": "fas fa-thermometer-three-quarters",
    "fa-thermometer-4": "fas fa-thermometer-full",
    "fa-thumb-tack": "fas fa-thumbtack",
    "fa-thumbs-o-down": "far fa-thumbs-down",
    "fa-thumbs-o-up": "far fa-thumbs-up",
    "fa-ticket": "fas fa-ticket-alt",
    "fa-times-circle-o": "far fa-times-circle",
    "fa-times-rectangle": "fas fa-window-close",
    "fa-times-rectangle-o": "far fa-window-close",
    "fa-toggle-down": "far fa-caret-square-down",
    "fa-toggle-left": "far fa-caret-square-left",
    "fa-toggle-right": "far fa-caret-square-right",
    "fa-toggle-up": "far fa-caret-square-up",
    "fa-trash": "fas fa-trash-alt",
    "fa-trash-o": "far fa-trash-alt",
    "fa-trello": "fab fa-trello",
    "fa-tripadvisor": "fab fa-tripadvisor",
    "fa-try": "fas fa-lira-sign",
    "fa-tumblr": "fab fa-tumblr",
    "fa-tumblr-square": "fab fa-tumblr-square",
    "fa-turkish-lira": "fas fa-lira-sign",
    "fa-twitch": "fab fa-twitch",
    "fa-twitter": "fab fa-twitter",
    "fa-twitter-square": "fab fa-twitter-square",
    "fa-unsorted": "fas fa-sort",
    "fa-usb": "fab fa-usb",
    "fa-usd": "fas fa-dollar-sign",
    "fa-user-circle-o": "far fa-user-circle",
    "fa-user-o": "far fa-user",
    "fa-vcard": "fas fa-address-card",
    "fa-vcard-o": "far fa-address-card",
    "fa-viacoin": "fab fa-viacoin",
    "fa-viadeo": "fab fa-viadeo",
    "fa-viadeo-square": "fab fa-viadeo-square",
    "fa-video-camera": "fas fa-video",
    "fa-vimeo": "fab fa-vimeo-v",
    "fa-vimeo-square": "fab fa-vimeo-square",
    "fa-vine": "fab fa-vine",
    "fa-vk": "fab fa-vk",
    "fa-volume-control-phone": "fas fa-phone-volume",
    "fa-warning": "fas fa-exclamation-triangle",
    "fa-wechat": "fab fa-weixin",
    "fa-weibo": "fab fa-weibo",
    "fa-weixin": "fab fa-weixin",
    "fa-whatsapp": "fab fa-whatsapp",
    "fa-wheelchair-alt": "fab fa-accessible-icon",
    "fa-wikipedia-w": "fab fa-wikipedia-w",
    "fa-window-close-o": "far fa-window-close",
    "fa-window-maximize": "far fa-window-maximize",
    "fa-window-restore": "far fa-window-restore",
    "fa-windows": "fab fa-windows",
    "fa-won": "fas fa-won-sign",
    "fa-wordpress": "fab fa-wordpress",
    "fa-wpbeginner": "fab fa-wpbeginner",
    "fa-wpexplorer": "fab fa-wpexplorer",
    "fa-wpforms": "fab fa-wpforms",
    "fa-xing": "fab fa-xing",
    "fa-xing-square": "fab fa-xing-square",
    "fa-y-combinator": "fab fa-y-combinator",
    "fa-y-combinator-square": "fab fa-hacker-news",
    "fa-yahoo": "fab fa-yahoo",
    "fa-yc": "fab fa-y-combinator",
    "fa-yc-square": "fab fa-hacker-news",
    "fa-yelp": "fab fa-yelp",
    "fa-yen": "fas fa-yen-sign",
    "fa-yoast": "fab fa-yoast",
    "fa-youtube": "fab fa-youtube",
    "fa-youtube-play": "fab fa-youtube",
    "fa-youtube-square": "fab fa-youtube-square",
  };

  $.each(icons, function(fa4, fa5) {
    $('.fa.'+fa4).removeClass('fa').removeClass(fa4).addClass(fa5);
  });
})();