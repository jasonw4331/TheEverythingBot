module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	aliases: ['icon', 'pfp'],
	execute(message) {
		if (!message.mentions.users.size) {
			const exampleEmbed = {
				title: message.author.name,
				image: {
					url: message.author.displayAvatarURL({ format: 'png', dynamic: true }),
				},
			};

			return message.channel.send({ embed: exampleEmbed });
		}

		message.mentions.users.forEach(user => {
			const exampleEmbed = {
				title: user.username,
				image: {
					url: user.displayAvatarURL({ dynamic: true }),
				},
			};
			message.channel.send({ embed: exampleEmbed });
		});
	},
};