import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/petPhotos/importer/petPhotosImporterSelectors';
import PetPhotosService from 'src/modules/petPhotos/petPhotosService';
import fields from 'src/modules/petPhotos/importer/petPhotosImporterFields';
import { i18n } from 'src/i18n';

const petPhotosImporterActions = importerActions(
  'PETPHOTOS_IMPORTER',
  selectors,
  PetPhotosService.import,
  fields,
  i18n('entities.petPhotos.importer.fileName'),
);

export default petPhotosImporterActions;