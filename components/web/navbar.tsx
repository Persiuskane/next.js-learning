import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { LightTheme, ThemeToggle } from "./theme-toggle";

export default function NavBar() {
  return (
    <nav
      className="flex justify-between items-center w-full flex-col sm:flex-row"
      p-2
    >
      <div className="pl-2 pt-2 pb-2">
        <Link href="/">
          <Image
            src="/next.svg"
            alt="next logo"
            width={100}
            height={20}
            className="dark:invert"
          />
        </Link>
      </div>
      <div className="flex pt-2 pb-2 gap-2">
        <Link className={buttonVariants({ variant: "ghost" })} href="/">
          Home
        </Link>
        <Link className={buttonVariants({ variant: "ghost" })} href="/about">
          About
        </Link>
        <Link
          className={buttonVariants({ variant: "ghost" })}
          href="/next-facts"
        >
          Next Facts
        </Link>
      </div>
      <div className="flex pt-2 pb-2 gap-2">
        <Link className={buttonVariants()} href="/auth/sign-up">
          Sign Up
        </Link>
        <Link
          className={buttonVariants({ variant: "secondary" })}
          href="/auth/login"
        >
          Login
        </Link>
        <ThemeToggle />
        <LightTheme />
      </div>
    </nav>
  );
}
