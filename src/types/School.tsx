
import harvard_university from '../static/harvard_university.png'
import stanford_university from '../static/stanford_university.png'
import princeton_university from '../static/princeton_university.png'
import yale_university from '../static/yale_university.png'
import columbia_university from '../static/columbia_university.png'
import uc_berkeley from '../static/uc_berkeley.png'
import vanderbilt_university from '../static/vanderbilt_university.png'
import carnegie_mellon_qatar from '../static/carnegie_mellon_qatar.png'


export interface School {
    name: string
    icon: string
    address: string,
    value: string
}


export const schools = [
    {
        name: 'Harvard University',
        icon: harvard_university,
        address: 'Cambridge, MA, USA',
        value: 'Michael Lin'
    },
    {
        name: 'Stanford University',
        icon: stanford_university,
        address: 'Stanford, CA, USA',
        value: 'Shubh Jain'
    },
    {
        name: 'Princeton University',
        icon: princeton_university,
        address: 'Princeton, NJ, USA',
        value: 'Shubh Jain'
    },
    {
        name: 'Yale University',
        icon: yale_university,
        address: 'New Haven, CT, USA',
        value: 'Osama Radi'
    },
    {
        name: 'Columbia University',
        icon: columbia_university,
        address: 'New York, NY, USA',
        value: 'Shubh Jain'
    },
    {
        name: 'UC Berkeley',
        icon: uc_berkeley,
        address: 'Berkeley, CA, USA',
        value: 'Shubh Jain'
    },
    {
        name: 'Vanderbilt University',
        icon: vanderbilt_university,
        address: 'Nashville, TN, USA',
        value: 'Azmain Harun'
    },
    {
        name: 'Carnegie Mellon University in Qatar',
        icon: carnegie_mellon_qatar,
        address: 'Doha, Qatar',
        value: 'Ababiya Darge'
    },
]