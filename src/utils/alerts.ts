import { toast } from "sonner";

type ToastType = "success" | "error" | "warning" | "info";
export function alerts(type: ToastType, txt: string | null | undefined): void {
  toast[type](txt);
}
