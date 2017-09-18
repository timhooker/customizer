const configs = {
  components: [{
    id: 1,
    name: 'Site Nav',
    description: 'The bar that shows at the top of each page',
    selector: '.rz-site-nav',
    propValues: {
      background: {
        label: 'Background Color',
        description: 'The background color',
        inputType: 'ColorPicker',
        value: '#3975C0',
      },
      textColor: {
        label: 'Text Color',
        description: 'The text color',
        inputType: 'ColorPicker',
        value: '#ffffff',
      }
    }
  }],
};

export default configs;