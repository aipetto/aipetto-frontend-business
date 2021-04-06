import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/place/importer/placeImporterSelectors';
import PlaceService from 'src/modules/place/placeService';
import fields from 'src/modules/place/importer/placeImporterFields';
import { i18n } from 'src/i18n';

const placeImporterActions = importerActions(
  'PLACE_IMPORTER',
  selectors,
  PlaceService.import,
  fields,
  i18n('entities.place.importer.fileName'),
);

export default placeImporterActions;