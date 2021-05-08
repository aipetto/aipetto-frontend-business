import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/petVaccines/importer/petVaccinesImporterSelectors';
import PetVaccinesService from 'src/modules/petVaccines/petVaccinesService';
import fields from 'src/modules/petVaccines/importer/petVaccinesImporterFields';
import { i18n } from 'src/i18n';

const petVaccinesImporterActions = importerActions(
  'PETVACCINES_IMPORTER',
  selectors,
  PetVaccinesService.import,
  fields,
  i18n('entities.petVaccines.importer.fileName'),
);

export default petVaccinesImporterActions;