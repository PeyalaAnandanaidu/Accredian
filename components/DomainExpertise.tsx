import { Lightbulb, Brain, Users, BarChart2, Settings, Globe, CreditCard } from "lucide-react";

interface Domain {
  icon: React.ElementType;
  title: string;
}

const domains: Domain[] = [
  { icon: Lightbulb, title: "Product & Innovation Hub" },
  { icon: Brain, title: "Gen-AI Mastery" },
  { icon: Users, title: "Leadership Elevation" },
  { icon: BarChart2, title: "Tech & Data Insights" },
  { icon: Settings, title: "Operations Excellence" },
  { icon: Globe, title: "Digital Enterprise" },
  { icon: CreditCard, title: "Fintech Innovation Lab" },
];

function DomainCard({ icon: Icon, title }: Domain) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer group bg-white">
      <Icon
        size={40}
        className="text-[#1a6fe4] transition-transform duration-300 group-hover:scale-110"
      />
      <p className="font-semibold text-gray-800 text-center text-sm">{title}</p>
    </div>
  );
}

export default function DomainExpertise() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our <span className="text-[#1a6fe4]">Domain Expertise</span>
          </h2>
          <p className="text-gray-500 text-lg">
            <span className="text-[#1a6fe4] font-medium">Specialized Programs</span>{" "}
            Designed to Fuel Innovation
          </p>
        </div>

        {/* 3x2 grid for first 6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {domains.slice(0, 6).map((domain) => (
            <DomainCard key={domain.title} {...domain} />
          ))}
        </div>

        {/* 7th centered */}
        <div className="flex justify-center mt-6">
          <div className="w-full sm:w-1/2 lg:w-1/3 max-w-xs">
            <DomainCard {...domains[6]} />
          </div>
        </div>
      </div>
    </section>
  );
}