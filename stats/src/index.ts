import fs from 'fs';

//Export bit string and converting it to a 2d array of strings
const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

// console.log(matches[10]);
//First Solution
let manUnitedWins = 0;
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}
console.log(`Man United WON ${manUnitedWins} games.`);
