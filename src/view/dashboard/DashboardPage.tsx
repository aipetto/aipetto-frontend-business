import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PermissionChecker from 'src/modules/auth/permissionChecker';
import menus from 'src/view/menus';
import {useDispatch, useSelector} from "react-redux";
import {default as authSelectors, default as selectors} from "../../modules/auth/authSelectors";
import dashSelectors from "../../modules/dashboard/dashboardSelectors";
import layoutSelectors from "../../modules/layout/layoutSelectors";
import layoutActions from "../../modules/layout/layoutActions";
import DashboardBarChart from 'src/view/dashboard/DashboardBarChart';
import DashboardDoughnutChart from 'src/view/dashboard/DashboardDoughnutChart';

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

        <div className="flex flex-wrap mb-2 items-center justify-between">
          <div>
            <span
                className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-gray-200">
              Progresso para que seu negócio esteja recebendo reservas na app Aipetto
            </span>
          </div>
          <div className="text-right px-6">
            <span className="text-lg font-semibold inline-block text-gray-600">
              25%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-6 mb-4 text-xs flex rounded bg-gray-200">
          <div style={{width: '25%'}}
               className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-400">
            Cadastro do negócio
          </div>
          <div style={{width: '25%'}}
               className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-400">
            Cadastro de serviços e preços
          </div>
          <div style={{width: '25%'}}
               className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-400">
            Definir Lugares de atendimento
          </div>
          <div style={{width: '25%'}}
               className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-400">
            Definir Data e horários disponíveis para reserva por serviço
          </div>
        </div>

        <div className="p-6 grid grid-cols-2 md:grid-cols-6 gap-4">

                {menus
                    .filter((menu) =>
                        match(menu.permissionRequired),
                    )
                    .sort((menuLabelFirst, menuLabelSecond) => menuLabelFirst.label.localeCompare(menuLabelSecond.label))
                    .map((menu, index) => (
                        <Link className='flex flex-col items-center w-40 h-32 border border-indigo-50 hover:bg-green-300 hover:text-black rounded-2xl cursor-pointer py-2 bg-white'
                            onClick={doToggleMenuIfSmall}
                            key={menu.path}
                            to={menu.path}
                        >
                          <FontAwesomeIcon
                              className="w-5 h-40 fa-2x"
                              icon={menu.icon}
                          />
                          <span className="text-base md:text-lg text-black-800 text-sm">
                      {menu.label}
                    </span>
                        </Link>
                    ))}

                {menus
                    .filter((menu) =>
                        lockedForCurrentPlan(menu.permissionRequired),
                    )
                    .sort((menuLabelFirst, menuLabelSecond) => menuLabelFirst.label.localeCompare(menuLabelSecond.label))
                    .map((menu) => (
                        <div
                            className={`mt-4 opacity-50 flex items-center px-4 py-2 text-gray-600 rounded-md dark:text-gray-400`}
                        >
                          <FontAwesomeIcon
                              className="w-5 h-5"
                              icon={menu.icon}
                          />

                          <span className="mx-4 font-medium truncate">
                      {menu.label}
                    </span>
                        </div>
                    ))}
              </div>
      </>
  );
};

export default DashboardPage;
