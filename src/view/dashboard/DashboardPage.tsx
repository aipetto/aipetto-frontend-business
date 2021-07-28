import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PermissionChecker from 'src/modules/auth/permissionChecker';
import menus from 'src/view/menus';
import {useDispatch, useSelector} from "react-redux";
import {default as authSelectors, default as selectors} from "../../modules/auth/authSelectors";
import layoutSelectors from "../../modules/layout/layoutSelectors";
import layoutActions from "../../modules/layout/layoutActions";
import { i18n } from 'src/i18n';
import DashboardBarChart from 'src/view/dashboard/DashboardBarChart';
import DashboardDoughnutChart from 'src/view/dashboard/DashboardDoughnutChart';
import DashboardHorizontalBarChart from 'src/view/dashboard/DashboardHorizontalBarChart';
import DashboardLineChart from 'src/view/dashboard/DashboardLineChart';
import DashboardMixChartOne from 'src/view/dashboard/DashboardMixChartOne';
import DashboardMixChartTwo from 'src/view/dashboard/DashboardMixChartTwo';
import DashboardPolarChart from 'src/view/dashboard/DashboardPolarChart';
import DashboardRadarChart from 'src/view/dashboard/DashboardRadarChart';

const DashboardPage = (props) => {

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
  return (
      <>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <div className="bg-white dark:bg-gray-800 p-2 border dark:border-gray-600 rounded">
                <DashboardDoughnutChart />
              </div>
            </div>
            <div>
              <div className="bg-white dark:bg-gray-800 p-2 border dark:border-gray-600 rounded">
                <DashboardMixChartTwo />
              </div>
            </div>
            <div>
              <div className="bg-white dark:bg-gray-800 p-2 border dark:border-gray-600 rounded">
                <DashboardBarChart />
              </div>
            </div>
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
