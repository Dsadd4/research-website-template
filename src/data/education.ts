export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  // {
  //   year: "2021—2024",
  //   institution: "Shang Hai Jiao Tong University",
  //   degree: "M.S in Engineering of Electronic Information",
  //   advisor: "Prof. Hongbin Shen",
  //   thesis:"Research on Protein Subcellular Localization and Nuclear Localization Signal Prediction Algorithm Based on Large Language Model and Deep Attention Network"
  // },
  // {
  //   year: "2014—2021",
  //   institution: "Tong Ji University",
  //   degree: "B.S. in Engineering in Vehicle Engineering",
  //   thesis: "Research on Energy Management Strategy of Tram Batteries Based on Reinforcement Learning",
  //   // Optional links to thesis
  //   // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  // },
];
