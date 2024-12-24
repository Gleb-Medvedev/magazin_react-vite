import './header.css';
import { useState } from 'react';
import { HeaderLogo } from '../../secondary/header-logo/header-logo';
import { CircleButton } from '../../secondary/circle-button/circle-button';

export function HeaderComponent() {
    const [buttonActiveIndex, setButtonActiveIndex] = useState(null);
    const [headerContactsVisible, setHeaderContactsVisible] = useState(false);

    function headerActionClassListTiggle(id) {
        setButtonActiveIndex(buttonActiveIndex === id ? null : id);
    }

    return (
        <header className='header header-section section'>
            <div className="container">
                <div className="header__top-bar header-bar top-bar">
                    <div className="top-bar__logo-container">
                        <HeaderLogo />
                    </div>

                    <div className="top-bar__actions header-bar__actions">
                        {/* <CircleButton title={'Профиль'} className={'header__action-btn profile-btn'} onClick={() => buttonClassListToggle(1)} current={buttonActiveIndex === 1 ? 'active' : ''}> */}
                        <CircleButton title={'Профиль'} className={buttonActiveIndex === 1 ? 'header__action-btn profile-btn active' : 'header__action-btn profile-btn'} onClick={() => headerActionClassListTiggle(1)}>
                            <svg aria-hidden="true" viewBox='3 3 18 18'>
                                <path d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z">
                                </path>
                            </svg>
                        </CircleButton>
                        {/* <CircleButton title={'Корзина'} className={'header__action-btn cart-btn'} onClick={() => buttonClassListToggle(2)} current={buttonActiveIndex === 2 ? 'active' : ''}> */}
                        <CircleButton title={'Корзина'} className={buttonActiveIndex === 2 ? 'header__action-btn cart-btn active' : 'header__action-btn cart-btn'} onClick={() => headerActionClassListTiggle(2)}>
                            <svg aria-hidden="true" viewBox="2.5 2 20 20">
                                <path d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"></path>
                            </svg>
                        </CircleButton>
                    </div>
                </div>
                <div className="header__bottom-bar header-bar bottom-bar">
                    <div className={`header__action-btn contacts${headerContactsVisible ? ' in-view' : ''}`}>
                        <CircleButton title={'Открыть список контактов'} className={'contacts-btn'} onClick={() => setHeaderContactsVisible(prev => !prev)} />
                        <div className="contacts-container">
                            <div className="contacts-container_movable">
                                <div className="contacts__icon">
                                    <svg className="contacts__icon-svg" aria-hidden="true" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"></path>
                                    </svg>
                                </div>
                                <div className="contacts__icon">
                                    <svg className="contacts__icon-svg" aria-hidden="true" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6m0 12L6 6"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-bar__actions header-bar__actions">
                        {/* <CircleButton title={'Поиск'} className={'header__action-btn search-btn'} onClick={() => buttonClassListToggle(3)} current={buttonActiveIndex === 3 ? 'active' : ''}> */}
                        <CircleButton title={'Поиск'} className={buttonActiveIndex === 3 ? 'header__action-btn search-btn active' : 'header__action-btn search-btn'} onClick={() => headerActionClassListTiggle(3)}>
                            <svg aria-hidden="true" viewBox="0.5 1 24 24" >
                                <path strokeLinecap="round" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"></path>
                            </svg>
                        </CircleButton>
                        {/* <CircleButton title={'Меню'} className={'header__action-btn menu'} onClick={() => buttonClassListToggle(4)} current={buttonActiveIndex === 4 ? 'active' : ''}> */}
                        <CircleButton title={'Меню'} className={buttonActiveIndex === 4 ? 'header__action-btn menu active' : 'header__action-btn menu'} onClick={() => headerActionClassListTiggle(4)}>
                            <div className="bottom-bar__menu">
                                <div className="bottom-bar__menu-row"></div>
                                <div className="bottom-bar__menu-row"></div>
                                <div className="bottom-bar__menu-row"></div>
                            </div>
                        </CircleButton>
                    </div>
                </div>
            </div>
        </header>
    )
}