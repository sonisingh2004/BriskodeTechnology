// @ts-nocheck
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

export default function PageHero({
  title,
  highlight,
  subtitle,
  bgImage,
}) {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center px-6 py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Soft pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.4)_1px,transparent_0)] bg-size-[48px_48px]"></div>
      </div>

      {/* Glow blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-20 -right-20 animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <ScrollAnimationWrapper animation="fade-up">
          <p className="text-blue-500 text-sm font-semibold tracking-[0.3em] uppercase mb-6">
            {subtitle}
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" delay={100}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-white">{title}</span>{" "}
            <span className="text-gradient-blue">{highlight}</span>
          </h1>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
