import { createSelector } from 'reselect';

const selectRaw = (state) => state.businessServicesPrices.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const businessServicesPricesDestroySelectors = {
  selectLoading,
};

export default businessServicesPricesDestroySelectors;
