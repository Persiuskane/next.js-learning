import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav
      className="flex justify-between items-center w-full flex-col sm:flex-row"
      p-2
    >
      <div>
        <Link href="/">
          <Image
            src="/next.svg"
            alt="next logo"
            width={100}
            height={20}
            className="dark:invert sm:pl-1 pt-1 pb-1"
          />
        </Link>
      </div>
      <div>
        <ul className="list-none flex sm:pr-1 pt-1 pb-1 ">
          <li>Home</li>
          <li className="ml-8">Projects</li>
          <li className="ml-8">about</li>
        </ul>
      </div>
    </nav>
  );
}
