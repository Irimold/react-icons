import { FC } from "react";
import { IconProps } from "../types";

export const Github : FC<IconProps> = ({
    size = 64,
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 98 98"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m 49.040391,0.99979943 c -27.015,0 -48.85400022,21.99999957 -48.85400022,49.21699957 0,21.756 13.99300022,40.172 33.40500022,46.69 2.427,0.49 3.316,-1.059 3.316,-2.362 0,-1.141 -0.08,-5.052 -0.08,-9.127 -13.59,2.934 -16.42,-5.867 -16.42,-5.867 -2.184,-5.704 -5.42,-7.17 -5.42,-7.17 -4.448,-3.015 0.324,-3.015 0.324,-3.015 4.934,0.326 7.523,5.052 7.523,5.052 4.367,7.496 11.404,5.378 14.235,4.074 0.404,-3.178 1.699,-5.378 3.074,-6.6 -10.839,-1.141 -22.243,-5.378 -22.243,-24.283 0,-5.378 1.94,-9.778 5.014,-13.2 -0.485,-1.222 -2.184,-6.275 0.486,-13.038 0,0 4.125,-1.304 13.426,5.052 a 46.97,46.97 0 0 1 12.214,-1.63 c 4.125,0 8.33,0.571 12.213,1.63 9.302,-6.356 13.427,-5.052 13.427,-5.052 2.67,6.763 0.97,11.816 0.485,13.038 3.155,3.422 5.015,7.822 5.015,13.2 0,18.905 -11.404,23.06 -22.324,24.283 1.78,1.548 3.316,4.481 3.316,9.126 0,6.6 -0.08,11.897 -0.08,13.526 0,1.304 0.89,2.853 3.316,2.364 19.412,-6.52 33.405,-24.935 33.405,-46.691 0.08,-27.217 -21.839,-49.21699957 -48.773,-49.21699957 z"
            fill="currentColor"
        />
        </svg>
)
