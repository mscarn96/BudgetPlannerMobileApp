export interface ResponseWithError {
  status: number | undefined;
  message: string | undefined;
}

const handleAsyncError = (error: any) => {
  const responseWithError: ResponseWithError = {
    message: "Connection Error",
    status: 500,
  };
  if (error.response) {
    responseWithError.message = error.response.data.message;
    responseWithError.status = error.response.data.status;
  }
  return responseWithError;
};

export default handleAsyncError;
