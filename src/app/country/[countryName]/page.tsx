import { getCountryBorders, getCountryByName } from "@/actions/actions";
import { MaxWidth } from "@/components/max-width";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
interface CountryNameProps {
  params: {
    countryName: string;
  };
}
const CountryName = async ({ params }: CountryNameProps) => {
  const data = (await getCountryByName(params.countryName))[0] as Country;
  const borders = await getCountryBorders(data.borders);

  return (
    <main className="py-12 px-3">
      <MaxWidth>
        <Link
          href="/"
          className="bg-text flex gap-2 sm:items-center justify-center shadow-md w-fit px-10 py-2 rounded-md"
        >
          <BsArrowLeft size={18} />
          Back
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-12">
          <div className="w-full sm:w-1/2 lg:w-[42%]">
            <Image
              src={data.flags.svg}
              alt="flag"
              width={300}
              height={200}
              objectFit="contain"
              className="w-full max-h-[400px] "
            />
          </div>
          <div className="flex-1 max-w-[600px]">
            <div className="">
              <h1 className="font-extrabold text-lg mb-4">
                {data.name.official}
              </h1>
              <div className="grid gap-16  md:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <p>
                    <span className="font-semibold">Native Name: </span>
                    {data.name.common}
                  </p>
                  <p>
                    <span className="font-semibold">Population: </span>
                    {data.population.toLocaleString("en-US")}
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>
                    {data.region}
                  </p>
                  <p>
                    <span className="font-semibold">Sub Region: </span>
                    {data.subregion}
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>
                    {data.capital}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <p>
                    <span className="font-semibold">Top Level Domain: </span>
                    {data.tld}
                  </p>
                  <p>
                    <span className="font-semibold">Currencies: </span>
                    {Object.values(data.currencies).map(
                      (currency) => currency.name
                    )}
                  </p>
                  <p>
                    <span className="font-semibold">Languages: </span>
                    {Object.values(data.languages).map(
                      (language, index) =>
                        language +
                        (index < Object.values(data.languages).length - 1
                          ? ", "
                          : "")
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-lg mt-8">Border Countries:</h2>
              <div className="flex gap-2 mt-4 flex-wrap">
                {borders.map((border: any) => (
                  <Link
                    href={`/country/${border.name.official}`}
                    key={border.name.official}
                    className="bg-text shadow-md px-4 py-2 rounded-md"
                  >
                    {border.name.official}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
    </main>
  );
};

export default CountryName;
