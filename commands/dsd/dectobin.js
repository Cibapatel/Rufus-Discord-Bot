const discord = require("discord.js");
//the variables may confuse but its implementation is correct
module.exports.run = async (bot, message, args) => {
	var ant = args;
	if (isNaN(ant)) return message.reply("Please input a valid number");
	var boy =""+ant;
	var cat = "";
	var lol = 0;
	for(var i=0;i<boy.length;i++){
		if(boy.charAt(i) == "."){
			lol++;//counter for demcial
			break;
		}
		cat = cat+boy.charAt(i);
	}
	var fur = "";
    var goat = "";
	var dog = parseInt(cat);
	var hat = (ant%1).toFixed(2);//calculates 2 decimal places
	var ice = Math.floor(hat*2);
	var joke = (ant%1).toFixed(1);//calculates 1 decimal place
	var king = Math.floor(joke*2);

	while(dog>=1){
		var ear = dog%2;
		fur = fur+ ear;
		dog = Math.floor(dog/2);
	}

	for(var i=fur.length;i>=0;i--){
		goat = goat + fur.charAt(i);
	}

	if(lol==0) message.channel.send(goat);//if no decimal
	if(lol==1) message.channel.send(goat+"."+ice+""+king);//if decimal

};


module.exports.help = {
	name: "dectobin",
    aliases: ['db']
};
