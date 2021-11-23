import { yupResolver } from '@hookform/resolvers/yup';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import Message from 'src/view/shared/message';
import * as yup from 'yup';
import LandingNavbar from "../layout/LandingNavbar";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import config from "../../config";

const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n('user.fields.email'), {
    required: true,
  }),
  password: yupFormSchemas.string(
      i18n('user.fields.password'),
      {
        required: true,
      },
  ),
  rememberMe: yupFormSchemas.boolean(
      i18n('user.fields.rememberMe'),
  ),
});

function SigninPage() {

  const location = useLocation();
  const dispatch = useDispatch();
  const loading = useSelector(selectors.selectLoading);

  const { socialErrorCode } = queryString.parse(
      location.search,
  );

  const externalErrorMessage = useSelector(
      selectors.selectErrorMessage,
  );


  const backgroundImageUrl = useSelector(
      selectors.selectBackgroundImageUrl,
  );
  const logoUrl = useSelector(selectors.selectLogoUrl);

  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);

  useEffect(() => {
    if (socialErrorCode) {
      if (socialErrorCode === 'generic') {
        Message.error(i18n('errors.defaultErrorMessage'));
      } else {
        Message.error(
            i18n(`auth.social.errors.${socialErrorCode}`),
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [initialValues] = useState({
    email: '',
    password: '',
    rememberMe: true,
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const onSubmit = ({ email, password, rememberMe }) => {
    dispatch(
        actions.doSigninWithEmailAndPassword(
            email,
            password,
            rememberMe,
        ),
    );
  };

  return(
        <>
          <LandingNavbar fixed />
          <div className="antialiased overflow-hidden overflow-y-scroll">
            <div className="hero w-full">
              <div className="container mx-auto mt-8">
                <div className="py-0 md:py-16 hero__content text-center w-4/5 mx-auto fade-in fade-in-first">

              <div className="text-center fade-in fade-in-second">
                <div className="sm:hidden">
                  <img src="images/pet-medical-draw.png" alt="aipetto" className="lazy"/>
                </div>
              </div>
              <div className="flex space-x-4 container mx-auto mt-8">
                <div className="flex-1">
                  <div className="my-4">
                    <FormProvider {...form}>
                      <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className="mt-6"
                      >
                        <InputFormItem
                            name="email"
                            label={i18n('user.fields.email')}
                            autoComplete="email"
                            autoFocus
                            externalErrorMessage={externalErrorMessage}
                        />

                        <div className="mt-4">
                          <InputFormItem
                              name="password"
                              label={i18n('user.fields.password')}
                              autoComplete="password"
                              type="password"
                          />
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="">
                            <input
                                className="cursor-pointer rounded border-gray-300 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                type="checkbox"
                                id={'rememberMe'}
                                name={'rememberMe'}
                                ref={form.register}
                            />
                            <label
                                className="cursor-pointer ml-1 text-sm text-gray-600 dark:text-gray-400"
                                htmlFor={'rememberMe'}
                            >
                              {i18n('user.fields.rememberMe')}
                            </label>
                          </div>

                          <div className="pr-0">
                            <Link
                                className="cursor-pointer text-sm text-gray-600 dark:text-gray-400"
                                to="/auth/forgot-password"
                            >
                              {i18n('auth.forgotPassword')}
                            </Link>
                          </div>
                        </div>

                        <div className="mt-6">
                          <button
                              disabled={loading}
                              type="submit"
                              className="disabled:opacity-50 disabled:cursor-default bg-yellow-500 rounded p-4 border border-yellow-600 block w-full font-semibold"
                          >
                            {i18n('auth.signin')}
                          </button>
                          <Link
                              className="cursor-pointer focus:text-green-600 hover:text-green-700 font-medium text-gray-600 dark:text-gray-400"
                              to="/"
                          >
                            {i18n('auth.informationLoginBeta')}
                          </Link>
                        </div>
                      </form>
                    </FormProvider>
                  </div>
                </div>
                <div className="flex-1 hidden sm:block">
                  <div className="text-center fade-in fade-in-second">
                    <div className="w-1/2 md:w-full">
                      <img src="images/pet-medical-draw.png" alt="aipetto" className="lazy"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="py-8 text-center md:text-left">
              <div className="container mx-auto">
                <div className=" flex flex-col lg:flex-row content-center items-center justify-between">
                  <div className="flex items-center flex-col lg:flex-row mx-auto">
                    <span className="ml-0 md:ml-4 text-sm text-gray-600 py-4 lg:py-0">愛ペット Aipetto, Copyright &copy; 2021</span>
                  </div>

                </div>
              </div>
            </footer>
          </div>
            </div>
          </div>
        </>
    );
};


function SignInWithGoogleReCaptchProvider() {
  return (
      <GoogleReCaptchaProvider reCaptchaKey={config.clientGoogleRecaptchaV3}>
        <SigninPage />
      </GoogleReCaptchaProvider>
  )
}

export default SignInWithGoogleReCaptchProvider;
