import Navbar from '@/components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Welcome to MotiMate</h1>
          <p className="text-lg text-gray-600 mt-4">
            Your daily source of motivation and inspiration.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Join our community, save your favorite quotes, and stay motivated every day.
          </p>
          <a href="/auth" className="mt-8 bg-blue-500 text-white font-semibold py-3 px-6 rounded-full inline-block hover:bg-blue-600 transition duration-300">
            Get Started
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img src="/motivation-image.png" alt="Motivation" className="rounded-lg shadow-lg" />
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-semibold text-gray-900">Daily Inspiration</h2>
              <p className="text-lg text-gray-600 mt-4">
                MotiMate provides you with a daily dose of inspiration and motivation to help you start your day on the right foot.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-left">
              <h2 className="text-3xl font-semibold text-gray-900">Save Your Favorites</h2>
              <p className="text-lg text-gray-600 mt-4">
                With MotiMate, you can save your favorite quotes and revisit them whenever you need a boost of motivation.
              </p>
            </div>
            <div>
              <img src="/save-favorites.png" alt="Save Favorites" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Join Our Motivated Community</h2>
          <p className="text-lg text-gray-600 mt-4">
            Be a part of our growing community, share your own motivational quotes, and inspire others to achieve greatness.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
