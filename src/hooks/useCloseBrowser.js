import { useEffect, useState } from "react";
import { useToasts } from "@geist-ui/react";
import toastMessages from "../data/ToastMessages";

export const useCloseBrowser = (browser, browserID, messageType) => {
  const [browserOpen, setBrowserOpen] = useState(true);

  const [, setClosePictureToast] = useToasts();

  useEffect(() => {
    if (browser) {
      console.log(browser, browserID, messageType);
      const closeBrowser = () => {
        if (browserOpen) {
          const message =
            toastMessages[messageType][
              Math.floor(Math.random() * toastMessages[messageType].length) // Just getting a random value of the array of messages.
            ];
          setBrowserOpen(false);
          setClosePictureToast({
            text: message.text,
            delay: message.delay,
          });
        }
      };

      document
        .querySelector(`#${browserID} .traffic .close`)
        .addEventListener("click", closeBrowser);

      return () => {
        document
          .querySelector(`#${browserID} .traffic .close`)
          ?.removeEventListener("click", closeBrowser);
      };
    }
  }, [browser]); //eslint-disable-line react-hooks/exhaustive-deps

  return browserOpen;
};
