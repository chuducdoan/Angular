export const DURATION_IN_SECOND = 2;

export function getNotifytical(message: string, _snackBar: any, snackBarComponent: any) {
  _snackBar.openFromComponent(snackBarComponent, {
   duration: DURATION_IN_SECOND*1000,
   data: message
 })
}
