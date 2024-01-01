export * from "./commons";
export * from "./modals";

interface Payload {
  currency: string;
  price: string;
  type: string;
  title: string;
  id?: string;
  ids?: string[];
  coupon_code?: string;
  order_id?: string;
}

declare global {
  interface Window {
    APP_EVENTS: {
      PAGE_VIEW: Array<(url: string) => void>;
      ADD_TO_CART: Array<(payload: Payload) => void>;
      PURCHASE: Array<(payload: Payload) => void>;
      SIGN_UP: Array<() => void>;
      LOGIN: Array<() => void>;
    };
    order?: { [key: string]: any };
  }
}
