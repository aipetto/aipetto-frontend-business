import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/businessServicesPrices/importer/businessServicesPricesImporterSelectors';
import BusinessServicesPricesService from 'src/modules/businessServicesPrices/businessServicesPricesService';
import fields from 'src/modules/businessServicesPrices/importer/businessServicesPricesImporterFields';
import { i18n } from 'src/i18n';

const businessServicesPricesImporterActions = importerActions(
  'BUSINESSSERVICESPRICES_IMPORTER',
  selectors,
  BusinessServicesPricesService.import,
  fields,
  i18n('entities.businessServicesPrices.importer.fileName'),
);

export default businessServicesPricesImporterActions;