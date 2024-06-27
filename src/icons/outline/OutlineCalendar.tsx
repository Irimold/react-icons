import { FC } from "react";
import type { IconProps } from "../types";

export const OutlineCalendar : FC<IconProps> = ({
    size = 64,
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeWidth={4}
            d="M5.333 32c0-10.056 0-15.085 3.126-18.208 3.122-3.125 8.152-3.125 18.208-3.125h10.666c10.056 0 15.086 0 18.208 3.125 3.126 3.123 3.126 8.152 3.126 18.208v5.333c0 10.056 0 15.086-3.126 18.208-3.122 3.126-8.152 3.126-18.208 3.126H26.667c-10.056 0-15.086 0-18.208-3.126-3.126-3.122-3.126-8.152-3.126-18.208z"
        />
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={4}
            d="M18.667 10.667v-4m26.666 4v-4M5.333 24h53.334"
            opacity={0.5}
        />
    </svg>
)
