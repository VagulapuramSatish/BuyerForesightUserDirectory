import {NavBar, LogoContainer, CompanyLogo} from './styledComponents'

const Header = () => {
  return (
    <NavBar>
      <LogoContainer>
        <CompanyLogo
          src="https://res.cloudinary.com/di7eqlvbb/image/upload/v1774436186/Screenshot_2026-03-25_at_4.23.28_PM_pqyiaj.png"
          alt="company logo"
        />
      </LogoContainer>
    </NavBar>
  )
}

export default Header
