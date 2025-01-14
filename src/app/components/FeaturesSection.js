export default function FeaturesSection({ features, dir = "ltr" }) {
    return (
      <section className="py-16 bg-white" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300"
              >
                <svg
                  className="w-12 h-12 text-blue-600 mb-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={feature.icon} />
                </svg>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  