$(function() {
  (function (w, d) {
    w.___gcfg = {lang:"ja"};
    var s,e = d.getElementsByTagName("script")[0],
    a = function(u,f){if(!d.getElementById(f)){s = d.createElement("script");
      s.src = u;if(f){s.id = f;}e.parentNode.insertBefore(s,e);}};
    a("//platform.twitter.com/widgets.js","twitter-wjs");
    a("//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.0","facebook-jssdk");
  })(this, document);

  $('.carousel').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  var latlng = new google.maps.LatLng(34.802760, 135.771273);
  var options = {
      zoom: 16,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
  };
  var map = new google.maps.Map(document.getElementById('map'), options);
  var styles =
    [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];
  map.setOptions({styles: styles});

  var marker = new google.maps.Marker({
    position: map.getCenter(),
    title: 'ローム記念館',
    map: map
  });
});
