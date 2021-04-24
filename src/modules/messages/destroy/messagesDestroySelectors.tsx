import { createSelector } from 'reselect';

const selectRaw = (state) => state.messages.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const messagesDestroySelectors = {
  selectLoading,
};

export default messagesDestroySelectors;
