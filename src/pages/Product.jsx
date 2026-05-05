import { useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { products } from '../data/productData';

export default function Product() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = useMemo(
    () => products.find((item) => item.slug === slug),
    [slug]
  );

  const demoLinks = {
    'hrms': 'https://nebolla.com/',
    'hotel-management': 'https://hotel232.netlify.app/',
    'gym-management': 'https://gym07.netlify.app/',
    'billing-system': 'https://unisexsalonn.netlify.app/',
    'waste-management-govt-n-a-c': 'https://amabuguda.com/',
    'real-state-erp': 'https://coxworld.org/',
    'truck-association':'https://truck-association-hub.vercel.app/login',
  };

  const demoLink = demoLinks[slug] || '/contact';

  if (!product) {
    return (
      <div className="bg-[#00061A] min-h-screen text-white flex flex-col items-center justify-center px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">Product not found</h1>
        <p className="text-gray-400 mb-8">We could not find the product page you were looking for.</p>
        <button
          onClick={() => navigate('/services')}
          className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
        >
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#00061A] text-white">
      <section className="max-w-7xl mx-auto px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.8fr] items-center">
          <div>
            <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4">
              Product Details
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {product.title}
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
              {product.subtitle}
            </p>
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed">{product.description}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {product.bullets.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              {demoLink.startsWith('http') ? (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Request Demo
              </a>
            ) : (
              <Link
                to={demoLink}
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Request Demo
              </Link>
            )}
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View All Services
              </Link>
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-black/30">
            <h2 className="text-xl font-semibold text-white mb-5">Key Features</h2>
            <div className="space-y-4">
              {product.features.map((feature) => (
                <div key={feature} className="rounded-3xl bg-white/5 p-4">
                  <p className="text-white">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-4xl border border-white/10 bg-white/5 p-10">
            <h3 className="text-2xl font-bold text-white mb-4">About {product.title}</h3>
            <p className="text-gray-300 leading-relaxed">
              {product.description} This solution is built to help organizations simplify workflows, reduce manual processes, and deliver measurable business value.
            </p>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/5 p-10">
            <h3 className="text-2xl font-bold text-white mb-4">Why choose {product.title}?</h3>
            <ul className="space-y-3 text-gray-300">
              {product.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
