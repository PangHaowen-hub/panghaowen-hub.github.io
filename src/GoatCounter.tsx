import { useEffect } from 'react';

const goatCounterCode = import.meta.env.VITE_GOATCOUNTER_CODE?.trim();
const goatCounterEndpoint = import.meta.env.VITE_GOATCOUNTER_ENDPOINT?.trim();

function getGoatCounterUrl() {
  if (goatCounterEndpoint) {
    return goatCounterEndpoint;
  }

  if (goatCounterCode) {
    return `https://${goatCounterCode}.goatcounter.com/count`;
  }

  return null;
}

function GoatCounter() {
  useEffect(() => {
    const goatCounterUrl = getGoatCounterUrl();
    if (!goatCounterUrl || document.getElementById('goatcounter-script')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'goatcounter-script';
    script.async = true;
    script.src = 'https://gc.zgo.at/count.js';
    script.dataset.goatcounter = goatCounterUrl;

    document.body.appendChild(script);
  }, []);

  return null;
}

export default GoatCounter;
