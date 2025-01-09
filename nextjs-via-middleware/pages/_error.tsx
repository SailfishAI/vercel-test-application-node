import { NextPage, NextPageContext } from "next";

interface ErrorPageProps {
  statusCode?: number;
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => {
  return (
    <div>
      <h1>
        {statusCode ? `Error ${statusCode}` : "An unexpected error occurred"}
      </h1>
    </div>
  );
};

ErrorPage.getInitialProps = (context: NextPageContext): ErrorPageProps => {
  const { res, err } = context;
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default ErrorPage;
