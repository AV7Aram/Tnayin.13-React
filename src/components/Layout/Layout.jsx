import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export const Layout = ({socialIcons, classIcons, infoIcons, products, footerInfo, footerIcons, footerSpan, footerA}) => {
    return (
        <div>
            <Header socialIcons={socialIcons} classIcons={classIcons} infoIcons={infoIcons}/>      
            <Outlet />
            <Footer footerInfo={footerInfo} footerIcons={footerIcons} footerSpan={footerSpan} footerA={footerA}/>
        </div>
    )
}
