import { FC } from "react";
import type { IconProps } from "../types";

export const FilledDots : FC<IconProps> = ({
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
            fill="currentColor"
            d="M18.667 32A5.333 5.333 0 1 1 8 32a5.333 5.333 0 0 1 10.667 0M56 32a5.333 5.333 0 1 1-10.667 0A5.333 5.333 0 0 1 56 32"
        />
        <path
            fill="currentColor"
            d="M37.333 32a5.333 5.333 0 1 1-10.666 0 5.333 5.333 0 0 1 10.666 0"
            opacity={0.5}
        />
    </svg>
)
