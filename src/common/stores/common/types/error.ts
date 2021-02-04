export enum ErrorStateCodeEnum {
  ServerInternalError = 500,
  BadRequest = 400,
}

export type ErrorState = {
  code: ErrorStateCodeEnum;
  msg: string;
};
