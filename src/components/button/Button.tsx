import classNames from "classnames";
import React from "react";

interface IProps {
  type:
    | "extraBig"
    | "iconRight"
    | "iconLeft"
    | "medium"
    | "table"
    | "mediumIconLeft";
  disabled?: boolean;
  secondary?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  handleClick?: any;
  color?: React.ReactNode;
  additionalClasses?: string;
  buttonColor?: string;
  loading?: any;
}

export const Button = ({
  type,
  disabled,
  secondary,
  fullWidth,
  icon,
  children,
  loading,
  handleClick,
  color,
  buttonColor = "defaultGreen",
  additionalClasses = "",
  ...rest
}: IProps): any => {
  if (type === "iconRight")
    return (
      <div className={`${fullWidth ? "w-full" : ""}`}>
        <button
          disabled={disabled ? true : false}
          onClick={handleClick}
          className={`${
            fullWidth ? "w-full" : ""
          } flex items-center justify-center px-4 py-2 text-base font-medium leading-5 transition-colors duration-150 ${
            disabled ? "cursor-default" : ""
          } ${
            secondary
              ? "bg-white text-defaultGreen active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500"
              : "bg-white text-defaultGreen"
          } focus:outline-none disabled:opacity-25`}
          {...rest}
        >
          <span>{children}</span>
          <div className="ml-4">{icon}</div>
        </button>
      </div>
    );

  if (type === "iconLeft")
    return (
      <div className={`${fullWidth ? "w-full" : ""}`}>
        <button
          disabled={disabled ? true : false}
          onClick={handleClick}
          className={`${
            fullWidth ? "w-full" : ""
          } flex items-center justify-center gap-2 px-4 py-2 text-base font-medium leading-5 text-white transition-colors duration-150 ${
            disabled ? "cursor-default" : ""
          } ${
            secondary
              ? `bg-${color} text-defaultGreen active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500`
              : `bg-${color} text-defaultGreen`
          } focus:outline-none disabled:opacity-25`}
          {...rest}
        >
          <div className="ml-4">{icon}</div>
          <span>{children}</span>
        </button>
      </div>
    );

  if (type === "medium")
    return (
      <div className={`${fullWidth ? "w-full " : ""}`}>
        <button
          disabled={disabled ? true : false}
          onClick={handleClick}
          className={classNames(
            `${
              fullWidth ? "w-full" : ""
            } px-6 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 ${
              disabled ? "cursor-default" : ""
            } ${
              secondary
                ? `bg-${buttonColor} text-white border-gray-300 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500`
                : `bg-${buttonColor}  text-white active:bg-defaultGreen focus:shadow-outline-defaultGreen`
            } border rounded-xl  focus:outline-none`,
            "disabled:opacity-25",
            additionalClasses
          )}
          {...rest}
        >
          {children}
        </button>
      </div>
    );

  if (type === "mediumIconLeft")
    return (
      <div className={`${fullWidth ? "w-full" : ""}`}>
        <button
          disabled={disabled ? true : false}
          onClick={handleClick}
          className={`${
            fullWidth ? "w-full" : ""
          }  flex justify-center px-3 py-2 rounded-3xl m-0 py-1 text-text font-light leading-3 text-black transition-colors duration-150 ${
            disabled ? "cursor-default" : ""
          } ${
            secondary
              ? `bg-${buttonColor} text-${color} border-gray-300 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500`
              : `bg-${buttonColor}  text-${color} active:bg-defaultGreen focus:shadow-outline-defaultGreen`
          } border rounded-xl focus:outline-none disabled:opacity-25`}
          {...rest}
        >
          <div className="mr-2">{icon}</div>
          <span>{children}</span>
        </button>
      </div>
    );
  if (type === "table")
    return (
      <div className={`${fullWidth ? "w-36" : ""}`}>
        <button
          disabled={disabled ? true : false}
          onClick={handleClick}
          className={`${
            fullWidth ? "w-36" : ""
          } px-4 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 ${
            disabled ? "cursor-default" : ""
          } ${
            secondary
              ? "bg-tableGrey text-textGrey border-gray-300 active:bg-transparent hover:border-gray-500"
              : "bg-tableGrey  text-textGrey  focus:shadow-outline-defaultGreen"
          } border rounded-lg h-11  focus:outline-none disabled:opacity-25`}
          {...rest}
        >
          {children}
        </button>
      </div>
    );

  if (type === "extraBig")
    return (
      <div className={`${fullWidth ? "w-full" : ""}`}>
        <button
          disabled={disabled ? true : false}
          onClick={handleClick}
          className={`${
            fullWidth ? "w-full" : ""
          } px-10 py-4 font-medium leading-5 transition-colors duration-150 ${
            disabled ? "cursor-default" : ""
          } ${
            secondary
              ? `bg-${color} text-white border-gray-300 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500`
              : `bg-${color}  text-white focus:shadow-outline-defaultGreen`
          }  border rounded-lg  focus:outline-none disabled:opacity-25`}
          {...rest}
        >
          {children}
        </button>
      </div>
    );
};
