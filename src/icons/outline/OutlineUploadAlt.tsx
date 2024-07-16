import { FC } from "react";
import { IconProps } from "../types";

export const OutlineUploadAlt : FC<IconProps> = ({
    size = 64,
    ...props
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            opacity="0.5"
            d="M8 40C8 47.5413 8 51.3147 10.344 53.656C12.6853 56 16.4587 56 24 56H40C47.5413 56 51.3147 56 53.656 53.656C56 51.3147 56 47.5413 56 40"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M31.9999 42.6667V8M31.9999 8L42.6666 19.6667M31.9999 8L21.3333 19.6667"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)