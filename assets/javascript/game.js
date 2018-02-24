var characters = {
    "luke": {
        name: "Luke Skywalker",
        id: "luke",
        health: 120,
        attack: 8,
        img: "",
        enemyAttackBack: 15
    },
    "darth": {
        name: "Darth Vadar",
        id: "darth",
        health: 100,
        attack: 15,
        img: "",
        enemyAttackBack: 25
    },
    "han": {
        name: "Han Solo",
        id: "han",
        health: 150,
        attack: 8,
        img: "",
        enemyAttackBack: 20
    },
    "stormtrooper": {
        name: "Stormtrooper",
        id: "stormtrooper",
        health: 180,
        attack: 7,
        img: "",
        enemyAttackBack: 20
    }
};

var heroAttack = 0;

$(document).ready(function() {
    // Present starting text.
    $("#messages").html("Select a hero.");

    // Attack function.
    function attack() {
        // Get the attack of the selected hero...

        //...take away from the opponent health...

        //... and increase the hero attack by one increment of.


    }

    // Creates the divs, images, titles, and health.
    for (var key in characters) {
        var obj = characters[key];
        var newDiv = $("<div>").attr("id", obj.id).addClass("character")
            .append($("<img>").attr("src", obj.img).attr("alt", obj.name))
            .append($("<h3>").text(obj.name))
            .append($("<p>").text("health: " + obj.health));

        $("body").prepend(newDiv);

    }

    // Character div clicking functions.
    $(".character").on("click", function() {
        var char = $(this);

        // When you click one of the character divs, it becomes the hero.
        if ($("#hero").is(":empty")) {
            $("#hero").html(char);
            // If you have selected a hero and you click on one of the remaining character divs it becomes your first opponent...
        } else if ($("#opponent").is(":empty")) {
            $("#opponent").html(char);

        } else {
            //...however, if you've already selected an opponent, receive a message saying as much...
            $("#messages").html("You have already selected an opponent and hero.");
        }
    });


    // If you click the attack button, checks if you have an enemy in the opponent section...
    $("#attack-btn").on("click", function() {
        //...attacks the opponent...

        //...has the opponent attack your hero.

    });

    // Checks if opponent health gets to zero or below...

    //...shows success text.


    // Checks if hero health gets to zero or below...

    //...shows defeat text and shows "retry" button.



});