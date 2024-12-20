import './header.css';
import { HeaderLogo } from '../../secondary/header-logo/header-logo';
import { CircleButton } from '../../secondary/circle-button/circle-button';

export function HeaderComponent() {
    return (
        <header className='header header-section section'>
            <div className="container">
                <div className="header__top-bar header-bar top-bar">
                    <div className="top-bar__logo-container">
                        <HeaderLogo />
                    </div>

                    <div className="top-bar__actions header-bar__actions">
                        <CircleButton title={'Профиль'} className={'header__action-btn profile-btn'}>
                            <svg aria-hidden="true" viewBox='3 3 18 18'>
                                <path d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z">
                                </path>
                            </svg>
                        </CircleButton>
                        <CircleButton title={'Корзина'} className={'header__action-btn cart-btn'}>
                            <svg aria-hidden="true" viewBox="2.5 2 20 20">
                                <path d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"></path>
                            </svg>
                        </CircleButton>
                    </div>



                </div>
                <div className="header__bottom-bar header-bar bottom-bar">
                    <div className="bottom-bar__actions header-bar__actions">
                        <CircleButton title={'Поиск'} className={'header__action-btn search-btn'}>
                            <svg aria-hidden="true" viewBox="0.5 1 24 24" >
                                <path strokeLinecap="round" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"></path>
                            </svg>
                        </CircleButton>
                        <CircleButton title={'Меню'} className={'header__action-btn menu-btn'}>
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