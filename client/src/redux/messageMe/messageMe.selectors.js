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
export const selectIsError = createSelector(
  [selectMessageMe],
  (pageState) => pageState.isError
);
export const selectIsComplete = createSelector(
  [selectMessageMe],
  (pageState) => pageState.isComplete
);
export const selectIsLoading = createSelector(
  [selectMessageMe],
  (pageState) => pageState.isLoading
);
