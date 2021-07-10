import { createSelector } from 'reselect';

const selectRaw = (state) => state.pointsChallenges.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const pointsChallengesViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default pointsChallengesViewSelectors;
