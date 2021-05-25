import { createSelector } from 'reselect';

const selectRaw = (state) => state.landingSurvey.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const landingSurveyViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default landingSurveyViewSelectors;
