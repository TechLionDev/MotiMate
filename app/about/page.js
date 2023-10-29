import Navbar from '@/components/Navbar';

function About() {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">About MotiMate</h1>
          <p className="text-lg text-gray-600 mt-4">
            Inspiring you to lead a motivated and fulfilled life.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Discover the story behind MotiMate and the team dedicated to spreading positivity.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Our Mission</h2>
          <p className="text-lg text-gray-600 mt-4">
            At MotiMate, our mission is to empower individuals with the motivation and inspiration they need to achieve their goals and lead happier lives.
          </p>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Contact Us</h2>
          <p className="text-lg text-gray-600 mt-4">
            Have questions or feedback? We'd love to hear from you. Contact us at support@motimate.com.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
