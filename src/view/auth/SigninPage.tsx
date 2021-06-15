import { yupResolver } from '@hookform/resolvers/yup';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import config from 'src/config';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import I18nFlags from 'src/view/layout/I18nFlags';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import Message from 'src/view/shared/message';
import * as yup from 'yup';
import IndexNavbar from "../layout/IndexNavbar";
import LandingNavbar from "../layout/LandingNavbar";

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
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">{i18n('public.homeTitle')}</h1>
                  <p className="text-xl pt-4 pb-8 text-gray-700">{i18n('public.homeSubtitle')}</p>

              <div className="text-center fade-in fade-in-second">
                <div className="sm:hidden">
                  <img src="images/woman-pet-searching.png" alt="AIPETTO" className="lazy"/>
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
                        </div>
                      </form>
                    </FormProvider>
                  </div>
                  <div className="flex justify-between">
                    <Link
                        className="text-blue-500 text-sm text-center"
                        to="/auth/forgot-password"
                    >
                      {i18n('auth.forgotPassword')}
                    </Link>
                    <Link
                        className="text-blue-500 text-sm text-center"
                        to="/auth/signup"
                    >
                      {i18n('auth.createAnAccount')}
                    </Link>
                  </div>
                  <div className="my-4">
                    <a
                        href={`${config.backendUrl}/auth/social/google`}
                        className="focus:outline-none"
                    >
                      <button
                          className="bg-yellow-500 rounded p-4 block w-full font-semibold flex justify-center items-center content-center text-white mb-2"
                          style={{background:"#4385F5"}}>
                        <svg
                            className="w-4 h-4 mx-2 fill-current"
                            viewBox="0 0 24 24"
                        >
                          <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                        </svg>
                        {i18n('auth.social.signinWithGoogle')}
                      </button>
                    </a>
                    <a
                        href={`${config.backendUrl}/auth/social/facebook`}
                        className="focus:outline-none"
                    >
                      <button
                          className="bg-yellow-500 rounded p-4 block w-full font-semibold flex justify-center items-center content-center text-white"
                          style={{background:"#3B5A99"}}>
                        <svg
                            className="w-5 h-5 fill-current"
                            viewBox="0 0 320 512"
                        >
                          <path
                              fill="currentColor"
                              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                          />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="flex-1 hidden sm:block">
                  <div className="text-center fade-in fade-in-second">
                    <div className="w-1/2 md:w-full">
                      <img src="images/woman-pet-searching.png" alt="AIPETTO" className="lazy"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="py-8 text-center md:text-left">
              <div className="container mx-auto">
                <div className=" flex flex-col lg:flex-row content-center items-center justify-between">
                  <div className="flex items-center flex-col lg:flex-row mx-auto">
                    <span className="ml-0 md:ml-4 text-sm text-gray-600 py-4 lg:py-0">愛ペット AIPETTO, Copyright &copy; 2021</span>
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

export default SigninPage;
