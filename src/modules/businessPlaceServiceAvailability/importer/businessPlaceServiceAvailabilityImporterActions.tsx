import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/businessPlaceServiceAvailability/importer/businessPlaceServiceAvailabilityImporterSelectors';
import BusinessPlaceServiceAvailabilityService from 'src/modules/businessPlaceServiceAvailability/businessPlaceServiceAvailabilityService';
import fields from 'src/modules/businessPlaceServiceAvailability/importer/businessPlaceServiceAvailabilityImporterFields';
import { i18n } from 'src/i18n';

const businessPlaceServiceAvailabilityImporterActions = importerActions(
  'BUSINESSPLACESERVICEAVAILABILITY_IMPORTER',
  selectors,
  BusinessPlaceServiceAvailabilityService.import,
  fields,
  i18n('entities.businessPlaceServiceAvailability.importer.fileName'),
);

export default businessPlaceServiceAvailabilityImporterActions;