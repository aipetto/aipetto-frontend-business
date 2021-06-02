import { createSelector } from 'reselect';

const selectRaw = (state) => state.newBusinessSurvey.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const newBusinessSurveyDestroySelectors = {
  selectLoading,
};

export default newBusinessSurveyDestroySelectors;
