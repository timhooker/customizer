function isValidHexColor(color?: string ): boolean {
  if (!color) {
    return false;
  }
  return !!/^\#([a-z0-9]){6}\b/i.exec(color);
}

// function invalidHexMessage(color?: string ): string {
//   return isValidHexColor(color) ? "" : `${color} is not a valid HEX color`;
// }

function successfulContrast(foreground?: string, background?: string): boolean {
  if (isValidHexColor(foreground) && isValidHexColor(background) ) {
    const fgvalue = relativeLuminance(convertHexToRgb(foreground)) + .05;
    const bgvalue = relativeLuminance(convertHexToRgb(background)) + .05;
    if (fgvalue >= bgvalue) {
      return getRatio(fgvalue, bgvalue) >= 4.5;
    } else {
      return getRatio(bgvalue, fgvalue) >= 3;
    }
  }
  return false;
}

function getRatio(c1: number, c2: number) {
  return c1 / c2;
}

function convertHexToRgb(hex?: string): RGB {
  if (!hex) {
    return {r: 0, g: 0, b: 0};
  } else {
    const hexSet = hex.match(/[a-z0-9]{2}/ig);
    if (hexSet && hexSet.length === 3) {
      return {
        r: parseInt(hexSet[0], 16) / 255,
        g: parseInt(hexSet[1], 16) / 255,
        b: parseInt(hexSet[2], 16) / 255,
      };
    }
  }
  return {r: 0, g: 0, b: 0};
}
interface RGB {
  r: number;
  b: number;
  g: number;
}

function relativeLuminance(rgb: RGB) {
  const r = rgbAdjust(rgb.r);
  const g = rgbAdjust(rgb.g);
  const b = rgbAdjust(rgb.b);
  return (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
}
function rgbAdjust(value: number) {
  return value <= .03928 ?
        value / 12.92 :
        Math.pow((value + .055) / 1.055, 2.4);
}

export { successfulContrast };
