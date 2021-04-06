import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/serviceReservation/importer/serviceReservationImporterSelectors';
import ServiceReservationService from 'src/modules/serviceReservation/serviceReservationService';
import fields from 'src/modules/serviceReservation/importer/serviceReservationImporterFields';
import { i18n } from 'src/i18n';

const serviceReservationImporterActions = importerActions(
  'SERVICERESERVATION_IMPORTER',
  selectors,
  ServiceReservationService.import,
  fields,
  i18n('entities.serviceReservation.importer.fileName'),
);

export default serviceReservationImporterActions;