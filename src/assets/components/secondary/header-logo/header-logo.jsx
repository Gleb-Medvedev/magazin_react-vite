import './header-logo.css';

export function HeaderLogo() {
    return (
        <div className="header-logo">
            <div className="header-logo__wrapper">
                <a href="#" className="header-logo__link header-logo__title" title="Вернуться на главную страницу">
                    игровой
                </a>
                <a href="#" className="header-logo__link header-logo__address" title="Посмотреть на карте">
                <address>
                    <span className="header-logo__address-text">симферополь,</span>
                    <span className="header-logo__address-text">желябова 30</span>
                </address>
                </a>
            </div>
        </div>
    )
}