1. BeautifulDiscord is created using Python. You can either download the already converted .exe program for simplicity, or if you wish to compile the script yourself, the you will need to download Python.
At the end of the installation, there should be an option that says something along the lines of `Add to PATH`. If you don't check this, it'll make a future step slightly harder.

2. Install [BeautifulDiscord](https://github.com/ShadaxsRepo/Scripts/BeautifulDiscord)
Open a command prompt/terminal, and enter `python -m pip install -U https://github.com/ShadaxsRepo/Scripts/BeautifulDiscord/master.zip`, this will download and install BeautifulDiscord.
If you did not add Python to PATH, navigate to the directory of where Python is installed and run the command.
If you get an error while installing that says something along the lines of `Microsoft Visual C++ 14.0 is required`, follow these steps.
 A. If you do not have Visual Studio 2015 installed, go to [Visualstudio](http://landinghub.visualstudio.com/visual-cpp-build-tools) and download the Visual C++ Build Tools 2015. When it's done installing, run `python -m pip install -U https://github.com/ShadaxsRepo/Scripts/BeautifulDiscord/master.zip` again and it should work.
 B. If you do have Visual Studio 2015 installed, it's a little bit harder.
  - Open up the 'Change or remove a program' dialog, and find something along the lines of `Microsoft Visual Studio 2015` in the list. Double-click it and a dialog will appear. Press `Modify` then click on the `Visual C++` dropdown and check `Common Build Tools`. Press Ok and wait for it to install. This'll take a while.
  - When it's finished installing, run `python -m pip install -U https://github.com/ShadaxsRepo/Scripts/BeautifulDiscord/master.zip` again and it should work.

3. Applying BeautifulDiscord
Make sure that you have the version(s) of Discord that you would like to have BeautifulDiscord applied to **open**, and then type `python -m beautifuldiscord --css path/to/your.css` and it'll automatically detect the open Discord instance and apply itself.

4. Reapplying BeautifulDiscord
In the event that a Discord update causes BeautifulDiscord to unload, or it unloads in a crash, you can easily reapply it by following the instructions in step 3, as BeautifulDiscord is fairly forwards-compatible.
