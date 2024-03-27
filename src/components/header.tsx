import Link from "next/link";
import { ThemeSwitch } from "./ThemeSwitch";
import { MaxWidth } from "./max-width";

export const Header = () => {
  return (
    <header className="shadow-sm py-4 bg-text">
      <MaxWidth>
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-base sm:text-lg md:text-xl">
            Where Is The World ?
          </Link>
          <ThemeSwitch />
        </div>
      </MaxWidth>
    </header>
  );
};
