
import ball from "../assets/Images/ball.jpg";
import roller from "../assets/Images/roller.jpg";
import needle from "../assets/Images/needle.jpg";
import thrust from "../assets/Images/thrust.jpg";
import angular from "../assets/Images/angular.jpg";
import spherical from "../assets/Images/spherical.jpg";
import mounted from "../assets/Images/mounted.jpg";
import custom from "../assets/Images/custom.jpg";

const products = [
  { name: "Ball Bearings", image: ball, badge: "New" },
  { name: "Roller Bearings", image: roller, badge: "New" },
  { name: "Needle Bearings", image: needle },
  { name: "Thrust Bearings", image: thrust },
  { name: "Angular Contact Bearings", image: angular },
  { name: "Spherical Bearings", image: spherical },
  { name: "Mounted Bearings", image: mounted },
  { name: "Custom Bearings", image: custom },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {products.map((p, i) => (
          <div
            key={i}
            className="relative border rounded shadow hover:shadow-xl hover:scale-105 transition transform duration-300"
          >
            {/* Optional badge */}
            {p.badge && (
              <span className="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 text-sm rounded">
                {p.badge}
              </span>
            )}

            <img
              src={p.image}
              alt={p.name}
              className="w-full h-64 object-cover rounded-t"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{p.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
