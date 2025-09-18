import React from "react";

export function ArrowLeftIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 10"
      fill="none"
      className={className}
    >
      <path
        d="M10.25 5H1.25M1.25 5L5 8.75M1.25 5L5 1.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 10"
      fill="none"
      className={className}
    >
      <path
        d="M1.75 5H10.75M10.75 5L7 8.75M10.75 5L7 1.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExpandIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 31 30"
      fill="none"
      width="1em" // ✅ scalable via font size (or Tailwind width)
      height="1em"
      className={className}
    >
      <g clipPath="url(#clip0_347_315)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.75 6.40125L18.1512 15L26.75 23.5988V18.7556H30.5V30H19.25V26.2575H24.1063L15.5 17.6512L6.89375 26.2575H11.75V30H0.5V18.7556H4.25V23.5988L12.8488 15L4.25 6.40125V11.2537H0.5V0H30.5V11.2537H26.75V6.40125ZM24.0969 3.75187H19.25V0H11.75V3.75H6.90312L15.5 12.3488L24.0969 3.75187Z"
          fill="currentColor" // ✅ respects text color
        />
      </g>
      <defs>
        <clipPath id="clip0_347_315">
          <rect
            width="30"
            height="30"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ArrowDownIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.7071 7.7071C7.3166 8.0976 6.6834 8.0976 6.2929 7.7071L1.29289 2.70711C0.90237 2.31658 0.90237 1.68342 1.29289 1.29289C1.68342 0.90237 2.31658 0.90237 2.70711 1.29289L7 5.5858L11.2929 1.29289C11.6834 0.90237 12.3166 0.90237 12.7071 1.29289C13.0976 1.68342 13.0976 2.31658 12.7071 2.70711L7.7071 7.7071Z"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
}
