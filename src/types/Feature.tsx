import {
    LuTarget,
    LuRocket,
    LuGraduationCap,
    LuTrophy,
    LuPenTool,
    LuBookOpen,
} from "react-icons/lu";
import type { IconType } from "react-icons";


export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: IconType;
}

export const features: Feature[] = [
    {
        id: "strategy",
        title: "Get in With a Winning Strategy",
        description:
            "A seasoned college admissions consultant curates the perfect school list, timeline, and unique theme that helps your child stand out above the competition.",
        icon: LuTarget,
    },
    {
        id: "capstone",
        title: "Showcase Leadership With a High-Impact Capstone Project",
        description:
            "Specialist capstone advisors help your child create and scale a passion-driven project that makes a real-world impact.",
        icon: LuRocket,
    },
    {
        id: "research",
        title: "Conduct Research That Stands Out",
        description:
            "Professors and PhD mentors from schools like Harvard, Stanford, and MIT help your child show academic excellence by developing and publishing original research.",
        icon: LuGraduationCap,
    },
    {
        id: "awards",
        title: "Win Prestigious Honors & Awards",
        description:
            "With coaching from past winners and judges, your child is guided on how to compete in some of the most respected global academic competitions.",
        icon: LuTrophy,
    },
    {
        id: "essays",
        title: "Write Essays That Seal the Deal",
        description:
            "From the perfect topic to final polish, our essay experts guide your child on how to write a personal statement and supplemental essays that prove why they belong on campus.",
        icon: LuPenTool,
    },
    {
        id: "tutors",
        title: "Top-Scoring Tutors That Lift Grades and Test Scores",
        description:
            "Our tutors, who got into top schools thanks to their own impressive test scores, guide your child through SAT or ACT prep.",
        icon: LuBookOpen,
    },
];
