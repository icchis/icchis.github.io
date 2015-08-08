/*-----------------------------------------------------------------------------------*/
/*	POSTS GRID
/*-----------------------------------------------------------------------------------*/
$(window).load(function(){

    var $container = $('.blog-grid');

    var gutter = 30;
    var min_width = 345;
    $container.imagesLoaded( function(){
        $container.masonry({
            itemSelector : '.post',
            gutterWidth: gutter,
            isAnimated: true,
              columnWidth: function( containerWidth ) {
                var box_width = (((containerWidth - gutter)/2) | 0) ;

                if (box_width < min_width) {
                    box_width = (((containerWidth - gutter)/2) | 0);
                }

                if (box_width < min_width) {
                    box_width = containerWidth;
                }

                $('.post').width(box_width);

                return box_width;
              }
        });
        $container.css( 'visibility', 'visible' ).parent().removeClass( 'loading' );
    });


});

/*-----------------------------------------------------------------------------------*/
/*	VIDEO
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($) {
    		$('.video').fitVids();
    	});


/*-----------------------------------------------------------------------------------*/
/*	BUTTON HOVER
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($)  {
$("a.button, .forms fieldset .btn-submit, #commentform input#submit").css("opacity","1.0");
$("a.button, .forms fieldset .btn-submit, #commentform input#submit").hover(function () {
$(this).stop().animate({ opacity: 0.85 }, "fast");  },
function () {
$(this).stop().animate({ opacity: 1.0 }, "fast");
});
});

/*-----------------------------------------------------------------------------------*/
/*	IMAGE HOVER
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($) {
$('.quick-flickr-item').addClass("frame");
$('.frame a').prepend('<span class="more"></span>');
});

jQuery(document).ready(function($) {
        $('.frame').mouseenter(function(e) {

            $(this).children('a').children('span').fadeIn(300);
        }).mouseleave(function(e) {

            $(this).children('a').children('span').fadeOut(200);
        });
    });


/*-----------------------------------------------------------------------------------*/
/*	TWITTER
/*-----------------------------------------------------------------------------------*/

// getTwitters('twitter', {
//         id: 'elemisdesign',
//         count: 2,
//         enableLinks: true,
//         ignoreReplies: false,
//         template: '<span class="twitterPrefix"><span class="twitterStatus">%text%</span><br /><em class="twitterTime"><a href="http://twitter.com/%user_screen_name%/statuses/%id%">%time%</a></em>',
//         newwindow: true
// });

/*-----------------------------------------------------------------------------------*/
/*	FLICKR
/*-----------------------------------------------------------------------------------*/

// $(document).ready(function($){
// 	$('.flickr-feed').dcFlickr({
// 		limit: 9,
//         q: {
//             id: '51789731@N07',
// 			lang: 'en-us',
// 			format: 'json',
// 			jsoncallback: '?'
//         },
// 		onLoad: function(){
// 			$('.frame a').prepend('<span class="more"></span>');
// 			$('.frame').mouseenter(function(e) {

//             $(this).children('a').children('span').fadeIn(300);
//         }).mouseleave(function(e) {

//             $(this).children('a').children('span').fadeOut(200);
//         });
// 		}
// 	});
// });

/*-----------------------------------------------------------------------------------*/
/*	AUDIO PLAYER
/*-----------------------------------------------------------------------------------*/

$(window).load(function(){
		$('.blog-grid audio').mediaelementplayer({
			audioWidth: '100%',
			features: ['playpause','progress','tracks'],
			videoVolume: 'horizontal'
		});
	});

jQuery(document).ready(function($) {
		$('.single audio').mediaelementplayer({
			audioWidth: '100%',
			features: ['playpause','progress','tracks'],
			videoVolume: 'horizontal'
		});
	});

/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
ddsmoothmenu.init({
	mainmenuid: "menu",
	orientation: 'h',
	classname: 'menu',
	contentsource: "markup"
})




var xmlUrl = "http://ispacea.blog.fc2.com/?xml"; // feedのURL
var setNum = 1; // 表示件数
var setID = "feed"; // 表示させる箇所のID
google.load("feeds", "1");
function initialize() {
var html = '';
var feed = new google.feeds.Feed(xmlUrl);
feed.setNumEntries(setNum);
feed.load(function(result) {
if (!result.error){
var container = document.getElementById(setID);

for (var i = 0; i < result.feed.entries.length; i++) {
var entry = result.feed.entries[i];
var title = entry.title; // 記事タイトル取得
var link = entry.link; // 記事のリンクを取得
// 日付を取得し年月日を整形（使ってないので削除してOK）
// var publishedDate = entry.publishedDate;
// var pubDD = new Date(publishedDate);
// yy = pubDD.getYear();if (yy < 2000) { yy += 1900; }
// mm = pubDD.getMonth() + 1;dd = pubDD.getDate();
// var pubDate = yy +'年'+ mm +'月'+ dd +'日';
// 表示する部分を整形
if(entry.link.match(/blog-entry-<%topentry_no>/)) {
html += '<li>' + title +'</li>';
}
else {
html += '<li><a href="' + link + '" target="_blank">' + title +'</a></li>';
// ?sp はお好みで... PC からでもスマホ版で開きたい場合には 入れておく。
}

}
container.innerHTML = html;
}
});
}
google.setOnLoadCallback(initialize);



$('#port_a').click(function() {
    p_showHeader();
})
$("#p_topback").click(function() {
    p_hideHeader();
})
$('#prof2').click(function() {
        showHeader();
})
$("#topback").click(function() {
    hideHeader();
})

function p_showHeader() {
    $('#port').animate({top: '0%'}, 1000,"easeOutBounce");
}
function p_hideHeader() {
    $('#port').animate({top: '-100%'}, 600, "easeInBack");
}


function showHeader() {
    $('#prof').animate({left: '0%'}, 600,"easeOutExpo");
}
function hideHeader() {
    $('#prof').animate({left: '-100%'}, 600, "easeOutExpo");
}

var showFlag = false;
var topBtn = $('#page-top');
topBtn.css('bottom', '-100px');
var showFlag = false;
//スクロールが100に達したらボタン表示
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        if (showFlag == false) {
            showFlag = true;
            topBtn.stop().animate({'bottom' : '20px'}, 200);
        }
    } else {
        if (showFlag) {
            showFlag = false;
            topBtn.stop().animate({'bottom' : '-100px'}, 200);
        }
    }
});
//スクロールしてトップ
topBtn.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});