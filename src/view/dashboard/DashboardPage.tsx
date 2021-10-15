import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PermissionChecker from 'src/modules/auth/permissionChecker';
import {useDispatch, useSelector} from "react-redux";
import {default as authSelectors, default as selectors} from "../../modules/auth/authSelectors";
import dashSelectors from "../../modules/dashboard/dashboardSelectors";
import layoutSelectors from "../../modules/layout/layoutSelectors";
import layoutActions from "../../modules/layout/layoutActions";
import DashboardBarChart from 'src/view/dashboard/DashboardBarChart';
import DashboardDoughnutChart from 'src/view/dashboard/DashboardDoughnutChart';
import {faBarcode, faBook, faCalendarCheck, faMapMarkedAlt, faStore} from "@fortawesome/free-solid-svg-icons";
import {i18n} from "../../i18n";
import Zendesk from "react-zendesk";

const ZENDESK_KEY = "1363fd8f-edc4-4fae-ba20-1a85a17887ee";

const DashboardPage = (props) => {

  const hasPermissionToAccessGraph = useSelector(
    dashSelectors.selectPermissionToRead,
  );

  const dispatch = useDispatch();

  const logoUrl = useSelector(selectors.selectLogoUrl);

  const currentTenant = useSelector(
      authSelectors.selectCurrentTenant,
  );

  const currentUser = useSelector(
      authSelectors.selectCurrentUser,
  );

  const menuVisible = useSelector(
      layoutSelectors.selectMenuVisible,
  );

  const doToggleMenuIfSmall = () => {
    if (window.innerWidth < 640) {
      dispatch(layoutActions.doToggleMenu());
    }
  };

  const permissionChecker = new PermissionChecker(
      currentTenant,
      currentUser,
  );

  const match = (permission) => {
    return permissionChecker.match(permission);
  };

  const lockedForCurrentPlan = (permission) => {
    return permissionChecker.lockedForCurrentPlan(
        permission,
    );
  };

  const displayDashboardGraph = () => {
    if (hasPermissionToAccessGraph) {
      return (
          <div className="flex py-3">
            <div className="grid w-full grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 m-4">
              <div>
                <div className="bg-white dark:bg-gray-800 p-2 border dark:border-gray-600 rounded">
                  <DashboardDoughnutChart />
                </div>
              </div>
              <div>
                <div className="bg-white dark:bg-gray-800 p-2 border dark:border-gray-600 rounded">
                  <DashboardBarChart />
                </div>
              </div>
            </div>
          </div>
      );
    }
  }

  return (
      <>
        {displayDashboardGraph()}

        <div className="container mx-auto w-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
                 style={{left: "50%"}}></div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <Link className='flex flex-col items-center w-40 h-32 border border-indigo-50 hover:bg-green-300 hover:text-black rounded-2xl cursor-pointer py-2 bg-white'
                      onClick={doToggleMenuIfSmall}
                      key='/business-list'
                      to='/business-list'
                >
                  <FontAwesomeIcon
                      className="w-5 h-40 fa-2x"
                      icon={faStore}
                  />
                  <span className="text-base md:text-lg text-black-800 text-sm">
                    {i18n('entities.business.menu')}
                </span>
                </Link>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Verifique os dados do seu negócio
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
              </div>
              <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <Link className='flex flex-col items-center w-40 h-32 border border-indigo-50 hover:bg-green-300 hover:text-black rounded-2xl cursor-pointer py-2 bg-white'
                      onClick={doToggleMenuIfSmall}
                      key='/place'
                      to='/place'
                >
                  <FontAwesomeIcon
                      className="w-5 h-40 fa-2x"
                      icon={faMapMarkedAlt}
                  />
                  <span className="text-base md:text-lg text-black-800 text-sm">
                    {i18n('entities.place.menu')}
                </span>
                </Link>
                <p className="text-sm font-medium leading-snug tracking-wide text-black-200 text-opacity-100">
                  Cadastre seus pontos de atendimento
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <Link className='flex flex-col items-center w-40 h-32 border border-indigo-50 hover:bg-green-300 hover:text-black rounded-2xl cursor-pointer py-2 bg-white'
                      onClick={doToggleMenuIfSmall}
                      key='/business-services-prices'
                      to='/business-services-prices'
                >
                  <FontAwesomeIcon
                      className="w-5 h-40 fa-2x"
                      icon={faBarcode}
                  />
                  <span className="text-base md:text-lg text-black-800 text-sm">
                    {i18n('entities.businessServicesPrices.menu')}
                </span>
                </Link>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Agregue os serviços que apareceram para o usuário reservar
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
              </div>
              <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <Link className='flex flex-col items-center w-40 h-32 border border-indigo-50 hover:bg-green-300 hover:text-black rounded-2xl cursor-pointer py-2 bg-white'
                      onClick={doToggleMenuIfSmall}
                      key='/business-place-service-availability'
                      to='/business-place-service-availability'
                >
                  <FontAwesomeIcon
                      className="w-5 h-40 fa-2x"
                      icon={faCalendarCheck}
                  />
                  <span className="text-base md:text-lg text-black-800 text-sm">
                    {i18n('entities.businessPlaceServiceAvailability.menu')}
                </span>
                </Link>
                <p className="text-sm font-medium p-2 leading-snug tracking-wide text-black-400 text-opacity-100">
                  Defina as datas e horários disponíveis para reserva para cada serviço
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
            </div>
            <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <Link className='flex flex-col items-center w-40 h-32 border border-indigo-50 hover:bg-green-300 hover:text-black rounded-2xl cursor-pointer py-2 bg-white'
                    onClick={doToggleMenuIfSmall}
                    key='/service-reservation'
                    to='/service-reservation'
              >
                <FontAwesomeIcon
                    className="w-5 h-40 fa-2x"
                    icon={faBook}
                />
                <span className="text-base md:text-lg text-black-800 text-sm">
                    {i18n('entities.serviceReservation.menu')}
                </span>
              </Link>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Controle as reservas que são recebidas pela app ou web
              </p>
            </div>
          </div>

        </div>
        <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={() => console.log('Aipetto Zen up and running')} />
      </>
  );
};

export default DashboardPage;
