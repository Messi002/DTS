import './style.css';
import { CiSearch } from 'react-icons/ci';
import { RxEnvelopeClosed } from 'react-icons/rx';
import { BsBell } from 'react-icons/bs';
import photo from '../../../assets/images/userImg.png'
import React from 'react'

export default function HeaderBar(props) {
  return (
    <>
     {/* <Header showGreetings={true} showWelcome={true} bigText="Hello, Sobuj" smallText = "Welcome Back!"/> */}

     <header className="header">
                    <div className="header__hello">
                        {props.showGreetings && <p className="header__greetings">{props.bigText}</p>}
                        {props.showWelcome && <span className="header__welcome">{props.smallText}</span>}
                    </div>

                    <div className="searchAndHeader">
                        {/* search section */}
                        <form action="#" className="search">
                            <input type="search" className="search__input" placeholder="Search..." />
                            <button className="search__button">  <CiSearch style={{ opacity: "0.4" }} /></button>
                        </form>

                        {/* user's section here */}
                        <nav className="user-nav">
                            <div className="user-nav__icon-box">
                                <BsBell className="bell" />
                            </div>
                            <div className="user-nav__icon-box">
                                <RxEnvelopeClosed className="envelope" />
                                <span className="user-nav_notification"></span>
                            </div>
                            <div className="user-nav__user">
                                <img src={photo} alt="user" className="user-nav__user-photo" />
                                <span className="user-nav__user-name">Soumitro Sobuj</span>
                            </div>
                        </nav>
                    </div>
                </header>

    </>
  )
}


const Header = (props) => {
    return (
        <header className="header">
                    <div className="header__hello">
                        {props.showGreetings && <p className="header__greetings">{props.bigText}</p>}
                        {props.showWelcome && <span className="header__welcome">{props.smallText}</span>}
                    </div>

                    <div className="searchAndHeader">
                        {/* search section */}
                        <form action="#" className="search">
                            <input type="search" className="search__input" placeholder="Search..." />
                            <button className="search__button">  <CiSearch style={{ opacity: "0.4" }} /></button>
                        </form>

                        {/* user's section here */}
                        <nav className="user-nav">
                            <div className="user-nav__icon-box">
                                <BsBell className="bell" />
                            </div>
                            <div className="user-nav__icon-box">
                                <RxEnvelopeClosed className="envelope" />
                                <span className="user-nav_notification"></span>
                            </div>
                            <div className="user-nav__user">
                                <img src={photo} alt="user" className="user-nav__user-photo" />
                                <span className="user-nav__user-name">Soumitro Sobuj</span>
                            </div>
                        </nav>
                    </div>
                </header>
    );
}