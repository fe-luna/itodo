import React from "react";
import cx from "classnames";

interface Props {
  className?: any;
}

const Calendar: React.FC<Props> = ({ className }) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className={cx({
        [`ONBJEQtK++jnfUWJ3V90Dw==`]: true,
        [`${className}`]: className,
      })}
      viewBox="0 0 24 24"
    >
      <g fill="currentColor" fillRule="evenodd">
        <path
          fillRule="nonzero"
          d="M6 4.5h12A1.5 1.5 0 0119.5 6v2.5h-15V6A1.5 1.5 0 016 4.5z"
          opacity="0.1"
        ></path>
        <path
          fillRule="nonzero"
          d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6zm1 3h10a.5.5 0 110 1H7a.5.5 0 010-1z"
        ></path>
        <text
          fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
          fontSize="9"
          fontWeight="500"
          transform="translate(4 2)"
        >
          <tspan x="8" y="15" textAnchor="middle">
            {currentDay}
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default Calendar;
