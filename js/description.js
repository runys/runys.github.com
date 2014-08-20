$(function () {

    $('#save4thewin').click(function (e) {
        e.preventDefault();
        $('#project-title').text("Save 4 the Win");
        $('#project-status').html('<span id="" class="label label-warning">In Progress</span>');
        $('#project-roles').html('<span class="label label-info">Lead Artist</span> <span class="label label-info">Game Designer</span>');
        $('#project-image').attr('src', 'img/temp.svg');
        $('#project-description').text('A game where you have to save money to be successful!');
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
        $('#project-description').text("After a terrible accident you found yourself lost in the woods. There is only one food suplie left and you must protect it from the terrors of the forest. Survive as long as possible in this awesome game.");
    });

    $('#clickcolor').click(function (e) {
        e.preventDefault();
        $('#project-title').text("ClickColor");
        $('#project-status').html('<span id="" class="label label-success">Done</span>');
        $('#project-roles').html('<span class="label label-info">Lead Artist</span> <span class="label label-info">Game Designer</span> <span class="label label-info">Programmer</span>');
        $('#project-image').attr('src', 'img/temp.svg');
        $('#project-description').text('Do you think you are smart? Test your brain in this smart puzzle game where you only have one objective paint the screen with only one color.');
    });

    $('#ninjasiege').click(function (e) {
        e.preventDefault();
        $('#project-title').text("Ninja Siege");
        $('#project-status').html('<span id="" class="label label-success">Done</span>');
        $('#project-roles').html('<span class="label label-info">Lead Artist</span> <span class="label label-info">Game Designer</span> <span class="label label-info">Programmer</span>');
        $('#project-image').attr('src', 'img/temp.svg');
        $('#project-description').text("The ninjas are having their milenar reunion on the top of the ninja tower this year. But unfortunaly their worst enemies, have heard of this event and took advantage of this to surround the ninjas into their tower and kill them all for once. It up to you, the master ninja, to guide your ninja army in this awesome tower defense game, to lead them to the victory against the pirates.");
    });

    $('#spacemarine').click(function (e) {
        e.preventDefault();
        $('#project-title').text("Space Marines");
        $('#project-status').html('<span id="" class="label label-warning">In Progress</span>');
        $('#project-roles').html('<span class="label label-info">Lead Artist</span>');
        $('#project-image').attr('src', 'img/temp.svg');
        $('#project-description').text('Marines marines marines marines marines marines marines marines marines.');
    });

    $('#generaldogs').click(function (e) {
        e.preventDefault();
        $('#project-title').text("General Dogs");
        $('#project-status').html('<span id="" class="label label-warning">In Progress</span>');
        $('#project-roles').html('<span class="label label-info">Lead Artist</span> <span class="label label-info">Game Designer</span>');
        $('#project-image').attr('src', 'img/generaldogs_icon.png');
        $('#project-description').text("You are the Major. Your nation's leader. Your people relies on you. It's up to you to fulfill their needs. It's up to you to keep them happy. Don't you ever forget that it's up to them that you remain in power.");
    });

    $('#cookbook').trigger('click');
});
