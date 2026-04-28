import { FileText, Settings, Wrench } from "lucide-react";

interface CATStep {
  icon: React.ElementType;
  title: string;
  description: string;
}

const catSteps: CATStep[] = [
  { icon: FileText, title: "Concept", description: "Foundational knowledge for deep subject understanding." },
  { icon: Settings, title: "Application", description: "Practical implementation through real-world scenarios." },
  { icon: Wrench, title: "Tools", description: "Resources and techniques for effective skill mastery." },
];

export default function CATFramework() {
  return (
    <section
      className="py-16"
      style={{ background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            The <span className="text-[#1a6fe4]">CAT Framework</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Our Proven Approach to{" "}
            <span className="text-[#1a6fe4] font-medium">Learning Excellence</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {catSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex flex-col items-center text-center">
                {/* CIRCLE */}
                <div
                  className="w-44 h-44 rounded-full flex flex-col items-center justify-center shadow-lg mb-6"
                  style={{ border: "4px solid #1a6fe4", backgroundColor: "white" }}
                >
                  <Icon size={36} color="#1a6fe4" className="mb-2" />
                  <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm max-w-[200px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}