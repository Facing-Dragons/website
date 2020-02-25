export const state = () => ({
    gameScores: {
        mindScore: 0,
        missionScore: 0,
        vitalityScore: 0,
        loveScore: 0,
        funScore: 0,
        socialScore: 0,
        homeScore: 0,
        wealthScore: 0,
    },
    resultScore: 0,
    resultText: "",
    userInfo: "",
    isSupport: false,
    isPlayer: true,
})


export const mutations = {
    setUserInfo(state, newUserInfo) {
        console.log(newUserInfo);
        state.userInfo = newUserInfo;
    },
    setGameScore(state, {index, newScore}) {
        console.log(index);
        console.log(newScore);
        var newKey = Object.keys(state.gameScores)[index];
        state.gameScores[newKey] = newScore;
    }
}