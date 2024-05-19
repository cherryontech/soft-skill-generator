import React from "react"
import { useLocation } from "react-router-dom"
import Footer from './Footer'
import logo from '../assets/logo.jpg'

const PageFooter: React.FC = () => {
    const location = useLocation()
    const hideFooterOnPaths: string[] = ['/screenerquestion1', '/screenerquestion2']
    const showFooter: boolean = !hideFooterOnPaths.includes(location.pathname)

    return showFooter ? <Footer title={logo}/> : null
}   

export default PageFooter