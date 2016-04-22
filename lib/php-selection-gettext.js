'use babel';

import PhpSelectionGettextView from './php-selection-gettext-view';
import { CompositeDisposable } from 'atom';

export default {

  phpSelectionGettextView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.phpSelectionGettextView = new PhpSelectionGettextView(state.phpSelectionGettextViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.phpSelectionGettextView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'php-selection-gettext:toggle': () => this.toggle()
    }));

    // Register command that wraps selection with <?php echo _("selection") ?>
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'php-selection-gettext:wrapSelection': () => this.wrapSelection()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.phpSelectionGettextView.destroy();
  },

  serialize() {
    return {
      phpSelectionGettextViewState: this.phpSelectionGettextView.serialize()
    };
  },

  toggle() {
    console.log('PhpSelectionGettext was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

  wrapSelection() {
    console.log("PhpSelectionGettext excecuted!");

  }

};
