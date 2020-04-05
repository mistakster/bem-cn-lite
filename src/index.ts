import { setup as bemClassNameSetup, BemSettings } from 'bem-cn';

interface Modifications {
  [name: string]: string | boolean | undefined;
}

let block = bemClassNameSetup();

function bemClassNameLite(blockName: string) {
  const b = block(blockName);

  function element(elementName: string, modifiers: Modifications | null, mixin?: string): string;
  function element(elementName: string, mixin?: string): string;
  function element(elementName: string, modifiers: Modifications): string;
  function element(mods: Modifications | null, mixin?: string): string;
  function element(elementName: string): string;
  function element(mods: Modifications | null): string;
  function element(): string;

  function element(...args: any) {
    const elementName = args.shift();
    let [modifiers, mixin] = args;
    let result;

    if (typeof elementName !== 'string' || typeof modifiers === 'string') {
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
