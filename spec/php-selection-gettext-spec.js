'use babel';

import PhpSelectionGettext from '../lib/php-selection-gettext';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('PhpSelectionGettext', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('php-selection-gettext');
  });

  describe('when the php-selection-gettext:wrapSelection event is triggered', () => {
    it('replaces selection with the correct pattern', () => {
      runs(() => {
      });
    });
  });
});
