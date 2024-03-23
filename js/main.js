$(function () {

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });
    $('.menu-trigger').addClass('active');
    $('.menu').addClass('selected');
    $('.menu-trigger').on('click', function () {
        $(this).toggleClass('active');
        $('.fav-button').toggleClass('d-none');
        $('.menu').toggleClass('selected');
        // $('main').toggleClass('scroll-pasif');
        $('body').toggleClass('hidden');
        $(window).scrollTop(0);
       
        return false;
    });


    $('.fav-button').on('click', function(){
        $(this).toggleClass('active')
        $('.favori-list-show').toggle();
        $('.favori-list-show').prev().toggleClass('col-lg-12');
    });


    

    $(".tab-list li").on('click', function(){
        var tabIndex = $(this).index();
        $(".tab-list li").removeClass("selected");
        $(this).addClass("selected");
        // Tüm tab içeriklerini gizle
        $(".tab-content .list-item").hide();
        // Seçilen taba ait içeriği göster
        $(".tab-content .list-item").eq(tabIndex).show();
    });
    $(".tab-senaryo li").on('click', function(){
        var tabIndex = $(this).index();
        $(".tab-senaryo li").removeClass("selected");
        $(this).addClass("selected");
        // Tüm tab içeriklerini gizle
        $(".tab-senaryo-content .snr-item").hide();
        // Seçilen taba ait içeriği göster
        $(".tab-senaryo-content .snr-item").eq(tabIndex).show();
    });

    // Başlangıçta ilk bölüm açık olsun
    $(".accordion-content:first-child").show();

    // Başlık tıklanınca içeriği aç/kapat
    $(".accordion-header").on('click', function() {
        $(".accordion-header").removeClass("active");
        $(this).addClass("active");
        var content = $(this).siblings(".accordion-content");
        $(".accordion-content").not(content).hide();
        content.toggle();
    });

    // document.getElementById('output').innerHTML = location.search;
    // $(".chosen-select").chosen();

    
});