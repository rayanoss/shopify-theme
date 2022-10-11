/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ["./**/*.liquid"],
  },
  theme: {
    extend: {
      backgroundImage: {
        'strips-accordion': "url('https://cdn.shopify.com/s/files/1/0916/4078/files/Strips_Accordion_-_M.jpg?v=1634701615')",
      }, 
      backgroundPosition: {
        'bg-center-slider': "center 75%",
      }, 
    }
  }
};
