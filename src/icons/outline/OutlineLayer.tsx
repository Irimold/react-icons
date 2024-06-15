import type { IconProps } from "../types";
export const OutlineLayer = ({
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
            d="M13.277 25.827c-5.296-2.118-7.944-3.176-7.944-4.494 0-1.317 2.648-2.373 7.944-4.493l7.488-2.995c5.296-2.12 7.947-3.178 11.235-3.178 3.29 0 5.939 1.058 11.235 3.178l7.488 2.995c5.296 2.117 7.944 3.176 7.944 4.493 0 1.318-2.648 2.374-7.944 4.494l-7.488 2.997C37.939 30.941 35.288 32 32 32c-3.29 0-5.939-1.059-11.235-3.176z"
        />
        <path
            stroke="currentColor"
            strokeWidth={4}
            d="m15.376 26.667-2.099.84C7.981 29.624 5.333 30.685 5.333 32c0 1.315 2.648 2.373 7.944 4.493l7.488 2.998c5.296 2.117 7.947 3.176 11.235 3.176 3.29 0 5.939-1.059 11.235-3.176l7.488-2.998c5.296-2.117 7.944-3.178 7.944-4.493 0-1.315-2.648-2.373-7.944-4.493l-2.1-.84M15.377 37.333l-2.099.84c-5.296 2.118-7.944 3.179-7.944 4.494 0 1.317 2.648 2.373 7.944 4.493l7.488 2.997c5.296 2.118 7.947 3.176 11.235 3.176 3.29 0 5.939-1.058 11.235-3.178l7.488-2.995c5.296-2.117 7.944-3.176 7.944-4.493 0-1.315-2.648-2.374-7.944-4.494l-2.1-.84"
            opacity={0.5}
        />
    </svg>
);
 
