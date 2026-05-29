// IEEE-style reference registry.
// Numbered in (approximate) order of first appearance in the article.
// `Cite` looks references up by `id`; the References section renders them in order.

export interface Reference {
  id: number;
  /** Full IEEE-formatted citation string (rendered verbatim). */
  ieee: string;
  /** Optional external link. */
  url?: string;
  /** Short label shown on the link button. */
  source?: string;
}

const ACCESSED = "May 29, 2026";

export const references: Reference[] = [
  {
    id: 1,
    ieee: `Encyclopaedia Britannica, "Jose Rizal | Biography, Education, Works, Full Name, & Facts," Encyclopaedia Britannica. Accessed: ${ACCESSED}. [Online].`,
    url: "https://www.britannica.com/biography/Jose-Rizal",
    source: "Britannica",
  },
  {
    id: 2,
    ieee: `"José Rizal," Wikipedia, The Free Encyclopedia, Wikimedia Foundation. Accessed: ${ACCESSED}. [Online].`,
    url: "https://en.wikipedia.org/wiki/Jos%C3%A9_Rizal",
    source: "Wikipedia",
  },
  {
    id: 3,
    ieee: `"7 Facts on José Rizal the Famous Filipino Polymath," History Oasis. Accessed: ${ACCESSED}. [Online].`,
    url: "https://www.historyoasis.com/post/jose-rizal",
    source: "History Oasis",
  },
  {
    id: 4,
    ieee: `"Jose Rizal," New World Encyclopedia. Accessed: ${ACCESSED}. [Online].`,
    url: "https://www.newworldencyclopedia.org/entry/Jose_Rizal",
    source: "New World Encyclopedia",
  },
  {
    id: 5,
    ieee: `"José Rizal: A Complete Timeline of His Life (1861–1896)," JoseRizal.com. Accessed: ${ACCESSED}. [Online].`,
    url: "https://www.joserizal.com/life/rizal-timeline/",
    source: "JoseRizal.com",
  },
  {
    id: 6,
    ieee: `"GOMBURZA: First spark of revolution 150 years ago," Manila Bulletin, Feb. 17, 2022. Accessed: ${ACCESSED}. [Online].`,
    url: "https://mb.com.ph/2022/02/17/gomburza-first-spark-of-revolution-150-years-ago/",
    source: "Manila Bulletin",
  },
  {
    id: 7,
    ieee: `"Paciano Rizal," Wikipedia, The Free Encyclopedia, Wikimedia Foundation. Accessed: ${ACCESSED}. [Online].`,
    url: "https://en.wikipedia.org/wiki/Paciano_Rizal",
    source: "Wikipedia",
  },
  {
    id: 8,
    ieee: `J. Rizal, Noli Me Tángere (The Social Cancer), C. Derbyshire, Trans. Manila: Philippine Education Co., 1912. (Original work published 1887.) [Online].`,
    url: "https://www.gutenberg.org/files/6737/6737-h/6737-h.htm",
    source: "Project Gutenberg",
  },
  {
    id: 9,
    ieee: `J. Rizal, El Filibusterismo (The Reign of Greed), C. Derbyshire, Trans. Manila: Philippine Education Co., 1912. (Original work published 1891.) [Online].`,
    url: "https://www.gutenberg.org/files/10676/10676-h/10676-h.htm",
    source: "Project Gutenberg",
  },
  {
    id: 10,
    ieee: `"Rizal in Dapitan: Exile, Achievements, and Impact," JoseRizal.com. Accessed: ${ACCESSED}. [Online].`,
    url: "https://www.joserizal.com/life/rizal-in-dapitan/",
    source: "JoseRizal.com",
  },
  {
    id: 11,
    ieee: `"Trial and execution of José Rizal," Wikipedia, The Free Encyclopedia, Wikimedia Foundation. Accessed: ${ACCESSED}. [Online].`,
    url: "https://en.wikipedia.org/wiki/Trial_and_execution_of_Jos%C3%A9_Rizal",
    source: "Wikipedia",
  },
  {
    id: 12,
    ieee: `"Dec. 30, 1896: Dr. Jose Rizal executed in Bagumbayan," Philippine Daily Inquirer. Accessed: ${ACCESSED}. [Online].`,
    url: "https://usa.inquirer.net/186502/dec-30-1896-dr-jose-rizal-executed-in-bagumbayan",
    source: "Inquirer",
  },
  {
    id: 13,
    ieee: `G. F. Zaide and S. M. Zaide, José Rizal: Life, Works, and Writings of a Genius, Writer, Scientist, and National Hero, 2nd ed. Quezon City, Philippines: All-Nations Publishing Co., 1999.`,
  },
  {
    id: 14,
    ieee: `A. Coates, Rizal: Philippine Nationalist and Martyr. Hong Kong: Oxford University Press, 1968.`,
  },
  {
    id: 15,
    ieee: `R. Palma, The Pride of the Malay Race: A Biography of Rizal, R. Ozaeta, Trans. New York, NY, USA: Prentice-Hall, 1949.`,
  },
];

export const referenceMap: Record<number, Reference> = Object.fromEntries(
  references.map((r) => [r.id, r]),
);
