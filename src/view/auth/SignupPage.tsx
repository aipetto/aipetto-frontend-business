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
import * as yup from 'yup';
import IndexNavbar from "../layout/IndexNavbar";

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
});

function SignupPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const loading = useSelector(selectors.selectLoading);

  const externalErrorMessage = useSelector(
    selectors.selectErrorMessage,
  );

  const emailFromInvitation = queryString.parse(
    location.search,
  ).email;

  const backgroundImageUrl = useSelector(
    selectors.selectBackgroundImageUrl,
  );
  const logoUrl = useSelector(selectors.selectLogoUrl);

  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);

  const [initialValues] = useState({
    email: emailFromInvitation || '',
    password: '',
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const onSubmit = ({ email, password }) => {
    dispatch(
      actions.doRegisterEmailAndPassword(email, password),
    );
  };

  return (
    <>
    <IndexNavbar fixed />
    <div
      style={{
        backgroundImage: `url(${
          backgroundImageUrl || '/images/pets-background.jpeg'
        })`,
      }}
      className="bg-cover h-screen flex justify-center"
    >
      <div className="w-full fade-in fade-in-first">
        <div className="w-full max-w-lg mx-auto mt-32">
          <div className="bg-white rounded-lg shadow p-8 text-center">
          <h1 className="text-2xl font-semibold">{i18n('auth.signup')}</h1>
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

              <div className="mt-6">
                <button
                  disabled={loading}
                  type="submit"
                  className="disabled:opacity-50 disabled:cursor-default bg-yellow-500 rounded p-4 border border-yellow-600 block w-full font-semibold"
                >
                  {i18n('auth.signup')}
                </button>
              </div>
            </form>
          </FormProvider>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 py-4 rounded-b-md">
          <Link
            className="block text-xs text-center font-medium text-gray-800 dark:text-gray-200 hover:underline"
            to="/"
          >
            {i18n('auth.alreadyHaveAnAccount')}
          </Link>
        </div>
       </div>
      </div>
    </div>
    </>
  );
}

export default SignupPage;
