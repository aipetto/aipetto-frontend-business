import { createSelector } from 'reselect';

const selectRaw = (state) => state.petPhotos.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const petPhotosDestroySelectors = {
  selectLoading,
};

export default petPhotosDestroySelectors;
