import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/reservationAgenda/importer/reservationAgendaImporterSelectors';
import ReservationAgendaService from 'src/modules/reservationAgenda/reservationAgendaService';
import fields from 'src/modules/reservationAgenda/importer/reservationAgendaImporterFields';
import { i18n } from 'src/i18n';

const reservationAgendaImporterActions = importerActions(
  'RESERVATIONAGENDA_IMPORTER',
  selectors,
  ReservationAgendaService.import,
  fields,
  i18n('entities.reservationAgenda.importer.fileName'),
);

export default reservationAgendaImporterActions;