import { CsvFileReader } from './CsvFileReader';

//Export bit string and converting it to a 2d array of strings
const reader = new CsvFileReader('football.csv');
reader.read();

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
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}
let manUnitedWins = 0;
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`Man United WON ${manUnitedWins} games.`);
