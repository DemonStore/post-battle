const NUMBER_OF_PLAYERS = 50;

function range(number) {
    return (new Array(number)).fill(null);
}

function generatePlayer(start, index, prefixName) {
    return {
        id: `${start + index}`,
        username: `${prefixName}${index + 1}`,
        state: index % 2 ? 'alive' : 'dead',
        kills: NUMBER_OF_PLAYERS - index,
        deaths: index,
        totalKills: (NUMBER_OF_PLAYERS - index) * 10,
        totalDeaths: index * 10,
    }
}

module.exports = () => ({
    team0: range(NUMBER_OF_PLAYERS).map((_, index) => generatePlayer(0, index, 'Teammate')),
    team1: range(NUMBER_OF_PLAYERS).map((_, index) => generatePlayer(100, index, 'Enemy')),
});