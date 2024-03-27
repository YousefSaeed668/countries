"use client";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { MdOutlineSearch } from "react-icons/md";
export const Search = () => {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [value] = useDebounce(query, 200);
  const router = useRouter();
  useEffect(() => {
    setQuery(searchParams.get("search") || "");
  }, [searchParams]);
  useEffect(() => {
    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: {
          search: value,
        },
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );
    router.push(url);
  }, [value, router, searchParams]);

  return (
    <div className="relative w-full md:w-1/3 rounded-md shadow-md overflow-hidden">
      <MdOutlineSearch
        className="absolute top-1/2 -translate-y-1/2 left-8 "
        size={24}
      />
      <input
        type="text"
        placeholder="Search For A Country ..."
        onChange={(e) => setQuery(e.target.value)}
        className="w-full py-4 pl-16 outline-none"
        value={query}
      />
    </div>
  );
};
