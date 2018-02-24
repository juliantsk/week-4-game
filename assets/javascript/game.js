var characters = {
    "kylo": {
        name: "Kylo Ren",
        id: "kylo",
        health: 120,
        attack: 8,
        multi: 8,
        img: "assets/images/kylo.jpg",
        enemyAttackBack: 15
    },
    "darth": {
        name: "Darth Vadar",
        id: "darth",
        health: 100,
        attack: 15,
        multi: 15,
        img: "assets/images/darth.jpg",
        enemyAttackBack: 25
    },
    "han": {
        name: "Han Solo",
        id: "han",
        health: 150,
        attack: 8,
        multi: 8,
        img: "assets/images/han.jpg",
        enemyAttackBack: 20
    },
    "stormtrooper": {
        name: "Stormtrooper",
        id: "stormtrooper",
        health: 180,
        attack: 7,
        multi: 7,
        img: "assets/images/stormtrooper.jpg",
        enemyAttackBack: 20
    }
};

var hero;
var opponent;

$(document).ready(function() {
    // Present starting text.
    $("#messages").html("Select a hero.");

    // Attack function.
    function attack() {
        //Take away from the opponent health...
        opponent.health -= hero.attack;
        $(".opponent > .character > p").text("Health: " + opponent.health);
        //... and increase the hero attack by one increment of.
        hero.attack += hero.multi;
    }

    // Retry button.
    var retry = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;
                var button = $("<button>").attr("id", "retry")
                    .append($("<a>").attr("href", "")
                        .append($("<p>").text("Retry")));

                $("body").append(button);
            }
        }
    })();


    // Creates the divs, images, titles, and health.
    for (var key in characters) {
        var obj = characters[key];
        var newDiv = $("<div>").attr("id", obj.id).addClass("character")
            .append($("<img>").attr("src", obj.img).attr("alt", obj.name))
            .append($("<h3>").text(obj.name))
            .append($("<p>").text("Health: " + obj.health));

        $("body").prepend(newDiv);

    }

    // Character div clicking functionality.
    $(".character").on("click", function() {
        var char = $(this);

        // When you click one of the character divs...
        if ($(".hero").is(":empty")) {
            // ...it becomes the hero.
            $(".hero").html(char);
            hero = characters[char.attr("id")];
        } else if ($(".opponent").is(":empty")) {
            // If you have selected a hero and you click on one of the remaining character divs it becomes your first opponent.
            $(".opponent").html(char);
            opponent = characters[char.attr("id")];
        } else {
            //However, if you've already selected an opponent, receive a message saying as much...
            $("#messages").html("You have already selected an opponent and hero.");
        }
    });


    // If you click the attack button...
    $("#attack-btn").on("click", function() {
        var enemyAttack = opponent.enemyAttackBack;
        // checks if you have an enemy in the opponent section...
        if (!$(".hero").is(":empty") && !$(".opponent").is(":empty")) {
            //...attacks the opponent...
            attack();
            //...has the opponent attack your hero.
            hero.health -= enemyAttack;
            $(".hero > .character > p").text("Health: " + hero.health);
        }

        // Checks if opponent health gets to zero or below...
        if (opponent.health <= 0) {
            $("#messages").html("You have defeated " + opponent.name + ".");
            $(".opponent").empty();
            //...shows success text.
            $("#messages").append("Please pick another opponent.");
        }

        // Checks if hero health gets to zero or below...
        if (hero.health <= 0) {
            $("#messages").html("You have lost.");
            $(".opponent").empty();
            //...shows defeat text and shows "retry" button.
            retry();
        }
    });


});