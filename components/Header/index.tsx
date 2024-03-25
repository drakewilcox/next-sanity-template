"use client";
// import { MenuDocument } from "@/sanity/types";
import styles from "./navigation.module.scss";
import Link from "next/link";
import { SanityMenuLink } from "@/lib/sanity/types";
import { useCallback } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegFaceRollingEyes } from "react-icons/fa6";
import { PiWaveSawtoothLight } from "react-icons/pi";
import { BsMailboxFlag } from "react-icons/bs";

export function Header({ menuLinks }: { menuLinks?: SanityMenuLink[] }) {
  const icons = {
    Store: RiShoppingCart2Line,
    About: PiWaveSawtoothLight,
    Contact: BsMailboxFlag,
  };

  const RenderIcon: React.FC<{ title: keyof typeof icons | string }> = ({
    title,
  }) => {
    const Icon = icons[title as keyof typeof icons];
    return Icon ? <Icon size="24px" /> : <div />;
  };

  const renderLinks = useCallback(() => {
    return menuLinks?.map((link) => {
      if (link._type === "linkExternal") {
        return (
          <div className={styles.linkContainer} key={link._key}>
            <RenderIcon title={link.title} />
            <a
              className={styles.link}
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
          <div className={styles.linkContainer} key={link._key}>
            <RenderIcon title={link.title} />
            <Link className={styles.link} href={`/${link.slug}`}>
              {link.title}
            </Link>
          </div>
        );
      }

      return null;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuLinks]);

  return (
    <div className={styles.nav}>
      <nav id="name" className={styles.wrapper}>
        <div className={styles.groupLeft}>
          <FaRegFaceRollingEyes className={styles.icon} size="24px" />
          <div className={styles.homeText}>SAFEHOUSE.AUDIO</div>
        </div>
        <div className={styles.groupRight}>{renderLinks()}</div>
      </nav>
    </div>
  );
}
