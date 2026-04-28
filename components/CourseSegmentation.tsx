interface CourseSegment {
  image: string;
  title: string;
  description: string;
}

const segments: CourseSegment[] = [
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    title: "Program Specific",
    description: "Certificate, Executive, Post Graduate Certificate",
  },
  {
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
    title: "Industry Specific",
    description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
    title: "Topic Specific",
    description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
  },
  {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop",
    title: "Level Specific",
    description: "Senior Leadership, Mid-Career Professionals, Freshers",
  },
];

function SegmentCard({ image, title, description }: CourseSegment) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer group">
      <div className="overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-[#1a6fe4] font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function CourseSegmentation() {
  return (
    <section id="cat" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Tailored <span className="text-[#1a6fe4]">Course Segmentation</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Explore{" "}
            <span className="text-[#1a6fe4] font-medium">Custom-fit Courses</span>{" "}
            Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment) => (
            <SegmentCard key={segment.title} {...segment} />
          ))}
        </div>
      </div>
    </section>
  );
}