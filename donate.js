// Verified donor records from the Trust's donor lists through August 31, 2026.
// Replace this static array with approved donor records from the donation
// system/database when that integration is available. Keep display consent
// in that future source; no anonymous records are included here.
const donors = [
  { name: "Town of Sharon", category: "property contribution", type: "municipal entity", amountTier: null },
  { name: "Lynden Miller", category: "in-kind contribution", type: "individual", amountTier: null },
  { name: "Low Road Foundation", category: "financial contribution", type: "foundation", amountTier: "$250,000 and above" },

  { name: "Robert Blumberg", category: "financial contribution", type: "individual", amountTier: "$20,000 to $49,999" },
  { name: "Phillips (Pete) Hathaway", category: "financial contribution", type: "individual", amountTier: "$20,000 to $49,999" },
  { name: "Roger & Florence Liddell", category: "financial contribution", type: "couple / household", amountTier: "$20,000 to $49,999" },
  { name: "Alexandra & Frederick Peters", category: "financial contribution", type: "couple / household", amountTier: "$20,000 to $49,999" },
  { name: "The Rhoades-Robinson Fund", category: "financial contribution", type: "charitable fund", amountTier: "$20,000 to $49,999" },

  { name: "Richard Berry, Lucy Commoner", category: "financial contribution", type: "individuals", amountTier: "$10,000 to $19,999" },
  { name: "NBT Bank", category: "financial contribution", type: "bank", amountTier: "$10,000 to $19,999" },

  { name: "Richard Baumann", category: "financial contribution", type: "individual", amountTier: "$5,000 to $9,999" },
  { name: "Nora Jordan, Allen Reiser", category: "financial contribution", type: "individuals", amountTier: "$5,000 to $9,999" },
  { name: "Mary Robertson", category: "financial contribution", type: "individual", amountTier: "$5,000 to $9,999" },

  { name: "John Brett, Jane Strong", category: "financial contribution", type: "individuals", amountTier: "$1,000 to $4,999" },
  { name: "Arlin & Laura Deboer", category: "financial contribution", type: "couple / household", amountTier: "$1,000 to $4,999" },
  { name: "Margaret Demarrais", category: "financial contribution", type: "individual", amountTier: "$1,000 to $4,999" },
  { name: "Maureen & Patrick Dore", category: "financial contribution", type: "couple / household", amountTier: "$1,000 to $4,999" },
  { name: "Molly Fitzmaurice", category: "financial contribution", type: "individual", amountTier: "$1,000 to $4,999" },
  { name: "Carol Flaton", category: "financial contribution", type: "individual", amountTier: "$1,000 to $4,999" },
  { name: "Caroline Herrick, Ted Sands", category: "financial contribution", type: "individuals", amountTier: "$1,000 to $4,999" },
  { name: "Spencer Holm 2014 Trust", category: "financial contribution", type: "trust", amountTier: "$1,000 to $4,999" },
  { name: "Jam Food Shop", category: "financial contribution", type: "business", amountTier: "$1,000 to $4,999" },
  { name: "Katharine Kinsolving", category: "financial contribution", type: "individual", amountTier: "$1,000 to $4,999" },
  { name: "Jeffrey Kivitz", category: "financial contribution", type: "individual", amountTier: "$1,000 to $4,999" },
  { name: "Dana Kraus", category: "financial contribution", type: "individual", amountTier: "$1,000 to $4,999" },
  { name: "Johnathan Kupferer", category: "financial contribution", type: "individual", amountTier: "$1,000 to $4,999" },
  { name: "Laurie Lisle, Robert Kipness", category: "financial contribution", type: "individuals", amountTier: "$1,000 to $4,999" },
  { name: "Laurie Lisle Charitable Fund", category: "financial contribution", type: "charitable fund", amountTier: "$1,000 to $4,999" },
  { name: "Carolyn & Bob Matoon", category: "financial contribution", type: "couple / household", amountTier: "$1,000 to $4,999" },
  { name: "Herbert & Lydia Moore", category: "financial contribution", type: "couple / household", amountTier: "$1,000 to $4,999" },
  { name: "Mr. & Mrs. Nicholas Moore", category: "financial contribution", type: "couple / household", amountTier: "$1,000 to $4,999" },
  { name: "Pamela Moulton, Bruce James", category: "financial contribution", type: "individuals", amountTier: "$1,000 to $4,999" },
  { name: "Northwest Community Bank", category: "financial contribution", type: "bank", amountTier: "$1,000 to $4,999" },
  { name: "Nick Pentecost, John Jolley", category: "financial contribution", type: "individuals", amountTier: "$1,000 to $4,999" },
  { name: "Linda, James Quella", category: "financial contribution", type: "individuals", amountTier: "$1,000 to $4,999" },
  { name: "Tracy & Michael Rand", category: "financial contribution", type: "couple / household", amountTier: "$1,000 to $4,999" },
  { name: "Kathy & Chris Robinson", category: "financial contribution", type: "couple / household", amountTier: "$1,000 to $4,999" },
  { name: "James Traub, Elizabeth Easton", category: "financial contribution", type: "individuals", amountTier: "$1,000 to $4,999" },
  { name: "Terry & Anne Vance", category: "financial contribution", type: "couple / household", amountTier: "$1,000 to $4,999" },

  { name: "Janet Accardo", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Carol Ascher, Robert Pittenger", category: "financial contribution", type: "individuals", amountTier: "Up to $999" },
  { name: "B Metcalf Asphalt Paving", category: "financial contribution", type: "business", amountTier: "Up to $999" },
  { name: "Tom & Sharman Bartram", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Patty & Bill Braislin", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Mark Bunnell, Julie Trager", category: "financial contribution", type: "individuals", amountTier: "Up to $999" },
  { name: "John & Portia Buquicchio", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Tara Cafiero, Pink Cloud", category: "financial contribution", type: "individual and organization", amountTier: "Up to $999" },
  { name: "Patricia Chamberlain", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Mark & Brenda Chipkin", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Christine Clare, Jeffrey Breitman", category: "financial contribution", type: "individuals", amountTier: "Up to $999" },
  { name: "Sarah & Chris Coon", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Ellen Chinn Curtis", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Donna & James DiMartino", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "DBO Home, LLC (Dana)", category: "financial contribution", type: "business", amountTier: "Up to $999" },
  { name: "Lorna & Daniel Edmundson", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Peter Felke, M.R. Halle (Titi)", category: "financial contribution", type: "individuals", amountTier: "Up to $999" },
  { name: "Sherry Frankel", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Stephen Furnstahl", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Gillette Electric / Terry", category: "financial contribution", type: "business and individual", amountTier: "Up to $999" },
  { name: "Dr. Joshua Ginsberg", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Gary Gordon", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Johanna & Bruce Haan", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Gretchen Hachmeister, Rendel Orzano", category: "financial contribution", type: "individuals", amountTier: "Up to $999" },
  { name: "Betsy Hall", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Paree & John Hecht", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Pamela Jarvis", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Dale & Diana Jones", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Lynn Kearcher, Carl Chaiet", category: "financial contribution", type: "individuals", amountTier: "Up to $999" },
  { name: "Michael, Maura Kelly", category: "financial contribution", type: "individuals", amountTier: "Up to $999" },
  { name: "Patricia Schell Kuhlman", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Kathleen & Robert Kulig", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Raymond J. Learsy", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Liza Reiss Real Estate", category: "financial contribution", type: "business", amountTier: "Up to $999" },
  { name: "Susan & William Lynn", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Joan Macfarlane", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Lelia & Edmund Mander", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Barbara McCollum, David Fiorillo", category: "financial contribution", type: "individuals", amountTier: "Up to $999" },
  { name: "Alicia Metz", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Wanda Moeller", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Larry & Nancy Moskowitz", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Karen & John Mullen, M.D.", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Carol Neiley", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Arnold Neis", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Janet & Robert Nickson", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Abigail Nova, Timothy Wright", category: "financial contribution", type: "individuals", amountTier: "Up to $999" },
  { name: "Suzanne & David Oliver", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Paley’s Farm and Garden Center", category: "financial contribution", type: "business", amountTier: "Up to $999" },
  { name: "Linda Peck", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Tina Pitcher", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Jennifer Pollitt", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Laurance & Carol Rand", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Jeremy & Greg Rassen", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Grace Schalkwyk", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Rhonda Schwartz, Stephen Wermiel", category: "financial contribution", type: "individuals", amountTier: "Up to $999" },
  { name: "Amy Smith", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Emily Soell", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Kate Stiassni", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Cynthia Vannoy", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Pat & Bob Whelan", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" },
  { name: "Anne Gordon Williams", category: "financial contribution", type: "individual", amountTier: "Up to $999" },
  { name: "Edwin & Grace Yowell Giving Fund", category: "financial contribution", type: "charitable fund", amountTier: "Up to $999" },
  { name: "Lindley & Allen Young", category: "financial contribution", type: "couple / household", amountTier: "Up to $999" }
];

const donorWall = document.querySelector('#donor-wall');
const donationUrl = 'https://sharonhousingtrust.com/donate';
const tierClasses = {
  "$250,000 and above": "brick-tier-high",
  "$20,000 to $49,999": "brick-tier-upper",
  "$10,000 to $19,999": "brick-tier-middle",
  "$5,000 to $9,999": "brick-tier-standard",
  "$1,000 to $4,999": "brick-tier-community",
  "Up to $999": "brick-tier-community"
};

function seededShuffle(items, seed = 20261027) {
  const result = [...items];
  let state = seed >>> 0;
  const random = () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

if (donorWall) {
  seededShuffle(donors).filter(donor => donor.name.trim().toLowerCase() !== 'anonymous').forEach((donor, index) => {
    const brick = document.createElement('li');
    const length = donor.name.length;
    const span = length > 28 ? 3 : length > 16 ? 2 : 1;
    const tone = (index * 7 + 3) % 6;
    const categoryClass = donor.category === 'property contribution' ? 'brick-property' : donor.category === 'in-kind contribution' ? 'brick-in-kind' : 'brick-financial';
    brick.className = `donor-brick donor-tone-${tone} donor-span-${span} ${categoryClass} ${tierClasses[donor.amountTier] || 'brick-tier-community'}`;
    brick.dataset.category = donor.category;
    brick.dataset.type = donor.type;
    brick.dataset.amountTier = donor.amountTier || '';
    brick.textContent = donor.name;
    donorWall.append(brick);
  });
}
