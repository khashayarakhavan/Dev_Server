import { createSelector } from 'reselect';

const selectVegeloper = state => state.vegeloper;

export const selectMenuOpen = createSelector(
  [selectVegeloper],
  (pageState) => pageState.menuOpen
);
export const selectPopUpOpen = createSelector(
  [selectVegeloper],
  (pageState) => pageState.popUpOpen
);
export const selectRichText = createSelector(
  [selectVegeloper],
  (pageState) => pageState.emailRichText
);
