import { 
  injectGlobal 
} from 'styled-components';

/*
  Note: To get new fonts, download them from google fonts, then transform
  them into all the different formats with https://transfonter.org/
*/

injectGlobal`
  @font-face {
    font-family: 'Lato';
    src: url('/public/fonts/lato/Lato-SemiBold.eot');
    src: url('/public/fonts/lato/Lato-SemiBold.eot?#iefix') format('embedded-opentype'),
      url('/public/fonts/lato/Lato-SemiBold.woff2') format('woff2'),
      url('/public/fonts/lato/Lato-SemiBold.woff') format('woff'),
      url('/public/fonts/lato/Lato-SemiBold.ttf') format('truetype'),
      url('/public/fonts/lato/Lato-SemiBold.svg#Lato-SemiBold') format('svg');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/public/fonts/lato/Lato-Black.eot');
    src: url('/public/fonts/lato/Lato-Black.eot?#iefix') format('embedded-opentype'),
      url('/public/fonts/lato/Lato-Black.woff2') format('woff2'),
      url('/public/fonts/lato/Lato-Black.woff') format('woff'),
      url('/public/fonts/lato/Lato-Black.ttf') format('truetype'),
      url('/public/fonts/lato/Lato-Black.svg#Lato-Black') format('svg');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/public/fonts/lato/Lato-ExtraLightItalic.eot');
    src: url('/public/fonts/lato/Lato-ExtraLightItalic.eot?#iefix') format('embedded-opentype'),
      url('/public/fonts/lato/Lato-ExtraLightItalic.woff2') format('woff2'),
      url('/public/fonts/lato/Lato-ExtraLightItalic.woff') format('woff'),
      url('/public/fonts/lato/Lato-ExtraLightItalic.ttf') format('truetype'),
      url('/public/fonts/lato/Lato-ExtraLightItalic.svg#Lato-ExtraLightItalic') format('svg');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/public/fonts/lato/Lato-Light.eot');
    src: url('/public/fonts/lato/Lato-Light.eot?#iefix') format('embedded-opentype'),
      url('/public/fonts/lato/Lato-Light.woff2') format('woff2'),
      url('/public/fonts/lato/Lato-Light.woff') format('woff'),
      url('/public/fonts/lato/Lato-Light.ttf') format('truetype'),
      url('/public/fonts/lato/Lato-Light.svg#Lato-Light') format('svg');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/public/fonts/lato/Lato-BlackItalic.eot');
    src: url('/public/fonts/lato/Lato-BlackItalic.eot?#iefix') format('embedded-opentype'),
      url('/public/fonts/lato/Lato-BlackItalic.woff2') format('woff2'),
      url('/public/fonts/lato/Lato-BlackItalic.woff') format('woff'),
      url('/public/fonts/lato/Lato-BlackItalic.ttf') format('truetype'),
      url('/public/fonts/lato/Lato-BlackItalic.svg#Lato-BlackItalic') format('svg');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/public/fonts/lato/Lato-Thin.eot');
    src: url('/public/fonts/lato/Lato-Thin.eot?#iefix') format('embedded-opentype'),
      url('/public/fonts/lato/Lato-Thin.woff2') format('woff2'),
      url('/public/fonts/lato/Lato-Thin.woff') format('woff'),
      url('/public/fonts/lato/Lato-Thin.ttf') format('truetype'),
      url('/public/fonts/lato/Lato-Thin.svg#Lato-Thin') format('svg');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/public/fonts/lato/Lato-Italic.eot');
    src: url('/public/fonts/lato/Lato-Italic.eot?#iefix') format('embedded-opentype'),
      url('/public/fonts/lato/Lato-Italic.woff2') format('woff2'),
      url('/public/fonts/lato/Lato-Italic.woff') format('woff'),
      url('/public/fonts/lato/Lato-Italic.ttf') format('truetype'),
      url('/public/fonts/lato/Lato-Italic.svg#Lato-Italic') format('svg');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/public/fonts/lato/Lato-ExtraBoldItalic.eot');
    src: url('/public/fonts/lato/Lato-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'),
      url('/public/fonts/lato/Lato-ExtraBoldItalic.woff2') format('woff2'),
      url('/public/fonts/lato/Lato-ExtraBoldItalic.woff') format('woff'),
      url('/public/fonts/lato/Lato-ExtraBoldItalic.ttf') format('truetype'),
      url('/public/fonts/lato/Lato-ExtraBoldItalic.svg#Lato-ExtraBoldItalic') format('svg');
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/public/fonts/lato/Lato-LightItalic.eot');
    src: url('/public/fonts/lato/Lato-LightItalic.eot?#iefix') format('embedded-opentype'),
      url('/public/fonts/lato/Lato-LightItalic.woff2') format('woff2'),
      url('/public/fonts/lato/Lato-LightItalic.woff') format('woff'),
      url('/public/fonts/lato/Lato-LightItalic.ttf') format('truetype'),
      url('/public/fonts/lato/Lato-LightItalic.svg#Lato-LightItalic') format('svg');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/public/fonts/lato/Lato-Medium.eot');
    src: url('/public/fonts/lato/Lato-Medium.eot?#iefix') format('embedded-opentype'),
      url('/public/fonts/lato/Lato-Medium.woff2') format('woff2'),
      url('/public/fonts/lato/Lato-Medium.woff') format('woff'),
      url('/public/fonts/lato/Lato-Medium.ttf') format('truetype'),
      url('/public/fonts/lato/Lato-Medium.svg#Lato-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/public/fonts/lato/Lato-Regular.eot');
    src: url('/public/fonts/lato/Lato-Regular.eot?#iefix') format('embedded-opentype'),
      url('/public/fonts/lato/Lato-Regular.woff2') format('woff2'),
      url('/public/fonts/lato/Lato-Regular.woff') format('woff'),
      url('/public/fonts/lato/Lato-Regular.ttf') format('truetype'),
      url('/public/fonts/lato/Lato-Regular.svg#Lato-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/public/fonts/lato/Lato-Bold.eot');
    src: url('/public/fonts/lato/Lato-Bold.eot?#iefix') format('embedded-opentype'),
      url('/public/fonts/lato/Lato-Bold.woff2') format('woff2'),
      url('/public/fonts/lato/Lato-Bold.woff') format('woff'),
      url('/public/fonts/lato/Lato-Bold.ttf') format('truetype'),
      url('/public/fonts/lato/Lato-Bold.svg#Lato-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/public/fonts/lato/Lato-BoldItalic.eot');
    src: url('/public/fonts/lato/Lato-BoldItalic.eot?#iefix') format('embedded-opentype'),
      url('/public/fonts/lato/Lato-BoldItalic.woff2') format('woff2'),
      url('/public/fonts/lato/Lato-BoldItalic.woff') format('woff'),
      url('/public/fonts/lato/Lato-BoldItalic.ttf') format('truetype'),
      url('/public/fonts/lato/Lato-BoldItalic.svg#Lato-BoldItalic') format('svg');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/public/fonts/lato/Lato-ExtraLight.eot');
    src: url('/public/fonts/lato/Lato-ExtraLight.eot?#iefix') format('embedded-opentype'),
      url('/public/fonts/lato/Lato-ExtraLight.woff2') format('woff2'),
      url('/public/fonts/lato/Lato-ExtraLight.woff') format('woff'),
      url('/public/fonts/lato/Lato-ExtraLight.ttf') format('truetype'),
      url('/public/fonts/lato/Lato-ExtraLight.svg#Lato-ExtraLight') format('svg');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/public/fonts/lato/Lato-ThinItalic.eot');
    src: url('/public/fonts/lato/Lato-ThinItalic.eot?#iefix') format('embedded-opentype'),
      url('/public/fonts/lato/Lato-ThinItalic.woff2') format('woff2'),
      url('/public/fonts/lato/Lato-ThinItalic.woff') format('woff'),
      url('/public/fonts/lato/Lato-ThinItalic.ttf') format('truetype'),
      url('/public/fonts/lato/Lato-ThinItalic.svg#Lato-ThinItalic') format('svg');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/public/fonts/lato/Lato-SemiBoldItalic.eot');
    src: url('/public/fonts/lato/Lato-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),
      url('/public/fonts/lato/Lato-SemiBoldItalic.woff2') format('woff2'),
      url('/public/fonts/lato/Lato-SemiBoldItalic.woff') format('woff'),
      url('/public/fonts/lato/Lato-SemiBoldItalic.ttf') format('truetype'),
      url('/public/fonts/lato/Lato-SemiBoldItalic.svg#Lato-SemiBoldItalic') format('svg');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/public/fonts/lato/Lato-MediumItalic.eot');
    src: url('/public/fonts/lato/Lato-MediumItalic.eot?#iefix') format('embedded-opentype'),
      url('/public/fonts/lato/Lato-MediumItalic.woff2') format('woff2'),
      url('/public/fonts/lato/Lato-MediumItalic.woff') format('woff'),
      url('/public/fonts/lato/Lato-MediumItalic.ttf') format('truetype'),
      url('/public/fonts/lato/Lato-MediumItalic.svg#Lato-MediumItalic') format('svg');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/public/fonts/lato/Lato-ExtraBold.eot');
    src: url('/public/fonts/lato/Lato-ExtraBold.eot?#iefix') format('embedded-opentype'),
      url('/public/fonts/lato/Lato-ExtraBold.woff2') format('woff2'),
      url('/public/fonts/lato/Lato-ExtraBold.woff') format('woff'),
      url('/public/fonts/lato/Lato-ExtraBold.ttf') format('truetype'),
      url('/public/fonts/lato/Lato-ExtraBold.svg#Lato-ExtraBold') format('svg');
    font-weight: 800;
    font-style: normal;
  }

  body {
    font-family: "Lato", san-serif;
    margin: 0px;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`
