"use client";
import { MenuDocument } from "@/sanity/types";
import styles from "./navigation.module.scss";
import Link from "next/link";

export function Header({ menuData }: { menuData: MenuDocument }) {
  console.log("TEST", menuData.items);
  return (
    <div className={styles.nav}>
      <nav id="name" className={styles.wrapper}>
        {menuData.items.map((item) => (
          <div className={styles.navLink} key={item.title}>
            {item.title}
          </div>
        ))}
      </nav>
    </div>
  );
}
