import { FC } from "react";
import { IconProps } from "../types";

export const OutlineBook : FC<IconProps> = ({
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
            d="M10.6667 21.3333C10.6667 13.7919 10.6667 10.0186 13.0107 7.67725C15.352 5.33325 19.1253 5.33325 26.6667 5.33325H37.3333C44.8747 5.33325 48.648 5.33325 50.9893 7.67725C53.3333 10.0186 53.3333 13.7919 53.3333 21.3333V42.6666C53.3333 50.2079 53.3333 53.9813 50.9893 56.3226C48.648 58.6666 44.8747 58.6666 37.3333 58.6666H26.6667C19.1253 58.6666 15.352 58.6666 13.0107 56.3226C10.6667 53.9813 10.6667 50.2079 10.6667 42.6666V21.3333Z"
            stroke="currentColor"
            strokeWidth="4"
        />
        <path
            opacity="0.5"
            d="M53.0613 42.6665H21.0613C18.5813 42.6665 17.3413 42.6665 16.3227 42.9385C14.9662 43.3022 13.7293 44.0167 12.7365 45.01C11.7436 46.0033 11.0298 47.2405 10.6667 48.5972"
            stroke="currentColor"
            strokeWidth="4"
        />
        <path
            opacity="0.5"
            d="M21.3333 18.6665H42.6667M21.3333 27.9998H34.6667"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
        />
    </svg>
)
