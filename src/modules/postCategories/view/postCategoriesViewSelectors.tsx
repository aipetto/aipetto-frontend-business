import { createSelector } from 'reselect';

const selectRaw = (state) => state.postCategories.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const postCategoriesViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default postCategoriesViewSelectors;
