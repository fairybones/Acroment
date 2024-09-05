const callouts = [
    {
      name: "Trading Cards",
      description: "trading card accessories",
      imageSrc: "https://placehold.co/400",
      imageAlt: "slabs and sleeves for protecting trading cards",
      href: "#",
    },
    {
      name: "Grading Cards",
      description: "grading supplies",
      imageSrc: "https://placehold.co/400",
      imageAlt: "professional labels and slabs for graded cards",
      href: "#",
    },
    {
      name: "Action Figures",
      description:
        "display cases for prized possessions",
      imageSrc: "https://placehold.co/400",
      imageAlt: "professional labels and slabs for graded cards",
      href: "#",
    },
    {
      name: "Comics & More",
      description: "display cases for comics and books",
      imageSrc: "https://placehold.co/400",
      imageAlt: "professional labels and slabs for graded cards",
      href: "#",
    },
  ];
  export default function Home() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Shop By Category</h2>
  
            {/* <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"> */}
            <div className="mt-6 grid gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 font-semibold text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }