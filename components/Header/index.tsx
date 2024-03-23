"use client";
// import { MenuDocument } from "@/sanity/types";
import styles from "./navigation.module.scss";
import Link from "next/link";
import { SanityMenuLink } from "@/lib/sanity/types";
import { useCallback } from "react";

export function Header({ menuLinks }: { menuLinks?: SanityMenuLink[] }) {
  console.log(menuLinks);
  const renderLinks = useCallback(() => {
    return menuLinks?.map((link) => {
      if (link._type === "linkExternal") {
        return (
          <div key={link._key}>
            <a
              className={styles.navLink}
              href={link.url}
              rel="noreferrer"
              target={link.newWindow ? "_blank" : "_self"}
            >
              {link.title}
            </a>
          </div>
        );
      }
      if (link._type === "linkInternal") {
        if (!link.slug) {
          return null;
        }

        return (
          <div key={link._key}>
            <Link className={styles.navLink} href={`/${link.slug}`}>
              {link.title}
            </Link>
          </div>
        );
      }

      return null;
    });
  }, [menuLinks]);

  return (
    <div className={styles.nav}>
      <nav id="name" className={styles.wrapper}>
        {renderLinks()}
      </nav>
    </div>
  );
}
