import React from "react";
import { useEffect } from "react";

export function MerchantPaymentRedirectionToMobile() {
  useEffect(() => {
    if (getMobileOperatingSystem() === "IOS") {
      window.location.replace(
        "https://apps.apple.com/us/app/ventis-pay/id1614595944"
      );
    } else {
      window.location.replace(
        "https://play.google.com/store/apps/details?id=com.sweeftwallet.androidapp"
      );
    }
  }, []);

  return <p></p>;
}

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window?.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window?.MSStream) {
    return "IOS";
  }

  return "unknown";
}
