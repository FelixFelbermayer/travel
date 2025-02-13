import React from "react";
import { Drawer } from "antd";
import { useState } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../header.module.css";
import { LinkType } from "@/app/lib/definitions";

interface MobileNavProps {
  links: LinkType[];
}

const MobileNav: React.FC<MobileNavProps> = ({ links }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.mobileNavContainer}>
      {!open ? (
        <MenuUnfoldOutlined onClick={showDrawer} />
      ) : (
        <MenuFoldOutlined onClick={onClose} />
      )}

      <Drawer
        title="Close Navigation"
        onClose={onClose}
        open={open}
        placement={"left"}
        mask={false}
      >
        <div className={styles.mobileNavInner}>
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              <p
                className={`${pathname === link.href ? styles.active : ""} ${
                  styles.navLink
                }`}
                onClick={onClose}
              >
                {link.name}
              </p>
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default MobileNav;
