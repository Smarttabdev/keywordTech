export const CARD_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "#0c5670",
      color: "#000",
      transform: 'none',
      prefersReducedMotion: 'reduce',
      lineHeight: 2.5,
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "20px",
      // fontSmoothing: "antialiased",
      transition: 'none',
      ":-webkit-autofill": {
        color: "#fce883"
      },
      "::placeholder": {
        color: "#151515bf"
      }
    },
    invalid: {
      iconColor: "#dc3009",
      color: "#dc3009"
    }
  }
};