# Han_Scrum
Project Setup and Run Instructions

This guide explains how to set up and run the project, which consists of a .NET 8 backend and a React-based frontend.

Prerequisites
	a) Windows, macOS, or Linux operating system.
	b) Internet connection for downloading tools and dependencies.


## Setup Instructions
1. Install Visual Studio and Visual Studio Code
	a) Visual Studio: Download and install Visual Studio Community, Professional, or Enterprise (2022 or later) from https://visualstudio.microsoft.com/downloads/.
	b) Visual Studio Code: Download and install VS Code from https://code.visualstudio.com/download.

2. Install Visual Studio Workloads
	a) Open Visual Studio Installer.
	b) Modify your Visual Studio installation and select the following workloads:
	  - ASP.NET and web development
	  - Node.js development (required for React development tools)
	c) Install the selected workloads.

3. Install .NET 8
	a) Ensure .NET 8 SDK is installed. Download it from https://dotnet.microsoft.com/download/dotnet/8.0 if not already installed.
	b) Verify installation by running `dotnet --version` in a terminal (should output 8.x.x).

4. Install Node.js
	a) Download and install Node.js (LTS version recommended) from https://nodejs.org/en/download/.
	b) Verify installation by running `npm -v` in a terminal (should output 10.9.3 or compatible version).

5. Running the Frontend
	a) Open Visual Studio Code.
	b) Open the `ClientApp` folder (File > Open Folder > select `ClientApp`).
	c) In VS Code, navigate to the `src` folder in the Explorer pane.
	d) Right-click `src` and select "Open in Integrated Terminal".
	e) In the terminal, run: <npm install>
	f) Run: <npm start> to start the React development server.

6. Running the Backend
	a) Open Visual Studio.
	b) Open the solution file (`.sln`) for the project.
	c) Set the startup project to "Vote" (right-click the project in Solution Explorer and select "Set as Startup Project").
	d) Press `F5` or select "Start Debugging" to run the backend with the "Vote" launch profile.

7. Running the Platform
	a) Browse http://localhost:44471/scrumvotingOpen 