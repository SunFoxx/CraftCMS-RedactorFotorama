if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.fotorama = function () {
  return {
    init() {
      const button = this.button.add('fotorama', 'Fotorama');
      this.button.addCallback(button, this.fotorama.edit);
    },
    edit() {
      const selection = this.selection.html();
      this.insert.html(`<br><div class='fotorama' data-ratio="16/9" data-width="100%">${selection}</div><br>`);
    },
  };
};
