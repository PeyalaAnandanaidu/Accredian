import { Monitor, X, GraduationCap, Briefcase } from "lucide-react";

interface Audience {
  icon: React.ElementType;
  title: string;
  description: string;
}

const audiences: Audience[] = [
  { icon: Monitor, title: "Tech Professionals", description: "Enhance expertise, embrace tech, drive innovation." },
  { icon: X, title: "Non-Tech Professionals", description: "Adapt digitally, collaborate in tech environments." },
  { icon: GraduationCap, title: "Emerging Professionals", description: "Develop powerful skills for rapid career growth." },
  { icon: Briefcase, title: "Senior Professionals", description: "Strengthen leadership, enhance strategic decisions." },
];

export default function WhoShouldJoin() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl p-8 md:p-12 overflow-hidden"
          style={{ backgroundColor: "#1a6fe4" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* LEFT */}
            <div className="text-white">
              <p className="text-blue-200 text-sm font-medium mb-2">
                Who Should Join?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Strategic Skill Enhancement
              </h2>
              <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=350&fit=crop&crop=faces"
                  alt="Professionals"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>

            {/* RIGHT: 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {audiences.map((audience) => {
                const Icon = audience.icon;
                return (
                  <div key={audience.title} className="text-white">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                      style={{ border: "2px solid rgba(255,255,255,0.4)" }}
                    >
                      <Icon size={22} color="white" />
                    </div>
                    <h3 className="font-bold text-base mb-1">{audience.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}