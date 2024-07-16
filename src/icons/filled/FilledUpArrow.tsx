import { FC } from "react";
import { IconProps } from "../types";

export const FilledUpArrow : FC<IconProps> = ({
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
            d="M5.33325 32C5.33325 17.272 17.2719 5.33331 31.9999 5.33331C46.7279 5.33331 58.6666 17.272 58.6666 32C58.6666 46.728 46.7279 58.6666 31.9999 58.6666C17.2719 58.6666 5.33325 46.728 5.33325 32Z"
            fill="currentColor"
        />
        <path 
            d="M41.4133 27.92C41.6097 28.1031 41.7674 28.3239 41.8767 28.5692C41.986 28.8146 42.0448 29.0794 42.0495 29.3479C42.0542 29.6165 42.0048 29.8832 41.9042 30.1323C41.8037 30.3813 41.6539 30.6075 41.464 30.7974C41.2741 30.9873 41.0479 31.1371 40.7988 31.2377C40.5498 31.3382 40.2831 31.3876 40.0145 31.3829C39.746 31.3782 39.4811 31.3194 39.2358 31.2101C38.9905 31.1008 38.7697 30.9432 38.5866 30.7467L33.9999 26.16V42.6667C33.9999 43.1971 33.7892 43.7058 33.4141 44.0809C33.0391 44.4559 32.5304 44.6667 31.9999 44.6667C31.4695 44.6667 30.9608 44.4559 30.5857 44.0809C30.2106 43.7058 29.9999 43.1971 29.9999 42.6667V26.16L25.4133 30.7467C25.0341 31.0999 24.5327 31.2923 24.0145 31.2831C23.4964 31.274 23.002 31.0641 22.6356 30.6976C22.2692 30.3312 22.0593 29.8369 22.0501 29.3187C22.041 28.8006 22.2333 28.2991 22.5866 27.92L30.5866 19.92C30.9616 19.5455 31.4699 19.3351 31.9999 19.3351C32.5299 19.3351 33.0382 19.5455 33.4133 19.92L41.4133 27.92Z"
            fill="currentColor"
        />
    </svg>
)
