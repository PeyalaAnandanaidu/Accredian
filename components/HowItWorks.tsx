import { BarChart2, Monitor, Play } from "lucide-react";

interface Step {
  number: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

const steps: Step[] = [
  { number: 1, icon: BarChart2, title: "Skill Gap Analysis", description: "Assess team skill gaps and developmental needs." },
  { number: 2, icon: Monitor, title: "Customized Training Plan", description: "Create a tailored roadmap addressing organizational goals." },
  { number: 3, icon: Play, title: "Flexible Program Delivery", description: "Deliver adaptable programs aligned with industry and organizational needs." },
];

function StepCard({ number, icon: Icon, title, description }: Step) {
  return (
    <div
      className="relative rounded-2xl p-8 border-l-4"
      style={{ backgroundColor: "#eff6ff", borderLeftColor: "#1a6fe4" }}
    >
      {/* NUMBER BADGE */}
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow-sm">
        {number}
      </div>

      {/* ICON */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md"
        style={{ backgroundColor: "#1a6fe4" }}
      >
        <Icon size={28} color="white" />
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            How We{" "}
            <span className="text-[#1a6fe4]">Deliver Results</span>{" "}
            That Matter?
          </h2>
          <p className="text-gray-500 text-lg">
            A Structured Three-Step Approach to{" "}
            <span className="text-[#1a6fe4] font-medium">Skill Development</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}