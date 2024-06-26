import { FC } from "react";
import type { IconProps } from "../types";

export const OutlineUpload : FC<IconProps> = ({
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
            fill="currentColor"
            d="M37.333 56.667H26.667v4h10.666zm-30-19.334V26.667h-4v10.666zm49.334-1.165v1.165h4v-1.165zM39.709 12.296l10.558 9.501 2.674-2.976L42.387 9.32zm20.958 23.872c0-4.504.04-7.357-1.094-9.907l-3.656 1.63c.71 1.594.75 3.421.75 8.277zm-10.4-14.37c3.608 3.247 4.94 4.5 5.65 6.093l3.656-1.63c-1.136-2.552-3.282-4.426-6.632-7.44zM26.747 7.332c4.218 0 5.81.032 7.226.576l1.435-3.733c-2.272-.875-4.747-.843-8.661-.843zm15.64 1.99c-2.896-2.606-4.707-4.278-6.98-5.147l-1.431 3.733c1.419.544 2.613 1.579 5.733 4.387zm-15.72 47.344c-5.086 0-8.696-.006-11.44-.374-2.68-.36-4.227-1.037-5.355-2.165l-2.827 2.827c1.995 2 4.526 2.882 7.65 3.304 3.068.413 7 .408 11.972.408zM3.333 37.333c0 4.971-.005 8.902.408 11.971.422 3.125 1.307 5.656 3.302 7.653l2.826-2.826C8.744 53 8.067 51.453 7.707 48.77c-.368-2.739-.374-6.352-.374-11.438zm34 23.334c4.97 0 8.902.005 11.97-.408 3.126-.422 5.657-1.307 7.654-3.302l-2.826-2.826c-1.131 1.125-2.678 1.802-5.36 2.162-2.74.368-6.352.374-11.438.374zm19.334-23.334c0 5.086-.006 8.699-.374 11.44-.36 2.68-1.037 4.227-2.165 5.355l2.827 2.827c2-1.995 2.882-4.526 3.304-7.651.413-3.067.408-7 .408-11.97zM7.333 26.667c0-5.086.006-8.696.374-11.44.36-2.68 1.037-4.227 2.165-5.355L7.045 7.045c-2 1.995-2.882 4.526-3.304 7.651-.413 3.067-.408 7-.408 11.97zM26.747 3.333c-5 0-8.95-.005-12.03.408-3.138.422-5.677 1.307-7.674 3.302l2.826 2.826c1.13-1.125 2.68-1.802 5.379-2.162 2.755-.368 6.387-.374 11.499-.374z"
        />
        <path
            stroke="currentColor"
            strokeWidth={4}
            d="M34.667 6.667v6.666c0 6.286 0 9.43 1.951 11.382 1.953 1.952 5.096 1.952 11.382 1.952h10.667"
            opacity={0.5}
        />
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M22.667 49.333V36m0 0-5.334 5m5.334-5L28 41"
            opacity={0.5}
        />
    </svg>
)
