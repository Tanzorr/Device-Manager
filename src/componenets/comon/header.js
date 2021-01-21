import React from 'react'
import s from './comon.module.css'


const Header = () => {
    return <header className={s.header}>
        <div className="container">
            <div className="row justify-content-between">
                <nav className="navbar navbar-expand-sm bg-light navbar-light">
                    <form className="form-inline" action="#">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Device"/>
                        </div>
                    </form>
                </nav>
                <h1>Device Manager</h1>
            </div>
        </div>
    </header>
}

export default Header;