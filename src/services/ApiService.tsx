import type{ Statistic } from '../types/Statistic'
import type{ Policie } from '../types/Policie'
import type { Feature } from '../types/Feature';
import type { Story } from '../types/Story';
import type { School } from '../types/School';
import type { Testimonial } from '../types/Testimonial';

export const apiBaseUrl = "http://localhost:3000";


export type ApiResponse = {
    status: string;
    data: any;
};

let cachedPolicies: Policie[] = [];
let cachedStatistics: Statistic[] = []
let cachedFeatures: Feature[] = []
let cachedStories: Story[] = []
let cachedSchools: School[] = []
let cachedTestimonials: Testimonial[] = []

export async function getPolicies(): Promise<Policie[]> {
    if (cachedPolicies.length > 0) return cachedPolicies;

    const res = await fetch(`${apiBaseUrl}/policies`);
    const json: ApiResponse = await res.json();

    cachedPolicies = json.data;
    return cachedPolicies;
}

export async function getStatistics(): Promise<Statistic[]> {

    if (cachedStatistics.length > 0) return cachedStatistics;

    const res = await fetch(`${apiBaseUrl}/statistics`);
    const json: ApiResponse = await res.json();

    cachedStatistics = json.data;
    return cachedStatistics;
}

export async function getFeatures(): Promise<Feature[]> {

    if (cachedFeatures.length > 0) return cachedFeatures;

    const res = await fetch(`${apiBaseUrl}/features`);
    const json: ApiResponse = await res.json();

    cachedFeatures = json.data;
    return cachedFeatures;
}


export async function getStories(): Promise<Story[]> {

    if (cachedStories.length > 0) return cachedStories;

    const res = await fetch(`${apiBaseUrl}/stories`);
    const json: ApiResponse = await res.json();

    cachedStories = json.data;
    return cachedStories;
}


export async function getSchools(): Promise<School[]> {

    if (cachedSchools.length > 0) return cachedSchools;

    const res = await fetch(`${apiBaseUrl}/schools`);
    const json: ApiResponse = await res.json();

    cachedSchools = json.data;
    return cachedSchools;
}



export async function getTestimonials(): Promise<Testimonial[]> {

    if (cachedTestimonials.length > 0) return cachedTestimonials;

    const res = await fetch(`${apiBaseUrl}/testimonials`);
    const json: ApiResponse = await res.json();

    cachedTestimonials = json.data;
    return cachedTestimonials;
}




export async function fetchApply(data:Object): Promise<ApiResponse> {

    const res = await fetch(`${apiBaseUrl}/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    const json: ApiResponse = await res.json();

    return json;
}

