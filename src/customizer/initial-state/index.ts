const configs = {

  components: [{
    id: 1,
    description: "The bar that shows at the top of each page",
    name: "Site Nav",
    selector: ".rz-site-nav",
    propValues: {
      background: {
        description: "The background color",
        inputType: "ColorPicker",
        key: "--c-nav-bg",
        label: "Background Color",
        value: "#3975C0",
      },
      textColor: {
        description: "The text color",
        inputType: "ColorPicker",
        label: "Text Color",
        value: "#fafeff",
      },
    },
  }, {
    id: 2,
    description: "Your default button",
    name: "Buttons",
    selector: ".rz-btn-default",
    propValues: {
      background: {
        description: "The background color",
        inputType: "ColorPicker",
        label: "Background Color",
        value: "#673AB7",
      },
      textColor: {
        description: "The text color",
        label: "Text Color",
        inputType: "ColorPicker",
        value: "#fafaff",
      },
    },
  }],
};

export default configs;
