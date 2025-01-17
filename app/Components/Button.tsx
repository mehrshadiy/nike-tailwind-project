import Image from "next/image";

type Props = {
    label: string;
    iconURL?: string;
}

export const Button = ({label, iconURL}: Props) => {
    return (
        <button
            className={'flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red'}>
            {
                label
            }
            {iconURL &&

            <Image
                src={`icons/${iconURL}`}
                alt={label}
                width={20}
                height={20}
            className={'ml-2 rounded-full w-5 h-5'}/>
            }
        </button>
    );
};