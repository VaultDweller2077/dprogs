jQuery(document).ready(function() {
    
    var navof = jQuery("nav").offset().top;     // Как далеко навбар от верхнего края страницы
    
    
    jQuery(window).scroll(function() {
    var scroll1 = jQuery(window).scrollTop();   // Сколько пикселей отскролили от верха страницы
        
        if (scroll1 >= navof) {                 // Сравение 
            jQuery("nav").addClass("navbar-fixed-top");
            jQuery("#logo").removeClass("hidden");
        } else {
            jQuery("nav").removeClass("navbar-fixed-top");
            jQuery("#logo").addClass("hidden");
        }



        
    });
});