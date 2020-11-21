// Code derived by rastersoft from Remove App Menu (created by zpydr), to adapt it to Gnome Shell normative

const Main = imports.ui.main;
var signalShow;

function init() {
  //Do nothing
}

function enable() {
  signalShow=Main.panel.statusArea.appMenu.connect("show",function () {
    Main.panel.statusArea.appMenu.hide();
  });
  Main.panel.statusArea.appMenu.hide();
}

function disable() {
  Main.panel.statusArea.appMenu.disconnect(signalShow);
  Main.panel.statusArea.appMenu.show();
}

