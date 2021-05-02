import { Color, colorsMap, Hsl, Rgb } from '../data/colors';

export const getColor = (hexCode: string): Color | undefined => {
  const color = ColorsUtils.getColor(hexCode);

  return color;
};

export const getColorName = (hexCode: string): string | undefined => {
  const color = ColorsUtils.getColor(hexCode);

  return color?.name;
};

export const getColorHsl = (hexCode: string): Hsl | undefined => {
  const color = ColorsUtils.getColor(hexCode);

  return color?.hsl;
};

export const getColorRgb = (hexCode: string): Rgb | undefined => {
  const color = ColorsUtils.getColor(hexCode);

  return color?.rgb;
};

class ColorsUtils {
  static getColor(hexCode: string): Color | undefined {
    if (!hexCode) {
      return undefined;
    }

    hexCode = hexCode.toUpperCase();

    if (hexCode.length % 3 == 0) {
      hexCode = `#${hexCode}`;
    }

    if (hexCode.length == 4) {
      hexCode = `#${hexCode.substr(1, 1)}${hexCode.substr(
        1,
        1
      )}${hexCode.substr(2, 1)}${hexCode.substr(2, 1)}${hexCode.substr(
        3,
        1
      )}${hexCode.substr(3, 1)}`;
    }

    console.log({ hexCode });
    const color = colorsMap.get(hexCode);
    console.log({ color });
    return color;
  }

  static hsl(hexCode: string): Hsl {
    const [r, g, b] = [
      parseInt(`0x${hexCode.substring(1, 3)}`) / 255,
      parseInt(`0x${hexCode.substring(3, 5)}`) / 255,
      parseInt(`0x${hexCode.substring(5, 7)}`) / 255,
    ];

    const min = Math.min(r, Math.min(g, b));
    const max = Math.max(r, Math.max(g, b));
    const delta = max - min;
    const l = (min + max) / 2;

    let s = 0;
    if (l > 0 && l < 1) {
      s = delta / (l < 0.5 ? 2 * l : 2 - 2 * l);
    }

    let h = 0;
    if (delta > 0) {
      if (max == r && max != g) h += (g - b) / delta;
      if (max == g && max != b) h += 2 + (b - r) / delta;
      if (max == b && max != r) h += 4 + (r - g) / delta;
      h /= 6;
    }

    return { h, s, l };
  }

  static rgb(hexCode: string): Rgb {
    return {
      r: parseInt(`0x${hexCode.substring(1, 3)}`),
      g: parseInt(`0x${hexCode.substring(3, 5)}`),
      b: parseInt(`0x${hexCode.substring(5, 7)}`),
    };
  }
}
