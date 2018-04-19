if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.clips = function () {
  return {
    init()	{
      const items = RedactorPlugins.clips.items;

      this.clips.template = $('<ul id="redactor-modal-list">');

      for (let i = 0; i < items.length; i++) {
        const li = $('<li>');
        const a = $('<a href="#" class="redactor-clip-link">').text(items[i][0]);
        const div = $('<div class="redactor-clip">').hide().html(items[i][1]);

        li.append(a);
        li.append(div);
        this.clips.template.append(li);
      }
      const button = this.button.add('fotorama', 'Fotorama');
      this.button.addCallback(button, this.clips.fotorama);
    },
    fotorama() {
      const selection = this.selection.html();
      this.insert.html(`<br><div class='fotorama'>${selection}</div><br>`);
    },
  };
};

