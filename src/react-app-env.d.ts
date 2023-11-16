/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
declare module "react-dom/client" {
  // typing module default export as `any` will allow you to access its members without compiler warning
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var createRoot: any;
  export { createRoot };
}
