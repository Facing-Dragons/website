export const state = () => ({
    gameScores: {
        missionScore: 0,
        mindScore: 0,
        funScore: 0,
        socialScore: 0,
        homeScore: 0,
        loveScore: 0,
        wealthScore: 0,
        vitalityScore: 0,
    },
    resultScore: 0,
    resultText: "",
    userInfo: "",
    isSupport: false,
    isPlayer: true,
})

import playerTypes from 'static/playerTypes';
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
    },
    setAllScores(state, newScoreObject) {
        state.gameScores = Object.assign(newScoreObject);
    },
    //  We need an action to put the user scores upon !FINISHING! to the database 
    setPlayerText(state) {
        // Read the playerTypes.json
        let arr = Object.values(state.gameScores);
        const highestScore = Math.max(...arr);
        const lowestScore = Math.min(...arr);
        console.log(`highest is: ${highestScore}`);
        console.log(`lowest is: ${lowestScore}`);
    }
}