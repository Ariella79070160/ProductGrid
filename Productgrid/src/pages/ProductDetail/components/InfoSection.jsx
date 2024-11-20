import { Accordin, AccordinContent, AccordinItem, AccordinTrigger } from "../../../components/ui/Accordin"

import { useProductDetailsContext } from "./ProductDetailsContext"

const InfoSection = () => {
    const { product } = useProductDetailsContext()
    const { info } = product

    return(
        <section className="mt-10">
            <Accordin>
                {info.map((item) => (
                    <AccordinItem key={item.title} id={item.title}>
                        <AccordinTrigger>{item.title}</AccordinTrigger>
                        <AccordinContent>
                            <ul className="ml-4 list-disc pl-2 text-neutral-600">
                                {item.description.map((des) => (
                                    <li key={des}>{des}</li>
                                ))}
                            </ul>
                        </AccordinContent>
                    </AccordinItem>
                ))}
            </Accordin>
        </section>
    )
}
export default InfoSection