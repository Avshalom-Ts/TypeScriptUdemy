import { MatchData } from './MatchData';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzre {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  //Statac give the option to call the matode without the need to make an instance of the class
  static winsAnalysisWithhtmlReport(team: string): Summary {
    return new Summary(new WinAnalysis(team), new HtmlReport());
  }
  constructor(public analyzer: Analyzre, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
