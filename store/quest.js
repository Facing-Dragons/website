export const state = () => ({
    gameScores: {
        mission: 0,
        mind: 0,
        fun: 0,
        social: 0,
        home: 0,
        love: 0,
        wealth: 0,
        vitality: 0,
    },
    highestScore: '',
    lowestScore: '',
    resultScore: 0,
    resultTitle: "",
    resultSlogan: "",
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
        const highestScore = Object.keys(state.gameScores).reduce((a, b) => state.gameScores[a] > state.gameScores[b] ? a : b);
        const lowestScore = Object.keys(state.gameScores).reduce((a, b) => state.gameScores[a] < state.gameScores[b] ? a : b);
        state.highestScore = highestScore;
        state.lowestScore = lowestScore;
        state.resultTitle = playerTypes[highestScore][lowestScore].title;
        state.resultSlogan = playerTypes[highestScore][lowestScore].text;
    }
}