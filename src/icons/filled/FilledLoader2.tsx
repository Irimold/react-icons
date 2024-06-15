import * as React from "react"
import type { IconProps } from "../types";
export const FilledLoader2 = ({
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
            d="M33.96 39.077a2 2 0 0 1-.613-3.84 5.39 5.39 0 0 0 1.72-1.173 2 2 0 0 1 2.656-.155 2.002 2.002 0 0 1 1.88 2.544c-.56 1.99-1.6 3.939-2.947 5.726a2 2 0 0 1-3.192-2.408c.173-.232.339-.462.496-.694m-5.995.11a2 2 0 0 0 2.542-1.886 2 2 0 0 0-.155-2.65 5.38 5.38 0 0 1-1.179-1.723 2 2 0 0 0-3.834.613c-.235-.16-.467-.325-.694-.496a2 2 0 0 0-2.408 3.195c1.787 1.347 3.734 2.384 5.728 2.947m-10.162-7.331a2 2 0 0 0 3.146-2.467 21.016 21.016 0 0 1-2.693-4.472 2.001 2.001 0 1 0-3.659 1.611 24.969 24.969 0 0 0 3.206 5.328m-4.896-11.397a2 2 0 1 0 3.973-.475 13.64 13.64 0 0 1 .288-4.965 2 2 0 0 0-3.877-.976 17.639 17.639 0 0 0-.384 6.416M16.02 8.213a2 2 0 1 0 3.248 2.334 15.774 15.774 0 0 1 1.654-1.939 2 2 0 0 0-2.827-2.83 19.75 19.75 0 0 0-2.075 2.435M31.368 24.23c-.172.227-.338.459-.499.694a2 2 0 0 1 .614 3.837 5.38 5.38 0 0 0-1.72 1.176 2 2 0 0 1-2.654.155 2.007 2.007 0 0 1-1.882-2.544c.562-1.99 1.6-3.939 2.946-5.726a2 2 0 0 1 3.195 2.408m5.499.584a2.002 2.002 0 0 0-2.544 1.886 2 2 0 0 0 .157 2.65 5.357 5.357 0 0 1 1.176 1.72 2 2 0 0 0 3.837-.613c.23.16.462.325.694.499a2 2 0 0 0 2.405-3.195c-1.787-1.347-3.733-2.384-5.725-2.947m10.16 7.331a2 2 0 1 0-3.147 2.467 21.185 21.185 0 0 1 2.693 4.472 2 2 0 0 0 3.66-1.611 25.014 25.014 0 0 0-3.206-5.328m4.898 11.397a2 2 0 1 0-3.973.475c.208 1.659.11 3.342-.29 4.965a2 2 0 0 0 3.88.976 17.63 17.63 0 0 0 .383-6.416m-3.114 12.246a2 2 0 0 0-3.248-2.334 15.742 15.742 0 0 1-1.656 1.939 2 2 0 0 0 2.826 2.827 19.412 19.412 0 0 0 2.078-2.432M32.219 20.195a2 2 0 0 1 .338-2.808 25.027 25.027 0 0 1 5.328-3.206 2 2 0 0 1 1.611 3.662 21.016 21.016 0 0 0-4.472 2.693 2 2 0 0 1-2.805-.341m9.99-5.483a2 2 0 0 1 1.748-2.221 17.64 17.64 0 0 1 6.414.381 2 2 0 0 1-.976 3.88 13.641 13.641 0 0 0-4.966-.29 2 2 0 0 1-2.224-1.75zm11.204 1.35a2 2 0 0 1 2.79-.457c.837.603 1.65 1.294 2.432 2.075a2 2 0 1 1-2.827 2.827 15.702 15.702 0 0 0-1.941-1.654 2 2 0 0 1-.454-2.792M32.275 46.612a2 2 0 0 0-2.47-3.146 21.122 21.122 0 0 1-4.472 2.693 2 2 0 1 0 1.611 3.659 25.02 25.02 0 0 0 5.33-3.206m-11.4 4.896a2 2 0 1 0-.475-3.973 13.649 13.649 0 0 1-4.965-.288 1.999 1.999 0 1 0-.976 3.877c2.097.52 4.272.65 6.416.384M8.629 48.395a2 2 0 1 0 2.334-3.248 15.724 15.724 0 0 1-1.939-1.654 2 2 0 0 0-2.827 2.827 19.417 19.417 0 0 0 2.432 2.075"
            opacity={0.5}
        />
        <path
            fill="currentColor"
            d="M23.808 33.208c1.083 2.23 2.71 4.11 4.867 5.179-2.115.488-4.56.586-7.062.232-7.44-1.054-14.28-5.862-14.28-14.619a2 2 0 1 0-4 0c0 11.51 9.163 17.368 17.72 18.581 4.299.608 8.72.112 12.155-1.557 2.315-1.125 4.256-2.84 5.301-5.123.379 1.976.432 4.208.11 6.486-1.054 7.44-5.862 14.28-14.62 14.28a2 2 0 0 0 0 4c11.51 0 17.369-9.163 18.582-17.72.608-4.299.112-8.72-1.557-12.155-.923-1.899-2.24-3.547-3.947-4.653a20.476 20.476 0 0 1 5.307.072c7.445 1.056 14.283 5.861 14.283 14.621a2 2 0 0 0 4 0c0-11.51-9.163-17.368-17.72-18.581-4.3-.608-8.72-.115-12.155 1.557-1.845.896-3.45 2.165-4.557 3.8a20.174 20.174 0 0 1-.024-5.995c1.056-7.44 5.86-14.28 14.62-14.28a2 2 0 1 0 0-4c-11.508 0-17.367 9.163-18.58 17.72-.608 4.299-.115 8.72 1.557 12.155"
        />
    </svg>
);
 
