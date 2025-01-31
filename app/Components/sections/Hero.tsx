'use client'

import {Button, ShoeCard} from "@/app/Components";
import {shoes, statistics} from "../../utils";
import Image, {StaticImageData} from "next/image";
import {SetStateAction, useState} from "react";
import {bigShoe1} from "@/public/images";
import {arrowRight} from "@/public/icons";

export const Hero = () => {

    const [bigShoeImage, setBigShoeImage] = useState(bigShoe1)

    return (
        <section
            id={'home'}
            className={'w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'}>
            <div
                className={'relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-lg:padding-x pt-28'}>
                <p className={'text-xl font-montserrat text-coral-red'}>
                    Our Summer Collections
                </p>
                <h1 className={'mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold '}>
                    <span className={'xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'}>
                        The New Arrival
                    </span>
                    <br/>
                    <span className={'text-coral-red inline-block mt-3'}>
                        Nike
                    </span> Shoes
                </h1>
                <p className={'font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'}>
                    Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
                </p>

                <Button
                    label={'Shop now'}
                iconURL={arrowRight}/>

                <div className={'flex justify-start items-start flex-wrap w-full mt-20 gap-16'}>
                    {
                        statistics.map((item, index) => (
                            <div key={index}>
                                <p className={'text-4xl font-palanquin font-bold'}>
                                    {item.value}
                                </p>
                                <p className={'leading-7 font-montserrat text-slate-gray'}>
                                    {item.label}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={'relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'}>
                <Image src={bigShoeImage} alt="Shoe collection" width={610} height={502}
                className={'object-contain relative z-10'}/>

                <div className={'flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'}>
                    {shoes.map((item, index) => (
                        <div key={index}>
                            <ShoeCard ImageURL={item} changeBigShoeImage={(shoe: SetStateAction<StaticImageData>)=>{setBigShoeImage(shoe)}} bigShoeImage={bigShoeImage} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};