import { detect } from "detect-browser";
import {JSDOM} from "jsdom";

export const isBrowser = () => {
  const browser = detect();
  return browser && browser.name !== "node";
};

export const getDocument = () => {
  if (!isBrowser()) {
    const dom = new JSDOM(`<!DOCTYPE html><head></head><body></body>`);
    return dom.window.document;
  } else {
    return window.document;
  }
};


export class RAWError extends Error {
  constructor(message) {
    super(message)
    this.name = 'RAWError'
    this.message = message
  }
}
