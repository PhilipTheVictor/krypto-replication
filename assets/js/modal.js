$(document).ready(function () {
    $('#team1').click(function () {
        $('section').css('filter', 'blur(25px)');
        $('header').css('filter', 'blur(25px)');
        $('canvas').css('filter', 'blur(25px)');
        $('.team-overlay').css('display', 'block');
        $('#team1-1').css('display', 'block');
    });
    $('#team2').click(function () {
        $('section').css('filter', 'blur(25px)');
        $('header').css('filter', 'blur(25px)');
        $('canvas').css('filter', 'blur(25px)');
        $('.team-overlay').css('display', 'block');
        $('#team1-2').css('display', 'block');
    });
    $('#team3').click(function () {
        $('section').css('filter', 'blur(25px)');
        $('header').css('filter', 'blur(25px)');
        $('canvas').css('filter', 'blur(25px)');
        $('.team-overlay').css('display', 'block');
        $('#team1-3').css('display', 'block');
    });
    $('#team4').click(function () {
        $('section').css('filter', 'blur(25px)');
        $('header').css('filter', 'blur(25px)');
        $('canvas').css('filter', 'blur(25px)');
        $('.team-overlay').css('display', 'block');
        $('#team1-4').css('display', 'block');
    });
    $('#team-bg-001').click(function () {
        $('section').css('filter', 'blur(0px)');
        $('header').css('filter', 'blur(0px)');
        $('canvas').css('filter', 'blur(0px)');
        $('.team-overlay').css('display', 'none');
        $('#team1-1').css('display', 'none');
        $('#team1-2').css('display', 'none');
        $('#team1-3').css('display', 'none');
        $('#team1-4').css('display', 'none');
    });
    $('.team-overlay').click(function () {
        $('section').css('filter', 'blur(0px)');
        $('header').css('filter', 'blur(0px)');
        $('canvas').css('filter', 'blur(0px)');
        $('.team-overlay').css('display', 'none');
        $('#team1-1').css('display', 'none');
        $('#team1-2').css('display', 'none');
        $('#team1-3').css('display', 'none');
        $('#team1-4').css('display', 'none');
    });
});