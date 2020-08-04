import React from 'react'
import PropTypes from "prop-types";

import { Navbar } from '../'

import '../../scss/base.scss'

interface ILayoutProps {
    children: PropTypes.node.isRequired
}

const Layout: React.FC<ILayoutProps> = props => {
    const { children } = props
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}

export default Layout