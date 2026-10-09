
import { getActiveSocial } from "../data/siteData";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const SOCIAL_CONFIG = {
  instagram: {
    label: "Instagram",
    Icon: FaInstagram,
    color: "text-[#E4405F]",
  },
  facebook: {
    label: "Facebook",
    Icon: FaFacebook,
    color: "text-[#1877F2]",
  },
  linkedin: {
    label: "LinkedIn",
    Icon: FaLinkedin,
    color: "text-[#0A66C2]",
  },
  youtube: {
    label: "YouTube",
    Icon: FaYoutube,
    color: "text-[#FF0000]",
  },
  tiktok: {
    label: "TikTok",
    Icon: FaTiktok,
    color: "text-[#000000]",
  },
};

export default function SocialLinks({ className = "" }) {
  const links = getActiveSocial();

  if (!links.length) return null;

  return (
    <ul
      className={`flex flex-wrap items-center gap-3 ${className}`}
      aria-label="Social media profiles"
    >
      {links.map(([key, url]) => {
        const normalizedKey = key.toLowerCase().replace(/[^a-z]/g, "");
        const social = SOCIAL_CONFIG[normalizedKey];

        if (!social || !url) return null;

        const { label, Icon, color } = social;

        return (
          <li key={key}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-line bg-white shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:bg-brand-light/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <Icon
                aria-hidden="true"
                className={`h-[18px] w-[18px] ${color} transition-transform duration-200 group-hover:scale-110`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
