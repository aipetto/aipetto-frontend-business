import { createSelector } from 'reselect';

const selectRaw = (state) => state.newBusinessSurvey.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const newBusinessSurveyViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default newBusinessSurveyViewSelectors;
