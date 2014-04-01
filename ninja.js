var looper = true;

while (looper === true) {
var user = prompt("You were late to school today.  As you're in sight of your school, you see ninjas taking it over.  Do you ATTACK the ninjas head-on, try to SNEAK inside the school, or RUN to the wharf to convince some pirates to help you free the school?", "Type ATTACK, SNEAK, or RUN to indicate your choice.").toLowerCase();

switch(user) {
    case 'attack':
        confirm("Oh, no!  I'm not sure that was a great idea to attack the ninjas like that.  They see you coming, and are prepared for your arrival.  They defeat you easily.");
        break;
    case 'sneak':
        sneak = prompt("You manage to do the unthinkable: outsneak a ninja! You make it into the school. Do you RALLY the students to take back the school, or try to stealthily ELIMINATE the ninjas yourself, one by one?", "Type RALLY, or ELIMINATE to indicate your choice.").toLowerCase();
        if (sneak === "rally" && sneak != "eliminate") {
            confirm("Well done! The ninjas could not stand against the legions of students attending your overly crowded school. You have defeated them.");
        }
        else {
            confirm("Your luck ran out, the ninjas spot you and lock you up in the girl's bathroom, from whence there is no escape. Without you in their way, the ninjas take over the world.");
        }
        break;
    case 'run':
        pirate = prompt("You run to the wharf to convince some pirates to help you retake the school. At first they were more interested in continuing their search for buried treasure, but once they heard that ninjas were involved, they agree whole heartedly to help your cause. They request that you PROMISE them all the maps in the geography department to help them with their search of buried treasure.  They also want to KEEP any treasure that they find at the school. Do you YIELD to both of their demands, or HOLD your ground, refusing to compromise?", "Type PROMISE, KEEP, YIELD or HOLD to indicate your choice.").toLowerCase();
        if (pirate === "keep" || pirate === "yield") {
            confirm("The pirates see that you're someone that they can work with. They follow you to the school, where they assist in liberating the school.");
        }
        else if (pirate === "hold" || pirate === "promise") {
            confirm("The pirates see in you the makings of a tough captain. They follow you to the school, and help you liberate the school from the ninjas. Afterwards, they convince you to sail off with them in search of buried treasure. You take the geography maps from the school to aid you in your search.");
        }
        if (pirate === "keep" || pirate === "yield") {
            confirm("After the ninjas are defeated, it becomes clear that the pirates view the Geology department's collection of priceless geological artifacts 'buried treasure'. They start to loot the collection, but then get out of hand. The school and its students might be safe, but there isn't anything left in side the school! The pirates took it all.");
        }
        break;
    default:
        confirm("due to your indecision, the world was overcome by ninjas. Great.");

looper = confirm("Would you like to play again?");

}
}