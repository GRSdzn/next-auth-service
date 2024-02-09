import { CardWrapper } from '@/components/auth/card-wrapper';

export const LoginForm = () => {
  return (
    <CardWrapper headerLabel="Welcome back" backButtonLabel="Don't have an account?" backButtonHref="/auth/register" showSocial>
      <h1 className="font-semibold text-xl text-center border h-20">CONTENT</h1>
    </CardWrapper>
  );
};
