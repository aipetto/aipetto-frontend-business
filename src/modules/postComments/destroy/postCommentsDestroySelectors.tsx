import { createSelector } from 'reselect';

const selectRaw = (state) => state.postComments.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const postCommentsDestroySelectors = {
  selectLoading,
};

export default postCommentsDestroySelectors;
