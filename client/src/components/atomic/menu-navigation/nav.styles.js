import styled from 'styled-components';

import {respond } from '../../../design/responsive';

export const NavContainer = styled.div`
    ${respond.mobile.large`
    display: none;
    `}
`;