"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import styles from "../styles/toggle.module.css";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const checked = resolvedTheme === "dark";

  return (
    <div className={`${styles.toggleWrapper} scale-50`}>
      <input
        id="dn"
        type="checkbox"
        className={styles.input}
        style={{display: "none"}}
        checked={checked}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />

      <label htmlFor="dn" className={styles.toggle}>
        <span className={styles.toggle__handler}>
          <span className={`${styles.crater} ${styles["crater--1"]}`} />
          <span className={`${styles.crater} ${styles["crater--2"]}`} />
          <span className={`${styles.crater} ${styles["crater--3"]}`} />
        </span>

        <span className={`${styles.star} ${styles["star--1"]}`} />
        <span className={`${styles.star} ${styles["star--2"]}`} />
        <span className={`${styles.star} ${styles["star--3"]}`} />
        <span className={`${styles.star} ${styles["star--4"]}`} />
        <span className={`${styles.star} ${styles["star--5"]}`} />
        <span className={`${styles.star} ${styles["star--6"]}`} />
      </label>
    </div>
  );
}