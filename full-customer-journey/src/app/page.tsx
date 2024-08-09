import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold font-sans my-">
        Full Customer Journey
      </h1>
      <p>
        1-
        <Link href="/signIn" className="text-blue-600 underline">
          Sign In Page
        </Link>
      </p>
    </div>
  );
}
