import Image from "next/image";

export default function ReactFacts() {
  return (
    <div className="flex flex-col items-center justify-center bg-cyan-900">
      <div className="flex flex-col w-full justify-center items-center gap-2.5 py-15 bg-cyan-950">
        <Image
          src="/next.svg"
          width={100}
          height={20}
          alt="React Logo"
          className="shadow-amber-50"
        />
        <h1 className="font-bold font-mono text-white">Next.js Facts</h1>
      </div>
      <div className="flex justify-center items-center w-full pt-8 ">
        <ul className="text-white">
          <li>It is Interesting</li>
          <li>It is Interesting</li>
          <li>It is Interesting</li>
          <li>It is Interesting</li>
          <li>It is Interesting</li>
          <li>It is Interesting</li>
          <li>It is Interesting</li>
        </ul>
      </div>
    </div>
  );
}
