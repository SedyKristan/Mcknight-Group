import { cn } from "@/lib/utils";

type BillProps = {
  className?: string;
};

export const Solid = ({ className }: BillProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={cn("h-4 w-4", className)}
    >
      <path
        d="M20 12.5C19.0054 12.5 18.0516 12.8951 17.3483 13.5983C16.6451 14.3016 16.25 15.2554 16.25 16.25C16.25 17.2446 16.6451 18.1984 17.3483 18.9016C18.0516 19.6049 19.0054 20 20 20C20.9946 20 21.9484 19.6049 22.6516 18.9016C23.3549 18.1984 23.75 17.2446 23.75 16.25C23.75 15.2554 23.3549 14.3016 22.6516 13.5983C21.9484 12.8951 20.9946 12.5 20 12.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 8.125C2.5 6.39833 3.9 5 5.625 5H34.375C36.1 5 37.5 6.4 37.5 8.125V24.375C37.5 26.1017 36.1 27.5 34.375 27.5H5.625C5.21462 27.5 4.80826 27.4192 4.42911 27.2621C4.04997 27.1051 3.70547 26.8749 3.41529 26.5847C3.12511 26.2945 2.89492 25.95 2.73788 25.5709C2.58083 25.1917 2.5 24.7854 2.5 24.375V8.125ZM13.75 16.25C13.75 14.5924 14.4085 13.0027 15.5806 11.8306C16.7527 10.6585 18.3424 10 20 10C21.6576 10 23.2473 10.6585 24.4194 11.8306C25.5915 13.0027 26.25 14.5924 26.25 16.25C26.25 17.9076 25.5915 19.4973 24.4194 20.6694C23.2473 21.8415 21.6576 22.5 20 22.5C18.3424 22.5 16.7527 21.8415 15.5806 20.6694C14.4085 19.4973 13.75 17.9076 13.75 16.25ZM31.25 15C30.9185 15 30.6005 15.1317 30.3661 15.3661C30.1317 15.6005 30 15.9185 30 16.25V16.2633C30 16.9533 30.56 17.5133 31.25 17.5133H31.2633C31.5949 17.5133 31.9128 17.3816 32.1472 17.1472C32.3816 16.9128 32.5133 16.5949 32.5133 16.2633V16.25C32.5133 15.9185 32.3816 15.6005 32.1472 15.3661C31.9128 15.1317 31.5949 15 31.2633 15H31.25ZM7.5 16.25C7.5 15.9185 7.6317 15.6005 7.86612 15.3661C8.10054 15.1317 8.41848 15 8.75 15H8.76333C9.09485 15 9.4128 15.1317 9.64722 15.3661C9.88164 15.6005 10.0133 15.9185 10.0133 16.25V16.2633C10.0133 16.5949 9.88164 16.9128 9.64722 17.1472C9.4128 17.3816 9.09485 17.5133 8.76333 17.5133H8.75C8.41848 17.5133 8.10054 17.3816 7.86612 17.1472C7.6317 16.9128 7.5 16.5949 7.5 16.2633V16.25Z"
        fill="currentColor"
      />
      <path
        d="M3.75 30C3.41848 30 3.10054 30.1317 2.86612 30.3661C2.6317 30.6005 2.5 30.9185 2.5 31.25C2.5 31.5815 2.6317 31.8995 2.86612 32.1339C3.10054 32.3683 3.41848 32.5 3.75 32.5C12.75 32.5 21.4667 33.7033 29.75 35.9583C31.7333 36.4983 33.75 35.0283 33.75 32.925V31.25C33.75 30.9185 33.6183 30.6005 33.3839 30.3661C33.1495 30.1317 32.8315 30 32.5 30H3.75Z"
        fill="currentColor"
      />
    </svg>
  );
};
