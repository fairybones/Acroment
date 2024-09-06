const products = [
  {
    name: "5pk Slabs",
    description: "five of our best selling trading card slabs",
    imageSrc: "https://placehold.co/400",
    imageAlt: "slabs and sleeves for protecting trading cards",
    href: "#",
  },
  {
    name: "10pk Slabs",
    description: "ten of our best selling trading card slabs",
    imageSrc: "https://placehold.co/400",
    imageAlt: "slabs and sleeves for protecting trading cards",
    href: "#",
  },
];

function ShopAll() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Shop All</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {products.map((product) => (
              <div key={product.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 font-semibold text-gray-500">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-900">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopAll;
