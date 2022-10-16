"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// Creat an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
//Creat an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchreader = new MatchReader(csvFileReader);
// matchreader.load();
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
// const summary = new Summary(new WinAnalysis('Tottenham'), new HtmlReport());
const summary = Summary_1.Summary.winsAnalysisWithhtmlReport('Man United');
// summary.buildAndPrintReport(matchReader.matches);
summary.buildAndPrintReport(matchReader.matches);
