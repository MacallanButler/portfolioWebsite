export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    techStack: string[];
    overview: string;
    problem: string;
    role: string[];
    designDecisions: string;
    technicalImplementation: string;
    seoConsiderations: string;
    outcome: string;
}

export const projects: Project[] = [
    {
        id: "project-one",
        title: "Project One",
        shortDescription: "Independent project focused on UX structure and performance.",
        techStack: ["HTML", "CSS", "JavaScript"],
        overview: "Brief summary of what the project is, who it’s for, and why it exists.",
        problem: "What wasn’t working, missing, or unclear, and why it mattered.",
        role: ["UX Design", "UI Design", "Development", "SEO Strategy"],
        designDecisions: "Key layout, navigation, and accessibility decisions.",
        technicalImplementation: "Stack used, challenges faced, and how problems were solved.",
        seoConsiderations: "Semantic HTML, page intent, performance, and content structure decisions.",
        outcome: "Results so far and what you would iterate on next."
    },
    {
        id: "project-two",
        title: "Project Two",
        shortDescription: "Personal project centered on accessibility and responsive design.",
        techStack: ["HTML", "CSS", "JS"],
        overview: "Focus on creating a highly accessible web application.",
        problem: "Many applications lack proper ARIA labels and keyboard navigation.",
        role: ["Development", "Accessibility Audit"],
        designDecisions: "High contrast colors and scalable typography.",
        technicalImplementation: "Semantic HTML5 and automated accessibility testing.",
        seoConsiderations: "Accessibility improvements often correlate with better SEO.",
        outcome: "Achieved 100% lighthouse accessibility score."
    },
    {
        id: "project-three",
        title: "Project Three",
        shortDescription: "SEO-driven build focused on semantic markup and page intent.",
        techStack: ["HTML", "CSS", "JavaScript"],
        overview: "A static site optimized for search engine visibility.",
        problem: "Previous version had poor ranking and unstructured content.",
        role: ["SEO Specialist", "Developer"],
        designDecisions: "Minimalist design to prioritize content structure.",
        technicalImplementation: "Structured data (JSON-LD) and optimized assets.",
        seoConsiderations: "Targeted keywords and answer engine optimization.",
        outcome: "Traffic increased by 40% in two months."
    }
];
