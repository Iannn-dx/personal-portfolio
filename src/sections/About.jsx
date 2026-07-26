import { BookOpen, GraduationCap, Lightbulb, RefreshCw, Target, Users } from "lucide-react";

const strengths = [
  { label: "Problem Solving", icon: Lightbulb },
  { label: "Team Collaboration", icon: Users },
  { label: "Adaptability", icon: RefreshCw },
  { label: "Continuous Learning", icon: BookOpen },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", color: "#E34F26" },
      { name: "CSS3", color: "#1572B6" },
      { name: "Bootstrap", color: "#7952B3" },
      { name: "Tailwind", color: "#06B6D4" },
      { name: "JavaScript", color: "#F7DF1E" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", color: "#777BB4" },
      { name: "Laravel", color: "#FF2D20" },
      { name: "Rest API", color: "#2563EB" },
    ],
  },
  {
    title: "Database",
    skills: [{ name: "MySQL", color: "#4479A1" }],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", color: "#f0f2f5" },
      { name: "VS Code", color: "#007ACC" },
      { name: "XAMPP", color: "#FB7A24" },
    ],
  },
];

const BentoCard = ({ className = "", children }) => (
  <div
    className={`about-bento glass rounded-2xl p-6 md:p-7 transition-colors duration-300 hover:border-primary/30 ${className}`}
  >
    {children}
  </div>
);

const SkillPill = ({ name, color }) => (
  <span className="about-skill inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1.5 text-sm text-foreground/90 transition-colors duration-200 hover:border-primary/40 hover:bg-primary/5">
    <span
      className="h-2 w-2 shrink-0 rounded-full"
      style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}66` }}
    />
    {name}
  </span>
);

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 md:mb-16 animate-fade-in">
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-3">
              01 — About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Who I am & what I work with
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-auto">
            <BentoCard className="lg:col-span-4 animate-fade-in">
              <p className="text-xs font-medium uppercase tracking-wider text-primary mb-3">
                About Me
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                I’m an aspiring web developer who builds responsive and easy-to-use web apps. I like turning ideas into simple, clean websites using Laravel, PHP, MySQL, and frontend tools while always learning and improving.
              </p>
            </BentoCard>

            <BentoCard className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.05s" }}>
              <p className="text-xs font-medium uppercase tracking-wider text-primary mb-4">
                Strengths
              </p>
              <ul className="space-y-3">
                {strengths.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="about-strength flex items-center gap-3 rounded-xl px-2 py-2 -mx-2 transition-colors duration-200 hover:bg-primary/5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <span className="text-sm font-medium text-foreground/90">{label}</span>
                  </li>
                ))}
              </ul>
            </BentoCard>

            <BentoCard className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Target size={16} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
                    Career Objective
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To grow as a full-stack web developer, contribute to meaningful
                    projects, and deliver reliable solutions that solve real problems
                    for users and teams.
                  </p>
                </div>
              </div>
            </BentoCard>

            <BentoCard className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={16} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
                    Education
                  </p>
                  <p className="text-sm font-medium text-foreground/90">
                    Bachelor of Science in Information Technology Major in Web Development
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Cagayan State University — 2026 <br />
                    Academic Distinction
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    GWA: 92.13
                  </p>
                </div>
              </div>
            </BentoCard>

            <BentoCard className="lg:col-span-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-xs font-medium uppercase tracking-wider text-primary mb-6">
                Technical Skills
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                      {group.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <SkillPill key={skill.name} {...skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
};
