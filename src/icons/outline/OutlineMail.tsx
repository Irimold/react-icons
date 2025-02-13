import { FC } from "react";
import { IconProps } from "../types";

export const OutlineMail : FC<IconProps> = ({
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
            d="M5.33334 32C5.33334 21.944 5.33334 16.9146 8.45867 13.792C11.584 10.6693 16.6107 10.6666 26.6667 10.6666H37.3333C47.3893 10.6666 52.4187 10.6666 55.5413 13.792C58.664 16.9173 58.6667 21.944 58.6667 32C58.6667 42.056 58.6667 47.0853 55.5413 50.208C52.416 53.3306 47.3893 53.3333 37.3333 53.3333H26.6667C16.6107 53.3333 11.5813 53.3333 8.45867 50.208C5.336 47.0826 5.33334 42.056 5.33334 32Z"
            stroke="currentColor"
            strokeWidth="4"
        />
        <path 
            d="M16 21.3333L21.7573 26.1333C26.656 30.2133 29.104 32.2533 32 32.2533C34.896 32.2533 37.3467 30.2133 42.2427 26.1306L48 21.3333"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
        />
    </svg>
)
