export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "Patterns",
    title: "Discovering the nuclear localization signal universe through a deep learning model with interpretable attention units",
    authors: "Yi-Fan Li, Xiaoyong Pan, and Hong-Bin Shen*",
    paperUrl: "http://www.csbio.sjtu.edu.cn/bioinf/NLSExplorer/",
    codeUrl: "https://github.com/Dsadd4/NLSExplorer_1.0",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Utilizing deep attention network to uncover potential Nuclear Localization Signal universal",
    imageUrl:
      "/images/NLSExplorer2.png",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2023",
    conference: "IEEE INTERNATIONAL CONFERENCE ON BIOINFORMATICS AND BIOMEDICINE",
    title: "Isoform Function Prediction Based on Heterogeneous Graph Attention Networks",
    imageUrl:
    "/images/sec1.PNG",
    authors: "K. Guo, Y. Li, H. Chen, H. Shen and Y. Yang",
    paperUrl: "https://ieeexplore.ieee.org/document/10386048",
  },
];
