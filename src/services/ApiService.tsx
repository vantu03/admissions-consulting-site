import type{ Statistic } from '../types/Statistic'

export const apiBaseUrl = "http://localhost:3000";


type ApiResponse = {
    status: string;
    data: any;
};

let cachedTerms: string | null = null;
let cachedPrivacy: string | null = null;
let cachedStatistics: Statistic[] = []

export async function getTermsOfService(): Promise<any> {
    if (cachedTerms) return cachedTerms;

    const res = await fetch(`${apiBaseUrl}/terms-of-service`);
    const json: ApiResponse = await res.json();

    cachedTerms = json.data;
    return cachedTerms;
}

export async function getPrivacyPolicy(): Promise<any> {
    if (cachedPrivacy) return cachedPrivacy;

    const res = await fetch(`${apiBaseUrl}/privacy-policy`);
    const json: ApiResponse = await res.json();

    cachedPrivacy = json.data;
    return cachedPrivacy;
}

export async function getStatistics(): Promise<any> {

    if (cachedStatistics.length > 0) return cachedStatistics;

    const res = await fetch(`${apiBaseUrl}/statistics`);
    const json: ApiResponse = await res.json();

    cachedStatistics = json.data;
    return cachedStatistics;
}