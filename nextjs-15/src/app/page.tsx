import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <Link
        href="/about"
        className="underline text-blue-400 hover:text-blue-600 underline-offset-4 transition-colors duration-300"
      >
        About
      </Link>
    </div>
  );
}
