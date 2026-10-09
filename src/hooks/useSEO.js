import { useEffect } from "react";
import { siteData } from "../data/siteData";

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

/**
 * Sets document title, description and Open Graph tags for the current page.
 * Title format: "<Name> | <Page>"
 */
export default function useSEO({ page, description, image }) {
  useEffect(() => {
    const { name, shortBio, profileImage } = siteData.personal;
    const title = `${name} | ${page || "Portfolio"}`;
    const desc = description || shortBio;
    const img = image || profileImage;

    document.title = title;
    setMeta("name", "description", desc);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:type", "website");
    if (img) setMeta("property", "og:image", img);
  }, [page, description, image]);
}
