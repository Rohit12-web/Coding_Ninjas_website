"use client";

import React from "react";
import dynamic from "next/dynamic";
import SpotlightCard from "./SpotlightCard";

export default function CreditsPage() {
  const contributors = [
    {
      name: "Bhavyan",
      items: ["Home Page", "Contact Page", "Join club component"],
    },
    {
      name: "Rohitash",
      items: [
        "Home page: Fundamental Pathway",
        "Events page: stack component & images",
        "Home page: Sponsors carousel",
      ],
    },
    {
      name: "Aryan Garg",
      items: ["Events Page: Floating Ninja", "Home Page: Grow with CN"],
    },
    {
      name: "Arshia Sharma",
      items: ["Home Page: Meet Our Team component", "Credits page"],
    },
    {
      name: "Samel Dhingra",
      items: ["Events Page: Floating Ninja", "Home Page: Grow with CN"],
    },

    {
      name: "Aryan Singh",
      items: ["Home Page: Ninja Game component"],
    },
    {
      name: "Aryan Balodi",
      items: ["Home Page: Ninja Game component", "The Code component"],
    },
    {
      name: "Khushboo Jain",
      items: ["About Us page"],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white relative">
      {/* Liquid background (client-only) */}

      {/* Heading outside the card and content moved up slightly */}
      <div className="max-w-6xl mt-24 mx-auto px-6 relative z-10">
        <h1 className="text-4xl font-extrabold text-center mb-6 tracking-tight">
          Credits
        </h1>
        <p className="text-center text-white/70 mb-10">
          Thanks to everyone who contributed to the Coding Ninjas Club website.
        </p>

        <div className="bg-white/6 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/10">
          <div className="p-8 md:p-12">
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {contributors.map((c) => (
                <SpotlightCard
                  key={c.name}
                  className="rounded-xl bg-white/4 border border-white/8 p-0 hover:scale-[1.01] transition-transform"
                  spotlightColor="rgba(255, 255, 255, 0.12)"
                >
                  <article
                    className="rounded-xl p-5 bg-gradient-to-br from-white/3 to-white/2"
                    aria-labelledby={`contrib-${c.name.replace(/\s+/g, "-")}`}
                  >
                    <h3
                      id={`contrib-${c.name.replace(/\s+/g, "-")}`}
                      className="font-semibold text-lg"
                    >
                      {c.name}
                    </h3>
                    <ul className="mt-3 list-inside list-disc text-sm text-white/80 space-y-1">
                      {c.items.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>
                  </article>
                </SpotlightCard>
              ))}
            </div>

            {/* Footer / small notes */}
            <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-sm text-white/60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave to blend background */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#0b1020"
          d="M0,40 C360,140 1080,0 1440,80 L1440 120 L0 120 Z"
        />
      </svg>
    </div>
  );
}
