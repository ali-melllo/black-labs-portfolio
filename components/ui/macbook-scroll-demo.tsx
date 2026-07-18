import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function MacbookScrollDemo() {
  return (
    <div className="w-full z-30 overflow-hidden absolute left-10 top-24 mr-64">
      <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        showGradient={false}
      />
    </div>
  );
}
