
import type { IconType } from "react-icons";

export interface Statistic {
    name: string
    value: number
    icon: IconType
    color: string
    href: string
}
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuMusic2, LuInstagram, LuYoutube, LuLinkedin } from "react-icons/lu";

export const statistics: Statistic[] = [
  { 
    name: "Instagram", 
    value: 160000, 
    icon: LuInstagram,
    color: "#ff00a6" ,
    href: "https://www.instagram.com/quasarandco/"
  },
  { 
    name: "Telegram", 
    value: 10600, 
    icon: IoChatbubbleOutline,
    color: "#006eff",
    href: "https://t.me/quasarandco"
  },
  { 
    name: "LinkedIn", 
    value: 5000, 
    icon: LuLinkedin,
    color: "#0033ff",
    href: "https://www.linkedin.com/company/quasar-and-co/"
  },
  { 
    name: "TikTok", 
    value: 4000, 
    icon: LuMusic2,
    color: "#009dff" ,
    href: "https://www.tiktok.com/@quasarandco"
  },
  { 
    name: "YouTube", 
    value: 2500, 
    icon: LuYoutube,
    color: "#ff0008",
    href: "https://www.youtube.com/@quasarandco"
  },
];

export function formatNumber(value: number): string {
  if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B+";
  }
  if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M+";
  }
  if (value >= 1_000) {
    return (value / 1_000).toFixed(1).replace(/\.0$/, "") + "K+";
  }
  return value.toString();
}
