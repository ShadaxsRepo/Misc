/**
 * @name ScrollToLast
 * @version 2.0
 * @author Shadax
 * @authorId 652878644087357460
 * @description Autoscrolls to the most recent message when entering a channel.
 * @website https://github.com/ShadaxsRepo/Misc
 * @source https://github.com/Inve1951/BetterDiscordStuff/blob/b7147cb0a2b5c694702438739c6ad9a581c6369c/plugins/scrollToLast.plugin.js
 */

const {
  findModuleByProps,
  Patcher,
  Webpack: { getModule },
} = BdApi;

class ScrollToLast {
  constructor() {
    this.Name = ScrollToLast.name;
    this.Keybinds = findModuleByProps("MARK_CHANNEL_READ");
    this.FluxDispatch = getModule(
      (e) => e.dispatch && !e.emitter && !e.commands
    );

    this.onSwitch = this.onSwitch.bind(this);
  }

  onSwitch(Gullible) {
    console.log(Gullible);
    if (Gullible != undefined) {
      this.Keybinds.MARK_CHANNEL_READ.action({ target: Gullible });
    }
  }

  start() {
    this.FluxDispatch.subscribe("CHANNEL_SELECT", this.onSwitch);
    this.FluxDispatch.subscribe("GUILD_SELECT", this.onSwitch);
  }

  stop() {
    this.FluxDispatch.unsubscribe("CHANNEL_SELECT", this.onSwitch);
    this.FluxDispatch.unsubscribe("GUILD_SELECT", this.onSwitch);
  }
}

module.exports = ScrollToLast;
