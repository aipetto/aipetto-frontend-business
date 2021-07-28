import { createSelector } from 'reselect';

const selectRaw = (state) => state.petExamination.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const petExaminationViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default petExaminationViewSelectors;
