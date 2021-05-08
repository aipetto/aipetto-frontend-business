import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/vaccineTypes/importer/vaccineTypesImporterSelectors';
import VaccineTypesService from 'src/modules/vaccineTypes/vaccineTypesService';
import fields from 'src/modules/vaccineTypes/importer/vaccineTypesImporterFields';
import { i18n } from 'src/i18n';

const vaccineTypesImporterActions = importerActions(
  'VACCINETYPES_IMPORTER',
  selectors,
  VaccineTypesService.import,
  fields,
  i18n('entities.vaccineTypes.importer.fileName'),
);

export default vaccineTypesImporterActions;