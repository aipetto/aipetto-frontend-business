import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/petTypes/importer/petTypesImporterSelectors';
import PetTypesService from 'src/modules/petTypes/petTypesService';
import fields from 'src/modules/petTypes/importer/petTypesImporterFields';
import { i18n } from 'src/i18n';

const petTypesImporterActions = importerActions(
  'PETTYPES_IMPORTER',
  selectors,
  PetTypesService.import,
  fields,
  i18n('entities.petTypes.importer.fileName'),
);

export default petTypesImporterActions;