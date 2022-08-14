import { Injectable } from "@angular/core";


declare let alertify: any;

// @Injectable({
//   providedIn: "root"
// })
// Bunu ya böyle eklersin yada  appmodule altından providerslara eklersin
@Injectable()
export class AlertifyService {
  constructor() { }
  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }
}
