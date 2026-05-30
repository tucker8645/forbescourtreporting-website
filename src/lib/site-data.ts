export const contact = {
  phoneDisplay: "585-343-8612",
  phoneHref: "tel:5853438612",
  email: "kelly@forbescourtreporting.com",
  emailHref: "mailto:kelly@forbescourtreporting.com",
  address: "21 Woodcrest Drive, Batavia, New York 14020",
};

export const services = [
  "Depositions",
  "Arbitrations",
  "Disciplinary hearings",
  "50-H hearings",
  "Examinations under oath",
  "Grand jury proceedings",
  "Jury trials",
  "Town and village courts",
  "Federal court",
  "Town board meetings",
  "Zoning, planning, historical, and public hearings",
];

export const counties = [
  "Erie",
  "Allegany",
  "Livingston",
  "Orleans",
  "Monroe",
  "Genesee",
  "Wyoming",
  "Ontario",
  "Wayne",
  "Yates",
  "Steuben",
  "Cattaraugus",
  "Chautauqua",
];

export interface Court {
  name: string;
  lat: number;
  lon: number;
  county: string;
}

export const courts: Court[] = [
  { name: "Albion",        lat: 43.2463, lon: -78.1937, county: "Orleans" },
  { name: "Alden",         lat: 42.9001, lon: -78.4920, county: "Erie" },
  { name: "Allegany",      lat: 42.2446, lon: -78.0419, county: "Allegany" },
  { name: "Arcade",        lat: 42.5340, lon: -78.4231, county: "Wyoming" },
  { name: "Barre",         lat: 43.1722, lon: -78.2129, county: "Orleans" },
  { name: "Batavia",       lat: 42.9980, lon: -78.1876, county: "Genesee" },
  { name: "Bergen",        lat: 43.0853, lon: -77.9419, county: "Genesee" },
  { name: "Brighton",      lat: 43.1258, lon: -77.5687, county: "Monroe" },
  { name: "Chili",         lat: 43.0845, lon: -77.7541, county: "Monroe" },
  { name: "Clarkson",      lat: 43.2331, lon: -77.9275, county: "Monroe" },
  { name: "Darien",        lat: 42.9020, lon: -78.3503, county: "Genesee" },
  { name: "Gaines",        lat: 43.2865, lon: -78.2147, county: "Orleans" },
  { name: "Gates",         lat: 43.1514, lon: -77.7130, county: "Monroe" },
  { name: "Genesee",       lat: 43.0103, lon: -78.1780, county: "Genesee" },
  { name: "Geneva",        lat: 42.8690, lon: -76.9786, county: "Ontario" },
  { name: "Greece",        lat: 43.2582, lon: -77.6970, county: "Monroe" },
  { name: "Hamlin",        lat: 43.3031, lon: -77.9211, county: "Monroe" },
  { name: "Henrietta",     lat: 43.0612, lon: -77.6339, county: "Monroe" },
  { name: "Honeoye Falls", lat: 42.9523, lon: -77.5903, county: "Monroe" },
  { name: "Marilla",       lat: 42.8401, lon: -78.5550, county: "Erie" },
  { name: "Monroe",        lat: 43.0845, lon: -77.6150, county: "Monroe" },
  { name: "Murray",        lat: 43.2735, lon: -78.0469, county: "Orleans" },
  { name: "Orchard Park",  lat: 42.7670, lon: -78.7436, county: "Erie" },
  { name: "Orleans",       lat: 43.2400, lon: -78.1800, county: "Orleans" },
  { name: "Parma",         lat: 43.2667, lon: -77.7964, county: "Monroe" },
  { name: "Penfield",      lat: 43.1301, lon: -77.4760, county: "Monroe" },
  { name: "Perinton",      lat: 43.0781, lon: -77.4283, county: "Monroe" },
  { name: "Pittsford",     lat: 43.0910, lon: -77.5153, county: "Monroe" },
  { name: "Ridgeway",      lat: 43.2666, lon: -78.3899, county: "Orleans" },
  { name: "Rush",          lat: 42.9959, lon: -77.6456, county: "Monroe" },
  { name: "Shelby",        lat: 43.1738, lon: -78.3868, county: "Orleans" },
  { name: "Sweden",        lat: 43.1791, lon: -77.9406, county: "Monroe" },
  { name: "Warsaw",        lat: 42.7402, lon: -78.1326, county: "Wyoming" },
  { name: "Wayne",         lat: 42.4410, lon: -77.1352, county: "Steuben" },
  { name: "Webster",       lat: 43.2123, lon: -77.4300, county: "Monroe" },
];

export const reporters = [
  "Edith Forbes",
  "Doreen Sharick",
  "Macrae Haluszczak",
  "Brandi Wilkins",
  "Brenda Bischoping",
  "Holly Castleman",
  "Vicki Valente",
  "Janine Vascukynas",
  "Kim Weber",
  "Kim Bonsignore",
  "Ingrid Anderson",
  "Suzanne Saeed Tacker",
  "Kerri Seibert",
  "Carly Garretson",
];

export const legacy = [
  {
    name: "Edith Forbes",
    role: "Founder and owner, 1972-2015",
    detail:
      "A stenographic court reporter since 1969, RPR certified and New York State certified, Edith built the freelance business that became Forbes Court Reporting.",
  },
  {
    name: "Kelly Forbes",
    role: "Owner and operations manager",
    detail:
      "Kelly took over Forbes Court Reporting in 2015 after two decades working with Edie and building deep knowledge of New York State court systems.",
  },
  {
    name: "Macrae Forbes",
    role: "Voice court reporter and executive assistant",
    detail:
      "Macrae joined Forbes in 2019, moved into executive assistant work in 2021, and now works in court with voice and stenographic reporting methods.",
  },
  {
    name: "Edna Macrae",
    role: "Office manager, 1972-1999",
    detail:
      "Edna was part of the operating foundation of the business from its earliest years.",
  },
];

export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/coverage", label: "Coverage" },
  { href: "/about", label: "About" },
  { href: "/careers-students", label: "Careers & Students" },
  { href: "/contact", label: "Contact" },
];
