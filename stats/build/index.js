"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const WinAnalysis_1 = require("./analyzers/WinAnalysis");
const Summary_1 = require("./Summary");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
// Creat an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//Creat an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchreader = new MatchReader_1.MatchReader(csvFileReader);
matchreader.load();
const summary = new Summary_1.Summary(new WinAnalysis_1.WinAnalysis('Tottenham'), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchreader.matches);
