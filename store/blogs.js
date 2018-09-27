export const state = () => ({
  list: [
    {
      id: 1,
      url: '1-outsourcing-product-development',
      "title": "Outsourcing Product Development: Win-Win Situation Possible?",
      "pubDate": "Mon, 27 Jun 2016 13:24:41 +0000",
      category: "blogs",
      rate: '4.9',
      tags: "Outsourcing",
      description: "Developers in typical outsourcing and product companies encounter and voice numerous concerns regarding each other’s work.",
      text: "<p class=\"p1\">Developers in typical outsourcing and product companies encounter and voice numerous concerns regarding each other’s work.</p>\n<p class=\"p1\">Product companies usually provide negative feedback about their collaboration with outsourcing partners. Everyone constantly repeats that outsourcing companies in most cases do not comply with their clients’ needs. At the same time, developers in outsourcing companies are also not exactly thrilled about their cooperation with the customers. I often heard them complain that the clients are not capable of defining their needs clearly, moreover, they are inclined to change requirements numerous times before and after the product release.</p>\n<p class=\"p1\">Some typical issues from an outsourcing agency’s point of view and from a product company’s perspective are described below. The article outlines general situation and demonstrates how these issues can be solved so that the project is considered to be successfully delivered by both parties - the client (product company) and the executor (outsourcing company).</p>\n<p class=\"p1\">Let’s evaluate this situation step by step.</p>\n<p class=\"p1\"><b>1. General approach to developer’s technical specialization</b></p>\n<p class=\"p1\">It’s not a secret that most of the outsourcing companies hire professionals of narrow specialization. The reasoning is clear whereas the profit comes first: it’s the easiest way to increase a number of project team members, and the payment is usually based on hours worked.</p>\n<p class=\"p1\">On the contrary, product companies are result oriented and are interested in engaging generalists, who can solve a wide range of problems arising during product development.</p>\n<p class=\"p1\"><b>2. Oops, we’ve got a problem….Who’s to blame!? Cause of Error over Fix</b></p>\n<p class=\"p1\">In a typical outsourcing community it is more important to find a scapegoat than to solve the problem. There are couple of reasons behind such an approach. In part, this is because a developer in an outsourcing company does not care whether the project he works on is successful or not. He’s working on a strictly defined task, that’s it. Engineers in a product company are always interested in successful launch and support of the product - it has a straightforward impact on them and their income.</p>\n<p class=\"p1\">Furthermore, outsourcing companies usually hire developers of narrow specialization, so they have to find a competent colleague in order to solve the problem. And who’s more capable of doing that other than a person who understands the cause of the issue and has been working in this area from the beginning? In a product company everyone understands general architecture of the project, therefore can identify the problem and start solving it immediately. The stage of finding the guilty party can be postponed to the point when the issue is already settled.</p>\n<p class=\"p1\"><b>3. The Definition of Done</b></p>\n<p class=\"p1\">The DoD in outsourcing companies comes as a consequence of the above mentioned factors, and generally, the scheme is as follows:</p>\n<p class=\"p1\">1. Obtaining well defined requirements from the client</p>\n<p class=\"p1\">2. Implementing the requirements</p>\n<p class=\"p1\">3. Integrating components</p>\n<p class=\"p1\">4. Testing.</p>\n<p class=\"p1\">It is pretty obvious that the product company’s approach is more comprehensive. The team evaluates not only requirements and dependencies, but the ultimate goal of creating a product. Planning, development, testing and further integration comes afterwards. And the work on a product does not end at this stage - it is important to validate and test feasibility of the adopted decisions.</p>\n<p class=\"p1\"><b>4. Access to detailed information on the product</b></p>\n<p class=\"p1\">Obviously, product companies do not have such problems whereas developers have access to all information at any time. However, the situation differs in a typical outsourcing company. The most common issue is misinterpretation of the client’s requirements. This is often caused by insufficient information for successful completion of the task. Furthermore, such information goes a long way from a client to a developer through a number of counterparts, including client-partner, business analyst, project manager etc. This is the reason why the DoD may differ. Outsourcing agency considers the task to be successfully completed when it complies with provisions stated in the technical specification. The product company considers the task to be accomplished when the tangible result is achieved.</p>\n<p class=\"p1\">These are also the reasons why outsourcing companies do not have the possibility to be enterprising. Limited access to information on the product is the reason why the company can make a mistake in case it would like to change a certain process, the actions would be based merely on internal investigation and research. Product company can make such decisions based on real product analytics. It may appear, for instance, that 1% of online shop users generate 90% of the company’s revenue - and the team will consider their preferences as of the ultimate consumers.</p>\n<p class=\"p1\">The list of problems can be expanded even further, but the ones described are probably the main cause of misconception. Thus instead of finding more flaws, let’s consider how the current situation can be changed.\nThe discourse to be continued soon…</p>",
      backgroundImage: '/data/blogs/blog1/main.jpg',
      mainImage: '/data/blogs/blog1/main.jpg',
      authors: [],
      seo: {
        title: 'ELIFTECH | Software Outsourcing: Win-Win Situation Possible?',
        description: 'Developers in typical outsourcing and product companies encounter and voice numerous concerns regarding each other’s work',
        keywords: 'software outsourcing, software development, custom software development company, software development outsourcing'
      }
    },
    {
      id: 2,
      url: '2-robot-arm-controlling-with-javascript',
      "title": "Robot Arm Controlling with JavaScript",
      "pubDate": "Mon, 13 Feb 2017 14:41:10 +0000",
      category: "experiments",
      rate: '5.0',
      tags: "robotics, javascript, robot_arm, js, robotic_arm, tessel_2, AngularJS7, AI, Artificial_Intelligence, Drone, H-Bridges",
      description: "Nowadays we face a very interesting period of modern technologies development with already existing web sites and services for different kinds of activities.",
      text: "<em>This article was originally published in the <a href=\"https://sdjournal.org/robot-arm-controlling-javascript/\" rel=\"nofollow\">Software Developer’s Journal</a> on February 10, 2017</em>\n<br><br>\n\nNowadays we face a very interesting period of modern technologies development with already existing web sites and services for different kinds of activities. Each year there are less technologies, that can crucially change the work of developers comparing to 10-20 years ago. I can see that software development industry is growing in terms of human resources but the number of state-of-the-art technologies decreases. Of course an average developer doesn’t care much about this but most of the people who have chosen this profession are dreamers, inventors, creative creatures, - people who hate monotonous and boring work. I also belong to them, that is why one of my life priorities is continuous discovery of something new. Observing the tendencies of big and famous companies development becomes obvious that priority goes to IoT technologies, artificial intelligence, robotechnics etc. These are technologies that allow us not only to visualize an information but also to feel and look at the real world. Turn around! Can you see a robot somewhere? Does your T-shirt talk to you? No? Then this is the right time to dive into this technology and become one of the dreamers, who changes the world.\n\n&nbsp;<br>\n\nThe idea that was pushing me forward was quite simple: “To create an Assistant that would make a cup of coffee for me.” Of course I will not highlight all the aspects of fully functional coffee making assistant development, but you will find out how to create a robot arm out of a toy and make it autonomous, programmable and with an access to internet.\n\nIn this article you will find out how to create a Robot Arm from a toy and how to program it with JavaScript. Most of the microcontrollers are oriented on servos and I will describe how connect them to DC-motors with the help of a board built on H-bridges. It is not necessary to have some deep knowledge in JavaScript in order to develop an arm, but if you would like to establish a set-up adaptor by yourself due to the scheme I have described, you should have some expertise in electronics and know how to use a solder. For sure I will describe where to order all the parts if you will find it hard to design them by yourself. I will also show how to control a Robot Arm remotely via WiFi and how to define an Arm condition for calibration over webcam.\n<h2>Material resources selection</h2>\nAt the baseline of everything is a toy, that can be purchased on Amazon - OWI Robotic Arm Edge1 (pic. 1). It goes in a set with a control joystick and modification of a possible launching it to the computer via USB. But I have chosen the first alternative as far as I have planned to launch it myself to one of the existing microcontroller kits.<br>\n\nThe lifting weight of this toy is 100 gr. Of course it will not lift a cup of coffee but it will manage to turn on the coffee machine and drop a couple of sugar cubes.\n\n<img class=\"size-medium wp-image-49924 aligncenter\" src=\"/data/blogs/blog2/OWI-Robotic-Arm-Edge-300x246.jpg\" />\n<p style=\"text-align: left;\"><i>Pic. 1 OWI Robotic Arm Edge</i></p>\n<p style=\"text-align: left;\">There is a big amount of microcomputers: Raspberry Pi, Arduino, ODROID etc. But my attention was turned to a new microcomputer - Tessel 22 (pic.2), which allows programming on JavaScript and Rust. I have considered JavaScript as far as I use this technology both for frontend and backend at my full-time work. Due to its simplicity and cross platforming it is gaining popularity among developers which means that this will only increase an amount of people interested in this project.</p>\n<p style=\"text-align: left;\"><img class=\"size-medium wp-image-49928 aligncenter\" src=\"/data/blogs/blog2/tessel2-300x300.jpg\" /></p>\n<p style=\"text-align: left;\"><i>Pic. 2 Tessel 2</i></p>\nWith a set of board Tessel 2 there should be also ordered a module for motor operation Servo Module PCA96853 (pic. 3). It will control all the motors.\n\n<img class=\"size-full wp-image-49925 aligncenter\" src=\"/data/blogs/blog2/Servo-Module-PCA9685.jpg\" />\n<p style=\"text-align: left;\"><i>Pic. 3 Servo Module PCA9685</i></p>\nThis module is designed for servo motors operations and our toy has DC-motors. To launch them you should additionally order DC-motor controllers. Unfortunately, I couldn’t find 1 controller that will fulfill all the requirements: starting current power 3.5A, voltage 5-9V that will control 5 motors at the same time. That is why I have decided to design this circuit myself. But if you lack expertise in scheme construction you can buy a ready one at internet shop, for e.g. Single R/C DC Motor Driver5\n<h2>Method to connect Tessel 2 and Robot Arm</h2>\nAs a result of studying of an already existing solutions for launching DC-motors to circuit Tessel 2, I have not found an appropriate solution, that is why I will describe how to create it by yourself.<br>\n\nAt first, we need to figure out what we are dealing with. Servo-module, that can be ordered together with a circuit Tessel 2, is made on the basis of a microchip PCA96854. The PCA9685 is an I²C-bus controlled 16-channel LED controller optimized for Red/Green/Blue/Amber (RGBA) color backlighting applications. Each LED output has its own 12-bit resolution (4096 steps) fixed frequency individual PWM controller that operates at a programmable frequency from a typical of 24 Hz to 1526 Hz with a duty cycle that is adjustable from 0% to 100% to allow the LED to be set to a specific brightness value. All outputs are set to the same PWM frequency. Consequently, each of the 16-channel tabs presents half H-bridge, and for controlling of motor rotations in both directions we need a full H-bridge (pic. 4).\n\n<img class=\"alignnone size-full wp-image-49920 aligncenter\" src=\"/data/blogs/blog2/H-bridge.png\" />\n<p style=\"text-align: left;\"><em>Pic. 4 H-bridge</em></p>\n<p style=\"text-align: left;\">The basic operating mode of an H-bridge is fairly simple: if Q1 and Q4 are turned on (pic. 5), the left lead of the motor will be connected to the power supply, while the right lead is connected to ground. Current starts flowing through the motor which energizes the motor in (let’s say) the forward direction and the motor shaft starts spinning.</p>\n<p style=\"text-align: left;\"><img class=\"alignnone size-medium wp-image-49923 aligncenter\" src=\"/data/blogs/blog2/Move-forward-300x255.jpg\" /></p>\n<p style=\"text-align: left;\"><em>Pic. 5 Move forward</em></p>\n<p style=\"text-align: left;\">If Q2 and Q3 are turned on, the reverse will happen, the motor gets energized in the reverse direction, and the shaft will start spinning backwards.</p>\n<p style=\"text-align: left;\"><img class=\"alignnone size-medium wp-image-49922 aligncenter\" src=\"/data/blogs/blog2/Move-backward-300x261.jpg\" /></p>\n<p style=\"text-align: left;\"><em>Pic. 6 Move backward</em></p>\n<p style=\"text-align: left;\">In a bridge, you should never ever close both Q1 and Q2 (or Q3 and Q4) at the same time (pic. 7). If you did that, you just have created a really low-resistance path between power and GND, effectively short-circuiting your power supply. This condition is called ‘shoot-through’ and is an almost guaranteed way to quickly destroy your bridge, or something else in your circuit.</p>\n<p style=\"text-align: left;\"><em><img class=\"alignnone size-medium wp-image-49926 aligncenter\" src=\"/data/blogs/blog2/Shoot-through-state-300x252.jpg\" /></em></p>\n<p style=\"text-align: left;\"><em>Pic. 7 Shoot-through state</em></p>\nSo in order to implement full control of a motor we will use just two rows of pins. Final circuit of controlling a motor looks like this:\n\n<img class=\"alignnone size-medium wp-image-49930 aligncenter\" src=\"/data/blogs/blog2/Wiring-a-motor-to-the-PCA9685-273x300.jpg\" />\n<p style=\"text-align: left;\"><em>Pic. 8 Wiring a motor to the PCA9685</em></p>\n<p style=\"text-align: left;\">The finished board looks like this:</p>\n<p style=\"text-align: left;\"><img class=\"alignnone wp-image-49919 aligncenter\" src=\"/data/blogs/blog2/Done-scheme-225x300.jpg\" /></p>\n<p style=\"text-align: left;\"><em>Pic. 9 Done scheme</em></p>\n\n<h2>Description of work with PCA9685</h2>\n;\n\nTechnical writing of PCA96854 says this microcircuit supports I²C and uses 0x06 - 0x45 registers to set signals at the outputs. The function that returns registers addresses and their values to set motor start will look like this:\n\n<pre><code>\n/**\n* Return address of registers and value for set motor state\n*\n* @param pinIndex Pin index 1-10 (we have only 5 motors)\n* @param value Value to set\n* @return array\n*/\n\nfunction getChainValues(pinIndex, value) {\n// pca9685 registers\nvar LED0_ON_L = 0x06;\nvar LED0_ON_H = 0x07;\nvar LED0_OFF_L = 0x08;\nvar LED0_OFF_H = 0x09;\n\n// values\nvar convertOn = 0;\nvar convertOff = value;\n\nvar index = (pinIndex - 1) * 4;\nvar chain = [\nLED0_ON_L + index, LED0_ON_H + index,\nLED0_OFF_L + index, LED0_OFF_H + index\n];\nvar values = [\nconvertOn, convertOn &gt;&gt; 8,\nconvertOff, convertOff &gt;&gt; 8\n];\nreturn [chain, values];\n}\n</code></pre>\n\nAs I wrote before, we have to prevent the situation when motor gets immediately two signals “move forward” and “move backward”, so we will add this logic to the function.\n\n<pre><code>\nvar DIRECTION_NONE = -1;\nvar DIRECTION_FORWARD = 0;\nvar DIRECTION_BACKWARD = 1;\n\n/**\n* Return signals for setting motor state\n* @param motorIndex Motor index\n* @param direction Direction of rotate (DIRECTION_NONE, DIRECTION_FORWARD, DIRECTION_BACKWARD)\n* @returns {*[]}\n*/\nfunction getMotorState(motorIndex, direction) {\nvar MAX = 4096;\nvar chain = [], values = [];\n\nvar forwardIndex = motorIndex;\nvar backwardIndex = motorIndex + 1;\nvar chain1, chain2;\n\nif (direction == DIRECTION_NONE) {\n// stop all motors\nchain1 = getChainValues(forwardIndex, 0);\nchain2 = getChainValues(backwardIndex, 0);\n} else if (direction == DIRECTION_FORWARD) {\n// stop backward and start forward\nchain1 = getChainValues(backwardIndex, 0);\nchain2 = getChainValues(forwardIndex, MAX / 2);\n} else if (direction == DIRECTION_BACKWARD) {\n// stop forward and start backward\nchain1 = getChainValues(forwardIndex, 0);\nchain2 = getChainValues(backwardIndex, MAX / 2);\n}\n\nchain = chain.concat(chain1[0]);\nvalues = values.concat(chain1[1]);\n\nchain = chain.concat(chain2[0]);\nvalues = values.concat(chain2[1]);\n\nreturn [chain, values];\n}\n</code></pre>\n\nAlso I decided to save state of all motors at all time and send it at every state change of one of motors, so the function that changes state of a motor will look like this:\n\n<pre><code>\nvar MOTOR1 = 1;\nvar MOTOR2 = 3;\nvar MOTOR3 = 5;\nvar MOTOR4 = 7;\nvar MOTOR5 = 9;\n\nvar motorStates = {};\nmotorStates[MOTOR1] = DIRECTION_NONE;\nmotorStates[MOTOR2] = DIRECTION_NONE;\nmotorStates[MOTOR3] = DIRECTION_NONE;\nmotorStates[MOTOR4] = DIRECTION_NONE;\nmotorStates[MOTOR5] = DIRECTION_NONE;\n\n/**\n* Write states of all motors into controller\n* @param states\n*/\nfunction writeValues(states) {\nvar chain = [], values = [];\nfor (var motorIndex in states) {\nif (!states.hasOwnProperty(motorIndex)) {\nreturn;\n}\n\nvar chains = getMotorState(parseInt(motorIndex), states[motorIndex]);\n\nchain = chain.concat(chains[0]);\nvalues = values.concat(chains[1]);\n}\nservo._chainWrite(chain, values);\n}\n\n/**\n* Change motor state\n*\n* @param motorIndex Motor index (1-5)\n* @param direction Direction of rotate (DIRECTION_NONE, DIRECTION_FORWARD, DIRECTION_BACKWARD)\n*/\nfunction setMotorState(motorIndex, direction) {\nmotorStates[motorIndex] = direction;\nwriteValues(motorStates);\n}\n\nfunction stopMotor(index) {\nmotorStates[index] = DIRECTION_NONE;\nwriteValues(motorStates);\n}\n</code></pre>\n\nUnlike servo motors DC-motors can not return for a certain angle, the only way to control them is time, so for convenience I made a function that sets the state of the engine and waits some time before the next action.\n\n<pre><code>\n/**\n* Change motor state and wait some time\n*\n* @param motorIndex Motor index (1-5)\n* @param direction Direction of rotate (DIRECTION_NONE, DIRECTION_FORWARD, DIRECTION_BACKWARD)\n* @param time Time to wait\n* @returns {Promise}\n*/\nfunction setMotorStateForTime(motorIndex, direction, time) {\nreturn new Promise(function (resolve) {\nsetMotorState(motorIndex, direction);\n\nsetTimeout(resolve, time);\n});\n}\n</code></pre>\n\nThat’s all, with help of this simple function now we can build a complex algorithm. For example, algorithm that moves the hand forward and then backward during 1 second looks like:\n\n<pre><code>\nservo.on('ready', function () {\nvar time = 1000;\n\nsetMotorStateForTime(MOTOR2, DIRECTION_FORWARD, time).then(function () {\nconsole.info('Move M2 forward');\nsetMotorStateForTime(MOTOR2, DIRECTION_BACKWARD, time).then(function () {\nconsole.info('Move M2 backward');\n\nstopMotor(MOTOR2);\n});\n});\n});\n</code></pre>\n\nWith the next step I have decided to make it possible to operate the Arm with frontend. For this I have launched Socket.IO6:\n\n<pre><code>\nvar fs = require('fs');\nvar socketIo = require('socket.io');\n\nvar server = http.createServer(function (request, response) {\nresponse.writeHead(200, {&quot;Content-Type&quot;: &quot;text/html&quot;});\n\n// Use fs to read in index.html\nfs.readFile(__dirname + '/index.html', function (err, content) {\n// If there was an error, throw to stop code execution\nif (err) { throw err; }\n\n// Serve the content of index.html read in by fs.readFile\nresponse.end(content);\n});\n});\n\nvar io = socketIo(server);\n\nio.on('connection', function(socket){\nsocket.on('setMotorStateForTime', setMotorStateForTime);\nsocket.on('setMotorState', setMotorState);\nsocket.on('stopMotor', stopMotor)\n});\nserver.listen(80);\n</code></pre>\n\nFor convenience I have decided to use AngularJS7. Index.html file looks as follows:\n\n<pre><code>\n&lt;!doctype html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n&lt;head&gt;\n    &lt;meta charset=&quot;UTF-8&quot;&gt;\n\n    &lt; script src=&quot;angular.min.js&quot;&gt;&lt; /script&gt;\n    &lt;script src=&quot;socket.io.js&quot;&gt;&lt; /script&gt;\n\n    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css&quot;&gt;\n\n            &lt; script&gt;\n    var MOTOR1 = 1;\n    var MOTOR2 = 3;\n    var MOTOR3 = 5;\n    var MOTOR4 = 7;\n    var MOTOR5 = 9;\n\n    var DIRECTION_NONE = -1;\n    var DIRECTION_FORWARD = 0;\n    var DIRECTION_BACKWARD = 1;\n\n\n    var app = angular.module('app', [])\n    app.controller('MainCtrl', function ($scope) {\n        var socket = io('http://192.168.1.101'); // Tessel wifi address\n\n        var time = 100;\n\n        $scope.DIRECTION_FORWARD = DIRECTION_FORWARD;\n        $scope.DIRECTION_BACKWARD = DIRECTION_BACKWARD;\n        $scope.DIRECTION_NONE = DIRECTION_NONE;\n\n        $scope.motorStates = {};\n        $scope.motorStates[MOTOR1] = DIRECTION_NONE;\n        $scope.motorStates[MOTOR2] = DIRECTION_NONE;\n        $scope.motorStates[MOTOR3] = DIRECTION_NONE;\n        $scope.motorStates[MOTOR4] = DIRECTION_NONE;\n        $scope.motorStates[MOTOR5] = DIRECTION_NONE;\n\n        $scope.motors = [\n            MOTOR1,\n            MOTOR2,\n            MOTOR3,\n            MOTOR4,\n            MOTOR5\n        ];\n\n        socket.on('motorStops', function (index) {\n            $scope.motorStates[index] = DIRECTION_NONE;\n        });\n\n        $scope.forward = function (index) {\n            $scope.motorStates[index] = DIRECTION_FORWARD;\n            socket.emit('setMotorStateForTime', index, DIRECTION_FORWARD, time);\n        };\n\n        $scope.backward = function (index) {\n            $scope.motorStates[index] = DIRECTION_BACKWARD;\n            socket.emit('setMotorStateForTime', index, DIRECTION_BACKWARD, time);\n        };\n\n        $scope.stop = function (index) {\n            $scope.motorStates[index] = DIRECTION_NONE;\n            socket.emit('stopMotor', index);\n        };\n    })\n    &lt; /script&gt;\n\n    &lt;/head&gt;\n    &lt;body ng-app=&quot;app&quot; ng-controller=&quot;MainCtrl&quot; style=&quot;padding: 40px;&quot;&gt;\n\n\n            \n&lt;div ng-repeat=&quot;(n, motor) in motors&quot;&gt;\n            Motor #{{n+1}}\n\n\n    \n&lt;div class=&quot;btn-group&quot; role=&quot;group&quot;&gt;\n            &lt;button class=&quot;btn btn-default&quot; ng-class=&quot;{'active': motorStates[motor] == DIRECTION_FORWARD}&quot; ng-click=&quot;forward(motor)&quot;&gt;forward\n            &lt;/button&gt;\n            &lt;button class=&quot;btn btn-default&quot; ng-class=&quot;{'active': motorStates[motor] == DIRECTION_BACKWARD}&quot; ng-click=&quot;backward(motor)&quot;&gt;backward\n            &lt;/button&gt;\n            &lt;button class=&quot;btn btn-default&quot; ng-class=&quot;{'active': motorStates[motor] == DIRECTION_NONE}&quot; ng-click=&quot;stop(motor)&quot;&gt;Stop\n            &lt;/button&gt;\n            &lt;/div&gt;\n\n\n            &lt;hr/&gt;\n            &lt;/div&gt;\n\n\n\n            &lt;/body&gt;\n            &lt;/html&gt;\n\n            </code></pre>\n\nAs you can see it from the code I am connecting to Tessel via WiFi, indicating its address 192.168.1.101. As a result, we have a web page where we can control all the engines of the Arm.\n\n<img class=\"alignnone wp-image-49929 aligncenter\" src=\"/data/blogs/blog2/Webpage-for-controlling-the-arm-274x300.jpg\" />\n<p style=\"text-align: left;\"><em>Pic. 10: Webpage for controlling the arm</em></p>\nWith the next step I would like to show how to define a current position of an Arm with the help of a webcam, because this toy has usual DC-motors, that don’t show its current position.\n\nFor this I will use an opensource library ArUco8. ArUco is a minimal library for Augmented Reality applications based on OpenCv9. This library is ported on JavaScript -<b> js-aruco</b>10. Firstly, you need to print out markers, that will be placed on the Arm elements.\n\n<img class=\" wp-image-49921 aligncenter\" src=\"/data/blogs/blog2/markers-300x81.jpg\" />\n<p style=\"text-align: left;\"><em>Pic. 11 Markers</em></p>\n<p style=\"text-align: left;\">These markers are similar to QR codes, but they are more simplified. Each of them contains its own individual code, that will help us differentiate dots from one another. Lets modificate our   index.html:</p>\n\n\n<pre><code>\n    &lt;!-- put this in head --&gt;\n    &lt; script src=&quot;cv.js&quot;&gt;&lt;/ script&gt;\n            &lt; script src=&quot;aruco.js&quot;&gt;&lt;/ script&gt;\n            &lt; script src=&quot;lodash.js&quot;&gt;&lt;/ script&gt;\n\n            &lt;!-- this in body --&gt;\n            &lt;video id=&quot;video&quot; autoplay=&quot;true&quot; style=&quot;display:none;&quot;&gt;&lt;/video&gt;\n            &lt;canvas id=&quot;canvas&quot; style=&quot;width:640px; height:480px;&quot;&gt;&lt;/canvas&gt;\n            </code></pre>\n\n&nbsp;\n\nNow we can write a script, that will identify markers in the video stream and draw a current position of a Robot Arm.\n\n<pre><code>\n\n    var video, canvas, context, imageData, detector;\n\n    function onLoad(){\n        video = document.getElementById(&quot;video&quot;);\n        canvas = document.getElementById(&quot;canvas&quot;);\n        context = canvas.getContext(&quot;2d&quot;);\n\n        canvas.width = parseInt(canvas.style.width);\n        canvas.height = parseInt(canvas.style.height);\n\n        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;\n        if (navigator.getUserMedia){\n            function successCallback(stream){\n                if (window.webkitURL) {\n                    video.src = window.webkitURL.createObjectURL(stream);\n                } else if (video.mozSrcObject !== undefined) {\n                    video.mozSrcObject = stream;\n                } else {\n                    video.src = stream;\n                }\n            }\n            function errorCallback(error){\n            }\n\n            navigator.getUserMedia({video: true}, successCallback, errorCallback);\n            detector = new AR.Detector();\n            requestAnimationFrame(tick);\n        }\n    }\n\n    function tick(){\n        requestAnimationFrame(tick);\n\n        if (video.readyState === video.HAVE_ENOUGH_DATA){\n            snapshot();\n\n            // detect markers on video snapshot\n            var markers = detector.detect(imageData);\n\n            // find all point of arms\n            var marker1 = _.find(markers, { id: 963 });\n            var marker2 = _.find(markers, { id: 45 });\n            var marker3 = _.find(markers, { id: 3 });\n            var marker4 = _.find(markers, { id: 1001 });\n\n            if (marker1 &amp;&amp; marker2 &amp;&amp; marker3 &amp;&amp; marker4) {\n                markers = [marker1, marker2, marker3, marker4];\n\n                // draw all markers on canvas\n                context.lineWidth = 10;\n                context.strokeStyle = &quot;lightgreen&quot;;\n                context.beginPath();\n\n                for (i = 0; i !== markers.length; ++ i){\n                    var corner = markers[i].corners[0];\n                    var nextMarker = markers[i + 1];\n\n                    context.moveTo(corner.x, corner.y);\n                    if (nextMarker) {\n                        context.lineTo(nextMarker.corners[0].x, nextMarker.corners[0].y);\n                    }\n                }\n\n                context.stroke();\n                context.closePath();\n            }\n        }\n    }\n    // make snapshot from camera\n    function snapshot(){\n        context.drawImage(video, 0, 0, canvas.width, canvas.height);\n        imageData = context.getImageData(0, 0, canvas.width, canvas.height);\n    }\n    window.onload = onLoad;\n    </code></pre>\n\nAs a result, we will receive a process of a Robot Arm identification in the real time:\n\n<img class=\" wp-image-49927 aligncenter\" src=\"/data/blogs/blog2/Snapshot-from-recognizing-script-300x226.png\" />\n<p style=\"text-align: left;\"><em>Pic. 12: Snapshot from recognizing script</em></p>\nWith the help of these data we can define a slope angle of every part of the hand:\n\n<pre><code>\n    function getAngle(p1, p2, p3) {\n        var ap2 = { x: p2.x - p1.x, y: p2.y - p1.y };\n        var cp2 = { x: p2.x - p3.x, y: p2.y - p3.y };\n        // dot product\n        var dot = (ap2.x * cp2.x + ap2.y * cp2.y);\n        // length square of both vectors\n        var abSqr = ap2.x * ap2.x + ap2.y * ap2.y;\n        var cbSqr = cp2.x * cp2.x + cp2.y * cp2.y;\n        // square of cosine of the needed angle\n        var cosSqr = dot * dot / abSqr / cbSqr;\n        // this is a known trigonometric equality:\n        // cos(alpha * 2) = [ cos(alpha) ]^2 * 2 - 1\n        var cos2 = 2 * cosSqr - 1;\n\n        // Here's the only invocation of the heavy function.\n        // It's a good idea to check explicitly if cos2 is within [-1 .. 1] range\n        var alpha2 = (cos2 &lt;= -1) ? Math.PI : (cos2 &gt;= 1) ? 0 : Math.acos(cos2);\n        var rslt = alpha2 / 2;\n        var rs = rslt * 180 / Math.PI;\n        return Math.round(rs * 100) / 100;\n    }\n\n    var angle1 = getAngle(marker1.corners[0], marker2.corners[0], marker3.corners[0]);\n    var angle2 = getAngle(marker2.corners[0], marker3.corners[0], marker4.corners[0]);\n    </code></pre>\n\nThat’s it. By using these data we can create different control scripts, calibration or define a starting position of an Arm.\n<h2>Conclusion</h2>\nIn this article I have described ways to connect a toy Robot Arm to the microcontroller Tessel 2 and programme it. We have also examined how to launch a Socket.IO library in order to transfer all main logic to the frontend side, that will help us control an Arm remotely by connecting it to wifi and eliminate the need to download an upgraded programme to the microcontroller. Taking into consideration a simple construction of a toy, especially lack of possibiity to get a current position of each part, I have shown how to do this using simple webcam. Of course, an algorithm is quite simple, but this is only the beginning. The next steps are: movements kinematics, motion of an Arm from position A to position B and I was even thinking how to make movements calibration through genetic algorithm. As far as it is hard to include all these into one article, you can keep track of next development process on my repository: <a href=\"https://github.com/elifTech/robotkit-tessel\">https://github.com/elifTech/robotkit-tessel</a>\n<h2>Interesting to read:</h2>\n<ol>\n \t<li><a href=\"http://www.societyofrobots.com/robot_arm_tutorial.shtml\">ROBOT ARM TUTORIAL</a></li>\n \t<li><a href=\"https://www.hackster.io/taifur/complete-motor-guide-for-robotics-05d998\">Complete Motor guide for Robotics</a></li>\n \t<li><a href=\"http://start.tessel.io/modules/servo\">Tessel SERVO</a></li>\n \t<li><a href=\"http://jjmie.hu.edu.jo/files/JJMIE-V2-N3-press/2(16-21).pdf\">Motion Planning for a Robot Arm by Using Genetic Algorithm</a></li>\n \t<li><a href=\"http://blog.robotiq.com/how-to-calculate-a-robots-forward-kinematics-in-5-easy-steps\">How to Calculate a Robot's Forward Kinematics in 5 Easy Steps</a></li>\n \t<li><a href=\"https://www.researchgate.net/file.PostFileLoader.html?id=57cd4b20615e274c742de265&amp;assetKey=AS%3A402906923716613%401473071904615\">Solving Kinematics Problems of a 6-DOF Robot Manipulator</a></li>\n</ol>\n<h2>References</h2>\n<ol>\n \t<li><a href=\"https://www.amazon.com/Build-Your-Own-Robot-Arm/dp/B002HXTONC\">Robot Arm - Build Your Own Robotic Arm!</a></li>\n \t<li><a href=\"https://tessel.io/\">Tessel2</a></li>\n \t<li><a href=\"https://www.fabtolab.com/tessel-servo-module\">Tessel Servo Module</a></li>\n \t<li><a href=\"https://cdn-shop.adafruit.com/datasheets/PCA9685.pdf\">Datasheet PCA9685</a></li>\n \t<li><a href=\"http://www.robotshop.com/en/wasp-10a-6-5v-28v-single-r-c-dc-motor-driver.html\">Wasp 10A, 6.5V to 28V Single R/C DC Motor Driver</a></li>\n \t<li><a href=\"http://socket.io/\">SocketIO</a></li>\n \t<li><a href=\"https://angularjs.org/\">AngularJS</a></li>\n \t<li><a href=\"https://www.uco.es/investiga/grupos/ava/node/26\">ArUco: a minimal library for Augmented Reality applications based on OpenCV</a></li>\n \t<li><a href=\"http://opencv.org/\">OpenCV</a></li>\n \t<li><a href=\"https://github.com/jcmellado/js-aruco\">js-aruco</a></li>\n</ol>\n&nbsp;",
      backgroundImage: '/data/blogs/blog2/main.jpg',
      mainImage: '/data/blogs/blog2/main.jpg',
      authors: [],
      seo: {
        title: 'ELIFTECH | Blog | Experiments | Robot Arm Controlling with JavaScript',
        description: 'Find out how to create a Robot Arm from a toy, program it with JavaScript, control remotely via WiFi and define an Arm condition for calibration over webcam.',
        keywords: ' Robotics, robot, droid, javascript, js, Robotic Arm, Tessel 22, Tessel, Raspberry Pi, Arduino, ODROID, Tessel 2, PCA9685, Socket.IO6, AngularJS7, Socket.IO, javascript tutorial, software development, robot technology, robot kits, mechanical arm, robotic arm kit, custom software development'
      }
    },
    {
      id: 3,
      url: '3-javascript-digest-january-2017',
      "title": "JavaScript digest. January 2017",
      "pubDate": "Tue, 07 Feb 2017 09:36:42 +0000",
      category: "news",
      rate: '4.2',
      tags: "javascript, js, microsoft_edge, mithril, monster_drift, npm_cli, opera_neon, rax, safari, updates, webgl2, webpack_2_2, wordpress_rest_api, ionic",
      description: "Check out news from JavaScript Universe in our latest JS digest (January '17 edition).",
      text: "Check out news from JavaScript Universe in our latest JS digest (January '17 edition):\n\n<iframe width=\"100%\" height=\"485\" style=\"border: 1px solid #CCC; border-width: 1px; margin-bottom: 5px; max-width: 100%;\" src=\"//www.slideshare.net/slideshow/embed_code/key/rEGTxkIzNdjvjm\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" allowfullscreen=\"allowfullscreen\"> </iframe>\n<div style=\"margin-bottom: 5px;\"><strong> <a title=\"JS digest. January 2017\" href=\"//www.slideshare.net/ElifTech/js-digest-january-2017-71871928\" target=\"_blank\">JS digest. January 2017</a> </strong> from <strong><a href=\"//www.slideshare.net/ElifTech\" target=\"_blank\">ElifTech</a></strong></div>",
      backgroundImage: '/data/blogs/blog3/main.jpg',
      mainImage: '/data/blogs/blog3/main.jpg',
      authors: [],
      seo: {
        title: 'ELIFTECH | Your Trusted IT Partner | JavaScript digest. January 2017',
        description: 'The latest collection of news from JavaScript universe as of January 2017',
        keywords: 'JavaScript, js, opere neon, rax, inferno, wordpressrest api, api, wordpress, webgl, web gl, npi cli, npm, cli, microsoft edge, webpack, ionic, mithril'
      }
    },
    {
      id: 4,
      url: '4-apache-cassandra-overview',
      "title": "Apache Cassandra overview",
      "pubDate": "Wed, 22 Feb 2017 13:55:54 +0000",
      category: "guides",
      rate: '4.5',
      tags: "apache, cassandra, cql, data, database, nosql, programming, software, software_development",
      description: "Short overview of Apache Cassandra: features and benefits, use cases, architecture, CQL, data objects, etc. by Taras Tymoshchuk, software developer at ElifTech.",
      text: "Short overview of Apache Cassandra: features and benefits, use cases, architecture, CQL, data objects, etc.\n<iframe width=\"100%\" height=\"485\" style=\"border: 1px solid #CCC; border-width: 1px; margin-bottom: 5px; max-width: 100%;\" src=\"//www.slideshare.net/slideshow/embed_code/key/Gj7bGTLBtl4aZJ\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" allowfullscreen=\"allowfullscreen\"> </iframe>\n<div style=\"margin-bottom: 5px;\"><strong> <a title=\"Apache Cassandra overview\" href=\"//www.slideshare.net/ElifTech/apache-cassandra-overview-72457354\" target=\"_blank\">Apache Cassandra overview</a> </strong> from <strong><a href=\"//www.slideshare.net/ElifTech\" target=\"_blank\">ElifTech</a></strong></div>",
      backgroundImage: '/data/blogs/blog4/main.png',
      mainImage: '/data/blogs/blog4/main.png',
      authors: [],
      seo: {
        title: 'ELIFTECH | Your Trusted IT Partner | Apache Cassandra overview',
        description: 'Short overview of Apache Cassandra: features and benefits, use cases, architecture, CQL, data objects, etc.',
        keywords: 'software outsourcing, software development, custom software development company, software development outsourcing, Apache Cassandra, Apache, Cassandra, IoT, CQL'
      }
    },
    {
      id: 5,
      url: '5-javascript-digest-february-2017',
      "title": "JavaScript digest. February 2017",
      "pubDate": "Tue, 07 Mar 2017 18:10:19 +0000",
      category: "news",
      rate: '3.7',
      tags: "avascript, js, nodejs, software, software development, twitter",
      description: "Explore JavaScript news in the latest JS digest, February '17 edition,  by our software developer Oleksandr Oliynyk.",
      text: "Explore JavaScript news in the latest JS digest, February '17 edition:\n<ul>\n \t<li>Image manipulating in pure JS;</li>\n \t<li>ES7 and ES8 Features;</li>\n \t<li>Gradient Animations made easy;</li>\n \t<li>NativeScript v.2.5 release;</li>\n \t<li>Electron, project of the Week: Beaker Browser;</li>\n \t<li>V8 Release 5.7;</li>\n \t<li>Twitter goes Node.js;</li>\n \t<li>JavaScript in 2017 – Beyond the Browser;</li>\n \t<li>Building cli applications (cli) with node.js;</li>\n \t<li>JS surprise from MicroSoft;</li>\n \t<li>WebAssembly API MVP is complete.</li>\n</ul>\n<iframe width=\"100%\" height=\"485\" style=\"border: 1px solid #CCC; border-width: 1px; margin-bottom: 5px; max-width: 100%;\" src=\"//www.slideshare.net/slideshow/embed_code/key/EVo8eN8b3NmjdG\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" allowfullscreen=\"allowfullscreen\"> </iframe>\n<div style=\"margin-bottom: 5px;\"><strong> <a title=\"JS digest. February 2017\" href=\"//www.slideshare.net/ElifTech/js-digest-february-2017-72906606\" target=\"_blank\">JS digest. February 2017</a> </strong> from <strong><a href=\"//www.slideshare.net/ElifTech\" target=\"_blank\">ElifTech</a></strong></div>",
      backgroundImage: '/data/blogs/blog3/main.jpg',
      mainImage: '/data/blogs/blog3/main.jpg',
      authors: [],
      seo: {
        title: 'ELIFTECH | Your Trusted IT Partner | JavaScript digest. February 2017',
        description: 'The latest collection of news from JavaScript universe as of February 2017',
        keywords: 'JavaScript, js, mobile, nodejs, software outsourcing, software development, custom software development company, software development outsourcing,  ES7, ES8, NativeScript,  Electron, Node.js, node ,nodejs, cli, API, WebAssembly'
      }
    },
    {
      id: 6,
      url: '6-three-js-unreal-unity-vrar-without-9-circles-of-hell',
      "title": "Three JS, Unreal, Unity. VR/AR without 9 circles of hell",
      "pubDate": "Wed, 15 Mar 2017 16:05:20 +0000",
      category: "guides",
      rate: '5.0',
      tags: "javascript, 3D, 2D, augmented_reality, osgjs, three_js, unity, unreal, virtual, vr, ar, mr, virtual_reality, mixed_reality",
      description: "How to create VR/AR/MR without going through 9 circles of hell using Three JS, Unreal and Unity.",
      text: "<p>How to create VR/AR/MR without going through 9 circles of hell using Three JS, Unreal and Unity</p>\n\n<iframe width=\"100%\" height=\"485\" style=\"border: 1px solid #CCC; border-width: 1px; margin-bottom: 5px; max-width: 100%;\" src=\"//www.slideshare.net/slideshow/embed_code/key/J4xSNR9HxtQxyg\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" allowfullscreen=\"allowfullscreen\"> </iframe>\n<ul>\n \t<li>Three.js cookbook</li>\n \t<li>Easy 0-20 level\n<ul>\n \t<li> Scene</li>\n \t<li>OBJLoader Basic &amp; With .mtl</li>\n \t<li>Material Library File (.mtl)</li>\n \t<li>Render scene</li>\n</ul>\n</li>\n \t<li>20-65 level\n<ul>\n \t<li> Workflow</li>\n \t<li> Audio</li>\n</ul>\n</li>\n \t<li>Hard 65-80 level\n<ul>\n \t<li> Shaders</li>\n</ul>\n</li>\n \t<li> OSGJS</li>\n \t<li>Unity/Unreal</li>\n \t<li>VR</li>\n \t<li>AR</li>\n \t<li>MR</li>\n \t<li>Overdraw</li>\n \t<li>Occlusion</li>\n \t<li>Rendering</li>\n \t<li>Minimizing Latency</li>\n</ul>\n&nbsp;",
      backgroundImage: '/data/blogs/blog7/main.png',
      mainImage: '/data/blogs/blog7/main.png',
      authors: [],
      seo: {
        title: 'ELIFTECH | Software | VR/AR without 9 circles of hell: JS, Unreal, Unity',
        description: 'How to create VR/AR/MR without going through 9 circles of hell using Three JS, Unreal and Unity.',
        keywords: 'software outsourcing, software development, custom software development company, software development outsourcing, VR, AR, Augmented Reality, Virtual reality, JavaScript, js, Three.js, Unity, Unreal, MR, Mixed reality'
      }
    },
    {
      id: 7,
      url: '7-announcement-new-logo-brand-identity',
      "title": "Announcement of Our new Logo & Brand Identity",
      "pubDate": "Wed, 29 Mar 2017 08:45:06 +0000",
      category: "blogs",
      rate: '5.0',
      tags: "ElifTech_brand, new_logo",
      description: "We are proud to announce the launch of a new company logo and an updated brand identity as part of the ongoing evolution of our company’s brand.",
      text: "<span>We are proud to announce the launch of a new company logo and an updated brand identity as part of the ongoing evolution of our company’s brand.</span>\n\n<span>You’ll see the new look anywhere we’re out in public, like our website, social media pages (<a href=\"https://www.linkedin.com/company-beta/10329604\">Linkedin</a>, <a href=\"https://www.facebook.com/eliftech/\">Facebook</a>, <a href=\"https://twitter.com/ElifTech\">Twitter</a>, <a href=\"https://plus.google.com/+Eliftech\">Google+</a>) and marketing materials. We will launch the new version of our website soon, as well. </span>\n\n<span>We believe the new look better matches what we’ve become in 2 years: a team of continuously evolving technophiles that transform business ideas into valuable high-tech products.</span>\n\n<img class=\"aligncenter wp-image-49971\" src=\"/data/blogs/blog6/eliftech_logo_idea.jpg\" alt=\"eliftech logo idea\" width=\"550\" height=\"291\" />\n\n<span>After careful consideration, we chose a new logo that better represents who we are with a more modern look that captures the company’s future direction. A nanite or nanomachine is one of the symbols of the future technologies, and nanorobotics, in general, is an emerging scientific field in R&amp;D phase.</span>\n\n&nbsp;\n\n<img class=\"aligncenter wp-image-49972\" src=\"/data/blogs/blog6/eliftech_Logo_construction.jpg\" alt=\"Eliftech Logo construction\" width=\"550\" height=\"283\" />\n\n<span>Our design goal was to better match how we look to our values and the customers we serve. A small team inside the company worked to find something that appeared technologically advanced, companionable, ambitious, connected and devoted.</span>\n\n<img class=\"aligncenter wp-image-49974\" src=\"/data/blogs/blog6/eliftech_Logo_variations.jpg\" alt=\"\" width=\"550\" height=\"176\" />\n\n<span>We hope you like this new look and feel for ElifTech! Look out for more updates—like an updated look of our brand-new website —  as we continue to try to better serve our customers in all aspects of software product development using the latest technologies and frameworks, and quickly adjust to customer’s demands.</span>\n\n&nbsp;",
      backgroundImage: '/data/blogs/blog6/main.jpg',
      mainImage: '/data/blogs/blog6/main.jpg',
      authors: [],
      seo: {
        title: 'ELIFTECH | Your Trusted IT Partner | New Brand Identity',
        description: 'We are proud to announce the launch of a new company logo and an updated brand identity as part of the ongoing evolution of our company’s brand.',
        keywords: 'software outsourcing, software development, custom software development company, software development outsourcing, brand, logo'
      }
    },
    {
      id: 8,
      url: '8-javascript-digest-march-2017',
      "title": "JavaScript digest. March 2017",
      "pubDate": "Tue, 11 Apr 2017 11:13:41 +0000",
      category: "news",
      rate: '4.3',
      tags: "javascript, js, angular, facebook, firefox, frontend, html, hyperapp, nodejs, react native, safari, webvr",
      description: "JavaScript news, March '17 edition",
      text: "<h2><span class=\"font-211442 font-180609\">JavaScript news, March '17 edition:</span></h2>\n<iframe width=\"100%\" height=\"485\" style=\"border: 1px solid #CCC; border-width: 1px; margin-bottom: 5px;\" src=\"//www.slideshare.net/slideshow/embed_code/key/ElasBSHmgaZmWr\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" allowfullscreen=\"allowfullscreen\"> </iframe>\n<h3><span style=\"color: #0b314f;\"><strong>Content</strong></span></h3>\n<p><strong><span>New libs:</span></strong></p>\n\n<ul>\n \t<li><span>HyperApp: one more functional JS framework for FE</span></li>\n \t<li><span>15 Interesting JavaScript and CSS Libraries for March 2017</span></li>\n \t<li><span>Nginx JavaScript is ready for prime time</span></li>\n \t<li><span>Node.js Wrapper for YOLO/Darknet recognition framework</span></li>\n \t<li><span>Natural language detection</span></li>\n \t<li><span>2D JavaScript Physics Engine</span></li>\n \t<li><span>javascript deep learning and reinforcement learning library</span></li>\n \t<li><span>Perceptual JPEG encoder</span></li>\n \t<li><span><span>AR.js - Efficient Augmented Reality for the Web using ARToolKi</span><span>t</span></span></li>\n</ul>\n<p><strong><span>New releases:</span></strong></p>\n\n<ul>\n \t<li><span>Angular 4</span></li>\n \t<li><span>Next.js 2.0 is out</span></li>\n</ul>\n<p><strong><span>IDE news:</span></strong></p>\n\n<ul>\n \t<li><span>React JavaScript library gets an IDE</span></li>\n \t<li><span>WebStorm 2017.1 released</span></li>\n</ul>\n<p><span><strong>Browser news:</strong></span></p>\n\n<ul>\n \t<li><span>Safari 10.1 out</span></li>\n \t<li><span>Firefox 54 dev edition</span></li>\n \t<li><span>Firefox 52</span></li>\n</ul>\n<p><span>  <strong>Misc &amp;  Some statistics</strong></span></p>",
      backgroundImage: '/data/blogs/blog8/main.jpg',
      mainImage: '/data/blogs/blog8/main.jpg',
      authors: [],
      seo: {
        title: 'ELIFTECH | Your Trusted IT Partner | JavaScript digest. March 2017',
        description: 'The latest collection of news from JavaScript universe as of March  2017',
        keywords: 'JavaScript, js, mobile, nodejs, react native, node, software outsourcing, software development, custom software development company, software development outsourcing,  CSS, Augmented Reality, AR, Angular, Angular 4, Angularjs, Next.js, reactjs, react js, react, safari, firefox'
      }
    },
    {
      id: 9,
      url: '9-eliftechs-team-win-angular-attack-hackathon',
      "title": "ElifTech's team won ANGULAR ATTACK hackathon in the category Public Favorite",
      "pubDate": "Wed, 03 May 2017 10:36:38 +0000",
      category: "events",
      rate: '5.0',
      tags: "Hackatons, Angular, Angular_Attack, angular2, ng2, Google_Maps_API, nodejs",
      description: "We are proud to announce that our team won.",
      text: "<span>We are proud to announce that our team won <a href=\"http://www.angularattack.com/\">ANGULAR ATTACK</a> hackathon in the category Public Favorite </span><span>with <a href=\"http://www.angularattack.com/entries/94-eliftech\">TripStory</a> project</span>\n\n&nbsp;\n\n<a href=\"http://eliftech.2017.angularattack.io\"><a href=\"https://eliftech-tripstory.herokuapp.com/#/login\" target='_blank'><img class=\"aligncenter wp-image-49987\" src=\"/data/blogs/blog9/trip-story.jpg\" alt=\"TripStory\" width=\"500\" height=\"375\" /></a></a>\n\n<span>TripStory is an excellent tool to create records of your adventures. All you need is just to add some of your photos and write a little description of your best trip experience. Spend some time on that, and you will have a photo story probably even better than Google Photos stories</span>\n\n<span>View the screencast: <a href=\"https://youtu.be/MKsCsbobzUI\">https://youtu.be/MKsCsbobzUI</a></span>\n<h3><span>Built With</span></h3>\n<div class=\"resources\">\n<div class=\"user-markdown\">\n<ul>\n \t<li><span>angular2-webpack-starter - <a href=\"https://github.com/AngularClass/angular2-webpack-starter\">https://github.com/AngularClass/angular2-webpack-starter</a></span></li>\n \t<li><span>angular material - <a href=\"https://github.com/angular/material2\">https://github.com/angular/material2</a></span></li>\n \t<li><span>ng2-ui-auth</span></li>\n \t<li><span>ng2-file-upload</span></li>\n \t<li><span>Google Maps API</span></li>\n \t<li><span>node.js-boilerplate - server template <a href=\"https://github.com/elifTech/nodejs-boilerplate\">https://github.com/elifTech/nodejs-boilerplate</a></span></li>\n \t<li><span>node-</span>exif<span> - for reading coordinates from photos <a href=\"https://github.com/gomfunkel/node-exif\">https://github.com/gomfunkel/node-exif</a></span></li>\n</ul>\n<span>Congratulations to the ElifTech team: <a href=\"http://www.angularattack.com/people/4168-esvit\">Vitalii</a>, <a href=\"http://www.angularattack.com/people/5185-polluxx\">Yurii</a>, and <a href=\"http://www.angularattack.com/people/7501-MikeKoval\">Mykhailo</a>. Additional thanks to Oksana, Marina, Taras and Oleksandr. </span>\n\n<span>Keep on making us proud!</span>\n\n</div>\n&nbsp;\n\n<em><span>ABOUT</span></em>\n\n<em><span><strong>Angular Attack</strong> is a 48-hour hackathon featuring Angular. It's an online, virtual competition with contestants worldwide.</span></em>\n\n</div>\n<em><span><strong>ElifTech</strong> is a young, ambitious and trusted global technology service company that designs, builds and implements efficient software technology solutions supplying the needs of your business.\nWe cover all aspects of software product development using the latest technologies and frameworks, and quickly adjust to customer’s demands. Our approach combines research, design, and development to rapidly solve problems, create and test prototypes and launch a product into the market in an iterative way. We create intelligent applications that connect people, systems, devices, and data.\nElifTech is a team of continuously evolving technophiles that transform business ideas into valuable high-tech products.</span></em>",
      backgroundImage: '/data/blogs/blog9/main.jpg',
      mainImage: '/data/blogs/blog9/main.jpg',
      authors: [],
      seo: {
        title: 'ELIFTECH | Team won Public Favorite at  ANGULAR ATTACK hackathon',
        description: 'We are proud to announce that our team won ANGULAR ATTACK hackathon in the category Public Favorite with TripStory project',
        keywords: 'JavaScript, ANGULAR ATTACK hackathon, ANGULAR ATTACK, hackathon, angular, angularjs, angular 2, angilarjs 2, js, web development software, software outsourcing, software development, custom software development company, software development outsourcing, nodejs, node, api'
      }
    },
    {
      id: 10,
      url: '10-javascript-digest-may-2017',
      "title": "JavaScript digest. May 2017",
      "pubDate": "Wed, 07 Jun 2017 09:33:29 +0000",
      category: "news",
      rate: '5.0',
      tags: "chrome, facebook, firefox, google, javascript, js, mobile, nodejs, npm cli, phantomjs, polymer, react native",
      description: "The latest collection of news from JavaScript universe as of May 2017",
      text: "<p>The latest collection of news from JavaScript universe as of May 2017\n"+
        "<h4>Native ES modules at browsers</h4>\n<p>ES modules are starting to land in browsers! They're in…\n<ul>\n    <li>Safari 10.1.</li>\n    <li>Chrome Canary 60 – behind the Experimental Web Platform flag in chrome:flags.</li>\n    <li>Firefox 54 – behind the dom.moduleScripts.enabled setting in <code>about:config</code>.</li>\n    <li>Edge 15 – behind the Experimental JavaScript Features setting in <code>about:flags</code></li>\n</ul>\n<pre>\n<code lang=\"html\">\n  &lt;script type=\"module\">\n    import {addTextToBody} from './utils.js';\n    addTextToBody('Modules are pretty cool.');\n  &lt;/script>\n "+
        " // utils.js\n  export function addTextToBody(text) {\n    const div = document.createElement('div');\n    div.textContent = text;\n    document.body.appendChild(div);\n  }\n</code>\n</pre>\nYou need to know:\n<ul>\n    <li>\"Bare\" import specifiers aren't currently supported</li>\n    <li>nomodule for backwards compatibility</li>\n    <li>Defer by default</li>\n    <li>Inline scripts are also deferred</li>\n    <li>Async works on external &amp; inline modules</li>\n    <li>Modules only execute once</li>\n    <li>Always CORS</li>\n    <li>No credentials</li>\n</ul>\n<p>Read more about it <a href=\"https://jakearchibald.com/2017/es-modules-in-browsers/\">here.</a>\n\n<h4>Cool libs \\m/</h4>\n<h5>HR.js</h5>\n<ul>\n    <li>plugin for highlighting and replacing text in the DOM</li>\n    <li>Zero-dependency</li>\n</ul>\n<pre>\n<code>\n  new HR(\"#replace_highlight_example\", {\n    highlight:\"elit\",\n    replaceWith: \"boo\",\n    backgroundColor:\"#B4FFEB\"\n  }).hr();\n</code>\n</pre>\n<p>Read more about it <a href=\"https://mburakerman.github.io/hrjs/\">here</a>.\n\n<h5>React VR</h5>\n\n<ul>\n    <li>React VR is a framework for the creation of VR applications</li>\n    <li>pairs modern APIs like WebGL and WebVR</li>\n    <li>learn once, write anywhere</li>\n</ul>\n<p>Read more about it <a href=\"https://facebook.github.io/react-vr/ \">here.</a>\n\n<h5>AcrossTabs</h5>\n<ul>\n    <li>cross-origin communication among different browser tabs</li>\n    <li>Fully fledged API to get information regarding the tabs</li>\n    <li>Only ~4 KB gzipped</li>\n    <li>Parent → Child communication</li>\n</ul>\n<p>Read more about it <a href=\"https://github.com/wingify/across-tabs\">here.</a>\n\n  <h5>Stylelint</h5>\n<ul>\n    <li> modern CSS linter</li>\n    <li>Understands CSS-like syntaxes</li>\n    <li>Automatically fix some stylistic warnings</li>\n    <li>Used by Facebook, Github, Wikimedia, GSA, and WordPress among others</li>\n</ul>\n<p>Read more about it <a href=\"https://stylelint.io/\">here.</a>\n\n  <h5>Sizzy</h5>\n<ul>\n    <li>test responsiveness easily</li>\n    <li>has Chrome extension</li>\n</ul>\n<img class=\"aligncenter size-full wp-image-50004\" src=\"/data/blogs/blog10/sizzy.gif\" alt=\"Sizzy\" width=\"1000\" height=\"634\" />\n<p>Read more about it <a href=\"https://sizzy.co/\">here.</a>\n\n<h5>k6</h5>\n<ul>\n    <li>Like unit testing, for performance (load testing)</li>\n    <li>built with Go and JavaScript</li>\n</ul>\n<pre>\n<code>\nimport { check } from \"k6\";\nimport http from \"k6/http\";\n\nexport default function() {\n    let res = http.get(\"https://httpbin.org/\");\n    check(res, {\n        \"is status 200\": (r) =&gt; r.status === 200\n    });\n};\n</code>\n</pre>\n\n<pre>\n<code>\n$docker run -i loadimpact/k6 run --vus 10 --duration 30s -\n</code>\n</pre>\n<p>Read more about it <a href=\"https://k6.io/\">here</a>.\n\n\n<h4>Glimpse, new debugging tool</h4>\n<ul>\n    <li>Full-stack Node.js web diagnostics</li>\n    <li>Information about both client and server-side requests</li>\n    <li>experiment by Microsoft</li>\n</ul>\n&nbsp;\n<p>Magic happens here:\n1. In your app`s root directory, use npm to install Glimpse.\n\n<code>npm install @glimpse/glimpse --save-dev</code>\n\n2. Initialize Glimpse before any other\n<pre>\n<code>\nrequire() or application logic (typically at the top of index.js or app.js).\nif (process.env.NODE_ENV !== 'production') {\n    require('@glimpse/glimpse').init();\n}\n</code>\n</pre>\n3. Open your app in a browser. The Glimpse HUD should now be at the bottom right of your app.\n"+
        "<p><img class=\"aligncenter size-full wp-image-50005\" src=\"/data/blogs/blog10/hud.5ad813f9.svg\" alt=\"Glimpse\" />\n<p>Read more about it <a href=\"http://node.getglimpse.com/\">here</a>.\n\n<h4>Google I/O</h4>\n<ul>\n    <li>Active monthly Android users surpass 2 billion</li>\n    <li>Google Assistant is now available on iOS</li>\n    <li>Android Go aims to connect the “next billion” users online</li>\n    <li>uses neural networks to train other neural networks</li>\n    <li>a shift from mobile-first to AI-first</li>\n</ul>\n<p>Read more about it <a href=\"https://iot-for-all.com/google-io-2017-major-takeaways/ \">here</a>.\n\n&nbsp;\n<h4>Polymer 2.0 landed</h4>\n<ul>\n    <li>support for ES6 class-based syntax</li>\n    <li>lightweight core at just 11k</li>\n    <li>new Polymer Analyzer - a static analyzer for the web</li>\n</ul>\n<p>Read more about it <a href=\"https://www.polymer-project.org/blog/2017-05-15-time-for-two \">here</a>.\n\n&nbsp;\n<h4>The Modern Mobile Web: State of the Union</h4>\n<ul>\n    <li>Posted by Rahul Roy-chowdhury, VP Product Management, Chrome</li>\n    <li> 2,000,000,000 AMP pages have been created</li>\n    <li>Success stories:\n<ul>\n    <li>Average page load time decreased from 12 seconds to less than one second, and conversion rates increased by 95% (Wego’s website)</li>\n    <li>engagement rates have more than doubled since launch (Forbes)</li>\n    <li>20% of users who book using their PWA had previously uninstalled their app (Ola)</li>\n</ul>\n</li>\n</ul>\n<p>Read more about it <a href=\"https://blog.chromium.org/2017/05/the-modern-mobile-web-state-of-union.html \">here.</a>\n\n&nbsp;\n<h4>Wowowowowow npm@5!</h4>\n<ul>\n    <li>A new, standardised lockfile</li>\n    <li>--save is no longer necessary</li>\n    <li>npm no longer blasts your screen with the whole installed tree</li>\n</ul>\n<p>Read more about it <a href=\"http://blog.npmjs.org/post/161081169345/v500\">here.</a>\n\n&nbsp;\n<h4>Carbon node.js v8.0</h4>\n<ul>\n    <li>will become the current LTS version from October 2017 and will be maintained till December 31st, 2019</li>\n    <li>Say hello to the WHATWG URL parser</li>\n    <li>util.promisify()</li>\n    <li>started the process of assigning static error codes to all errors</li>\n    <li>have dropped the \"v\" in Node.js 8</li>\n</ul>\n<p>Read More about it <a href=\"https://nodejs.org/en/blog/release/v8.0.0/ \">here</a>.\n\n&nbsp;\n<h3 style=\"text-align: center;\"><span style=\"color: #13a6e1;\">And few important things to remind from April'17 JavaScript news</h3>\n<h4>React (v15.5.0)</h4>\n<ul>\n    <li>New Deprecation Warnings\n<ul>\n    <li>React.PropTypes and React.createClass</li>\n</ul>\n</li>\n    <li>New packages\n<ul>\n    <li>prop-type and create-react-class</li>\n</ul>\n</li>\n    <li>Discontinuing support for React Addons. The add-ons have now all either been deprecated or moved to separate modules</li>\n    <li>Separating modules and reorganizing them</li>\n    <li>Who will have 0 warnings with 15.5, won’t have them with 16\n</li>\n</ul>\n<p>Read more about it <a href=\"https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html?utm_source=reactdigest&amp;utm_medium=web&amp;utm_campaign=featured \">here</a>.\n\n\n&nbsp;\n<h4>Bye-bye Phantom.js?</h4>\n<ul>\n    <li>Vitaly Slobodin, the main maintainer dropped the project</li>\n    <li>greet headless Chrome (from v59)</li>\n    <li>Chrome asked maintainer to use Chromium as runtime target</li>\n    <li>PhantomJS creator Ariya Hidayat seems to have hopes for PhantomJS on Chromium</li>\n    <li>big challenge. As of this writing, PhantomJS has 1,801 open issues :)</li>\n    <li>and the main maintainer started Phantomium (PhantomJS API with Chrome)</li>\n</ul>\n<p>Read more about it <a href=\"https://www.infoq.com/news/2017/04/Phantomjs-future-uncertain?utm_campaign=infoq_content&amp;utm_source=infoq&amp;utm_medium=feed&amp;utm_term=global \">here</a>.\n\n\n&nbsp;\n<h4>New MS Edge</h4>\n<ul>\n    <li>Web developers can start testing EdgeHTML 15 today by downloading a free virtual machine from Microsoft Edge Dev</li>\n    <li>New tabs management, reading experience…</li>\n    <li>Microsoft Edge on the Creators Update uses 31% less power than Google Chrome 57, and 44% less power than Mozilla Firefox 52</li>\n    <li>For developers: Payment Request API, CSS Custom Properties, WebVR Developer Preview, WebRTC, async-await, TCP Fast Open, Intersection Observer, experimental support for WebAssembly…</li>\n</ul>\n<p>Read more about it <a href=\"https://blogs.windows.com/msedgedev/2017/04/11/introducing-edgehtml-15/#ITkhtxOO2g7pfrBx.97\">here.</a>\n\n&nbsp;\n<h4>New Firefox (v53)</h4>\n<ul>\n    <li>Quantum Compositor Process on Windows</li>\n    <li>Light and Dark Compact Themes</li>\n    <li>New WebExtension Features</li>\n    <li>New CSS Features: Positioned Masks and Flow-Root</li>\n    <li>A Better Default Media Experience</li>\n    <li>64-bit Everywhere</li>\n</ul>\n<p>Read more about it <a href=\"https://hacks.mozilla.org/2017/04/firefox-53-quantum-compositor-compact-themes-css-masks-and-more/ \">here</a>.\n\n&nbsp;\n<h4>New Chrome (v58 and v59b)</h4>\n<ul>\n    <li>IndexedDB 2.0 standard is now fully supported in Chrome</li>\n    <li>Progressive Web Apps become more immersive with <code>display: fullscreen</code></li>\n    <li>goodbye to the <code>clearfix, with display: flow-root</code></li>\n    <li>Headless Chromium</li>\n    <li>Native notifications on macOS</li>\n</ul>\n<p>Read more about v58 <a href=\"https://developers.google.com/web/updates/2017/04/nic58\">here</a>, and about v59b <a href=\"https://blog.chromium.org/2017/05/chrome-59-beta-headless-chromium-native.html\">here</a>.\n\n&nbsp;\n<h4>Browser’s market share</h4>\nAll platforms:\n\n<img class=\"aligncenter size-full wp-image-50006\" src=\"/data/blogs/blog10/platforms_share.png\" alt=\"Browser’s platform\" width=\"800\" height=\"212\" />\n\n<p>Mobile:\n<ul>\n    <li><span style=\"font-family: Lato;\">in 2016 Opera shared that Opera Mini was Africa’s favorite<span style=\"font-family: Lato;\"> browser, with an impressive 58% market share.</li>\n</ul>\n<img class=\"aligncenter size-full wp-image-50007\" src=\"/data/blogs/blog10/Browsers-market-share.png\" alt=\"Mobile Browsers market share\" width=\"800\" height=\"211\" />\n\n<img class=\"aligncenter size-full wp-image-50008\" src=\"/data/blogs/blog10/Browsers-market-share2.png\" alt=\"Browsers market share\" width=\"800\" height=\"458\" />\n\n<p>Read more about it <a href=\"https://medium.com/samsung-internet-dev/think-you-know-the-top-web-browsers-458a0a070175\">here</a>.\n\n&nbsp;\n<h4>Facebook F8 takeaways</h4>\n<ul>\n    <li>Facebook Messenger 2.0 (with Smart Replies)</li>\n    <li>Facebook Camera Becomes an AR Platform</li>\n    <li>Live Video and GIPHY</li>\n    <li>Facebook Spaces, the New VR Platform</li>\n    <li>Ultra-Connectivity (Terragraph and Aquila)</li>\n    <li>360 Degree Camera</li>\n    <li>Silent Speech Recognition\n<ul>\n    <li>‘skin-hearing’ project and thoughts to text</li>\n</ul>\n</li>\n</ul>\n&nbsp;\n\n<img class=\"aligncenter size-full wp-image-50009\" src=\"/data/blogs/blog10/360-Degree-Camera.jpg\" alt=\"Facebook 360 Degree Camera\" width=\"677\" height=\"419\" />\n\n<p>Read more about it <a href=\"http://weplay.co/facebook-f8-2017-event-summary/ \">here</a>.\n\n<p>\nThat's all JS news for now. Stay tuned to get new monthly JavaScript digests!</p>\n<iframe width=\"100%\" height=\"485\" style=\"border: 1px solid #CCC; border-width: 1px; margin-bottom: 5px; max-width: 100%;\" src=\"//www.slideshare.net/slideshow/embed_code/key/xU5j0ZMysv4Jgl\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" allowfullscreen=\"allowfullscreen\"> </iframe>",
      backgroundImage: '/data/blogs/blog10/main.jpg',
      mainImage: '/data/blogs/blog10/main.jpg',
      authors: [],
      seo: {
        title: 'ELIFTECH | Your Trusted IT Partner | JavaScript digest. May 2017',
        description: 'The latest collection of news from JavaScript universe as of May 2017',
        keywords: 'JavaScript, chrome, facebook, firefox, google, js, mobile, nodejs, npm cli, phantomjs, polymer, react native, node, web development software, software outsourcing, software development, custom software development company, software development outsourcing'
      }
    },
    {
      id: 11,
      url: '11-5-ways-outsourcing-software-development',
      "title": "5 Ways Outsourcing Software Development Will Boost the Efficiency of your Business",
      "pubDate": "Thu, 22 Jun 2017 12:33:29 +0000",
      category: "blogs",
      rate: '5.0',
      tags: "Outsourcing, software_outsourcing",
      description: "We all know that the most common reasons for outsourcing software development are reduced cost and access to specialized skills or equipment. But there are other, less obvious advantages to outsourcing that are just as important for improving your company’s performance.",
      text: "<p>We all know that the most common reasons for outsourcing software development are reduced cost and access to specialized skills or equipment. But there are other, less obvious advantages to outsourcing that are just as important for improving your company’s performance. When done right with a trusted vendor, outsourcing is guaranteed to aid the productivity of your business. Here are five ways outsourcing can boost your company’s efficiency.\n<p><strong>Outsourcing allows you to…</strong>\n<h2>Focus on Core Activities</h2>\n<p>Let’s say your company needs a software solution to solve a critical business problem but lacks IT talent to implement it. While trying to recruit programmers, testers, project managers and other programming team members, your employees lose valuable time, spend a fortune and ultimately can’t really be sure if the people they hired are pros or can work as a team. Wouldn’t it be faster, cheaper and more reliable to let professionals take care of the whole software development life cycle? Software outsourcing will finally allow the management of your company to concentrate on core activities like business development and not on micromanaging software development. Your employees will also benefit from outsourcing because you can delegate tasks that are monotonous, boring or require a lot of time, learning and resources. With all of the less business-critical tasks handled by an outsourcing vendor, you can work harder and more efficiently on your company’s goals, strategies and financial growth.\n<p><img src=\"/data/blogs/images/_Outsourcing-Software-Development_2.jpg\"/></p>\n<p><strong>Outsourcing gives you a…</strong>\n  <h2>Creativity Boost</h2>\n<p>In addition to creating more opportunities to focus on what’s really important for your business, outsourcing frees up more time for creative thinking. It’s imperative to relieve your employees from the weight of tedious, monotonous and time-consuming tasks if you want their minds to brainstorm and spark interesting ideas. That’s what outsourcing companies are for: while they handle the more prosaic aspects of business, your in-house visionaries come up with innovative and original ways to make your company famous.\n<p><strong>Outsourcing provides…</strong>\n  <h2>Staffing Flexibility</h2>\n<p>Sure, recruiting a dedicated IT team that’s going to bring your wildest software fantasies to life is necessary if you plan on making software development a part of your business expertise. But what if this is either a one-time or seasonal solution that needs to be quickly created and implemented? The hiring process is time- and resource-consuming, and maintaining an entire IT department when it’s not making any profit is not an option for a small company. Enter software development outsourcing. It might take some time to find the outsourcing vendor that shares your mission and vision, but once you do, you’ll instantly get access to a close-knit team of qualified professionals that can start working on your business solution right away. Outsourcing gives you the flexibility you need: hire part-time or full-time, expand or downsize the team to adapt to your business needs or simply stop the cooperation whenever you need to.\n<p><strong>Outsourcing gives a…</strong>\n  <h2>Time Zone Advantage</h2>\n<p>Outsourcing allows you work 24 hours a day. Because offshore software development companies often operate several time zones away from your business, they will likely still be working when you’re already closed. If your software is developed partly in-house and partly via outsourcing, the joint team will essentially be working two shifts; thus, the job gets done faster. Also, situations when, for example, a customer can report a bug and the team can fix it immediately, be it day or night, give you a valuable competitive edge. And don’t forget that your outsourcing partners from foreign countries will be working during most of your national holidays, which allows you to continuously maintain your business operations.\n<p><img src=\"/data/blogs/images/_Outsourcing-Software-Development_3.jpg\"/></p>\n<p><strong>Outsourcing cultivates…</strong>\n  <h2>Peace of Mind</h2>\n<p>Outsourcing is a controversial topic, but at the end of the day, you just want the job to be done, and you want it done well. So, invest some time and effort to find a suitable custom software development company, because when you do, you’ll finally be able to take your mind off the issue. This may be extremely difficult to achieve, since releasing control over a part of business you’re a pro in can be painful. But, if you are a non-technical person outsourcing software development, relax and know it’s being taken care of by professionals. Just imagine how much more efficient you’ll be taking care of critical business activities instead of micromanaging the development team. If you feel relieved and calm after outsourcing software development, you’ve done everything right.\n<p>Of course, outsourcing has its downsides such as the risk of exposing confidential data, being charged hidden costs, poorly coordinated deliverables, bad quality–price ratio or language and communication skills that leave much to be desired. Luckily, all it takes to avoid these pitfalls is to thoroughly research potential software vendors and choose the one you can trust, like ElifTech. The bottom line is that there will always be businesses that favor outsourcing and those that oppose it. But if you find an outsourcing vendor you can confidently partner with, your company is sure to benefit.",
      backgroundImage: '/data/blogs/images/_Outsourcing-Software-Development.jpg',
      mainImage: '/data/blogs/images/_Outsourcing-Software-Development.jpg',
      authors: [
      ],
      seo: {
        title: 'ELIFTECH | 5 Ways Software Outsourcing Boosts Business Efficiency',
        description: 'Five ways Outsourcing Software Development can boost your company’s efficiency, in addition to reducing cost and access to specialized skills or equipment',
        keywords: 'software outsourcing, outsourcing software, outsourcing development, outsourced development, software development,why outsource, reasons to outsource, why outsourcing, offshore software development, outsourcing services, custom software development company, software development outsourcing, business software, it solutions'
      }
    },
    {
      id: 12,
      url: '12-predictive-maintenance',
      "title": "Predictive Maintenance: Comparing Statistical and Deep Learning Approaches",
      "pubDate": "Fri, 14 Jul 2017 08:45:06 +0000",
      category: "experiments",
      rate: '5.0',
      tags: "data_science, Predictive_Maintenance, IoT, deep_learning, tensorflow, python, keras, neural_network, artificial_intelligence",
      description: "Comparing Statistical and Deep Learning Approaches. How we tested our abilities and show off our predictive maintenance skills.",
      text: "<p>Machines have penetrated almost every sphere of our life: healthcare, manufacturing, transportation, agriculture, logistics and so on. Today, so many processes depend on equipment that a single failure can lead to catastrophic consequences. To avoid or mitigate possible future failures, predictive maintenance was designed. Predictive maintenance is a set of techniques created to predict machine failures and prevent equipment from malfunctioning by performing timely maintenance. We wanted to test our abilities and show off our predictive maintenance skills by attempting to calculate possible future failures of production machines.\n<p>" +
        "\n<h2>Time Series Forecast</h2>\n" +
        "<p>To perform predictive maintenance, first, we need to add sensors to the system that will monitor and collect data about its operations. In our case, we’ll be using vibration sensors (VS). The data used for predictive maintenance is time series data. A time series, in statistical literature, is a series of observations at various moments of time. Most commonly, a time series is a sequence taken at successive equally spaced points in time.\n<p>" +
        "<p>For this experiment, we wanted to use the data from the vibration sensors that measure the vibration magnitude of production machines. Unfortunately, we installed them not that long ago and there wasn’t enough data to make any predictions. So, we decided to mimic data from an existing source - <a href='https://archive.ics.uci.edu/ml/datasets/ElectricityLoadDiagrams20112014'>ElectricityLoadDiagrams20112014</a>. It contains electricity consumption data of 370 points/clients. We took one column from this data set and scaled it to our range.\n<p>" +
        "<img class=\"size-medium wp-image-49928 aligncenter\" src=\"/data/blogs/blog12/img1.jpg\" />" +
        "\n<p style=\"text-align: left;\"><i>1.1 Line plot of the generated data</i></p>\n" +
        "\n<h2>Autoregression Models for Time Series Forecasting</h2>\n" +
        "<p>\nAn autoregression model assumes that observations at previous time steps are useful to predict value at the next time step. This relationship between variables is called a correlation. When a correlation is calculated between the variable and itself at previous time steps, it’s called an autocorrelation. We made a quick visual check to see if there was an autocorrelation in our time series data set.<p>" +
        "<img class=\"size-medium wp-image-49928 aligncenter\" src=\"/data/blogs/blog12/img2.png\" />" +
        "\n<p style=\"text-align: left;\"><i> 1.2 Autocorrelation plot of generated data</i></p>\n" +
        "<p>As you can see, this plot displays the observation at the previous time step (t-1) with the observation at the next time step (t+1) as a scatter plot. According to this plot, we can assume that the fake VS data has a large correlation of observations along a diagonal line of the plot. This clearly shows a relationship or some kind of correlation.\n<p>" +
        "\n<h3>Checking Stationarity of Time Series</h3>\n" +
        "<p>A time series (TS) is said to be stationary if its statistical properties such as mean and variance remain constant over time. This is important because most of the TS models work on the assumption that the TS is stationary. Intuitively, we can say that if a TS has a particular behaviour over time, there is a very high probability that it will keep behaving the same in the future. Also, the theories related to stationary series are more mature and easier to implement than non-stationary series theories.\n<p>" +
        "<p>The definition of stationarity has very distinctive criteria, but for practical purposes, let’s assume that a series is stationary if it has the following statistical properties:\n<p>" +
        "\n \t<li>constant mean</li>\n" +
        "\n \t<li>constant variance</li>\n" +
        "\n \t<li>autocovariance that does not depend on time</li>" +
        "<p>So, to check the stationarity, we’ll be using the rolling statistics plots along with the Dickey-Fuller test results.\n<p>" +
        "<img class=\"size-medium wp-image-49928 aligncenter\" src=\"/data/blogs/blog12/img3.jpg\" />" +
        "\n<p style=\"text-align: left;\"><i>1.3 Rolling mean and standard deviation plots</i></p>\n" +
        "<img class=\"size-medium wp-image-49928 aligncenter\" src=\"/data/blogs/blog12/img4.png\" />" +
        "\n<p style=\"text-align: left;\"><i>1.4 Results of the Dickey-Fuller test</i></p>\n" +
        "<p>As you can see on the plot, the data has a strong seasonal component. We can neutralize this component and make the data stationary by taking away the seasonal difference. That is, we can subtract the observations of a certain previous time step that occurred an assumed cyclical period ago from the observations of the present time step. This mostly works well for improving stationarity. We can use decomposing to determine this period. In this approach, both trend and seasonality are modeled separately, and the remaining part of the series is returned.\n<p>" +
        "<img class=\"size-medium wp-image-49928 aligncenter\" src=\"/data/blogs/blog12/img5.jpg\" />" +
        "\n<p style=\"text-align: left;\"><i>1.5  Decomposition plots</i></p>\n" +
        "<p>Take a closer look at the trend plot. Let’s assume the period value is 100 time steps.\n<p>" +
        "<img class=\"size-medium wp-image-49928 aligncenter\" src=\"/data/blogs/blog12/img6.png\" />" +
        "\n<p style=\"text-align: left;\"><i>1.6 The scaled-up trend plot from the decomposition plots</i></p>\n" +
        "<p>After differencing, the plot of our data will look like this:\n<p>" +
        "<img class=\"size-medium wp-image-49928 aligncenter\" src=\"/data/blogs/blog12/img7.jpg\" />" +
        "\n<p style=\"text-align: left;\"><i>1.7 Line plot after differencing data</i></p>\n" +
        "<p>It seems like this has considerably reduced the trend. Let’s verify it using the rolling mean and standard deviations plots:\n<p>" +
        "<img class=\"size-medium wp-image-49928 aligncenter\" src=\"/data/blogs/blog12/img8.jpg\" />" +
        "\n<p style=\"text-align: left;\"><i>1.8 Rolling mean & standard deviation plots after differencing</i></p>\n" +
        "<img class=\"size-medium wp-image-49928 aligncenter\" src=\"/data/blogs/blog12/img9.png\" />" +
        "\n<p style=\"text-align: left;\"><i>1.9  Results of the Dickey-Fuller test after differencing</i></p>\n" +
        "<p>The rolling values of the fake VS data appear to be varying slightly, but there’s no specific trend. Also, the test statistic is smaller than the 5% critical value, so we are 95% sure that this is a stationary series.\n<p>" +
        "\n<h6>Autocorrelation and Partial Autocorrelation plots</h6>\n" +
        "<p>Now, let’s make predictions with Auto-Regressive Integrated Moving Averages (ARIMA). The ARIMA forecasting for a stationary time series is just a linear (like a linear regression) equation. The predictors depend on the parameters (p,d,q) of the ARIMA model. We can use the autocorrelation function and the partial autocorrelation function plots to determine these numbers for the first time. After that, we’ll use the grid search method to define the optimal hyperparameters for tuning the ARIMA model.\n<p>" +
        "<img class=\"size-medium wp-image-49928 aligncenter\" src=\"/data/blogs/blog12/img10.jpg\" />" +
        "\n<p style=\"text-align: left;\"><i>1.10  Autocorrelation and Partial Autocorrelation plots</i></p>\n" +
        "Let’s determine the values of <strong>p</strong> and <strong>q</strong>. " +
        "\n \t<li><strong>p</strong> is the lag value where the PACF chart crosses the upper confidence interval for the first time; in this case, <strong>p=10</strong></li>\n" +
        "\n \t<li><strong>q</strong> is the lag value where the ACF chart crosses the upper confidence interval for the first time; in this case <strong>q=2</strong></li>\n" +
        "<p>Before fitting the model, the data will be divided into <strong>train_ts</strong> and <strong>test_ts.test_ts</strong> won’t be involved in model fitting; we’ll use it only to measure the accuracy of predictions.\n<p>" +
        "<p>To build the model, we’ll be using Keras, a Python library that provides classes and functions for estimating many different statistical models. So, let’s fit the <strong>arima_model</strong> from <strong>statsmodels.tsa</strong> with the following parameters: <strong>p=10, q=2, d=4</strong>, and differenced data from <strong>train_ts</strong>.\n<p>" +
        "<p>Here is the summary of model fitting:\n<p>" +
        "<img class=\"size-medium wp-image-49928 aligncenter\" src=\"/data/blogs/blog12/img11.png\" />" +
        "\n<p style=\"text-align: left;\"><i>1.11 ARIMA Model Results</i></p>\n" +
        "<p>Now, we can make multistep predictions with the <strong>predict()</strong> function. Let's compare the existing data with the predicted values after inverse differencing:\n<p>" +
        "<img class=\"size-medium wp-image-49928 aligncenter\" src=\"/data/blogs/blog12/img12.jpg\" />" +
        "\n<p style=\"text-align: left;\"><i>1.12</i></p>\n" +
        "<p>Take a close look and compare the predicted data and measure the accuracy of the prediction: <p>" +
        "<img class=\"size-medium wp-image-49928 aligncenter\" src=\"/data/blogs/blog12/img13.jpg\" />" +
        "\n<p style=\"text-align: left;\"><i>1.13</i></p>\n" +
        "<p>Here’s the accuracy of predictions:<p>" +
        "\n \t<li>Mean Absolute Percentage Error (MAPE): <strong>14.149%</strong></li>\n" +
        "\n \t<li>Root Mean Square Error (RMSE): <strong>81.381</strong></li>\n" +
        "\n<h3>Long Short-Term Memory Recurrent Network</h3>\n" +
        "<p>Another way to make a multistep time series forecast is to use the long short-term memory recurrent network (LSTM). For this, we will be using the LSTM model in Keras. We’ll use the same fake VS data for the next prediction, but slightly transformed. One transformation will be differencing, like in the example above; another will transform time series into supervised learning. \n<p>" +
        "<p>The LSTM model in Keras assumes that the input data is divided into the input (X) and the output (Y) components. For our time series problem, we can do this by using the observation from the last time step (t-1) as the input and the observation from the current time step (t) as the output. After this transformation, we get a 2D matrix of values:\n<p>" +
        "<img class=\"size-medium wp-image-49928 aligncenter\" src=\"/data/blogs/blog12/img14.png\" />" +
        "\n<p style=\"text-align: left;\"><i>1.14</i></p>\n" +
        "<p>Like other neural networks, LSTMs expect data to be within the scale of the activation function used by the network. The default activation function for LSTMs is the hyperbolic tangent (tanh) that outputs values between -1 and 1. This is the preferred range for the time series data. So, our next step is transforming the data set to the range [-1, 1] using the MinMaxScaler class. For example:\n<p>" +
        "<img class=\"size-medium wp-image-49928 aligncenter\" src=\"/data/blogs/blog12/img15.png\" />" +
        "\n<p style=\"text-align: left;\"><i>1.15</i></p>\n" +
        "<p>We need this transformation because by default the LSTM layer in Keras maintains the state between data within one batch and expects the input data to be a matrix with dimensions [samples, time steps, features]. So, in the future, we will be able to reshape a 2D matrix into a 3D matrix by adding a fixed time step.\n<p>" +
        "<p>Now, we’ll implement multistep prediction using a recursive strategy: to predict the next step, we’ll use the previous predicted step. So, after making the prediction, we’ll need to change the format of the data to the primary format first and then measure the accuracy of predictions.\n<p>" +
        "<img class=\"size-medium wp-image-49928 aligncenter\" src=\"/data/blogs/blog12/img16.png\" />" +
        "\n<p style=\"text-align: left;\"><i>1.16  Plot of predicted and test data</i></p>\n" +
        "<p>Based on this, we get the following RMSE:\n<p>" +
        "<p>t+1 RMSE: 26.204599\n<p>" +
        "<p>t+2 RMSE: 32.382841\n<p>" +
        "<p>t+3 RMSE: 37.521856\n<p>" +
        "<p>t+4 RMSE: 39.638621\n<p>" +
        "<p>t+5 RMSE: 43.440611\n<p>" +
        "\n<h3>Summary</h3>\n" +
        "<p>As you can see from the plots and the accuracy of our prediction results, they are pretty close to the real data. Also, the LSTM RNN model shows better results than the ARIMA model with RMSE of 43.44 as opposed to 81.381. Another benefit of using the long short-term memory network is that there is no need to determine the trend size. These predictions were made for 200 time steps. \n<p>" +
        "<p>This all proves that had our experiment been conducted in real-life conditions, it would allow us to monitor the state of machines and prevent malfunctions before they happen. Knowing when a piece of equipment may go out of order or will need maintenance is valuable for any industry that uses machinery. When done right, predictable maintenance saves valuable time and money, allows you to better plan maintenance work, increases equipment life span and decreases accidents.\n<p>",
      backgroundImage: '/data/blogs/blog12/main.jpg',
      mainImage: '/data/blogs/blog12/main.jpg',
      authors: [],
      seo: {
        title: 'ELIFTECH | Blog | Experiments | Data Science. Predictive Maintenance',
        description: 'Comparing Statistical and Deep Learning Approaches. How we tested our abilities and show off our predictive maintenance skills.',
        keywords: 'Data Science, Predictive Maintenance, IoT, deep learning, tensorflow, python, keras, neural networks, software outsourcing, data analytics, software development, preventive maintenance, sdlc, IIoT, Industrial IoT, internet of things, software companies, artificial neural network, artificial intelligence, industrial internet of things, custom software development company'
      }
    },
    {
      id: 13,
      url: '13-javascript-digest-mid-summer-2017',
      "title": "JavaScript digest. Mid-Summer 2017",
      "pubDate": "Thu, 20 Jul 2017 03:00:00 +0000",
      category: "news",
      rate: '5.0',
      tags: "chrome, devtools, API, CSS, Safari, WebAssembly, Firefox, Java, nodejs, reactjs, libs",
      description: "The latest midpoint of Summer’17  collection of news from JavaScript universe.",
      text: "<h2>Chrome 59 update</h2>\n<p>New:</p>\n<ul>\n  <li>Headless Chrome</li>\n  <li>Notifications on macOS</li>\n  <li>Image capture API</li>\n</ul>\n<p>DevTools changes:</p>\n<ul>\n  <li><a target=\"_blank\" href=\"https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage\">CSS and JS code coverage</a>. Find unused CSS and JS with the new Coverage tab.</li>\n  <li><a target=\"_blank\" href=\"https://developers.google.com/web/updates/2017/04/devtools-release-notes#screenshots\">Full-page screenshots</a>. Take a screenshot of the entire page, from the top of the viewport to the bottom.</li>\n  <li><a target=\"_blank\" href=\"https://developers.google.com/web/updates/2017/04/devtools-release-notes#block-requests\">Block requests</a>. Manually disable individual requests in the Network panel.</li>\n  <li><a target=\"_blank\" href=\"https://developers.google.com/web/updates/2017/04/devtools-release-notes#async\">Step over async await</a>. Step through async functions predictably.</li>\n  <li><a target=\"_blank\" href=\"https://developers.google.com/web/updates/2017/04/devtools-release-notes#command-menu\">Unified Command Menu</a>. Execute commands and open files from the newly-unified Command Menu.</li>\n</ul>\n<p>Read more about these <a target=\"_blank\" href=\"https://developers.google.com/web/updates/2017/05/nic59\">here</a> and <a target=\"_blank\" href=\"https://developers.google.com/web/updates/2017/04/devtools-release-notes\">here</a>\n</p>\n<p></p>\n<h2>CSS and JS code coverage in Chrome DevTools</h2>\n<p></p>\n<p>How it looks like:</p>\n<table>\n  <tr>\n    <td><img src=\"/data/blogs/blog13/image10.png\"></td>\n    <td><img src=\"/data/blogs/blog13/image13.png\"></td>\n  </tr>\n</table>\n<p>Read more about it <a target=\"_blank\" href=\"https://developers.google.com/web/updates/2017/04/devtools-release-notes\">here</a>\n</p>\n<h2>Step over async await in Chrome DevTools</h2>\n<p></p>\n<p></p>\n<p>Up until now, trying to step through code like the snippet below was a headache. You'd be in the middle of test(), stepping over a line, and then you'd get interrupted by the setInterval() code. Now, when you step through async code like test(), DevTools steps from the first to last line with consistency.<br>\n</p>\n<pre><code>\nfunction wait(ms) {\n  return new Promise(r => setTimeout(r, ms)).then(() => \"Yay\");\n}\n// do some work in background.\nsetInterval(() => 42, 200);\nasync function test() {\n\n  debugger;\n  const hello = \"world\";\n  const response = await fetch('index.html');\n  const tmp = await wait(1000);\n  console.log(tmp);\n  return hello;\n}\nasync function runTest() {\n  let result = await test();\n  console.log(result);\n}\n</code></pre>\n<p></p>\n<p>Read more about it <a target=\"_blank\" href=\"https://developers.google.com/web/updates/2017/04/devtools-release-notes\">here</a>\n</p>\n<h2>Chrome 60 Beta</h2>\n<p></p>\n<p>New:</p>\n<ul>\n  <li>Paint Timing API</li>\n  <li>CSS font-display </li>\n  <li>Credential Management API improvements</li>\n  <li><span\n         >Payment Request API  on desktop versions, sites can now collect payments</li>\n  <li>Object rest &amp; spread properties are now supported</li>\n  <li>The new Web Budget API for Push Notification</li>\n  <li>Paint performance improvements</li>\n  <li>VP9 codec support</li>\n</ul>\n<p></p>\n<p>Read more about it <a target=\"_blank\" href=\"https://blog.chromium.org/2017/06/chrome-60-beta-paint-timing-api-css.html\">here</a>\n</p>\n<p></p>\n<h2>Safari Technology Preview 32</h2>\n<p></p>\n<p>New:</p>\n<ul>\n  <li>WebRTC and Media Capture. Safari now supports peer-to-peer video conferencing through webRTC.\n  </li>\n  <li>WebAssembly. WebAssembly is a low-level binary format for executable code on the web. It is a standards-based supplement to JavaScript. It is secure, portable, and designed to be fast and efficient.\n  </li>\n  <li>Auto-Play Improvements. Safari prevents auto-play of media with sound on most websites.\n  </li>\n</ul>\n<p></p>\n<p>Read more about it <a target=\"_blank\" href=\"https://webkit.org/blog/7627/safari-technology-preview-32/\">here</a></p>\n<p></p>\n<h2>What is WebAssembly</h2>\n<p></p>\n<p>WebAssembly or wasm is a new portable, size- and load-time-efficient  low-level bytecode format for in-browser client-side scripting for compilation to the web that is more efficient than JavaScript, from which it evolved. Its initial aim is to support compilation from C and C++.\n</p>\n<p><img src=\"/data/blogs/blog13/image17.png\"></p>\n<p>Read more about it <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/WebAssembly\">here</a></p>\n<p></p>\n<h2>Firefox 54 released</h2>\n<p>Here might be a long list of bugfixes. </p>\n<p>TL;DR:</p>\n<p>The browser is better now.</p>\n<p></p>\n<p>Read more about it <a target=\"_blank\" href=\"https://developer.mozilla.org/en-US/Firefox/Releases/54\">here </a>\n</p>\n<h2>Building the Web of Things</h2>\n<p></p>\n<p>Mozilla is working to create a Web of Things framework of software and services that can bridge the communication gap between connected devices. By providing these devices with web URLs and a standardized data model and API, we are moving towards a more decentralized Internet of Things that is safe, open and interoperable.\n</p>\n<table>\n  <tr>\n    <td><img src=\"/data/blogs/blog13/image14.png\"></td>\n    <td><img src=\"/data/blogs/blog13/image15.png\"></td>\n  </tr>\n</table>\n\n<p>Read more about it <a target=\"_blank\" href=\"https://hacks.mozilla.org/2017/06/building-the-web-of-things/\">here</a>\n</p>\n<h2>Practice: Object rest and spread properties</h2>\n<p></p>\n<p>ES2015 array rest and spread elements:</p>\n<pre><code>\n// Rest elements for array destructuring assignment:\nconst primes = [2, 3, 5, 7, 11];\nconst [first, second, ...rest] = primes;\nconsole.log(first); // 2\nconsole.log(second); // 3\nconsole.log(rest); // [5, 7, 11]\n\n// Spread elements for array literals:\nconst primesCopy = [first, second, ...rest];\nconsole.log(primesCopy); // [2, 3, 5, 7, 11]</code></pre><p>ES.next: object rest and spread properties:</p><pre><code>      // Rest properties for object destructuring assignment:\nconst person = {\n    firstName: 'Sebastian',\n    lastName: 'Markbåge',\n    country: 'USA',\n    state: 'CA',\n};\nconst { firstName, lastName, ...rest } = person;\n\nconsole.log(firstName); // Sebastian\nconsole.log(lastName); // Markbåge\nconsole.log(rest); // { country: 'USA', state: 'CA' }\n\n\n// Spread properties for object literals:\nconst personCopy = { firstName, lastName, ...rest };\nconsole.log(personCopy);\n// { firstName: 'Sebastian', lastName: 'Markbåge', country: 'USA', state: 'CA' }</code></pre><p>Spread properties offer a more elegant alternative to Object.assign() in many situations:</p><pre><code>      // Shallow-clone an object:\nconst data = { x: 42, y: 27, label: 'Treasure' };\n// The old way:\nconst clone1 = Object.assign({}, data);\n// The new way:\nconst clone2 = { ...data };\n// Either results in:\n// { x: 42, y: 27, label: 'Treasure' }\n\n// Merge two objects:\nconst defaultSettings = { logWarnings: false, logErrors: false };\n\nconst userSettings = { logErrors: true };\n// The old way:\nconst settings1 = Object.assign({}, defaultSettings, userSettings);\n// The new way:\nconst settings2 = { ...defaultSettings, ...userSettings };\n// Either results in:\n// { logWarnings: false, logErrors: true }\n</code></pre>\n\n<p>Read more about it <a target=\"_blank\" href=\"https://developers.google.com/web/updates/2017/06/object-rest-spread\">here </a>\n</p>\n<p></p>\n<h2>Analysis: Node.js Will Overtake Java Within a Year</h2>\n<p></p>\n<p>Programming language popularity according to the TIOBE index*.</p>\n<p><img src=\"/data/blogs/blog13/image1.jpg\"></p>\n<p>*  TIOBE programming community index is a measure of popularity of programming languages, created and maintained by the TIOBE Company based in Eindhoven\n</p>\n<p></p>\n<p>HackerNews has a &ldquo;who is hiring&rdquo; section and a tracking system for jobs. In the picture below you can see a comparison of Node js (blue) and Java (black) from August 2011 to June 2017.\n</p>\n<p><img src=\"/data/blogs/blog13/image7.png\"></p>\n<p>Read more about it <a target=\"_blank\" href=\"http://blog.builtinnode.com/post/node-js-will-overtake-java-within-a-year-analysis\">here</a>\n</p>\n<h2>React v15.6.0</h2>\n<p>Improvements:</p>\n<p>React:</p>\n<ul>\n  <li>Better input</li>\n  <li>Less Noisy Deprecation Warnings</li>\n</ul>\n<p>React DOM:</p>\n<ul>\n  <li>Add support for CSS variables in style attribute. </li>\n  <li>Add support for CSS Grid style properties.</li>\n</ul>\n<p>React Addons fixes:</p>\n<ul>\n  <li>Fix AMD support for addons depending on react. </li>\n  <li>Fix isMounted() to return true in componentWillUnmount.</li>\n  <li>Fix react-addons-update to not depend on native Object.assign.</li>\n  <li>Remove broken Google Closure Compiler annotation from create-react-class.\n  </li>\n  <li>Remove unnecessary dependency from react-linked-input.</li>\n  <li>Point react-addons-(css-)transition-group to the new package. </li>\n</ul>\n<p></p>\n<p>Read more about it <a target=\"_blank\" href=\"https://facebook.github.io/react/blog/2017/06/13/react-v15.6.0.html\">here </a>\n</p>\n<h2>Cool libs</h2>\n<h3>Data-Pixels</h3>\n<p>Create Pixel Art Programmatically</p>\n<p><img src=\"/data/blogs/blog13/image11.png\"></p>\n<p>Read about it <a target=\"_blank\" href=\"https://github.com/gmattie/Data-Pixels\">here</a>\n</p>\n<h3>VX</h3>\n<p>vx is collection of reusable low-level visualization components. vx combines the power of d3 to generate your visualization with the benefits of react for updating the DOM.\n  <p><img src=\"/data/blogs/blog13/image9.png\"></p>\n  <p><img src=\"/data/blogs/blog13/image18.png\"></p>\n<p></p>\n<p>Read about it <a target=\"_blank\" href=\"https://github.com/hshoff/vx\">here</a>\n</p>\n<h3>SmartPhoto</h3>\n<p></p>\n<p>The most easy to use responsive image viewer especially for mobile devices</p>\n<p><img src=\"/data/blogs/blog13/image2.jpg\">\n<p><img src=\"/data/blogs/blog13/image6.png\"></p>\n<p></p>\n<p>Read about it <a target=\"_blank\" href=\"https://github.com/appleple/SmartPhoto\">here</a>\n</p>\n<h3>Embedo</h3>\n<p>A simple, lightweight and standalone social media content embed plugin for web\n<p><img src=\"/data/blogs/blog13/image16.jpg\"></p>\n<p>Read about it <a target=\"_blank\" href=\"https://github.com/shobhitsharma/embedo\">here</a>\n</p>\n<h3>Moon.js</h3>\n<p>A minimal, blazing fast user interface library</p>\n<p><img src=\"/data/blogs/blog13/image12.jpg\"></p>\n<p>HTML</p>\n<pre><code>\n  &lt;div id='app'>\n    &lt;h1>{{msg}}&lt;/h1>\n    &lt;input type='text' m-model='msg'/>\n  &lt;/div>\n</code></pre>\n<p></p>\n<p>Read about it <a target=\"_blank\" href=\"http://moonjs.ga/\">here</a>\n</p>\n<p></p>\n<h3>Microtip</h3>\n<p>Modern, minimal css tooltip library</p>\n<p><img src=\"/data/blogs/blog13/image3.gif\"></p>\n<p>Read about it<a target=\"_blank\" href=\"https://github.com/ghosh/microtip\"> here</a>\n</p>\n<h3>Prettier</h3>\n<p>Prettier takes your code and reprints it from scratch by taking the line length into account.\n</p>\n<p>For example, take the following code:</p>\n<pre><code>foo(arg1, arg2, arg3, arg4);</code></pre>\n<p></p>\n<p>It fits in a single line so it's going to stay as is. However, we've all run into this situation:\n</p>\n<pre><code>foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());\n</code></pre>\n<p></p>\n<p>Suddenly our previous format for calling function breaks down because this is too long. Prettier is going to do the painstaking work of reprinting it like that for you:\n</p>\n<pre><code>\n  foo(\n    reallyLongArg(),\n    omgSoManyParameters(),\n    IShouldRefactorThis(),\n    isThereSeriouslyAnotherOne()\n  );\n</code></pre>\n<p></p>\n<p>Read about it <a target=\"_blank\" href=\"https://github.com/prettier/prettier\">here</a>, watch video <a target=\"_blank\" href=\"https://youtu.be/0Q4kUNx85_4\">here</a>\n</p>\n<h3>Timeline.js</h3>\n<p><img src=\"/data/blogs/blog13/image5.jpg\"></p>\n<p>Read about it <a target=\"_blank\" href=\"https://timeline.knightlab.com\">here</a>\n</p>\n<h3>Tinytime</h3>\n<p>tinytime exports a single function that returns a template object. This object has a single method, render, which takes a Date and returns a string with the rendered data.\n<pre><code>\nconst template = tinytime('The time is {h}:{mm}:{ss}{a}.');\ntemplate.render(new Date()); // The time is 11:10:20PM.\n</code></pre>\n<p></p>\n<p>Read about it <a target=\"_blank\" href=\"https://www.npmjs.com/package/tinytime\">here</a>\n</p>\n<h3>Birdview.js</h3>\n<p></p>\n<p><img src=\"/data/blogs/blog13/image4.jpg\"></p>\n<p>Read about it <a target=\"_blank\" href=\"http://achrafkassioui.com/birdview/\">here</a>\n</p>\n<p></p>\n<p>Sources:</p>\n<p><a target=\"_blank\" href=\"https://facebook.github.io/react/blog/2017/06/13/react-v15.6.0.html\">https://facebook.github.io/react/blog/2017/06/13/react-v15.6.0.html</a></p>\n<p><a target=\"_blank\" href=\"http://webassembly.org/\">http://webassembly.org/</a></p>\n<p><a target=\"_blank\" href=\"https://www.sitepoint.com/results-ultimate-css-survey-2017/\">https://www.sitepoint.com/results-ultimate-css-survey-2017/</a></p>\n<p>\n  <iframe src=\"//www.slideshare.net/slideshow/embed_code/key/37K82CSiD0FOGD\" width=\"595\" height=\"485\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" style=\"border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;\" allowfullscreen> </iframe> <div style=\"margin-bottom:5px\"> <strong> <a target=\"_blank\" href=\"//www.slideshare.net/ElifTech/js-digest-midsummer-2017\" title=\"JS digest. Mid-Summer 2017\">JS digest. Mid-Summer 2017</a> </strong> from <strong><a target=\"_blank\" href=\"https://www.slideshare.net/ElifTech\">ElifTech</a></strong> </div>\n</p>",
      backgroundImage: '/data/blogs/blog13/image8.jpg',
      mainImage: '/data/blogs/blog13/image8.jpg',
      authors: [],
      seo: {
        title: 'ELIFTECH | Your Trusted IT Partner | JavaScript digest. Mid-summer 2017',
        description: 'The latest midpoint of Summer’17  collection of news from JavaScript universe',
        keywords: 'javascript, js, chrome, devtools, api, css, safari, WebAssembly, Firefox, CSS, Java, nodejs, node, react, reactjs, libs, web development software, software outsourcing, software development, custom software development company, software development outsourcing'
      }
    },
    {
      id: 14,
      url: '14-javascript-digest-july-2017',
      "title": "JavaScript digest. July 2017",
      "pubDate": "Tue, 08 Aug 2017 03:00:00 +0000",
      category: "news",
      rate: '5.0',
      tags: "javascript, js, nodejs, reactjs, libs, AWS, npm",
      description: "Less than a month ago we published Mid-Summer JS digest, but it is so much news and so little time in JavaScript World. So enjoy our newest JavaScript digest, stay up to date on the latest news.",
      text: "<p><span>Less than a month ago we published Mid-Summer JS digest, but it is so much news and so little time in JavaScript World. So enjoy our newest JavaScript digest, stay up to date on the latest news.</span>\n</p><h2>Introducing npx: an npm package runner</h2><p><span>It will help:</span></p>\n<ul>\n  <li><span>Use `npx` to run your local module installations</span></li>\n  <li><span>Executing one-off commands never was so easy</span></li>\n  <li><span>Run commands with different Node.js versions</span></li>\n  <li><span>Developing npm run-scripts interactively</span></li>\n  <li><span>Share gist-based scripts with friends and loved ones!</span></li>\n</ul><p><span><img alt=\"npx.jpg\" src=\"/data/blogs/blog14/npx.jpg\" title=\"\"></span></p><p><span>Read more about these <a\n        target=\"_blank\" href=\"http://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner\">here</a></span><span>.</span>\n</p><p></p><p></p><h2>React 16 beta</h2><p><span>Why:</span></p>\n<ul>\n  <li><span>Remove old internal abstractions </span></li>\n  <li><span>Let ship some of the most requested features like returning arrays from render, recovering from component errors, and readable component stack traces for every error.</span>\n  </li>\n  <li>\n    <span>Enable to start experimenting with asynchronous rendering of components for better perceived performance.</span>\n  </li>\n</ul><p><span>Breaking changes and new stuff:</span></p>\n<ul>\n  <li><span>Not so much new things actually</span></li>\n  <li><span>Error Handling is better now (:</span></li>\n</ul><p></p><p><span>Check</span><span><a\n        target=\"_blank\" href=\"https://github.com/facebook/react/issues/10294\">&nbsp;link</a></span><span>&nbsp;to learn more.</span></p>\n<p></p><h2>Announcing Gatsby 1.0.0 &#x1f389;&#x1f389;&#x1f389;</h2><p><span>What is cool:</span>\n</p>\n<ul>\n  <li><span>rich integrations with CMSs like Contentful, Wordpress, and Drupal</span></li>\n  <li><span>route-based code splitting</span></li>\n  <li><span>service workers</span></li>\n  <li><span>built for the next billion internet users</span></li>\n</ul><p><span><img alt=\"gatsby_npm.jpg\" src=\"/data/blogs/blog14/gatsby_npm.jpg\" title=\"\"></span></p><p><span>Read more about these <a\n        target=\"_blank\" href=\"https://www.gatsbyjs.org/blog/gatsby-v1/\">here</a>.</span></p><p></p><h2>Announcing Babylon.js 3.0</h2><p><span>What is cool:</span></p>\n<ul>\n  <li><span>Support for WebGL 2</span></li>\n  <li><span>Support for WebVR 1.1</span></li>\n  <li><span>Support for live textures using WebCam</span></li>\n  <li><span>Great <a target=\"_blank\" href=\"http://playground.babylonjs.com/\">playground</a></span></li>\n</ul><p><span><img alt=\"Babylon_js_3_0.jpg\" src=\"/data/blogs/blog14/Babylon_js_3_0.jpg\" title=\"\"></span></p><p><span>Read more about these <a\n        target=\"_blank\" href=\"https://blogs.windows.com/buildingapps/2017/07/12/announcing-babylon-js-3-0/\">here</a></span><span>.</span>\n</p><p><span>Cool demo is <a target=\"_blank\" href=\"http://www.babylonjs.com/demos/pbrglossy/\">here</a></span><span>.</span></p><p>\n  </p><p></p><h2>Node-ChakraCore Update</h2><p><span>What is cool:</span></p>\n<ul>\n  <li><span>Full cross-platform support</span></li>\n  <li><span>Support for Node.js API (N-API)</span></li>\n  <li><span>Node.js on iOS</span></li>\n  <li><span>Time-Travel Debugging</span></li>\n</ul><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/nmXhJ88nZsk\" frameborder=\"0\" allowfullscreen></iframe></span>\n</p><p><span>Read more about these <a\n        target=\"_blank\" href=\"https://blogs.windows.com/msedgedev/2017/07/27/node-chakracore-update-n-api-ios/\">here</a></span><span>.</span>\n</p><p></p><p></p><h2>AWS Releases Lambda@Edge</h2><p><span>What is cool:</span>\n</p>\n<ul>\n  <li><span>Lambda@Edge code is triggered by events from Amazon CloudFront</span></li>\n  <li><span>is optimised for latency sensitive use cases</span></li>\n  <li><span>Developer will be able to:</span></li>\n</ul>\n<ol start=\"1\">\n  <li><span>Inspect cookies and transparently rewrite URLs in order to perform A/B testing.</span></li>\n  <li><span>Return dynamic content generated at the edge, for example, redirect unauthenticated users to a login page that is created on-demand.</span>\n  </li>\n  <li><span>Respond with specific objects to customise the website the user sees based on the User-Agent header.</span>\n  </li>\n  <li><span>Add, drop, or modify headers (subject to the <a\n          target=\"_blank\" href=\"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-header-restrictions.html\">following restrictions</a></span><span>) to direct users to different cached objects.</span>\n  </li>\n  <li><span>Make HTTP requests to other Internet resources and use the results to customise responses etc.</span></li>\n</ol><p><span><img alt=\"Lambda_Edge.jpg\" src=\"/data/blogs/blog14/Lambda_Edge.jpg\" title=\"\"></span></p><p><span>Read more about these <a\n        target=\"_blank\" href=\"https://www.infoq.com/news/2017/07/aws-lambda-at-edge?utm_campaign%3Dinfoq_content%26utm_source%3Dinfoq%26utm_medium%3Dfeed%26utm_term%3Dglobal\">here</a></span><span>.</span>\n</p><p></p><p></p><h2>Upcoming</h2><h3>Upcoming RegExp Features</h3>\n<ul>\n  <li><span>Named Captures</span></li>\n  <li><span>dotAll Flag</span></li>\n  <li><span>Unicode Property Escapes</span></li>\n  <li><span>Lookbehind Assertions</span></li>\n</ul><pre><code>const&nbsp;pattern = /(\d{4})-(\d{2})-(\d{2})/u;</code></pre><p>Vs</p><pre><code>const&nbsp;pattern = /(?&lt;year&gt;\d{4})-(?&lt;month&gt;\d{2})-(?&lt;day&gt;\d{2})/u;</code></pre><p>\n  </p><p></p><p><span>Read about it </span><span><a\n        target=\"_blank\" href=\"https://v8project.blogspot.com/2017/07/upcoming-regexp-features.html\">here</a></span><span>.</span></p><p>\n  </p><h3>Say hello to HTTP/2 for Node.js Core</h3>\n<ul>\n  <li><span>Push Stream Support</span></li>\n  <li><span>respondWithFile()&nbsp;and </span><span>respondWithFD()&nbsp;APIs that allow extremely efficient sending of raw file data that bypasses the Streams API.</span>\n  </li>\n  <li><span>TLS and Plain-text connections</span></li>\n  <li><span>Full support for stream multiplexing</span></li>\n  <li><span>HTTP/2 Prioritization and Flow Control</span></li>\n  <li><span>Support for HTTP/2 trailers</span></li>\n  <li><span>HPACK header compression support</span></li>\n  <li><span>A compatibility API layer that operates as close as possible to the existing HTTP/1 API</span></li>\n</ul><p><span>Read about it <a\n        target=\"_blank\" href=\"https://v8project.blogspot.com/2017/07/upcoming-regexp-features.html\">here</a></span><span>.</span></p><p>\n  </p><p></p><h2>Statistics</h2><h3>Ionic Dev Survey</h3>\n<ul>\n  <li><span>More than 13,000 developers shared their story</span></li>\n  <li><span>Two years ago, 20% of developers surveyed were building exclusively with native tools instead of hybrid. In the next two years, that number is only 2.9% - a nearly 7x decrease. Similarly, the number of hybrid-built apps is growing as a share of overall app development. In the next two years, 32.7% of developers surveyed expect to completely abandon native development in favor of hybrid.</span>\n  </li>\n</ul><p><span><img alt=\"Ionic-Dev-Survey1.jpg\" src=\"/data/blogs/blog14/Ionic-Dev-Survey1.jpg\" title=\"\"></span></p><p><span><img\n        alt=\"Ionic-Dev-Survey2.jpg\" src=\"/data/blogs/blog14/Ionic-Dev-Survey2.jpg\" title=\"\"></span></p><p><span><img\n        alt=\"Ionic-Dev-Survey3.jpg\" src=\"/data/blogs/blog14/Ionic-Dev-Survey3.jpg\" title=\"\"></span></p><p><span><img\n        alt=\"Ionic-Dev-Survey4.jpg\" src=\"/data/blogs/blog14/Ionic-Dev-Survey4.jpg\" title=\"\"></span></p><p><span><img\n        alt=\"Ionic-Dev-Survey5.jpg\" src=\"/data/blogs/blog14/Ionic-Dev-Survey5.jpg\" title=\"\"></span></p><p><span><img\n        alt=\"Ionic-Dev-Survey6.jpg\" src=\"/data/blogs/blog14/Ionic-Dev-Survey6.jpg\" title=\"\"></span></p><p></p><p>\n  <span>Read about it <a target=\"_blank\" href=\"http://ionicframework.com/survey/2017%23results\">here</a></span><span>.</span></p><p>\n  </p><p></p><h3>Node.js survey</h3>\n<ul>\n  <li><span>Conducted online from November 30, 2016 to January 16, 2017 via a self-administered survey.</span></li>\n  <li><span>Fielded worldwide in English and Mandarin to encourage maximum response.</span></li>\n  <li><span>1,405 individuals responded to at least some questions in the survey</span></li>\n</ul><p><span><img alt=\"Node_js_survey1.gif\" src=\"/data/blogs/blog14/Node_js_survey1.gif\" title=\"\"></span></p><p>\n</p><p><span><img alt=\"Node_js_survey2.gif\" src=\"/data/blogs/blog14/Node_js_survey2.gif\" title=\"\"></span></p><p><span><img\n        alt=\"Node_js_survey3.gif\" src=\"/data/blogs/blog14/Node_js_survey3.gif\" title=\"\"></span></p><p><span><img\n        alt=\"Node_js_survey4.gif\" src=\"/data/blogs/blog14/Node_js_survey4.gif\" title=\"\"></span></p><p></p><p><span>Read about it <a\n        target=\"_blank\" href=\"https://nodejs.org/static/documents/casestudies/Nodejs_2017_User_Survey_Exec_Summary.pdf\">here</a></span>\n</p><p></p><p></p><h3>Libs picks for July 2017</h3>\n<ul>\n  <li><span><a target=\"_blank\" href=\"https://github.com/yaronn/blessed-contrib\">https://github.com/yaronn/blessed-contrib</a></span>\n  </li>\n  <li><span><a target=\"_blank\" href=\"http://bojler.slicejack.com/\">http://bojler.slicejack.com/</a></span></li>\n  <li><span><a target=\"_blank\" href=\"https://github.com/elmasse/nextein\">https://github.com/elmasse/nextein</a></span></li>\n  <li><span><a target=\"_blank\" href=\"http://www.checkman.io/please/\">http://www.checkman.io/please/</a></span></li>\n  <li><span><a target=\"_blank\" href=\"https://github.com/dbushell/Pikaday\">https://github.com/dbushell/Pikaday</a></span></li>\n</ul><p></p><p><strong>Stay up to date on <a target=\"_blank\" href=\"https://twitter.com/hashtag/JS?src%3Dhash\">the latest JavaScript news</a>, don&rsquo;t miss our next JS digest!</strong>\n</p><p></p>\n<iframe src=\"//www.slideshare.net/slideshow/embed_code/key/51H6XVx7UMSr5u\" width=\"595\" height=\"485\" frameborder=\"0\"\n        marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" allowfullscreen></iframe>",
      backgroundImage: '/data/blogs/blog14/JS-digest_July17.jpg',
      mainImage: '/data/blogs/blog14/JS-digest_July17.jpg',
      authors: [],
      seo: {
        title: 'ELIFTECH | Your Trusted IT Partner | Blog | JavaScript digest. July 2017',
        description: 'So much news, so little time in JavaScript World. Find out the latest news from our July 2017 JS digest.',
        keywords: 'javascript, js, api, aws, babylonjs, dev survey, gatsby, ios, lambda, edge, n-api, node, node-chakracore, nodejs, npm cli, react, react native, reactjs, regexp, web development software, software outsourcing, software development, custom software development company, software development outsourcing'
      }
    },
    {
      id: 15,
      url: '15-software-development-process-audit',
      "title": "Software Development Process Audit Checklist",
      "pubDate": "Thu, 10 Aug 2017 03:00:00 +0000",
      category: "blogs",
      rate: '5.0',
      tags: "software_development_process_audit, software_development",
      description: "Wasting IT resources might not damage the environment, but it will definitely cost a company extra time and money. Learn from our blog post how to prevent this.",
      text: "<p><span>Wasting IT&nbsp;resources might not damage the environment, but it will definitely cost a company in employee working hours and money spent on development processes. It doesn&rsquo;t matter if a company&rsquo;s software resources are in-house, offshore, &ldquo;right-shore&rdquo; or out-sourced, they need to be effective and efficient. </span></p><p><span>A Software Development Process Audit of an IT system is a continuous process that maximizes the success of a project by identifying its potential risks and weaknesses, and evaluating the performance of each team member. You can audit a project at any time during the software development lifecycle (SDLC). However, keep in mind that auditing the project in the early phases improves its quality and the scheduling of the product under development. </span></p><p><span>Typically, the audit is done by project managers, business analysts and QA&nbsp;teams. The checklist will help ensure the quality of each phase of the SDLC: planning, creating, testing and deploying.</span></p><p><span>Here we will explain the software audit process and provide the checklist.</span></p><h2><span>Every Project Starts With Planning</span></h2><p><span>Project planning is one of the most important processes of project management. It helps establish the scope, and it defines the objectives and the steps to reach them. Project planning results in a project management plan, which documents the approved scope, cost and schedule baselines.</span></p><h2><span>A&nbsp;Checklist to Make Sure You Are Completed with Project Planning</span></h2><ul><li><span>Does the project have a formal Project Plan? </span></li><li><span>Are the key elements of a Project Plan present? </span></li><li><span>Project definition and scope?</span></li><li><span>Project objectives</span></li><li><span>Cost / benefit analysis</span></li><li><span>Staffing requirements</span></li><li><span>Time estimates</span></li><li><span>Risk analysis</span></li><li><span>Critical success criteria: at which point have we met our goals?</span></li><li><span>Are the major deliverables and deadlines specified? </span></li><li><span>Have the scope, objectives and costs been communicated to all involved work groups?</span></li></ul><p></p><h2><span><img alt=\"Software-Development-Process-Audit-Checklist1.jpg\" src=\"/data/blogs/blog15/Software-Development-Process-Audit-Checklist1.jpg\"  title=\"\"></span></h2><h2><span>Project Management</span></h2><p><span>There is no chance to deliver a quality app on time and under budget without project management (PM). PM closely monitors the development process to ensure that objectives and goals are being reached efficiently and effectively.</span></p><p></p><h2><span>A Checklist to Make Sure You Are Prepared for Project Management</span></h2><p>Have the key elements of a PM strategy been established? They include:</p><ul><li><span>Project tracking plan and methodology</span></li><li><span>Project status reporting structure and process</span></li><li><span>Risk Management Plan</span></li><li><span>Software Quality Assurance</span></li><li><span>Software Configuration Management</span></li><li><span>Has a structured approach been used to break work efforts into manageable components? </span></li><li><span>Are team members involved in the development of activity and task decomposition?</span></li><li><span>Are individual tasks of reasonable duration?</span></li><li><span>Are milestone deliverables effectively tracked and compared to the project plan?</span></li><li><span>Does the detailed project plan identify individual responsibilities for the next sprint? </span></li><li><span>Have activity relationships and interdependencies within tasks been adequately identified? </span></li><li><span>Are target dates established for each milestone deliverable? </span></li><li><span>Are corrective actions taken when actual results are substantially different from the detailed project plan? </span></li></ul><p><span>&nbsp;</span></p><h2><span>The Development Phase</span></h2><p><span>The project development phase takes you into deep water. Deadlines are often missed because of underestimation, selection of the wrong toolchain or operating in a poorly configured workflow. This is where IT management comes in handy, the central aim of which is to generate value through technology. </span></p><h2><span>A Checklist to Make Sure You Are Prepared for the &nbsp;Development Phase</span></h2><p><span>Project Toolchain:</span></p><ul><li><span>Does the toolchain suit the project needs?</span></li><li><span>Are all libraries supported by a developer?</span></li><li><span>Are all libraries up-to-date?</span></li><li><span>Are all project dependencies clear and without duplication?</span></li></ul><p><span>Make sure the database (DB) architecture and setup are valid:</span></p><ul><li><span>DB entities have descriptive names.</span></li><li><span>DB files are indexed properly.</span></li><li><span>The stage environment uses the same database server version as well as production.</span></li><li><span>The production database and other data have backup set up to keep all data up-to-date&nbsp;and durable.</span></li><li><span>DB structure backup/migration are separated from data.</span></li><li><span>DB interactions are covered by automated tests.</span></li><li><span>Relations between entities&nbsp;are clear and they have access to all relevant business information without additional efforts.</span></li></ul><p><span>Project code base:</span></p><ul><li><span>Do project entities have descriptions and follow naming conversions in general?</span></li><li><span>Is the project folder structure descriptive and does it follow conventions?</span></li><li><span>Is the project entities&rsquo; architecture properly separated and does it follow common patterns?</span></li><li><span>Have the long-running and time-consuming operations been performed on background outside of the Request-Response&nbsp;cycle?</span></li></ul><p><span>&nbsp;</span></p><p><span>To make sure a developed software performs as expected, focus on performance monitoring. </span></p><p><span>Product Acceptance:</span></p><ul><li><span>Is the project UI&nbsp;implemented according to platform guidelines?</span></li><li><span>Is the project interface clear and easy to use in general?</span></li><li><span>Are project test cases up-to-date?</span></li></ul><p><span>Development Workflow:</span></p><ul><li><span>Does the team work with a designer from the start of the project?</span></li><li><span>Does the project team use appropriate git workflow?</span></li><li><span>Does the project have automated setup and deployment?</span></li><li><span>Does the project have a development database dump or migrations to set up the development environment as soon as possible?</span></li></ul><p><span>Project logs and error management:</span></p><ul><li><span>Are all the logs searchable and accessible from one place?</span></li><li><span>Has the errors/exceptions management system been used in the project?</span></li><li><span>Security, encryption</span></li><li><span>Is SSL used for all pages?</span></li><li><span>Is the security sensitive data encrypted?</span></li><li><span>Does the team use secure storage for keys/passwords/tokens etc.?</span></li></ul><h2><span><img alt=\"Software-Development-Process-Audit-Checklist2.jpg\" src=\"/data/blogs/blog15/Software-Development-Process-Audit-Checklist2.jpg\"  title=\"\"></span></h2><h2><span>Quality Assurance</span></h2><p><span>The two distinct ideas of quality assurance (QA) serve the same purpose:&nbsp;improving the consistency, quality and reliability of operations. As a part of quality assurance, quality assessment focuses on the fulfillment of quality requirements.&nbsp;The main goal of a QA audit is to find out how effective a QA program is at identifying and reducing bugs and to provide opportunities for improving QA efforts.</span></p><h2><span>A Checklist to Make Sure You Are Completed with&nbsp;Quality Assurance&nbsp;Audit</span></h2><ul><li><span>Does testing documentation (test cases, checklists, matrices) exist and is it available to all team members?</span></li><li><span>Is testing documentation (test cases, checklists, matrices) up-to-date?</span></li><li><span>Are all necessary testing methods and types used in the project?</span></li><li><span>Are all found bugs reported with a self-explanatory title, clear steps to reproduce them and expected/actual results with screenshots, links and other elements?</span></li><li><span>Have all the bugs been prioritized and added to the current sprint or backlog?</span></li><li><span>Have the suggested enhancements been approved by a manager and then added to the current sprint or backlog?</span></li><li><span>Have a QA&nbsp;specialist and a manager approved the deployment to production?</span></li><li><span>Are pre-deployment and post-deployment testing done according to checklists?</span></li></ul><p><span>&nbsp;</span></p><p><span>As you can tell, the ultimate goal of the audit process is to maximize the success of a project. It is not a lack of talent or creativity that causes most problems, but the irrational&nbsp;and inefficient usage of available methods and processes. When all the activities are described in detail and then optimized, it really saves companies valuable time and money.</span></p><p><span>While the software development process audit can be stressful, with the help of ElifTech&rsquo;s team of experts you can be assured of a successful outcome. We will conduct a low-pressure audit to identify gaps and find the most effective way to solve them.</span></p>",
      backgroundImage: '/data/blogs/blog15/Software-Development-Process-Audit-Checklist_.jpg',
      mainImage: '/data/blogs/blog15/Software-Development-Process-Audit-Checklist_.jpg',
      authors: [
      ],
      seo: {
        title: 'ELIFTECH | Blog | Software Development Process Audit Checklist',
        description: 'Wasting IT resources might not damage the environment, but it will definitely cost a company extra time and money. Learn from our blog post how to prevent this.',
        keywords: 'performance management, quality management, key performance indicators, project management, quality assurance, it system, performance evaluation, it management, performance monitoring, quality assessment, sdlc, system design, web development software, software outsourcing, software development, custom software development company, software development outsourcing'
      }
    },
    {
      id: 16,
      url: '16-vr-digest-august-2017',
      "title": "VR digest. August 2017",
      "pubDate": "Fri, 08 Sep 2017 03:00:00 +0000",
      category: "news",
      rate: '5.0',
      tags: "VR, AR, VirtualReality, AugmentedReality, MixedReality",
      description: "What’s the latest news on the bleeding edge of virtual reality, augmented reality, and human-computer interaction? Let us keep you up to date!",
      text: "<p>What&rsquo;s the latest news on the bleeding edge of virtual reality, augmented\n  reality, and human-computer interaction? Let us &nbsp;keep you up to date!</p><p>So here is the list of what happened\n  in VR during August 2017:</p><h2>Technologies</h2><h3>Augmented reality</h3><h4>ARKit</h4><p>Apple refreshed its developer\n  portal with new information about ARKit, including sample code and AR-specific entries.</p><p><img alt=\"arkit.jpg\"\n                                                                                                     src=\"/data/blogs/blog16/arkit.jpg\">\n</p><p>Read&nbsp;more - <a\n        href=\"http://appleinsider.com/articles/17/08/29/apple-updates-arkit-resources-for-developers-building-augmented-reality-apps\">here</a>.\n</p><h4>ARCore</h4><p>Google joins the augmented reality with ARCore<br><img alt=\"arcore.jpg\"\n                                                                           src=\"/data/blogs/blog16/arcore.jpg\"></p><p>\n  Read&nbsp;more - <a\n        href=\"https://android-developers.googleblog.com/2017/08/arcore-augmented-reality-at-android.html\">here</a>.\n</p><h4>AR.JS</h4><p>AR.js will support ARCore and ARKit</p><p><img alt=\"arjs.jpg\" src=\"/data/blogs/blog16/arjs.jpg\">\n</p><p>Read&nbsp;more - <a\n        href=\"https://t.co/ikQNN5MG3v\">here</a>.\n</p><h3>Microsoft / Oracle</h3><h4>Windows Mixed Reality update</h4><p>Microsoft and partners, including Steam, prepare to\n  democratize virtual reality.</p><p><img alt=\"Windows-Mixed-Reality-update.jpg\" src=\"/data/blogs/blog16/Windows-Mixed-Reality-update.jpg\">\n</p><p>Read&nbsp;more - <a\n        href=\"https://blogs.windows.com/windowsexperience/2017/08/28/windows-mixed-reality-holiday-update/\">here</a>\n</p><h4>Oracle</h4><p>Oracle is bringing AR and VR visualization to its Enterprise IoT Platform</p><p><img\n        alt=\"Oracle.jpg\" src=\"/data/blogs/blog16/Oracle.jpg\"></p><p>Read&nbsp;more - <a\n        href=\"https://www.roadtovr.com/oracle-cloud-enterprise-iot-ar-vr-visualization/amp/\">here</a>\n</p><h3>Web VR</h3><h4>Firefox</h4><p>Firefox update will add WebVR support for virtual reality viewing.</p><p><img\n        alt=\"Firefox.jpg\" src=\"/data/blogs/blog16/Firefox.jpg\"></p><p>Read&nbsp;more - <a\n        href=\"https://siliconangle.com/blog/2017/08/07/firefox-update-adds-webvr-support-virtual-reality-viewing/\">here</a>.\n</p><h4>Babylon.js</h4><p>Starting with version 3.1, Babylon.js can handle WebGL context lost event.</p><p><img\n        alt=\"babylonjs.jpg\" src=\"/data/blogs/blog16/babylonjs.jpg\"></p><p>Read&nbsp;more - <a\n        href=\"http://doc.babylonjs.com/tutorials/optimizing_your_scene%23handling-webgl-context-lost\">here</a>\n</p><h3>AR/VR</h3><h4>Mapbox supports ARKit</h4><p>New library to add location based content to ARKit based iOS\n  applications.</p><p><img alt=\"Mapbox.jpg\" src=\"/data/blogs/blog16/Mapbox.jpg\"></p><p>Read&nbsp;more - <a\n        href=\"https://github.com/mapbox/mapbox-arkit-ios\">here</a>\n</p><h4>NASA</h4><p>NASA&rsquo;s Johnson Space Center in Houston is home to the Virtual Reality Lab, where astronauts plan\n  out their future excursions inside and outside the International Space Station.</p><p><img alt=\"nasa.jpg\"\n                                                                                             src=\"/data/blogs/blog16/nasa.jpg\">\n</p><p>Read&nbsp;more - <a\n        href=\"https://www.theverge.com/2017/8/22/16178138/nasa-virtual-reality-lab-mars-rover-simulator\">here</a>\n</p><h3>VR</h3><h4>HypeVR</h4><p>HypeVR uses ARKit as a portal into volumetric video content</p><p><img alt=\"HypeVR.jpg\"\n                                                                                                    src=\"/data/blogs/blog16/HypeVR.jpg\">\n</p><p>Read&nbsp;more - <a\n        href=\"https://www.roadtovr.com/hypevr-uses-arkit-portal-volumetric-video-content/amp/\">here</a>\n</p><h4>Studio Transcendent & AppliedVR</h4><p>Studio Transcendent partnered with AppliedVR to create a therapeutic experience designed to reduce stress in the medical setting.</p> <img alt=\"Studio-Transcendent-_-AppliedVR.jpg\" src=\"/data/blogs/blog16/Studio-Transcendent-_-AppliedVR.jpg\"></p><p>\n  Read&nbsp;more - <a\n        href=\"http://www.studiotranscendent.com/guided-relaxation-project-page/\">here</a>\n</p><h3>SDK</h3><h4>Merged VR</h4><p>Merge Cube SDK updated!</p><p><img alt=\"Merged-VR.jpg\"\n                                                                    src=\"/data/blogs/blog16/Merged-VR.jpg\"></p><p>Read&nbsp;more\n  -\n  <a href=\"http://www.technewsworld.com/story/84744.html\">here</a>\n</p><h4>Google Daydream</h4><p>Google Daydream SDK 1.0 released, supported in 4.13.1<br><img alt=\"Google-Daydream.jpg\"\n                                                                                           src=\"/data/blogs/blog16/Google-Daydream.jpg\">\n</p><p>Read&nbsp;more - <a\n        href=\"https://www.unrealengine.com/en-US/blog/google-daydream-sdk-1-0-released-supported-in-4-13-1\">here</a>\n</p><h2>Hardware</h2><h3>Lenovo</h3><p>The Lenovo Explorer is the official name for its Windows Mixed Reality headset</p><p>\n  <img alt=\"Lenovo.jpg\" src=\"/data/blogs/blog16/Lenovo.jpg\"></p><p>Read&nbsp;more - <a\n        href=\"https://www.wareable.com/microsoft/best-windows-mixed-reality-vr-headset-8763\">here</a>\n</p><h3>Steam VR</h3><p>Carl Zeiss and Valve bring Steam VR to mobile headsets</p><p><img alt=\"Steam-VR.jpg\"\n                                                                                        src=\"/data/blogs/blog16/Steam-VR.jpg\">\n</p><p>Read&nbsp;more - <a\n        href=\"https://www.wareable.com/vr/carl-zeiss-one-connect-steam-vr-5003\">here</a>\n</p><h3>Dell</h3><p>Announcement of &nbsp;new Dell&#39;s Mixed Reality Visor</p><p><img alt=\"Dell.jpg\"\n                                                                                      src=\"/data/blogs/blog16/Dell.jpg\">\n</p><p>Read&nbsp;more - <a\n        href=\"https://www.wareable.com/vr/dell-visor-mixed-reality-headset-review\">here</a>\n</p><h3>Samsung</h3><p>Announcement of new Samsung Gear VR headset</p><p><img alt=\"Samsung.jpg\"\n                                                                            src=\"/data/blogs/blog16/Samsung.jpg\"></p><p>\n  Read&nbsp;more - <a\n        href=\"https://www.wareable.com/vr/new-gear-vr-note-8-4589\">here</a>\n</p><h3>Microsoft</h3><p>New Microsoft Motion Controller for Windows 10 Mixed Reality</p><p><img alt=\"Microsoft.jpg\"\n                                                                                               src=\"/data/blogs/blog16/Microsoft.jpg\">\n</p><p>Read&nbsp;more - <a\n        href=\"https://www.vrnerds.de/mixed-reality-microsoft-motion-controller-fuer-windows-10/\">here</a>\n</p><h3>Kopin</h3><p>VR headsets based on Kopin&rsquo;s 2K display expected by end of 2018</p><p><img alt=\"Kopin.jpg\"\n                                                                                                    src=\"/data/blogs/blog16/Kopin.jpg\">\n</p><p>Read&nbsp;more - <a\n        href=\"https://www.roadtovr.com/vr-headsets-based-kopins-2k-display-expected-end-2018/\">here</a>\n</p><h3>HTC Vive</h3><p>Pre-orders for TPCast Wireless VR Add-on now available in US & Europe\n  <img alt=\"HTC-Vive.jpg\" src=\"/data/blogs/blog16/HTC-Vive.jpg\"></p><p>Read&nbsp;more - <a\n        href=\"https://www.roadtovr.com/pre-orders-tpcast-wireless-vr-add-now-open-europe/amp/\">here</a>\n</p><h3>PlayStation</h3><p>PlayStation Aim Controller in test</p><p><img alt=\"PlayStation.jpg\"\n                                                                       src=\"/data/blogs/blog16/PlayStation.jpg\"></p><p>Read&nbsp;more\n  -\n  <a href=\"https://www.vrnerds.de/playstation-aim-controller-im-test-ps-vr-ziel-controller/\">here</a>\n</p><h3>Dolby Vision & Atmos</h3>\n<p>Lab works on enabling sensory systems, measuring the human experience to content and helping the company fine-tune the algorithms it uses to create technology like Vision and Atmos - making them as immersive as possible.\n  <img alt=\"Dolby-Vision-_-Atmos.jpg\" src=\"/data/blogs/blog16/Dolby-Vision-_-Atmos.jpg\"></p><p>Read&nbsp;more -\n  <a href=\"https://www.wareable.com/vr/dolby-vision-atmos-ar-vr-145\">here</a>\n</p><h2>Announces</h2><p><a\n        href=\"https://www.vrnerds.de/bethesda-erscheinungstermine-von-skyrim-vr-doom-vfr-und-fallout-4-vr/\">Bethesda: </a>Skyrim\n  VR, Doom VFR and Fallout 4 VR appearances.</p><p><a\n        href=\"http://www.pocket-lint.com/news/138436-gamescom-2017-all-the-announcements-and-games-that-matter\">Gamescom:</a>&nbsp;All\n  important news from Gamescom 2017.</p><p><a\n        href=\"https://vrscout.com/news/disney-lenovo-star-wars-ar-headset/\">Disney\n  &amp; Lenovo:</a>&nbsp;The Star Wars Jedi Challenges AR experience comes with a lightsaber controller, a tracking\n  beacon, and Lenovo Mirage AR headset.</p><h3>August 2017 VR games announcements</h3>\n<ul>\n  <li>Alien: Isolation VR</li>\n  <li>Sparc</li>\n  <li>Fallout 4 VR</li>\n  <li>The Talos Principle</li>\n  <li>Bullet Sorrow</li>\n  <li>Project Cars 2</li>\n  <li>Racket NX</li>\n  <li>Catan</li>\n  <li>Star Trek: Bridge Crew</li>\n  <li>Rick and Morty: Virtual Rick-ality</li>\n  <li>Fruit Ninja VR</li>\n  <li>Arizona Sunshine</li>\n  <li>Robo Recall</li>\n  <li>Superhot VR</li>\n</ul><p style=\"font-weight: bold;\">Don&rsquo;t miss the latest VR news next month in our VR digest!</p>",
      backgroundImage: '/data/blogs/blog16/VR_digest_cover.jpg',
      mainImage: '/data/blogs/blog16/VR_digest_cover.jpg',
      backgroundImagePosition: 'center bottom',
      imageHeight: '40.75rem',
      authors: [],
      seo: {
        title: 'ELIFTECH | Your Trusted IT Partner | Blog | VR digest. August 2017',
        description: 'What’s the latest news on the bleeding edge of virtual reality, augmented reality, and human-computer interaction? Let us  keep you up to date!',
        keywords: 'vr, ar, mr, virtual reality, augmented reality, mixed reality, sdk, babylonjs, ARKit, ARCore,  ARJS,  Web VR, WebGL,  Google Daydream, VR game,  web development software, software outsourcing, software development, custom software development company, software development outsourcing'
      }
    },
    {
      id: 17,
      url: '17-featured-on-ratings',
      "title": "ElifTech is Featured on Ratings and Reviews Platform Clutch.co",
      "pubDate": "Thu, 14 Sep 2017 03:00:00 +0000",
      category: "blogs",
      rate: '5.0',
      tags: "Clutch, Customer-Centered, Commitment",
      description: "Recently, we have been featured by Clutch, a ratings and review platform",
      text: "<p>At ElifTech, we pride ourselves on being a young and creative team ready to design, build, and implement impressive software solutions for our long list of clients. We are a trusted source for implementing the newest technologies into successful products. Recently, we have been featured by Clutch, a ratings and review platform based in Washington, D.C. covering web, software, and mobile <a href=\"https://clutch.co/app-developers/ukraine\">app development services</a> companies around the world. </p><p><a href=\"https://clutch.co/directory/mobile-application-developers\">Clutch&rsquo;s</a> work examines thousands of companies based on their market presence, industry experience, and proven ability to deliver excellence and results to their clients. Clutch analysts consider many quantitative and qualitative factors when evaluating companies. Most importantly, the Clutch team speaks directly with current and past clients to hear first-hand how each firm performs and delivers. This comprehensive approach gives users and buyers a realistic understanding of each service providers&rsquo; strengths and weaknesses.</p><p><img alt=\"HTC-Vive.jpg\" src=\"/data/blogs/blog17/clutch_review.jpg\"></p><p>So far, we have received <a href=\"https://clutch.co/profile/eliftech\">five stars on Clutch</a>! Our most recent five-star review comes from the Owner at ClearCloudSoftware, who had the following to say about our partnership:</p><p>&ldquo;I insist that my developers are able to communicate well and are specialized in MEAN.io, Node.js, and the JavaScript web technology that&rsquo;s growing in popularity. Everyone on ElifTech&rsquo;s team meets these requirements&mdash;not just 1 senior resource. Everybody who is hired by ElifTech is supposed to have these technical skills.&rdquo;</p><p>He went on to say, &ldquo;I have pretty high standards when it comes to developers. They&rsquo;ve always provided the right resources for my needs. I&rsquo;m pretty happy with our collaboration and look forward to continuing.&rdquo;</p><p>We&rsquo;re excited that our clients are willing to provide positive reviews on Clutch. We look forward to growing our Clutch presence, and to delivering more successful projects to our clients. </p>",
      backgroundImage: '/data/blogs/blog17/clutch_cover.jpg',
      mainImage: '/data/blogs/blog17/clutch_cover.jpg',
      backgroundImagePosition: 'center',
      authors: [],
      seo: {
        title: 'ELIFTECH | Your Trusted IT Partner | Blog | Clutch Ratings and Reviews',
        description: 'Recently, we have been featured by Clutch, a ratings and review platform',
        keywords: 'IoT development, clutch,  web development software, software outsourcing, software development, custom software development company, software development outsourcing, mobile app development'
      }
    },
    {
      id: 18,
      url: '18-smartoffice-how-to-make-a-smart-water-cooler',
      "title": "#SmartOffice: How to make a Smart Water Cooler",
      "pubDate": "Mon, 18 Sep 2017 03:00:00 +0000",
      category: "experiments",
      rate: '5.0',
      tags: "SmartOffice, IoT, AWS, NodeMCU",
      description: "#SmartOffice experiment: How to make a Smart Water Cooler",
      text: "<p>Offices are usually equipped with water coolers. There is one at ElifTech that was quite regular until recently: it  consisted of a water bottle, two buttons for hot and cold water, and no guarantee that the bottle will not be empty  right in front of your cup. We upgraded the device as part of our internal experiment - SmartOffice, so read below  about the workflow and outcomes.</p><h2>About the SmartOffice Project</h2><p>We came up with the idea for &#8203;&#8203;the experiment during a team  brainstorm while we were talking about existing smart homes projects and automated home appliances. We decided to  upgrade some existing office devices in order to test the Internet of Things technologies. A water cooler is one of  the most used devices, so it became our pilot project, the &quot;Smart Water Cooler&quot; as we call it.</p><h2>The Concept of the Smart Water Cooler</h2><p>A struggle with the regular water cooler is that the water delivery  is irregular and usually delayed. That often causes the team trouble by turning the office into a desert with no water  to drink. The Smart Water Cooler monitors water supplies and automatically orders the next batch via SMS without human  help. The team receives notifications from the system in a corporate chat, something like &quot;there is water for  only three cups of tea left.&quot; However, if a human still wants to be involved in the process, they can check the  water level and its temperature from anywhere in the world.</p><p><img alt=\"\" src=\"/data/blogs/blog18/smartwatercooler1.jpg\" title=\"\"></p><h2>Implementation</h2><p>We upgraded to the Smart  Water Cooler in three steps: we explored how a base model was designed, developed and programmed a hardware solution,  and then we integrated it with Amazon Web Services.</p><p>The workflow was carried out as follows:</p><ul><li>analyzing the solutions to determine the water level;</li><li>analyzing the platform and an MCU (Micro Controller Unit) for the project development;</li><li>exploring the structure of a regular cooler;</li><li>POC (Proof of Concept) development with minimal intervention in  the hardware part;</li><li>software development for a microcontroller;</li><li>upgrading the Smart Water Cooler;</li><li>software development for monitoring;</li><li>UI&nbsp;development.</li></ul><h2>  Integration of Water Level Determination</h2><p>We found three options to determine the water level: a float level, a  flow sensor, and a weight sensor.</p><p>After analyzing them, we rejected the float level because it makes contact with the water inside the bottle. The  second option, the Arduino Water Meter, also needs to touch the drinking water, and it was not an affordable option.  The weight sensor won. By knowing the weight of both full and empty bottles, we can calculate how much liquid is left.</p><p>An array of 4 sensors - &nbsp;Load Cell, which is usually used in scales, was the best among the samples we  tested. To connect the sensor to the MCU, we used the Load Cell Amplifier HX711.</p><p class='blog-post-img-column'><img alt=\"\" src=\"/data/blogs/blog18/smartwatercooler2.jpg\" title=\"\"><img alt=\"\" src=\"/data/blogs/blog18/smartwatercooler3.jpg\"                                                                     title=\"\"></p><h2>Analyzing the Platform and an MCU  (Micro Controller Unit) for the Project Development</h2><p>Here we also had three options to choose from: Tessel 2, Arduino Nano + Ethernet / WiFi shield, and ESP8266.  Tessel 2 is a much too powerful solution for our purpose. The Arduino Nano + Ethernet / WiFi shield won out over the  ESP8266 because it has Wi-Fi, a powerful processor, and a sufficient number of ports on board. Additionally, its size  and price are minimal. NodeMCU was used as the base firmware for the MCU. We were able to learn a new programming  language during the process.</p><h2>Exploring the Structure of a Regular Water Cooler</h2><p>As it turned out, a water cooler is a surprisingly  simple device that has a lot of empty space inside, which gave us good opportunities for the upgrade.</p><p class='blog-post-img-column'><img alt=\"\" src=\"/data/blogs/blog18/smartwatercooler4.jpg\" title=\"\"><img alt=\"photo5.jpg\"                                                                             src=\"/data/blogs/blog18/smartwatercooler5.jpg\"                                                                             title=\"\"></p><h2>POC (Proof of Concept)  Development</h2><p>In order to test the concept, we developed a minimalistic software for the MCU. The data was transmitted to  local MQTT broker Mosquitto&reg;  by using MQTT IoT standard. We attached an MCU to the water cooler and connected a thermosensor to the water  container.</p><p>For a real-time graph showing temperature changes, we used the MQTT Dashboard Android application.</p><p><img alt=\"photo6.jpg\" src=\"/data/blogs/blog18/smartwatercooler6.jpg\" title=\"\"></p><h2>Software Development for a  Microcontroller</h2><p>We obtained data from two digital sensors: temperature sensor ds18b20 and weight sensor HX711. They are  transmitted via a Wi-Fi connection in JSON format using MQTT protocol. Scripts are written in Lua and perform by  NodeMCU firmware. When using an MCU, there is no option to use cryptography and certificates, which is why we launched  a separate MQTT broker on the local network in the bridge mode, which uses AWS certificates and transmits data to AWS  IoT.</p><figure><img alt=\"photo7.jpg\" src=\"/data/blogs/blog18/smartwatercooler7.jpg\" title=\"\"><figcaption><a href=\"https://github.com/SoulBringer/SmartCooler/blob/master/NodeMCU/cooler.lua\">SmartCooler/NodeMCU/cooler.lua  on GitHub</a></figcaption></figure><h2>Upgrading the Smart Water Cooler</h2><p>To simplify the installation, we made an adapter board and integrated it  into the water cooler,&nbsp;together with the additional power supply. We&nbsp;then&nbsp;connected the weight and  temperature sensors.</p><p class='blog-post-img-column'><img alt=\"\" src=\"/data/blogs/blog18/smartwatercooler8.jpg\" title=\"\"><img alt=\"\" src=\"/data/blogs/blog18/smartwatercooler9.jpg\"                                                                     title=\"\"></p><h2>Software Development for  Monitoring</h2><p>We configured Rule Action&nbsp;in AWS IoT, which stores the data received from the MCU in the DynamoDB database.</p><p>  Serverless Lambda function serves as a monitoring software, which is being checked by AWS CloudWatch at a given time  interval. Lambda checks the current entry in DynamoDB and decides what action to take.</p><figure><img alt=\"photo10.jpg\" src=\"/data/blogs/blog18/smartwatercooler10.jpg\" title=\"\"><figcaption><a href=\"https://github.com/SoulBringer/SmartCooler/blob/master/SupervisorLambda/index.js\">SmartCooler/SupervisorLambda/index.js  on GitHub</a></figcaption></figure><p>Lambda sends a message to the relevant AWS SNS (Simple Notification Service) thread, and then Lambda-functions  receives it &mdash;  that is how notifications are sent. To deliver messages to the messenger, one of the Lambda functions uses Slack  Webhooks, and another works with Twilio service for sending SMS.</p><p><img alt=\"photo11.jpg\" src=\"/data/blogs/blog18/smartwatercooler11.jpg\" title=\"\"></p><h2>UI Development</h2><p>  We developed web UI on AngularJS and hosted it on AWS S3.</p><p>  Backend for UI was implemented in the form of AWS Lambda called through the AWS API Gateway using the usual REST  queries. Thus, the entire software works in&nbsp;a&nbsp;Managed Cloud Environment with no additional administration or&nbsp;need  to lease a server/VPC. AWS Free Tier is enough to store all the needed data, and we pay nothing for that.</p><p><img alt=\"photo12.jpg\" src=\"/data/blogs/blog18/smartwatercooler12.jpg\" title=\"\"></p><h2>Tech Stack</h2><ul><li>NodeMCU and programming language Lua;</li><li>Twilio service;</li><li>AWS IoT;</li><li>AWS DynamoDB;</li><li>AWS Lambda;</li><li>AWS SNS;</li><li>AWS CloudWatch;</li><li>AWS API Gateway.</li></ul><p>It took about a month of part-time work to develop  the&nbsp;project. In addition to the fun we got from learning new technologies, the project helped simplify the office  manager&rsquo;s routine and saved the office from the probable drought.</p><p><img alt=\"photo12.jpg\" src=\"/data/blogs/blog18/smartwatercooler13.jpg\" title=\"\"></p><p><img alt=\"photo14.jpg\"                                                                                        src=\"/data/blogs/blog18/smartwatercooler14.jpg\"                                                                                        title=\"\"></p><p>  We have several SmartOffice projects on our minds to develop: automation of the office alarm system, automated light  control, and automated heating and air conditioning. So stay tuned!</p><figure><img alt=\"photo15.jpg\" src=\"/data/blogs/blog18/smartwatercooler15.jpg\" title=\"\"><figcaption>Smart Water Cooler Developers team</figcaption></figure>",
      backgroundImage: '/data/blogs/blog18/smartwatercooler_cover.jpg',
      mainImage: '/data/blogs/blog18/smartwatercooler_cover.jpg',
      authors: [],
      seo: {
        title: 'ELIFTECH | Your Trusted IT Partner | Blog | Smart Water Cooler',
        description: '#SmartOffice experiment: How to make a Smart Water Cooler',
        keywords: 'Smart Office, IoT, connected devices, AWS, AWS IoT, NodeMCU, Lambda, Internet of Things,  web development software, software outsourcing, software development, custom software development company, software development outsourcing, iot devices, internet of things devices, internet of everything, iot applications'
      }
    },
    {
      id: 19,
      url: '19-outsource-software-development-to-ukraine',
      "title": "Why it’s a Good Idea for Startups to Outsource Software Development to Ukraine",
      "pubDate": "Mon, 2 Oct 2017 03:00:00 +0000",
      category: "blogs",
      rate: '5.0',
      tags: "outsourcing, software_outsourcing, startup, Ukraine",
      description: "Why it’s a Good Idea for Startups to Outsource Software Development to Ukraine: IT outsourcing to Eastern Europe become a partnership that brings tangible benefits",
      text: "<p>Every big company was just a startup once. While some of them managed to survive on their own, other startups grew and prospered thanks to outsourcing various aspects of their business, like design, support, accounting and, of course, software development. Times have changed, and now IT outsourcing to East European countries like Ukraine goes beyond merely cheap offshore software development - it has become a partnership that brings <a href=\"https://www.eliftech.com/blog/11-5-ways-outsourcing-software-development\" target=\"_blank\" rel=\"nofollow\"> tangible benefits</a>. And young companies can always use a skilled partner they can trust.</p> <p>If you’re running a tech startup and think that you won’t need any part of your job outsourced, remember that there are plenty of tasks besides coding you have to handle. Outsourcing software development can help you delegate a huge chunk of work that could drag your company down or delay the launch of its product and let you focus on actually developing your startup. Just look at the business problems that can be solved with software outsourcing.</p>" +
        "<h2 class=\"text-left\">Startup Challenges Solved with Outsourcing</h2> Regardless of whether your startup is a mature or a budding business, it will face certain obstacles at some point. Of course, not all of them can be solved with outsourcing, but offshore software development may help alleviate the most common of them. <figure><img alt=\"photo2.jpg\" src=\"/data/blogs/blog19/outsource_2.jpg\" title=\"\"><figcaption>Lviv, Ukraine, city of ElifTech HQ</figcaption></figure> " +
        "<h3 class=\"text-left\">Tight Budget</h3> " +
        "Yes, this is old news, but it’s true. Unfortunately, the big ideas that startups have often lack the big budgets they need. When you’re tight on cash, you start counting every employee, every workspace, every computer, every coffee machine and so on. Outsourcing software development to countries like Ukraine, where an average programmer’s salary is lower than in other European countries, just might save you some money. Not to mention that equipping your offshore developer with an office, a laptop and decent coffee is going to be your outsourcing partner’s headache, not yours. Now, calculate the tax difference and you have yourself an answer to the question: “Why outsource to Ukraine?”\n" +
        "<h3 class=\"text-left\">Lack of Professional Expertise</h3>" +
        "If you’re a startup, chances are you’re new to the business. Your outsourcing partner, on the other hand, has been building up professional expertise for a couple of years now - that’s why you contracted them in the first place. This is especially true for startups that have a killer app idea but no app developers or business knowledge to bring it to life. A carefully chosen outsourcing partner will lead you through the software development life cycle, help you select the right technologies, explain the difference between Objective-C and Swift development, assure you that no one writes web apps in Web Forms anymore and Angular 4 is much better, set up an Agile development process and explain why this particular case needs automated quality assurance.\n" +
        "<h3 class=\"text-left\">Painful Staffing</h3>" +
        "Headhunting is usually harder than it looks. Think about the competition for skilled developers, the time you spend picking the ones that meet your requirements and the benefits you can offer as a startup to make them leave their current job. And after all this, what if the person you hired is not the professional they bragged to be? Do you fire them? But you’ve spent so many resources to hire them! Let them stay? But that will mean more expenses than income! And what if you simply don’t get along? Is this a reason to say “Goodbye!” to a good employee? Startups that work with software outsourcing vendors, however, don’t have problems like this - all the staffing issues are handled by the offshore partner. Plus, you get to tap into an impressive pool of specialists of all technologies and seniority levels to choose from.\n" +
        "<h3 class=\"text-left\">Potential Scalability</h3>" +
        "Outsourcing software development is your go-to solution if you plan to scale your business fast. Like we’ve said, looking for qualified software developers is hard for big companies, let alone startups. And after you’ve spent months recruiting people, something in your business plan can go wrong and you’ll be forced to let half of the team go. It’s also hard for a young startup to maintain an IT department if it doesn’t bring any profit. Outsourcing lets you scale up and down fast, without having hard feelings with soon-to-be-ex coworkers. Yes, searching for the right outsourcing partner can also be time-consuming, but when you do find them, you’ll be able to start working with a professional team of developers right away and suspend your cooperation whenever needed.\n" +
        "<h3 class=\"text-left\">Low Efficiency</h3>" +
        "With outsourcing, you have the time zone advantage that allows your startup to operate around the clock. If you’re running out of time to get everything ready for launch, having an offshore software development team that works while your in-house team rests is priceless. Also, if you’re new to a technology, it will take you more time to do the same work that a specialized outsourcing team would do more quickly. Overall, recruiting an extended team is what’s going to make your startup more efficient by doing more work in less time without the loss in quality. <figure><img alt=\"photo4.jpg\" src=\"/data/blogs/blog19/outsource_4.jpg\" title=\"\"><figcaption>Vinnytsa, Ukraine, city of ElifTech’s Development Center</figcaption></figure>" +
        "<h2 class=\"text-left\">Why Outsource Software Development to Ukraine? Here are Some Facts.</h2>" +
        "<p>The biggest country in Europe, Ukraine has a lot to offer in terms of custom software development and outsourcing to both startups and business giants. Ukraine’s IT potential has been building up for more than 20 years, skyrocketing in the last decade. Now, Ukraine sounds like an excellent software outsourcing destination for companies from Europe and the U.S. </p>" +
        "<p>Ukrainians are a nation of talented workaholics, and Ukrainian software developers embrace both of these traits. More than <a href=\"http://www.uadn.net/files/ukraine_it.pdf\" target=\"blank\" rel=\"nofollow\">90,000</a> skilled IT professionals are currently working in Ukraine, and thanks to the quality of education in Ukrainian universities, the number is expected to rise to about 200,000 in 2020. According to the <a href=\"https://www.outsourcing-verband.org\" target=\"blank\" rel=\"nofollow\">German Outsourcing Association</a>, this will rank Ukraine as the top IT destination in Eastern Europe. Ukrainian software and app developers are also eager to invest into continuous education and training to be at the forefront of technology. </p>" +
        "<p>Business advantages of outsourcing software development to Ukraine include lower taxes and overall expenditures, as well as intellectual property protection. Compared to its neighboring EU countries, Ukraine’s GDP and economic standing promise reasonable prices to foreign clients. In other words, you get excellent quality for less money when outsourcing to Ukraine. As far as safety and confidentiality are concerned, you can be sure that your intellectual property is under protection by a special <a href=\"http://sips.gov.ua/en\" target=\"blank\" rel=\"nofollow\">Intellectual Property Court</a>, which is a court of first instance for copyright, trademark and patent disputes in Ukraine. <figure><img alt=\"photo3.jpg\" src=\"/data/blogs/blog19/outsource_3.jpg\" title=\"\"><figcaption>Lviv, Ukraine, city of ElifTech HQ</figcaption></figure> <p>The <a href=\"http://itcluster.lviv.ua/wp-content/uploads/2016/01/IT_Research-2015_12_23-eng.pdf\" target=\"blank\" rel=\"nofollow\">target market research</a> of Lviv, one of Ukraine’s biggest IT hubs, and the <a href=\"http://www.uadn.net/files/ukraine_it.pdf\" target=\"blank\" rel=\"nofollow\">IT Ukraine from A to Z</a> report shows that large companies, as well as startups from North America, European countries, the Middle East and East Asia, have already created reliable long-term relationships with Ukrainian outsourcing companies. Reasonable software development prices, well-educated programmers and numerous business opportunities make Ukraine one of the best software outsourcing destinations in Europe.</p> <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/VzhyCU16rcY\" frameborder=\"0\" allowfullscreen></iframe> <p><em>Copyrights are owned by the <a href=\"http://itukraine.org.ua/en\" target=\"blank\" rel=\"nofollow\">Association “IT Ukraine”</a></em></p>" +
        "<h2 class=\"text-left\">Conclusion</h2>" +
        "The stress of running a startup is surreal. There are so many things to take care of, so much responsibility and so little experience that it’s easy to lose control over business development. Luckily, working with a trusted offshore development team can make it easier to focus on your core business values. Like Peter Drucker said: “Do what you do best and outsource the rest.” Over the past two decades, outsourcing companies from countries like Ukraine have proven to be reliable partners in building efficient and competitive startups worldwide. <p><img alt=\"photo1.jpg\" src=\"/data/blogs/blog19/outsource_1.jpg\" title=\"\"></p>",
      backgroundImage: '/data/blogs/blog19/cover.jpg',
      mainImage: '/data/blogs/blog19/cover.jpg',
      backgroundImagePosition: 'left center',
      seo: {
        title: 'ELIFTECH | Blog | Why Startups should Outsource SD to Ukraine',
        description: 'Why it’s a Good Idea for Startups to Outsource Software Development to Ukraine: IT outsourcing to E. Europe become a partnership that brings tangible benefits',
        keywords: 'custom software development, software outsourcing, startup, startups, offshore software development, agile software development, software development life cycle, start up business, start up, Ukraine It business, software outsourcing ukraine, outsourcing ukraine, software development ukraine, ukraine app developers, ukrainian developers, software development company, outsourcing, outsourcing company, software development methodologies, agile, hire web developers, outsource ukraine, it outsourcing ukraine, it outsourcing ukraine, ukraine software development'
      }
    },
    {
      id: 20,
      url: '20-javascript-digest-october-2017',
      "title": "JavaScript digest.  October 2017",
      "pubDate": "Fri, 6 Oct 2017 03:00:00 +0000",
      category: "news",
      rate: '5.0',
      tags: "angular, reactjs, bootstrap, MachineLearning",
      description: "Find out what happened (everything related to JavaScript) during last two months: news, releases, libs and experiments. Enjoy our newest JS digest!",
      text: "<p>Find out what happened (everything related to JavaScript) during last two months: news, releases, libs and experiments. Enjoy our newest JS digest, stay up to date!<h2>What&rsquo;s new in Angular 5</h2>" +
        "<p>In general:</p><ul><li>making it easier to build progressive web apps, so apps can be cached in the browser;</li><li>will have a build optimizer that makes the application smaller by eliminating unnecessary code;</li><li>making Material Design components compatible with server-side rendering.</li></ul>" +
        "<p><img src=\"/data/blogs/blog20/Angular5_dalayed.jpg\" alt=\"delayed_angular5.jpg\"/></p><p>Read more about these <a target=\"blank\" href=\"https://www.infoworld.com/article/3213244/javascript/whats-new-in-angular-5-easier-progressive-web-apps.html#tk.rss_javascript\">here</a>.</p><h2>Machine learning comes to browser via JS</h2><p>Meet TensorFire:</p><ul><li>runs TensorFlow-style machine learning models on any GPU;</li><li>using the WebGL standard;</li><li>both AMD and Nvidia GPUs are supported;</li><li>can run in any web-browser literally (mobile, desktop) ;</li><li>predictions deployment &nbsp;to be done entirely on the client.</li></ul>" +
        "<p><img src=\"https://lh5.googleusercontent.com/6uSiNDEWJeNr9bLzmIos_9Tp-9wbWGSBnucwTZM409RbybS0CZyr_SJFnmKhq-2V-Fl6GBbjh1xoX0SNFIX9sa9UMI6BdIwLFsfAAP9ctLuX3nwAhq1orpMWg-og5ThqVwWE-iLf\" alt=\"tensorfire.gif\"/></p><p>Read more about these <a target=\"blank\" href=\"https://www.infoworld.com/article/3212884/machine-learning/machine-learning-comes-to-your-browser-via-javascript.html\">here</a>.</p><h2>Google&rsquo;s Deeplearn.js brings machine learning to the browser</h2><p>What is cool:</p><ul><li>you can play with machine learning inside the browser;</li><li>TypeScript &amp; WebGL;</li><li>&ldquo;A client-side ML library can be a platform for interactive explanations, for rapid prototyping and visualization, and even for offline computation&rdquo;;</li></ul><p>Read more about these <a target=\"blank\" href=\"https://deeplearnjs.org\">here</a>.</p><h2>Firefox 55 &amp; 56</h2><p>What is new:</p><ul><li>Firefox Screenshots;</li><li>new CSS Grid Layout Panel;</li><li>implemented &lt;link rel=\"preload\"&gt;;</li><li>WebVR 1.1 API enabled by default.</li></ul><p>Read more about these <a target=\"blank\" href=\"https://developer.mozilla.org/en-US/Firefox/Releases/55\">55</a> and <a target=\"blank\" href=\"https://developer.mozilla.org/ru/Firefox/Releases/56\">56</a>.</p><h2>Bootstrap 4 Beta</h2><p><img src=\"/data/blogs/blog20/bootstrap-4-beta.jpg\" alt=\"bootstrap-4-beta.jpg\" /></p><p>What does it mean:</p><ul><li>Two years in the making;</li><li>Moved from Less to Sass;</li><li>Flexbox and an improved grid system;</li><li>Dropped wells, thumbnails, and panels for cards;</li><li>Forked Normalize.css and consolidated all our HTML resets into a new CSS module, Reboot;</li><li>Dropped IE8 and IE9 support, dropped older browser versions, and moved to rem units for component sizing;</li><li>&hellip; and much more.</li></ul><p>Read more about these <a target=\"blank\" href=\"https://blog.getbootstrap.com/2017/08/10/bootstrap-4-beta/\">here</a>.</p><h2>Yarn 1.0 release</h2><ul><li>WorkSpaces enabled by default;</li><li>Stable and powerful.</li></ul><p>Read about it <a target=\"blank\" href=\"https://github.com/yarnpkg/yarn/releases/tag/v1.0.0\">here</a>.</p><h2>Greet Atom IDE</h2><ul><li>in collaboration with Facebook;</li><li>set of optional packages to bring IDE-like functionality to Atom;</li><li>smarter context-aware auto-completion as well as a host of code navigation features such as an outline view, go to definition, find all references as well as other useful functions such as hover-to-reveal information, errors and warnings (diagnostics) and document formatting.</li></ul><p>More info <a target=\"blank\" href=\"http://blog.atom.io/2017/09/12/announcing-atom-ide.html\">here</a>.</p><h2>New WebKit Features in Safari 11</h2><ul><li>WebAssembly enabled;</li><li>WebRTC and Media Capture (not bad yeah?!);</li><li>Intelligent Tracking Prevention.</li></ul><p>Read about it <a target=\"blank\" href=\"https://webkit.org/blog/7956/new-webkit-features-in-safari-11/\">here</a>.</p><h2>CoffeeScript 2.0</h2><ul><li>now translates into modern JavaScript syntax;</li><li>Support JSX;</li><li>very few breaking changes from 1.x.</li></ul><p>More info <a target=\"blank\" href=\"http://coffeescript.org/announcing-coffeescript-2/\">here</a>.</p><h2>React 16</h2><ul><li>New render return types: fragments and strings;</li><li>Better error handling;</li><li>Portals;</li><li>Support for custom DOM attributes;</li><li>Reduced file size (react + react-dom is 109 kb (34.8 kb gzipped), down from 161.7 kb (49.8 kb gzipped).);</li><li>New core architecture (e.g. async rendering);</li><li>JavaScript Environment Requirements (include polyfils for older browsers).</li></ul><h3 style=\"color:#13A6E1\">&amp; Facebook re-licenses React, Jest, Flos, Immutable to MIT :]</h3><p></p><p>Read about it <a target=\"blank\" href=\"https://reactjs.org/blog/2017/09/26/react-v16.0.html\">here</a>.</p><h2>Libs and Experiments</h2>" +
        "<h3>Experimenting with WebAssembly and Computer Vision</h3><ul><li>6 weeks of work;</li><li>Builded WebSight, ported OpenCV (C/C++ lib) to wasm;</li><li>The architecture of the functions that drove these algorithms was the same.</li></ul><p><img src=\"https://lh5.googleusercontent.com/pdSz1O0SFW-834feXPS4tHf4ViYExZl3YLc4JW_cW5JsLhhX1DjxK7H-JKoogT4kG_25UOzfXKCV4hfChD7_ekdHFDdfgzHJ_HQ7ZtZ3OqevZDV4ThCDX78Fq_aZayFb1gQqSwn5\" alt=\"WebAssembly.gif\" /></p><p>Read about it <a target=\"blank\" href=\"https://hacks.mozilla.org/2017/09/bootcamps-webassembly-and-computer-vision/\">here</a>.</p><h3>Runtime code analyzer</h3><ul><li>allows to record your code flow in real time;</li><li>intercept runtime informations;</li><li>manipulate program behaviour on the fly.</li></ul><p>Read about it <a target=\"blank\" href=\"https://github.com/maierfelix/Iroh\">here</a>.</p><h3>Create MS word docs with React</h3>" +
        "<pre><code>class App extends React.Component {\n" +
        "   render() {\n" +
        "       return (\n" +
        "       &ltDocument&gt\n" +
        "         <Text>Hello World</Text>\n" +
        "       &lt/Document&gt\n" +
        "     ) } }\n" +
        "render(<App />,`${__dirname}/example.docx`)</code></pre>" +
        "<p>More info <a target=\"blank\" href=\"https://github.com/nitin42/redocx\">here</a>.</p><p>That’s it for now. Stay tuned for next edition of JS digest!\n</p><iframe src=\"//www.slideshare.net/slideshow/embed_code/key/x4PPCd1A1f0qRk\" width=\"595\" height=\"485\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" style=\"border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;\" allowfullscreen> </iframe> <div style=\"margin-bottom:5px\"> </div>",
      backgroundImage: '/data/blogs/blog20/js-digest_october2017.jpg',
      mainImage: '/data/blogs/blog20/js-digest_october2017.jpg',
      authors: [],
      seo: {
        title: 'ELIFTECH | Your Trusted IT Partner | Blog | JavaScript digest. October 2017',
        description: 'Find out what happened (everything related to JavaScript) during last two months: news, releases, libs and experiments. Enjoy our newest JS digest!',
        keywords: 'javascript, js, web development software, software outsourcing, software development, custom software development company, software development outsourcing, angular, angular 5, angular js, atom ide, bootstrap, bootstrap 4, coffeescript 2.0, deeplearn.js, firefox, google, machine learning, ml, react, react 16, react.js, react js,  safari, safari 11, webassembly, webkit, yarn'
      }
    },
    {
      id: 21,
      url: '21-vr-digest-october-2017',
      "title": "VR digest.  October 2017",
      "pubDate": "Fri, 13 Oct 2017 03:00:00 +0000",
      category: "news",
      rate: '5.0',
      tags: "VR, AR, VirtualReality, AugmentedReality",
      description: "Stay up to date on VR: technologies, hardware, games announces, news, VR Awards 2017 results",
      text: "<p>Stay up to date on Virtual Reality: technologies, hardware, games announces, news, VR Awards 2017 results. Here is the list of what happened in VR during September-October 2017:</p>\n" +
        "<h2>Technologies</h2>" +
        "<h3>Releases</h3>" +
        "<h4>Unity 2017.2</h4>" +
        "<p>Unity 2017.2 introduces new 2D world-building tools, support for new XR platforms. Unity 2017.2 includes updates to the robust storytelling tools Timeline and Cinemachine, as well as support for ARCore, ARKit, Vuforia, and Windows Mixed Reality immersive headsets.</p>\n" +
        "<figure><img alt=\"unity20172mini.jpg\" src=\"/data/blogs/blog21/unity20172mini.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://blogs.unity3d.com/ru/2017/10/12/unity-2017-2-is-now-available/\">here</a></figcaption></figure>" +
        "<h4>Oculus</h4>\n" +
        "<p>Oculus has released its Avatar SDK and Explore API to the world. Additionally, Oculus is opening up Avatars to other VR platforms, PC, and mobile in 2018.</p>\n" +
        "<figure><img alt=\"oculus.jpg\" src=\"/data/blogs/blog21/oculus.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.gamasutra.com/view/news/307426/Heads_up_VR_devs_Oculus_has_released_its_Avatar_SDK_and_Explore_API_to_the_world.php\">here</a></figcaption></figure>" +
        "<h4>Stardust 1.1.0 Released</h4>\n" +
        "<p>New features:</p>\n" +
        "<ul>\n" +
        "<li>3D Models and Primitives as particle instances</li>\n" +
        "<li>HDR Image-based lighting</li>\n" +
        "<li>Physical materials</li>\n" +
        "<li>Ambient occlusion</li>\n" +
        "<li>Extrude Text and Masks</li>\n" +
        "<li>GPU Powered</li>\n" +
        "<li>Workflow enhancements</li>\n" +
        "</ul>\n" +
        "<figure><iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/JT9DuqqT0ag\" frameborder=\"0\" allowfullscreen></iframe><figcaption>Read more <a target=\"_blank\" href=\"https://www.unrealengine.com/en-US/blog/unreal-engine-4-17-released\">here</a></figcaption></figure>" +
        "<h4>CRYENGINE 5.4 Major Release</h4>\n" +
        "<p>New features:</p>\n" +
        "<ul>\n" +
        "<li>In 5.4 CryEngine have added several terrain features that allow blending and integration of separate objects into the terrain mesh.</li>\n" +
        "<li>Upgraded in release 5.4 is the new \"Extended Detail Bending\" toggle - found in the vegetation shader.</li>\n" +
        "<li>A base implementation of the new Asset System, which allows users to directly interact with their assets and directories.</li>\n" +
        "</ul>\n" +
        "<p class=\"font-italic\">Read more <a href=\"https://www.cryengine.com/news/cryengine-54-major-release#\">here</a>.</p>\n" +
        "<h3>Announces</h3>\n" +
        "<h4>Unity</h4>\n" +
        "<p>Announced Support For IOS 11 And ARKit.</p>\n" +
        "<figure><img alt=\"unity.jpg\" src=\"/data/blogs/blog21/unity.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/unity-announces-support-for-ios-11-and-arkit/\">here</a></figcaption></figure>" +
        "<h4>Google</h4>\n" +
        "<p>Research and Development Daydream Labs&rsquo; team have revealed some of the results of their experiments with the new ARCore toolset.</p>\n" +
        "<figure><img alt=\"google.gif\" src=\"/data/blogs/blog21/google.gif\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/google-reveals-their-experiments-with-arcore/\">here</a></figcaption></figure>" +
        "<h4>Apple</h4>\n" +
        "<p>Apple announced it&rsquo;s new visitor centre will greet visitors with a help of augmented reality</p>\n" +
        "<figure><img alt=\"apple.jpg\" src=\"/data/blogs/blog21/apple.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/apples-new-visitor-centre-to-feature-ar-experience/\">here</a></figcaption></figure>" +
        "<h3>VR</h3>\n" +
        "<h4>Opera</h4>\n" +
        "<p>Google Chrome and Mozilla Firefox have been hard at work integrating virtual reality capabilities into the browsers.</p>\n" +
        "<figure><img alt=\"opera.jpg\" src=\"/data/blogs/blog21/opera.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/opera-browser-offering-vr-button/\">here</a></figcaption></figure>" +
        "<h4>Ford</h4>\n" +
        "<p>HoloLens allows designers and engineers to prototype new cars faster and more cheap.</p>\n" +
        "<figure><img alt=\"ford.jpg\" src=\"/data/blogs/blog21/ford.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/ford-using-microsoft-hololens-for-car-design/\">here</a></figcaption></figure>" +
        "<h4>Audi</h4>\n" +
        "<p>Now the company is launching a virtual reality experience at European dealerships.</p>\n" +
        "<figure><img alt=\"audi.jpg\" src=\"/data/blogs/blog21/audi.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/audi-dealerships-launch-vr-experiences/\">here</a></figcaption></figure>" +
        "<h3>3D/VR</h3>\n" +
        "<h4>Oculus</h4>\n" +
        "<p>Near-Field HRTF and Volumetric Sound Sources are the new tools at developers disposal.</p>\n" +
        "<figure><iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/gVN7lUC_TiY\" frameborder=\"0\" allowfullscreen></iframe><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/vrs-about-to-get-even-scarier-as-oculus-introduces-new-audio-tools-for-developers/\">here</a></figcaption></figure>" +
        "<h4>Rodin</h4>\n" +
        "<p>Web-based development platform Rodin wants to make VR/AR creation easy for all. It's been designed primarily for web developers who know JavaScript.</p>\n" +
        "<figure><img alt=\"rodin.jpg\" src=\"/data/blogs/blog21/rodin.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/web-based-development-platform-rodin-wants-to-make-vrar-creation-easy-for-all/\">here</a></figcaption></figure>" +
        "<h4>SightSpace</h4>\n" +
        "<p>SightSpace 3D viewer software now supports ARKit. Limitless Computing improve its cloud-based augmented reality 3D viewer with ARKit technology.</p>\n" +
        "<figure><img alt=\"sightspace.jpg\" src=\"/data/blogs/blog21/sightspace.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/sightspace-3d-viewer-software-now-supports-arkit/\">here</a></figcaption></figure>" +
        "<h3>Updates</h3>\n" +
        "<h4>CryEngine</h4>\n" +
        "<p>The big news for CryEngine 5.4 is the beta release for Vulkan API support.</p>\n" +
        "<figure><img alt=\"cryengine.jpg\" src=\"/data/blogs/blog21/cryengine.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/update-to-cryengine-integrates-vulkan-api-support/\">here</a></figcaption></figure>" +
        "<h4>Sketchfab</h4>\n" +
        "<p>Sketchfab&rsquo;s Giant Asset Library comes to Augmented Reality with ARKit support - \"The largest AR library on the planet\".</p>\n" +
        "<figure><img alt=\"sketchfab.jpg\" src=\"/data/blogs/blog21/sketchfab.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/sketchfabs-giant-asset-library-comes-to-augmented-reality-with-arkit-support/\">here</a></figcaption></figure>" +
        "<h3>Software</h3>\n" +
        "<h4>Viveport</h4>\n" +
        "<p>Viveport unveils new public beta of Viveport arcade manager software.</p>\n" +
        "<figure><img alt=\"viveport.jpg\" src=\"/data/blogs/blog21/viveport.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/viveport-unveils-new-public-beta-of-viveport-arcade-manager-software/\">here</a></figcaption></figure>" +
        "<h4>VUSR</h4>\n" +
        "<p>VUSR introduces support for AR and room-scale VR.</p>\n" +
        "<figure><img alt=\"vusr.jpg\" src=\"/data/blogs/blog21/vusr.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/vusr-introduces-support-for-ar-and-room-scale-vr/\">here</a></figcaption></figure>" +
        "<h2>Hardware</h2>\n" +
        "<h3>Inuitive</h3>\n" +
        "<p>New NU4000 multi-core image processor has Deep Learning for VR/AR depth sensing.<br /></p>\n" +
        "<figure><img alt=\"inuitive.jpg\" src=\"/data/blogs/blog21/inuitive.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/inuitive-announces-new-vision-processor-for-vrar/\">here</a></figcaption></figure>" +
        "<h3>Intel</h3>\n" +
        "<p>Intel have cancelled work on the Project Alloy standalone VR headset.</p>\n" +
        "<figure><img alt=\"intel.jpg\" src=\"/data/blogs/blog21/intel.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/intel-cancels-all-in-one-vr-headset/\">here</a></figcaption></figure>" +
        "<h3>PlayStation</h3><p>One year after launch the PlayStation VR is receiving an updated model.</p>\n" +
        "<figure><img alt=\"playstation.jpg\" src=\"/data/blogs/blog21/playstation.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/10/new-playstation-vr-headset-design-revealed/\">here</a></figcaption></figure>" +
        "<h3>Windows</h3>\n" +
        "<p>Windows Mixed Reality: Hands-On With The Lenovo Explorer.</p>\n" +
        "<figure><img alt=\"windows.jpg\" src=\"/data/blogs/blog21/windows.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/windows-mixed-reality-hands-on-with-the-lenovo-explorer/\">here</a></figcaption></figure>" +
        "<h3>Pimax</h3>\n" +
        "<p>Pimax stretch goals include prescription VR visor.</p>\n" +
        "<figure><img alt=\"pimax.jpg\" src=\"/data/blogs/blog21/pimax.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/pimax-stretch-goals-include-prescription-vr-visor/\">here</a></figcaption></figure>" +
        "<h3>Oculus</h3>\n" +
        "<p>Oculus Latest Platform Improvements Include Easier Refund Requests For Rift And Gear VR.</p>\n" +
        "<figure><img alt=\"oculus_1.jpg\" src=\"/data/blogs/blog21/oculus_1.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/oculus-latest-platform-improvements-include-easier-refund-requests-for-rift-and-gear-vr/\">here</a></figcaption></figure>" +
        "<h3>Alcatel</h3>\n" +
        "<p>Alcatel Set to enter the VR market with the UNI360.</p>\n" +
        "<figure><img alt=\"alcatel.jpg\" src=\"/data/blogs/blog21/alcatel.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/alcatel-set-to-enter-the-vr-market-with-the-uni360/\">here</a></figcaption></figure>" +
        "<h3>ANMLY</h3>\n" +
        "<p>ANMLY model A VR headset will be out in time.</p>\n" +
        "<figure><img alt=\"anmly.jpg\" src=\"/data/blogs/blog21/anmly.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/anmly-model-a-vr-headset-will-be-out-in-time-for-holidays/\">here</a></figcaption></figure>" +
        "<h2>News</h2>\n" +
        "<h3>VR Awards 2017</h3>\n" +
        "<h4>Best use of VR in Education and Training</h4><p>ITI Crane Simulator by Industrial Training International.</p>\n" +
        "<p><img alt=\"winner-iti.jpg\" src=\"/data/blogs/blog21/winner-iti.jpg\" title=\"\"/></p>" +
        "<h4>VR Startup of the Year</h4>\n" +
        "<p>LiveLike</p>\n" +
        "<p><img alt=\"winner-livelike.jpg\" src=\"/data/blogs/blog21/winner-livelike.jpg\" title=\"\"/></p>" +
        "<h4>Best use of VR in Healthcare</h4><p>ImmersiCare by Tribemix</p>\n" +
        "<p><img alt=\"winner-immersicare.jpg\" src=\"/data/blogs/blog21/winner-immersicare.jpg\" title=\"\"/></p>" +
        "<h4>Best out of home VR Entertainment</h4><p>Ghostbusters: Dimension by The VOID<br /></p>\n" +
        "<p><img alt=\"winner-void.jpg\" src=\"/data/blogs/blog21/winner-void.jpg\" title=\"\"/></p>" +
        "<h4>Interactive VR Media/Film of the Year</h4><p>Allumette by Penrose Studios</p>\n" +
        "<p><img alt=\"winner-allumette-1.jpg\" src=\"/data/blogs/blog21/winner-allumette-1.jpg\" title=\"\"/></p>" +
        "<h4>Innovative VR Company of the Year</h4>\n" +
        "<p>G&rsquo;Audio Lab</p>\n" +
        "<p><img alt=\"winner-gaudio-1.jpg\" src=\"/data/blogs/blog21/winner-gaudio-1.jpg\" title=\"\"/></p>" +
        "<h4>VR Hardware of the Year</h4>\n" +
        "<p>Touch by Oculus</p>\n" +
        "<p><img alt=\"winner-touch.jpg\" src=\"/data/blogs/blog21/winner-touch.jpg\" title=\"\"/></p>" +
        "<h4>Most Creative use of Marketing in VR</h4>\n" +
        "<p>IKEA VR by IKEA</p>\n" +
        "<p><img alt=\"winner-ikeavr-1.jpg\" src=\"/data/blogs/blog21/winner-ikeavr-1.jpg\" title=\"\"/></p>" +
        "<h4>Mobile VR Headset of the Year</h4><p>Daydream View by Google</p>\n" +
        "<p><img alt=\"winner-daydream-1.jpg\" src=\"/data/blogs/blog21/winner-daydream-1.jpg\" title=\"\"/></p>" +
        "<h4>VR Experience of the Year</h4>\n" +
        "<p>Tilt Brush by Google</p>\n" +
        "<p><img alt=\"winner-tiltbrush.jpg\" src=\"/data/blogs/blog21/winner-tiltbrush.jpg\" title=\"\"/></p>" +
        "<h4>VR Headset of the Year</h4>\n" +
        "<p>Rift by Oculus</p>\n" +
        "<p><img alt=\"winner-rift.jpg\" src=\"/data/blogs/blog21/winner-rift.jpg\" title=\"\"/></p>" +
        "<h4>VR Game of the Year</h4>\n" +
        "<p>Raw Data by Survios</p>\n" +
        "<figure><img alt=\"winner-rawdata.jpg\" src=\"/data/blogs/blog21/winner-rawdata.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://awards.vrbound.com/winners-2017/\">here</a></figcaption></figure>" +
        "<h3>Chernobyl VR</h3>\n" +
        "<p>Chernobyl VR Project Comes To PlayStation VR, Updates For PC Version<br />" +
        "<figure><iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/sxdvQ1XwDHQ\" frameborder=\"0\" allowfullscreen></iframe><figcaption>Read more <a target=\"_blank\" href=\"https://www.vrfocus.com/2017/09/chernobyl-vr-project-comes-to-playstation-vr-updates-for-pc-version/\">here</a></figcaption></figure>" +
        "</p>\n" +
        "<h3>October 2017 VR Game Release Date</h3>\n" +
        "<ul>\n" +
        "<li>Knife Club VR &ndash; Oculus Rift/HTC Vive (Oct. 2)*Early Access</li>\n" +
        "<li>Sneaky Bears &ndash; Oculus Rift/HTC Vive (Oct. 4)</li>\n" +
        "<li>VR Drivers &ndash; Oculus Rift (Oct. 5)</li>\n" +
        "<li>Marshmallow Melee &ndash; HTC Vive (Oct. 7)</li>\n" +
        "<li>TRIPLE TWENTY &ndash; VR Darts &ndash; Oculus Rift/HTC Vive (Oct. 9)</li>\n" +
        "<li>Arktika.1 &ndash; Oculus Rift/Touch Exclusive (Oct. 10)</li>\n" +
        "<li>n-body &ndash; HTC Vive (Oct. 11)</li>\n" +
        "<li>SweeperVR &ndash; HTC Vive (Oct. 12)</li>\n" +
        "<li>REGENESIS Arcade &ndash; Oculus Rift/HTC Vive (Oct. 13)</li>\n" +
        "<li>Toy Goblins &ndash; HTC Vive (Oct. 13)</li>\n" +
        "<li>Taphouse VR &ndash; HTC Vive (Oct. 18)</li>\n" +
        "<li>Virtual Space &ndash; Oculus Rift/HTC Vive (Oct. 17)*Early Access</li>\n" +
        "<li>Megaton Rainfall &ndash; PSVR (Oct. 17)</li>\n" +
        "<li>The Gallery &ndash; Episode 2: Heart of the Emberstone &ndash; Oculus Rift/HTC Vive (Oct. 18)</li>\n" +
        "<li>Alpha Mike Foxtrot &ndash; HTC Vive (Oct. 20)</li>\n" +
        "<li>Pathstow Mystery VR &ndash; HTC Vive (Oct. 20)</li>\n" +
        "<li>Ancient Code VR( The Fantasy Egypt Journey) &ndash; HTC Vive (Oct. 26)</li>\n" +
        "<li>Guns&rsquo;n&rsquo;Stories: Preface VR &ndash; Oculus Rift/HTC Vive (October 2017)</li>\n" +
        "<li>Organ Quarter &ndash; Oculus Rift/HTC Vive (October 2017)</li>\n" +
        "<li>Star Shelter &ndash; Oculus Rift/HTC Vive (October 2017)*Early Access</li>\n" +
        "<li>TankVR &ndash; HTC Vive (October 2017)*Early Access</li>\n" +
        "</ul>\n" +
        "<p class=\"font-weight-bold\">Don&rsquo;t miss the latest VR news next month in our VR digest!</p>\n" +
        "<iframe src=\"//www.slideshare.net/slideshow/embed_code/key/B59TcYeLJDJtlm\" width=\"100%\" height=\"485\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" style=\"border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;\" allowfullscreen> </iframe> ",
      backgroundImage: '/data/blogs/blog21/VR_digest_cover.jpg',
      mainImage: '/data/blogs/blog21/VR_digest_cover.jpg',
      backgroundImagePosition: 'center',
      authors: [],
      seo: {
        title: 'ELIFTECH | Your Trusted IT Partner | Blog | VR digest. October 2017',
        description: 'Stay up to date on VR: technologies, hardware, games announces, news, VR Awards 2017 results',
        keywords: 'vr, ar, mr, virtual reality, augmented reality, mixed reality, web development software, software outsourcing, software development, custom software development company, software development outsourcing, unity, oculus, Stardust, 3d, CRYENGINE, arkit, google, apple, arcore, hololens, SightSpace, 3D viewer, rodin, VR/AR, Sketchfab, api, Viveport, vusr, Inuitive, playstation, intel, pimax, anmly, alcatel, vr awards, vr game, vr games'
      }
    },
    {
      id: 22,
      url: '22-js-digest-november-2017',
      "title": "JavaScript digest.  November 2017",
      "pubDate": "Thu, 16 Nov 2017 03:00:00 +0000",
      category: "news",
      rate: '5.0',
      tags: "javascript, js, Angular5, Nodejs",
      description: "Last month JavaScript news: releases, updates, agreements and many more about JS technologies. Enjoy our November 2017 JS digest!",
      text: "<p>Last month JavaScript news: releases, updates, agreements and many more about JS technologies.</p>\n" +
        "<h2><strong>Vue.js 2.5</strong></h2>\n" +
        "<ul>\n" +
        "<li><strong><strong>Official Roadmap</strong></strong></li>\n" +
        "</ul>\n" +
        "<ul>\n" +
        "<ul>\n" +
        "<li>There is now an official Vue.js roadmap (details <a href=\"https://github.com/vuejs/roadmap\">here</a> )</li>\n" +
        "</ul>\n" +
        "</ul>\n" +
        "<ul>\n" +
        "<li><strong><strong>Improved TypeScript support</strong></strong></li>\n" +
        "</ul>\n" +
        "<ul>\n" +
        "<ul>\n" +
        "<li>Now, as a result, in Vue 2.5 you can get builtin autocomplete suggestions and type hints even if you&rsquo;re not using TypeScript. This works with any editor that supports the language-server-protocol.</li>\n" +
        "</ul>\n" +
        "</ul>\n" +
        "<ul>\n" +
        "<li><strong><strong>Functional Single-File-Components</strong></strong></li>\n" +
        "</ul>\n" +
        "<ul>\n" +
        "<ul>\n" +
        "<li>Templates now support the functional attribute, which means it is now possible to write functional components without using render functions or JSX directly.</li>\n" +
        "</ul>\n" +
        "</ul>\n" +
        "<pre><code>//Normal Component\n" +
        "&lttemplate&gt\n" +
        "   &ltp&gt{{myProp}}&lt/p&gt\n" +
        "&lt/template&gt" +
        "</code></pre>" +

        "<pre><code>//Functional Component\n" +
        "&lttemplate functional&gt" +
        "\n   &ltp&gt{{props.myProp}}&lt/p&gt\n" +
        "&lt/template&gt" +
        "</code></pre>" +
        "<ul>\n" +
        "<li>Injected properties can now declare default values in the same way as props can.</li>\n" +
        "<li>Over 15 bugs were fixed.</li>\n" +
        "</ul>\n" +
        "<p>And many more <a href=\"https://alligator.io/vuejs/upgrading-vue-2.5/\">here.</a></p>\n" +
        "<h2><strong>Node v8.7.0, v8.8.0, v8.9.0 &amp;&amp; Node v9.0.0 (Current)</strong></h2>\n" +
        "<ul>\n" +
        "<li>Node.js 8.x is now in LTS!</li>\n" +
        "<ul>\n" +
        "<li>Node v8.9.0 marks the transition of Node v8.x into Long Term Support (LTS), with the codename \"Carbon\". The v8.x line now moves into \"Active LTS\", and will remain so until April 2019.</li>\n" +
        "</ul>\n" +
        "<li>For Node.js 9, most changes centered on the migrating the code base to a new error system. The goal of the migration is associating a unique code with errors thrown by the system.</li>\n" +
        "<ul>\n" +
        "<li>An async hooks module that provides an API for registering callbacks to track asynchronous resources within an application.</li>\n" +
        "<li>The Google V8 6.2 JavaScript engine.</li>\n" +
        "<li>Support for HTTP/2, which are available for use without a command line flag<br /> but are still experimental.</li>\n" +
        "</ul>\n" +
        "</ul>\n" +
        "<p><br />Find more details <a href=\"https://nodejs.org/en/blog/release/v8.9.0/\">here</a> and <a href=\"https://nodejs.org/en/blog/release/v.9.0.0/\">here</a>.</p>\n" +
        "<h2><strong>The Firefox Quantum released</strong></h2>\n" +
        "<ul>\n" +
        "<li>Firefox Quantum is over twice as fast as Firefox from 6 months ago;</li>\n" +
        "<li>New User Interface - Photon UI;</li>\n" +
        "<li>Google became new default search provider in the United States and Canada;</li>\n" +
        "<li>WebRender:</li>\n" +
        "<figure><img alt=\"Firefox-Quantum.jpg\" src=\"/data/blogs/blog22/Firefox-Quantum.jpg\" title=\"\"><figcaption>Find more details <a href=\"https://blog.mozilla.org/blog/2017/11/14/introducing-firefox-quantum/\">here</a>, <a href=\"https://hacks.mozilla.org/2017/11/entering-the-quantum-era-how-firefox-got-fast-again-and-where-its-going-to-get-faster/\">here</a> and <a href=\"https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/\">here</a>.</figcaption></figure>" +
        "</ul>\n" +
        "<h3><strong>The Firefox Quantum. WebRender</strong></h3>\n" +
        "<p>With WebRender apps run at a silky smooth 60 frames per second (FPS) or better no matter how big the display is or how much of the page is changing from frame to frame.</p>\n" +
        "<figure><img alt=\"Firefox-Quantum_WebRender.jpg\" src=\"/data/blogs/blog22/Firefox-Quantum_WebRender.jpg\" title=\"\"><figcaption>Read more on how WebRender works <a href=\"https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/\">here</a>.</figcaption></figure>" +
        "<h2><strong>Bringing WebVR to everyone with the Windows 10 Fall Creators Update</strong></h2>\n" +
        "<p>On October 17th, EdgeHTML 16 was released with Windows 10 Fall Creators Update, and the era of Windows Mixed Reality begins.<br />Adding support to the browser is only half of the story. Microsoft have been working with 3rd party middleware libraries to make sure that integrating support for motion controllers into your experience is as seamless a process as possible.</p>\n" +
        "<iframe src='https://gfycat.com/ifr/gianttediousafricanfisheagle' frameborder='0' scrolling='no' width='100%' height='360' allowfullscreen></iframe>\n" +
        "<p>More <a href=\"https://blogs.windows.com/msedgedev/2017/10/17/edgehtml-16-fall-creators-update/\">here</a>.<br /><br /></p>\n" +
        "<h2><strong>Angular 5 Comes with Faster Incremental Compilation</strong></h2>\n" +
        "<p><strong>Build Optimization</strong>. CLI 1.5 will generate v5 projects with build optimization turned on by default, generating smaller bundles</p>\n" +
        "<p><strong>Compiler</strong>. The Angular compiler supports incremental builds, managing to reduce the build time by 90% in tests on real projects by using Typescript transforms.</p>\n" +
        "<p><strong>Domino</strong>. Angular now supports Domino, a server-side DOM implementation, adding support for more component JavaScript libraries to the server side.</p>\n" +
        "<p><strong>Internationalization</strong>. Angular 5 has new pipes for date, number and currency for better internationalization support across browsers.</p>\n" +
        "<p>The latest Angular introduces some breaking changes, but nothing problematic. One of them is the dependence on TypeScript 2.4.x. Also, some code sections have been deprecated.</p>\n" +
        "<p>Read more <a href=\"https://www.infoq.com/news/2017/11/angular-5?utm_campaign=infoq_content&amp;utm_source=infoq&amp;utm_medium=feed&amp;utm_term=global\">here</a> and <a href=\"https://alligator.io/angular/angular-5/\">here</a>.</p>\n" +
        "<h2><strong>Chrome 63 Beta</strong></h2>\n" +
        "<p>Dynamic module imports</p>\n" +
        "<pre><code>" +
        "import('./dialogBox.js')\n" +
        "   .then(dialogBox => {\n" +
        "     dialogBox.open();\n" +
        "   })\n" +
        "   .catch(error => {\n" +
        "     /* Error handling */\n" +
        "   });" +
        "</code></pre>" +
        "<p>Async iterators and generators</p>\n" +
        "<pre><code>" +
        "for await (const chunk of\n" +
        "   streamAsyncIterator(response.body)) {\n" +
        "     streamAsyncIterator(response.body)) {\n" +
        "         // some code...\n" +
        "   }" +
        "</code></pre>" +
        "<p>Permissions UI changes</p>\n" +
        "<ul>\n" +
        "<ul>\n" +
        "<li>From ignorable banners at the bottom of the screen to modal dialogs.</li>\n" +
        "</ul>\n" +
        "</ul>\n" +
        "<p>Device Memory API</p>\n" +
        "<ul>\n" +
        "<ul>\n" +
        "<li>The new Device Memory JavaScript API helps developers with this challenge by using the total RAM on a user&rsquo;s machine to provide insights into device constraints.</li>\n" +
        "</ul>\n" +
        "</ul>\n" +
        "<p>Read more <a href=\"https://blog.chromium.org/2017/10/chrome-63-beta-dynamic-module-imports_27.html\">here</a>.</p>\n" +
        "<h2><strong>Snyk is Now Integrated with Chrome's Lighthouse</strong></h2>\n" +
        "<p>Lighthouse is an open-source automated tool from Google Chrome that tests websites against a suite of best-practices and metrics, providing a detailed report so developers can see exactly how they stack up, and how to improve.</p>\n" +
        "<p>Snyk is now powering the brand-new vulnerable JavaScript audit in Google Chrome&rsquo;s Lighthouse, the auditing tool built by the Google Chrome team that checks for how performance, accessible and secure your site is.</p>\n" +
        "<figure><img alt=\"Snyk.jpg\" src=\"/data/blogs/blog22/Snyk.jpg\" title=\"\"><figcaption>Read more <a href=\"https://snyk.io/blog/snyk-and-lighthouse/\">here</a>.</figcaption></figure>" +
        "<h2><strong>WebStorm 2017.3</strong></h2>\n" +
        "<ul>\n" +
        "<li>Improvements in webpack support - webStorm now understands webpack configuration files that are composed of several parts or have multiple targets.</li>\n" +
        "<li>Suggestion to install TypeScript type declarations.</li>\n" +
        "<li>Optimizing project indexing.</li>\n" +
        "<li>Updated Live Edit configuration.</li>\n" +
        "<li>Improved Angular support.</li>\n" +
        "</ul>\n" +
        "<p>Read more <a href=\"https://blog.jetbrains.com/webstorm/2017/11/webstorm-2017-3-eap-173-3531/\">here</a> and <a href=\"https://blog.jetbrains.com/webstorm/2017/10/webstorm-2017-3-eap-173-3415/\">here</a>.</p>\n" +
        "<h2><strong>V8 Release 6.3</strong></h2>\n" +
        "<p>Every six weeks, a new branch of V8 is created as part of release process. Newest branch was announced, V8 version 6.3, which is in beta until its release in coordination with Chrome 63 Stable in several weeks.</p>\n" +
        "<p>Speed:</p>\n" +
        "<ul>\n" +
        "<ul>\n" +
        "<li>The parser now does not need to preparse a function a second time.</li>\n" +
        "<li>string.js has been completely ported to CodeStubAssembler. As a developer this means that builtin string functions like String#trim are a lot faster starting with 6.3.</li>\n" +
        "</ul>\n" +
        "</ul>\n" +
        "<p>ECMAScript language features. V8 shipped the following stage 3 features: Dynamic module import via import(), Promise.prototype.finally and async iterators/generators.</p>\n" +
        "<p>Read more <a href=\"https://v8project.blogspot.com/2017/10/v8-release-63.html\">here</a>.</p>\n" +
        "<h2><strong>Microsoft, Google, and Mozilla Team Up for Web Documentation</strong></h2>\n" +
        "<ul>\n" +
        "<li>In a coordinated announcement, three major browser vendors have agreed to consolidate their individual web API reference documentation into Mozilla's MDN and have formed an advisory group to guide future efforts.</li>\n" +
        "<li>In a blog post from Microsoft, senior dev writer Erika Doyle Navara wrote that they have \"started redirecting over 7,700 MSDN pages to corresponding topics in the MDN web docs library\" and have made 5,000 edits on MDN to update the compatibility tables for Edge.</li>\n" +
        "<li>MDN is a wiki, and developers can login with a GitHub account to make changes. Mozilla says that this year \"8,021 users made 76,203 edits\".</li>\n" +
        "</ul>\n" +
        "<p>Read more <a href=\"https://www.infoq.com/news/2017/10/microsoft-google-mozilla-mdn?utm_campaign=infoq_content&amp;utm_source=infoq&amp;utm_medium=feed&amp;utm_term=global\">here</a>.</p>\n" +
        "<h2><strong>Microsoft adds multithreading to Node.js for compute-heavy apps</strong></h2>\n" +
        "<p>Microsoft&rsquo;s beta Napa.js runtime is offering multithreaded support for the Node.js server-side JavaScript platform, to provide the flexibility of JavaScript with speedy performance akin to C++&rsquo;s.</p>\n" +
        "<p>Napa.js is a multi-threaded JavaScript runtime built on V8, which was originally designed to develop highly iterative services with non-compromised performance in Bing.</p>\n" +
        "<p>Napa.js also has:</p>\n" +
        "<ul>\n" +
        "<li>A Node.js-compatible module architecture with support for NPM.</li>\n" +
        "<li>An API for object-sharing, and asynchronous processing capabilities on JavaScript threads.</li>\n" +
        "</ul>\n" +
        "<p>Read more <a href=\"https://www.infoworld.com/article/3234744/node-js/microsoft-adds-multithreading-to-nodejs-for-compute-heavy-apps.html#tk.rss_javascript\">here</a>.</p>\n" +
        "<h2><strong>NPM Releases New Security Features</strong></h2>\n" +
        "<ul>\n" +
        "<li>Two-factor authentication (2FA);</li>\n" +
        "<li>Now, you can sync your npm account with an authentication application like Google Authenticator. When you log in, you&rsquo;ll be prompted for a single-use numeric code generated by the app;</li>\n" +
        "<li>2FA is another layer of defense for your account, preventing third parties from altering your code even if they steal or guess your credentials;</li>\n" +
        "<li>Read-only tokens;</li>\n" +
        "<li>If your continuous integration / continuous deployment (CI/CD) workflow includes linking your npm account to tools like Travis CI with authentication tokens, you can now create read-only tokens for tools that don&rsquo;t need to publish. You can also restrict tokens to work from only specified ranges of IP addresses;</li>\n" +
        "<li>Even if your token is compromised &mdash; for example, if you accidentally commit it to GitHub &mdash; no one else can alter your code, and only authorized CI servers will be able to download your code.</li>\n" +
        "<figure><img alt=\"NPM_qr_code_and_prompt_masked.jpg\" src=\"/data/blogs/blog22/NPM_qr_code_and_prompt_masked.jpg\" title=\"\"><figcaption>Read more <a href=\"https://www.infoq.com/news/2017/10/npm-security-features?utm_campaign=infoq_content&amp;utm_source=infoq&amp;utm_medium=feed&amp;utm_term=global\">here.</a></figcaption></figure>" +
        "</ul>\n" +
        "<h2><strong>The 6-Step \"Happy Path\" to HTTPS</strong></h2>\n" +
        "<ol>\n" +
        "<li>Get a Free Cert</li>\n" +
        "<li>Add a 301 \"Permanent Redirect\"</li>\n" +
        "<li>Add HSTS</li>\n" +
        "<li>Change Insecure Scheme References</li>\n" +
        "<li>Add The upgrade-insecure-requests CSP</li>\n" +
        "<li>Monitor CSP Reports</li>\n" +
        "</ol>\n" +
        "<figure><img alt=\"Happy-Path-to-HTTPS.jpg\" src=\"/data/blogs/blog22/Happy-Path-to-HTTPS.jpg\" title=\"\"><figcaption>Read more <a href=\"https://upgrade.badssl.com/\">here</a> and <a href=\"https://www.troyhunt.com/the-6-step-happy-path-to-https/\">here</a>.</figcaption></figure>" +
        "<h2><strong>7 Free Tools For Testing Responsive Layouts</strong></h2>\n" +
        "<ol>\n" +
        "<li>Xrespond</li>\n" +
        "<li>Responsinator</li>\n" +
        "<li>Responsive design checker</li>\n" +
        "<li>Google mobile test</li>\n" +
        "<li>Matt kersley&rsquo;s responsive tool</li>\n" +
        "<li>Am I responsive?</li>\n" +
        "<li>Designmodo responsive test</li>\n" +
        "</ol>\n" +
        "<figure><img alt=\"Tools-For-Testing-Responsive-Layouts.jpg\" src=\"/data/blogs/blog22/Tools-For-Testing-Responsive-Layouts.jpg\" title=\"\"><figcaption>Read more <a href=\"https://www.webdesignerdepot.com/2017/10/7-free-tools-for-testing-responsive-layouts/\">here</a>.</figcaption></figure>" +
        "<h2><strong>5 Node.js Alternatives To WordPress</strong></h2>\n" +
        "<ul>\n" +
        "<li><strong>KeystoneJS</strong> is a powerful CMS framework, build on Express and MongoDB. It gives you an easy way to create dynamic projects with well-structured routes, templates and models.</li>\n" +
        "<li><strong>EnduroJS</strong> offers a fast and easy way to build your project, beautiful and simple admin UI and integrated tools to build everything on the server. It works without a database, instead relying on a system of flat files that can be opened directly in a text editor. It is easy to install and can be deployed via Git.</li>\n" +
        "<li><strong>Apostrophe</strong> offers powerful front and back-end search features, rich text editor, fast performance, and drag-and-drop editting right on the page. It is very user-friendly with detailed documentation and an active community.</li>\n" +
        "<li><strong>Ghost</strong> is a modern and powerful blogging platform that you can already see on some popular websites. It is easy to set up and has simple and optimized design, focused on providing the best possible writing experience.</li>\n" +
        "<li><strong>Hexo</strong> is a simple and powerful blogging framework where each post is written in markdown format and rendered into a static page with proper layout and styles.</li>\n" +
        "</ul>\n" +
        "<p>Find out more <a href=\"https://tutorialzine.com/2017/10/5-node-js-alternatives-to-wordpress\">here</a>.</p>\n" +
        "<h2><strong>The Most Popular Programming Languages of 2017</strong></h2>\n" +
        "<figure><img alt=\"The-Most-Popular-Programming-Languages-of-2017.jpg\" src=\"/data/blogs/blog22/The-Most-Popular-Programming-Languages-of-2017.jpg\" title=\"\"><figcaption>Read more <a href=\"https://blog.newrelic.com/2017/10/09/popular-programming-languages-2017/\">here.</a></figcaption></figure>" +
        "<p>That’s it for now. Stay tuned for next edition of JS digest!</p>\n" +
        "<iframe src=\"//www.slideshare.net/slideshow/embed_code/key/qJd5u0hCc5DK3\" width=\"595\" height=\"485\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" style=\"border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;\" allowfullscreen> </iframe> <div style=\"margin-bottom:5px\"> <strong> <a href=\"//www.slideshare.net/ElifTech/js-digest-november-2017-82170169\" title=\"JS digest. November 2017\" target=\"_blank\">JS digest. November 2017</a> </strong> </div>\n",
      backgroundImage: '/data/blogs/blog22/js_digest_cover_november.jpg',
      mainImage: '/data/blogs/blog22/js_digest_cover_november.jpg',
      backgroundImagePosition: 'center',
      authors: [],
      seo: {
        title: 'ELIFTECH | Your Trusted IT Partner | Blog | JavaScript digest. November 2017',
        description: 'Last month JavaScript news: releases, updates, agreements and many more about JS technologies. Enjoy our November 2017 JS digest!',
        keywords: 'javascript, js, web development software, software outsourcing, software development, custom software development company, software development outsourcing, angular 5, node js, nodejs, angular, angular5, Vue.js, chrome 63, firefox quantum, google, https, microsoft, mozilla, npm, programming languages, snyk, v8, vuejs, webrender, webstorm 2017.3, webvr, wordpress, firefox, webstorm '
      }
    },
    {
      id: 23,
      url: '23-vr-digest-november-2017',
      "title": "VR digest.  November 2017",
      "pubDate": "Tue, 28 Nov 2017 03:00:00 +0000",
      category: "news",
      rate: '5.0',
      tags: "VR, AR, VirtualReality, AugmentedReality",
      description: 'Get the latest info on Virtual Reality and Augmented Reality industry updates, news, releases, features, technologies, hardware, etc.',
      text: "<p>Get the latest info on Virtual Reality and Augmented Reality industry updates, news, releases, features, technologies, hardware, etc.:</p>" +
        "<h2>Technologies</h2>" +

        "<h3>Unreal Engine 4.18 released!</h3>" +
        "<p>Major Features:</p>\n" +
        "<ul>\n" +
        "<li>Volumetric lightmaps;</li>\n" +
        "<li>Precomputed lighting on volumetric fog;</li>\n" +
        "<li>Improved static skylight directionality;</li>\n" +
        "<li>Multi-bounce Indirect lighting from skylights;</li>\n" +
        "<li>Apple ARKit iOS 11 support;</li>\n" +
        "<li>Google ARCore developer preview support;</li>\n" +
        "<li>Media framework improvements;</li>\n" +
        "<li>Sequencer improvements;</li>\n" +
        "<li>Improved physics asset editor;</li>\n" +
        "<li>Multi-Convex generation for physics asset bodies;</li>\n" +
        "<li>Animation montage time stretch curve;</li>\n" +
        "<li>RigidBody anim node improvements;</li>\n" +
        "<li>Blendspace editor usability improvements;</li>" +
        "</ul>" +
        "<figure><img alt=\"unreal.jpg\" src=\"/data/blogs/blog23/unreal.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.unrealengine.com/en-US/blog/unreal-engine-4-18-released\">here</a></figcaption></figure>" +

        "<h3>Sketchfab</h3>" +
        "<p>The Sketchfab Model Inspector — is now live! The inspector now lets you break down EVERY material into its component parts. You can also use the inspector to view normal direction and display a UV checker map.</p>" +
        "<figure><iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/92IMkWChwPA\" frameborder=\"0\" allowfullscreen></iframe><figcaption>Read more <a target=\"_blank\" href=\"https://80.lv/articles/the-sketchfab-model-inspector-revealed\">here</a></figcaption></figure>" +

        "<h3>Oculus Connect 4 Roundup</h3>" +
        "<p>Key Announcements:</p>\n" +
        "<ul>\n" +
        "<li>New Hardware: Oculus Go and Oculus Santa Cruz</li>\n" +
        "<li>New Software: Multiview</li>\n" +
        "<li>New Features: Rift Core 2.0</li>\n" +
        "</ul>" +
        "<figure><img alt=\"oculus.jpg\" src=\"/data/blogs/blog23/oculus.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://blogs.unity3d.com/ru/2017/10/25/oculus-connect-4-roundup/\">here</a></figcaption></figure>" +


        "<h3>News</h3>" +

        "<h4>YoYo Games</h4>" +
        "<p>YoYo Games has partnered with Microsoft to give its GameMaker Studio 2. </p>" +
        "<figure><img alt=\"yoyo.jpg\" src=\"/data/blogs/blog23/yoyo.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.gamasutra.com/view/news/308397/GameMaker_Studio_2_gets_Universal_Windows_Platform_support.php\">here</a></figcaption></figure>" +

        "<h4>Nukeygara</h4>" +
        "<p>Nukeygara released the final version of Akeytsu.</p>" +
        "<figure><iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/64Pfpp8FGL4\" frameborder=\"0\" allowfullscreen></iframe><figcaption>Read more <a target=\"_blank\" href=\"https://80.lv/articles/akeytsu-1-0-is-out/\">here</a></figcaption></figure>" +

        "<h4>Microsoft</h4>" +
        "<p>Microsoft joins OpenXR, becoming a decisive backer in the open, royalty-free VR/AR standard.</p>" +
        "<figure><img alt=\"microsoft.jpg\" src=\"/data/blogs/blog23/microsoft.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.roadtovr.com/microsoft-joins-openxr-becoming-decisive-backer-open-royalty-free-vrar-standard/\">here</a></figcaption></figure>" +

        "<h4>Unity</h4>" +
        "<p>Updates:</p>\n" +
        "<ul>\n" +
        "<li>The beta-test Unity 2017.3 was started;</li>\n" +
        "<li>Unity ARKit plugin available;</li>\n" +
        "<li>Unity ARCore plugin released.</li>\n" +
        "</ul>" +
        "<figure><img alt=\"unity2017_3beta.jpg\" src=\"/data/blogs/blog23/unity2017_3beta.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://blogs.unity3d.com/ru/2017/11/01/experimenting-with-multiplayer-arcore-and-arkit-jump-in-with-sample-code/\">here</a></figcaption></figure>" +

        "<h4>Google</h4>" +
        "<p>Poly is Google’s new platform for sharing 3D objects for use in AR and VR apps.</p>" +
        "<figure><img alt=\"google_poly.jpg\" src=\"/data/blogs/blog23/google_poly.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://poly.google.com/\">here</a></figcaption></figure>" +

        "<h4>3DFlow</h4>" +
        "<p>3DF Zephyr 3.500 is ready for download!</p>" +
        "<figure><img alt=\"zephyr.jpg\" src=\"/data/blogs/blog23/zephyr.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.3dflow.net/3df-zephyr-3-500-out-now/\">here</a></figcaption></figure>" +

        "<h4>RizomLab</h4>" +
        "<p>UNFOLD3D V10 is now available!</p>" +
        "<figure><img alt=\"rizomlab.jpg\" src=\"/data/blogs/blog23/rizomlab.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.unfold3d.com/news/unfold3d-v10-now-available/\">here</a></figcaption></figure>" +


        "<h2>Hardware</h2>" +

        "<h3>Windows</h3>" +
        "<p>Windows VR headsets can now play VR games on steam.</p>" +
        "<figure><img alt=\"hardware-windows.jpg\" src=\"/data/blogs/blog23/hardware-windows.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.roadtovr.com/windows-vr-mixed-reality-steam-support-steamvr-preview/\">here</a></figcaption></figure>" +

        "<h3>HTC Vive</h3>" +
        "<p>HTC lists Sports Racket accessory for Vive Tracker, suggesting tracker launch is near.</p>" +
        "<figure><img alt=\"vive.jpg\" src=\"/data/blogs/blog23/vive.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.roadtovr.com/htc-lists-racket-accessory-tracker-suggesting-trackers-imminent-commercial-launch/\">here</a></figcaption></figure>" +

        "<h3>LG</h3>" +
        "<p>LG patent shows unique split design for VR headset.</p>" +
        "<figure><img alt=\"lg_vr_split_headset.jpg\" src=\"/data/blogs/blog23/lg_vr_split_headset.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.roadtovr.com/lg-patent-shows-unique-split-design-vr-headset/\">here</a></figcaption></figure>" +

        "<h3>VR Coaster and Sensics</h3>" +
        "<p>VR Coaster and Sensics unveiled RideVR, a new all-in-one VR headset.</p>" +
        "<figure><img alt=\"vrcoaster.jpg\" src=\"/data/blogs/blog23/vrcoaster.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.roadtovr.com/windows-vr-mixed-reality-steam-support-steamvr-preview/\">here</a></figcaption></figure>" +

        "<h3>Bigscreen</h3>" +
        "<p>‘Bigscreen’ lets you stream console games in VR – Nintendo Switch, Xbox One & PS4.</p>" +
        "<figure><img alt=\"bigscreen.jpg\" src=\"/data/blogs/blog23/bigscreen.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.roadtovr.com/bigscreen-can-let-stream-console-games-vr-nintendo-switch-xbox-one-ps4/\">here</a></figcaption></figure>" +

        "<h3>Apple</h3>" +
        "<p>Apple could release an AR Headset as early as 2020.</p>" +
        "<figure><img alt=\"hardware_apple.jpg\" src=\"/data/blogs/blog23/hardware_apple.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://www.roadtovr.com/report-apple-release-ar-headset-early-2020/\">here</a></figcaption></figure>" +


        "<h2>News</h2>" +

        "<h3>Announces</h3>" +
        "<ul>\n" +
        "<li><strong>Niantic</strong>" +
        "<p>Pokémon GO makers announce Harry Potter AR Game, releasing 2018.</p>" +
        "<figure><figcaption>Read more <a target=\"_blank\" href=\"https://nianticlabs.com/blog/wizardsunite/\">here</a></figcaption></figure>" +
        "</li>\n" +
        "<li><strong>nDreams</strong>" +
        "<p>Shooty Fruity coming to all major VR platforms on December 19th.</p>" +
        "<figure><figcaption>Read more <a target=\"_blank\" href=\"https://www.roadtovr.com/shooty-fruity-coming-major-vr-platforms-december-19th/\">here</a></figcaption></figure>" +
        "</li>\n" +
        "<li><strong>Bethesda’s</strong>" +
        "<p>Bethesda’s VR version of Skyrim (2011) is nearly here, launching on PSVR Friday this week.</p>" +
        "<figure><figcaption>Read more <a target=\"_blank\" href=\"https://www.twitch.tv/bethesda\">here</a></figcaption></figure>" +
        "</li>\n" +
        "</ul>" +

        "<h3>October 2017 VR Game Release Dates</h3>\n" +
        "<ul>\n" +
        "<li>Knife Club VR &ndash; Oculus Rift/HTC Vive (Oct. 2)*Early Access</li>\n" +
        "<li>Sneaky Bears &ndash; Oculus Rift/HTC Vive (Oct. 4)</li>\n" +
        "<li>VR Drivers &ndash; Oculus Rift (Oct. 5)</li>\n" +
        "<li>Marshmallow Melee &ndash; HTC Vive (Oct. 7)</li>\n" +
        "<li>TRIPLE TWENTY &ndash; VR Darts &ndash; Oculus Rift/HTC Vive (Oct. 9)</li>\n" +
        "<li>Arktika.1 &ndash; Oculus Rift/Touch Exclusive (Oct. 10)</li>\n" +
        "<li>n-body &ndash; HTC Vive (Oct. 11)</li>\n" +
        "<li>SweeperVR &ndash; HTC Vive (Oct. 12)</li>\n" +
        "<li>REGENESIS Arcade &ndash; Oculus Rift/HTC Vive (Oct. 13)</li>\n" +
        "<li>Toy Goblins &ndash; HTC Vive (Oct. 13)</li>\n" +
        "<li>Taphouse VR &ndash; HTC Vive (Oct. 18)</li>\n" +
        "<li>Virtual Space &ndash; Oculus Rift/HTC Vive (Oct. 17)*Early Access</li>\n" +
        "<li>Megaton Rainfall &ndash; PSVR (Oct. 17)</li>\n" +
        "<li>The Gallery &ndash; Episode 2: Heart of the Emberstone &ndash; Oculus Rift/HTC Vive (Oct. 18)</li>\n" +
        "<li>Alpha Mike Foxtrot &ndash; HTC Vive (Oct. 20)</li>\n" +
        "<li>Pathstow Mystery VR &ndash; HTC Vive (Oct. 20)</li>\n" +
        "<li>Ancient Code VR( The Fantasy Egypt Journey) &ndash; HTC Vive (Oct. 26)</li>\n" +
        "<li>Guns&rsquo;n&rsquo;Stories: Preface VR &ndash; Oculus Rift/HTC Vive (October 2017)</li>\n" +
        "<li>Organ Quarter &ndash; Oculus Rift/HTC Vive (October 2017)</li>\n" +
        "<li>Star Shelter &ndash; Oculus Rift/HTC Vive (October 2017)*Early Access</li>\n" +
        "<li>TankVR &ndash; HTC Vive (October 2017)*Early Access</li>\n" +
        "<li>Aderyn’s Cradle &ndash; Oculus Rift (Fall 2017)</li>\n" +
        "<li>The American Dream  &ndash; PSVR/Oculus Rift/HTC Vive (2017)</li>\n" +
        "<li>Aquanox Deep Descent &ndash; Oculus Rift/HTC Vive (2017)</li>\n" +
        "<li>ARK Park &ndash; PSVR/Oculus Rift/HTC Vive (2017)</li>\n" +
        "<li>Bad Day To Fly &ndash; Oculus Rift/HTC Vive (2017)</li>\n" +
        "<li>Bee Bee Q &ndash; Oculus Rift/HTC Vive (Summer 2017)</li>\n" +
        "<li>Blunt Force &ndash; Oculus Rift (“Episodes starting in 2017”)</li>\n" +
        "</ul>\n" +

        "<h3>November 2017 VR Game Release dates</h3>\n" +
        "<ul>\n" +
        "<li>Merper VR &ndash; HTC Vive (Nov. 1)</li>\n" +
        "<li>Medieval Mayhem &ndash; Oculus Rift/HTC Vive (Nov. 1)*Early Access</li>\n" +
        "<li>Realm Quest &ndash; HTC Vive (Nov. 1)*Early Access</li>\n" +
        "<li>Soundscape &ndash; Oculus Rift/HTC Vive (Nov. 1)</li>\n" +
        "<li>Prana &ndash; Oculus Rift/HTC Vive (Nov. 6)</li>\n" +
        "<li>Gravity Tunnel VR &ndash; HTC Vive (Nov. 6)</li>\n" +
        "<li>Kokoda VR &ndash; Oculus Rift/HTC Vive (Nov. 6)</li>\n" +
        "<li>Hide N Seek VR &ndash; Oculus Rift/HTC Vive (Nov. 7)*Early Access</li>\n" +
        "<li>Killing Floor: Incursion &ndash; Oculus Rift/HTC Vive (Nov. 7)</li>\n" +
        "<li>Tactical AR &ndash; HTC Vive (Nov. 8)</li>\n" +
        "<li>Fragments &ndash; Oculus Rift (Nov. 9)</li>\n" +
        "<li>The Hospital: Allison’s Diary &ndash; HTC Vive (Nov. 9)</li>\n" +
        "<li>Castaway VR &ndash; HTC Vive (Nov. 9)*Early Access</li>\n" +
        "<li>Magical Squash &ndash; HTC Vive (Nov. 10)</li>\n" +
        "<li>M.I.A &ndash; HTC Vive (Early November)</li>\n" +
        "<li>The Broken Seal &ndash; HTC Vive (November 2017)</li>\n" +
        "<li>GNOG &ndash; Oculus Rift/HTC Vive (November 2017)*Already out on PSVR</li>\n" +
        "<li>Kung Fu All-Star VR &ndash; HTC Vive (November 2017)*Early Access</li>\n" +
        "<li>Willowisp VR &ndash; HTC Vive (November 2017)*Early Access</li>\n" +
        "<li>Aderyn’s Cradle &ndash; Oculus Rift (Fall 2017)</li>\n" +
        "<li>From Other Suns &ndash; Oculus Rift (“Fall” 2017)</li>\n" +
        "<li>Fruit Golf &ndash; HTC Vive (Fall 2017)</li>\n" +
        "<li>The Little Prince VR &ndash; Oculus Rift/HTC Vive (Fall 2017)</li>\n" +
        "<li>Nevrosa: Escape &ndash; Oculus Rift/HTC Vive (Fall 2017)</li>\n" +
        "<li>Theseus &ndash; Oculus Rift/HTC Vive (Fall 2017)*Already out on PSVR</li>\n" +
        "<li>The Elder Scrolls V: Skyrim &ndash; PSVR (Nov. 17)</li>\n" +
        "<li>VR Squash 2017 &ndash; HTC Vive (Nov. 20)</li>\n" +
        "<li>Monster of the Deep: Final Fantasy XV &ndash; PSVR (Nov. 21)</li>\n" +
        "<li>Quantized &ndash; Oculus Rift/HTC Vive (Nov. 30)</li>\n" +
        "</ul>\n" +

        "<p class=\"font-weight-bold\">Don&rsquo;t miss the latest VR news next month in our VR digest!</p>\n" +

        "<iframe src=\"//www.slideshare.net/slideshow/embed_code/key/Huhm6DyrP40cyF\" width=\"595\" height=\"485\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" style=\"border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;\" allowfullscreen> </iframe>",
      backgroundImage: '/data/blogs/blog23/VR_digest_cover.jpg',
      mainImage: '/data/blogs/blog23/VR_digest_cover.jpg',
      backgroundImagePosition: 'center',
      authors: [],
      seo: {
        title: 'ELIFTECH | Your Trusted IT Partner | Blog | VR digest. November 2017',
        description: "Get the latest info on VR/AR industry updates, news, releases, features, technologies, hardware, etc. from our November'17 VR digest",
        keywords: ' vr, ar, mr, virtual reality, augmented reality, mixed reality, web development software, software outsourcing, software development, custom software development company, software development outsourcing, 3d, arcore, arkit, augmented reality, htc vive, microsoft, nintendo switch, oculus, openxr, rift, sketchfab, unity, unity 2017.3, unreal engine, unreal engine 4.18, vr headsets, vr/ar, xbox one '
      }
    },
    {
      id: 24,
      url: '24-vr-digest-december-2017',
      "title": "VR digest.  December 2017",
      "pubDate": "Mon, 18 Dec 2017 03:00:00 +0000",
      category: "news",
      rate: '5.0',
      tags: "VR, AR, VirtualReality, AugmentedReality",
      description: "Learn what's new in Virtual Reality and Augmented Reality: updates, news, releases, features, technologies, hardware, etc.",
      text: "<p>Learn what's new in Virtual Reality and Augmented Reality: updates, news, releases, features, technologies, hardware, etc.</p>" +
        "<h2>Technologies</h2>" +

        "<h3>Cinema 4D</h3>" +
        "<p>Insydium has revealed a new version of X-Particles 4 — a particle system plugin for Cinema 4D. The update brings a new particle based dynamic liquid solver, a new hybrid SPH solver, and more.</p>" +
        "<p>New features:</p>\n" +
        "<ul>\n" +
        "<li>ExplosiaFX smoke and simulation software;</li>\n" +
        "<li>A new particle based dynamic liquid solver to quickly create small scale fluid simulations;</li>\n" +
        "<li>A new hybrid SPH solver xpFluidFX for medium to large scale fluid simulations;</li>\n" +
        "<li>XpVertexMap Maker adds four modes to manipulate the vertex weight, including vertex speed, texture, X-Particles/object vertices and xpExplosiaFX.</li>\n" +
        "</ul>" +
        '<figure><iframe width="100%" height="315" src="https://www.youtube.com/embed/rPFqFdt-HVg" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>' +
        '<figcaption>Read more <a target=\"_blank\" href=\"https://insydium.ltd/products/x-particles/\">here</a></figcaption></figure>' +

        "<h3>Babylon.js 3.1</h3>" +
        "<p>Major updates:</p>\n" +
        "<ul>\n" +
        "<li>Added VRExperienceHelper to create WebVR;</li>\n" +
        "<li>Added BackgroundMaterial;</li>\n" +
        "<li>Added EnvironmentHelper;</li>\n" +
        "<li>Added support for webgl context lost and restored events;</li>\n" +
        "<li>Added support for non-pow2 textures when in WebGL2 mode.</li>\n" +
        "</ul>" +
        "<figure><iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/LlI5a5rf4fc\" gesture=\"media\" allow=\"encrypted-media\" frameborder=\"0\" allowfullscreen></iframe>" +
        "<figcaption>Read more <a target=\"_blank\" href=\"http://www.html5gamedevs.com/topic/34553-babylonjs-31-is-available/\">here</a></figcaption></figure>" +

        "<h3>Mozilla</h3>" +
        "<p>Mozilla Launches iOS App to Experiment With WebAR.</p>\n" +
        "<figure><img alt=\"Mozilla.jpg\" src=\"/data/blogs/blog24/Mozilla.jpg\" title=\"\"><figcaption>Read more <a target=\"_blank\" href=\"https://blog.mozvr.com/experimenting-with-ar-and-the-web-on-ios/\">here</a></figcaption></figure>" +

        "<h3>ManoMotion</h3>" +
        "<p>ManoMotion provides a framework for real- time 3D gestural analysis. Minimal hardware, minimal computing power. All that’s required is a simple RGB camera found in everyday smartphone.</p>\n" +
        "<figure><iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/FdDLbCRyZ60\" gesture=\"media\" allow=\"encrypted-media\" frameborder=\"0\" allowfullscreen></iframe>" +
        "<figcaption>Read more <a target=\"_blank\" href=\"https://www.manomotion.com/\">here</a></figcaption></figure>" +

        "<h3>Mari 4.0 Released</h3>" +
        "<p>Fondry has just released Mari 4.0! Features:</p>\n" +
        "<ul>\n" +
        "<li>Quicker start-up and export</li>\n" +
        "<li>Improved UI</li>\n" +
        "<li>Better navigation</li>\n" +
        "<li>Enhanced workflows</li>\n" +
        "</ul>" +
        "<figure><iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/CnM_55L4OIQ\" gesture=\"media\" allow=\"encrypted-media\" frameborder=\"0\" allowfullscreen></iframe>" +
        "<figcaption>Read more <a target=\"_blank\" href=\"https://www.foundry.com/products/mari/new-releases?utm_medium=social&utm_source=linkedin&utm_campaign=2017-12-Mari-Mari4Release\">here</a></figcaption></figure>" +

        "<h3>ARCore</h3>" +
        "<p>Google launched their ARCore-powered AR camera mode with a whole bunch of Star Wars-themed “stickers”.</p>\n" +
        "<figure><img alt=\"ARCore.jpg\" src=\"/data/blogs/blog24/ARCore.jpg\" title=\"\">" +
        "<figcaption>Read more <a target=\"_blank\" href=\"https://www.xda-developers.com/googles-ar-stickers-pixel-and-pixel-2/\">here</a></figcaption></figure>" +

        "<h3>Autodesk</h3>" +
        "<p>Autodesk officially announced it will no longer support its engine or sell it independently.</p>\n" +
        "<figure><iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/brQhC-r0YJc\" gesture=\"media\" allow=\"encrypted-media\" frameborder=\"0\" allowfullscreen></iframe>" +
        "<figcaption>Read more <a target=\"_blank\" href=\"https://80.lv/articles/end-of-the-road-for-stingray/\">here</a></figcaption></figure>" +

        "<h3>Unity</h3>" +
        "<p>Vegetation Studio is a vegetation placement and rendering system from Awesome Technologies.</p>\n" +
        "<figure><iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/HnDQl7wN7J0\" gesture=\"media\" allow=\"encrypted-media\" frameborder=\"0\" allowfullscreen></iframe>" +
        "<figcaption>Read more <a target=\"_blank\" href=\"https://www.assetstore.unity3d.com/en/#!/content/103389\">here</a></figcaption></figure>" +

        "<h3>Blender</h3>" +
        "<p>Titus has presented a bridge tool to speed up the transfer of objects between Blender and UVLayout, Headus’ UV unwrapping tool.</p>\n" +
        "<figure><img alt=\"Blender.jpg\" src=\"/data/blogs/blog24/Blender.jpg\" title=\"\">" +
        "<figcaption>Read more <a target=\"_blank\" href=\"https://gumroad.com/l/Blender2UVLayoutBridge\">here</a></figcaption></figure>" +

        "<h3>Quixel</h3>" +
        "<p>Quixel Suite 2.3.2 Released.</p>\n" +
        "<figure><img alt=\"Quixel.jpg\" src=\"/data/blogs/blog24/Quixel.jpg\" title=\"\">" +
        "<figcaption>Read more <a target=\"_blank\" href=\"https://quixel.se/suite2/\">here</a></figcaption></figure>" +

        "<h3>MaxTD</h3>" +
        "<p>MaxTD Rigging Toolbox 1.2 Released</p>\n" +
        "<figure><img alt=\"MaxTD.jpg\" src=\"/data/blogs/blog24/MaxTD.jpg\" title=\"\">" +
        "<figcaption>Read more <a target=\"_blank\" href=\"http://maxtd.net/rigging_toolbox.html\">here</a></figcaption></figure>" +

        "<h3>TRacer X</h3>" +
        "<p>TRacer X is a plugin for Modo that can drastically speed up your production process.</p>\n" +
        "<figure><img alt=\"TRacer-X.jpg\" src=\"/data/blogs/blog24/TRacer-X.jpg\" title=\"\">" +
        "<figcaption>Read more <a target=\"_blank\" href=\"https://gumroad.com/l/TracerX\">here</a></figcaption></figure>" +

        "<h3>YoYo</h3>" +
        "<p>YoYo Games, the creative force behind leading 2D game development engine GameMaker Studio 2.</p>\n" +
        "<figure><img alt=\"YoYo.jpg\" src=\"/data/blogs/blog24/YoYo.jpg\" title=\"\">" +
        "<figcaption>Read more <a target=\"_blank\" href=\"https://www.facebook.com/yoyogames\">here</a></figcaption></figure>" +

        "<h3>Houdini 16.5</h3>" +
        "<p>Houdini 16.5 is launched: Narrow Band FLIP.</p>\n" +
        "<figure><iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/26CTJ6kEWDM\" gesture=\"media\" allow=\"encrypted-media\" frameborder=\"0\" allowfullscreen></iframe>" +
        "<figcaption>Read more <a target=\"_blank\" href=\"https://wwwcg.in.tum.de/research/research/publications/2016/narrow-band-flip-for-liquid-simulations.html\">here</a></figcaption></figure>" +

        "<h3>Blend4Web</h3>" +
        "<p>Blend4Web 17.10 Released.</p>\n" +
        "<figure><img alt=\"Blend4Web.jpg\" src=\"/data/blogs/blog24/Blend4Web.jpg\" title=\"\">" +
        "<figcaption>Read more <a target=\"_blank\" href=\"https://www.blend4web.com/en/community/article/373/\">here</a></figcaption></figure>" +


        "<h2>Hardware</h2>" +

        "<h3>Oculus</h3>" +
        "<p>Oculus Core 2.0 Beta goes live.</p>" +
        "<figure><iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/oGid87BYyIw\" gesture=\"media\" allow=\"encrypted-media\" frameborder=\"0\" allowfullscreen></iframe>" +
        "<figcaption>Read more <a target=\"_blank\" href=\"https://www.oculus.com/blog/welcome-to-rift-core-beta-now-available/\">here</a></figcaption></figure>" +

        "<h3>Nvidia</h3>" +
        "<p>Nvidia Titan V Unveiled.</p>" +
        "<figure><iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/NPrfiOldKf8\" gesture=\"media\" allow=\"encrypted-media\" frameborder=\"0\" allowfullscreen></iframe>" +
        "<figcaption>Read more <a target=\"_blank\" href=\"https://www.nvidia.com/en-us/titan/titan-v/?ncid=so-fac-tnv-29146\">here</a></figcaption></figure>" +

        "<h3>Apple</h3>" +
        "<p>Apple Positions New iMac Pro for VR Development.</p>\n" +
        "<figure><img alt=\"Apple.jpg\" src=\"/data/blogs/blog24/Apple.jpg\" title=\"\">" +
        "<figcaption>Read more <a target=\"_blank\" href=\"https://www.roadtovr.com/apple-positions-new-imac-pro-as-ideal-for-vr-development-available-starting-thursday/\">here</a></figcaption></figure>" +

        "<h3>Striker VR</h3>" +
        "<p>Hands-on: Striker VR’s Latest Haptic Gun Prototype Brings a Host of Improvements.</p>\n" +
        "<figure><img alt=\"Striker.jpg\" src=\"/data/blogs/blog24/Striker.jpg\" title=\"\">" +
        "<figcaption>Read more <a target=\"_blank\" href=\"https://www.roadtovr.com/hands-on-striker-vrs-latest-haptic-gun-prototype-brings-a-host-of-improvements/\">here</a></figcaption></figure>" +

        "<h3>TPCast</h3>" +
        "<p>TPCast for Rift Pre-orders Start Shipping.</p>\n" +
        "<figure><img alt=\"TPCast.jpg\" src=\"/data/blogs/blog24/TPCast.jpg\" title=\"\">" +
        "<figcaption>Read more <a target=\"_blank\" href=\"https://www.tpcastvr.com/single-post/2017/12/07/TPCAST-US-Brings-the-First-Commercial-Wireless-Adapter-for-the-Oculus-Rift-to-the-American-Market\">here</a></figcaption></figure>" +

        "<h3>Google</h3>" +
        "<p>Google is Developing a VR Display With 10x More Pixels Than Today’s Headsets.</p>\n" +
        "<figure><img alt=\"Google.jpg\" src=\"/data/blogs/blog24/Google.jpg\" title=\"\">" +
        "<figcaption>Read more <a target=\"_blank\" href=\"https://www.tpcastvr.com/single-post/2017/12/07/TPCAST-US-Brings-the-First-Commercial-Wireless-Adapter-for-the-Oculus-Rift-to-the-American-Market\">here</a></figcaption></figure>" +

        "<h3>Lytro</h3>" +
        "<p>Lytro Reveals Immerge 2.0 Light-field Camera with Improved Quality, Faster Captures.</p>\n" +
        "<figure><img alt=\"Lytro.jpg\" src=\"/data/blogs/blog24/Lytro.jpg\" title=\"\">" +
        "<figcaption>Read more <a target=\"_blank\" href=\"https://www.roadtovr.com/exclusive-lytro-reveals-immerge-2-0-light-field-camera-improved-quality-faster-captures/\">here</a></figcaption></figure>" +


        "<h2>Announces</h2>" +

        "<h3>Unity</h3>" +
        "<p>New Adam Short.</p>\n" +
        "<figure><figcaption>Read more <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=tSDsi2ItktY\">here</a></figcaption></figure>" +

        "<h3>The Game Awards 2017</h3>" +
        "<p>‘Resident Evil 7: Biohazard’ Nabs ‘Best VR/AR Game’ at The Game Awards 2017.</p>\n" +
        "<figure><figcaption>Read more <a target=\"_blank\" href=\"https://www.roadtovr.com/resident-evil-7-biohazard-nabs-best-vrar-game-game-awards-2017/\">here</a></figcaption></figure>" +

        "<h3>IMAX VR</h3>" +
        "<p>‘Justice League VR: The Complete Experience’ Launches on PSVR, Rift & Vive.</p>\n" +
        "<figure><figcaption>Read more <a target=\"_blank\" href=\"https://www.roadtovr.com/justice-league-vr-complete-experience-launches-tomorrow-psvr/\">here</a></figcaption></figure>" +


        "<h3>December 2017 VR Games Release Dates</h3>\n" +
        "<ul>\n" +
        "<li>Doom VRF &ndash; PSVR (Dec. 1)*Already out on HTC Vive</li>\n" +
        "<li>Coaster of Carnage VR &ndash; HTC Vive (Dec. 1)*Early Access</li>\n" +
        "<li>Little Einar &ndash; HTC Vive (Dec. 1)</li>\n" +
        "<li>Medieval Mayhem &ndash; Oculus Rift/HTC Vive (Dec. 1)</li>\n" +
        "<li>Pop Pop Boom Boom VR &ndash; HTC Vive (Dec. 1)</li>\n" +
        "<li>Totally Realistic Sledding VR &ndash; HTC Vive (Dec. 1)*Early Access</li>\n" +
        "<li>Escape Room &ndash; HTC Vive (Dec. 4)*Early Access</li>\n" +
        "<li>REGENESIS Arcade DELUXE &ndash; Oculus Rift/HTC Vive (Dec. 4)*Early Access</li>\n" +
        "<li>Silent Space VR &ndash; Oculus Rift/HTC Vive (Dec. 4)</li>\n" +
        "<li>Re-bot VR &ndash; HTC Vive (Dec. 5)</li>\n" +
        "<li>VR Stock Car Races &ndash; HTC Vive (Dec. 5)</li>\n" +
        "<li>Battlemage Training &ndash; HTC Vive (Dec. 6)*Early Access</li>\n" +
        "<li>Lucky Night VR &ndash; Oculus Rift/HTC Vive (Dec. 6)*Early Access</li>\n" +
        "<li>RIFF VR &ndash; HTC Vive (Dec. 6)*Early Access</li>\n" +
        "<li>Operation Apex &ndash; HTC Vive (Dec. 7)</li>\n" +
        "<li>THE BOX VR &ndash; Oculus Rift/HTC Vive (Dec. 7)</li>\n" +
        "<li>High Mountain Roller Coaster VR &ndash; Oculus Rift/HTC Vive (Dec. 7)</li>\n" +
        "<li>Bygone Worlds: Drama at the Odeion &ndash; Oculus Rift/HTC Vive (Dec. 7)</li>\n" +
        "<li>Wands &ndash; Oculus Rift/HTC Vive (Dec. 11)</li>\n" +
        "<li>Audio Drive Neon &ndash; Oculus Rift/HTC Vive (Dec. 11)*Early Access</li>\n" +
        "<li>Fallout 4 VR &ndash; HTC Vive (Dec. 12)</li>\n" +
        "<li>OrbusVR &ndash; Oculus Rift/HTC Vive (Dec. 15)</li>\n" +
        "<li>VR Ping Pong Paradise &ndash; HTC Vive (Dec. 15)</li>\n" +
        "<li>DoubleTap &ndash; HTC Vive (Dec. 16)*Early Access</li>\n" +
        "<li>Major League Gladiators &ndash; HTC Vive (Dec. 18)</li>\n" +
        "<li>Shooty Fruity &ndash; Oculus Rift/HTC Vive (Dec. 19)</li>\n" +
        "<li>Mike was Сursed &ndash; Oculus Rift (Dec. 20)</li>\n" +
        "<li>Data Thief &ndash; HTC Vive (Dec. 21)</li>\n" +
        "<li>Follow My Footsteps &ndash; HTC Vive (Dec. 22)</li>\n" +
        "<li>Jida Chronicle Chaos Frontier VR &ndash; HTC Vive (Dec. 25)</li>\n" +
        "<li>Sniper Rust VR &ndash; Oculus Rift (Dec. 26)</li>\n" +
        "<li>Uizuno Blade &ndash; HTC Vive (Dec. 27)*Early Access</li>\n" +
        "<li>SURV1V3 &ndash; Oculus Rift/HTC Vive (Dec. 29)</li>\n" +
        "<li>Abduction Prologue: The Story Of Jonathan Blake &ndash; Oculus Rift/HTC Vive (December 2017)*Early Access</li>\n" +
        "<li>The Afterwoods &ndash; Oculus Rift/HTC Vive (December 2017)*Early Access</li>\n" +
        "<li>APEX Tournament &ndash; Oculus Rift/HTC Vive (December 2017)*Early Access</li>\n" +
        "<li>Big Bang Billiards &ndash; HTC Vive (December 2017)*Early Access</li>\n" +
        "<li>Coins Challenge &ndash; HTC Vive (December 2017)</li>\n" +
        "<li>Derora &ndash; Oculus Rift/HTC Vive (December 2017)*Early Access</li>\n" +
        "<li>The First Class VR &ndash; Oculus Rift/HTC Vive (December 2017)</li>\n" +
        "<li>Three Kingdoms VR &ndash; Jade Knight &ndash; HTC Vive (December 2017)</li>\n" +
        "<li>Mech Ace Combat &ndash; Trainer Edition &ndash; HTC Vive (December 2017)</li>\n" +
        "<li>The Legendary Blacksmith &ndash; HTC Vive (December 2017)</li>\n" +
        "</ul>\n" +

        "<p class=\"font-weight-bold\">Don&rsquo;t miss the latest VR news next month in our VR digest!</p>\n" +

        "<iframe src=\"//www.slideshare.net/slideshow/embed_code/key/4ETer1qVFlEvz\" width=\"595\" height=\"485\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" style=\"border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;\" allowfullscreen> </iframe>",
      backgroundImage: '/data/blogs/blog24/VR_digest_cover.jpg',
      mainImage: '/data/blogs/blog24/VR_digest_cover.jpg',
      backgroundImagePosition: 'center',
      authors: [],
      seo: {
        title: 'ELIFTECH | Your Trusted IT Partner | Blog | VR digest. December 2017',
        description: "Learn what's new in Virtual Reality and Augmented Reality: updates, news, releases, features, technologies, hardware, etc. from our December'17 VR digest",
        keywords: 'vr, ar, mr, virtual reality, augmented reality, mixed reality, web development software, software outsourcing, software development, custom software development company, software development outsourcing, arcore, autodesk, babylon.js, blend4web, blender, houdini 16.5, manomotion, mari 4.0, maxtd, mozilla, oculus, quixel, tracer x, unity, vr/ar, webar, yoyo '
      }
    },
    {
      id: 25,
      url: '25-js-digest-december-2017',
      "title": "JavaScript digest.  December 2017",
      "pubDate": "Tue, 19 Dec 2017 03:00:00 +0000",
      category: "news",
      rate: '5.0',
      tags: "javascript, js, JavaScript_Libraries, api",
      description: "Last month JavaScript news: releases, updates, agreements and many more about JS technologies. Enjoy our December 2017 JS digest!",
      text: "<p>JavaScript news in the latest JS digest:</p>" +
        "<h2>Petition: Kill Internet Explorer Once and For All</h2>" +
        "<p>Web developers have had enough! Internet Explorer has very little compatibility, yet we are still required to write code to accommodate this archaic browser. We want to use ES6 :(</p>" +
        "<figure><img alt=\"Kill-Internet-Explorer.jpg\" src=\"/data/blogs/blog25/Kill-Internet-Explorer.jpg\" title=\"\"></figure>" +
        "<p>For more details click <a href=\"https://www.change.org/p/microsoft-kill-internet-explorer-once-and-for-all\">here.</a></p>" +

        "<h2>Google Chrome 63 Released</h2>" +
        "<ul>" +
        "<li>Google has redesigned</li>" +
        "<li>the chrome://flags section.</li>" +
        "<li>Chrome now lets you mute sites forever.</li>" +
        "<li>FTP links are now marked as insecure.</li>" +
        "<li>Chrome now shows warnings against MitM attacks.</li>" +
        "<li>Chrome now uses better site isolation.</li>" +
        "<li>Chrome now comes with a Device Memory API that lets developers better understand how Chrome and websites use a PC's memory.</li>" +
        "<li>Chrome can now load JavaScript modules based on runtime conditions. It previously supported only static JavaScript module loading.</li>" +
        "</ul>" +
        "<p>And a lot more <a href=\"https://www.bleepingcomputer.com/news/software/google-chrome-63-released-for-android-linux-mac-and-windows/\">here</a>.</p>" +
        "<figure><img alt=\"Google-Chrome-63.jpg\" src=\"/data/blogs/blog25/Google-Chrome-63.jpg\" title=\"\"></figure>" +

        "<h2>How to Cancel Your Promise?</h2>" +
        "<p>You need to build a workaround. To see code realization click <a href=\"http://blog.bloomca.me/2017/12/04/how-to-cancel-your-promise.html\">here</a>.</p>" +
        "<p>Following the link above, you can find examples for:</p>" +
        "<ul>" +
        "<li>Bluebird</li>" +
        "<li>Pure Promises</li>" +
        "<li>Generators.</li>" +
        "</ul>" +

        "<h2>Parcel</h2>" +
        "<p>Parcel - blazing fast, zero configuration web application bundler.</p>" +
        "<figure><img alt=\"parcel.jpg\" src=\"/data/blogs/blog25/parcel.jpg\" title=\"\"></figure>" +
        "<p>Based on a reasonably sized app, containing 1726 modules, 6.5M uncompressed. Built on a 2016 MacBook Pro with 4 physical CPUs.</p>" +
        "<ul>" +
        "<li><strong>Blazing fast bundle times</strong> - Parcel uses worker processes to enable multicore compilation, and has a filesystem cache for fast rebuilds even after a restart.</li>" +
        "<li><strong>Bundle all your assets</strong> - Parcel has out of the box support for JS, CSS, HTML, file assets, and more - no plugins needed.</li>" +
        "<li><strong>Automatic transforms</strong> - Code is automatically transformed using Babel, PostCSS, and PostHTML when needed - even node_modules.</li>" +
        "<li><strong>Zero config code splitting</strong> - Using the dynamic import() syntax, Parcel splits your output bundles so you only load what is needed on initial load.</li>" +
        "<li><strong>Hot module replacement</strong> - Parcel automatically updates modules in the browser as you make changes during development, no configuration needed.</li>" +
        "<li><strong>Friendly error logging</strong> - Parcel prints syntax highlighted code frames when it encounters errors to help you pinpoint the problem.</li>" +
        "</ul>" +
        "<p>More information <a href=\"https://parceljs.org/\">here</a>.</p>" +


        "<h2>Turbo: 5x faster than Yarn &amp; NPM, and runs natively in-browser</h2>" +
        "<p>Turbo is a blazing fast NPM client originally built for StackBlitz that:</p>" +
        "<ul>" +
        "<li>Installs packages ≥5x faster than Yarn &amp; NPM</li>" +
        "<li>Reduces the size of node_modules up to two orders of magnitude</li>" +
        "<li>Has multiple layers of redundancy for production grade reliability</li>" +
        "<li>Works entirely within your web browser, enabling lightning fast dev environments</li>" +
        "</ul>" +
        "<figure><img alt=\"turbbo.gif\" src=\"/data/blogs/blog25/turbbo.gif\" title=\"\"></figure>" +


        "<h2>Why?</h2>" +
        "<p>Instead of downloading entire tarballs, Turbo is smart and only retrieves the files that are directly required from the main, typings and other relevant fields.</p>" +
        "<figure><img alt=\"turbo2.jpg\" src=\"/data/blogs/blog25/turbo2.jpg\" title=\"\"></figure>" +
        "<p>For more details click <a href=\"https://medium.com/@ericsimons/introducing-turbo-5x-faster-than-yarn-npm-and-runs-natively-in-browser-cc2c39715403\">here</a>.</p>" +
        "<figure><img alt=\"turbo3.jpg\" src=\"/data/blogs/blog25/turbo3.jpg\" title=\"\"></figure>" +

        "<h2>Average Page Load Times for 2018</h2>" +
        "<ul>" +
        "<li>What are the new average page load times?</li>" +
        "<li>What’s the typical size of a webpage you should aim to be under?</li>" +
        "<li>How many resources does the standard page load?</li>" +
        "<li>What’s the average server delay, measure in time to first byte?</li>" +
        "</ul>" +
        "<figure><img alt=\"Average-Page-Load-Times-for-2018_1.jpg\" src=\"/data/blogs/blog25/Average-Page-Load-Times-for-2018_1.jpg\" title=\"\"></figure>" +
        "<figure><img alt=\"Average-Page-Load-Times-for-2018_2.jpg\" src=\"/data/blogs/blog25/Average-Page-Load-Times-for-2018_2.jpg\" title=\"\"></figure>" +
        "<figure><img alt=\"Average-Page-Load-Times-for-2018_3.jpg\" src=\"/data/blogs/blog25/Average-Page-Load-Times-for-2018_3.jpg\" title=\"\"></figure>" +
        "<figure><img alt=\"Average-Page-Load-Times-for-2018_4.jpg\" src=\"/data/blogs/blog25/Average-Page-Load-Times-for-2018_4.jpg\" title=\"\"></figure>" +


        "<h2>How to compare with your site load time/size/resources?</h2>" +
        "<p>There are a few great simple site speed tools out there:</p>" +
        "<ol>" +
        "<li><a href=\"http://www.webpagetest.org/\">WebPageTest</a>: The industry standard for measuring site performance – results are collected from real browsers running common operating systems.</li>" +
        "<li><a href=\"https://tools.pingdom.com/\">Pingdom</a>: a simple tool which makes makes the same measurements, yet method of testing is undocumented.</li>" +
        "<li><a href=\"https://gtmetrix.com/\">GTmetrix</a>: gives you actionable insights about the best way to optimize your webpage speed.</li>" +
        "</ol>" +
        "<p>For more information click <a href=\"https://www.machmetrics.com/speed-blog/average-page-load-times-websites-2018/\">here</a>.</p>" +


        "<h2>77% of 433,000 Sites Use Vulnerable JavaScript Libraries</h2>" +
        "<p>State of Open Source Security discoveries the report mentions is that an analysis of around 433,000 sites found that 77% of them use at least one front-end JavaScript library with a known security vulnerability.</p>" +
        "<figure><img alt=\"Vulnerable-JavaScript-Libraries_1.jpg\" src=\"/data/blogs/blog25/Vulnerable-JavaScript-Libraries_1.jpg\" title=\"\"></figure>" +
        "<figure><img alt=\"Vulnerable-JavaScript-Libraries_2.jpg\" src=\"/data/blogs/blog25/Vulnerable-JavaScript-Libraries_2.jpg\" title=\"\"></figure>" +
        "<p>More information  <a href=\"https://snyk.io/blog/77-percent-of-sites-still-vulnerable/\">here.</a></p>" +


        "<h2>Using the new theming API in Firefox</h2>" +
        "<p>From powerful extensions like Stratiform or FT Deep Dark to simple lightweight themes, theming has been quite popular within" +
        "Firefox. Now that Firefox Quantum (57) has launched with many performance improvements and a sparkling new interface, we" +
        "want to bridge the gap with a new theming API that allows you to go beyond basic lightweight themes.</p>" +
        "<figure><img alt=\"theming API in Firefox1.gif\" src=\"/data/blogs/blog25/theming-API-in-Firefox1.gif\" title=\"\"></figure>" +
        "<figure><img alt=\"theming-API-in-Firefox2.jpg\" src=\"/data/blogs/blog25/theming-API-in-Firefox2.jpg\" title=\"\"></figure>" +
        "<figure><img alt=\"theming-API-in-Firefox3.jpg\" src=\"/data/blogs/blog25/theming-API-in-Firefox3.jpg\" title=\"\"></figure>" +
        "<figure><img alt=\"theming API in Firefox4.gif\" src=\"/data/blogs/blog25/theming-API-in-Firefox4.gif\" title=\"\"></figure>" +
        "<p>Read more <a href=\"https://hacks.mozilla.org/2017/12/using-the-new-theming-api-in-firefox/\">here</a>.</p>" +


        "<h2>Bower is dead</h2>" +
        "<p>Bower is no longer the dependency manager of choice for front-end projects. While the open source project is still maintained," +
        "its creators decided to deprecate it, and advise how to migrate to other solutions—namely Yarn and webpack.</p>" +
        "<p>Six reasons to stop using Bower and switch to a new workflow:</p>" +
        "<ol>" +
        "<li>Bower has been deprecated by its creators</li>" +
        "<li>Bower offered a flat dependency graph, which you can now get with NPM and Yarn</li>" +
        "<li>Bower adds complexity and is redundant because it requires NPM</li>" +
        "<li>Bower has a separate package ecosystem</li>" +
        "<li>Bower put the burden of dependency management on the user</li>" +
        "<li>Bower doesn’t support different versions of the same package on the same page</li>" +
        "</ol>" +
        "<p>For more info click <a href=\"https://snyk.io/blog/bower-is-dead/\">here</a>.</p>" +


        "<h2>A Classic Extension Reborn: Tree Style Tab</h2>" +
        "<figure><img alt=\"Tree Style Tab.gif\" src=\"/data/blogs/blog25/Tree-Style-Tab.gif\" title=\"\"></figure>" +
        "<p>For more information click <a href=\"https://hacks.mozilla.org/2017/12/webextension-tree-style-tab/\">here</a>.</p>" +

        "<h2>React v16.2.0</h2>" +
        "<p>React 16.2 is now available! The biggest addition is improved support for returning multiple children from a component’s render method. this feature call" +
        "<i> fragments</i>:</p>" +
        "<pre><code>" +
        "\nrender() {\n" +
        "  return (\n" +
        "    &lt;&gt;\n" +
        "      &lt;ChildA /&gt;\n" +
        "      &lt;ChildB /&gt;\n" +
        "      &lt;ChildB /&gt;\n" +
        "    &lt;/&gt;\n" +
        "  );\n" +
        "}</code></pre>" +

        "<p>HTML text</p>" +
        "<pre><code>" +
        "\nSome text.\n&lt;h2&gt;A heading&lt;/h2&gt;\nMore text.\n&lt;h2&gt;Another heading&lt;/h2&gt;\nEven more text.</code></pre>" +

        "<p>Prior to version 16</p>" +
        "<pre><code>" +
        "\nrender() {\n" +
        "  return ( \n" +
        "    // Extraneous div element :(\n" +
        "    &lt;div&gt;\n" +
        "      Some text.\n" +
        "      &lt;h2&gt;A heading&lt;/h2&gt;\n" +
        "      More text.\n" +
        "      &lt;h2&gt;Another heading&lt;/h2&gt;\n" +
        "      Even more text. \n" +
        "    &lt;/div&gt;\n" +
        "  );\n}" +
        "</code></pre>" +

        "<p>React 16.0</p>" +
        "<pre><code>" +
        "\nrender() {\n" +
        "  return [\n" +
        "    \"Some text.\",\n" +
        "    &lt;h2 key=\"heading-1\"&gt;A heading&lt;/h2&gt;,\n" +
        "    \"More text.\",\n" +
        "    &lt;h2 key=\"heading-2\"&gt;Another heading&lt;/h2&gt;,\n" +
        "    \"Even more text.\"\n" +
        "  ];\n" +
        "}" +
        "</code></pre>" +

        "<p>Fragment component</p>" +
        "<pre><code>" +
        "\nrender() {\n" +
        "  return (\n" +
        "    &lt;Fragment&gt;\n" +
        "      Some text.\n" +
        "      &lt;h2&gt;A heading&lt;/h2&gt;\n" +
        "      More text.\n" +
        "      &lt;h2&gt;Another heading&lt;/h2&gt;\n" +
        "      Even more text.\n" +
        "    &lt;/Fragment&gt;\n" +
        "  );\n" +
        "}" +
        "</code></pre>" +

        "<p>JSX Fragment Syntax</p>" +
        "<pre><code>" +
        "\nrender() {\n" +
        "  return (\n" +
        "    &lt;&gt;\n" +
        "      Some text.\n" +
        "      &lt;h2&gt;A heading&lt;/h2&gt;\n" +
        "      More text.\n" +
        "      &lt;h2&gt;Another heading&lt;/h2&gt;\n" +
        "      Even more text.\n" +
        "    &lt;/&gt;\n" +
        "  );\n" +
        "}" +
        "</code></pre>" +
        "<p>For more info click <a href=\"https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html\">here</a>.</p>" +


        "<h2>WebStorm 2017.3.1 is now available</h2>" +
        "<ul>" +
        "<li>Support for Fragments in React 16.2;" +
        "<figure><img alt=\"WebStorm-2017_1.jpg\" src=\"/data/blogs/blog25/WebStorm-2017_1.jpg\" title=\"\"></figure></li>" +
        "<li>Configurable code completion for JSX attributes (WebStorm automatically adds ={} or =\"\" &nbsp;after the attribute name);</li>" +
        "<li>Adding interpolation inside template strings;</li>" +
        "</ul>" +
        "<figure><img alt=\"WebStorm 2017_2.gif\" src=\"/data/blogs/blog25/WebStorm-2017_2.gif\" title=\"\"></figure>" +
        "<p>For more details press <a href=\"https://blog.jetbrains.com/webstorm/2017/12/webstorm-2017-3-1/\">here</a>.</p>" +


        "<h2>The Best JavaScript and CSS Libraries for 2017</h2>" +
        "<p>For top 20 libraries for JSand CSS click <a href=\"https://tutorialzine.com/2017/12/the-best-javascript-and-css-libraries-for-2017\">here</a>.</p>" +
        "<figure><img alt=\"The Best JavaScript and CSS Libraries for 2017.jpg\" src=\"/data/blogs/blog25/The-Best-JavaScript-and-CSS-Libraries-for-2017.jpg\" title=\"\"></figure>" +
        "<p>That’s it for now. Stay tuned for the next edition of JS digest!</p>" +
        "<iframe src=\"//www.slideshare.net/slideshow/embed_code/key/lWk5H9h3LEgmPp\" width=\"595\" height=\"485\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" style=\"border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;\" allowfullscreen> </iframe>",
      backgroundImage: '/data/blogs/blog25/js_digest_cover_december.jpg',
      mainImage: '/data/blogs/blog25/js_digest_cover_december.jpg',
      backgroundImagePosition: 'center',
      authors: [],
      seo: {
        title: 'ELIFTECH | Your Trusted IT Partner | Blog | JavaScript digest. December 2017',
        description: 'Last month news: releases, updates, and many more about JavaScript technologies. Enjoy our December 2017 JS digest!',
        keywords: 'javascript, js, web development software, software outsourcing, software development, custom software development company, software development outsourcing, api, bower, css, css libraries, firefox, google chrome, google chrome 63, internet explorer, javascript libraries, js, parcel, react, react v16.2.0, tree style tab, webstorm, webstorm 2017.3.1'
      }
    },
    {
      id: 26,
      url: '26-car-maintenance',
      "title": "Car Maintenance: How to develop a vehicle descriptive analytics application using IoT technologies.",
      "pubDate": "Thu, 21 Dec 2017 08:45:06 +0000",
      category: "experiments",
      rate: '5.0',
      tags: "IoT, Connected_car, Car_Maintenance, descriptive analytics",
      description: "One of our latest experiments was a development of a vehicle descriptive analytics application using IoT technologies. ElifTech Car Maintenance app collects in real time, analyse and accumulate data about the current condition of the vehicle to prevent it from breaking down",
      text: "<h2>Idea</h2>" +
        "<p>Maintenance systems make modern aircraft fault-tolerant. They provide a remote diagnosis of existing faults and capabilities. But why aren’t vehicles &nbsp;packed with such descriptive analytics maintenance? That is exactly what we wondered right before coming up with the idea of Car Maintenance. Our first motive to experiment with Car Maintenance application was safety considerations for our vehicles, and the second - exercising our skills in the Internet of Things (IoT) software development.</p>" +
        "<figure><img alt=\"Eliftech_Car-Maintenance_app_1.jpg\" src=\"/data/blogs/blog26/Eliftech_Car-Maintenance_app_1.jpg\" title=\"\"></figure>" +

        "<p>The essence of Car Maintenance is instant data collecting, data analysis and data gathering about the current condition of the vehicle to prevent it from breaking down. Descriptive analytics enable us to create a summary of historical data related to a vehicle's condition. The collected data could be used further for sharing with a mechanic. The analytical approach helps a repair master make smarter decisions, solve problems and improve outcomes.</p>" +
        "<p>We track speed, location, engine rotation, the temperature of the important components of the car and dozens of other parameters that are supported by the vehicle. We collect data on a server, and it is also sent to a web application where you can review both the current condition of the connected car and the historical data.</p>" +

        "<h2>Development</h2>"+
        "<p>It took a month to develop the project’s general architecture, web application and mobile app. The development team consisted of three developers Oleksiy Boyko, Oleg Bai and Pavlo Livchak. The CTO of ElifTech, Mykola Kozak, managed the development process.</p>" +
        "<p>Pavlo has played a key role in designing database architecture. During the process, the main task was to connect a mobile phone with Bluetooth to ELM-327 adapter scanner. We searched for plugins for the Bluetooth connector, and chose a cordova-bluetooth-serial that satisfied our needs for collecting data.</p>" +
        "<figure><img alt=\"Eliftech_Car-Maintenance_app_2.jpg\" src=\"/data/blogs/blog26/Eliftech_Car-Maintenance_app_2.jpg\" title=\"\"></figure>" +

        "<p>Oleg developed a mobile application that collects data from the ELM-327 car diagnostic interface tool and displays the current sensor data. The ELM-327 is directly connected to the OBD II port of the car, which monitors useful data including emissions, mileage and speed. The OBD-II is connected to the <a href=\"http://ctemissions.com/test-procedures/what-is-obd\">Check Engine Light</a>, which illuminates when the system detects a problem. Oleksiy developed the site and configured the interaction between the server and the database. &nbsp;</p>" +

        "<h2>Tech Stack</h2><p><strong>Devices: </strong>ELM 327, Bluetooth compatible smartphones.</p>" +
        "<p><strong>App development: </strong>Ionic-native 4, ionic-angular 3.7, cordova-plugins.</p>" +
        "<p><strong>Frontend:</strong> React.js, socket.io-client, React Materialize, axios, google-maps-react.</p>" +
        "<p><strong>Backend: </strong>Node.js (Express, Sequelize, Socket.IO).</p>" +
        "<p><strong>Database: </strong>PostgreSQL.</p>" +

        "<h2>Web Application</h2><p>First, we wrote the endpoints based on a JWT token to use for user registration and user login. We included a user ID so we could always know if the user has access to the requested data. For interaction with relational databases, we chose PostgreSQL. The backend interacts with PostgreSQL via Sequelize (a promise-based ORM for Node.js).</p>" +
        "<p>The typical endpoint request in the database looks as follows:</p>" +

        "<pre><code>" +
        "\nrouter.get('/cars/:car_id/data', usr.verify, (req, res) => {\n" +
        "  let limit = req.query.limit || 10;\n" +
        "  let page = req.query.page || 1;\n" +
        "  let search = req.query.search || '';\n" +
        "  let car_id = req.params.car_id;\n\n" +
        "  model.car_data\n" +
        "      .findAndCountAll({\n" +
        "          attributes: ['id', 'car_id', 'data_desc', 'data_value', 'time'],\n" +
        "          where: {\n" +
        "              car_id: car_id,\n" +
        "              data_desc: {\n" +
        "                  [Op.iLike]: `${search}%`\n" +
        "              }\n" +
        "          },\n" +
        "          raw: true,\n" +
        "          limit: limit,\n" +
        "          offset: limit * (page - 1),\n" +
        "          order: [['time', 'DESC']]\n" +
        "      })\n" +
        "      .then(data => res.json({ data: data.rows, maxPages: Math.ceil(data.count / limit) }))\n" +
        "      .catch(err => res.json({ success: false, message: err.message }));\n" +
        "});" +
        "</pre></code>" +
        "<p>Among the trivial tasks during web development were adding the connected vehicles and distributing access to other users. The complexity of the development was related to the page with the map using WebSockets. The actual data about the connected vehicle, including geolocation, is shown on the page with a 1-second delay.</p>" +
        "<figure><img alt=\"Eliftech_Car-Maintenance_app_3.jpg\" src=\"/data/blogs/blog26/Eliftech_Car-Maintenance_app_3.jpg\" title=\"\"></figure>" +

        "<h2>The Biggest Challenge</h2><p>The ELM-327 device uses OBD-II protocol to read the data. Depending on the vehicle model year, there are fifteen signaling protocols with the standard and unique range of data that can be collected and permitted with the OBD-II. Moreover, there could be two engine control units (ECUs) embedded in a car, which makes our task even harder. First, we have to determine how many central computers are in the car. For example, in a 2016 model test car there are two ECUs: one is responsible for the engine and another one for the gearbox. Data for our purposes are in an ECU engine.</p>" +
        "<h2>Mobile application</h2><p>With a mobile app, we enable a user to select a connected car and then choose which data to browse on the phone and which to send to the server. Data stores automatically on the device in case of a lack of an internet connection, and it is sent to the server synchronically with an enabled internet connection. The car’s speed and the engine’s RPMs can be graphically displayed in an online mode in the app.</p>" +
        "<figure><img alt=\"Eliftech_Car-Maintenance_app_4.jpg\" src=\"/data/blogs/blog26/Eliftech_Car-Maintenance_app_4.jpg\" title=\"\"></figure>" +

        "<h3>The Car Maintenance Android app’s listed features:</h3>"+
        "<ul><li>receives geolocation data and sends it to the server;</li><li>ability to add and remove permissions for other system users to view the car’s data;</li><li>users can choose which properties show on the mobile UI and which are sent to Cloud storage;</li><li>save selected properties for reading data;</li><li>read selected properties from vehicle;</li><li>show selected properties in mobile UI;</li><li>ability to send data to Cloud storage.</li></ul><p>As we mentioned before, we used the ELM-327 car diagnostic interface tool. Here how it works with the application:</p>" +
        "<ul><li>find all available Bluetooth devices;</li><li>choose one named ELM-327 or OBD-II;</li><li>select on which protocol to communicate;</li><li>scan the list of all available car properties;</li><li>choose what you want to be read;</li><li>start scanning;</li><li>data transforms into a readable form</li><li>data displays in the app’s UI and adds the information to the database.</li></ul><p>" +

        "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/zxS2MTxrJVM?ecver=1\" frameborder=\"0\" gesture=\"media\" allow=\"encrypted-media\" allowfullscreen></iframe></p>" +
        "<p>The Car Maintenance project was initiated by the ElifTech team to help developers grow their junior IoT skills in a more creative way than a daily routine. During the project development, the programmers were supported by their experienced colleagues and practiced RESTful API designing, worked with relational databases and deepened their knowledge of React.js and Node.js. Also, they got their first experience with Android Studio, Ionic and TypeScript.</p>" +
        "<p>Moreover, connected cars are an ambitious direction in IoT development. According to IHS Automotive forecasts, there will be 152 million actively connected cars on global roads by 2020. The combination of new car features and aftermarket devices could mean nearly 2 billion connected cars on the world’s roadways by 2025. In addition to cars, kitchen appliances, homes and even heart monitors can be connected to the Internet of Things. The IoT <a href=\"http://static-bii.businessinsider.com/image/5697ecbf771aeabc5e549175/infographic-%20the%20iot%202015_20150114.png%3C/p\">is expected to solve</a> automotive, energy, industrial and healthcare industry-specific challenges with emerging applications and change the way governments, businesses and consumers interact with the physical world.</p>" +
        "<p>We are excited to be pioneers in using the IoT approach in the auto industry. Stay tuned for our updates on implementing Car Maintenance in a car service for testing the idea of the remote diagnosis.</p>",
      backgroundImage: '/data/blogs/blog26/Eliftech_Car-Maintenance_app_cover.jpg',
      mainImage: '/data/blogs/blog26/Eliftech_Car-Maintenance_app_cover.jpg',
      authors: [],
      seo: {
        title: 'ELIFTECH | Experiments | IoT | Car Maintenance application',
        description: "One of our latest experiments was a development of a vehicle descriptive analytics application using IoT technologies. ElifTech Car Maintenance app collects in real time, analyse and accumulate data about the current condition of the vehicle to prevent it from breaking down",
        keywords: 'IoT, Connected car, connected vehicles, descriptive analytics, Car Maintenance, car service, connected car devices, connected cars, bluetooth car connect, connected vehicles, connected cars internet of things, connected car devices, connected car features, descriptive analysis, descriptive analytics, big data, iiot, data, analytics, descriptive analytics maintenance, data analysis, data analysis, data visualization, performance management, supply chain management, data processing,  web development software, software outsourcing, software development, custom software development company, software development outsourcing, ELM 327, Bluetooth, Ionic-native 4, ionic-angular 3.7, cordova-plugins, React.js, socket.io-client, React Materialize, axios, google-maps-react, Backend, Node.js, Express, Sequelize, Socket.IO, Database, PostgreSQL, front-end'
      }
    },
    {
      id: 27,
      url: '27-aws-greengrass',
      "title": "AWS Greengrass: A Reliable and Secure Partner in Industrial IoT",
      "pubDate": "Wed, 27 Dec 2017 12:45:06 +0000",
      category: "blogs",
      rate: '5.0',
      tags: "IIoT, IndustrialIoT, AWS_Greengrass, CloudComputing, Predictive_Maintenance",
      description: "More than 250 years ago, the industrial revolution changed the face of manufacturing. Now, Industry 4.0 is disrupting manufacturing technology through the Internet of Things, machine learning, data science and sensors. By making manufacturing machines intelligent, the Industrial Internet of Things, or IIoT, allows the access and use of data gathered from machines for predictive maintenance, saving companies time and money. The use of IoT in manufacturing also improves operational efficiency since it communicates data more accurately and faster than humans do, leading to impressive business and economic growth.",
      text: "<p>More than 250 years ago, the industrial revolution changed the face of manufacturing. Now, Industry 4.0 is disrupting manufacturing technology through the Internet of Things, machine learning, data science and sensors. By making manufacturing machines intelligent, the Industrial Internet of Things, or IIoT, allows the access and use of data gathered from machines for predictive maintenance, saving companies time and money. The use of IoT in manufacturing also improves operational efficiency since it communicates data more accurately and faster than humans do, leading to impressive business and economic growth</p><p>That is why it’s very important not to lose the data that has been so carefully collected, especially to something as trivial as a failed Internet connection. Therefore, ElifTech and their partner, an expert in cloud-connected Industrial IoT solutions, decided to tackle the problem of data loss by incorporating a new technology from Amazon – AWS Greengrass.</p><h2>What is AWS Greengrass?</h2><p>In December 2016, during the AWS re:Invent conference, AWS CEO Andy Jassy introduced Greengrass. An extension of AWS Cloud Services, AWS Greengrass was developed to create systems of connected devices that communicate with each other and with the cloud quickly and securely and continue doing so even when offline.</p><img src=\"/data/blogs/blog27/aws_greengrass.jpg\" /><p>AWS Greengrass allows IoT devices to be collected into Greengrass Groups. A Group consists of one device having the Greengrass Core code and several devices powered by the AWS IoT Device SDK. The Greengrass Core can be hosted by devices that run Linux and support ARM or x86 architectures and serves as a hub that communicates with other IoT devices. If the Core loses connection to the cloud, devices within the Group will continue to communicate locally.</p><p>The Greengrass Core also allows developers to use the AWS Lambda service to run serverless code across the AWS Cloud and local devices. So, when particular events occur, AWS Lambdas will run in the cloud or locally.</p><p>The key advantage of using AWS Greengrass is its reliability. Because it allows devices in the Greengrass Group to exchange messages offline as well as online, companies can rest assured that connectivity malfunctions will not affect their business. The messages that devices exchange will be safe thanks to a local pub/sub message broker that takes care of inbound and outbound messages if the connection drops.</p><p>Another feature that makes AWS Greengrass stand out is security. Data exchanged within a local network and between the network and the cloud is encrypted and protected by device authentication and authorisation. Even with connectivity issues, your network’s security will not be compromised, and devices will keep communicating securely locally. Don’t worry – AWS Greengrass will take good care of your company’s sensitive data.</p><h2>Using AWS Greengrass in Industrial IoT</h2><p>There could be thousands of connected devices and sensors in factories or plants, but since their processing capacity and memory are often limited, they use cloud services like the AWS Cloud to process, analyse and store data. While this is generally a great solution, sometimes transmitting data to the cloud is impossible, impractical or risky. In circumstances of increased security or connectivity loss, it’s important for the IoT devices to stay connected and perform at least the basic tasks locally. AWS Greengrass was designed to do just that. Its ability to run tasks locally and keep device data in sync is extremely important and necessary for the Industrial Internet of Things.</p><img src=\"/data/blogs/blog27/iiot_aws_greengrass_1.jpg\" /><p>AWS Greengrass brings advanced digital opportunities to the Industrial IoT ecosystem. It allows smart factories to create new software for more secure communication between IoT devices and other equipment without compromising operational safety or being reliant on connectivity. That’s why companies like Nokia, Pentair, Rio Tinto, Enel and Konecranes use AWS Greengrass for Industrial IoT purposes.</p><h2>ElifTech’s Experience with AWS Greengrass</h2><p>ElifTech partnered with an expert in creating complex Industrial IoT solutions based on the AWS IoT platform. Their solutions use data from sensors that measure industrial machine vibrations. This data is sent to the AWS Cloud where it can be properly viewed and analysed. The problem is that the sensor that reads vibration data must be continuously connected to the Internet to transmit data. If the connection is lost, so is the data. This was the issue ElifTech was about to solve.</p><p>Since the partner’s solutions were based on AWS IoT, ElifTech’s software development professionals decided to give the new AWS Greengrass a try. It was the most logical solution for the data loss problem our partner faced. As we said earlier, Greengrass allows connected devices to communicate locally when their Internet connection goes down. Any data generated while the connection was unavailable is accumulated until the connection restores and is then is seamlessly transferred to the cloud without any loss.</p><p>Thanks to the comprehensive documentation and the intuitiveness of the software, it only took the ElifTech team a week to figure out how AWS Greengrass works, learn the basics of the new technology and uncover its potential.</p><img src=\"/data/blogs/blog27/iiot_aws_greengrass_2.jpg\" /><p>To work on the POC, the ElifTech team configured the development and testing environments on workstations and installed Greengrass Software on Raspberry Pi 3. Besides the AWS IoT stack, the team used JavaScript for writing tests and Python to work with Greengrass Lambdas. They used scripts written in JavaScript and ran them on workstations to imitate sensor activity. When the POC needed testing or demonstration, ElifTech ran these scripts that, in turn, sent messages to the Greengrass Core on Raspberry PI. In addition, they created firewall rules on the network router to simulate the offline mode of the system.</p><p>ElifTech has successfully delivered a POC using AWS Greengrass, establishing that the system is useful for solutions that require high levels of security and for which it is therefore impossible to send data to the cloud. The developers did face certain issues with Greengrass since the system is still new and rough around the edges. However, these shortcomings are not critical and are too minor to stop developers from integrating AWS Greengrass into real projects today.</p><img src=\"/data/blogs/blog27/iiot_aws_greengrass_3.jpg\" /><h2>Conclusion</h2><p>AWS Greengrass is the new addition to the AWS IoT family, and it has immense potential in Industrial IoT. If your business needs a quick, secure and trustworthy solution to keep sensitive data inside the local IoT network, Greengrass is the solution for you. If you’re worried that data can be lost from a connectivity malfunction, Greengrass will not let that happen. ElifTech has experimented with this new technology and they absolutely loved it. So did the partner who had their problem of data loss solved with the help of AWS Greengrass and the ElifTech team. Contact ElifTech if you need your custom Industrial Internet of Things (IIoT) solution implemented by professionals.</p>",
      backgroundImage: '/data/blogs/blog27/cover.jpg',
      mainImage: '/data/blogs/blog27/cover.jpg',
      authors: [],
      seo: {
        title: 'ELIFTECH | Blog | AWS Greengrass: A Reliable & Secure Partner in IIoT',
        description: "The use of IoT in manufacturing improves operational efficiency since it communicates data more accurately, faster than humans do, leading to  business and economic growth. So it’s crucial not to lose the data that has been collected. A solution to prevent data loss: a new technology from Amazon – AWS Greengrass",
        keywords: 'AWS Greengrass, AWS IoT, IoT, IIoT, Internet of things, Industrial Internet of things, sensors, predictive maintenance, Industrial IoT, industry 4.0, Cloud Computing, Cloud,  aws greengrass use cases, aws greengrass architecture, aws greengrass case study, aws greengrass demo, 	aws greengrass examples, aws greengrass edge computing, aws greengrass getting started, aws greengrass iot, aws greengrass overview, aws greengrass projects, aws greengrass review, aws greengrass setup, aws greengrass vs iot, iiot solutions, iot sensors, iiot architecture, iiot applications, iot and manufacturing, iot adoption, aws greengrass lambda, custom software development, agile software development, software development services, aws, amazon cloud, aws cloud web development software, software outsourcing, software development, custom software development company, software development outsourcing'
      }
    }
  ]
})

export const mutations = {

}

