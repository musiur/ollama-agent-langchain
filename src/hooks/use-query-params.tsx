"use client"

import { usePathname, useSearchParams } from "next/navigation";

type QueryParams = Record<string, string | number | boolean>;

export const useQueryParams = <T extends QueryParams>(
  newParams: T
) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updatedSearchParams = new URLSearchParams(searchParams?.toString());

  Object.entries(newParams).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      updatedSearchParams.delete(key);
    } else {
      updatedSearchParams.set(key, String(value));
    }
  });

  const search = updatedSearchParams.toString();
  const query = search ? `?${search}` : "";

  return {
    url: `${pathname}${query}`,
    pathname,
    currentQueries: searchParams,
    updatedQueries: search,
    query: search
  };
};