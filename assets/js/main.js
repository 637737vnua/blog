$(window).scroll(()=> {
    if ($(this).scrollTop() >= 90) {
        $('.tab').addClass('active')
    }else {
        if  ($('.tab.active')) $('.tab').removeClass('active')
    }
})