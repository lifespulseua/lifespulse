import $ from "jquery";

export default (function popup() {

    // Login form

    $('.header-login-popup').click(function (e) {
        $('.login-form').fadeIn(300);
        $('.mask-login-form').fadeIn(300);
    });

    $('.mask-login-form').on('click', function (e) {
        $('.mask-login-form , .login-form').fadeOut(300);
    });

    $(document).on('keydown', function (e) {
        if (e.keyCode === 27 && $('.mask-password-recovery').css('display') == 'none') {
            $('.mask-login-form, .login-form').fadeOut(300);
        }
    });

    // Recovery password

    $('.login-form-password div a').click(function (e) {
        $('.password-recovery ').fadeIn(300);
        $('.mask-password-recovery').fadeIn(300);
    });

    $('.mask-password-recovery').on('click', function (e) {
        $('.password-recovery, .mask-password-recovery ').fadeOut(300);
    });

    $(document).on('keydown', function (e) {
        if (e.keyCode === 27) {
            $('.password-recovery, .mask-password-recovery ').fadeOut(300);
        }
    });

})

