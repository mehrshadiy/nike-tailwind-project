import Image from "next/image";
import {star} from "@/public/icons";

type Props = {
    imgURL: string
    customerName: string
    rating: number
    feedback: string
}

export const ReviewCard = ({imgURL, customerName, rating, feedback}: Props) => {
    return (
        <div className={'flex justify-center items-center flex-col'}>
            <Image src={imgURL} alt={customerName} width={120} height={120}
            className={'rounded-full object-cover'}/>
            <p className={'mt-6 max-w-sm text-center info-text'}>
                {feedback}
            </p>
            <div className={'mt-3 flex justify-center items-center gap-2'}>
                <Image src={star} alt={'rate'} width={24} height={24}
                       className={'object-contain m-0'}/>
                <p className={'text-xl font-montserrat text-slate-gray'}>
                    ({rating})
                </p>
            </div>
            <h3 className={'mt-1 font-palanquin text-3xl text-center font-bold'}>
                {customerName}
            </h3>
        </div>
    )
}