import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Tottenham');

matchReader.load();
// summary.buildAndPrintReport(matchReader.matches);
summary.buildAndPrintReport(matchReader.matches);
