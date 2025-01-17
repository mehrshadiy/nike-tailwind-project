"use client";

import Image from "next/image";

export const ShoeCard = ({ ImageURL, changeBigShoeImage, bigShoeImage }) => {
    const clickHandler = () => {
        if (bigShoeImage !== ImageURL.bigShoe) {
            changeBigShoeImage(ImageURL.bigShoe);
        }
    };

    return (
        <div
            className={`border-2 rounded-xl ${
                bigShoeImage === ImageURL.bigShoe ? 'border-coral-red' : 'border-transparent'
            } cursor-pointer max-sm:flex-1`}
            onClick={clickHandler}
        >
            <div>
                <Image
                    src={ImageURL.thumbnail}
                    alt="shoe collection"
                    width={127}
                    height={103}
                    className="object-contain justify-center items-center bg-card bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4"
                />
            </div>
        </div>
    );
};
