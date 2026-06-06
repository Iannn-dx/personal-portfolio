import { Button } from "@/components/Button";
import { ProfileCard } from "@/components/ProfileCard";
import { MapPin } from "lucide-react";

export const Home = () => {

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <div className="space-y-5 animate-fade-in">
            <p className="text-muted-foreground">Hello, I&apos;m</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary uppercase">
              Ian Khristopher Teves
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} />
              <span>Peñablanca, Cagayan, Philippines</span>
            </div>

            <p className="text-xl font-medium text-foreground">
              Aspiring Web Developer
            </p>

            <p className="text-muted-foreground max-w-sm">
              Passionate about building responsive and user-friendly web applications
              using Laravel, PHP, MySQL, JavaScript, and modern web technologies.
              I enjoy turning ideas into functional digital solutions while
              continuously improving my development skills.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a href="#projects">
                <Button>View Projects</Button>
              </a>
              <Button variant="outline" size="sm">
                Download CV
              </Button>
            </div>
          </div>

          <div className="animate-fade-in pb-8" style={{ animationDelay: "0.15s" }}>
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
};
