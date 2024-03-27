"use client";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useEffect, useState } from "react";

export const Filter = () => {
  const [selectedRegion, setSelectedRegion] = useState("Filter By Region");
  const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleRegionClick = (region: string) => {
    setSelectedRegion(region);
    setIsOpen(false);
  };
  useEffect(() => {
    setSelectedRegion(searchParams.get("filter") || "Filter By Region");
  }, [searchParams]);
  useEffect(() => {
    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: {
          filter:
            selectedRegion === "Filter By Region" || selectedRegion === "All"
              ? null
              : selectedRegion,
        },
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );
    router.push(url);
  }, [router, selectedRegion, searchParams]);
  return (
    <div className="relative bg-text shadow-md min-w-52 max-w-56 ml-auto">
      <button
        className="w-full px-4 py-2 rounded leading-tight flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedRegion}
        <span className="ml-2">&#x25BC;</span>
      </button>
      {isOpen && (
        <ul
          className="absolute bg-text w-full mt-1 rounded shadow-md" // Add shadow for consistency
        >
          {regions.map((region) => (
            <li
              key={region}
              className="px-4 py-2 hover:bg-background-secondary hover:text-white cursor-pointer"
              onClick={() => handleRegionClick(region)}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
