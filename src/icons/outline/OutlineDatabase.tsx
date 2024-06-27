import { FC } from "react";
import type { IconProps } from "../types";

export const OutlineDatabase : FC<IconProps> = ({
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
            strokeLinecap="round"
            strokeWidth={4}
            d="M10.667 48V16m42.666 0v32"
        />
        <path
            stroke="currentColor"
            strokeWidth={4}
            d="M32 26.667c11.781 0 21.333-4.774 21.333-10.667S43.781 5.333 32 5.333C20.22 5.333 10.667 10.107 10.667 16S20.219 26.667 32 26.667Z"
        />
        <path
            stroke="currentColor"
            strokeWidth={4}
            d="M53.333 32c0 5.893-9.552 10.667-21.333 10.667-11.781 0-21.333-4.774-21.333-10.667"
            opacity={0.5}
        />
        <path
            stroke="currentColor"
            strokeWidth={4}
            d="M53.333 48c0 5.893-9.552 10.667-21.333 10.667-11.781 0-21.333-4.774-21.333-10.667"
        />
    </svg>
)
