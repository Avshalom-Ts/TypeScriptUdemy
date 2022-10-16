import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

// Creat an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
//Creat an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchreader = new MatchReader(csvFileReader);
// matchreader.load();

const matchReader = MatchReader.fromCsv('football.csv');

// const summary = new Summary(new WinAnalysis('Tottenham'), new HtmlReport());
const summary = Summary.winsAnalysisWithhtmlReport('Man United');

// summary.buildAndPrintReport(matchReader.matches);
summary.buildAndPrintReport(matchReader.matches);
