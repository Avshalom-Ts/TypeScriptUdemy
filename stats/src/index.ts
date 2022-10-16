import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

//Export bit string and converting it to a 2d array of strings
const reader = new CsvFileReader('football.csv');
reader.read();
const dateOfFirstMatch = reader.data[0][0];
console.log(dateOfFirstMatch);

let manUnitedWins = 0;
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`Man United WON ${manUnitedWins} games.`);
