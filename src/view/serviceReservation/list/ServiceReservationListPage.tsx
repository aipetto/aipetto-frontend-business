import React from 'react';
import { i18n } from 'src/i18n';
import ServiceReservationListFilter from 'src/view/serviceReservation/list/ServiceReservationListFilter';
import ServiceReservationListTable from 'src/view/serviceReservation/list/ServiceReservationListTable';
import ServiceReservationListToolbar from 'src/view/serviceReservation/list/ServiceReservationListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ServiceReservationListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/network'],
          [i18n('entities.serviceReservation.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.serviceReservation.list.title')}
        </h1>
        <ServiceReservationListToolbar />
        <ServiceReservationListFilter />
        <ServiceReservationListTable />
      </div>
    </>
  );
}

export default ServiceReservationListPage;
