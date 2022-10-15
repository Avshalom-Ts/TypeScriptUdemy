"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
//Export bit string and converting it to a 2d array of strings
const matches = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8',
})
    .split('\n')
    .map((row) => {
    return row.split(',');
});
// console.log(matches[10]);
//First Solution
// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';
//Regular object
// const MatchResult = {
//   HomeWin: 'H',
//   AwayWin: 'A',
//   Draw: 'D',
// };
//enum - enumeration object
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United WON ${manUnitedWins} games.`);
