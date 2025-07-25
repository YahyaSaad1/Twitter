'use client'

export default function Mid(){
    return(
        <div className="border-x border-white w-full">
            <div className="flex w-full cursor-pointer border-b-1">
                <div className="p-5 group bg-hover transition-all duration-250 flex-1 text-center">
                    <span className="relative text-neutral-400 pb-6 group-hover:text-white transition-all duration-250">
                        Following
                        <span className="absolute bottom-0 left-0 w-full h-[5px] bg-blue-500 rounded-full"></span>
                    </span>
                </div>
                <div className="p-5 group bg-hover transition-all duration-250 flex-1 text-center">
                    <span className="relative text-neutral-400 pb-6 group-hover:text-white transition-all duration-250">
                        Following
                        <span className="absolute bottom-0 left-0 w-full h-[5px] bg-blue-500 rounded-full"></span>
                    </span>
                </div>
            </div>

            <div className="flex w-full cursor-pointer border-b-1">
                
            </div>
        </div>
    )
}