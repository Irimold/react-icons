import { FC } from "react";
import { IconProps } from "../types";

export const OutlineDownloadAlt : FC<IconProps> = ({
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
            d="M8 40C8 47.5413 8 51.3147 10.344 53.656C12.6853 56 16.4587 56 24 56H40C47.5413 56 51.3147 56 53.656 53.656C56 51.3147 56 47.5413 56 40"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M31.9999 8V42.6667M31.9999 42.6667L42.6666 31M31.9999 42.6667L21.3333 31"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)
