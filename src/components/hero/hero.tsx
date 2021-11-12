import { FC } from "react"

interface Props {
    title: string
    subtitle: string
}
export const Hero: FC<Props> = ({ title, subtitle }) => {
    return (
        <section className=''>
            <h1 className='text-8xl text-left font-bold'>{title}</h1>
            <p className='text-3xl text-left font-light mt-4'>{subtitle}</p>
        </section>
    )
}