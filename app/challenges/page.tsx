import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function challenges() {
  return (
    <div className="flex flex-col justify-center ">
      <div>
        <h1 className="text-4xl align-middle text-center p-2.5">Challenges</h1>
      </div>
      <br />
      <div className="grid grid-cols-3">
        <Link
          className={buttonVariants({ variant: "ghost", size: "lg" })}
          href="/challenges/stock-tracker"
        >
          Stock Tracker
        </Link>
      </div>
    </div>
  );
}
