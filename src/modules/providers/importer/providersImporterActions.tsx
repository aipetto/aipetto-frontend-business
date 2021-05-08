import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/providers/importer/providersImporterSelectors';
import ProvidersService from 'src/modules/providers/providersService';
import fields from 'src/modules/providers/importer/providersImporterFields';
import { i18n } from 'src/i18n';

const providersImporterActions = importerActions(
  'PROVIDERS_IMPORTER',
  selectors,
  ProvidersService.import,
  fields,
  i18n('entities.providers.importer.fileName'),
);

export default providersImporterActions;