import { FC } from "react";
import type { IconProps } from "../types";

export const FilledLock : FC<IconProps> = ({
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
            d="M5.333 42.667c0-7.542 0-11.315 2.344-13.656 2.342-2.344 6.115-2.344 13.656-2.344h21.334c7.54 0 11.314 0 13.656 2.344 2.344 2.341 2.344 6.114 2.344 13.656 0 7.541 0 11.314-2.344 13.656-2.342 2.344-6.115 2.344-13.656 2.344H21.333c-7.541 0-11.314 0-13.656-2.344-2.344-2.342-2.344-6.115-2.344-13.656"
            opacity={0.5}
        />
        <path
            fill="currentColor"
            d="M32 48a5.333 5.333 0 1 0 0-10.666A5.333 5.333 0 0 0 32 48M18 21.333a14 14 0 0 1 28 0v5.344c1.512.014 2.837.048 4 .134v-5.478a18 18 0 1 0-36 0v5.48a62.873 62.873 0 0 1 4-.136z"
        />
    </svg>
)
