import { FC } from "react";
import { IconProps } from "../types";

export const FilledPen : FC<IconProps> = ({
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
            d="M31.9999 58.6666C46.7275 58.6666 58.6666 46.7276 58.6666 32C58.6666 17.2724 46.7275 5.33331 31.9999 5.33331C17.2723 5.33331 5.33325 17.2724 5.33325 32C5.33325 46.7276 17.2723 58.6666 31.9999 58.6666Z" 
            fill="currentColor"
        />
        <path 
            d="M37.1361 38.1386C37.7894 37.6293 38.3814 37.0373 39.5681 35.8506L54.3414 21.0773C54.6987 20.72 54.5361 20.104 54.0587 19.9386C51.7483 19.1312 49.6512 17.81 47.9254 16.0746C46.189 14.3491 44.8669 12.252 44.0587 9.94131C43.8961 9.46131 43.2801 9.30131 42.9227 9.65864L28.1494 24.432C26.9627 25.616 26.3707 26.2106 25.8614 26.864C25.2598 27.6341 24.7438 28.4674 24.3227 29.3493C23.9681 30.096 23.7014 30.8933 23.1734 32.4826L22.4881 34.536L21.3974 37.8053L20.3787 40.8666C20.2515 41.25 20.2333 41.6612 20.3263 42.0543C20.4193 42.4474 20.6197 42.8069 20.9052 43.0927C21.1907 43.3784 21.55 43.5792 21.943 43.6726C22.336 43.7659 22.7472 43.7482 23.1307 43.6213L26.1974 42.6L29.4614 41.512L31.5147 40.8266C33.1067 40.296 33.9014 40.032 34.6481 39.6746C35.5309 39.2548 36.3652 38.7398 37.1361 38.1386ZM58.9681 16.4533C60.4826 14.9391 61.3336 12.8852 61.3339 10.7436C61.3341 8.60192 60.4836 6.54787 58.9694 5.03331C57.4552 3.51874 55.4013 2.66773 53.2597 2.66748C51.118 2.66723 49.0639 3.51776 47.5494 5.03197L47.0721 5.50664C46.8467 5.72984 46.6789 6.00446 46.5832 6.30687C46.4875 6.60929 46.4668 6.93042 46.5227 7.24264C46.5947 7.64264 46.7281 8.22931 46.9707 8.93064C47.6248 10.8023 48.6952 12.501 50.1014 13.8986C51.4982 15.3045 53.196 16.375 55.0667 17.0293C55.7681 17.2693 56.3547 17.4053 56.7547 17.4773C57.3947 17.592 58.0347 17.384 58.4934 16.9253L58.9681 16.4533Z" 
            fill="currentColor"
        />
    </svg>
)
