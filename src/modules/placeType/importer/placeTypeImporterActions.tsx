import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/placeType/importer/placeTypeImporterSelectors';
import PlaceTypeService from 'src/modules/placeType/placeTypeService';
import fields from 'src/modules/placeType/importer/placeTypeImporterFields';
import { i18n } from 'src/i18n';

const placeTypeImporterActions = importerActions(
  'PLACETYPE_IMPORTER',
  selectors,
  PlaceTypeService.import,
  fields,
  i18n('entities.placeType.importer.fileName'),
);

export default placeTypeImporterActions;