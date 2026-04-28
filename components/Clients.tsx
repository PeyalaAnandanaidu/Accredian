// components/Clients.tsx
interface Client {
  name: string;
  logoUrl: string;
  width: number;
  height: number;
}

const clients: Client[] = [
  {
    name: "Reliance Industries Limited",
    logoUrl: "https://1000logos.net/wp-content/uploads/2021/09/Reliance-Industries-Limited-Logo.png",
    width: 90,
    height: 60,
  },
  {
    name: "HCL Technologies",
    logoUrl: "https://download.logo.wine/logo/HCL_Technologies/HCL_Technologies-Logo.wine.png",
    width: 90,
    height: 40,
  },
  {
    name: "IBM",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJbxuh5HLL3yL8aWqeRbOKzD6u6nriF5CWQ&s",
    width: 90,
    height: 36,
  },
  {
    name: "CRIF",
    logoUrl: "https://searchvectorlogo.com/wp-content/uploads/2023/05/crif-spa-logo-vector.png",
    width: 100,
    height: 44,
  },
  {
    name: "ADP",
    logoUrl: "https://1000logos.net/wp-content/uploads/2021/04/ADP-logo.png",
    width: 90,
    height: 44,
  },
  {
    name: "Bayer",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Logo_Bayer.svg/1280px-Logo_Bayer.svg.png",
    width: 70,
    height: 70,
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Proven <span className="text-[#1a6fe4]">Partnerships</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Successful Collaborations With the{" "}
            <span className="text-[#1a6fe4] font-medium">Industry&apos;s Best</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-y-8 gap-x-4 px-4 md:px-8">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center"
            >
              <img
                src={client.logoUrl}
                alt={client.name}
                width={client.width}
                height={client.height}
                className="object-contain"
                // REMOVED: onError handler
                // Server Components cannot have event handlers like onError, onClick, etc.
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}