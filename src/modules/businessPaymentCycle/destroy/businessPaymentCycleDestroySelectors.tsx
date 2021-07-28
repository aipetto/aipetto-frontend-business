import { createSelector } from 'reselect';

const selectRaw = (state) => state.businessPaymentCycle.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const businessPaymentCycleDestroySelectors = {
  selectLoading,
};

export default businessPaymentCycleDestroySelectors;
