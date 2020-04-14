import React from 'react'

export default function Navbar({ title }) {
    return (
        <nav className="navbar navbar-light blue lighten-4">
            <span className="navbar-brand">{title}</span>
        </nav>
    )
}
