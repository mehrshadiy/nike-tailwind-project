import {services} from "@/app/utils";
import {ServiceCard} from "@/app/Components";

export const Services = () => {
    return (
        <section className={'max-container flex justify-center flex-wrap gap-9'}>
            {
                services.map((item) => {
                    return <ServiceCard key={item.label} {...item} />
            })
            }
        </section>
    )
}