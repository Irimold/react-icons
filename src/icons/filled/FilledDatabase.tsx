import type { IconProps } from "../types";
export const FilledDatabase = ({
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
            d="M32 26.667c11.781 0 21.333-4.774 21.333-10.667S43.781 5.333 32 5.333C20.22 5.333 10.667 10.107 10.667 16S20.219 26.667 32 26.667"
        />
        <path
            fill="currentColor"
            d="M10.667 32v16c0 5.893 9.552 10.667 21.333 10.667 11.781 0 21.333-4.774 21.333-10.667V32c0 5.893-9.552 10.667-21.333 10.667-11.781 0-21.333-4.774-21.333-10.667"
            opacity={0.5}
        />
        <path
            fill="currentColor"
            d="M10.667 16v16c0 5.893 9.552 10.667 21.333 10.667 11.781 0 21.333-4.774 21.333-10.667V16c0 5.893-9.552 10.667-21.333 10.667-11.781 0-21.333-4.774-21.333-10.667"
            opacity={0.7}
        />
    </svg>
);
 
