import { createSelector } from 'reselect';

const selectRaw = (state) => state.petPhotos.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const petPhotosViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default petPhotosViewSelectors;
