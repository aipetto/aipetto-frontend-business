import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/businessServicesTypes/importer/businessServicesTypesImporterSelectors';
import BusinessServicesTypesService from 'src/modules/businessServicesTypes/businessServicesTypesService';
import fields from 'src/modules/businessServicesTypes/importer/businessServicesTypesImporterFields';
import { i18n } from 'src/i18n';

const businessServicesTypesImporterActions = importerActions(
  'BUSINESSSERVICESTYPES_IMPORTER',
  selectors,
  BusinessServicesTypesService.import,
  fields,
  i18n('entities.businessServicesTypes.importer.fileName'),
);

export default businessServicesTypesImporterActions;