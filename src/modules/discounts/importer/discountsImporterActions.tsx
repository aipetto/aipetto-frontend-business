import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/discounts/importer/discountsImporterSelectors';
import DiscountsService from 'src/modules/discounts/discountsService';
import fields from 'src/modules/discounts/importer/discountsImporterFields';
import { i18n } from 'src/i18n';

const discountsImporterActions = importerActions(
  'DISCOUNTS_IMPORTER',
  selectors,
  DiscountsService.import,
  fields,
  i18n('entities.discounts.importer.fileName'),
);

export default discountsImporterActions;