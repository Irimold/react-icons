import { FC } from "react";
import { IconProps } from "../types";

export const FilledAchievement : FC<IconProps> = ({
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
            d="M32 42.8481L21.944 53.2614C20.504 54.7521 19.784 55.4987 19.1707 55.7547C17.784 56.3414 16.24 55.8401 15.5093 54.5601C15.1893 54.0001 15.088 52.9867 14.8907 50.9601C14.776 49.8134 14.72 49.2427 14.5493 48.7627C14.3676 48.2401 14.0742 47.7634 13.6897 47.3655C13.3052 46.9677 12.8387 46.6582 12.3227 46.4587C11.8613 46.2801 11.3093 46.2214 10.2027 46.1041C8.24533 45.8987 7.26666 45.7947 6.72266 45.4641C5.488 44.7067 5 43.1094 5.568 41.6721C5.81867 41.0401 6.53867 40.2934 7.97867 38.8027L14.5493 32.0001L17.8507 28.6987L32 42.8481ZM32 42.8481L46.1493 28.6987L49.4507 32.0001L56.0213 38.8001C57.4613 40.2934 58.1813 41.0401 58.432 41.6694C59 43.1094 58.512 44.7067 57.2773 45.4641C56.7333 45.7947 55.7573 45.8987 53.7973 46.1041C52.6933 46.2214 52.1387 46.2801 51.6773 46.4587C50.64 46.8561 49.8373 47.6907 49.4507 48.7627C49.28 49.2427 49.224 49.8134 49.1093 50.9574C48.9093 52.9841 48.8107 53.9974 48.4907 54.5601C47.76 55.8401 46.216 56.3441 44.8267 55.7547C44.2187 55.4987 43.4987 54.7521 42.0587 53.2614L32 42.8481Z"
            fill="currentColor"
        />
        <path 
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32 42.6666C36.9507 42.6666 41.6987 40.6999 45.1993 37.1992C48.7 33.6986 50.6667 28.9506 50.6667 23.9999C50.6667 19.0492 48.7 14.3013 45.1993 10.8006C41.6987 7.29991 36.9507 5.33325 32 5.33325C27.0493 5.33325 22.3014 7.29991 18.8007 10.8006C15.3 14.3013 13.3333 19.0492 13.3333 23.9999C13.3333 28.9506 15.3 33.6986 18.8007 37.1992C22.3014 40.6999 27.0493 42.6666 32 42.6666ZM32 15.9999C31.2427 15.9999 30.736 16.9066 29.7227 18.7279L29.4613 19.1973C29.1733 19.7146 29.0293 19.9706 28.8053 20.1413C28.5787 20.3119 28.2987 20.3759 27.7387 20.5013L27.232 20.6186C25.264 21.0639 24.28 21.2853 24.0453 22.0373C23.8107 22.7893 24.4827 23.5759 25.824 25.1439L26.1707 25.5493C26.552 25.9946 26.744 26.2159 26.8293 26.4933C26.9147 26.7706 26.8853 27.0666 26.8293 27.6613L26.776 28.2026C26.5733 30.2959 26.472 31.3439 27.0827 31.8079C27.696 32.2719 28.6187 31.8479 30.4613 30.9999L30.936 30.7813C31.4613 30.5413 31.7227 30.4213 32 30.4213C32.2773 30.4213 32.5387 30.5413 33.064 30.7813L33.5387 30.9999C35.3813 31.8506 36.304 32.2719 36.9173 31.8079C37.5307 31.3439 37.4267 30.2959 37.224 28.2026L37.1707 27.6613C37.1147 27.0666 37.0853 26.7706 37.1707 26.4933C37.256 26.2159 37.448 25.9946 37.8293 25.5493L38.176 25.1439C39.5173 23.5759 40.1893 22.7919 39.9547 22.0373C39.72 21.2853 38.736 21.0639 36.768 20.6186L36.2613 20.5013C35.7013 20.3759 35.4213 20.3146 35.1947 20.1413C34.9707 19.9706 34.8267 19.7146 34.5387 19.1973L34.2773 18.7279C33.264 16.9066 32.7573 15.9999 32 15.9999Z"
            fill="currentColor"
        />
    </svg>
)