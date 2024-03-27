"use client";
import { CountryList } from "@/components/country-list";
import { Filter } from "@/components/filter";
import { MaxWidth } from "@/components/max-width";
import { Search } from "@/components/search";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Home() {
  const params = useSearchParams();
  return (
    <main className="py-4">
      <MaxWidth>
        <div className="flex flex-col md:flex-row gap-y-5  justify-between md:items-center my-12">
          <Suspense>
            <Search />
            <Filter />
          </Suspense>
        </div>
        <Suspense
          fallback={
            <div className="flex justify-center items-center mt-24">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-background-secondary"></div>
            </div>
          }
        >
          <CountryList
            search={params.get("search")}
            filter={params.get("filter")}
          />
        </Suspense>
      </MaxWidth>
    </main>
  );
}
