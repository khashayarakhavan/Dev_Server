import { createSelector } from 'reselect';

const selectMessageMe = state => state.messageMe;

export const selectCustomerCountry = createSelector(
  [selectMessageMe],
  (pageState) => pageState.customerCountry
);

export const selectRichTextMessageAsHTML = createSelector(
  [selectMessageMe],
  (pageState) => pageState.richTextMessageAsHTML
);
