"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { getArrayParam, removeParam, toggleArrayParam } from "@/lib/utils/query";

const GENDERS = ["men", "women", "unisex"] as const;
const SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const;
const COLORS = ["black", "white", "red", "green", "blue", "grey"] as const;
const PRICES = [
    { id: "0-50", label: "$0 - $50" },
    { id: "50-100", label: "$50 - $100" },
    { id: "100-150", label: "$100 - $150" },
    { id: "150-", label: "Over $150" },
] as const;

type GroupKey = "gender" | "size" | "color" | "price";

export default function Filters() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const search = useMemo(() => `?${searchParams.toString()}`, [searchParams]);