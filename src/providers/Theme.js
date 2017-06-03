import variables from '../constants/variables';

export default class Theme {
  static T = variables;

  /**
   * Can be used to alter the 
   * color scheme of the components
   */
  static setColors(colors){
    Theme.colors = colors;
  }

  static configure(newVariables = {}){
    Theme.T.variables = Object.assign({}, Theme.T.variables, newVariables);
  }
}