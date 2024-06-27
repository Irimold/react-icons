import { FC } from "react";
import { IconProps } from "../types";

export const FilledRight : FC<IconProps> = ({
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
            d="m33.077 22.141 9.15 8.872c.586.568.586 1.406 0 1.974l-17.68 17.146c-1.107 1.07-3.214.422-3.214-.986V33.885z"
        />
        <path
            fill="currentColor"
            d="M21.333 30.115V14.853c0-1.408 2.107-2.056 3.214-.986l6.616 6.416z"
            opacity={0.5}
        />
    </svg>
)
