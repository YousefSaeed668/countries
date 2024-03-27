import Image from "next/image";
import Link from "next/link";

interface CardProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

export const Card = ({
  name,
  population,
  region,
  capital,
  flag,
}: CardProps) => {
  return (
    <Link
      href={`/country/${name}`}
      className="shadow-sm overflow-hidden rounded-md transition-all hover:scale-[1.005] bg-text"
    >
      <Image
        src={flag}
        alt="country"
        width={300}
        height={170}
        className="h-[170px] w-full"
      />

      <div className="px-6 pb-10">
        <h2 className="font-extrabold text-lg my-4 truncate">{name}</h2>
        <div className="flex flex-col gap-y-1">
          <p className="text-sm">
            <span className="font-semibold">Population: </span>
            <span>{population.toLocaleString("en-US")}</span>
          </p>
          <p className="text-sm">
            <span className="font-semibold">Region: </span>
            <span>{region}</span>
          </p>
          <p className="text-sm">
            <span className="font-semibold">Capital: </span>
            <span>{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
