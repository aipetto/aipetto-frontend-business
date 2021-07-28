import { createSelector } from 'reselect';

const selectRaw = (state) => state.petExamination.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const petExaminationDestroySelectors = {
  selectLoading,
};

export default petExaminationDestroySelectors;
