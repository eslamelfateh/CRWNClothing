import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg'

import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles'

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer >
      <LogoContainer className='logo-container' to="/">
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer className="options">
        <OptionLink className="option" to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink className="option" to='/contact'>
          CONTACT
        </OptionLink>
        {
          currentUser ?
            <OptionLink as='div' className='option' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
            :
            <OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      {
        hidden ? null : <CartDropdown />
      }
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);