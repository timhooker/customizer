// import { compose } from 'ramda';

function isValidHexColor(color?: string | number ): boolean {
  if (!color || typeof color === 'number') {
    return false;
  } 
  return !!/^\#([a-z0-9]){6}\b/i.exec(color);
}

function invalidHexMessage(color: any ):string {
  return isValidHexColor(color) ? '' : `${color} is not a valid HEX color`;
}

function successfulContrast(foreground?:string, background?:string): boolean {
  if (isValidHexColor(foreground) && isValidHexColor(background) ) {
    const fgvalue = relativeLuminance(convertHexToRgb(foreground));
    const bgvalue = relativeLuminance(convertHexToRgb(background));
    if(fgvalue >= bgvalue) {
      return getRatio(fgvalue, bgvalue) * 2 >= 3;
    } else {
      return getRatio(bgvalue, fgvalue) * 2 >= 3;
    }
  }
  return false;
} 

function getRatio(c1: number, c2: number){
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
      }
    }
  }
  return {r: 0, g: 0, b: 0};
}
interface RGB {
  r: number, 
  b: number; 
  g: number;
}

function relativeLuminance({r,g,b}: RGB) {
  return (r * 0.299) + (g * 0.587) + (b * 0.114);
}

export { isValidHexColor, invalidHexMessage, successfulContrast, relativeLuminance, convertHexToRgb, getRatio };