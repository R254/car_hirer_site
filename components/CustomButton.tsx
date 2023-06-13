'use client'
import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({ title, containerStyles, handleClick, btnType,textStyles,rightIcon,isDisabled}:CustomButtonProps) => {
  return (
    <button
        disabled = {false}
        type= {btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rightIcon && (
          <div className="w-5 h-5 relative">
            <Image src= {rightIcon} fill alt="right arrow"/>
          </div>
        )}
    </button>
  )
}

export default CustomButton