import { createSelector } from 'reselect';

const selectRaw = (state) => state.messages.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const messagesViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default messagesViewSelectors;
