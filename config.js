module.exports = {
    token: 'Bot Token',
    default_prefix: '!',
    owners: ['Your ID'],
    presence: {
        activities: [{ 
            name: 'you',
            type: 3, // https://stackoverflow.com/questions/73049373/setpresence-activity-type-in-discord-js-v14-can-only-be-set-to-playing/73050109
            //type can be anything 0-5; 0 = Playing, 1 = Streaming, 2 = Listening, 3 = Watching, 4 = Custom, 5 = Competing
        }],
        status: 'dnd',
    },
};
