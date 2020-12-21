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

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ dynamic: true })}>`;
		});

		message.channel.send(avatarList);
	},
};