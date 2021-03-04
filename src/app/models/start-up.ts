import { Advisor } from './advisor';
export class StartUp {
  name: string;
  businessLine: string;
  legalRepresentative: string;
  coFoundersNumber: number;
  description: string;
  address: string;
  advisor: Advisor;
  constructor(
    name: string = "",
    businessLine: string = "",
    legalRepresentative: string = "",
    coFounderNumber: number = 0,
    description: string = "",
    address: string = "",
    advisor: Advisor = null
  ) {
    this.name = name;
    this.businessLine = businessLine;
    this.legalRepresentative = legalRepresentative;
    this.coFoundersNumber = coFounderNumber;
    this.description = description;
    this.address = address;
    this.advisor = advisor;
  }
}
