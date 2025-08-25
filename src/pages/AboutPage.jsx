const AboutPage = () => {
  return (
     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">About Us</h1>
      <p className="text-lg text-gray-700 max-w-xl text-center">
        We provide reliable insurance solutions to protect your future and give you peace of mind.
      </p>
      <div className="mt-6">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>

  );
};

export default AboutPage;
