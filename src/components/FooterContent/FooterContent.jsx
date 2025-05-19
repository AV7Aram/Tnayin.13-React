import React from 'react'
import style from './FooterContent.module.css'

export const FooterContent = ({ footerIcons, footerSpan, footerA }) => {
    return (
        <>
            {
                footerIcons.map((icon, index) => {
                    return (
                        <div className={style.colLg3} key={index}>
                            <div className={style.footerBenefits}>
                                <i className={icon.title}></i>
                                <span>{footerSpan[index]}</span>
                                {
                                    (index === 1 || index === 3) ? (
                                        <a href="#">{footerA[index]}</a>
                                    ) : (
                                        footerA[index]
                                    )
                                }
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
