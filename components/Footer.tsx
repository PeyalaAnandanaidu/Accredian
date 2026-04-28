import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  const socials = [
    { label: "Facebook", href: "https://www.facebook.com/accredianlearn", Icon: FaFacebookF },
    { label: "LinkedIn", href: "https://www.linkedin.com/school/accredianedu/", Icon: FaLinkedinIn },
    { label: "X", href: "https://x.com/accredianedu", Icon: FaXTwitter },
    { label: "Instagram", href: "https://www.instagram.com/accredian_edu", Icon: FaInstagram },
    { label: "YouTube", href: "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA", Icon: FaYoutube },
  ];

  // ✅ Move this OUTSIDE JSX (but inside component)
  const accredianLinks = [
    { name: "About", href: "https://accredian.com/why-accredian" },
    { name: "Blog", href: "https://blog.accredian.com" },
    { name: "Why Accredian", href: "https://accredian.com/why-accredian" },
  ];

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP AREA */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pt-14 pb-8">
          {/* LEFT: Logo + social */}
          <div>
            <div className="mb-4">
              <div className="text-[32px] font-extrabold leading-none text-[#1a6fe4]">
                accredian
              </div>
              <div className="text-[11px] text-gray-400 tracking-wide mt-1">
                credentials that matter
              </div>
            </div>

            <div className="flex items-center gap-5 mt-5">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-700 hover:text-[#1a6fe4] transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Enquire */}
          <div className="md:text-right">
            <a
              href="#home"
              className="inline-block bg-[#1a6fe4] text-white font-semibold text-[16px] px-8 py-4 rounded-xl shadow-md hover:bg-[#0f4ea8] transition-colors"
            >
              Enquire Now
            </a>
            <p className="text-sm text-gray-700 mt-4">Speak with our Advisor</p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-gray-200" />

        {/* MIDDLE LINKS AREA (3 columns like reference) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
          {/* Column 1 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5 text-lg">Accredian</h4>
            <ul className="space-y-4">
              {accredianLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 hover:text-[#1a6fe4] transition-colors text-[16px]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5 text-lg">Contact Us</h4>
            <p className="text-gray-800 text-[16px] mb-4">
              Email us:{" "}
              <a
                href="mailto:enterprise@accredian.com"
                className="text-[#1a6fe4] font-medium hover:underline"
              >
                enterprise@accredian.com
              </a>
            </p>

            <p className="text-gray-800 text-[16px] leading-relaxed">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana
            </p>
          </div>

          {/* Column 3 spacer */}
          <div className="hidden md:block" />
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-gray-200" />

        {/* BOTTOM */}
        <div className="py-6 text-center text-[16px] text-gray-700">
          © {new Date().getFullYear()} Accredian A Brand of FullStack Education
          Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}