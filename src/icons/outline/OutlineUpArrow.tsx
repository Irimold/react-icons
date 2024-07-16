import { FC } from "react";
import { IconProps } from "../types";

export const OutlineUpArrow : FC<IconProps> = ({
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
            opacity="0.5"
            d="M31.9999 58.6666C46.7275 58.6666 58.6666 46.7276 58.6666 32C58.6666 17.2724 46.7275 5.33331 31.9999 5.33331C17.2723 5.33331 5.33325 17.2724 5.33325 32C5.33325 46.7276 17.2723 58.6666 31.9999 58.6666Z"
            stroke="currentColor"
            strokeWidth="4"
        />
        <path
            d="M32 42.6666V21.3333M32 21.3333L40 29.3333M32 21.3333L24 29.3333"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)
