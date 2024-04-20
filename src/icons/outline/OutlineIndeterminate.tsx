import * as React from "react"
import type { IconProps } from "../types";
export const OutlineIndeterminate = ({
    size = 64,
    ...props
} : IconProps) => (
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
            d="M24 32a2.667 2.667 0 1 1-5.333 0A2.667 2.667 0 0 1 24 32m10.667 0a2.667 2.667 0 1 1-5.334 0 2.667 2.667 0 0 1 5.334 0m10.666 0A2.667 2.667 0 1 1 40 32a2.667 2.667 0 0 1 5.333 0"
        />
        <path
            stroke="#3D9EC4"
            strokeWidth={4}
            d="M5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32Z"
            opacity={0.5}
        />
    </svg>
);
 
