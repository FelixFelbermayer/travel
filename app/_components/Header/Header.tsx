"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
  { name: "Imprint", href: "/imprint" },
  { name: "Log in", href: "/login" },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className={styles.headerContainer}>
      <nav className={styles.navContainer}>
        {links.map((link) => (
          <Link key={link.name} href={link.href}>
            <p
              className={`${pathname === link.href ? styles.active : ""} ${
                styles.navLink
              }`}
            >
              {link.name}
            </p>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
