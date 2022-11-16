import { SvgXml } from 'react-native-svg';

export function CheckCircle() {
  const markup = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.75 14.25L9.5 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.5 10.5L11.75 14.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 21C7.52944 21 3.5 16.9706 3.5 12V12C3.5 7.02944 7.52944 3 12.5 3V3C17.4706 3 21.5 7.02944 21.5 12V12C21.5 16.9706 17.4706 21 12.5 21V21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  return <SvgXml xml={markup} />;
}
