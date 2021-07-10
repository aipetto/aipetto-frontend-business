import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/pointsChallenges/importer/pointsChallengesImporterSelectors';
import PointsChallengesService from 'src/modules/pointsChallenges/pointsChallengesService';
import fields from 'src/modules/pointsChallenges/importer/pointsChallengesImporterFields';
import { i18n } from 'src/i18n';

const pointsChallengesImporterActions = importerActions(
  'POINTSCHALLENGES_IMPORTER',
  selectors,
  PointsChallengesService.import,
  fields,
  i18n('entities.pointsChallenges.importer.fileName'),
);

export default pointsChallengesImporterActions;