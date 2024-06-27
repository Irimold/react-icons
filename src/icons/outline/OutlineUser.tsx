import { FC } from "react";
import { IconProps } from "../types";

export const OutlineUser : FC<IconProps> = ({
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
            d="M32 32C36.4183 32 40 28.4183 40 24C40 19.5817 36.4183 16 32 16C27.5817 16 24 19.5817 24 24C24 28.4183 27.5817 32 32 32Z" 
            stroke="currentColor" 
            strokeWidth="4"
        />
        <path 
            d="M31.9999 58.6666C46.7275 58.6666 58.6666 46.7276 58.6666 32C58.6666 17.2724 46.7275 5.33331 31.9999 5.33331C17.2723 5.33331 5.33325 17.2724 5.33325 32C5.33325 46.7276 17.2723 58.6666 31.9999 58.6666Z" 
            stroke="currentColor" 
            strokeWidth="4"
        />
        <path 
            opacity="0.5" 
            d="M47.9198 53.3333C47.4932 45.6213 45.1332 40 31.9998 40C18.8665 40 16.5065 45.6213 16.0798 53.3333" 
            stroke="currentColor" 
            strokeWidth="4" 
            strokeLinecap="round"
        />
    </svg>
)
