'use client';

import {forwardRef, InputHTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  type,
  disabled,
  ...props
}, ref)=> {
  return (
    <input
      type={type}
      className={twMerge(
        "flex w-full rounded-md bg-gray-300 border border-transparent p-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:cursor-pointer placeholder:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";
export default Input;