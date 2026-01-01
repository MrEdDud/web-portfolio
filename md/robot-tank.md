<div class="job">
    <span class="left-job">
        <div class="title">Robot Tank</div>
    </span>
    <span class="right-job">
        <a href="https://github.com/MrEdDud/robot-tank" target="_blank">Github repository</a><br>
    </span>
</div>

The way this project started was when I first got introduced to robotics which deeply fascinated me. I decided the therefore create a vehicle with a Raspberry Pi 5 which I had won in a competition at my university. It started with an idea of creating a robot tank where you can speak to and it will respond using some sort of AI.

For now, I have only been able to make the vehicle move and output sound via youtube links.

When I first started, I started off by jotting down some ideas on pen and paper and then later switched to software. I started using FreeCAD which was a whole new learning experience for me as I had never used CAD software before but after hours of learning, and taking hardware models from the internet I was able to make the basic shape for my tank. Next was manufacturing the baseplate.

Now to manufacture this baseplate, I used the help of my Dad because I had no clue what I was doing. We just used a piece of plywood and then used the paper to mark down where we need to cut and with the help of his tools, and a bit of paint I had the baseplate in real life.

There are a few issues with my baseplate such as the baseplate not being wide enough for the brackets so thats why they stick out and also I made some unneccessary and ugly holes in the baseplate.

While doing this I was also assembling the Raspberry Pi and my audio bonnet and testing it to see if audio works and creating the start to a backend using Flask and Python. With the backend, I also made the frontend which is nothing special.

In the frontend I have controls to move the tank, and an input box for youtube links only. Then I can play and stop the sound.

Next came full assembly. I put the motors on the front 2 wheels, 3D printed (with the help of my friend) 2 back wheels and used some metal rods as axles and then hooked up my motors to my motor driver and the driver to the raspberry pi. After lots of debugging, I was able to get the tank to move.

Now here we are at the modern day. My next steps are to hook up a microphone to the raspberry pi and see if I can use the OpenAI API to make it respond to me. If there are some things I would like to change, it is the baseplate as its quite rough but apart from that I am pretty happy with it.

## Hardware used
- Raspberry Pi 5
- DC 6V Motor x2
- Adafruit Mono I2S Speaker Bonnet
- Motor driver -> TB6612FNG

## Technologies used
- Python
- HTML/CSS
- JavaScript
- Flask

Have a look at my robot tank.