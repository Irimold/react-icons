import { FC } from "react";
import { IconProps } from "../types";

export const X : FC<IconProps> = ({
    size = 64,
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 1227 1227"
        fill="none"
        {...props}
    >
    <path
        d="M 727.663,519.599 1174.39,0.315 H 1068.53 L 680.637,451.202 370.828,0.315 H 13.5 L 481.992,682.136 13.5,1226.685 H 119.366 L 528.991,750.533 856.172,1226.685 H 1213.5 L 727.637,519.599 Z M 582.665,688.143 535.197,620.249 157.511,80.0094 H 320.115 L 624.912,516 l 47.468,67.894 396.2,566.721 H 905.976 L 582.665,688.169 Z"
        fill="currentColor"
    />
    </svg>
)
