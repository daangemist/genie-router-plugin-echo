This is an example plugin for the [https://github.com/matueranet/genie-router](genie-router)
project.

It exposes a brain that returns the input message received from a client, prefixed with ECHO.

# Installation

In your genie-router installation folder (`$HOME/.genie-router`) install the plugin by executing:

    npm install --save @genie-ai/genie-router-plugin-echo

This will install the module from the github repository. Restart genie-router to activate
it. Update your configurationto utilize the brain.
