import { ArrowUpRight, Code2 } from "lucide-react";

export const ProjectCard = ({
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
  year,
  index,
  accent,
  image,
}) => {
  const paddedIndex = String(index).padStart(2, "0");

  return (
    <article className="h-full">
      <div className="project-card-inner glass rounded-2xl overflow-hidden h-full flex flex-col border border-border">
        <div className="project-card-visual relative overflow-hidden h-56 md:h-72 lg:h-80"
          style={
            image
              ? {
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }
              : undefined
          }
        >
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 20%, ${accent} 0%, transparent 50%), radial-gradient(circle at 80% 80%, color-mix(in srgb, ${accent} 60%, transparent) 0%, transparent 45%)`,
            }}
          />

          <span className="absolute top-4 left-4 text-5xl font-bold text-foreground/5 select-none">
            {paddedIndex}
          </span>
          <span className="absolute top-4 right-4 rounded-full border border-border/80 bg-background/100 px-2.5 py-1 text-xs text-muted-foreground backdrop-blur-sm">
            {year}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-xs text-foreground/80"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                Live demo
                <ArrowUpRight size={14} />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"
              >
                <Code2 size={14} />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
