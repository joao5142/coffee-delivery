import { toast } from "react-toastify";

export class Alert {
  static success(message: string): void {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  static error(message: string): void {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
