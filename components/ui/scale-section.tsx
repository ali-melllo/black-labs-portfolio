"use client";


const ScaleSection = () => {
  return (
    <div className="w-full py-20 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4">
          Scale with <span className="text-blue-500">NO</span> issues
        </h2>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
          We’ve built hundreds of websites and web applications – from sleek,
          high‑converting landing pages to complex, fully‑featured web apps with
          real‑time data, authentication, and payment integrations. Here’s a
          glimpse of what we’ve achieved along the way.
        </p>
      </div>

      <div
        className="relative mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4"
        style={{ zIndex: 10 }}
      >
        <div className="relative md:scale-95 p-6 rounded-3xl border bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] hover:shadow-xl transition-all duration-200">
          <div
            className="absolute inset-0 rounded-3xl overflow-hidden z-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
              opacity: 0.3,
            }}
          />
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-2">120+</h3>
            <p className="text-muted-foreground text-sm">
              Custom websites and full‑stack applications delivered to happy
              clients across 15+ industries.
            </p>
          </div>
        </div>

        <div className="relative p-6 md:scale-110 md:-translate-y-2 rounded-3xl border bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] hover:shadow-xl transition-all duration-200">
          <div
            className="absolute inset-0 rounded-3xl overflow-hidden z-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
              opacity: 0.3,
            }}
          />
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-2">98%</h3>
            <p className="text-muted-foreground text-sm">
              Average client satisfaction rating based on post‑launch surveys
              and long‑term partnerships that span multiple projects.
            </p>
          </div>
        </div>

        <div className="relative md:scale-95 p-6 rounded-3xl border bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] hover:shadow-xl transition-all duration-200">
          <div
            className="absolute inset-0 rounded-3xl overflow-hidden z-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
              opacity: 0.3,
            }}
          />
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-2">7+</h3>
            <p className="text-muted-foreground text-sm">
              Years of combined experience building performant, accessible, and
              scalable web solutions for startups and enterprises alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScaleSection;