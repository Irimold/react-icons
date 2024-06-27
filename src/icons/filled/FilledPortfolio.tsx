import { FC } from "react";
import type { IconProps } from "../types";

export const FilledPortfolio : FC<IconProps> = ({
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
            fillRule="evenodd"
            d="M37.333 58.667H26.667c-10.056 0-15.086 0-18.208-3.126-3.126-3.122-3.126-8.152-3.126-18.208V26.667c0-10.056 0-15.086 3.126-18.208 3.122-3.126 8.178-3.126 18.288-3.126 1.616 0 2.909 0 4 .046-.035.213-.054.429-.054.65l-.026 7.558c0 2.925 0 5.512.28 7.594.304 2.259 1 4.518 2.845 6.363 1.84 1.84 4.101 2.539 6.36 2.843 2.083.28 4.67.28 7.595.28h10.805c.115 1.424.115 3.173.115 5.501v1.165c0 10.056 0 15.086-3.126 18.208-3.122 3.126-8.152 3.126-18.208 3.126"
            clipRule="evenodd"
            opacity={0.5}
        />
        <path
            fill="currentColor"
            d="m23.61 37.395.262.469c.288.517.432.773.659.944.224.17.504.235 1.06.36l.51.117c1.968.446 2.952.667 3.187 1.419.235.755-.437 1.539-1.779 3.107l-.346.405c-.382.445-.574.667-.66.944-.084.277-.055.573 0 1.168l.054.541c.203 2.094.304 3.142-.31 3.606-.612.464-1.532.04-3.375-.808l-.475-.219c-.525-.24-.786-.363-1.064-.363-.277 0-.538.123-1.064.363l-.474.219c-1.843.85-2.766 1.272-3.376.808-.614-.464-.512-1.512-.31-3.606l.054-.541c.056-.595.085-.89 0-1.168-.086-.275-.278-.499-.66-.944l-.346-.405c-1.341-1.568-2.013-2.352-1.778-3.107.234-.752 1.218-.973 3.186-1.419l.507-.117c.56-.125.84-.187 1.067-.36.224-.17.368-.427.656-.944l.26-.47c1.014-1.82 1.52-2.727 2.278-2.727s1.264.906 2.278 2.728m7.083-31.368-.026 7.56c0 2.925 0 5.509.28 7.594.304 2.259 1 4.518 2.845 6.36 1.84 1.843 4.101 2.542 6.36 2.846 2.083.28 4.67.28 7.595.28h10.805c.035.413.059.856.075 1.333h.04c0-.715 0-1.072-.027-1.493a14.191 14.191 0 0 0-2.555-7.043c-.25-.341-.421-.544-.76-.952-2.114-2.528-4.898-5.68-7.325-7.845-2.16-1.931-5.123-4.04-7.707-5.763-2.218-1.483-3.328-2.224-4.85-2.773a14.635 14.635 0 0 0-1.35-.411c-1.024-.253-2.021-.341-3.426-.373z"
        />
    </svg>
)
