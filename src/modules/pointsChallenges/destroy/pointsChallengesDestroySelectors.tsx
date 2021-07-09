import { createSelector } from 'reselect';

const selectRaw = (state) => state.pointsChallenges.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const pointsChallengesDestroySelectors = {
  selectLoading,
};

export default pointsChallengesDestroySelectors;
