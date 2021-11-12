import { FC } from "react"

interface Props {
    title: string
    subtitle: string
}
export const Hero: FC<Props> = ({ title, subtitle }) => {
    return (
        <section className=''>
            <h1 className='text-7xl text-left font-bold'>{title}</h1>
            <p className='text-2xl text-left font-light mt-2'>{subtitle}</p>
        </section>
    )
}