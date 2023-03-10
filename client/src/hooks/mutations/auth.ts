import type { ApiError } from '@/lib/apiClient';
import type { UseMutationResult } from '@tanstack/react-query';
import type { LogInBody, LogInResult, SignUpBody, SignUpResult } from 'shared';

import { useMutation } from '@tanstack/react-query';

import { login, signUp } from '@/lib/api/auth';
import { queryKey } from '@/lib/constants';

// TODO: Error ํ์์ Api Error๋ error instanceof SyntaxError
export const useSignUpMutation = (): UseMutationResult<
  SignUpResult,
  ApiError | SyntaxError,
  SignUpBody
> => {
  const key = queryKey.auth.signup();
  const mutation = useMutation<
    SignUpResult,
    ApiError | SyntaxError,
    SignUpBody
  >(key, signUp);
  return mutation;
};

export const useLoginMutation = (): UseMutationResult<
  LogInResult,
  ApiError | SyntaxError,
  LogInBody
> => {
  const key = queryKey.auth.login();
  const mutation = useMutation<LogInResult, ApiError | SyntaxError, LogInBody>(
    key,
    login,
  );

  return mutation;
};
