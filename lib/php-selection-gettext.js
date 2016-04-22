'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that wraps selection with <?php echo _("selection") ?>
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'php-selection-gettext:wrapSelection': () => this.wrapSelection()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  wrapSelection() {
    console.log("PhpSelectionGettext excecuted!");
    let editor = atom.workspace.getActiveTextEditor();
    if( editor ) {
      let selection = editor.getSelectedText().replace("\"", "\\\"");
      editor.insertText(`<?php echo _("${selection}") ?>`);
    }
  }

};
