import { FC } from "react";
import type { IconProps } from "../types";

export const OutlineForward : FC<IconProps> = ({
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
            strokeLinejoin="round"
            strokeWidth={4}
            d="M52 32 38.667 18.667M52 32 38.667 45.333M52 32H25.333C20.888 32 12 34.667 12 45.333"
        />
    </svg>
)
