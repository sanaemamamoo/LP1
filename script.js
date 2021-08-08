$(function(){

	//------------------------------------------------------
	// スライダー
	//------------------------------------------------------
	new Swiper( '.swiper-container', {//はみ出具合を調整
	speed: 400,
	spaceBetween: 40,//間隔
	width: 400,//幅
	loop: true,
	loopedSlides: 6,//

	pagination: {
	el: '.swiper-pagination',
	type: 'bullets',
	clickable: true,
	}

	});
	//------------------------------------------------------

	//------------------------------------------------------
	// アコーディオンのコーディング
	//------------------------------------------------------
	//Qのエリアが押された時にAのエリアが出現する
	jQuery('.qa-box__q').on('click', function(){
		jQuery(this).next().slideToggle();//開く
		jQuery(this).children('.qa-box__icon').toggleClass('is-open');//閉じた時に−のアイコンが出てくる
	});//is-openをつけ外しする形

	//モーダルウィンドウ
    //ボタンに対して
	jQuery('.js-close-button').on('click', function(e) {//aタグになるのでaタグ本来の動きを無効化させておく必要あり
		e.preventDefault();
		var target = jQuery(this).data('target');
		jQuery(target).hide();
	});

	jQuery('drawer-icon').on('click', function(){
        jQuery('drawer-icon').toggleClass('is-active');
		jQuery('drawer-content').toggleClass('is-active');
		jQuery('drawer-background').toggleClass('is-active');
	});

})

//------------------------------------------------------
// ドロワー
//------------------------------------------------------
//
jQuery('.drawer-icon').on('click', function(e) {//ハンバーガーがクリックされた時、どういった動きをするか
	e.preventDefault();//aタグとかボタンとかブラウザに依存する操作を無効化する、クリックイベントの時にはセットで覚えておく
   
	jQuery('.drawer-icon').toggleClass('is-active');//クリックした時にis-activeがついていたら外して、ついていなかったらつける動き
	jQuery('.drawer-content').toggleClass('is-active');
	jQuery('.drawer-background').toggleClass('is-active');
	
	return false;
   });


//------------------------------------------------------
//フワッと表示させる
//------------------------------------------------------
new WOW().init();//必須


//------------------------------------------------------
//ページ内のリンクとスムーススクロール
//------------------------------------------------------
jQuery('a[href^="#"]').on('click', function(){//先頭がシャープ#から始まるURLがクリックされた時
  
	var header = jQuery('.header').innerHeight();//上の部分がヘッダーに覆われて被さっている→ヘッダーの位置を取得する
	var id = jQuery(this).attr('href');
  
	var position = 0;//初期値をゼロにしておく
	if(id !='#') {//idに値があった時（＃に値がある場合）に条件を分岐してあげる
	 position = jQuery(id).offset().top - header;//取得したヘッダーの高さ分を引いてあげると高さが揃う
	}
  
  
   jQuery('html,body').animate({//アニメイトの条件を書いていく
	 scrollTop: position//上からどれくらいの距離をスクロールするか指定する
   },
   300);
  });//スムーススクロール上部からの位置を取得し、その位置に対してスクロールで移動する
  

  //
  //スクロールに応じて表示する
  //to-top
  jQuery(window).on('scroll', function(){
	if ( 100 < jQuery(this).scrollTop()) {//スクロールされたときの条件// トップから100px以上スクロールしたら
	 jQuery('.to-top').addClass('is-show');//クラスを付与してあげる is-showクラスをつける
	} else {//スクロールされていないときの条件
	  jQuery('.to-top').removeClass('is-show');//100以下のときはクラスを消してあげる
	}
  });//※cssの方でdisplay:none;にしておかないとトップの位置でも現れたままの状態になる
