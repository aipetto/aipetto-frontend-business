import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/languages/importer/languagesImporterSelectors';
import LanguagesService from 'src/modules/languages/languagesService';
import fields from 'src/modules/languages/importer/languagesImporterFields';
import { i18n } from 'src/i18n';

const languagesImporterActions = importerActions(
  'LANGUAGES_IMPORTER',
  selectors,
  LanguagesService.import,
  fields,
  i18n('entities.languages.importer.fileName'),
);

export default languagesImporterActions;