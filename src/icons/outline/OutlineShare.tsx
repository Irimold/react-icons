import { FC } from "react";
import type { IconProps } from "../types";

export const OutlineShare : FC<IconProps> = ({
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
            stroke="currentColor"
            strokeWidth={4}
            d="m49.696 41.787 4.576-13.734c4-11.994 6-17.992 2.832-21.157-3.165-3.165-9.163-1.168-21.16 2.832l-13.73 4.576c-9.68 3.227-14.52 4.843-15.894 7.208a7.245 7.245 0 0 0 0 7.28c1.373 2.368 6.213 3.981 15.893 7.21 1.558.518 2.334.777 2.984 1.211a5.8 5.8 0 0 1 1.592 1.592c.435.651.694 1.427 1.211 2.982 3.227 9.68 4.843 14.522 7.208 15.898a7.253 7.253 0 0 0 7.283 0c2.365-1.376 3.976-6.216 7.205-15.898Z"
        />
        <path
            fill="currentColor"
            d="M43.232 23.595a2 2 0 0 0-2.813-2.843zm-14.8 14.634 14.8-14.634-2.813-2.843-14.8 14.635 2.816 2.842z"
            opacity={0.5}
        />
    </svg>
)
