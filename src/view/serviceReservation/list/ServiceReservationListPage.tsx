import React from 'react';
import { i18n } from 'src/i18n';
import {Link} from 'react-router-dom';
import ServiceReservationListFilter from 'src/view/serviceReservation/list/ServiceReservationListFilter';
import ServiceReservationListTable from 'src/view/serviceReservation/list/ServiceReservationListTable';
import ServiceReservationListToolbar from 'src/view/serviceReservation/list/ServiceReservationListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ServiceReservationListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/dashboard'],
          [i18n('entities.serviceReservation.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.serviceReservation.list.title')}
        </h1>
          <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 xl:w-1/3 p-6">
                  <Link to="/service-reservation">
                      <div
                          className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                          <div className="flex flex-row items-center">
                              <div className="flex-shrink pr-4">
                                  <div className="rounded-full p-5 bg-green-600"><i className="fa fa-wallet fa-2x fa-inverse"></i></div>
                              </div>
                              <div className="flex-1 text-right md:text-center">
                                  <h5 className="font-bold uppercase text-gray-600">Reservas Confirmadas</h5>
                                  <h3 className="font-bold text-3xl"> 35 <span className="text-green-500"><i
                                      className="fas fa-caret-up"></i></span></h3>
                              </div>
                          </div>
                      </div>
                  </Link>
              </div>
              <div className="w-full md:w-1/3 xl:w-1/3 p-6">
                  <Link to="/service-reservation">
                      <div
                          className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                          <div className="flex flex-row items-center">
                              <div className="flex-shrink pr-4">
                                  <div className="rounded-full p-5 bg-yellow-600"><i className="fas fa-user-plus fa-2x fa-inverse"></i>
                                  </div>
                              </div>
                              <div className="flex-1 text-right md:text-center">
                                  <h5 className="font-bold uppercase text-gray-600">Reservas Esperando confirmar</h5>
                                  <h3 className="font-bold text-3xl">2<span className="text-yellow-600"><i
                                      className="fas fa-caret-up"></i></span></h3>
                              </div>
                          </div>
                      </div>
                  </Link>
              </div>
              <div className="w-full md:w-1/3 xl:w-1/3 p-6">
                  <Link to="/service-reservation">
                      <div
                          className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                          <div className="flex flex-row items-center">
                              <div className="flex-shrink pr-4">
                                  <div className="rounded-full p-5 bg-blue-600"><i className="fas fa-server fa-2x fa-inverse"></i></div>
                              </div>
                              <div className="flex-1 text-right md:text-center">
                                  <h5 className="font-bold uppercase text-gray-600">Pedidos de Taxi Pet</h5>
                                  <h3 className="font-bold text-3xl">4</h3>
                              </div>
                          </div>
                      </div>
                  </Link>
              </div>

          </div>
        <ServiceReservationListToolbar />
        <ServiceReservationListFilter />
        <ServiceReservationListTable />
      </div>
    </>
  );
}

export default ServiceReservationListPage;
