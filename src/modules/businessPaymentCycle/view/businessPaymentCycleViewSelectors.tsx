import { createSelector } from 'reselect';

const selectRaw = (state) => state.businessPaymentCycle.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const businessPaymentCycleViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default businessPaymentCycleViewSelectors;
