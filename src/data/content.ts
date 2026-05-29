// Structured content for the interactive components.
// Prose lives in the section components; this file holds the data
// that the timeline, tabs, flip-cards, quiz, etc. render.

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  blurb: string;
  cite?: number[];
}

export const stats: Stat[] = [
  { value: 22, label: "Languages", blurb: "Tongues he could read or converse in — from Tagalog and Spanish to German, Japanese and Hebrew.", cite: [3] },
  { value: 2, label: "Novels", blurb: "Noli Me Tángere (1887) and El Filibusterismo (1891) ignited a national awakening.", cite: [8, 9] },
  { value: 4, label: "Years in exile", blurb: "Spent building schools, a water system and a community in remote Dapitan.", cite: [10] },
  { value: 35, label: "Years lived", blurb: "Born 19 June 1861; executed 30 December 1896 at Bagumbayan.", cite: [1, 12] },
];

export interface TimelineEvent {
  year: string;
  title: string;
  place: string;
  body: string;
  cite?: number[];
}

export const timeline: TimelineEvent[] = [
  {
    year: "1882–1885",
    title: "Voyage to Spain & studies in Madrid",
    place: "Barcelona · Madrid",
    body:
      "At twenty-one, Rizal sailed secretly to Europe to finish his medical studies free of the discrimination he faced at home. At the Universidad Central de Madrid he earned licentiates in medicine and in philosophy and letters, while immersing himself in the liberal currents of post-Enlightenment Europe.",
    cite: [1, 2],
  },
  {
    year: "1885–1887",
    title: "Ophthalmology & the writing of the Noli",
    place: "Paris · Heidelberg · Berlin",
    body:
      "He refined his ophthalmology under Dr. Louis de Wecker in Paris and Dr. Otto Becker in Heidelberg — partly to cure his mother's failing sight. In Berlin, hungry and nearly penniless, he finished and printed his first novel, Noli Me Tángere, an unflinching portrait of colonial abuse.",
    cite: [1, 8],
  },
  {
    year: "1887 & 1891",
    title: "The two novels that lit the fuse",
    place: "Berlin · Ghent",
    body:
      "Noli Me Tángere (1887) and its darker sequel El Filibusterismo (1891) exposed the rot of friar rule. Smuggled into the Philippines, they were banned — and devoured. Rizal became the leading voice of the Propaganda Movement.",
    cite: [8, 9],
  },
  {
    year: "1892",
    title: "Return home & La Liga Filipina",
    place: "Manila",
    body:
      "Rizal came home and founded La Liga Filipina, a peaceful civic league for reform. Within days he was arrested and ordered into exile — the colonial government feared the organizer more than the author.",
    cite: [2, 5],
  },
  {
    year: "1892–1896",
    title: "Exile in Dapitan",
    place: "Dapitan, Mindanao",
    body:
      "Far from the centres of power, Rizal turned confinement into creation: he opened a school for boys, designed a waterworks that still functions, drained malarial swamps, treated the poor for free, farmed, and corresponded with scientists across Europe.",
    cite: [10],
  },
  {
    year: "1896",
    title: "Arrest, trial & execution",
    place: "Fort Santiago · Bagumbayan",
    body:
      "Implicated in a revolution he had not endorsed, Rizal was tried by a military court for rebellion, sedition and conspiracy. On the eve of his death he wrote 'Mi Último Adiós.' At 7:03 a.m. on 30 December 1896 he was shot at Bagumbayan — and a nation was born.",
    cite: [11, 12],
  },
];

export interface TabImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Tab {
  key: string;
  label: string;
  heading: string;
  body: string[];
  cite?: number[];
  images?: TabImage[];
}

export const environmentTabs: Tab[] = [
  {
    key: "family",
    label: "Family & Upbringing",
    heading: "A household of books and backbone",
    body: [
      "José was the seventh of eleven children of Francisco Mercado and Teodora Alonso Realonda, a relatively prosperous family that leased land from the Dominican order in Calamba, Laguna. The home valued learning: Teodora, herself well-read, taught José his letters and recited poetry to him as a child.",
      "His older brother Paciano was a second father and his first political teacher — a man who had lived with the reformist priest Father José Burgos. When Paciano advised the young José to enrol under the surname 'Rizal,' it was to shield him from the suspicion that clung to the Mercado name.",
    ],
    cite: [5, 7],
    images: [
      { src: "/rizal-father.jpg", alt: "Francisco Mercado, father of José Rizal", caption: "Francisco Mercado, his father" },
      { src: "/rizal-mother.jpg", alt: "Teodora Alonso Realonda, mother of José Rizal", caption: "Teodora Alonso, his mother & first teacher" },
    ],
  },
  {
    key: "education",
    label: "Education",
    heading: "From the Ateneo to the universities of Europe",
    body: [
      "Rizal excelled at the Ateneo Municipal de Manila, earning a Bachelor of Arts with highest honours, then studied medicine at the Universidad de Santo Tomás — where he chafed against the friars' contempt for native students.",
      "Seeking an education free of that prejudice, he continued in Madrid, Paris and Heidelberg, absorbing European science, languages and liberal philosophy. Formal schooling gave him credentials; his restless self-education made him a polymath.",
    ],
    cite: [1, 2],
    images: [
      { src: "/rizal-1883.jpg", alt: "Portrait of José Rizal as a young student in 1883", caption: "Rizal in 1883, during his student years in Europe" },
    ],
  },
  {
    key: "context",
    label: "Social & Political Context",
    heading: "A colony ruled by the friar's shadow",
    body: [
      "Nineteenth-century Philippines was a Spanish colony in which religious orders held vast land and political power. Native Filipinos — the 'indios' — were taxed, conscripted, and denied equality before the law.",
      "The 1872 garrote execution of the priests Gomez, Burgos and Zamora ('GomBurZa') on fabricated charges seared itself into the eleven-year-old Rizal's conscience. He would later dedicate El Filibusterismo to them. The injustice of his world was not abstract — it was the air he breathed.",
    ],
    cite: [6, 9],
    images: [
      { src: "/rizal-ilustrados.jpg", alt: "José Rizal with fellow ilustrados Marcelo del Pilar and Mariano Ponce", caption: "Rizal (left) with fellow ilustrados M. del Pilar and M. Ponce of the Propaganda Movement" },
    ],
  },
];

export interface FlipItem {
  front: string;
  icon: string;
  back: string;
  cite?: number[];
}

export const biologicalTraits: FlipItem[] = [
  {
    front: "Mixed ancestry",
    icon: "🌏",
    back:
      "Rizal's bloodline blended Filipino, Chinese, Spanish and Japanese roots — a heritage he embraced as proof that the 'indio' was the equal of any race.",
    cite: [2, 4],
  },
  {
    front: "Prodigious intellect",
    icon: "🧠",
    back:
      "An almost photographic memory and ferocious curiosity let him master some twenty-two languages and excel from medicine to sculpture and poetry.",
    cite: [3],
  },
  {
    front: "Small stature",
    icon: "📏",
    back:
      "Standing only about five feet tall and slight of build, Rizal answered the limitation by disciplining his body — fencing, shooting, and martial arts.",
    cite: [2, 4],
  },
  {
    front: "Fragile health",
    icon: "🫁",
    back:
      "Sickly and undersized as a child, he was the family's 'frail one.' That early frailty bred a lifelong habit of self-improvement and physical training.",
    cite: [4],
  },
];

export interface Trait {
  name: string;
  text: string;
  cite?: number[];
}

export const virtues: Trait[] = [
  { name: "Moral courage", text: "He attacked an entire colonial order in print, knowing exactly what it might cost him.", cite: [8, 9] },
  { name: "Industry & versatility", text: "Physician, novelist, poet, sculptor, linguist, farmer, engineer — he wasted no talent.", cite: [3] },
  { name: "Compassion", text: "In Dapitan he treated the poor for free and gave his prize money and skill to his community.", cite: [10] },
  { name: "Devotion to truth", text: "He preferred reform through education and reason over the easy applause of violence.", cite: [2] },
];

export const weaknesses: Trait[] = [
  { name: "Pride & sensitivity", text: "Acutely conscious of slights, he could be proud and quick to feel wounded by criticism.", cite: [14] },
  { name: "Idealism vs. action", text: "His faith in gradual, peaceful reform left him at odds with revolutionaries who had run out of patience.", cite: [2] },
  { name: "Restlessness", text: "A roving mind and heart — across continents, careers and loves — sometimes scattered his vast energies.", cite: [13] },
];

export interface EvolutionPhase {
  phase: string;
  years: string;
  text: string;
  cite?: number[];
}

export const evolution: EvolutionPhase[] = [
  {
    phase: "The gifted child",
    years: "1861–1872",
    text:
      "Born into a cultured Calamba family, José was a frail but precociously brilliant boy. His mother, Teodora, taught him to read and write and fed his imagination with poetry; by eight he was already composing verses. Sheltered yet endlessly curious, he absorbed the faith, learning, and quiet self-discipline that would anchor everything to come.",
    cite: [5],
  },
  {
    phase: "The awakened student",
    years: "1872–1882",
    text:
      "Two shocks shattered the boy's innocence: the 1872 garrote execution of the GomBurZa priests and the unjust jailing of his own mother. He shone at the Ateneo, but at Santo Tomás he met the friars' open contempt for 'indios.' Curiosity hardened into conviction — he began to feel that his gifts carried an obligation to his people.",
    cite: [6],
  },
  {
    phase: "The reformer-artist",
    years: "1882–1892",
    text:
      "In Europe, freed from colonial prejudice, Rizal matured into the Propaganda Movement's sharpest mind. He deliberately chose the pen over the sword, pouring his outrage into Noli Me Tángere and El Filibusterismo — novels that named the colony's wounds so precisely they could never be unseen. Still, he hoped Spain might yet be persuaded to reform.",
    cite: [8, 9],
  },
  {
    phase: "The serene exile",
    years: "1892–1896",
    text:
      "Banished to Dapitan, the fiery polemicist mellowed into a patient builder. Denied his platform, he taught children, healed the sick, engineered a waterworks, and studied nature — leading through service rather than slogans. The restless reformer found a hard-won serenity, proving his ideals could be lived, not merely written.",
    cite: [10],
  },
  {
    phase: "The willing martyr",
    years: "1896",
    text:
      "Arrested for a revolution he had counselled against, Rizal faced a rigged military trial with extraordinary calm. On the eve of his death he wrote 'Mi Último Adiós,' and at dawn on 30 December 1896 he walked to Bagumbayan unbroken. By dying without bitterness, he turned a colonial execution into the founding act of a nation's conscience.",
    cite: [11, 15],
  },
];

export interface Challenge {
  challenge: string;
  response: string;
  cite?: number[];
}

export const challenges: Challenge[] = [
  {
    challenge: "Discrimination against 'indio' students",
    response:
      "Rather than accept inferiority, he out-studied his colonizers in their own universities and wrote to prove the Filipino's equal worth.",
    cite: [1, 2],
  },
  {
    challenge: "Censorship & the banning of his novels",
    response:
      "Banned books were smuggled and read in secret; suppression only amplified their reach and made Rizal the symbol of a cause.",
    cite: [8, 9],
  },
  {
    challenge: "Persecution of his family",
    response:
      "When his mother was jailed and his family dispossessed of their land, he channeled private grief into a public indictment of friar power.",
    cite: [2, 5],
  },
  {
    challenge: "Exile to remote Dapitan",
    response:
      "Stripped of his stage, he built schools, healed the sick and engineered a waterworks — proving leadership is service, not position.",
    cite: [10],
  },
  {
    challenge: "A rigged trial and certain death",
    response:
      "He faced execution with calm dignity and a final poem, turning a colonial spectacle into the founding myth of Philippine nationhood.",
    cite: [11, 12, 15],
  },
];

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  cite?: number[];
}

export const quiz: QuizQuestion[] = [
  {
    question: "In which town was José Rizal born in 1861?",
    options: ["Calamba, Laguna", "Dapitan, Zamboanga", "Intramuros, Manila", "Biñan, Laguna"],
    answer: 0,
    explanation: "Rizal was born on 19 June 1861 in Calamba, Laguna, the seventh of eleven children.",
    cite: [1, 5],
  },
  {
    question: "Which event of 1872 awakened the young Rizal's sense of injustice?",
    options: [
      "The Cry of Pugad Lawin",
      "The execution of the GomBurZa priests",
      "The founding of the Katipunan",
      "The Battle of Manila Bay",
    ],
    answer: 1,
    explanation:
      "The garrote execution of Fathers Gomez, Burgos and Zamora — friends of his brother Paciano — deeply marked the eleven-year-old Rizal.",
    cite: [6, 7],
  },
  {
    question: "What did Rizal famously build during his exile in Dapitan?",
    options: [
      "A printing press",
      "A railway line",
      "A school and a community water system",
      "A cathedral",
    ],
    answer: 2,
    explanation:
      "In Dapitan he opened a school for boys, designed a working waterworks, drained swamps and treated the poor for free.",
    cite: [10],
  },
  {
    question: "Which work did Rizal write on the eve of his execution?",
    options: ["Noli Me Tángere", "El Filibusterismo", "Mi Último Adiós", "La Liga Filipina"],
    answer: 2,
    explanation:
      "'Mi Último Adiós' ('My Last Farewell') was written in his cell at Fort Santiago and hidden in an alcohol lamp for his family.",
    cite: [11, 12],
  },
  {
    question: "How did Rizal believe Philippine freedom should primarily be won?",
    options: [
      "Through immediate armed revolution",
      "Through education, reform and reason",
      "Through foreign military intervention",
      "Through religious conversion",
    ],
    answer: 1,
    explanation:
      "Rizal championed reform through enlightenment and civic action; he did not endorse the armed revolt for which he was ultimately executed.",
    cite: [2, 11],
  },
];
