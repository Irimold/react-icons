import { FC } from "react";
import type { IconProps } from "../types";

export const FilledLeft : FC<IconProps> = ({
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
            d="m30.923 22.141-9.15 8.872a1.33 1.33 0 0 0 0 1.974l17.68 17.146c1.104 1.07 3.214.422 3.214-.986V33.885z"
        />
        <path
            fill="currentColor"
            d="M42.667 30.115V14.853c0-1.408-2.11-2.056-3.214-.986l-6.618 6.416z"
            opacity={0.5}
        />
    </svg>
)
