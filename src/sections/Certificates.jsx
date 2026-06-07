import { Award, GraduationCap, Medal } from "lucide-react";

const certificateGroups = [
  {
    category: "Academics",
    icon: GraduationCap,
    items: [
      {
        title: "Academic Distinction",
        subtitle: "Cagayan State University",
        year: "2026",
      },
      {
        title: "Academic Awardee",
        subtitle: "Cagayan State University",
        year: "2026",
      },
      {
        title: "Best Capstone Project",
        subtitle: "Cagayan State University",
        year: "2026",
      },
    ],
  },
  {
    category: "Proficiency",
    icon: Medal,
    items: [
      {
        title: "Proficiency in VB.Net Programming",
        subtitle: "Cagayan State University",
        year: "2026",
      },
    ],
  },
  {
    category: "Awards",
    icon: Award,
    items: [
      {
        title: "Certificate of Commendation — Recognition for developing the OCD II Daily Report and Duty Checklist System during internship.",
        subtitle: "Office of Civil Defense Region II",
        year: "2026",
      },
      {
        title: "Certificate of Commendation — For outstanding performance during internship/OJT",
        subtitle: "Office of Civil Defense Region II",
        year: "2026",
      },
      {
        title: "Certificate of Completion – Disaster Risk Reduction and Management (DRRM) Course for the BasicSector (Youth)",
        subtitle: "Office of Civil Defense Region II",
        year: "2026",
      },
    ],
  },
];

const CertificateGroup = ({ category, icon: Icon, items, delay }) => (
  <div
    className="certificate-group glass rounded-2xl p-6 md:p-7 animate-fade-in"
    style={{ animationDelay: delay }}
  >
    <div className="flex items-center gap-3 mb-6">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon size={16} strokeWidth={2} />
      </span>
      <h3 className="text-sm font-medium uppercase tracking-wider text-primary">
        {category}
      </h3>
    </div>

    <ul className="space-y-5">
      {items.map((item) => (
        <li
          key={`${category}-${item.title}`}
          className="certificate-item group border-l border-border pl-4 transition-colors duration-200 hover:border-primary/50"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground/90 leading-snug">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {item.subtitle}
              </p>
            </div>
            <span className="shrink-0 text-xs text-muted-foreground tabular-nums pt-0.5">
              {item.year}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export const Certificates = () => {
  return (
    <section id="certificates" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 md:mb-16 animate-fade-in">
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-3">
              03 — Certificates
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Credentials & recognition
              </h2>
              <p className="text-sm text-muted-foreground max-w-sm md:text-right">
                Academic records, skill certifications, and awards earned along the way.
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certificateGroups.map((group, i) => (
              <CertificateGroup
                key={group.category}
                {...group}
                delay={`${i * 0.08}s`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
