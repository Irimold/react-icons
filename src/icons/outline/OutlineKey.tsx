import { FC } from "react";
import type { IconProps } from "../types";

export const OutlineKey : FC<IconProps> = ({
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
            strokeLinejoin="round"
            strokeWidth={4}
            d="M37.888 36.139A10.092 10.092 0 0 0 48 26.069 10.09 10.09 0 0 0 37.888 16a10.091 10.091 0 0 0-10.11 10.07c0 2.575 1.174 4.45 1.174 4.45L16.731 42.693c-.55.547-1.318 1.968 0 3.28l1.41 1.403c.547.47 1.928 1.125 3.056 0l1.646-1.637c1.645 1.637 3.528.701 4.232-.235 1.176-1.64-.235-3.28-.235-3.28l.472-.467c2.256 2.248 4.232.936 4.936 0 1.176-1.64 0-3.28 0-3.28-.47-.936-1.41-.936-.235-2.106l1.414-1.406c1.125.936 3.442 1.174 4.461 1.174Z"
        />
        <path
            stroke="currentColor"
            strokeWidth={4}
            d="M5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32Z"
            opacity={0.5}
        />
    </svg>
)
