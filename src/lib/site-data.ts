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
  address: string;
}

export const courts: Court[] = [
  { name: "Alabama",       lat: 43.0665, lon: -78.2635, county: "Genesee",    address: "3219 Drake Street Rd, Oakfield, NY 14125" },
  { name: "Albion",        lat: 43.2386, lon: -78.1781, county: "Orleans",    address: "3665 Clarendon Rd, Albion, NY 14411" },
  { name: "Alden",         lat: 42.9396, lon: -78.5485, county: "Erie",       address: "3311 Wende Rd, Alden, NY 14004" },
  { name: "Allegany",      lat: 42.0875, lon: -78.5049, county: "Cattaraugus",address: "3790 Birch Run Rd, Allegany, NY 14706" },
  { name: "Arcade",        lat: 42.5346, lon: -78.4245, county: "Wyoming",    address: "17 Church St, Arcade, NY 14009" },
  { name: "Barre",         lat: 43.1736, lon: -78.1974, county: "Orleans",    address: "14317 West Barre Rd, Albion, NY 14411" },
  { name: "Batavia",       lat: 43.0057, lon: -78.2094, county: "Genesee",    address: "4120 West Main Street Rd, Batavia, NY 14020" },
  { name: "Bergen",        lat: 43.0847, lon: -77.9422, county: "Genesee",    address: "13 S Lake Ave, Bergen, NY 14416" },
  { name: "Brighton",      lat: 43.1268, lon: -77.5758, county: "Monroe",     address: "2300 Elmwood Ave, Rochester, NY 14618" },
  { name: "Chili",         lat: 43.1037, lon: -77.7514, county: "Monroe",     address: "3235 Chili Ave, Rochester, NY 14624" },
  { name: "Clarkson",      lat: 43.2343, lon: -77.9271, county: "Monroe",     address: "3657 Lake Rd, Clarkson, NY 14430" },
  { name: "Darien",        lat: 42.9022, lon: -78.3884, county: "Genesee",    address: "10569 Alleghany Rd, Darien Center, NY 14040" },
  { name: "Elba",          lat: 43.0666, lon: -78.2634, county: "Genesee",    address: "3219 Drake Street Rd, Oakfield, NY 14125" },
  { name: "Gaines",        lat: 43.2866, lon: -78.2100, county: "Orleans",    address: "14083 Ridge Rd, Albion, NY 14411" },
  { name: "Gates",         lat: 43.1489, lon: -77.6941, county: "Monroe",     address: "1605 Buffalo Rd, Rochester, NY 14624" },
  { name: "Geneva",        lat: 42.8498, lon: -77.0115, county: "Ontario",    address: "3750 County Road 6, Geneva, NY 14456" },
  { name: "Greece",        lat: 43.1671, lon: -77.5846, county: "Monroe",     address: "4 St. DiPonzio Way, Rochester, NY 14612" },
  { name: "Hamlin",        lat: 43.2970, lon: -77.9201, county: "Monroe",     address: "1658 Lake Rd, Hamlin, NY 14464" },
  { name: "Henrietta",     lat: 43.0668, lon: -77.6406, county: "Monroe",     address: "135 Calkins Rd, Rochester, NY 14623" },
  { name: "Honeoye Falls", lat: 42.9523, lon: -77.5907, county: "Monroe",     address: "5 East St, Honeoye Falls, NY 14472" },
  { name: "Marilla",       lat: 42.8393, lon: -78.5556, county: "Erie",       address: "1740 Two Rod Rd, Marilla, NY 14102" },
  { name: "Murray",        lat: 43.2289, lon: -78.0865, county: "Orleans",    address: "3840 Fancher Rd, Holley, NY 14470" },
  { name: "Orchard Park",  lat: 42.7664, lon: -78.7434, county: "Erie",       address: "4295 South Buffalo St, Orchard Park, NY 14127" },
  { name: "Parma",         lat: 43.2524, lon: -77.7874, county: "Monroe",     address: "1300 Hilton Parma Corners Rd, Hilton, NY 14468" },
  { name: "Penfield",      lat: 43.1579, lon: -77.4630, county: "Monroe",     address: "1587 Baird Rd, Penfield, NY 14526" },
  { name: "Perinton",      lat: 43.0830, lon: -77.4305, county: "Monroe",     address: "1350 Turk Hill Rd, Fairport, NY 14450" },
  { name: "Pittsford",     lat: 43.0906, lon: -77.5158, county: "Monroe",     address: "11 S Main St, Pittsford, NY 14534" },
  { name: "Ridgeway",      lat: 43.2213, lon: -78.3899, county: "Orleans",    address: "410 West Ave, Medina, NY 14103" },
  { name: "Riga",          lat: 43.0695, lon: -77.8839, county: "Monroe",     address: "Riga, NY 14428" },
  { name: "Rush",          lat: 42.9955, lon: -77.6461, county: "Monroe",     address: "5977 East Henrietta Rd, Rush, NY 14543" },
  { name: "Shelby",        lat: 43.2142, lon: -78.4127, county: "Orleans",    address: "4062 Salt Works Rd, Medina, NY 14103" },
  { name: "Sweden",        lat: 43.2141, lon: -77.9379, county: "Monroe",     address: "18 State St, Brockport, NY 14420" },
  { name: "Warsaw",        lat: 42.7403, lon: -78.1334, county: "Wyoming",    address: "27 West Buffalo St, Warsaw, NY 14569" },
  { name: "Webster",       lat: 43.2110, lon: -77.4579, county: "Monroe",     address: "1002 Ridge Rd, Webster, NY 14580" },
];

export const reporters = [
  "Ingrid Anderson",
  "Brenda Bischoping",
  "Kim Bonsignore",
  "Holly Castleman",
  "Lisa Crawford",
  "Edith Forbes",
  "Carly Garretson",
  "Macrae Haluszczak",
  "Kerri Seibert",
  "Doreen Sharick",
  "Suzanne Saeed Tacker",
  "Vicki Valente",
  "Janine Vascukynas",
  "Kim Weber",
  "Brandi Wilkins",
];

export const legacy = [
  {
    name: "Kelly Forbes",
    role: "Owner and Operations Manager",
    credentials: "B.S. Interdisciplinary Studies, New York Institute of Technology",
    photo: "/team/kelly.avif",
    bio: [
      "Kelly officially took over Forbes Court Reporting in 2015, becoming the third generation of this family business.",
      "Kelly worked for Edie as Executive Assistant for 20 years. Through those years she developed deep knowledge of New York State court systems, built strong interpersonal relationships across the industry, and formed contracts with court systems across the state.",
    ],
  },
  {
    name: "Edith Forbes",
    role: "Owner, 1972–2015",
    credentials: "Stenographic Court Reporter since 1969 · RPR Certified · NYS Certified",
    photo: "/team/edith.avif",
    bio: [
      "Edie started her stenography schooling in 1969 and launched her freelance business in 1972 — now known as Forbes Court Reporting LLC.",
      "Her expertise in the stenographic field is unmatched. Over 50 years, her cases ranged from the Attica Riots civil suits in the 1970s, to the Sammy Gingillo Grand Jury in the 1980s, to countless Supreme Court, Federal Court, and Town Court proceedings.",
      "Edie worked tirelessly to build her business over five decades, employing freelance court reporters along the way to take on more cases.",
      "Edie retired from active court reporting in 2009 and remained owner until 2015, when Kelly Forbes became Operations Manager and Owner. Edie still loves the field and stays as involved as possible — but is happily retired with her husband Edgar Forbes.",
    ],
  },
  {
    name: "Macrae Forbes",
    role: "Voice Court Reporter · Executive Assistant · Web & Marketing",
    credentials: "",
    photo: "/team/macrae.avif",
    bio: [
      "Macrae Forbes joined Forbes Court Reporting in 2019 after graduating from high school.",
      "She began by taking digital proceedings from 2019–2020 and became Executive Assistant in 2021. She currently works in court with both voice court reporting and stenographic court reporting methods.",
    ],
  },
  {
    name: "Edna Macrae",
    role: "Office Manager, 1972–1999",
    credentials: "",
    photo: "/team/edna.avif",
    bio: [
      "Edna Macrae worked for Forbes Court Reporting from 1972 to 1999, serving as a key part of the operational foundation of the business from its earliest years.",
    ],
  },
];

export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/coverage", label: "Coverage" },
  { href: "/about", label: "About" },
  { href: "/careers-students", label: "Careers" },
  { href: "/contact", label: "Contact" },
];
