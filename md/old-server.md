# Turning an old computer into a server
<br>

I decided to turn an old PC into a server to learn more about Linux. I used CasaOS so that I could remotely access my server and I have used it to host Minecraft servers.

I first got the PC and removed a lot of the excess space that I could. To do this I had to remove the power button from the motherboard, where I then had to find a datasheet online for that motherboard to figure out how to plug the button back in correctly (image is below). Then I built a case out of wood for it.

Now for the software. I used debian 12 with CasaOS and the install was mostly smooth and simple except for one error which I had. After that I booted up into CasaOS from my computer after putting in the username and password, installed the necessary software to run a minecraft server, activated port forwarding and then used the server.

After not using for possibly over a year, I decided to revive this project by installing a local AI on it and see how it runs. I did this by using ollama and openwebui which I installed very simply using [Belullama](https://github.com/ai-joe-git/Belullama) which made the process very simple. I decided to use a very small AI agent called llama3.2:1b as it only had 1 billion parameters which I theorised would be much better for my server as its quite weak.

The AI worked decently but compared to other platforms, my AI is quite slow which is due to the specifications of my server as it only has 8GB of RAM and an i3 CPU. For the messages I sent it (which you can see in the pictures below), it would take between 10-15 seconds for me to get a response. 

My next steps for this project is to connect the AI model to the internet and to also test other models to see if they may run faster than this one.

Im glad that I did a small project like this because it was my first proper introduction to Linux and really helped me understand very basic terminal commands. Its project also helped me experiment with AI and learn more about it.

Have a look at the pictures I have.