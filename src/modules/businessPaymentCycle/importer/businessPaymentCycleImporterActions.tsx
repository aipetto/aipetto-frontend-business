import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/businessPaymentCycle/importer/businessPaymentCycleImporterSelectors';
import BusinessPaymentCycleService from 'src/modules/businessPaymentCycle/businessPaymentCycleService';
import fields from 'src/modules/businessPaymentCycle/importer/businessPaymentCycleImporterFields';
import { i18n } from 'src/i18n';

const businessPaymentCycleImporterActions = importerActions(
  'BUSINESSPAYMENTCYCLE_IMPORTER',
  selectors,
  BusinessPaymentCycleService.import,
  fields,
  i18n('entities.businessPaymentCycle.importer.fileName'),
);

export default businessPaymentCycleImporterActions;