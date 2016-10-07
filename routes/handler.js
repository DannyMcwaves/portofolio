// okay, so hopefully, this will be my handler class where i can be able to handle all the incoming
// traffic without any inclusion from anywhere.
// fingers crossed, hope this thing works.

var $ = window.jQuery,
    users = {};
module.exports.handle = function (net) {
    "use strict";
    var reg = /^[A-Za-z0-9]+$/;
    
    net.on("connection", function (socket) {
        
        var name;
        function user(message) {
            socket.write(message);
        }
        function broadcast(message) {
            var i;
            for (i in users) {
                if (i !== name) {
                    users[i].write(name + " " + message + "\n");
                }
            }
        }
        
        socket.setEncoding("utf-8");
        user("PLEASE INPUT A NAME >>>  ");
        
        socket.once("data", function (data) {
            var trim = data.trim();
            
            if (users[trim] === undefined) {
                if (reg.test(trim) === true) {
                    name = trim;
                    users[name] = socket;
                    user("welcome to the chat room \n");
                    broadcast("joined the group");
                    $("div#users article").append("<li class= " + name + "> " + name + "</li>");
                } else {
                    user("NAME NOT VALID\n");
                    socket.end();
                }
            } else {
                user("USER NAME ALREADY EXISTS\n");
                socket.end();
            }
            
        });
        
        socket.on("data", function (data) {
            var i,
                trim = data.trim(),
                command,
                re = /^[\s]*$/;
            if (name !== undefined) {
                if (trim[0] === "/") {
                    command = trim.split("/")[1];
                    if (command === "quit") {
                        broadcast("HAS QUIT THE GROUP");
                        socket.end();
                    } else if (command === "users") {
                        for (i in users) {
                            user(i + "\n");
                        }
                    }
                } else if (trim === name || trim === "") {
                    window.console.log("pass");
                } else if (re.test(trim)) {
                    window.console.log("pass");
                } else {
                    broadcast(">>> " + trim);
                }
                window.console.log(users);
            }
        });
            
        socket.on("end", function () {
            $("li." + name).remove();
            delete users[name];
            window.console.log(users);
        });
    });
};