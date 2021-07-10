import { createSelector } from 'reselect';

const selectRaw = (state) => state.postCategories.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const postCategoriesDestroySelectors = {
  selectLoading,
};

export default postCategoriesDestroySelectors;
