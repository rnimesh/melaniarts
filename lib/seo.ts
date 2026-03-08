import type { Metadata } from "next";

const FALLBACK_SITE_URL = "https://melaniarts.lk";

export const siteConfig = {
  name: "MelaniArts",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL,
  description:
    "MelaniArts offers premium printing and signage services in Sri Lanka, including name boards, number plates, vehicle stickers, digital printing, mug printing, and awards.",
  phone: "+94 71 740 2537",
  phoneRaw: "+94717402537",
  email: "melani.arts@gmail.com",
  address: "No 33 Tissa Road, Hambantota, Sri Lanka",
  serviceAreas: ["Hambantota", "Colombo", "Sri Lanka"],
  ogImage: "/logo-full.png",
} as const;

export function getCanonicalUrl(path = "/"): string {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: getCanonicalUrl(path),
      siteName: siteConfig.name,
      locale: "en_LK",
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "MelaniArts printing and signage",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
