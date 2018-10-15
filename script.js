$(document).ready(function () {
    
        $('#hello').click(function() {
            console.log('cliquer');
            $('.pres').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
            $('.hello').css({border: 0,});
        });
    
});
