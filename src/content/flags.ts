import type { VerificationFlag } from "./types";

/** Issues found while analysing the PDF. Shown on the Sources page. */
export const sourceErrors: VerificationFlag[] = [
  { page: 97, text: "The summary says the Act for the Government of Wales was passed under Henry VII. The main text (p. 33) says it was during the reign of Henry VIII." },
  { page: 98, text: "The summary says St Columba and St Augustine \"led missionaries from Rome\". The main text (p. 40) says Columba came from Ireland; only Augustine came from Rome." },
  { page: 13, text: "Says \"The UK is a full member of the European Union\", but p. 91 says the UK left the EU on 31 January 2020." },
  { page: 90, text: "Says the Commonwealth has 54 member states, then lists \"56 member states\"." },
  { page: 21, text: "Refers to pocket and rotten boroughs \"(see Chapter 4)\"; they are explained on p. 16." },
  { page: 13, text: "Spelling slips in the PDF: \"Ian Wilmot\" (Wilmut), \"Clement Atlee\" (Attlee); and in the summary \"Cockrell\" (Cockerell), \"Flemming\" (Fleming), \"Stevenson\" (Stephenson)." },
];

export const datedInformation: VerificationFlag[] = [
  { page: 5, text: "Application requirements, the UK Border Agency and its website describe the position in 2013. Check gov.uk for current rules." },
  { page: 7, text: "Test booking arrangements and test-centre details date from 2013." },
  { page: 19, text: "Queen Victoria's reign is described as the longest \"at the date of writing (2013)\". Elizabeth II overtook it in 2015." },
  { page: 15, text: "Sections on governments from 2015 to 2024, King Charles III (p. 75) and the updated Commonwealth list (p. 90) were added by the PDF's publisher and are not in the official 3rd edition." },
  { page: 62, text: "Religion figures come from the 2009 Citizenship Survey." },
  { page: 78, text: "European Parliament elections and EU citizens' rights to vote and stand (pp. 88, 94) no longer apply in the UK." },
  { page: 81, text: "The paper tax disc was abolished in 2014." },
  { page: 83, text: "The Independent Police Complaints Commission has since been replaced." },
  { page: 92, text: "The Council of Europe now has 46 members, not 47." },
];

export const examFormatNote =
  "The handbook says the test has 24 questions (p. 7). The 45-minute time limit and the 18/24 (75%) pass mark used in the practice exam come from current official guidance and should be checked before booking.";
