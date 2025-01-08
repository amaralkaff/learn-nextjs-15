import Link from "next/link";

const AboutPage = () => {
    return (
      <section className="w-full min-h-screen flex flex-col items-center justify-center">
       <Link
        href="/"
        className="underline text-blue-400 hover:text-blue-600 underline-offset-4 transition-colors duration-300"
      >
        Back to Home
      </Link>
      </section>
    );
  };
  
  export default AboutPage;