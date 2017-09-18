import { updateBackgroundProps } from './interface/transforms';

export function updateBackground( element: updateBackgroundProps ) {
  return {type: 'UPDATE_BACKGROUND', element};
}