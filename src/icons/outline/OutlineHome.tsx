import type { IconProps } from "../types";
export const OutlineHome = ({
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
            stroke="currentColor"
            strokeWidth={4}
            d="M5.333 32.544c0-6.104 0-9.155 1.387-11.683 1.381-2.53 3.912-4.098 8.97-7.24l5.334-3.309C26.37 6.992 29.045 5.333 32 5.333s5.627 1.659 10.976 4.979l5.333 3.31c5.059 3.14 7.59 4.709 8.974 7.24 1.384 2.527 1.384 5.578 1.384 11.68V36.6c0 10.4 0 15.603-3.126 18.835-3.122 3.232-8.152 3.232-18.208 3.232H26.667c-10.056 0-15.086 0-18.208-3.232-3.126-3.232-3.126-8.432-3.126-18.835z"
            opacity={0.5}
        />
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={4}
            d="M24 42.667c2.267 1.68 5.027 2.666 8 2.666s5.733-.986 8-2.666"
        />
    </svg>
);
 
