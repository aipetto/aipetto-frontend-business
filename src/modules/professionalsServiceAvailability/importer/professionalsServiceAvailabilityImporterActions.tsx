import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/professionalsServiceAvailability/importer/professionalsServiceAvailabilityImporterSelectors';
import ProfessionalsServiceAvailabilityService from 'src/modules/professionalsServiceAvailability/professionalsServiceAvailabilityService';
import fields from 'src/modules/professionalsServiceAvailability/importer/professionalsServiceAvailabilityImporterFields';
import { i18n } from 'src/i18n';

const professionalsServiceAvailabilityImporterActions = importerActions(
  'PROFESSIONALSSERVICEAVAILABILITY_IMPORTER',
  selectors,
  ProfessionalsServiceAvailabilityService.import,
  fields,
  i18n('entities.professionalsServiceAvailability.importer.fileName'),
);

export default professionalsServiceAvailabilityImporterActions;