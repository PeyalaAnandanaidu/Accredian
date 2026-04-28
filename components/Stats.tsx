interface Stat {
  value: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: "10K+",
    description: "Professionals Trained For Exceptional Career Success",
  },
  {
    value: "200+",
    description: "Sessions Delivered With Unmatched Learning Excellence",
  },
  {
    value: "5K+",
    description: "Active Learners Engaged In Dynamic Courses",
  },
];

function StatCard({ value, description }: Stat) {
  return (
    <div className="flex flex-col items-center text-center py-6 px-4 w-full">
      {/*
        CHANGES:
        - Removed px-8 (was causing the huddle)
        - Added w-full so each card takes equal width
        - py-6 for vertical breathing room
        - px-4 just enough for text breathing room
      */}

      {/* VALUE BADGE */}
      <div
        className="font-bold text-xl px-8 py-3 rounded-full mb-6"
        style={{ backgroundColor: "#dbeafe", color: "#1a6fe4" }}
      >
        {value}
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-700 font-medium text-sm leading-relaxed max-w-[220px]">
        {description}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-16 bg-white">
      {/*
        REMOVED: max-w-7xl + mx-auto + px-4 sm:px-6 lg:px-8
        REASON: These were constraining the width too much.
        We want stats to spread full page width like the real site.
        We add a wider container instead.
      */}
      <div className="w-full max-w-screen-xl mx-auto px-4">

        {/* SECTION HEADER — stays centered */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our <span className="text-[#1a6fe4]">Track Record</span>
          </h2>
          <p className="text-gray-500 text-lg">
            The Numbers Behind{" "}
            <span className="text-[#1a6fe4] font-medium">Our Success</span>
          </p>
        </div>

        {/*
          KEY FIX:
          - justify-between: spreads stats across full width (not center-huddled)
          - Each stat gets equal 1/3 width via w-full on StatCard
          - divide-x puts the vertical gray lines between them
          - No extra px on the row — let the cards fill space naturally
        */}
        <div className="flex flex-col md:flex-row md:justify-between items-center divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-100 rounded-2xl">
          {/*
            border + rounded-2xl: optional subtle container
            matching the real site's faint border around stats
          */}
          {stats.map((stat) => (
            <StatCard key={stat.value} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}