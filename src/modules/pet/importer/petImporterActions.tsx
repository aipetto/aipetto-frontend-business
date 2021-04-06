import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/pet/importer/petImporterSelectors';
import PetService from 'src/modules/pet/petService';
import fields from 'src/modules/pet/importer/petImporterFields';
import { i18n } from 'src/i18n';

const petImporterActions = importerActions(
  'PET_IMPORTER',
  selectors,
  PetService.import,
  fields,
  i18n('entities.pet.importer.fileName'),
);

export default petImporterActions;