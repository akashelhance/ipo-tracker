import Link from "next/link";

const products = [
  {
    name: "CardRecommend",
    seoDescription:
      "Compare and choose the best credit cards in India based on rewards, lifestyle, travel, and cashback benefits.",
    url: "https://cardrecommend.com",
    icon: "💳",
    category: "Finance",
    active: true,
    current: false,
  },
  {
    name: "Book Recommendation Engine",
    seoDescription:
      "Explore highly recommended books curated by top readers and authors across all genres and languages.",
    url: "https://mostrecommendedbooks.com",
    icon: "📚",
    category: "Reading",
    active: false,
    current: false,
  },
  {
    name: "IPO Tracker India",
    seoDescription:
      "Track all Indian IPOs, view GMP, review DRHPs, and stay ahead with smart investment insights.",
    url: "https://ipoinformer.com",
    icon: "📈",
    category: "Finance",
    active: false,
    current: true,
  },
  {
    name: "All-in-One Calculator Suite",
    seoDescription:
      "Use 100% free online calculators for BMI, SIP, EMI, TDEE, and more across finance, health, and business categories.",
    url: "https://www.allcalcify.com/",
    icon: "🧮",
    category: "Tools",
    active: true,
    current: false,
  },
  {
    name: "Quizverse Kids",
    seoDescription:
      "Engage kids with culturally rich quizzes about Hindu temples, gods, and festivals in a fun and educational format.",
    url: "https://quizverse.app",
    icon: "🧠",
    category: "Education",
    active: false,
    current: false,
  },
  {
    name: "Tota Math App",
    seoDescription:
      "A math learning app for kids aged 5–10 featuring a talking parrot mascot, colorful design, and quiz-based play.",
    url: "https://totamath.app",
    icon: "🧮",
    category: "Education",
    active: false,
    current: false,
  },
  {
    name: "Science Facts App",
    seoDescription:
      "Learn cool science facts and trivia through short, fun, and engaging content built for young curious minds.",
    url: "https://scienceforkids.app",
    icon: "🔬",
    category: "Education",
    active: false,
    current: false,
  },
  {
    name: "Slam Book Creator",
    seoDescription:
      "Make personalized digital slam books and share them online with friends and loved ones — fun and nostalgic!",
    url: "https://slamverse.app",
    icon: "📖",
    category: "Fun",
    active: false,
    current: false,
  },
  {
    name: "Festival Greeting Generator",
    seoDescription:
      "Create animated, custom festival greetings for Independence Day, Diwali, Holi, Raksha Bandhan and more — share via WhatsApp or social media.",
    url: "https://indifestivalgreetings.com",
    icon: "🎉",
    category: "Tools",
    active: false,
    current: false,
  },
  {
    name: "Sblossom",
    seoDescription:
      "Personalized handcrafted gifts including nameplates, fridge magnets, wall art, wood prints, and laser-cut anniversary items.",
    url: "https://sblossom.com",
    icon: "🎁",
    category: "Gifting",
    active: true,
    current: false,
  },
  {
    name: "WebPitchers",
    seoDescription:
      "A full-service digital agency offering web development, app creation, and digital marketing services to grow your brand online.",
    url: "https://webpitchers.com",
    icon: "💻",
    category: "Agency",
    active: true,
    current: false,
  },
];

export default function ProductsPage() {
  const filtered = products.filter((p) => p.active && !p.current);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-blue-100 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-800 mb-4">
          🚀 Explore Our Smart Products
        </h1>
        <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
          Discover a growing collection of tools and apps built to empower users across domains — from finance and education to lifestyle and digital productivity.
        </p>
        <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full mb-12">
          All crafted with love ❤️
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filtered.map((product, index) => (
          <Link
            key={product.name}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group animate-fade-in"
            style={{ animationDelay: `${index * 50}ms`, animationFillMode: "both" }}
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl">{product.icon}</span>
              <h2 className="text-xl font-semibold text-indigo-800 group-hover:underline">
                {product.name}
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.seoDescription}
            </p>
            <div className="mt-4 inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">
              {product.category}
            </div>
          </Link>
        ))}
      </div>

     
    </div>
  );
}