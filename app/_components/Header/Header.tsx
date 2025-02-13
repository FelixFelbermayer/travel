"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import Image from "next/image";
import MobileNav from "./MobileNav/Mobilenav";
import { LinkType } from "@/app/lib/definitions";

const links: LinkType[] = [
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
      <Image
        src="/Logo1.png"
        width={223}
        height={114}
        alt="Account leaf image"
        className={styles.logoImage}
      />
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
      <MobileNav links={links} />
      <Image
        src="/leaf.png"
        width={1200}
        height={1200}
        alt="Account leaf image"
        className={styles.navImage}
      />
    </div>
  );
};

export default Header;
