import { createSelector } from 'reselect';

const selectRaw = (state) => state.businessServicesPrices.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const businessServicesPricesViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default businessServicesPricesViewSelectors;
