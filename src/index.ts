import { setup as bemClassNameSetup, BemSettings } from 'bem-cn';

interface Modifications {
  [name: string]: string | boolean | undefined;
}

let block = bemClassNameSetup();

function isString(data: any) {
  return typeof data === 'string';
}

function hasMixinShape(data: any) {
  return isString(data) || (Array.isArray(data) && data.every(isString));
}


function bemClassNameLite(blockName: string) {
  const b = block(blockName);

  function element(elementName: string, modifiers: Modifications | null, mixin?: string | string[]): string;
  function element(elementName: string, mixin?: string | string[]): string;
  function element(elementName: string, modifiers: Modifications): string;
  function element(mods: Modifications | null, mixin?: string | string[]): string;
  function element(elementName: string): string;
  function element(mods: Modifications | null): string;
  function element(): string;
  
  function element(...args: any) {
    const elementName = args.shift();
    let [modifiers, mixin] = args;
    let result;

    if (typeof elementName !== 'string' || hasMixinShape(modifiers)) {
      mixin = modifiers;
      modifiers = null;
    }

    result = b(elementName, modifiers);

    if (mixin) {
      result = result.mix(mixin);
    }

    return result.toString();
  }

  element.builder = function () {
    return b;
  };

  return element;
}

bemClassNameLite.setup = function (config: BemSettings) {
  block = bemClassNameSetup(config);
};

bemClassNameLite.reset = function () {
  block = bemClassNameSetup();
};

export default bemClassNameLite;
