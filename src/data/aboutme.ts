export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;

  idiom:string;
}

export const aboutMe: AboutMe = {
  name: "Yifan Li",
  idiom:"Almost everything will work again if you unplug it for a few minutes, including you",
  // title: "Ph.D. Candidate",
  // institution: "Stanford University",
  // Note that links work in the description
  description:
    "I work at the intersection of machine learning, computer science, and biology. My research focuses on developing interpretable machine learning algorithms and user-friendly software tools to address complex biological problems.",
  email: "yifanliscn@gmail.com",
  imageUrl:
    "/images/mage2.jpg",
  // googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "Dsadd4",
  // linkedinUsername: "janesmith",
  // twitterUsername: "janesmith",
  // blogUrl: "https://",
  cvUrl: "https://",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  
};
