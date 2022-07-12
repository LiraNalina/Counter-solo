import React from "react";
import s from './Tablo.module.css'

type ButtonPropsType = {
    incrementNumber: () => void
    resetNumber: () => void
    incrementDigit: number

}
export const Tablo = (props: ButtonPropsType) => {

    const onClickButtonHandler = () => {
        props.incrementNumber()
    }

    const onClickResetHandler = () => {
        props.resetNumber()
    }

    return (
        <div>

            <div className={s.tablo}><span className={props.incrementDigit < 5 ? s.digit : s.wrongDigit}>{props.incrementDigit}</span></div>

            <div className={s.buttons}>

                <button
                    className={s.inc}
                    onClick={onClickButtonHandler}
                    disabled={props.incrementDigit === 5}
                >inc
                </button>

                <button
                    disabled={props.incrementDigit < 5}
                    className={s.reset}
                    onClick={onClickResetHandler}>reset
                </button>
            </div>
        </div>
    )
}
