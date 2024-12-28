"use client";

import CoverParticles from "@/components/cover-particles";

export default function Challenge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="relative z-10">
        <CoverParticles />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
