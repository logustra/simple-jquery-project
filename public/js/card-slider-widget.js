$(document).ready(function(){function e(e){$(".card-slider-widget .container .item").removeClass("active"),$('div[data-slider="'+e+'"]').fadeIn("300").addClass("active"),e!==t+1&&($('div[data-slider="'+(e-1)+'"]').hide(),1==e&&$('div[data-slider="'+t+'"]').hide()),$(".current-slide").text(e)}function d(e){$(".card-slider-widget .container .item").removeClass("active"),$('div[data-slider="'+e+'"]').fadeIn("300").addClass("active"),0!==e&&($('div[data-slider="'+(e+1)+'"]').hide(),e==t&&$('div[data-slider="1"]').hide()),$(".current-slide").text(e)}function i(){var e=$(".card-slider-widget .container .item.active").attr("data-background");$("body").css({background:e,"background-size":"cover"})}var t=$(".card-slider-widget .container .item").length,a=1;$(".totals-slide").text(t),$(".btn-next-slider").on("click",function(){a!==t?(a+=1,e(a),i()):(a=1,e(a),i())}),$(".btn-prev-slider").on("click",function(){a>1?(a-=1,d(a),i()):(a=t,d(a),i())}),i()});