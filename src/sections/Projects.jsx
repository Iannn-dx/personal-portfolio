import { ProjectCard } from "@/components/ProjectCard";
import membershipScreenshot from "@/assets/admin-dashboard.jpg";
import ocdScreenshot from "@/assets/ocd-dashboard.png";

const projects = [
  {
    title: "Membership Profiling and Payment Tracking System",
    description:
      "A full-stack gym management system where owners can manage memberships, payments, promos, and discounts, while members can book trainers, renew plans, and update their membership through their account.",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2025",
    accent: "#FF2D20",
    image: membershipScreenshot,
  },
  {
    title: "OCD II Daily Administrative and Operational Report and Duty Checklist System",
    description:
      "A web-based system for OCD II that manages daily administrative and operational reports and duty checklists. It allows staff to submit, track, and review reports, ensuring tasks are completed, monitored, and properly documented in an organized and efficient way.",
    tags: ["PHP", "MySQL", "Bootstrap", "Javascript"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2025",
    image: ocdScreenshot,
    accent: "#06B6D4",
  },
];

export const Projects = () => {

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 md:mb-16 animate-fade-in">
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-3">
              02 — Projects
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Selected work & builds
              </h2>
              <p className="text-sm text-muted-foreground max-w-sm md:text-right">
                A few projects that reflect how I design, build, and ship web applications.
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="animate-fade-in"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <ProjectCard {...project} index={i + 1} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
