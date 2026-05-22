import type { Project, Experience, Internship, Award } from './types';

export const PERSONAL_INFO = {
  name: "Haowen Pang",
  role: "PhD Student",
  tagline: "Medical Image Synthesis. Generative Adversarial Network. Diffusion Model. Flow Matching.",
  email: "haowen.pang@bit.edu.cn",
  github: "https://github.com/panghaowen-hub",
  googleScholar: "https://scholar.google.com/citations?user=eJEDpA0AAAAJ",
  about: `I am a PhD student at the Beijing Institute of Technology, focusing on next-generation medical image synthesis. My research explores how diffusion models, uncertainty estimation, and domain knowledge can be integrated to generate high-fidelity brain MR images, with applications including contrast-agent dose reduction, contrast-free enhanced MRI synthesis, and more robust clinical imaging workflows.
Prior to this, I received my Master's degree from Northeastern University, where I developed deep learning methods for pulmonary CT analysis, including lung lobe and vessel segmentation, as well as non-contrast to contrast-enhanced CT synthesis to support COPD diagnosis and treatment.
From July 2025 to January 2026, I am a visiting PhD student at The Hong Kong Polytechnic University, working on MRI-to-PET synthesis for the assessment of neurodegenerative diseases such as Alzheimer's disease.
Beyond academic research, I enjoy addressing real-world problems through medical imaging challenges and am always open to collaboration. If you are interested in working together on research projects or challenge competitions, please feel free to reach out.`
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'DRCAM: Dose Reduction via Contrast Amplification Modeling for Brain Contrast-Enhanced Magnetic Resonance Images',
    venue: 'Biomedical Signal Processing and Control',
    date: 'March 2026',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S174680942501585X'
  },
  {
    id: '2',
    title: 'D3M: Deformation-Driven Diffusion Model for Synthesis of Contrast-Enhanced MRI with Brain Tumors',
    venue: 'Medical Image Computing and Computer Assisted Intervention (MICCAI)',
    date: 'September 2025',
    url: 'https://link.springer.com/chapter/10.1007/978-3-032-05325-1_15'
  },
  {
    id: '3',
    title: 'Cascaded Diffusion Model and Segment Anything Model for Medical Image Synthesis via Uncertainty-Guided Prompt Generation',
    venue: 'Information Processing in Medical Imaging (IPMI)',
    date: 'August 2025',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-96628-6_14',
  },
  {
    id: '4',
    title: 'NCCT-CECT Image Synthesizers and Their Application to Pulmonary Vessel Segmentation',
    venue: 'Computer Methods and Programs in Biomedicine',
    date: 'April 2023',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S0169260723000561',
  },
  {
    id: '5',
    title: 'Generative Models for Medical Image Creation and Translation: A Scoping Review',
    venue: 'Sensors',
    date: 'January 2026',
    url: 'https://www.mdpi.com/1424-8220/26/3/862',
  },
  {
    id: '6',
    title: 'A Fully Automatic Segmentation Pipeline of Pulmonary Lobes Before and After Lobectomy from Computed Tomography Images',
    venue: 'Computers in Biology and Medicine',
    date: 'August 2022',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S0010482522005595'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Beijing Institute of Technology",
    role: "PhD Student",
    period: "2023 - Present",
    description: [
      "Supervisor: Prof. Chuyang Ye.",
      "Research Focus: Medical image synthesis and VLM for brain MRI."
    ]
  },
  {
    company: "Hong Kong Polytechnic University",
    role: "Visiting PhD Student",
    period: "2025 - 2026",
    description: [
      "Supervisor: Prof. Anqi Qiu.",
      "Research Focus: PET image synthesis from MRI."
    ]
  },
  {
    company: "Northeastern University",
    role: "Master's Degree",
    period: "2020 - 2023",
    description: [
      "Supervisor: Prof. Shouliang Qi.",
      "Research Focus: Medical image segmentation and synthesis."
    ]
  },
];

export const INTERNSHIPS: Internship[] = [
  {
    company: "Canon Medical Systems",
    role: "Image Generation Algorithm Intern",
    period: "Winter 2024",
    description: [
      "Developed deep learning model for contrast-enhanced CT synthesis from non-contrast CT, aiming to support pulmonary embolism screening and reduce patient contrast agent exposure."
    ]
  },
  {
    company: "HIKVISION",
    role: "Deep Learning Algorithm Intern",
    period: "Spring 2022",
    description: [
      "Conducted research and deployment of a lightweight fire video object detection algorithm, improving detection robustness and real-time performance in resource-constrained environments."
    ]
  },
  {
    company: "Technology and Engineering Center for Space Utilization, CAS",
    role: "Algorithm Intern",
    period: "Summer 2021",
    description: [
      "Designed and implemented lightweight deep learning models for satellite component segmentation and deployment, contributing to on-orbit equipment perception for space engineering applications."
    ]
  }
];

export const AWARDS: Award[] = [
  {
    title: "2nd Prize of MICCAI2024 BraTS Global MRI Synthesis Challenge",
    date: "2024",
    description: "Synthesize realistic image contrasts given multiple available images to facilitate brain tumor segmentation."
  },
  {
    title: "2nd Prize of MICCAI2023 SynthRAD",
    date: "2023",
    description: "Synthesize computed tomography for radiotherapy."
  },
  {
    title: "2nd Prize of ISICDM2023 Glioma Segmentation Challenge",
    date: "2023",
    description: "Developed a data augmentation method to enable robust model training with limited labeled data."
  },
  {
    title: "1st Prize of ISICDM2021 Lung CT Anatomy Segmentation Challenge",
    date: "2021",
    description: "Developed a multi-task segmentation model based on nnU-Net."
  },
  {
    title: "The Outstanding Master's Thesis of Northeastern University",
    date: "2023",
    description: "One of two awarded in the College of Medicine and Biological Information Engineering."
  }
];
