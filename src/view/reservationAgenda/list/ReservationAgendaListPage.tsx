import React from 'react';
import { i18n } from 'src/i18n';
import ReservationAgendaListFilter from 'src/view/reservationAgenda/list/ReservationAgendaListFilter';
import ReservationAgendaListTable from 'src/view/reservationAgenda/list/ReservationAgendaListTable';
import ReservationAgendaListToolbar from 'src/view/reservationAgenda/list/ReservationAgendaListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ReservationAgendaListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.reservationAgenda.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.reservationAgenda.list.title')}
        </h1>
        <ReservationAgendaListToolbar />
        <ReservationAgendaListFilter />
        <ReservationAgendaListTable />
      </div>
    </>
  );
}

export default ReservationAgendaListPage;
