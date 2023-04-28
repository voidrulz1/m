

"use strict";

require('dotenv').config()

//const fetch = require('node-fetch');
//const Hangbot = require('./hangbot.js')
//const Tesseract = require('tesseract.js');
//const translate = require('@iamtraction/google-translate');

const { Configuration, OpenAIApi } = require("openai");

var FormData = require('form-data');
const request = require('request');
var WebSocket = require("ws");
const fs = require("fs");
const readline = require("readline");
const { triggerAsyncId } = require("async_hooks");
var yt = require("youtube-search-without-api-key");
var Scraper = require("images-scraper");
var urban = require("urban");
var googleTTS = require("google-tts-api");
var gis = require("g-i-s");

const truecallerjs = require('truecallerjs');
const inshorts = require('inshorts-news-api');

//#region 

var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
var __generator =
    (this && this.__generator) ||
    function (thisArg, body) {
        var _ = {
            label: 0,
            sent: function () {
                if (t[0] & 1) throw t[1];
                return t[1];
            },
            trys: [],
            ops: [],
        },
            f,
            y,
            t,
            g;
        return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === "function" &&
            (g[Symbol.iterator] = function () {
                return this;
            }),
            g
        );
        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (
                        ((f = 1),
                            y &&
                            (t =
                                op[0] & 2
                                    ? y["return"]
                                    : op[0]
                                        ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                                        : y.next) &&
                            !(t = t.call(y, op[1])).done)
                    )
                        return t;
                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (
                                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                                (op[0] === 6 || op[0] === 2)
                            ) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
var __spreadArray =
    (this && this.__spreadArray) ||
    function (to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    };

//#endregion

exports.__esModule = true;
exports.Client = void 0;

//#region  other events

//var message = "";
//======================= Random generator ===========================//
function get_random(list) {
    return list[Math.floor(Math.random() * list.length)];
}
function getTimeLeft(timeout) {
    return Math.ceil((timeout._idleStart + timeout._idleTimeout) / 1000 - process.uptime());
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included
}
function rndString(passwordLength) {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
}

//#endregion

globalThis.msgg = "";
globalThis.iscreated = null;
var myid = null;
var slapcounter = 1;
var kisscounter = 1;
var hugCounter = 1;

//exports.__esModule = true;
//exports.Client = void 0;
const axios = require('axios');
const IMG_TYPE_PNG = "image/png";
const IMG_TYPE_JPG = "image/jpeg";
const FILE_UPLOAD_URL = "https://cdn.talkinchat.com/post.php";



function generateString(length) {
    var length = length,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

//#region  variable and imports

var BOT_ID = process.env.BOT_ID;
var BOT_PASSWORD = process.env.BOT_PWD;

var HANDLER_LOGIN = "login";
var HANDLER_LOGIN_EVENT = "login_event";
var HANDLER_ROOM_JOIN = "room_join";
var HANDLER_ROOM_LEAVE = "room_leave";
var HANDLER_CHAT_MESSAGE = "chat_message";
var HANDLER_ROOM_EVENT = "room_event";
var HANDLER_ROOM_ADMIN = "room_admin";
var HANDLER_ROOM_MESSAGE = "room_message";
var HANDLER_PROFILE_OTHER = "profile_other";
var HANDLER_PROFILE_UPDATE = "profile_update";
var TARGET_ROLE_MEMBER = "member";
var TARGET_ROLE_KICK = "kick";
var TARGET_ROLE_OUTCAST = "outcast";
var TARGET_ROLE_NONE = "none";
var TARGET_ROLE_ADMIN = "admin";
var TARGET_ROLE_OWNER = "owner";
var CHANGE_ROLE = "change_role";
var MSG_ID = "message_id";
var ROLE_CHANGED = "role_changed";
var MESSAGE_TYPE;
global.RoomUsers = "";
(function (MESSAGE_TYPE) {
    MESSAGE_TYPE["TEXT"] = "text";
    MESSAGE_TYPE["IMAGE"] = "image";
})(MESSAGE_TYPE || (MESSAGE_TYPE = {}));

var myLove = false;
var invAll = false;
var trinvAll = false;
var myenemy = false;
var isKicked = false;
var getRoomusers = false;
var trComm = false;
var trRoomuserGrabCmplt = false;
var isMemberOnlyRoom = false;
var isLockedRoom = false;
var tempUser = "";
var temptargetRoom = "";
var actorUser = "";
var trInputRoom = "";
var TrRoomsArr = [];
var TrRoomsArrWLM = [];
var TrAllRoomsUsers = [];
var TargetArray = [];
var colorCodesArray = [];
var xBot = "justyou";
var OpenAIkey = process.env.OPENAI_KEY;

var Client = /** @class */ (function () {
    function Client(user, pass) {
        this.URL = process.env.WS_ADDRESS;
        this.webSocket = null;
        this.userName = "";
        this.passWord = "";
        this.roomName = "friends";
        this.tempRoom = "";
        this.ispfpCheck = false;
        this.isProfileCheck = false;
        this.roomImageWC = true;
        this.wcImage = true;
        this.isWc = false;
        this.iswcMode = true;
        this.irArray = [];

        this.vidID = "";
        this.vidTitle = "";
        this.vidTime = "";
        this.vidLink = "";
        this.vidThumbnail = "";
        this.dlink = "";
        this.duration = "";
        this.ytURL = "";
        this.dload320 = "";
        this.uploader = "";
        this.vidToken = "";
        this.vidLinkExpired = "";
        this.vidSize = "";

        this.usersList = [];
        this.videoSearchArray = [];



        this.talkedRecently = new Set();
        // this.myLove = false;
        // this.myenemy= false;
        this.masters = fs.readFileSync("masters.txt").toString().split("\n"); //master list
        this.botMasterId = "mastermind";
        this.wcSettingsMap = new Map();
        this.shareSongMap = new Map();




        this.wcMSgs = ["{username} joined the party.", "{username} is here.", "Welcome, {username}. We hope you brought pizza.", "A wild {username} appeared.", "{username} just landed.", "{username} just slid into the chat.", "{username} just showed up!", "Welcome {username}. Say hi!", "{username} hopped into the chat.", "Everyone welcome {username}!", "Glad you're here, {username}.", "Good to see you, {username}.", "Yay you made it, {username}!", "{username} just joined the chat - glhf!", "{username} just joined. Everyone, look busy!", "{username} just joined. Can I get a heal?", "{username} joined your party.", "{username} joined. You must construct additional pylons.", "Ermagherd. {username} is here.", "Welcome, {username}. Stay awhile and listen.", "Welcome, {username}. We were expecting you ( ͡° ͜ʖ ͡°)", "Welcome, {username}. We hope you brought pizza.", "Welcome {username}. Leave your weapons by the door.", "A wild {username} appeared.", "Swoooosh. {username} just landed.", "Brace yourselves. {username} just joined the chat.", "{username} just joined. Hide your bananas.", "{username} just arrived. Seems OP - please nerf.", "{username} just slid into the chat.", "A {username} has spawned in the chat.", "Big {username} showed up!", "Where’s {username}? In the chat!", "{username} hopped into the chat. Kangaroo!!", "{username} just showed up. Hold my beer.", "Challenger approaching - {username} has appeared!", "It's a bird! It's a plane! Nevermind, it's just {username}.", "It's {username}! Praise the sun! \\\\[T]/", "Never gonna give {username} up. Never gonna let {username} down.", "Ha! {username} has joined! You activated my trap card!", "Cheers, love! {username}'s here!", "Hey! Listen! {username} has joined!", "We've been expecting you {username}", "It's dangerous to go alone, take {username}!", "{username} has joined the chat! It's super effective!", "Cheers, love! {username} is here!", "{username} is here, as the prophecy foretold.", "{username} has arrived. Party's over.", "Ready player {username}", "{username} is here to kick butt and chew bubblegum. And {username} is all out of gum.", "Hello. Is it {username} you're looking for?", "{username} has joined. Stay a while and listen!", "Roses are red, violets are blue, {username} joined this chat with you"];

        //this.wcMSgs = ["{username} Welcome!", "Welcome!\nHave a nice chat {username}.", "{username} Welcome to room. Please have a seat.", "{username} Welcome! Enjoy your stay."];

        this.listEmojis = [
            'You got nothing LOL 🤣', 'You got cookies 🍪🍪',
            'Wow!! You got MysteryBox 🎁\nType OPEN to open the MysteryBox 🎁', 'You got Pizaa 🍕', ' You got 🍻\nCheers 🍻 baby.',
            'You got 🍌\nEat it but dont use it 🤣', 'You got 👙 Bikini.\nNow wear this and dance with me 👯 🤣', 'You got nothing but a piece of 💩', 'I Love You 💘'
        ];


        this.spinSettingsMap = new Map();
        this.recentUsers = [];
        this.user_list = [];
        this.room_list = [];
        this.Troom_list = [];
        this.Proom_list = [];

        this.isWcGreetings = true;
        this.isSpin = false;

        // you can add more list of spins

        this.sL = "en";
        this.userName = user;
        this.passWord = pass;
        var headers = {
            headers: {
                m: this.generateBuildInfo(),
                i: this.keyGen(10),
                //i: "e9a5a82f2405d823",
            },
        };

        this.webSocket = new WebSocket(this.URL, [], JSON.stringify(headers));
        this.webSocket.addEventListener("open", this._onOpen.bind(this));
        this.webSocket.addEventListener("close", this._onClose.bind(this));
        this.webSocket.addEventListener("message", this._onMsg.bind(this));
        this.webSocket.addEventListener("ping", this._onPing.bind(this));


        this.webSocket.addEventListener('error', (event) => {
            try {
                console.log('WebSocket error: ', event);
                this.webSocket.close();
                this.clearAll();
                setTimeout(function () {
                    var client0 = new Client(BOT_ID, BOT_PASSWORD);
                }, 30000);

            }
            catch {
            }
        });



    }

    Client.prototype.clearAll = async function () {
        var tempUser = "";
        var temptargetRoom = "";
        var actorUser = "";
        var trInputRoom = "";
        var TrRoomsArr = [];
        var TrRoomsArrWLM = [];
        var TrAllRoomsUsers = [];
        //publicRoomsArr = [];
        //usersList = [];
        //colorCodesArray = [];
        // this.shareSongMap.clear();
        // this.playedRecently.clear();
        // this.myloveRecently.clear();
        // this.myenemyRecently.clear();
        // this.sharedRecently.clear();
        // this.playedRoomRecently.clear();
        // this.creatorCommandsRecently.clear();

    };

    Client.prototype._log = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        //console.warn.apply(console, __spreadArray(["=========>>"], msg));
    };
    Client.prototype._onClose = async function (close) {
        this._log("ws: Socket closed");
        this.clearAll();
        setTimeout(function () {
            Client.prototype.login();
        }, 10000);
    };
    Client.prototype._onPing = function (ping) {
        console.log("ping")
        this._log(ping + " pinggggggggggggggggggggggggggggggggg");
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
            console.log("ping");
        };
    };
    Client.prototype._onOpen = async function (open) {
        try {
            this._log("ws: Socket opened");
            this.login();
            this.webSocket.pingInterval = setInterval(
                () => this.webSocket.ping("ping"), 1000 * 120
            );

        }
        catch {

        }


    };
    Client.prototype._onMsg = async function (payload) {
        //console.log(payload);
        if (payload != null) {
            this._log(payload.data);
            var parsedData = JSON.parse(payload.data);
            await this._handleParsedData(parsedData);
        }
    };


    Client.prototype.banIP = async function (target, room) {

        var outcastPayload = {
            handler: HANDLER_ROOM_ADMIN,
            id: this.keyGen(10, true),
            type: "ban_ip",
            room: room,
            t_username: target,
            t_role: "none"
        };
        //console.log("                     ban user");
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify(outcastPayload));
        }

    };

    Client.prototype._handleParsedData = async function (parsedData) {
        //console.log(parsedData);
        var _this = this;
        if (parsedData.handler == HANDLER_LOGIN_EVENT) {
            if (parsedData.type == "success") {
                var outcastPayload1 = {
                    handler: "profile_update",
                    id: this.keyGen(10, true),
                    type: "verify_uid",
                    value: "hkckTbmsyDbzo4uBkwUHhWSd4GC3",
                };
                if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
                    this.webSocket.send(JSON.stringify(outcastPayload1));
                }
                var outcastPayload2 = {
                    handler: "register_fcm2",
                    id: this.keyGen(10, true),
                    type: "fttAyoGFQ_i4FQK_uRyL8x:APA91bHkvptJeynSVhIzMdQ0zuhnhcWyGEggNpsbWp8x9omYSOqwb-RzKa-0Cudu4ksBue064JnUMI9saQn-nghHZHShIqUNZWoNP4lr_Jq9ERXaR7iLDeWch9FOuxpTyvhJ515dMuj_",
                };
                if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
                    this.webSocket.send(JSON.stringify(outcastPayload2));
                }

                this.joinRoom("friends");
                //this.joinRoom("cinta");
                //this.joinRoom("infinity")
                //this.grantNone("xbot", "friends");
                setTimeout(() => {
                    //this.banIP("xbot", "friends");
                }, 3000);
                //this.banXBot();


                //this.joinRoom("englishgirls");

                await this.getColorCodes();
                //await this.checkActivity();
                //await this.register();
            }
        }
        if (parsedData.handler == "chat_message" && parsedData.type == "text") {
            var msgBody1 = parsedData.body;
            if (parsedData.from == "merchant") {
                this.setAccountColor();
                this.sendRoomMsg(this.tempRoom, parsedData.body);

            }
            if (parsedData.from == "admin") {
                this.setAccountColor();
                this.sendRoomMsg(this.tempRoom, "Admin Message :\n\n" + parsedData.body);
            }
            if (parsedData.from == xBot && msgBody1.includes("is online") || msgBody1.includes("is offline")) {
                this.setAccountColor();
                var msgBody = parsedData.body;
                var newMSg = msgBody.replace("is online", "is online at this moment.").replace("is offline", "is offline at this moment.");
                this.sendRoomMsg(this.tempRoom, newMSg);
            }
            if (parsedData.from == xBot && msgBody1.startsWith("1.")) {
                this.setAccountColor();
                var msgBody = parsedData.body;
                console.log(msgBody);
                var newMSg = msgBody.replace(/^\d+./, "");
                //var newMSg = msgBody.replace("is online", "is online at this moment.").replace("is offline", "is offline at this moment.");
                this.sendRoomMsg(this.tempRoom, newMSg);
            }
        }
        if (parsedData.handler == "store" && parsedData.type == "color_products_list") {
            {

                const colors = parsedData.colors;
                for (var i = 0; i < colors.length; i++) {
                    colorCodesArray.push(colors[i].color_id);
                }

            }
        }
        if (parsedData.handler == HANDLER_ROOM_EVENT) {

            if (parsedData.type == "room_should_joined" && parsedData.name == this.roomName) {
                this.joinRoom(this.roomName);
            }

            if (parsedData.type == "text") {
                var userID = parsedData.user_id;
                var from = parsedData.from;
                var message = parsedData.body;
                var room = parsedData.room;
                this.processGroupChatMessage(from, message, room);
            }
            if (parsedData.type == "user_joined") {

                var userID = parsedData.user_id;
                this.tempRoom = parsedData.name;
                var user = parsedData.username;
                var group = parsedData.name;
                var role = parsedData.role;
                if (user.length > 20) {
                    //this.banUser(user, this.tempRoom)
                }

                // logger = fs.createWriteStream('users.txt', {
                //   flags: 'a' // 'a' means appending (old data will be preserved)
                // })
                // var writeLine = (line) => logger.write(`\n${line}`);
                // writeLine(user);
                // logger.close();

                this.ispfpCheck = false;
                this.isProfileCheck = false;

                if (this.isWc == true) {
                    if (this.roomImageWC == true) {
                        if (this.wcSettingsMap.get(group) == true) {
                            this.fetchUserProfile(user, group);
                        }
                    }
                    if (this.roomImageWC == false) {
                        if (this.wcSettingsMap.get(group) == true) {
                            this.setAccountColor();
                            var rndwlc = this.wcMSgs[Math.floor(Math.random() * this.wcMSgs.length)];
                            rndwlc = rndwlc.replace("{username}", user);
                            this.sendRoomMsg(this.tempRoom, rndwlc.replace("{username}", user));
                        }
                    }

                }


            }

            if (parsedData.type == "user_left") {

                var userID = parsedData.user_id;
                this.tempRoom = parsedData.name;
                var user = parsedData.username;
                var group = parsedData.name;
                var role = parsedData.role;



                this.recentUsers.unshift(user + "@" + new Date());
                this.recentUsers.pop();
                this.recentUsers.length = 100;


            }



            if (parsedData.type == "you_joined") {
                // while (true) {
                //     this.sendRoomMsg("friends", this.keyGen(50));
                //     await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](100);
                // }

                var room_1 = parsedData.name;
                this.wcSettingsMap.set(room_1, this.isWcGreetings);
                this.spinSettingsMap.set(room_1, this.isSpin);
                if (isKicked == true) {
                    this.setAccountColor();
                    this.sendRoomMsg(room_1, actorUser + " You are a gAy bruh!");
                    isKicked = false;
                    actorUser = "";
                } else {
                    this.setAccountColor();
                    //this.sendRoomMsg(room_1, "Running");
                }
                if (this.timeoutInterval != undefined) {
                    clearInterval(this.timeoutInterval);
                }
                // this.timeoutInterval = setInterval(function() {
                //   if (
                //     _this.webSocket != null &&
                //     _this.webSocket.readyState == WebSocket.OPEN
                //   ) {
                //     var groupMsgPayload = {
                //       handler: HANDLER_ROOM_MESSAGE,
                //       id: _this.keyGen(10, true),
                //       room: _this.roomName,
                //       type: MESSAGE_TYPE.TEXT,
                //       url: "",
                //       body: get_random(emojis),
                //       length: "",
                //     };
                //     _this.webSocket.send(JSON.stringify(groupMsgPayload));
                //   } //
                // }, 1500000);

            }
            if (parsedData.type == "room_unsufficient_previlige") {
                this.setAccountColor();
                var room_2 = parsedData.name;
                this.sendRoomMsg(room_2, "❌ Insufficient Privileges.");
            }
            if (parsedData.type == "room_membership_required") {
                isMemberOnlyRoom = true;
                this.setAccountColor();
                //console.log(" vvvvvvvvvvvvvvvvvvvvvv" + parsedData.name);
                var room_2 = parsedData.name; //memOnlyRoom Name
                this.sendRoomMsg(this.tempRoom, "❌ Insufficient Privileges!!\nMembership required to enter the room");
            }
            if (parsedData.type == "room_needs_password") {
                this.setAccountColor();
                isLockedRoom = true;
                var room_2 = parsedData.name; //lockedRoom Name
                this.sendRoomMsg(this.tempRoom, "❌ Insufficient Privileges!!\nRoom Password required to enter the room");
            }

            if (parsedData.type == ROLE_CHANGED) {
                var room_3 = parsedData.name;
                var userName_1 = parsedData.t_username;
                var newRole = parsedData.new_role;
                //this.sendRoomMsg(room, "✅ " + userName + " is now " + newRole + ".");
            }
        }
        function removeTags(str) {
            if ((str === null) || (str === ''))
                return false;
            else
                str = str.toString();
            return str.replace(/(<([^>]+)>)/ig, '');
        }
        if (parsedData.handler == HANDLER_PROFILE_OTHER) {
            //console.log(parsedData);
            var userId = parsedData.user_id;
            var userName = parsedData.type;
            var gender = parsedData.gender;
            var genderStr = "";
            if (gender == 1) {
                genderStr = "Male";
            } else if (gender == 2) {
                genderStr = "Female";
            } else {
                genderStr = "Not defined";
            }
            var statusMsg = parsedData.status;
            var friendsCount = parsedData.roster_count;
            var regDate = parsedData.reg_date;
            var merchant = parsedData.is_merchant;
            var views = parsedData.views;
            var sent_gifts = parsedData.sent_gifts;
            var received_gifts = parsedData.received_gifts;

            var merchantStr = "";
            if (merchant == 0) {
                merchantStr = "No";
            } else if (merchant == 1) {
                merchantStr = "Yes";
            } else {
                merchantStr = "Not defined";
            }
            var agent = parsedData.is_agent;
            var agentStr = "";
            if (agent == 0) {
                agentStr = "No";
            } else if (agent == 1) {
                agentStr = "Yes";
            } else {
                agentStr = "Not defined";
            }
            var country = parsedData.country;
            var photo = parsedData.photo_url;
            if (
                this.webSocket != null &&
                this.webSocket.readyState == WebSocket.OPEN
            ) {
                if (userId == undefined) {
                    this.setAccountColor();
                    this.sendRoomMsg(this.tempRoom, "Profile not found.");
                }
                else {
                    var msg =
                        "ID : " +
                        userId +
                        "\n" +
                        "Username : " +
                        userName +
                        "\n" +
                        "Status : " +
                        removeTags(statusMsg) +
                        "\n" +
                        "Gender : " +
                        genderStr +
                        "\n" +
                        "Birthdate : " +
                        parsedData.birthdate +
                        "\n" +
                        "Country : " +
                        country +
                        "\n" +
                        "Friends : " +
                        friendsCount +
                        "\n" +
                        "Merchant : " +
                        merchantStr +
                        "\n" +
                        "Agent : " +
                        agentStr +
                        "\n" + "Received gifts : " + received_gifts + "\n" + "Sent gifts : " + sent_gifts + "\n" + "Views : " + views + "\n" +
                        "User since : " +
                        regDate + "\n" +
                        "PFP URL : " +
                        photo;


                    //if (this.tempRoom != null && this.tempRoom.length > 0) {

                    if (this.roomImageWC == true) {
                        if (photo != null && photo.length > 0) {
                            this.setAccountColor();
                            this.sendRoomMsg(this.tempRoom, "", photo);
                        } else {
                        }
                        var rndwlc = this.wcMSgs[Math.floor(Math.random() * this.wcMSgs.length)];
                        rndwlc = rndwlc.replace("{username}", userName);
                        this.setAccountColor();
                        this.sendRoomMsg(this.tempRoom, rndwlc.replace("{username}", userName));
                        if (this.isWc == false) {
                            this.roomImageWC = false;
                        }
                    }

                    if (this.ispfpCheck == true) {
                        if (photo != null && photo.length > 0) {
                            this.setAccountColor();
                            this.sendRoomMsg(this.tempRoom, "", photo);
                        } else {
                            this.setAccountColor();
                            this.sendRoomMsg(this.tempRoom, "PFP not found.");
                        }
                        this.ispfpCheck = false;
                    }
                    if (this.isProfileCheck == true) {
                        this.setAccountColor();
                        this.sendRoomMsg(this.tempRoom, msg);
                        if (photo != null && photo.length > 0) {
                            this.setAccountColor();
                            this.sendRoomMsg(this.tempRoom, "", photo);
                        } else {
                        }
                        this.isProfileCheck = false;
                    }


                }
            }
        }
        ///////////////////////////////////////  GET TRENDING AND POPULAR ROOMS
        if (parsedData.handler == "room_info") {
            if (parsedData.type == "trending_rooms") {
                var trRooms = parsedData.rooms;
                var msg_1 = "";
                TrRoomsArr = [];
                TrRoomsArrWLM = [];

                var noDupe = [];
                while (this.Troom_list.length > 0) {
                    this.Troom_list.pop();
                }
                TrRoomsArr = Array.from(new Set(trRooms));
                for (var i = 0; i < TrRoomsArr.length; i++) {
                    var suffix = "";
                    var Locksuffix = "";
                    var Membersuffix = "";
                    if (i === TrRoomsArr.length - 1) {
                    } else {
                        suffix = "\n";

                        if (TrRoomsArr[i].password_protected == "1") {
                            Locksuffix = "[L]";
                        } else {
                            Locksuffix = "";
                        }
                        if (TrRoomsArr[i].members_only == "1") {
                            Membersuffix = "[M]";
                        } else {
                            Membersuffix = "";
                        }
                        if (
                            TrRoomsArr[i].members_only != "1" &&
                            TrRoomsArr[i].password_protected != "1"
                        ) {
                            TrRoomsArrWLM.push(TrRoomsArr[i]);
                        }
                    }

                    msg_1 +=
                        i +
                        ". " +
                        TrRoomsArr[i].name +
                        " (" +
                        TrRoomsArr[i].users_count +
                        "/" +
                        TrRoomsArr[i].max_users +
                        ") " +
                        Membersuffix +
                        " " +
                        Locksuffix +
                        suffix;
                }

                this.setAccountColor();
                this.sendRoomMsg(
                    this.tempRoom,
                    "Trending Rooms : " + TrRoomsArr.length + "\n\n" + msg_1
                );
                this.setAccountColor();
                this.sendRoomMsg(
                    this.tempRoom,
                    "Type TRU ROOMNUMBER to get room users.\nType TRI ROOMNUMBER to invite room users.\nType TRIA to invite all trending room's users"
                );

            }

            if (parsedData.type == "public_rooms") {
                var trRooms = parsedData.rooms;
                var msg_2 = "";
                //PrRoomsArr = [];
                var noDupe = [];

                for (var i = 0; i < trRooms.length; i++) {
                    var suffix = "";
                    var Locksuffix = "";
                    var Membersuffix = "";
                    if (i === trRooms.length - 1) {
                    } else {
                        suffix = "\n";

                        if (trRooms[i].password_protected == "1") {
                            Locksuffix = "[L]";
                        } else {
                            Locksuffix = "";
                        }
                        if (trRooms[i].members_only == "1") {
                            Membersuffix = "[M]";
                        } else {
                            Membersuffix = "";
                        }
                    }

                    msg_2 +=
                        i +
                        ". " +
                        trRooms[i].name +
                        " (" +
                        trRooms[i].users_count +
                        "/" +
                        trRooms[i].max_users +
                        ") " +
                        Membersuffix +
                        " " +
                        Locksuffix +
                        suffix;
                }
                this.setAccountColor();
                this.sendRoomMsg(this.tempRoom, "Public Rooms :\n\n" + msg_1);

                this.setAccountColor();
                this.sendRoomMsg(
                    this.tempRoom,
                    "Type PRU ROOMNUMBER to get room users.\nType PRI ROOMNUMBER to invite room users.\nType PRIA to invite all Public Room's Users"
                );
            }
        }
        ///////////////////////////////////////////////////////////////////////////////
        if (parsedData.handler == HANDLER_ROOM_ADMIN) {
            if (parsedData.type == "occupants_list") {
                //this.tempRoom = parsedData.room;
                var msg_1 = "";
                var UsersArr = [];
                var noDupe = [];
                var noDupe1 = [];

                while (this.user_list.length > 0) {
                    this.user_list.pop();
                }

                for (var i = 0; i < parsedData.occupants.length; i++) {
                    this.user_list.push(parsedData.occupants[i].username);
                    var suffix = "";
                    if (i === parsedData.occupants.length - 1) {
                    } else {
                        suffix = "\n";
                    }

                    msg_1 += i + ". " + parsedData.occupants[i].username + suffix;
                    UsersArr.push(parsedData.occupants[i].username);
                    noDupe = Array.from(new Set(UsersArr));
                    if (trinvAll == true) {
                        TrAllRoomsUsers.push(parsedData.occupants[i].username);
                    }
                }

                if (msg_1.length > 0) {
                    if (invAll == true) {
                        var allUsers = "";
                        for (var i = 0; i < noDupe.length; i++) {
                            allUsers += i + ". " + noDupe[i] + "\n";
                        }
                        this.setAccountColor();
                        this.sendRoomMsg(
                            this.tempRoom,
                            "Room name : " +
                            trInputRoom +
                            "\nTotal users : " +
                            UsersArr.length +
                            "\n\n" +
                            allUsers
                        );
                        await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](1000);
                        this.setAccountColor();
                        this.sendRoomMsg(this.tempRoom, "Inviting all users..");
                        await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](1000);
                        //wait(1000);
                        for (var i = 0; i < UsersArr.length; i++) {
                            var arabic = /[\u0600-\u06FF]/;

                            if (arabic.test(UsersArr[i]) == true) {
                                this.sendPvtMsg(
                                    UsersArr[i],
                                    "مرحبًا " +
                                    UsersArr[i] +
                                    ",\n" +
                                    "لقد تمت دعوتك إلى الغرفة: " +
                                    this.tempRoom +
                                    "😍😍 تعال لنحصل على بعض المرح ht" +
                                    "- بدعوة من" + +
                                    TargetArray[1]
                                );
                            }
                            else {
                                this.sendPvtMsg(

                                    UsersArr[i],
                                    "Hello " +
                                    UsersArr[i] +
                                    ",\n" +
                                    "You've been invited to the room : " +
                                    this.tempRoom +
                                    "\nCome let's have some fun 😍😍 \n\n" +
                                    "- Invited by " +
                                    TargetArray[1]
                                );
                            }
                            await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](
                                1000
                            );
                            // wait(1000);
                        }

                        await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](1000);
                        this.setAccountColor();
                        this.sendRoomMsg(
                            this.tempRoom,
                            "Task has been completed. (" + trInputRoom + ")"
                        );
                        invAll = false;
                        tempUser = "";
                        UsersArr = [];
                    }

                    else if (trinvAll == true && trRoomuserGrabCmplt == true) {
                        noDupe1 = Array.from(new Set(TrAllRoomsUsers));
                        this.setAccountColor();
                        this.sendRoomMsg(
                            this.tempRoom,
                            "Total " + noDupe1.length + " users found!" +
                            "\nInviting all users.."
                        );
                        await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](5000);
                        for (var i = 0; i < noDupe1.length; i++) {
                            this.sendPvtMsg(
                                noDupe1[i],
                                "Hello " +
                                noDupe1[i] +
                                ",\n" +
                                "You've been invited to the room : " +
                                this.tempRoom +
                                "\nCome let's have some fun 😍😍 \n\n" +
                                "- Invited by " +
                                TargetArray[0]
                            );
                            await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](
                                1000
                            );
                            // wait(1000);
                        }
                        await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](1000);
                        this.setAccountColor();
                        this.sendRoomMsg(
                            this.tempRoom,
                            "Task has been completed. (" + noDupe1.length + ")"
                        );
                        trRoomuserGrabCmplt = false;
                        trinvAll = false;
                        tempUser = "";
                        UsersArr = [];
                    }

                    else if (myLove == true) {
                        var rndUser1 =
                            UsersArr[Math.floor(Math.random() * UsersArr.length)];
                        if (rndUser1 == tempUser) {
                            var rndUser1 =
                                UsersArr[Math.floor(Math.random() * UsersArr.length)];
                        }
                        this.setAccountColor();
                        this.sendRoomMsg(
                            this.tempRoom,
                            "Hi " + tempUser + " Your Love ❤️ is : " + rndUser1
                        );
                        myLove = false;
                        tempUser = "";
                        UsersArr = [];
                    }

                    else if (myenemy == true) {
                        var rndUser1 =
                            UsersArr[Math.floor(Math.random() * UsersArr.length)];
                        if (rndUser1 == tempUser) {
                            var rndUser1 =
                                UsersArr[Math.floor(Math.random() * UsersArr.length)];
                        }
                        this.setAccountColor();
                        this.sendRoomMsg(
                            this.tempRoom,
                            "Hi " + tempUser + " Your Enemy is  👿 : " + rndUser1
                        );

                        myenemy = false;
                        tempUser = "";
                        UsersArr = [];
                    }

                    else if (getRoomusers == true) {
                        // if (truComm == true) {
                        // }
                        this.setAccountColor();
                        this.sendRoomMsg(
                            this.tempRoom,
                            "Room Name : " +
                            this.tempRoom +
                            "\n" +
                            "Room Users : " +
                            UsersArr.length +
                            "\n\n" +
                            msg_1
                        );
                        // this.sendRoomMsg(
                        //   this.roomName,
                        //   "Type I USERNUMBER to invite the user."
                        // );

                        RoomUsers = msg_1;
                        getRoomusers = false;
                    }

                    else {
                        if (msg_1.length > 0) {

                            var UsersArr1 = [];
                            var noDupe1 = [];
                            var msg_2 = "";
                            for (var i = 0; i < parsedData.occupants.length; i++) {

                                var suffix = "";
                                if (i === parsedData.occupants.length - 1) {
                                } else {
                                    suffix = "\n";
                                }
                                UsersArr1.push(parsedData.occupants[i].username);
                                noDupe1 = Array.from(new Set(UsersArr1));
                                msg_2 += i + ". " + parsedData.occupants[i].username + suffix;
                            }
                            this.setAccountColor();
                            this.sendRoomMsg(parsedData.room, msg_2);





                        }
                    }


                }

            }
        }
        //console.log(parsedData);
        if (parsedData.handler == "room_event") {
            if (
                parsedData.type == "your_role_changed" &&
                parsedData.new_role == "kicked"
            ) {
                isKicked = true;
                actorUser = parsedData.actor;

                this.joinRoom(parsedData.name);
            }
        }
        ///Check online status
        if (parsedData.handler == "last_activity") {
            this.sendRoomMsg(this.roomName, JSON.stringify(parsedData));
            console.log(parsedData);
        }

    };

    //#region  ROOM KICK BAN MEMBER ADMIN OWNER
    Client.prototype.grantAdmin = function (targetId, roomName) {
        var adminPayload = {
            handler: HANDLER_ROOM_ADMIN,
            id: this.keyGen(10, true),
            type: CHANGE_ROLE,
            room: roomName,
            t_username: targetId,
            t_role: TARGET_ROLE_ADMIN,
        };
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify(adminPayload));
        }
    };
    Client.prototype.grantOwner = function (targetId, roomName) {
        var ownerPayload = {
            handler: HANDLER_ROOM_ADMIN,
            id: this.keyGen(10, true),
            type: CHANGE_ROLE,
            room: roomName,
            t_username: targetId,
            t_role: TARGET_ROLE_OWNER,
        };
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify(ownerPayload));
        }
    };
    Client.prototype.grantMember = function (targetId, roomName) {
        var memPayload = {
            handler: HANDLER_ROOM_ADMIN,
            id: this.keyGen(10, true),
            type: CHANGE_ROLE,
            room: roomName,
            t_username: targetId,
            t_role: TARGET_ROLE_MEMBER,
        };
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify(memPayload));
        }
    };
    Client.prototype.banUser = function (targetId, roomName) {
        var outcastPayload = {
            handler: HANDLER_ROOM_ADMIN,
            id: this.keyGen(10, true),
            type: CHANGE_ROLE,
            room: roomName,
            t_username: targetId,
            t_role: TARGET_ROLE_OUTCAST,
        };
        //console.log("                     ban user");
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify(outcastPayload));
        }
    };
    Client.prototype.grantNone = function (targetId, roomName) {
        var nonePayload = {
            handler: HANDLER_ROOM_ADMIN,
            id: this.keyGen(10, true),
            type: CHANGE_ROLE,
            room: roomName,
            t_username: targetId,
            t_role: TARGET_ROLE_NONE,
        };
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify(nonePayload));
        }
    };

    var prompt = `Queen is a chatbot created by Aryan that talks like Human and she is girlfriend of Aryan, Queen and Aryan is going to marry on February 2nd 2024, Aryan is going to die in few months, he has some health problems. Honey is a girl with cold attitude. Sangya is a girl and she wants to be A teacher. Yuvika is a girl and good friend of Aryan, Yuvika's pet name is Kiwicrush. Skyfall is a girl and friend of Yuvika, who like to eat Biriyani and watch Netflix, she can also cook delicious biriyani. Anthelios is a guy who loves chat online, He can chat for whole night, He is a chats like parrot, He never sleeps so soon he will turn into a zombie.
`

    var prompt2 = `I want you to act like god shree krishna.
  `

    Client.prototype.openAICompletion = async function (msg) {
        try {
            console.log("openAICompletion")
            const { Configuration, OpenAIApi } = require("openai");
            const configuration = new Configuration({
                apiKey: OpenAIkey,
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                // model: 'gpt-3.5-turbo',
                prompt: prompt + msg,
                temperature: 0.5,
                max_tokens: 750,
                top_p: 1.0,
                frequency_penalty: 0.5,
                presence_penalty: 0.0,
            });
            console.log(response.data)
            var res = response.data.choices[0].text;
            if (res.startsWith("\n\n") || res.startsWith("\n\n\n")) {
                res = res.replace("\n\n", "").replace("\n\n\n", "");
            }
            var res2 = res.slice(0, 1850);
            this.sendRoomMsg(this.tempRoom, res2);

        } catch (error) { }

    };

    Client.prototype.openAIModeration = async function (msg) {

        try {
            console.log("in moderation");
            const { Configuration, OpenAIApi } = require("openai");

            const configuration = new Configuration({
                apiKey: OpenAIkey,
            });

            const openai = new OpenAIApi(configuration);

            const response = await openai.createModeration({
                input: msg,
            });

            var category = response.data.results[0].categories;
            var category_scores = response.data.results[0].category_scores;
            var flagged = response.data.results[0].flagged;
            var hate = category["hate"]
            var hate2 = category_scores["hate"]
            var hateThreatning = category["hate/threatening"]
            var hateThreatning2 = category_scores["hate/threatening"]
            var selfharm = category["self-harm"]
            var selfharm2 = category_scores["self-harm"]
            var sexual = category["sexual"]
            var sexual2 = category_scores["sexual"]
            var sexualMminors = category["sexual/minors"]
            var sexualMminors2 = category_scores["sexual/minors"]
            var violence = category["violence"]
            var violence2 = category_scores["violence"]
            var violenceGraphic = category["violence/graphic"]
            var violenceGraphic2 = category_scores["violence/graphic"]
            var rslt = `Message : ${msg},\nResult : \n1. Hate : ${hate} (${hate2})\n2. Hate/threatning : ${hateThreatning} (${hateThreatning2})\n3. Self harm : ${selfharm} (${selfharm2})\n4. Sexal : ${sexual} (${sexual2})\n5. Sexual/minors : ${sexualMminors} (${sexualMminors2})\n6. Violence : ${violence} (${violence2})\n7. Violence/graphic : ${violenceGraphic} (${violenceGraphic2})\n\n- Flagged : ${flagged}`

            this.sendRoomMsg(this.tempRoom, rslt);
        }
        catch { }
    };

    Client.prototype.openAIChatCompletion = async function (msg) {
        try {
            console.log("in openAIChatCompletion")
            const { Configuration, OpenAIApi } = require("openai");

            const configuration = new Configuration({
                apiKey: OpenAIkey,
            });
            const openai = new OpenAIApi(configuration);

            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo-0301",
                messages: [{ role: "user", content: msg }],
            });
            res = completion.data.choices[0].message.content;
            if (res.startsWith("\n\n")) {
                res = res.replace("\n\n", "");
            }
            var res2 = res.slice(0, 1850);
            this.sendRoomMsg(this.tempRoom, res2);

        } catch (error) { }

    };

    //#endregion

    Client.prototype.sendText = async function (room, str) {
        await sharp({
            text: {
                text: str,
                width: 400, // max width
                height: 300 // max height
            }
        }).toFile(__dirname + "/img.png");

        this.sendRoomMsg(room, "", "https://friends.itztej8.repl.co/img.png", "");
    };



    Client.prototype.numLookup = async function (countryCode, Number, room) {
        try {

            var Number2 = parseInt(Number);
            var countryCode2 = countryCode.toUpperCase();
            var searchData = {
                number: Number2,
                countryCode: countryCode2,
                installationId: "a2i0l--cHUHZV-GF2mYeFLn4SNg6JDg5iBlgjU-q5imZO9UvDJe5HPU0S6bIUazC",
                output: "JSON"
            }
            var sn = truecallerjs.searchNumber(searchData);
            var response = await sn;
            console.log(response)
            var name = response.data[0].name;
            var altName = response.data[0].altName;
            var gender = response.data[0].gender;
            var about = response.data[0].about;
            var image = response.data[0].image;
            var e164Format = response.data[0].phones[0].e164Format;
            var numberType = response.data[0].phones[0].numberType;
            var carrier = response.data[0].phones[0].carrier;
            var address = response.data[0].addresses[0].address;
            var street = response.data[0].addresses[0].address;
            var zipCode = response.data[0].addresses[0].zipCode;
            var city = response.data[0].addresses[0].city;
            var countryCode = response.data[0].addresses[0].countryCode;

            var trueData = `Name : ${name} (${altName})
Gender : ${gender}
About : ${about}
Number : ${e164Format} (${numberType} - ${carrier})
Address : ${address}
Street : ${street}
Zip code : ${zipCode}
City : ${city}
CountryCode : ${countryCode}`


            this.sendRoomMsg(room, trueData);

            console.log(image)
            if (image != undefined) {
                this.sendRoomMsg(room, "", image, "");
            }

        } catch (error) {
            this.sendRoomMsg(room, "Limit reached!!\nPlease try again later.");
        }
    }

    var all = [];
    var national = [];
    var business = [];
    var sports = [];
    var world = [];
    var politics = [];
    var technology = [];
    var startup = [];
    var entertainment = [];
    var miscellaneous = [];
    var unusual = [];
    var science = [];
    var automobile = [];

    var allOffset = "";
    var nationalOffset = "";
    var businessOffset = "";
    var sportsOffset = "";
    var worldOffset = "";
    var politicsOffset = "";
    var technologyOffset = "";
    var startupOffset = "";
    var entertainmentOffset = "";
    var miscellaneousOffset = "";
    var unusualOffset = "";
    var scienceOffset = "";
    var automobileOffset = "";


    //sendNews("all");

    const boldSansCharMap = { "0": "𝟬", "1": "𝟭", "2": "𝟮", "3": "𝟯", "4": "𝟰", "5": "𝟱", "6": "𝟲", "7": "𝟳", "8": "𝟴", "9": "𝟵", "a": "𝗮", "b": "𝗯", "c": "𝗰", "d": "𝗱", "e": "𝗲", "f": "𝗳", "g": "𝗴", "h": "𝗵", "i": "𝗶", "j": "𝗷", "k": "𝗸", "l": "𝗹", "m": "𝗺", "n": "𝗻", "o": "𝗼", "p": "𝗽", "q": "𝗾", "r": "𝗿", "s": "𝘀", "t": "𝘁", "u": "𝘂", "v": "𝘃", "w": "𝘄", "x": "𝘅", "y": "𝘆", "z": "𝘇", "A": "𝗔", "B": "𝗕", "C": "𝗖", "D": "𝗗", "E": "𝗘", "F": "𝗙", "G": "𝗚", "H": "𝗛", "I": "𝗜", "J": "𝗝", "K": "𝗞", "L": "𝗟", "M": "𝗠", "N": "𝗡", "O": "𝗢", "P": "𝗣", "Q": "𝗤", "R": "𝗥", "S": "𝗦", "T": "𝗧", "U": "𝗨", "V": "𝗩", "W": "𝗪", "X": "𝗫", "Y": "𝗬", "Z": "𝗭" };

    Client.prototype.boldText = async function (map, text) {

        let out = "";
        for (let c of text.split("")) {
            if (map[c] !== undefined) out += map[c];
            else if (map[c.toLowerCase()] !== undefined) out += map[c.toLowerCase()];
            else out += c;
        }
        return out;

    }

    Client.prototype.sendNews = async function (category) {

        if (category == "") {
            if (0 < all.length) {
                var title = all[0].title;
                var image = all[0].image;
                var content = all[0].content;
                var postedAt = all[0].postedAt;
                var readMore = all[0].readMore;
                var sepr = "                                   ";
                var allLength = (all.length - 1).toString();

                var finalText = await this.boldText(boldSansCharMap, title);
                var news = `${finalText}\n- ${postedAt} (${allLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                this.sendRoomMsg(this.tempRoom, "", image);
                this.sendRoomMsg(this.tempRoom, news);
                all.shift();

            }
            else {
                this.sendRoomMsg(this.tempRoom, "Refreshing...");
                //await this.getNews("");
                console.log(allOffset)
                await this.getNextNews("", allOffset);
                setTimeout(async () => {
                    var title = all[0].title;
                    var image = all[0].image;
                    var content = all[0].content;
                    var postedAt = all[0].postedAt;
                    var readMore = all[0].readMore;
                    var sepr = "                                   ";
                    var allLength = (all.length - 1).toString();

                    var finalText = await this.boldText(boldSansCharMap, title);
                    var news = `${finalText}\n- ${postedAt} (${allLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                    this.sendRoomMsg(this.tempRoom, "", image);
                    this.sendRoomMsg(this.tempRoom, news);
                    all.shift();

                }, 3000);
            }
        }
        else if (category == "national") {
            if (0 < national.length) {
                var title = national[0].title;
                var image = national[0].image;
                var content = national[0].content;
                var postedAt = national[0].postedAt;
                var readMore = national[0].readMore;
                var sepr = "                                   ";
                var nationalLength = (national.length - 1).toString();

                var finalText = await this.boldText(boldSansCharMap, title);
                var news = `${finalText}\n- ${postedAt} (${nationalLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                this.sendRoomMsg(this.tempRoom, "", image);
                this.sendRoomMsg(this.tempRoom, news);
                national.shift();

            }
            else {
                this.sendRoomMsg(this.tempRoom, "Refreshing...");
                //await this.getNews("");
                console.log(nationalOffset)
                await this.getNextNews("national", nationalOffset);
                setTimeout(async () => {
                    var title = national[0].title;
                    var image = national[0].image;
                    var content = national[0].content;
                    var postedAt = national[0].postedAt;
                    var readMore = national[0].readMore;
                    var sepr = "                                   ";
                    var nationalLength = (national.length - 1).toString();

                    var finalText = await this.boldText(boldSansCharMap, title);
                    var news = `${finalText}\n- ${postedAt} (${nationalLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                    this.sendRoomMsg(this.tempRoom, "", image);
                    this.sendRoomMsg(this.tempRoom, news);
                    national.shift();

                }, 3000);
            }
        }
        else if (category == "business") {
            if (0 < business.length) {
                var title = business[0].title;
                var image = business[0].image;
                var content = business[0].content;
                var postedAt = business[0].postedAt;
                var readMore = business[0].readMore;
                var sepr = "                                   ";
                var businessLength = (business.length - 1).toString();

                var finalText = await this.boldText(boldSansCharMap, title);
                var news = `${finalText}\n- ${postedAt} (${businessLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                this.sendRoomMsg(this.tempRoom, "", image);
                this.sendRoomMsg(this.tempRoom, news);
                business.shift();

            }
            else {
                this.sendRoomMsg(this.tempRoom, "Refreshing...");
                //await this.getNews("");
                console.log(businessOffset)
                await this.getNextNews("business", businessOffset);
                setTimeout(async () => {
                    var title = business[0].title;
                    var image = business[0].image;
                    var content = business[0].content;
                    var postedAt = business[0].postedAt;
                    var readMore = business[0].readMore;
                    var sepr = "                                   ";
                    var businessLength = (business.length - 1).toString();

                    var finalText = await this.boldText(boldSansCharMap, title);
                    var news = `${finalText}\n- ${postedAt} (${businessLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                    this.sendRoomMsg(this.tempRoom, "", image);
                    this.sendRoomMsg(this.tempRoom, news);
                    business.shift();

                }, 3000);
            }
        }
        else if (category == "sports") {
            if (0 < sports.length) {
                var title = sports[0].title;
                var image = sports[0].image;
                var content = sports[0].content;
                var postedAt = sports[0].postedAt;
                var readMore = sports[0].readMore;
                var sepr = "                                   ";
                var sportsLength = (sports.length - 1).toString();

                var finalText = await this.boldText(boldSansCharMap, title);
                var news = `${finalText}\n- ${postedAt} (${sportsLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                this.sendRoomMsg(this.tempRoom, "", image);
                this.sendRoomMsg(this.tempRoom, news);
                sports.shift();

            }
            else {
                this.sendRoomMsg(this.tempRoom, "Refreshing...");
                //await this.getNews("");
                console.log(sportsOffset)
                await this.getNextNews("sports", sportsOffset);
                setTimeout(async () => {
                    var title = sports[0].title;
                    var image = sports[0].image;
                    var content = sports[0].content;
                    var postedAt = sports[0].postedAt;
                    var readMore = sports[0].readMore;
                    var sepr = "                                   ";
                    var sportsLength = (sports.length - 1).toString();

                    var finalText = await this.boldText(boldSansCharMap, title);
                    var news = `${finalText}\n- ${postedAt} (${sportsLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                    this.sendRoomMsg(this.tempRoom, "", image);
                    this.sendRoomMsg(this.tempRoom, news);
                    sports.shift();

                }, 3000);
            }
        }
        else if (category == "world") {
            if (0 < world.length) {
                var title = world[0].title;
                var image = world[0].image;
                var content = world[0].content;
                var postedAt = world[0].postedAt;
                var readMore = world[0].readMore;
                var sepr = "                                   ";
                var worldLength = (world.length - 1).toString();

                var finalText = await this.boldText(boldSansCharMap, title);
                var news = `${finalText}\n- ${postedAt} (${worldLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                this.sendRoomMsg(this.tempRoom, "", image);
                this.sendRoomMsg(this.tempRoom, news);
                world.shift();

            }
            else {
                this.sendRoomMsg(this.tempRoom, "Refreshing...");
                //await this.getNews("");
                console.log(worldOffset)
                await this.getNextNews("world", worldOffset);
                setTimeout(async () => {
                    var title = world[0].title;
                    var image = world[0].image;
                    var content = world[0].content;
                    var postedAt = world[0].postedAt;
                    var readMore = world[0].readMore;
                    var sepr = "                                   ";
                    var worldLength = (world.length - 1).toString();

                    var finalText = await this.boldText(boldSansCharMap, title);
                    var news = `${finalText}\n- ${postedAt} (${worldLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                    this.sendRoomMsg(this.tempRoom, "", image);
                    this.sendRoomMsg(this.tempRoom, news);
                    world.shift();

                }, 3000);
            }
        }
        else if (category == "politics") {
            if (0 < politics.length) {
                var title = politics[0].title;
                var image = politics[0].image;
                var content = politics[0].content;
                var postedAt = politics[0].postedAt;
                var readMore = politics[0].readMore;
                var sepr = "                                   ";
                var politicsLength = (politics.length - 1).toString();

                var finalText = await this.boldText(boldSansCharMap, title);
                var news = `${finalText}\n- ${postedAt} (${politicsLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                this.sendRoomMsg(this.tempRoom, "", image);
                this.sendRoomMsg(this.tempRoom, news);
                politics.shift();

            }
            else {
                this.sendRoomMsg(this.tempRoom, "Refreshing...");
                //await this.getNews("");
                console.log(politicsOffset)
                await this.getNextNews("politics", politicsOffset);
                setTimeout(async () => {
                    var title = politics[0].title;
                    var image = politics[0].image;
                    var content = politics[0].content;
                    var postedAt = politics[0].postedAt;
                    var readMore = politics[0].readMore;
                    var sepr = "                                   ";
                    var politicsLength = (politics.length - 1).toString();

                    var finalText = await this.boldText(boldSansCharMap, title);
                    var news = `${finalText}\n- ${postedAt} (${politicsLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                    this.sendRoomMsg(this.tempRoom, "", image);
                    this.sendRoomMsg(this.tempRoom, news);
                    politics.shift();

                }, 3000);
            }
        }
        else if (category == "technology") {
            if (0 < technology.length) {
                var title = technology[0].title;
                var image = technology[0].image;
                var content = technology[0].content;
                var postedAt = technology[0].postedAt;
                var readMore = technology[0].readMore;
                var sepr = "                                   ";
                var technologyLength = (technology.length - 1).toString();

                var finalText = await this.boldText(boldSansCharMap, title);
                var news = `${finalText}\n- ${postedAt} (${technologyLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                this.sendRoomMsg(this.tempRoom, "", image);
                this.sendRoomMsg(this.tempRoom, news);
                technology.shift();

            }
            else {
                this.sendRoomMsg(this.tempRoom, "Refreshing...");
                //await this.getNews("");
                console.log(technologyOffset)
                await this.getNextNews("technology", technologyOffset);
                setTimeout(async () => {
                    var title = technology[0].title;
                    var image = technology[0].image;
                    var content = technology[0].content;
                    var postedAt = technology[0].postedAt;
                    var readMore = technology[0].readMore;
                    var sepr = "                                   ";
                    var technologyLength = (technology.length - 1).toString();

                    var finalText = await this.boldText(boldSansCharMap, title);
                    var news = `${finalText}\n- ${postedAt} (${technologyLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                    this.sendRoomMsg(this.tempRoom, "", image);
                    this.sendRoomMsg(this.tempRoom, news);
                    technology.shift();

                }, 3000);
            }
        }
        else if (category == "startup") {
            if (0 < startup.length) {
                var title = startup[0].title;
                var image = startup[0].image;
                var content = startup[0].content;
                var postedAt = startup[0].postedAt;
                var readMore = startup[0].readMore;
                var sepr = "                                   ";
                var startupLength = (startup.length - 1).toString();

                var finalText = await this.boldText(boldSansCharMap, title);
                var news = `${finalText}\n- ${postedAt} (${startupLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                this.sendRoomMsg(this.tempRoom, "", image);
                this.sendRoomMsg(this.tempRoom, news);
                startup.shift();

            }
            else {
                this.sendRoomMsg(this.tempRoom, "Refreshing...");
                //await this.getNews("");
                console.log(startupOffset)
                await this.getNextNews("startup", startupOffset);
                setTimeout(async () => {
                    var title = startup[0].title;
                    var image = startup[0].image;
                    var content = startup[0].content;
                    var postedAt = startup[0].postedAt;
                    var readMore = startup[0].readMore;
                    var sepr = "                                   ";
                    var startupLength = (startup.length - 1).toString();

                    var finalText = await this.boldText(boldSansCharMap, title);
                    var news = `${finalText}\n- ${postedAt} (${startupLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                    this.sendRoomMsg(this.tempRoom, "", image);
                    this.sendRoomMsg(this.tempRoom, news);
                    startup.shift();

                }, 3000);
            }
        }
        else if (category == "entertainment") {
            if (0 < entertainment.length) {
                var title = entertainment[0].title;
                var image = entertainment[0].image;
                var content = entertainment[0].content;
                var postedAt = entertainment[0].postedAt;
                var readMore = entertainment[0].readMore;
                var sepr = "                                   ";
                var entertainmentLength = (entertainment.length - 1).toString();

                var finalText = await this.boldText(boldSansCharMap, title);
                var news = `${finalText}\n- ${postedAt} (${entertainmentLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                this.sendRoomMsg(this.tempRoom, "", image);
                this.sendRoomMsg(this.tempRoom, news);
                entertainment.shift();

            }
            else {
                this.sendRoomMsg(this.tempRoom, "Refreshing...");
                //await this.getNews("");
                console.log(entertainmentOffset)
                await this.getNextNews("entertainment", entertainmentOffset);
                setTimeout(async () => {
                    var title = entertainment[0].title;
                    var image = entertainment[0].image;
                    var content = entertainment[0].content;
                    var postedAt = entertainment[0].postedAt;
                    var readMore = entertainment[0].readMore;
                    var sepr = "                                   ";
                    var entertainmentLength = (entertainment.length - 1).toString();

                    var finalText = await this.boldText(boldSansCharMap, title);
                    var news = `${finalText}\n- ${postedAt} (${entertainmentLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                    this.sendRoomMsg(this.tempRoom, "", image);
                    this.sendRoomMsg(this.tempRoom, news);
                    entertainment.shift();

                }, 3000);
            }
        }
        else if (category == "miscellaneous") {
            if (0 < miscellaneous.length) {
                var title = miscellaneous[0].title;
                var image = miscellaneous[0].image;
                var content = miscellaneous[0].content;
                var postedAt = miscellaneous[0].postedAt;
                var readMore = miscellaneous[0].readMore;
                var sepr = "                                   ";
                var miscellaneousLength = (miscellaneous.length - 1).toString();

                var finalText = await this.boldText(boldSansCharMap, title);
                var news = `${finalText}\n- ${postedAt} (${miscellaneousLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                this.sendRoomMsg(this.tempRoom, "", image);
                this.sendRoomMsg(this.tempRoom, news);
                miscellaneous.shift();

            }
            else {
                this.sendRoomMsg(this.tempRoom, "Refreshing...");
                //await this.getNews("");
                console.log(miscellaneousOffset)
                await this.getNextNews("miscellaneous", miscellaneousOffset);
                setTimeout(async () => {
                    var title = miscellaneous[0].title;
                    var image = miscellaneous[0].image;
                    var content = miscellaneous[0].content;
                    var postedAt = miscellaneous[0].postedAt;
                    var readMore = miscellaneous[0].readMore;
                    var sepr = "                                   ";
                    var miscellaneousLength = (miscellaneous.length - 1).toString();

                    var finalText = await this.boldText(boldSansCharMap, title);
                    var news = `${finalText}\n- ${postedAt} (${miscellaneousLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                    this.sendRoomMsg(this.tempRoom, "", image);
                    this.sendRoomMsg(this.tempRoom, news);
                    miscellaneous.shift();

                }, 3000);
            }
        }
        else if (category == "science") {
            if (0 < science.length) {
                var title = science[0].title;
                var image = science[0].image;
                var content = science[0].content;
                var postedAt = science[0].postedAt;
                var readMore = science[0].readMore;
                var sepr = "                                   ";
                var scienceLength = (science.length - 1).toString();

                var finalText = await this.boldText(boldSansCharMap, title);
                var news = `${finalText}\n- ${postedAt} (${scienceLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                this.sendRoomMsg(this.tempRoom, "", image);
                this.sendRoomMsg(this.tempRoom, news);
                science.shift();

            }
            else {
                this.sendRoomMsg(this.tempRoom, "Refreshing...");
                //await this.getNews("");
                console.log(scienceOffset)
                await this.getNextNews("science", scienceOffset);
                setTimeout(async () => {
                    var title = science[0].title;
                    var image = science[0].image;
                    var content = science[0].content;
                    var postedAt = science[0].postedAt;
                    var readMore = science[0].readMore;
                    var sepr = "                                   ";
                    var scienceLength = (science.length - 1).toString();

                    var finalText = await this.boldText(boldSansCharMap, title);
                    var news = `${finalText}\n- ${postedAt} (${scienceLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                    this.sendRoomMsg(this.tempRoom, "", image);
                    this.sendRoomMsg(this.tempRoom, news);
                    science.shift();

                }, 3000);
            }
        }
        else if (category == "unusual") {
            if (0 < unusual.length) {
                var title = unusual[0].title;
                var image = unusual[0].image;
                var content = unusual[0].content;
                var postedAt = unusual[0].postedAt;
                var readMore = unusual[0].readMore;
                var sepr = "                                   ";
                var unusualLength = (unusual.length - 1).toString();

                var finalText = await this.boldText(boldSansCharMap, title);
                var news = `${finalText}\n- ${postedAt} (${unusualLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                this.sendRoomMsg(this.tempRoom, "", image);
                this.sendRoomMsg(this.tempRoom, news);
                unusual.shift();

            }
            else {
                this.sendRoomMsg(this.tempRoom, "Refreshing...");
                //await this.getNews("");
                console.log(unusualOffset)
                await this.getNextNews("unusual", unusualOffset);
                setTimeout(async () => {
                    var title = unusual[0].title;
                    var image = unusual[0].image;
                    var content = unusual[0].content;
                    var postedAt = unusual[0].postedAt;
                    var readMore = unusual[0].readMore;
                    var sepr = "                                   ";
                    var unusualLength = (unusual.length - 1).toString();

                    var finalText = await this.boldText(boldSansCharMap, title);
                    var news = `${finalText}\n- ${postedAt} (${unusualLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                    this.sendRoomMsg(this.tempRoom, "", image);
                    this.sendRoomMsg(this.tempRoom, news);
                    unusual.shift();

                }, 5000);
            }
        }
        else if (category == "automobile") {
            if (0 < automobile.length) {
                var title = automobile[0].title;
                var image = automobile[0].image;
                var content = automobile[0].content;
                var postedAt = automobile[0].postedAt;
                var readMore = automobile[0].readMore;
                var sepr = "                                   ";
                var automobileLength = (automobile.length - 1).toString();

                var finalText = await this.boldText(boldSansCharMap, title);
                var news = `${finalText}\n- ${postedAt} (${automobileLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                this.sendRoomMsg(this.tempRoom, "", image);
                this.sendRoomMsg(this.tempRoom, news);
                automobile.shift();

            }
            else {
                this.sendRoomMsg(this.tempRoom, "Refreshing...");
                //await this.getNews("");
                console.log(automobileOffset)
                await this.getNextNews("automobile", automobileOffset);
                setTimeout(async () => {
                    var title = automobile[0].title;
                    var image = automobile[0].image;
                    var content = automobile[0].content;
                    var postedAt = automobile[0].postedAt;
                    var readMore = automobile[0].readMore;
                    var sepr = "                                   ";
                    var automobileLength = (automobile.length - 1).toString();

                    var finalText = await this.boldText(boldSansCharMap, title);
                    var news = `${finalText}\n- ${postedAt} (${automobileLength} remaining)\n${sepr}\n\n${content}\n\nRead more : ${readMore}`;

                    this.sendRoomMsg(this.tempRoom, "", image);
                    this.sendRoomMsg(this.tempRoom, news);
                    automobile.shift();

                }, 3000);
            }
        }
        else {
            console.log("No")
        }
    }

    Client.prototype.getNews = async function (category) {
        var options = {
            lang: 'en',
            category: category
        }

        inshorts.getNews(options, function (result, news_offset) {
            //console.log(result);
            if (category == "") {
                all = result;
            }
            else if (category == "national") {
                national = result;
            }
            else if (category == "business") {
                business = result;
            }
            else if (category == "sports") {
                sports = result;
            }
            else if (category == "world") {
                world = result;
            }
            else if (category == "politics") {
                politics = result;
            }
            else if (category == "technology") {
                technology = result;
            }
            else if (category == "startup") {
                startup = result;
            }
            else if (category == "entertainment") {
                entertainment = result;
            }
            else if (category == "miscellaneous") {
                miscellaneous = result;
            }
            else if (category == "science") {
                science = result;
            }
            else if (category == "unusual") {
                unusual = result;
            }
            else if (category == "automobile") {
                automobile = result;
            }
            else {
                console.log("No")
            }

            //resultJson = result.json()
            //console.log(result.length)
            console.log(news_offset);
            News_offset = news_offset;
        });
    }


    Client.prototype.getNextNews = async function (category, News_offset) {
        //for next 25 news posts
        var options = {
            lang: 'en',
            category: category,
            news_offset: News_offset
        }

        inshorts.getMoreNews(options, function (result, news_offset) {
            console.log(result);
            console.log(news_offset);

            if (category == "") {
                all = result;
                allOffset = news_offset;
            }
            else if (category == "national") {
                national = result;
                nationalOffset = news_offset;
            }
            else if (category == "business") {
                business = result;
                businessOffset = news_offset;
            }
            else if (category == "sports") {
                console.log(" sports get more news");
                sports = result;
                sportsOffset = news_offset;
            }
            else if (category == "world") {
                world = result;
                worldOffset = news_offset;
            }
            else if (category == "politics") {
                politics = result;
                politicsOffset = news_offset;
            }
            else if (category == "technology") {
                technology = result;
                technologyOffset = news_offset;
            }
            else if (category == "startup") {
                startup = result;
                startupOffset = news_offset;
            }
            else if (category == "entertainment") {
                entertainment = result;
                entertainmentOffset = news_offset;
            }
            else if (category == "miscellaneous") {
                miscellaneous = result;
                miscellaneousOffset = news_offset;

            }
            else if (category == "science") {
                science = result;
                scienceOffset = news_offset;


            }
            else if (category == "unusual") {
                unusual = result;
                unusualOffset = news_offset;

            }
            else if (category == "automobile") {
                automobile = result;
                automobileOffset = news_offset;

            }
            else {
                console.log("No")
            }

        });
    }



    Client.prototype.processGroupChatMessage = async function (from, message, room) {
        return __awaiter(this, void 0, void 0, function () {
            var search, videos, msg, random, search, targetId, str, targetId, str, targetId, str, targetId, str, targetId, kickPayload, trendingPayload, str, targetId, str, targetId, searchQuery, searchQuery, searchQuery, searchQuery, str, targetId, str, targetId, roomUsersPayload, targetIndex, img_query_1, lang, audio_query, url, ud_query_1, trollface, instance, query_1, url, instance, query, x, query, shareTo, ShareCommander, playCommander, myenemyCommander, myloveCommander;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {

                    case 0:
                        // console.log(from + " : " + message);
                        if (from == this.userName) {
                        }
                        if (!message.toLowerCase().startsWith("yt "))
                            return [3 /*break*/, 2];
                        search = message.substring(3).toString();
                        //console.log('Fetching YT for: "' + search.replace(/\s/g, "") + '"');
                        return [4 /*yield*/, yt.search(search.replace(/\s/g, ""))];
                    case 1:
                        videos = _a.sent();
                        //console.log(videos[0].url);
                        //this.setAccountColor();


                        this.sendRoomMsg(room, videos[0].url);
                        _a.label = 2;
                    case 2:
                        this.setAccountColor();

                        if (message.toLowerCase() == (".rn") || message.toLowerCase() == (".resetnews")) {

                            allOffset = "";
                            nationalOffset = "";
                            businessOffset = "";
                            sportsOffset = "";
                            worldOffset = "";
                            politicsOffset = "";
                            technologyOffset = "";
                            startupOffset = "";
                            entertainmentOffset = "";
                            miscellaneousOffset = "";
                            unusualOffset = "";
                            scienceOffset = "";
                            automobileOffset = "";
                            all = [];
                            this.sendRoomMsg(room, "News offsets has been reset");
                        }


                        if (message.toLowerCase().startsWith(".news ")) {
                            var newsCat = ["national", "business", "sports", "world", "politics", "technology", "startup", "entertainment", "miscellaneous", "unusual", "science", "automobile"];
                            this.tempRoom = room;
                            str = message.substring(6).toString();

                            if (newsCat.includes(str) == true) {
                                this.sendNews(str);
                            } else if (str.length == 0 || str == '') {
                                this.sendNews("");
                            }
                            else {
                                this.sendRoomMsg(room, "Invalid category!!\nAvailable categories :\n1. National\n2. Business\n3. Sports\n4. World\n5. Politics\n6. Technology\n7. Startup\n8. Entertainment\n9. Miscellaneous\n10. Unusual\n11. Science\n12. Automobile");
                            }

                        }

                        if (message.toLowerCase().startsWith(".n ")) {
                            var newsCat = ["national", "business", "sports", "world", "politics", "technology", "startup", "entertainment", "miscellaneous", "unusual", "science", "automobile"];
                            this.tempRoom = room;
                            str = message.substring(3).toString();

                            if (newsCat.includes(str) == true) {
                                this.sendNews(str);
                            } else if (str.length == 0 || str == '') {
                                this.sendNews("");
                            }
                            else {
                                this.sendRoomMsg(room, "Invalid category!!\nAvailable categories :\n1. National\n2. Business\n3. Sports\n4. World\n5. Politics\n6. Technology\n7. Startup\n8. Entertainment\n9. Miscellaneous\n10. Unusual\n11. Science\n12. Automobile");
                            }

                        }


                        if (message.toLowerCase() == ".news" || message.toLowerCase() == ".n") {
                            this.tempRoom = room;
                            this.sendNews("");
                        }



                        if (message.toLowerCase() == "text ") {
                            this.tempRoom = room;
                            str = message.substring(4).toString();
                            targetId = str.replace(/\s/g, "");
                            this.sendText(str, this.tempRoom)
                        }

                        if (message.toLowerCase().startsWith(".numlookup ")) {
                            this.tempRoom = room;
                            str = message.substring(11).toString();
                            var str2 = str.split(" ");
                            if (str2.length == 2 && 0 < str2.length) {
                                var countryCode = str.split(" ")[0];
                                var Number = str.split(" ")[1];
                                console.log(countryCode)
                                console.log(Number)
                                targetId = Number.replace(/\s/g, "");
                                this.numLookup(countryCode, targetId, this.tempRoom);
                            }
                            else {
                                this.sendRoomMsg(room, "Invalid format");

                            }

                        }


                        if (message.toLowerCase().startsWith(".banip ")) {
                            this.tempRoom = room;
                            str = message.substring(7).toString();
                            targetId = str.replace(/\s/g, "");
                            this.banIP(targetId, room)

                        }


                        if (message.toLowerCase() == "open") {
                            if (this.mysteryBox == true) {
                                this.setAccountColor();
                                this.sendRoomMsg(room, from + " : " + " hahaha there is nothing in the box ");
                                this.mysteryBox = false;
                            }
                        }


                        if (message.toLowerCase() == ".s" || message.toLowerCase() == "spin") {

                            if (this.isSpin == true) {
                                this.targetId = from;
                                this.tempRoom = room;


                                search = message.substring(6).toString();
                                searchQuery = search.replace(/\s/g, "");

                                if (this.talkedRecently.has(from)) {
                                    this.setAccountColor();
                                    this.sendRoomMsg(this.tempRoom, from + ' : Please wait ' + getTimeLeft(this.timeout) + ' seconds. to spin again.');

                                } else {
                                    var rndGift = "";
                                    random = Math.floor(Math.random() * this.listEmojis.length);
                                    if (this.spinSettingsMap.get(room) == true) {
                                        var rndGift = this.listEmojis[random];
                                        if (rndGift.includes.toLowerCase == ("mysterybox")) {
                                            this.mysteryBox = true;
                                        }
                                        else {
                                            this.setAccountColor();
                                            this.sendRoomMsg(room, from + " : " + rndGift);
                                        }
                                    }
                                    this.talkedRecently.add(from);
                                    this.timeout = setTimeout(() => {
                                        this.talkedRecently.delete(from);
                                    }, 1000 * 60 * 5);
                                }


                            }
                        }

                        if (message.toLowerCase() == ".cs" || message.toLowerCase() == ".clearspin") {
                            clearTimeout(this.timeout);

                            this.talkedRecently.clear();
                            this.setAccountColor();
                            this.sendRoomMsg(room, from + " : Spin cooldown has been cleared!")

                        }

                        ////////////////////////////////////////     check Online statussss 2
                        if (message.toLowerCase().startsWith(".is ")) {
                            str = message.substring(4).toString();
                            targetId = str.replace(/\s/g, "");
                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (from == this.botMasterId || textByLine.includes(from)) {
                                this.tempRoom = room;
                                //this.checkActivity(targetId);
                                this.sendPvtMsg(xBot, ".is " + targetId);
                            }

                        }
                        if (message.toLowerCase().startsWith("mdr ")) {
                            console.log("in mdr command")
                            str = message.substring(4).toString();
                            targetId = str.replace(/\s/g, "");
                            this.tempRoom = room;
                            this.openAIModeration(targetId);

                        }


                        if (message.toLowerCase().startsWith("bot ")) {
                            str = message.substring(4).toString();
                            targetId = str.replace(/\s/g, "");
                            this.tempRoom = room;


                            this.openAIChatCompletion(targetId);

                        }

                        if (message.toLowerCase().startsWith("queen ")) {
                            str = message.substring(6).toString();
                            targetId = str.replace(/\s/g, "");
                            this.tempRoom = room;
                            this.openAICompletion(targetId);
                            //function(msg, completion, chat, moderation, createImage)

                        }

                        if (message.toLowerCase().startsWith("register ")) {
                            this.tempRoom = room;
                            str = message.substring(9).toString();
                            const myArray = str.split(" ");
                            //this.register(myArray[0], myArray[1]);
                        }

                        //Get Trending Rooms
                        if (message.toLowerCase() == "tr") {
                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            this.tempRoom = room;
                            if (from == this.botMasterId || textByLine.includes(from)) {
                                trendingPayload = {
                                    handler: "room_info",
                                    id: this.keyGen(10, true),
                                    type: "trending_rooms",
                                    page: "0",
                                };
                                if (
                                    this.webSocket != null &&
                                    this.webSocket.readyState == WebSocket.OPEN
                                ) {
                                    this.webSocket.send(JSON.stringify(trendingPayload));
                                }
                            }
                        }

                        //Get Trending Room Users
                        if (message.toLowerCase().startsWith("tru ")) {
                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");

                            var tRoom = 0;
                            str = message.substring(4).toString();
                            targetId = str.replace(/\s/g, "");
                            tRoom = parseInt(targetId);
                            this.tempRoom = room;
                            if (TrRoomsArr.length > 0) {
                                if (textByLine.includes(from)) {
                                    getRoomusers = true;

                                    this.joinRoom(TrRoomsArr[tRoom].name);
                                    roomUsersPayload = {
                                        handler: HANDLER_ROOM_ADMIN,
                                        id: this.keyGen(10, true),
                                        type: "occupants_list",
                                        room: TrRoomsArr[tRoom].name,
                                        t_username: "username",
                                        t_role: "none",
                                    };
                                    if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
                                        this.webSocket.send(JSON.stringify(roomUsersPayload));
                                    }
                                    this.leaveGroup(TrRoomsArr[tRoom].name);
                                }
                            }
                        }

                        //Invite All Trending Room's Users
                        if (message.toLowerCase().startsWith("tria ")) {
                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");

                            var tRoom = 0;
                            this.tempRoom = room;
                            TargetArray = [];

                            tempUser = from;

                            trInputRoom = "";
                            str = message.substring(5).toString();
                            TargetArray = str.split(" ");
                            if (TargetArray.length < 1) {
                                console.log(TargetArray);
                                TargetArray.push("" + from);
                            }
                            tRoom = TargetArray[0];
                            this.tempRoom = room;
                            tempUser = from;

                            if (textByLine.includes(from)) {
                                trinvAll = true;
                                if (TrRoomsArrWLM.length > 0) {
                                    // getRoomusers = true;
                                    for (var i = 0; i < TrRoomsArrWLM.length; i++) {
                                        this.joinRoom(TrRoomsArrWLM[i].name);
                                        roomUsersPayload = {
                                            handler: HANDLER_ROOM_ADMIN,
                                            id: this.keyGen(10, true),
                                            type: "occupants_list",
                                            room: TrRoomsArrWLM[i].name,
                                            t_username: "username",
                                            t_role: "none",
                                        };
                                        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
                                            this.webSocket.send(JSON.stringify(roomUsersPayload));
                                        }
                                        this.leaveGroup(TrRoomsArrWLM[i].name);
                                        wait(1000);
                                        //await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](1000);
                                    }
                                    wait(5000);
                                    trRoomuserGrabCmplt = true;
                                } else {
                                    trRoomuserGrabCmplt = false;
                                    this.setAccountColor();
                                    this.sendRoomMsg(room, "Send TR command before use TRIA command");
                                }
                            }

                        }
                        //Invite Specific Trending room's users
                        if (message.toLowerCase().startsWith("tri ")) {
                            TargetArray = [];
                            var text = fs.readFileSync("masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            var tRoom = 0;

                            trInputRoom = "";
                            str = message.substring(4).toString();
                            //targetId = str.replace(/\s/g, "");
                            TargetArray = str.split(" ");
                            if (TargetArray.length < 2) {
                                console.log(TargetArray);
                                TargetArray.push("" + from);
                            }
                            tRoom = parseInt(TargetArray[0]);
                            this.tempRoom = room;
                            tempUser = from;

                            if (TrRoomsArr.length > 0 && tRoom <= TrRoomsArr.length) {
                                if (textByLine.includes(from)) {
                                    invAll = true;
                                    trInputRoom = TrRoomsArr[tRoom].name;
                                    this.joinRoom(TrRoomsArr[tRoom].name);
                                    roomUsersPayload = {
                                        handler: HANDLER_ROOM_ADMIN,
                                        id: this.keyGen(10, true),
                                        type: "occupants_list",
                                        room: TrRoomsArr[tRoom].name,
                                        t_username: "username",
                                        t_role: "none",
                                    };
                                    if (
                                        this.webSocket != null &&
                                        this.webSocket.readyState == WebSocket.OPEN
                                    ) {
                                        this.webSocket.send(JSON.stringify(roomUsersPayload));
                                    }
                                    this.leaveGroup(TrRoomsArr[tRoom].name);
                                }
                            }
                        }

                        if (message.toLowerCase() == (".rrrrr")) {
                            TargetArray = [];
                            var text = fs.readFileSync("masters.txt", "utf-8");
                            var textByLine = text.split("\n");

                            this.tempRoom = room;

                            if (this.recentUsers.length > 0) {
                                if (textByLine.includes(from)) {

                                    timeAgo = (date) => {
                                        var ms = (new Date()).getTime() - date.getTime();
                                        var seconds = Math.floor(ms / 1000);
                                        var minutes = Math.floor(seconds / 60);
                                        var hours = Math.floor(minutes / 60);
                                        var days = Math.floor(hours / 24);
                                        var months = Math.floor(days / 30);
                                        var years = Math.floor(months / 12);

                                        if (ms === 0) {
                                            return 'Just now';
                                        } if (seconds < 60) {
                                            return seconds + ' seconds Ago';
                                        } if (minutes < 60) {
                                            return minutes + ' minutes Ago';
                                        } if (hours < 24) {
                                            return hours + ' hours Ago';
                                        } if (days < 30) {
                                            return days + ' days Ago';
                                        } if (months < 12) {
                                            return months + ' months Ago';
                                        } else {
                                            return years + ' years Ago';
                                        }

                                    }

                                    this.setAccountColor();
                                    this.sendRoomMsg(room,)
                                    console.log(timeAgo(new Date()));
                                    console.log(timeAgo(new Date('Dec 24 2022 8:08:19')));


                                }
                            }

                        }

                        //Invite user
                        if (message.toLowerCase().startsWith(".i ")) {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                TargetArray = [];
                                str = message.substring(3).toString();
                                //targetId = str.replace(/\s/g, "");
                                TargetArray = str.split(" ");
                                if (TargetArray.length < 2) {
                                    console.log(TargetArray);
                                    TargetArray.push("" + from);
                                }
                                this.sendPvtMsg(
                                    TargetArray[0],
                                    "Hello " +
                                    TargetArray[0] +
                                    ",\n" +
                                    "This is - " +
                                    TargetArray[1] +
                                    "\nCome let's have fun in my room : " +
                                    room
                                );
                                this.setAccountColor();
                                this.sendRoomMsg(room, "Invitation has been sent.");
                            }
                        }

                        ///////////////////////////////////////////////////////////  Invite all users
                        if (message.toLowerCase().startsWith(".ir ")) {
                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                var str = message.substring(4).toString();
                                var targetId = str.replace(/\s/g, "");

                                //this.joinRoom(targetId);

                                invAll = true;
                                tempUser = from;
                                temptargetRoom = targetId;
                                this.tempRoom = room;

                                this.inviteUsers(temptargetRoom);
                                // roomUsersPayload = {
                                //     handler: HANDLER_ROOM_ADMIN,
                                //     id: this.keyGen(10, true),
                                //     type: "occupants_list",
                                //     room: temptargetRoom,
                                //     t_username: "username",
                                //     t_role: "none",
                                // };
                                // if (
                                //     this.webSocket != null &&
                                //     this.webSocket.readyState == WebSocket.OPEN
                                // ) {
                                //     this.webSocket.send(JSON.stringify(roomUsersPayload));
                                // }

                                // this.leaveGroup(targetId);


                            }
                        }

                        if (message.toLowerCase().startsWith("+master ")) {
                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                str = message.substring(8).toString();
                                targetId = str.replace(/\s/g, "");

                                fs.appendFile("masters.txt", targetId + "\n", function (err) {
                                    if (err) {
                                    } else {
                                    }
                                });
                                this.setAccountColor();
                                this.sendRoomMsg(room, targetId + " Added to the master list");
                            }
                        }

                        //whoami
                        if (message.toLowerCase() == "whoami") {
                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            //this.masters = fs.readFileSync("masters.txt").toString().split("\n")
                            if (textByLine.includes(from)) {
                                this.setAccountColor();
                                this.sendRoomMsg(room, from + " You are Master");
                            } else {
                                this.setAccountColor();
                                this.sendRoomMsg(room, from + " You are a user");
                            }
                        }

                        //say
                        if (message.toLowerCase().startsWith(".say ")) {
                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                str = message.substring(5).toString();
                                targetId = str.replace(/\s/g, "");
                                this.sendRoomMsg(room, str);
                            }
                        }

                        //Remove Master
                        if (message.toLowerCase().startsWith == "-master ") {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                str = message.substring(8).toString();
                                targetId = str.replace(/\s/g, "");

                                function readWriteSync() {
                                    var data = fs.readFileSync("./masters.txt", "utf-8");
                                    var newValue = data.replace(targetId, "");
                                    fs.writeFileSync(filepath, newValue, "utf-8");
                                }
                                this.setAccountColor();
                                this.sendRoomMsg(
                                    room,
                                    targetId + " Removed from the Master list"
                                );
                            }
                        }
                        // print masters
                        if (message.toLowerCase() == "masters") {

                            fs.readFile(__dirname + "/masters.txt", (error, data) => {
                                if (error) {
                                    throw error;
                                }
                                this.setAccountColor();
                                this.sendRoomMsg(room, data.toString());
                            });
                        }

                        // Clear masters
                        if (message.toLowerCase() == "--masters") {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                this.setAccountColor();
                                fs.writeFile("/masters.txt", "\n", function () { });
                                this.sendRoomMsg(room, "Master list has been cleared");
                            }
                        }
                        // Profile
                        if (message.toLowerCase().startsWith(".pro ")) {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                search = message.substring(5).toString();
                                targetId = search.replace(/\s/g, "");
                                this.tempRoom = room;
                                this.ispfpCheck = false;
                                this.isProfileCheck = true;
                                this.roomImageWC = false;
                                this.fetchUserProfile(targetId, room);

                            }
                        }


                        if (message.toLowerCase() == ".spyid ") {
                            var str = message.substring(7).toString();
                            var targetId = str.replace(/\s/g, "");
                            this.setAccountColor();
                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                xBot = targetId;
                                this.sendRoomMsg(room, from + " : SpyBot ID has been changed to " + targetId);
                            }

                        }
                        if (message.toLowerCase() == ".openai ") {
                            var str = message.substring(8).toString();
                            var targetId = str.replace(/\s/g, "");
                            this.setAccountColor();
                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                xBot = targetId;
                                this.sendRoomMsg(room, from + " : API Key has been changed to " + targetId);
                            }

                        }

                        if (message.toLowerCase() == ".wcmode") {
                            this.iswcMode = true;
                            this.sendRoomMsg(room, "Choose welcome greeting settings :\n1. Text\n2. Text + Image\n\nType 1 or 2 to select the option.");
                        }

                        if (this.iswcMode == true && message.toLowerCase() == "1") {
                            this.iswcMode = false;
                            this.roomImageWC = false;
                            this.setAccountColor();
                            this.sendRoomMsg(room, from + " setting saved.");
                        }

                        if (this.iswcMode == true && message.toLowerCase() == "2") {
                            this.iswcMode = false;
                            this.roomImageWC = true;
                            this.setAccountColor();
                            this.sendRoomMsg(room, from + " setting saved.");
                        }



                        if (message.toLowerCase() == ".rj") {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                this.tempRoom = room;
                                this.leaveGroup(room);
                                this.joinRoom(room);

                            }
                        }



                        // Join Group
                        if (message.toLowerCase().startsWith("...join ")) {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                str = message.substring(8).toString();
                                targetId = str.replace(/\s/g, "");
                                //if (from == this.botMasterId) {
                                this.joinRoom(targetId);
                                // }
                            }
                        }


                        if (message.toLowerCase().startsWith(".hug ")) {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                str = message.substring(5).toString();
                                targetId = str.replace(/\s/g, "");
                                this.tempRoom = room;
                                this.setAccountColor();
                                this.sendRoomMsg(this.tempRoom, from + " hugged 🤗 " + targetId + "\nTotal [" + hugCounter + "] people hugged in this room.");
                                hugCounter = hugCounter + 1;
                            }
                        }
                        if (message.toLowerCase().startsWith(".kiss ")) {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                str = message.substring(6).toString();
                                targetId = str.replace(/\s/g, "");
                                this.tempRoom = room;
                                this.setAccountColor();
                                this.sendRoomMsg(this.tempRoom, from + " kissed 💋 " + targetId + "\nTotal [" + kisscounter + "] kisses given in this room.");
                                kisscounter = kisscounter + 1;
                            }
                        }

                        if (message.toLowerCase().startsWith(".slap ")) {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                str = message.substring(6).toString();
                                targetId = str.replace(/\s/g, "");
                                this.tempRoom = room;
                                this.setAccountColor();
                                this.sendRoomMsg(this.tempRoom, from + " slapped 👋 " + targetId + "\nTotal [" + slapcounter + "] users slapped in this room.");
                                slapcounter = slapcounter + 1;
                            }
                        }


                        if (message.toLowerCase().startsWith(".check ")) {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                str = message.substring(7).toString();
                                targetId = str.replace(/\s/g, "");
                                this.tempRoom = room;

                                fetch("https://store.talkinchat.com/check_username", {
                                    "headers": {
                                        "accept": "*/*",
                                        "accept-language": "en-US,en;q=0.9",
                                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                        "sec-ch-ua": "\"-Not.A/Brand\";v=\"8\", \"Chromium\";v=\"102\"",
                                        "sec-ch-ua-mobile": "?0",
                                        "sec-ch-ua-platform": "\"Windows\"",
                                        "sec-fetch-dest": "empty",
                                        "sec-fetch-mode": "cors",
                                        "sec-fetch-site": "same-origin",
                                        "x-requested-with": "XMLHttpRequest"
                                    },
                                    "referrer": "https://store.talkinchat.com/buy_id",
                                    "referrerPolicy": "strict-origin-when-cross-origin",
                                    "body": "username=" + targetId,
                                    "method": "POST",
                                    "mode": "cors",
                                    "credentials": "include"
                                })
                                    .then(response => response.text())
                                    .then(data => {
                                        console.log(data);
                                        if (data == "not_eligible") {
                                            this.setAccountColor();
                                            this.sendRoomMsg(this.tempRoom, targetId + " is in use. You can't buy this ID.");
                                        }
                                        else {
                                            this.setAccountColor();
                                            this.sendRoomMsg(this.tempRoom, targetId + " is inactive. You can buy this ID");
                                        }
                                    });
                            }
                        }


                        // Avatar Pic
                        if (message.toLowerCase().startsWith(".pfp ")) {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                str = message.substring(5).toString();
                                targetId = str.replace(/\s/g, "");
                                this.tempRoom = room;
                                this.ispfpCheck = true;
                                this.isProfileCheck = false;
                                this.roomImageWC = false;
                                this.fetchUserProfile(targetId, room);

                            }
                            //this.sendRoomMsg("american", "", "test.jpg");
                        }
                        // Member User
                        if (message.toLowerCase().startsWith(".member ")) {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                str = message.substring(8).toString();
                                targetId = str.replace(/\s/g, "");
                                this.tempRoom = room;
                                this.grantMember(targetId, room);
                            }
                        }
                        // Kick User
                        if (message.toLowerCase().startsWith(".kick ")) {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                str = message.substring(6).toString();
                                targetId = str.replace(/\s/g, "");
                                this.tempRoom = room;
                                kickPayload = {
                                    handler: HANDLER_ROOM_ADMIN,
                                    id: this.keyGen(10, true),
                                    type: TARGET_ROLE_KICK,
                                    room: room,
                                    t_username: targetId,
                                    t_role: "none",
                                };
                                if (
                                    this.webSocket != null &&
                                    this.webSocket.readyState == WebSocket.OPEN
                                ) {
                                    this.webSocket.send(JSON.stringify(kickPayload));
                                }
                            }
                        }

                        if (message.toLowerCase().startsWith(".pm ")) {

                            var search = message.substring(4).toString();
                            var searchQuery = search.replace(/\s/g, "");
                            this.sendSong(searchQuery, room, from);
                        }

                        if (message.toLowerCase().startsWith(".play ")) {

                            var search = message.substring(6).toString();
                            var searchQuery = search.replace(/\s/g, "");
                            this.sendSong(searchQuery, room, from);

                        }

                        if (message.toLowerCase().startsWith(".share ")) {
                            var search = message.substring(7).toString();
                            var shareTo = search.replace(/\s/g, "");

                            this.shareMusic(shareTo, from, room);

                        }


                        if (message.toLowerCase().startsWith(".tr ")) {
                            str = message.substring(4).toString();
                            targetId = str.replace(/\s/g, "");
                            let langArray = targetId.split("@");
                            this.tempRoom = room;
                            if (langArray.length == 3) {
                                translate(langArray[2], { from: langArray[0], to: langArray[1] }).then(res => {
                                    console.log(res.text); // OUTPUT: Je vous remercie
                                    console.log(res.from.autoCorrected); // OUTPUT: true
                                    console.log(res.from.text.value); // OUTPUT: [Thank] you
                                    console.log(res.from.text.didYouMean); // OUTPUT: false
                                    this.setAccountColor();
                                    this.sendRoomMsg(room, res.text);

                                }).catch(err => {
                                    console.error(err);
                                });
                            }
                            else if (langArray.length > 3 || langArray.length < 3 || langArray.length != 3) {
                                translate(targetId, { to: 'en' }).then(res => {
                                    console.log(res.text); // OUTPUT: Je vous remercie
                                    console.log(res.from.autoCorrected); // OUTPUT: true
                                    console.log(res.from.text.value); // OUTPUT: [Thank] you
                                    console.log(res.from.text.didYouMean); // OUTPUT: false
                                    this.setAccountColor();
                                    this.sendRoomMsg(room, res.text);

                                }).catch(err => {
                                    console.error(err);
                                });
                            }

                            else {
                                this.setAccountColor();
                                this.sendRoomMsg(room, from + " : Invalid input. Pleas type correct format.\nExample : .tr LANG1@LANG2@MSG\nFor language codes visit : https://www.alchemysoftware.com/livedocs/ezscript/Topics/Catalyst/Language.htm");


                            }





                        }


                        if (message.toLowerCase().startsWith(".create ")) {
                            str = message.substring(8).toString();
                            targetId = str.replace(/\s/g, "");
                            this.tempRoom = room;
                            this.sendPvtMsg("merchant", "free_id@" + targetId);

                        }

                        //////////////////////////////////////////////
                        if (message.toLowerCase().startsWith(".ban ")) {

                            str = message.substring(5).toString();
                            targetId = str.replace(/\s/g, "");
                            this.tempRoom = room;

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                this.banUser(targetId, room);
                                this.setAccountColor();
                                this.sendRoomMsg(room, targetId + " outcasted.");
                            } else {
                                this.setAccountColor();
                                this.sendRoomMsg(room, from + " : Access denied!!");
                            }
                        }

                        // if (message.toLowerCase().startsWith(".c ")) {
                        //     str = message.substring(8).toString();
                        //     targetId = str.replace(/\s/g, "");
                        //     this.tempRoom = room;
                        //     this.sendPvtMsg("merchant", "free_id@" + targetId);

                        // }

                        if (message.toLowerCase().startsWith(".none ")) {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                str = message.substring(6).toString();
                                targetId = str.replace(/\s/g, "");

                                this.tempRoom = room;
                                this.setAccountColor();
                                this.sendRoomMsg(room, targetId + " is none now");
                                this.grantNone(targetId, room);
                            }
                        }
                        if (message.toLowerCase().startsWith(".admin ")) {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                str = message.substring(7).toString();
                                targetId = str.replace(/\s/g, "");
                                this.tempRoom = room;
                                this.setAccountColor();
                                this.sendRoomMsg(room, targetId + " is admin now");

                                this.grantAdmin(targetId, room);
                            }
                        }
                        if (message.toLowerCase().startsWith(".owner ")) {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {

                                str = message.substring(7).toString();
                                targetId = str.replace(/\s/g, "");
                                this.tempRoom = room;
                                this.grantOwner(targetId, room);
                            }
                        }
                        if (message.toLowerCase() == ".l") {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            this.tempRoom = room;
                            if (textByLine.includes(from)) {
                                roomUsersPayload = {
                                    handler: HANDLER_ROOM_ADMIN,
                                    id: this.keyGen(10, true),
                                    type: "occupants_list",
                                    room: room,
                                    t_username: "username",
                                    t_role: "none",
                                };
                                if (
                                    this.webSocket != null &&
                                    this.webSocket.readyState == WebSocket.OPEN
                                ) {
                                    this.webSocket.send(JSON.stringify(roomUsersPayload));
                                }
                            }
                        }
                        if (message.toLowerCase() == "mylove") {
                            myLove = true;
                            tempUser = from;
                            this.tempRoom = room;
                            roomUsersPayload = {
                                handler: HANDLER_ROOM_ADMIN,
                                id: this.keyGen(10, true),
                                type: "occupants_list",
                                room: room,
                                t_username: "username",
                                t_role: "none",
                            };
                            if (
                                this.webSocket != null &&
                                this.webSocket.readyState == WebSocket.OPEN
                            ) {
                                this.webSocket.send(JSON.stringify(roomUsersPayload));
                            }
                        }
                        if (message.toLowerCase() == "myenemy") {
                            myenemy = true;
                            tempUser = from;
                            this.tempRoom = room;
                            roomUsersPayload = {
                                handler: HANDLER_ROOM_ADMIN,
                                id: this.keyGen(10, true),
                                type: "occupants_list",
                                room: room,
                                t_username: "username",
                                t_role: "none",
                            };
                            if (
                                this.webSocket != null &&
                                this.webSocket.readyState == WebSocket.OPEN
                            ) {
                                this.webSocket.send(JSON.stringify(roomUsersPayload));
                            }
                        }
                        if (message.toLowerCase().startsWith(".u ")) {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            this.tempRoom = room;
                            var str = message.substring(3).toString();
                            var targetId = str.replace(/\s/g, "");
                            // if (textByLine.includes(from)) {
                            //     getRoomusers = true;
                            //     this.tempRoom = room;
                            //     str = message.substring(3).toString();
                            //     str = str.replace(/\s/g, "");
                            //     this.joinRoom(str);
                            //     roomUsersPayload = {
                            //         handler: HANDLER_ROOM_ADMIN,
                            //         id: this.keyGen(10, true),
                            //         type: "occupants_list",
                            //         room: str,
                            //         t_username: "username",
                            //         t_role: "none",
                            //     };
                            //     if (
                            //         this.webSocket != null &&
                            //         this.webSocket.readyState == WebSocket.OPEN
                            //     ) {
                            //         this.webSocket.send(JSON.stringify(roomUsersPayload));
                            //     }
                            //     this.leaveGroup(str);
                            // }
                            if (textByLine.includes(from)) {
                                this.sendPvtMsg(xBot, ".u " + targetId)
                            }

                        }
                        if (message.toLowerCase().startsWith(".love ")) {
                            if (from != BOT_ID) {
                                this.tempRoom = room;
                                str = message.substring(6).toString();
                                let myArray = str.split(" ");



                                if (myArray.length == 2) {
                                    this.setAccountColor();
                                    this.sendRoomMsg(
                                        room,
                                        " ❤️ Love between " +
                                        myArray[0] +
                                        " and " +
                                        myArray[1] +
                                        " is " +
                                        getRandomIntInclusive(0, 100) +
                                        "%"
                                    );
                                } else {
                                    this.setAccountColor();
                                    this.sendRoomMsg(
                                        room,
                                        from +
                                        " : Invalid Format! Please try again.\n Example : Love Romeo Juliet"
                                    );
                                }
                            }
                        }
                        if (message.toLowerCase().startsWith(".c ")) {
                            if (from != BOT_ID) {
                                this.tempRoom = room;
                                str = message.substring(3).toString();
                                let myArray = str.split(" ");

                                if (myArray.length == 2) {
                                    create(myArray[0], myArray[1]);
                                    this.setAccountColor();
                                    this.setAccountColor();
                                    this.sendRoomMsg(
                                        room, "Please wait.."
                                    );
                                    //wait(2000);
                                    console.log(msgg);
                                    //await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](1000);
                                    if (iscreated == false) {
                                        this.setAccountColor();
                                        this.sendRoomMsg(
                                            room, "ID has been created"
                                        );
                                    }
                                    else {
                                        this.setAccountColor();
                                        this.sendRoomMsg(
                                            room, "ID already exist"
                                        );
                                    }
                                    ///msgg = "";
                                } else {
                                    this.setAccountColor();
                                    this.sendRoomMsg(
                                        room,
                                        from +
                                        " : Invalid Format! Please try again.\n Example : .C Username Password"
                                    );
                                }
                            }
                        }

                        if (message.toLowerCase().startsWith(".flames ")) {
                            if (from != BOT_ID) {
                                this.tempRoom = room;
                                str = message.substring(8).toString();
                                let myArray = str.split(" ");

                                console.log(myArray);
                                console.log(myArray.length);

                                if (myArray.length == 2) {
                                    this.setAccountColor();
                                    this.sendRoomMsg(
                                        room,
                                        " 🔥️ Flames between " +
                                        myArray[0] +
                                        " and " +
                                        myArray[1] +
                                        " is " +
                                        getRandomIntInclusive(0, 100) +
                                        "% 🔥"
                                    );
                                } else {
                                    this.setAccountColor();
                                    this.sendRoomMsg(
                                        room,
                                        from +
                                        " : Invalid Format! Please try again.\n Example : Flames Romeo Juliet"
                                    );
                                }
                            }
                        }

                        if (
                            message.toLowerCase().startsWith(".a ") ||
                            message.toLowerCase().startsWith(".o ") ||
                            message.toLowerCase().startsWith(".b ") ||
                            message.toLowerCase().startsWith(".m ") ||
                            message.toLowerCase().startsWith(".n ")
                        ) {
                            targetIndex = message.substring(3);
                            if (this.user_list) {
                                if (isNaN(targetIndex)) {
                                    console.log(
                                        "Invalid input!"
                                    );
                                } else {
                                    if (targetIndex <= this.user_list.length) {
                                        //console.log(this.user_list[targetId-1]);
                                        if (message.toLowerCase().substring(0, 2).trim() == ".a") {
                                            this.grantAdmin(this.user_list[targetIndex - 1], room);
                                        } else if (
                                            message.toLowerCase().substring(0, 2).trim() == ".o"
                                        ) {
                                            this.grantOwner(this.user_list[targetIndex - 1], room);
                                        } else if (
                                            message.toLowerCase().substring(0, 2).trim() == ".m"
                                        ) {
                                            this.grantMember(this.user_list[targetIndex - 1], room);
                                        } else if (
                                            message.toLowerCase().substring(0, 2).trim() == ".b"
                                        ) {
                                            this.banUser(this.user_list[targetIndex - 1], room);
                                        } else if (
                                            message.toLowerCase().substring(0, 2).trim() == ".n"
                                        ) {
                                            this.grantNone(this.user_list[targetIndex - 1], room);
                                        }
                                    } else {
                                        //console.log("Invalid Input");
                                        this.setAccountColor();
                                        this.sendRoomMsg(room, "Invalid input!");
                                    }
                                }
                            }
                        }

                        if (message.toLowerCase().startsWith(".wc ")) {
                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from) | from == this.botMasterId) {
                                this.handleUserGreetings(message, room);
                            }
                        }


                        if (message.toLowerCase().startsWith(".spin ")) {
                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from) | from == this.botMasterId) {

                                this.handleSpin(message, room);
                            }
                        }

                        // Image Search Google
                        if (message.toLowerCase().startsWith("...img ")) {
                            img_query_1 = message.substring(4);
                            (function () {
                                return __awaiter(_this, void 0, void 0, function () {
                                    var links, results;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                links = [];
                                                return [
                                                    4 /*yield*/,
                                                    google.scrape(img_query_1.trim(), 20),
                                                ];
                                            case 1:
                                                results = _a.sent();
                                                console.log("results", results);
                                                results.forEach(function (element) {
                                                    links.push(element.url);
                                                });
                                                this.setAccountColor();
                                                this.sendRoomMsg(room, "", get_random(links));
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            })();
                        }
                        // Switch Voice Language
                        if (message.toLowerCase().startsWith("...lang ")) {
                            if (from == this.botMasterId) {
                                lang = message.substring(5);
                                this.sL = lang;
                            }
                        }
                        // Google Text to Voice
                        if (message.toLowerCase().startsWith(".tts ")) {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                audio_query = message.substring(5);
                                url = googleTTS.getAudioUrl(audio_query, {
                                    lang: this.sL,
                                    slow: false,
                                    host: "https://translate.google.com",
                                });
                                this.setAccountColor();
                                this.sendRoomMsg(room, "", "", url);
                                console.log(url);
                            }
                        }
                        // Urban Dictionary
                        if (message.toLowerCase().startsWith(".ud ")) {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                ud_query_1 = message.substring(4);
                                trollface = urban(ud_query_1);
                                instance = this;
                                trollface.first(function (json) {
                                    console.log(json);
                                    if (json != undefined) {
                                        var def = json["definition"];
                                        var word = json["word"];
                                        var example = json["example"];
                                        instance.sendRoomMsg(
                                            room,
                                            "Word: " +
                                            word +
                                            "\n\n" +
                                            "Def.: " +
                                            def +
                                            "\n" +
                                            "\n\n" +
                                            "Example: " +
                                            example
                                        );
                                    } else {
                                        instance.sendRoomMsg(
                                            room,
                                            "No results found for: " + ud_query_1
                                        );
                                    }
                                });
                            }
                        }
                        // Weather Scrape

                        if (message.toLowerCase().startsWith(".w ")) {



                            if (from) {
                                query_1 = message.substring(3).replace(/\s/g, "+");
                                url =
                                    "https://api.openweathermap.org/data/2.5/weather?q=" +
                                    query_1 +
                                    "&APPID=662cf362941ae15b7323fdadb9eb12db&units=metric";
                                instance = this;
                                request(url, function (err, response, body) {
                                    if (err) {
                                        console.log("error:", err);
                                    } else {
                                        var weather = JSON.parse(body);
                                        console.log(weather);

                                        var sunset = weather.sys.sunset;
                                        if (weather.cod == 200) {
                                            var inner = [];
                                            inner = weather.weather;
                                            var message_1 =
                                                "🌡️ Temp.: " +
                                                weather.main.temp +
                                                " degrees" +
                                                "\n\n" +
                                                "☁️ Desp.: " +
                                                inner[0].main +
                                                " [" +
                                                inner[0].description +
                                                "]\n\n" +
                                                "🌁 Humidity: " +
                                                weather.main.humidity +
                                                "\n\n" +
                                                "🚉 Place: " +
                                                weather.name +
                                                " (" +
                                                weather.sys.country +
                                                ")";
                                            instance.sendRoomMsg(room, message_1);
                                        } else {
                                            instance.sendRoomMsg(room, weather.message);
                                        }
                                    }
                                });
                            }
                        }

                        // New Image Scrapper Without Browser Opening
                        if (message.toLowerCase().startsWith(".image ")) {

                            var text = fs.readFileSync("./masters.txt", "utf-8");
                            var textByLine = text.split("\n");
                            if (textByLine.includes(from)) {
                                query = message.substring(7).replace(/\s/g, "+");
                                instance = this;
                                gis(query, function (error, results) {
                                    if (error) {
                                        console.log(error);
                                    } else {
                                        var json = JSON.stringify(results, null, "  ");
                                        var s = JSON.parse(json);
                                        var urls_1 = [];
                                        s.forEach(function (element) {
                                            if (
                                                element.url.endsWith(".jpg") ||
                                                element.url.endsWith(".jpeg") ||
                                                element.url.endsWith(".png")
                                            ) {
                                                urls_1.push(element.url);
                                            }
                                        });
                                        //console.log(urls);

                                        for (var i = 0; i <= 10; i++) {
                                            instance.sendRoomMsg(room, "", urls_1[i], "");
                                        }
                                    }
                                });
                            }
                        }

                        return [2 /*return*/];

                }
            });
        });
    };




    Client.prototype.inviteUsers = async function (roomName) {
        this.sendPvtMsg(xBot, ".u " + roomName)
    }

    Client.prototype.shareMusic = function (shareTo, shareFrom, fromRoom) {
        if (this.shareSongMap.has(shareFrom)) {
            console.log("founddd", shareTo, shareFrom, fromRoom)
            var getSharedDetails = this.shareSongMap.get(shareFrom);

            this.sendPvtMsg(shareTo, "Hi " + shareTo + ",\n" + shareFrom + " just dedicated this music to you 🥰\n\n\Music info :\nTitle : " + getSharedDetails.songName + "\nDuration : " + getSharedDetails.duration + "\nSize : " + getSharedDetails.size + "\nDownload link : " + getSharedDetails.dlink);

            console.log(getSharedDetails)


            this.sendRoomMsg(fromRoom, "☑️Song has been dedicated to " + shareTo);

            this.sendPvtMsg(shareTo, "", getSharedDetails.thumbnailURL);
            this.sendPvtMsg(shareTo, "", "", getSharedDetails.AudioURL, 300);


        }
    };

    Client.prototype.sendSong = async function (searchQuery, roomName, playedBy) {

        searchQuery = searchQuery.replace(/ /g, "+");
        //try {

        const yts = require('yt-search')
        const r = await yts(searchQuery)

        const videos = r.videos.slice(0, 5)
        this.videoSearchArray = videos.filter(items => items.seconds != 0)
        console.log(this.videoSearchArray);

        // this.videoSearchArray.forEach(function (v) {
        //console.log(v);

        this.vidID = this.videoSearchArray[0].videoId
        this.vidLink = this.videoSearchArray[0].url
        this.vidTitle = this.videoSearchArray[0].title
        this.vidTime = this.videoSearchArray[0].timestamp
        this.author = this.videoSearchArray[0].author.name
        this.duration = this.videoSearchArray[0].duration.seconds
        console.log(this.duration, "duration")

        var agents = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"]

        var ua = agents[Math.floor(Math.random() * agents.length)];
        this.ytURL = "https://youtu.be/" + this.vidID;

        const apiConvert = await fetch("https://x2download.app/api/ajaxSearch", {
            "headers": {
                "user-agent": ua,
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,hi;q=0.8",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
                "cookie": "__atuvc=10%7C15; .AspNetCore.Antiforgery.O86muWubw_8=CfDJ8C6GIP27OVVEq5ztYWbkOVN0kFoS8cFP6ZJrx3Khqsq-GoztLoQHrlm6Fo_Z5DkHkwEsGNg8j94gZ_L0s3muQoT80Ep2UVxXIlu38iObEDVyzgIuNiuo1wItw2W2grOcfCE_6R7TRepu3gelB_PMrlc; __cflb=0H28vzSfxwfQLrkLZt4ZyfgWs4uCy5mCh6BTfQc9qED",
                "Referer": "https://x2download.app/en/download-youtube-to-mp3?q=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D" + this.vidID,
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": "q=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D" + this.vidID + "&vt=mp3",
            "method": "POST"
        });

        const apiConvertResponse = await apiConvert.json();
        ////console.log(apiConvertResponse);
        this.uploader = apiConvertResponse.a;
        this.vidToken = apiConvertResponse.token;
        this.vidLinkExpired = apiConvertResponse.timeExpires;
        this.vidSize = apiConvertResponse.links.mp3["5"].size;

        const getLink = await fetch("https://backend.svcenter.xyz/api/convert-by-45fc4be8916916ba3b8d61dd6e0d6994", {
            "headers": {
                "user-agent": ua,
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,hi;q=0.8",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
                "x-requested-key": "de0cfuirtgf67a",
                "Referer": "https://x2download.app/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": "v_id=" + this.vidID + "&ftype=mp3&fquality=64&token=" + this.vidToken + "&timeExpire=" + this.vidLinkExpired + "&client=X2Download.app",
            "method": "POST"
        });

        const getLinkResponse = await getLink.json();
        console.log(getLinkResponse);
        this.dlink = getLinkResponse.d_url;
        await this.removeStr(this.dlink, "/64/");

        try {
            var Headers = "{headers: {'Access-Control-Allow-Origin': '*'}";
            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
            };
            const response = await fetch('https://i.ytimg.com/vi/' + this.vidID + '/maxresdefault.jpg', requestOptions, Headers);
            var status = response.status;
            if (status == "404") {
                this.vidThumbnail = "https://i.ytimg.com/vi/" + this.vidID + "/mqdefault.jpg";
            }
            else {
                this.vidThumbnail = "https://i.ytimg.com/vi/" + this.vidID + "/maxresdefault.jpg";
            }
        } catch {
            this.vidThumbnail = "https://i.ytimg.com/vi/" + this.vidID + "/mqdefault.jpg";
        }

        this.sendRoomMsg(roomName, "", this.vidThumbnail);
        this.sendRoomMsg(roomName, `Title : ${this.vidTitle}\nUploaded by : ${this.uploader}\nDuration : ${this.vidTime}\nSize : ${this.vidSize}\nWatch online : ${this.vidLink}\nDownload Link (audio) : ${this.dload320}`);
        this.sendRoomMsg(roomName, "", "", this.dlink, "300");


        var myObj = {
            'by': playedBy,
            'songName': this.vidTitle,
            "AudioURL": this.dlink,
            "thumbnailURL": this.vidThumbnail,
            "duration": this.vidTime,
            "size": this.vidSize,
            "dlink": this.dload320
        };

        this.shareSongMap.set(playedBy, myObj);

        // }
        // catch {
        //   this.sendRoomMsg(roomName, this.targetId + " : we are temporarily unable to process this request, please try again later.");

        // }
    }

    Client.prototype.removeStr = async function (string, str1) {
        var string = this.dlink;
        var newstr = string.replace(new RegExp("\\b" + str1 + "\\b"), "/320/");
        this.dload320 = newstr;
    };

    Client.prototype.getColorCodes = async function () {
        var storePayload = {
            handler: "store",
            id: this.keyGen(10, true),
            type: "color_products_list",
            value: "none",
        };
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify(storePayload));
        }
    };
    Client.prototype.checkActivity = async function (targetID) {
        const kickPayload = {
            handler: "last_activity",
            id: this.keyGen(10, true),
            "username": targetID,
        };
        if (
            this.webSocket != null &&
            this.webSocket.readyState == WebSocket.OPEN
        ) {
            this.webSocket.send(JSON.stringify(kickPayload));
        }
    }
    Client.prototype.setAccountColor = async function () {

        var item = colorCodesArray[Math.floor(Math.random() * colorCodesArray.length)];
        //console.log(colorCodesArray);
        var changeColorPayload = {
            handler: "store",
            id: this.keyGen(10, true),
            type: "purchase_color",
            value: item,
        };
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify(changeColorPayload));
        }


    };
    Client.prototype.getRecentUsers = async function (searchQuery, roomName) {

        var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];

        timeAgo = (date) => {
            var ms = (new Date()).getTime() - date.getTime();
            var seconds = Math.floor(ms / 1000);
            var minutes = Math.floor(seconds / 60);
            var hours = Math.floor(minutes / 60);
            var days = Math.floor(hours / 24);
            var months = Math.floor(days / 30);
            var years = Math.floor(months / 12);

            if (ms === 0) {
                return 'Just now';

            } if (seconds === 1) {
                return seconds + ' second Ago';
            }
            if (seconds < 60) {
                return seconds + ' seconds Ago';
            }
            if (minutes === 1) {
                return minutes + ' minute Ago';
            }
            if (minutes < 60) {
                return minutes + ' minutes Ago';
            }
            if (hours === 1) {
                return hours + ' hour Ago';
            }
            if (hours < 24) {
                return hours + ' hours Ago';
            } if (days === 1) {
                return days + ' day Ago';
            }
            if (days < 30) {
                return days + ' days Ago';
            } if (months === 1) {
                return months + ' month Ago';
            }
            if (months < 12) {
                return months + ' months Ago';
            } if (years === 1) {
                return months + ' year Ago';
            } else {
                return years + ' years Ago';
            }

        }

        //var aDay = 110 * 1000;
        // console.log(timeAgo(new Date(Date.now() - aDay)));
        // console.log(timeAgo(new Date()));
        // console.log(timeAgo(new Date('Dec 24 2022 8:08:19')));
        // console.log(timeAgo(new Date('Jun 27 2020 00:12:19')));
        // console.log(timeAgo(new Date('May 28 2020 13:12:19')));
        // console.log("-------------------------");



        const paginate = (array, pageSize, pageNumber) => {
            return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
        }


        //var first = this.recentUsers.splice(0, 10);
        var hmm = paginate(nums, 10, 1);
        this.setAccountColor();
        //this.sendRoomMsg(this.tempRoom, hmm);



    };

    //#region  other codes
    Client.prototype.handleSpin = function (msg, roomName) {
        var str = msg.substring(6).toString();
        var isOnOff = str.replace(/\s/g, "");
        if (isOnOff.toLowerCase() == "on" || isOnOff.toLowerCase() == "1") {
            if (this.isSpin == true) {
                this.setAccountColor();
                this.sendRoomMsg(roomName, "Spin already enabled❗");
                return;
            }
            this.isSpin = true;
            this.setAccountColor();
            this.sendRoomMsg(roomName, "Spin Enabled ✅");
        } else if (isOnOff.toLowerCase() == "off" || isOnOff.toLowerCase() == "0") {
            if (this.isSpin == false) {
                this.setAccountColor();
                this.sendRoomMsg(roomName, "Spin already disabled❗");
                return;
            }
            this.isSpin = false;
            this.setAccountColor();
            this.sendRoomMsg(roomName, "Spin disbaled ✅");
        }
        this.spinSettingsMap.set(roomName, this.isSpin);
    };
    Client.prototype.handleUserGreetings = function (msg, roomName) {
        var str = msg.substring(4).toString();
        var isOnOff = str.replace(/\s/g, "");
        if (isOnOff.toLowerCase() == "on" || isOnOff.toLowerCase() == "1") {
            if (this.isWcGreetings == true) {
                this.setAccountColor();
                this.sendRoomMsg(roomName, "Greetings already enabled❗");
                return;
            }
            this.isWcGreetings = true;
            //this.wcSettingsMap.set(roomName, this.isWcGreetings);
            this.setAccountColor();
            this.sendRoomMsg(roomName, "Greetings enabled ✅");
        } else if (isOnOff.toLowerCase() == "off" || isOnOff.toLowerCase() == "0") {
            if (this.isWcGreetings == false) {
                this.setAccountColor();
                this.sendRoomMsg(roomName, "Greetings already disabled❗");
                return;
            }
            this.isWcGreetings = false;
            this.setAccountColor();
            this.sendRoomMsg(roomName, "Greetings disbaled ✅");
        }
        this.wcSettingsMap.set(roomName, this.isWcGreetings);

    };
    Client.prototype.fetchUserProfile = function (targetId, group) {
        var userSearchPayload = {
            handler: HANDLER_PROFILE_OTHER,
            id: this.keyGen(10, true),
            type: targetId,
        };
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify(userSearchPayload));
        }
    };
    Client.prototype.joinRoom = function (roomName) {
        var groupJoinPayload = {
            handler: HANDLER_ROOM_JOIN,
            id: this.keyGen(10),
            name: roomName,
        };
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify(groupJoinPayload));
        }
    };

    Client.prototype.login = function () {

        // const kickPayload = {
        //     handler: "id_setup",
        //     id: this.keyGen(10, true),
        //     type: "set",
        //     "value": "888844440",
        // };
        // if (
        //     this.webSocket != null &&
        //     this.webSocket.readyState == WebSocket.OPEN
        // ) {
        //     this.webSocket.send(JSON.stringify(kickPayload));
        // }

        var loginPayload = {
            handler: HANDLER_LOGIN,
            id: this.keyGen(10),
            username: this.userName,
            password: this.passWord,
        };
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify(loginPayload));
        }
    };
    Client.prototype.register = function (targetId, passWord) {
        var registerPayload = {
            handler: "register",
            username: "111ncvmy",
            password: "Zxcv1234.",
            phone: "",
            uid: "",
            email: "",
            session: this.keyGen(10, true),
            sdk: "31",
            ver: "323",
            id: this.keyGen(10, true)
        };
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify(registerPayload));
        }
    };

    Client.prototype.keyGen = function (keyLength, isMsgId) {
        var i,
            key = "",
            characters =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        if (isMsgId) {
            characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ";
        }
        var charactersLength = characters.length;
        for (i = 0; i < keyLength; i++) {
            key += characters.substr(
                Math.floor(Math.random() * charactersLength + 1),
                1
            );
        }
        return key;
    };
    Client.prototype.generateBuildInfo = function () {
        var info = "";
        info += "320"; // Fixed Constant
        info += "-"; // -
        info += "Xiaomi"; // Manufacturer
        info += "-"; // -
        info += "M2102J20SG"; // Model
        info += "-"; // -
        info += "31"; // Sdk Api
        return info;
    };
    Client.prototype.sendRoomMsg = function (roomName, msg, photoUrl, audioUrl, audioLength) {
        var groupMsgPayload = null;
        if (photoUrl) {
            groupMsgPayload = {
                handler: HANDLER_ROOM_MESSAGE,
                id: this.keyGen(20, true),
                room: roomName,
                type: MESSAGE_TYPE.IMAGE,
                url: photoUrl,
                body: "",
                length: "",
            };
        } else if (audioUrl) {
            groupMsgPayload = {
                handler: HANDLER_ROOM_MESSAGE,
                id: this.keyGen(20, true),
                room: roomName,
                type: "audio",
                url: audioUrl,
                body: "",
                length: audioLength,
            };
        } else {
            groupMsgPayload = {
                handler: HANDLER_ROOM_MESSAGE,
                id: this.keyGen(20, true),
                room: roomName,
                type: MESSAGE_TYPE.TEXT,
                url: "",
                body: msg,
                length: msg.length,
            };
        }
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify(groupMsgPayload));
        }
    };
    Client.prototype.leaveGroup = function (roomName) {
        var leaveGroupPayload = {
            handler: HANDLER_ROOM_LEAVE,
            name: roomName,
            id: this.keyGen(17, true),
        };
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify(leaveGroupPayload));
        }
    };
    Client.prototype.sendRequest = function (targetId) {
        var sendRequestPayload = {
            handler: HANDLER_PROFILE_UPDATE,
            type: "send_friend_request",
            value: targetId,
            id: this.keyGen(17, true),
        };
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify(sendRequestPayload));
        }
    };
    Client.prototype.sendPvtMsg = async function (targetId, msgBody, photoUrl, audioUrl, audLength) {
        var pvMsgPayload = null;
        if (photoUrl) {
            pvMsgPayload = {
                handler: HANDLER_CHAT_MESSAGE,
                id: this.keyGen(20, true),
                to: targetId,
                type: MESSAGE_TYPE.IMAGE,
                url: photoUrl,
                body: ""
            };
        } else if (audioUrl) {
            pvMsgPayload = {
                handler: HANDLER_CHAT_MESSAGE,
                id: this.keyGen(20, true),
                to: targetId,
                type: "audio",
                url: audioUrl,
                body: "",
                length: audLength
            };
        } else {
            pvMsgPayload = {
                handler: HANDLER_CHAT_MESSAGE,
                id: this.keyGen(20, true),
                to: targetId,
                type: MESSAGE_TYPE.TEXT,
                url: "",
                body: msgBody
            };
        }
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify(pvMsgPayload));
        }


    };

    //#endregion
    return Client;
})();

exports.Client = Client;
//#endregion
//#region  other
function get_random(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included
}

//#endregion

var client = new Client(BOT_ID, BOT_PASSWORD);


// Jimp.read('1.jpg')
//   .then(lenna => {
//     return lenna
//       .resize(500, 500) // resize
//       .quality(100) // set JPEG quality
//       .greyscale() // set greyscale
//       .write('2.jpg'); // save
//   })
//   .catch(err => {
//     console.error(err);
//   });


