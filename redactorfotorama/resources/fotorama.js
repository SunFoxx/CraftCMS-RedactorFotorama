if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.clips = function () {
  return {
    init()  {
      const button = this.button.add('fotorama', 'Fotorama');
      this.button.addCallback(button, this.clips.edit);
    },
    edit() {
      const selection = this.selection.html();
      this.insert.html(`<br><div class='fotorama'>${selection}</div><br>`);
    },
  };
};

