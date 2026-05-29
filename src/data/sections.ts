export interface NavSection {
  id: string;
  label: string;
  roman: string;
}

export const navSections: NavSection[] = [
  { id: "introduction", label: "Introduction", roman: "I" },
  { id: "biological", label: "Biological", roman: "II" },
  { id: "environmental", label: "Environmental", roman: "III" },
  { id: "experiences", label: "Life Experiences", roman: "IV" },
  { id: "character", label: "Character", roman: "V" },
  { id: "heroism", label: "Pitfalls & Heroism", roman: "VI" },
  { id: "conclusion", label: "Conclusion", roman: "VII" },
  { id: "references", label: "References", roman: "§" },
];
