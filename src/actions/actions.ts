"use server";
export const getAllCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
};
export const getCountryByName = async (name: string) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  const data = await res.json();
  return data;
};
export const getCountryBorders = async (borders: string[]) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${borders.join(",")}`
  );
  const data = await res.json();
  return data;
};
export const getCountriesByRegion = async (region: string) => {
  const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
  const data = await res.json();
  return data;
};
