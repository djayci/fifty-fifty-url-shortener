import { FC } from "react"

interface props {
    customClasses: string
    onChangeHandler?: any,
    onClickHandler?: any,
    placeholder?: string,
    value?: string,
    type: string,
}

export const Input: FC<props> = ({ type, placeholder, onChangeHandler, onClickHandler, customClasses, value }) => {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            className={`rounded outline-none transition-all ${customClasses}`}
            onChange={(e) => onChangeHandler && onChangeHandler(e)}
            onClick={(e) => onClickHandler && onClickHandler(e)} />
    )
}