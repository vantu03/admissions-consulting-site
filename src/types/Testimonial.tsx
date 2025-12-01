export interface Testimonial {
    id: number;
    name: string;
    badge: string;
    rating: number;
    quote: string;
    role?: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Ababiya Darge",
        badge: "Consultation with Quasar & Co. Harvard Admissions Consultant",
        rating: 5,
        quote: "Personally, I found the consultation incredibly invaluable. Leonard showed me a side of the college application process I had never considered before. He answered every question I asked, pointed out every gap in my essays and overall application and helped me understand exactly what needed improvement. Even after our scheduled time ended, he encouraged me to keep asking questions. We ended up talking for 20 minutes longer than planned. If you're looking for college application consultancy, I highly recommend this one. 10/10!",
    },
    {
        id: 2,
        name: "Shubh Jain",
        badge: "Student Testimonial",
        rating: 5,
        quote: "I just got into Princeton, Columbia, Stanford, UC Berkeley from India.",
    },
    {
        id: 3,
        name: "Osama Radi",
        badge: "Student Testimonial",
        rating: 5,
        quote: "Your videos helped me tons during the admissions process.",
    },
    {
        id: 4,
        name: "Azmain Harun",
        badge: "Student Testimonial",
        rating: 5,
        quote: "I got into Vanderbilt. Thanks for your help!",
    }
];
