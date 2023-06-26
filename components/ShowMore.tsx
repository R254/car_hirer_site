'use client'

import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import {CustomButton} from "."
import { updateSearchParams } from "@/utils"

const ShowMore = ({pageNumber, isNext}:ShowMoreProps) => {
    const router = useRouter()

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10
        const newPathName = updateSearchParams("limit",`${newLimit}`)
        
        router.push(newPathName)
    }
  return (
    <>
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    title="Show More"
                    btnType="button"
                    containerStyles="bg-primary-blue text-white rounded-full"
                    handleClick={handleNavigation}
                />
            )}
        </div>
        <div className="w-full flex-center gap-2 mt-5">
            <CustomButton
                title= {`Page 1 - ${pageNumber}`}
                btnType="button"
                containerStyles="bg-primary-blue text-white rounded-lg"
            />
        </div>
    </>
  )
}

export default ShowMore