<strong>BeautifulDiscord</strong>

A Simple Python script that adds CSS hot-reload to Discord.

## Motivation

I wanted custom CSS injection for Discord, with no JavaScript add-ons or anything.
That's BeautifulDiscord.

If you want JS, you can either:
- Use [BetterDiscord](https://github.com/Jiiks/BetterDiscordApp)
- Make your own thing!

## Requirements

- Latest version of Python.
- `psutil` library: https://github.com/giampaolo/psutil

## Usage

Just invoke the script when installed. If you don't pass the `--css` flag, the stylesheet
will be placed wherever the Discord app resources are found, which is not a very convenient
location.

**NOTE:** Discord has to be running for this to work in first place.
The script works by scanning the active processes and looking for the Discord ones.

```
$ beautifuldiscord --css C:\mystuff\myown.css
0: Found DiscordPTB.exe
1: Found DiscordCanary.exe
Discord executable to use (number): 1

Done!

You may now edit your C:\mystuff\myown.css file,
which will be reloaded whenever it's saved.

Relaunching Discord now...
$
```

Pass the `--revert` flag to restore Discord to its initial state. You can also do this manually if your Discord
install gets screwed up, by first locating where Discord stores its resources.

In that folder, there should be four files, with `core.asar` and `original_core.asar` being the interesting ones.
You should then remove the existing `core.asar` and rename `original_core.asar` to `core.asar`.

```
$ beautifuldiscord --revert
0: Found DiscordPTB.exe
1: Found DiscordCanary.exe
Discord executable to use (number): 1
Reverted changes, no more CSS hot-reload :(
$
```

You can also run it as a package - i.e. `python3 -m beautifuldiscord` - if somehow you cannot
install it as a script that you can run from anywhere.

## Installing

```
python3 -m pip install -U https://github.com/leovoel/BeautifulDiscord/archive/master.zip
```

Usage of a virtual environment is recommended, to not pollute your global package space.
