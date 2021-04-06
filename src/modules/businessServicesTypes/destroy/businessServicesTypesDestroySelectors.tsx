import { createSelector } from 'reselect';

const selectRaw = (state) => state.businessServicesTypes.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const businessServicesTypesDestroySelectors = {
  selectLoading,
};

export default businessServicesTypesDestroySelectors;
