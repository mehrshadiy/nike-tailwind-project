import Image from "next/image";

type Props = {
    label: string;
    iconURL?: string;
    backgroundColor?: string
    borderColor?: string
    textColor?: string
    fullWidth?: boolean
}

export const Button = ({label, iconURL, backgroundColor, borderColor, textColor, fullWidth}: Props) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full 
            ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red  text-white border-coral-red '}
             ${fullWidth && 'w-full'}`}>
            {
                label
            }
            {iconURL &&

                <Image
                    src={iconURL}
                    alt={label}
                    width={20}
                    height={20}
                    className={'ml-2 rounded-full w-5 h-5'}/>
            }
        </button>
    );
};