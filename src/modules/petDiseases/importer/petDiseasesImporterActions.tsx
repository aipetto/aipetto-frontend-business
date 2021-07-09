import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/petDiseases/importer/petDiseasesImporterSelectors';
import PetDiseasesService from 'src/modules/petDiseases/petDiseasesService';
import fields from 'src/modules/petDiseases/importer/petDiseasesImporterFields';
import { i18n } from 'src/i18n';

const petDiseasesImporterActions = importerActions(
  'PETDISEASES_IMPORTER',
  selectors,
  PetDiseasesService.import,
  fields,
  i18n('entities.petDiseases.importer.fileName'),
);

export default petDiseasesImporterActions;