import { getAllCountries, getCountriesByRegion } from "@/actions/actions";
import { Card } from "./card";

export const CountryList = async ({
  search,
  filter,
}: {
  search?: string | null;
  filter?: string | null;
}) => {
  let data;
  if (filter) {
    data = await getCountriesByRegion(filter);
  } else {
    data = await getAllCountries();
  }
  if (search) {
    data = data.filter((country: Country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (
    <div className="grid gap-[4.5rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {data.map((country: Country) => (
        <Card
          name={country.name.official}
          population={country.population}
          region={country.region}
          flag={country.flags.png}
          key={country.name.common}
          capital={country.capital}
        />
      ))}
    </div>
  );
};
