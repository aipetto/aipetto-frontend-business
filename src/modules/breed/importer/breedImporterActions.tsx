import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/breed/importer/breedImporterSelectors';
import BreedService from 'src/modules/breed/breedService';
import fields from 'src/modules/breed/importer/breedImporterFields';
import { i18n } from 'src/i18n';

const breedImporterActions = importerActions(
  'BREED_IMPORTER',
  selectors,
  BreedService.import,
  fields,
  i18n('entities.breed.importer.fileName'),
);

export default breedImporterActions;