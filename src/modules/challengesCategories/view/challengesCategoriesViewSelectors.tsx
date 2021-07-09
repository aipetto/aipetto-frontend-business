import { createSelector } from 'reselect';

const selectRaw = (state) => state.challengesCategories.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const challengesCategoriesViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default challengesCategoriesViewSelectors;
