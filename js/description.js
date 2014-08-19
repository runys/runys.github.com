$(function () {

    //var activeElement = $('#cookbook');

    $('#save4thewin').click(function (e) {
        e.preventDefault();
        $('#project-title').text("Save 4 the Win");
        $('#project-status').html('<span id="" class="label label-warning">In Progress</span>');
        $('#project-roles').html('<span class="label label-info">Lead Artist</span> <span class="label label-info">Game Designer</span>');
        $('#project-image').attr('src', 'img/save4thewin_img.svg');
        $('#project-description').text('A game where you have to save money to be successful!');
        //activeElement.toggleClass('active');
        //activeElement = $(this);
        //$(this).toggleClass('active');
    });

    $('#cookbook').click(function (e) {
        e.preventDefault();
        $('#project-title').text("Cook Book");
        $('#project-status').html('<span id="" class="label label-success">Done</span>');
        $('#project-roles').html('<span class="label label-info">Lead Designer</span> <span class="label label-info">Programmer</span>');
        $('#project-image').attr('src', 'img/cookbook_icon.svg');
        $('#project-description').text('Have you ever been stuck in front of your fridge wondering what to cook with the ingredients you had? Your problems are over! With Cook book you can look for recipes that can be cooked only with the ingredients you have with you.');
    });

    $('#eater').click(function (e) {
        e.preventDefault();
        $('#project-title').text("Eater");
        $('#project-status').html('<span id="" class="label label-warning">In Progress</span>');
        $('#project-roles').html('<span class="label label-info">Lead Artist</span> <span class="label label-info">Game Designer</span>');
        $('#project-image').attr('src', 'img/eater_icon.svg');
        $('#project-description').text('Eater eater eater eater eater eatereater eater eater eater eatereatereater eater eater eater eater.');
    });

    $('#clickcolor').click(function (e) {
        e.preventDefault();
        $('#project-title').text("ClickColor");
        $('#project-status').html('<span id="" class="label label-success">Done</span>');
        $('#project-roles').html('<span class="label label-info">Lead Artist</span> <span class="label label-info">Game Designer</span> <span class="label label-info">Programmer</span>');
        $('#project-image').attr('src', '');
        $('#project-description').text('Click click click clickclickclick click click click click click click click click click click click click click.');
    });

    $('#ninjasiege').click(function (e) {
        e.preventDefault();
        $('#project-title').text("Ninja Siege");
        $('#project-status').html('<span id="" class="label label-success">Done</span>');
        $('#project-roles').html('<span class="label label-info">Lead Artist</span> <span class="label label-info">Game Designer</span> <span class="label label-info">Programmer</span>');
        $('#project-image').attr('src', '');
        $('#project-description').text('Ninjas ninjas ninjas ninjas ninjas ninjas ninjas ninjas ninjas piratas ninjas ninjas ninjas.');
    });

    $('#spacemarine').click(function (e) {
        e.preventDefault();
        $('#project-title').text("Space Marines");
        $('#project-status').html('<span id="" class="label label-warning">In Progress</span>');
        $('#project-roles').html('<span class="label label-info">Lead Artist</span>');
        $('#project-image').attr('src', '');
        $('#project-description').text('Marines marines marines marines marines marines marines marines marines.');
    });

    $('#generaldogs').click(function (e) {
        e.preventDefault();
        $('#project-title').text("Cook Book");
        $('#project-status').html('<span id="" class="label label-warning">In Progress</span>');
        $('#project-roles').html('<span class="label label-info">Lead Artist</span> <span class="label label-info">Game Designer</span>');
        $('#project-image').attr('src', 'img/generaldogs_icon.png');
        $('#project-description').text('General dogs! General dogs! General dogs! General dogs! Kaiser! General dogs! General dogs! General dogs!');
    });
});