import { useRef, useState } from "react";
import profileImage from "@/assets/teves.JPG";

const MAX_TILT = 10;

export const ProfileCard = () => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    glowX: 50,
    glowY: 50,
    isHovering: false,
  });

  const handlePointerMove = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setTransform({
      rotateX: ((y - centerY) / centerY) * -MAX_TILT,
      rotateY: ((x - centerX) / centerX) * MAX_TILT,
      glowX: (x / rect.width) * 100,
      glowY: (y / rect.height) * 100,
      isHovering: true,
    });
  };

  const handlePointerLeave = () => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      glowX: 50,
      glowY: 50,
      isHovering: false,
    });
  };

  const { rotateX, rotateY, glowX, glowY, isHovering } = transform;
  const imageShiftX = (glowX - 50) * 0.12;
  const imageShiftY = (glowY - 50) * 0.12;

  return (
    <div className="profile-card-scene flex justify-center lg:justify-end">
      <div
        ref={cardRef}
        className="profile-card group relative w-full max-w-xs lg:max-w-sm cursor-pointer select-none"
        style={{ perspective: "1200px" }}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div
          className="profile-card-orbit pointer-events-none absolute -inset-6 rounded-[2rem] border border-dashed border-primary/20"
          aria-hidden="true"
        />

        <div
          className="profile-card-body relative transition-transform duration-300 ease-out will-change-transform"
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              opacity: isHovering ? 1 : 0,
              background: `radial-gradient(600px circle at ${glowX}% ${glowY}%, color-mix(in srgb, var(--color-primary) 45%, transparent), transparent 40%)`,
            }}
            aria-hidden="true"
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/40">
            <div
              className="absolute inset-0 transition-transform duration-300 ease-out"
              style={{
                transform: isHovering
                  ? `scale(1.08) translate(${imageShiftX}%, ${imageShiftY}%)`
                  : "scale(1.02)",
              }}
            >
              <img
                src={profileImage}
                alt="Ian Khristopher Teves"
                className="h-full w-full object-cover object-top"
                draggable={false}
              />
            </div>

            <div
              className="pointer-events-none absolute inset-0 mix-blend-soft-light transition-opacity duration-300"
              style={{
                opacity: isHovering ? 0.35 : 0,
                background: `radial-gradient(circle at ${glowX}% ${glowY}%, white, transparent 55%)`,
              }}
              aria-hidden="true"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            <div className="profile-card-corner profile-card-corner-tl" aria-hidden="true" />
            <div className="profile-card-corner profile-card-corner-tr" aria-hidden="true" />
            <div className="profile-card-corner profile-card-corner-bl" aria-hidden="true" />
            <div className="profile-card-corner profile-card-corner-br" aria-hidden="true" />
          </div>

          <div
            className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2 text-xs font-medium backdrop-blur-md"
            style={{ transform: "translateZ(40px)" }}
          >
            <span className="profile-card-pulse relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to opportunities
          </div>
        </div>
      </div>
    </div>
  );
};
