import { createSelector } from 'reselect';

const selectRaw = (state) => state.landingSurvey.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const landingSurveyDestroySelectors = {
  selectLoading,
};

export default landingSurveyDestroySelectors;
