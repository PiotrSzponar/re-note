import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoIcon from 'assets/icons/logo.svg';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
    width: 150px;
    height: 100vh;
    padding: 25px 0;
    position: fixed;
    left: 0;
    top: 0;
    background-color: ${({ activeColor, theme }) =>
        activeColor ? theme[activeColor] : theme.notes};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
    display: block;
    width: 70px;
    height: 70px;
    background-image: url(${logoIcon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 80%;
    border: none;
    margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
    margin-top: auto;
`;

const StyledLinksList = styled.ul`
    list-style: none;
`;

const Sidebar = ({ pageContext }) => (
    <StyledWrapper activeColor={pageContext}>
        <StyledLogoLink to="/" />
        <StyledLinksList>
            <li>
                <ButtonIcon
                    as={NavLink}
                    to="/notes"
                    icon={penIcon}
                    activeclass="active"
                />
            </li>
            <li>
                <ButtonIcon
                    as={NavLink}
                    to="/twitters"
                    icon={twitterIcon}
                    activeclass="active"
                />
            </li>
            <li>
                <ButtonIcon
                    as={NavLink}
                    to="/articles"
                    icon={bulbIcon}
                    activeclass="active"
                />
            </li>
        </StyledLinksList>
        <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} />
    </StyledWrapper>
);

Sidebar.propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
    pageContext: 'notes',
};

export default withContext(Sidebar);
