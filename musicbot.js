"use strict";
require('dotenv').config();

exports.__esModule = true;
var fs = require('fs');
const axios = require('axios');
var FormData = require('form-data');
const request = require('request');
const fetch = require('node-fetch');
var WebSocket = require("ws");
const readline = require("readline");
const { triggerAsyncId } = require("async_hooks");
const { resolve } = require('path');
const { response } = require('express');
const rcrds = require('./records.json');

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
      typeof Symbol == "function" &&
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






var personalMsg = `<b><span style="color:#000000">Name : Music Bot<br>Version : 1.0</b><br><br><b><span style="color:#000000">About : </span></b><i>A Music bot written in Python. Scrape music from Youtube, SoundCloud and Spotify.</i><br><br><b><span style="color:#000000">Basic commands :</span></b><br><span style="color:#000000">?PLAY SEARCH QUERY </span><i>to play the song</i><br><i>Example : ?PLAY love me like you do</i><br><span style="color:#000000">?SHARE USERNAME</span> <i>to share the song</i><br> <i>Example : ?SHARE fallen-angel</i><br><span style="color:#000000">?MYLOVE</span><i> to find random love partner</i><br><span style="color:#000000">?MYENEMY </span><i>to know who hates you </i><br><br><b><span style="color:#000000">Room Creator commands :</span></b><br>?OWNER <br>?ADMIN<br>?MEMBER<br>?BAN<br>?NONE<br><br><b><span style="color:#000000">How to invite this Bot?</span> Type <b><span style="color:#000000">?JOIN RoomName</span> <i>to invite in your room<br>Example : ?JOIN friends</i><br><br><br><b><span style="color:#000000">Last song :</b> <span style="color:{songRndColor}">{lastplayed}</span> <br><span style="color:#000000"><b>Played by :</b></span> {lastplayedby} [{roomname}]<br><span style="color:#000000"><b>Total songs played :</b></span> {playedcounts}<br><span style="color:#000000"><b>Total songs shared :</b></span> {sharedcounts}<br><br><br><b><span style="color:#000000">Made with love 🤍 in </span><span style="color:{rndColor}"><i>India</i></span></b>`;


//#region  variable and imports

var BOT_ID = process.env.MUSICBTID; // Bot ID
var BOT_PASSWORD = process.env.MUSICBTPWD

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
var emojis = ["Music Bot"];
var MESSAGE_TYPE;
(function (MESSAGE_TYPE) {
  MESSAGE_TYPE["TEXT"] = "text";
  MESSAGE_TYPE["IMAGE"] = "image";
})(MESSAGE_TYPE || (MESSAGE_TYPE = {}));

var logger;
var arrows = ">>>>> ";
var arrows2 = " >> ";

var myLove = false;
var invAll = false;
var trinvAll = false;
var myenemy = false;
var isKicked = false;
var getRoomusersBool = false;
var trComm = false;
var trRoomuserGrabCmplt = false;
var isMemberOnlyRoom = false;
var isLockedRoom = false;
var tempUser = "";
var temptargetRoom = "";
var actorUser = "";
var trInputRoom = "";
var TargetArray = [];
var searchLimitReached = false;
var publicRoomsArr = [];
var saveusersArr = [];

var colorCodesArray = [];
var isRoomEnterComplete = false;

function rndString(passwordLength) {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included
}
function genSeriel(passwordLength) {
  var chars = "0123456789";
  password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password
}

function generateRandomColor() {
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`
}

//#endregion

var Client = /** @class */ (function () {
  function Client(user, pass) {
    this.URL = process.env.WS_ADDRESS;
    this.webSocket = null;
    this.userName = "";
    this.passWord = "";
    this.roomName = "friends"; //Room name
    this.tempRoom = "";
    this.JoinCommTempRoom = "";
    this.playTempRoom = "";
    this.mylovetempRoom = "";
    this.myenemytempRoom = "";
    this.shareTempRoom = "";
    this.ispfpCheck = false;
    this.isProfileCheck = false;
    this.roomImageWC = false;
    this.wcImage = true;
    // this.myLove = false;
    // this.myenemy= false;
    // Bot Master ID
    this.masters = fs.readFileSync("masters.txt").toString().split("\n"); //master list
    this.botMasterId = process.env.BOT_MSTR;
    this.wcSettingsMap = new Map();
    this.spinSettingsMap = new Map();
    this.shareSongMap = new Map();



    this.usersList = [];
    this.videoSearchArray = [];

    this.vidID = "";
    this.vidTitle = "";
    this.vidTime = "";
    this.vidThumbnail = "";
    this.vidLink = "";
    this.author = "";
    this.dlink = "";
    this.duration = "";

    this.ytURL = "";
    this.dload320 = "";

    this.uploader = "";
    this.vidToken = "";
    this.vidLinkExpired = "";
    this.vidSize = "";


    this.sharedRecently = new Set();
    this.playedRecently = new Set();
    this.playedRoomRecently = new Set();
    this.myloveRecently = new Set();
    this.myenemyRecently = new Set();
    this.slapRecently = new Set();
    this.hugRecently = new Set();
    this.kissRecently = new Set();
    this.joinCommandRecently = new Set();
    this.creatorCommandsRecently = new Set();

    this.user_list = [];
    this.room_list = [];
    this.Proom_list = [];

    this.RoomUsers = [];
    this.RoomUsersOnlyUsernames = [];
    this.myRole = "";
    this.isWcGreetings = true;
    this.isSpin = false;
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
    //this.vidTitle = "";

    this.webSocket = new WebSocket(this.URL, [], JSON.stringify(headers));
    this.webSocket.addEventListener("open", this._onOpen.bind(this));
    this.webSocket.addEventListener("close", this._onClose.bind(this));
    this.webSocket.addEventListener("message", this._onMsg.bind(this));

    // this.webSocket.addEventListener('error', (event) => {
    //   ////console.log('WebSocket error: ', event);
    // });

    this.webSocket.on('error', async (error) => {
      //console.log(arrows + "SERVER IS OFFLINE");
      this.clearAll();
      this.webSocket.close();
    });
  }

  Client.prototype._log = function () {
    var msg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      msg[_i] = arguments[_i];
    }
    ////console.warn.apply(//console, __spreadArray(["LOG ====>>"], msg));
  };
  Client.prototype._onClose = async function (close) {
    try {
      this.usersList = saveusersArr.join('\n');
      // fs.writeFileSync('users.txt', usersList, "utf8");
      // fs.close(file_descriptor, (err) => {
      //   if (err)
      //     //console.error('Failed to close file', err);
      //   else {
      //     ///console.log("\n>> File Closed successfully");
      //   }
      // });
      this.usersList = [];
      clearInterval(this);
      logger.close(); //Terminate file stream
      searchLimitReached = false;
      isRoomEnterComplete = false;
      publicRoomsArr = [];
      colorCodesArray = [];
      this.shareSongMap.clear();
      this.playedRecently.clear();
      this.myloveRecently.clear();
      this.myenemyRecently.clear();
      this.sharedRecently.clear();
      this.playedRoomRecently.clear();
      this.creatorCommandsRecently.clear();

      this._log("ws: Socket closed");
      setTimeout(function () {
        var client = new Client(BOT_ID, BOT_PASSWORD);
      }, 10000);
    }
    catch { }
  };
  Client.prototype._onPing = async function (ping) {
    this._log(ping);
    if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
      ////console.log("ping");
    };
  };
  Client.prototype._onOpen = async function (open) {
    try {
      this._log("SOCKET OPENED");

      fs.readFile('users.txt', function (err, data) {
        if (err) throw err;
        saveusersArr = data.toString().split("\n");
      });

      logger = fs.createWriteStream('users.txt', {
        flags: 'a'
      });

      this.webSocket.pingInterval = setInterval(
        () => this.webSocket.ping(), 1000 * 60
      );

      await this.login();
    }
    catch { }
  };
  Client.prototype._onMsg = async function (payload) {
    if (payload != null) {
      this._log(payload.data);
      var parsedData = JSON.parse(payload.data);
      await this._handleParsedData(parsedData);
    }
  };

  Client.prototype.joinRooms = async function () {
    ////console.log("IN JOINROOMS FUNCTIONS >>  searchLimitReached >> " + searchLimitReached + " x : " + x);

    for (var x = 0; x <= publicRoomsArr.length - 1; x++) {
      //console.log(publicRoomsArr.length);
      this.joinRoom(publicRoomsArr[x]);
      //console.log(publicRoomsArr[x] + " " + x);
      await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](1000);
      if (x == publicRoomsArr.length - 1) {
        isRoomEnterComplete = true;
      }
    }



  };

  Client.prototype.update = function (users, callback) {
    fs.writeFile("./records.json", JSON.stringify(users), function (err) {
      if (typeof callback === "function") {
        callback()
      }
      if (err) {
        ////console.log(err);
      }
    });
  };

  Client.prototype.insertPlayed = function () {
    try {
      let channels = rcrds;
      let users = [];
      for (let i = 0; i < channels.length; i++) {
        users[i] = channels[i];
      }
      var playedCount = parseInt(users[0].played) + 1;
      users[0].played = playedCount;
      users[0].room = this.playTempRoom;

      this.update(users, () => {
        ////console.log("ok");
      });

    } catch (err) {
      ////console.log(err.stack);
    }
  };
  Client.prototype.insertKiss = async function () {
    try {
      //let rcrds = fs.readFileSync("./records.json", 'utf-8');
      let channels = rcrds;
      let users = [];
      for (let i = 0; i < channels.length; i++) {
        users[i] = channels[i];
      }
      var kissCount = parseInt(users[0].kiss) + 1;
      users[0].kiss = kissCount;

      let ecart = users.length - 1;
      if (ecart > 0) {
        for (let i = 1; i <= ecart; i++) {
          users.pop();
        }
      }
      this.update(users, () => {
        ////console.log("shared inserted");
      });

    } catch (err) {
      ////console.log(err.stack);
    }


  };
  Client.prototype.insertSlap = function () {
    try {
      let channels = rcrds;
      let users = [];
      for (let i = 0; i < channels.length; i++) {
        users[i] = channels[i];
      }
      var slapCount = parseInt(users[0].slap) + 1;
      users[0].slap = slapCount;

      this.update(users, () => {
        ////console.log("ok");
      });

    } catch (err) {
      ////console.log(err.stack);
    }
  };
  Client.prototype.insertHug = function () {
    try {
      let channels = rcrds;
      let users = [];
      for (let i = 0; i < channels.length; i++) {
        users[i] = channels[i];
      }
      var hugCount = parseInt(users[0].hug) + 1;
      users[0].hug = hugCount;

      this.update(users, () => {
        ////console.log("ok");
      });

    } catch (err) {
      ////console.log(err.stack);
    }
  };
  Client.prototype.insertShared = function () {
    try {
      let channels = rcrds;
      let users = [];
      for (let i = 0; i < channels.length; i++) {
        users[i] = channels[i];
      }
      var sharedCount = parseInt(users[0].shared) + 1;
      users[0].shared = sharedCount;

      this.update(users, () => {
        ////console.log("ok");
      });

    } catch (err) {
      ////console.log(err.stack);
    }
  };

  Client.prototype.saveUsers = async function (User) {
    try {
      if (!saveusersArr.includes(User)) {
        saveusersArr.push(User);
      }
      ////console.log(arrows + " : " + JSON.stringify(saveusersArr));
    }
    catch { }
  };

  Client.prototype.clearAll = async function () {
    searchLimitReached = false;
    isRoomEnterComplete = false;
    publicRoomsArr = [];
    this.usersList = [];
    colorCodesArray = [];
    this.shareSongMap.clear();
    this.playedRecently.clear();
    this.myloveRecently.clear();
    this.myenemyRecently.clear();
    this.sharedRecently.clear();
    this.playedRoomRecently.clear();
    this.creatorCommandsRecently.clear();

  };
  Client.prototype._handleParsedData = async function (parsedData) {
    var _this = this;
    if (parsedData.handler == HANDLER_LOGIN_EVENT) {

      if (parsedData.type == "success") {

        await this.clearAll();

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

        var adminPayload = {
          handler: "profile_update",
          id: this.keyGen(20, true),
          type: "birthdate",
          value: ""
        };
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
          this.webSocket.send(JSON.stringify(adminPayload));
        }

        try {
          await this.getColorCodes();
          await this.joinRoom("friends");

          // await this.getPublicRooms();
          // await this.joinRooms();
          isRoomEnterComplete = true;

        }
        catch { }
      }
    }
    if (parsedData.handler == "chat_message") {
      if (parsedData.type == "text") {
        var from = parsedData.from;
        var message = parsedData.body;
        var to = parsedData.to;
        this.processPVChatMessage(from, message, to);
      }
    };
    if (parsedData.handler == HANDLER_ROOM_EVENT) {
      if (parsedData.type == "text") {
        var from = parsedData.from;
        var message = parsedData.body;
        var userId = parsedData.user_id;
        var room = parsedData.room;
        var role = parsedData.role;
        this.processGroupChatMessage(from, message, room, userId, role);
      }
      if (parsedData.type == "user_joined") {
        var user = parsedData.username;
        var group = parsedData.name;

        var writeLine = (line) => logger.write(`\n${line}`);
        writeLine(user);
      }
      if (parsedData.type == "user_left") {
        var user = parsedData.username;
        var group = parsedData.name;
      }
      if (parsedData.type == "you_joined") {
        logger.close();
        //this.tempRoom = parsedData.name;
        //console.log("joined to : " + parsedData.name);
      }
      if (parsedData.type == "room_unsufficient_previlige") {
        var room_2 = parsedData.name;
        if (parsedData.room == this.JoinCommTempRoom) {
          this.sendRoomMsg(room_2, "❌ Insufficient Privileges.");
        }
      }
      if (parsedData.type == "room_membership_required") {
        //isMemberOnlyRoom = true;
        //var room_2 = parsedData.name; //memOnlyRoom Name
        if (parsedData.room == this.JoinCommTempRoom) {
          this.sendRoomMsg(this.JoinCommTempRoom, "❌ Insufficient Privileges!!\nMembership required to enter the room");
        }
      }
      if (parsedData.type == "room_needs_password") {
        //isLockedRoom = true;
        //var room_2 = parsedData.name; //lockedRoom Name
        if (parsedData.room == this.JoinCommTempRoom) {
          this.sendRoomMsg(this.JoinCommTempRoom, "❌ Insufficient Privileges!!\nRoom Password required to enter the room");
        }
      }
      if (parsedData.type == ROLE_CHANGED) {
        var room_3 = parsedData.name;
        var userName_1 = parsedData.t_username;
        var newRole = parsedData.new_role;
        //await this.sendRoomMsg(room, "✅ " + userName + " is now " + newRole + ".");
      }
    }
    function removeTags(str) {
      if ((str == null) || (str == ''))
        return false;
      else
        str = str.toString();
      return str.replace(/(<([^>]+)>)/ig, '');
    }
    if (parsedData.handler == HANDLER_PROFILE_OTHER) {
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
              this.sendRoomMsg(this.tempRoom, "", photo);
            } else {
            }
            //var rndwlc = this.wcMSgs[Math.floor(Math.random() * this.wcMSgs.length)];

            //this.sendRoomMsg(this.tempRoom, rndwlc.replace("{username}", userName));
            this.roomImageWC = false;
          }

          if (this.ispfpCheck == true) {
            if (photo != null && photo.length > 0) {
              this.sendRoomMsg(this.tempRoom, "", photo);
            } else {
              this.sendRoomMsg(this.tempRoom, "PFP not found.");
            }
            this.ispfpCheck = false;
          }
          if (this.isProfileCheck == true) {
            this.sendRoomMsg(this.tempRoom, msg);
            if (photo != null && photo.length > 0) {
              this.sendRoomMsg(this.tempRoom, "", photo);
            } else {
            }
            this.isProfileCheck = false;
          }
        }
      }
    }

    if (parsedData.handler == "room_info") {
      if (parsedData.type == "public_rooms") {
        var publicRooms = parsedData.rooms;
        if (publicRooms.length == 0) {
          searchLimitReached = true;
        }
        else {
          for (var i = 0; i < publicRooms.length; i++) {
            // if (publicRooms[i].password_protected == "0" && publicRooms[i].members_only == "0") {

            publicRoomsArr.push(publicRooms[i].name);

          }
        }
      }
    }
    if (parsedData.handler == HANDLER_ROOM_ADMIN) {
      if (parsedData.type == "occupants_list") {
        this.RoomUsers = [];
        this.RoomUsersOnlyUsernames = [];
        this.myRole = "";
        for (var i = 0; i < parsedData.occupants.length; i++) {
          this.RoomUsers.push(parsedData.occupants[i]);
          this.RoomUsersOnlyUsernames.push(parsedData.occupants[i].username);
        }
        for (var x = 0; x < this.RoomUsers.length; x++) {
          if (this.RoomUsers[x].username == BOT_ID) {
            this.myRole = this.RoomUsers[x].role;
            break;
          }
        }

        ////console.log(JSON.stringify(this.RoomUsersOnlyUsernames));
        if (myLove == true) {
          var rndUser1 = this.RoomUsersOnlyUsernames[Math.floor(Math.random() * this.RoomUsersOnlyUsernames.length)];
          if (rndUser1 == this.myloveCommander) {
            var rndUser1 = this.RoomUsersOnlyUsernames[Math.floor(Math.random() * this.RoomUsersOnlyUsernames.length)];
          }

          this.sendRoomMsg(
            this.mylovetempRoom,
            "Hi " + this.myloveCommander + ", Your Love ❤️ is " + rndUser1 + ".\n Love between " +
            this.myloveCommander +
            " and " +
            rndUser1 +
            " is " +
            this.getRandomIntInclusive(0, 100) +
            "%"
          );
          myLove = false;
          this.myloveCommander = "";
          this.RoomUsersOnlyUsernames = [];
        }

        else if (myenemy == true) {
          var rndUser1 = this.RoomUsersOnlyUsernames[Math.floor(Math.random() * this.RoomUsersOnlyUsernames.length)];
          if (rndUser1 == this.myenemyCommander) {
            var rndUser1 = this.RoomUsersOnlyUsernames[Math.floor(Math.random() * this.RoomUsersOnlyUsernames.length)];
          }
          ////console.log("\n\n" + rndUser1);

          this.sendRoomMsg(
            this.myenemytempRoom,
            "Hi " + this.myenemyCommander + ", your Enemy 👿 is " + rndUser1 + ".\n Flames 🔥 between " +
            this.myenemyCommander +
            " and " +
            rndUser1 +
            " is " +
            this.getRandomIntInclusive(0, 100) +
            "%"
          );

          myenemy = false;
          this.myenemyCommander = "";
          this.RoomUsersOnlyUsernames = [];
        }


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
  Client.prototype.setAccountColor = async function () {

    var item = colorCodesArray[Math.floor(Math.random() * colorCodesArray.length)];
    //////console.log(colorCodesArray);
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
  Client.prototype.getPublicRooms = async function () {
    try {
      for (var i = 0; i < 60; i++) {
        ////console.log(arrows + "ROOM LIST ITERATION " + i);
        //console.log(arrows + "TOTAL ROOMS FOUND : " + publicRoomsArr.length);

        if (searchLimitReached == true) {

          //console.log(arrows + "ROOM SEARCH COMPLETED");
          ////console.log(arrows + "TOTAL ROOMS FOUND : " + publicRoomsArr.length);
          //await this.joinRooms();
          break;
        }
        var GetPublicRoomsPayload = {
          handler: "room_info",
          id: rndString(10),
          type: "public_rooms",
          page: i.toString()
        };
        if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
          this.webSocket.send(JSON.stringify(GetPublicRoomsPayload));
        }
        await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](1000);
      }
    }
    catch { }
  };

  Client.prototype.sendSong = async function (searchQuery, roomName) {
    searchQuery = searchQuery.replace(/ /g, "+");
    //try {
    this.getChatroomUsers(roomName);

    const yts = require('yt-search')
    const r = await yts(searchQuery)

    const videos = r.videos.slice(0, 5)
    this.videoSearchArray = videos.filter(items => items.seconds != 0)
    console.log(this.videoSearchArray);

    var vidID;
    var vidLink;
    var vidTitle;
    var vidTime;
    var author;
    var duration;

    // this.videoSearchArray.forEach(function (v) {
    //console.log(v);

    this.vidID = this.videoSearchArray[0].videoId
    this.vidLink = this.videoSearchArray[0].url
    this.vidTitle = this.videoSearchArray[0].title
    this.vidTime = this.videoSearchArray[0].timestamp
    this.author = this.videoSearchArray[0].author.name
    this.duration = this.videoSearchArray[0].duration.seconds
    console.log(this.duration, "duration")
    //const views = String(v.views).padStart(10, ' ')

    // })

    // this.vidID = vidID
    // this.vidLink = vidLink
    // this.vidTitle = vidTitle
    // this.vidTime = vidTime
    // this.author = author
    // this.duration = duration

    var agents = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"]

    var ua = agents[Math.floor(Math.random() * agents.length)];




    // const api1 = await fetch("https://yt5s.io/api/ajaxSearch", {
    //   "headers": {
    //     "accept": "*/* ",
    //     "accept-language": "en-US,en;q=0.9,hi;q=0.8",
    //     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    //     "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
    //     "sec-ch-ua-mobile": "?0",
    //     "sec-ch-ua-platform": "\"Windows\"",
    //     "sec-fetch-dest": "empty",
    //     "sec-fetch-mode": "cors",
    //     "sec-fetch-site": "same-origin",
    //     "x-requested-with": "XMLHttpRequest",
    //     "cookie": "__atssc=google%3B12; __atuvc=9%7C48%2C35%7C49; __atuvs=6391e48b6098eeb4000",
    //     "Referer": "https://yt5s.io/en5/youtube-to-mp3",
    //     "Referrer-Policy": "strict-origin-when-cross-origin"
    //   },
    //   "body": "q=" + searchQuery + "&vt=mp3",
    //   "method": "POST"
    // });
    // const api1Response = await api1.json();
    // //console.log(api1Response);

    // this.videoSearchArray = newArray = api1Response.items.filter(items => items.d != '🔴 Live')
    // //console.log(newArray);
    // this.vidID = newArray[0].v;
    // this.vidTitle = newArray[0].t;
    // this.vidLink = newArray[0].d;



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


    if (this.myRole != "none") {
      this.sendRoomMsg(roomName, "", this.vidThumbnail);
      this.sendRoomMsg(roomName, `Title : ${this.vidTitle}\nUploaded by : ${this.uploader}\nDuration : ${this.vidTime}\nSize : ${this.vidSize}\nWatch online : ${this.ytURL}\nDownload Link (audio) : ${this.dload320}\n\nPersonal Cooldown : 60 secs.\nRoom Cooldown : 10 secs.`);
      this.sendRoomMsg(roomName, "", "", this.dlink, "300");

    }
    else {
      this.sendRoomMsg(roomName, `Music Title : ${this.vidTitle}`);
      this.sendRoomMsg(roomName, "", "", this.dlink, this.duration);
    }
    var myObj = {
      'by': this.playCommander,
      'songName': this.vidTitle,
      "AudioURL": this.dlink,
      "thumbnailURL": this.vidThumbnail,
      "duration": this.vidTime,
      "size": this.vidSize,
      "dlink": this.dload320
    };

    this.shareSongMap.set(this.playCommander, myObj);
    this.insertPlayed();

    ////console.log("----------------------------");

    const rcrds = require('./records.json');
    var playedCount2 = rcrds[0].played;
    var sharedCount2 = rcrds[0].shared;
    var roomName2 = rcrds[0].room;

    var songRndColor = generateRandomColor();
    var newStatus = personalMsg.replace("{lastplayedby}", this.playCommander).replace("{lastplayed}", this.vidTitle).replace("{playedcounts}", playedCount2).replace("{sharedcounts}", sharedCount2).replace("{rndColor}", generateRandomColor()).replace("{songRndColor}", songRndColor).replace("{roomname}", roomName2);

    await this.setStatus(newStatus);

    /////console.log([...this.shareSongMap].join(' '));
    // }
    //catch {
    //this.sendRoomMsg(roomName, this.playCommander + " We are temporarily unable to process this request, please try again later.");

    // }


  };


  Client.prototype.removeStr = async function (string, str1) {
    var string = this.dlink;
    var newstr = string.replace(new RegExp("\\b" + str1 + "\\b"), "/320/");
    this.dload320 = newstr;
  };



  Client.prototype.shareMusic = async function (shareTo) {
    if (this.shareSongMap.has(this.ShareCommander)) {

      var getSharedDetails = this.shareSongMap.get(this.ShareCommander);
      ////console.log(JSON.stringify(getSharedDetails));

      //await this.sendPvtMsg(shareTo, "", getSharedDetails.thumbnailURL)
      await this.sendPvtMsg(shareTo, "Hi " + shareTo + ",\n" + this.ShareCommander + " just dedicated this music to you 🥰\n\n\Music info :\nTitle : " + getSharedDetails.songName + "\nDuration : " + getSharedDetails.duration + "\nSize : " + getSharedDetails.size + "\nDownload link : " + getSharedDetails.dlink);
      ////console.log(getSharedDetails.AudioURL);
      var aud = getSharedDetails.AudioURL;
      // var audLenStr = getSharedDetails.duration;
      // var xx = audLenStr.split(":");
      // var xx = parseInt(xx[0]) * 60 * parseInt(xx[1]);
      ////console.log(xx);
      //var audLen = parseInt(getSharedDetails.duration);


      await this.sendPvtMsg(shareTo, "", getSharedDetails.thumbnailURL);
      await this.sendPvtMsg(shareTo, "", "", aud, "300");
      await this.sendRoomMsg(this.shareTempRoom, "☑️Song has been dedicated to " + shareTo);


      var playedCount2 = rcrds[0].played;
      var sharedCount2 = rcrds[0].shared;
      var roomName2 = rcrds[0].room;

      var songRndColor = generateRandomColor();
      var newStatus = personalMsg.replace("{lastplayedby}", this.playCommander).replace("{lastplayed}", this.vidTitle).replace("{playedcounts}", playedCount2).replace("{sharedcounts}", sharedCount2).replace("{rndColor}", generateRandomColor()).replace("{songRndColor}", songRndColor).replace("{roomname}", roomName2);

      await this.setStatus(newStatus);

    }
  };

  Client.prototype.getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included
  };

  Client.prototype.processPVChatMessage = function (from, message, to) {

  };

  Client.prototype.processGroupChatMessage = function (from, message, room, userId, role) {
    return __awaiter(this, void 0, void 0, function () {
      var search,
        videos,
        msg,
        random,
        search,
        shareTo,
        ShareCommander,
        playCommander,
        myenemyCommander,
        myloveCommander,
        str,
        targetId,
        str,
        targetId,
        str,
        targetId,
        str,
        targetId,
        kickPayload,
        trendingPayload,
        str,
        targetId,
        str,
        targetId,
        str,
        targetId,
        str,
        targetId,
        FromShare,
        searchQuery,
        searchQuery,
        searchQuery,
        searchQuery,
        token,
        targetQuery,
        str,
        roomUsersPayload,
        targetIndex,
        img_query_1,
        lang,
        audio_query,
        url,
        ud_query_1,
        trollface,
        instance,
        query_1,
        url,
        instance,
        query,
        x,
        query;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0: //console.log(from + " : " + message);
            if (from == this.userName) {
            }
          case 1:
          case 2:
            // Join Group


            if (message.toLowerCase().startsWith("?join ")) {

              var str = message.substring(6).toString();
              var targetId = str.replace(/\s/g, "");
              this.JoinCommTempRoom = room;
              if (this.joinCommandRecently.has(from)) {
              } else {
                this.joinRoom(targetId);
                this.sendRoomMsg(room, "Join query has ben successfully executed!");

                this.joinCommandRecently.add(from);
                setTimeout(() => {
                  this.joinCommandRecently.delete(from);
                }, 10000);
              }

            }


            if (message.toLowerCase() == "?restart" || message.toLowerCase() == "?rst") {
              var text = fs.readFileSync("./masters.txt", "utf-8");
              var textByLine = text.split("\n");
              if (textByLine.includes(from)) {
                this.webSocket.close();
              }
            }


            if (message.toLowerCase().startsWith("?play ")) {
              this.playCommander = from;
              this.playTempRoom = room;
              var search = message.substring(6).toString();
              var searchQuery = search.replace(/\s/g, "");

              if (this.playedRecently.has(this.playCommander) || this.playedRoomRecently.has(this.playTempRoom)) {
              } else {
                //this has to be comment  outtttttttttttttttttttttttttttttttttttttttttttttttttttttttt
                ////this.setAccountColor();
                ////console.log("im in");
                //this.sendSong(searchQuery, this.tempRoom);
                if (isRoomEnterComplete == false) {
                  this.sendRoomMsg(this.playTempRoom, "Please wait bot is booting up... It may take upto 2-3 minutes to complete this process.");
                }
                else {
                  //this.setAccountColor();
                  this.sendSong(searchQuery, this.playTempRoom);
                }
                this.playedRecently.add(this.playCommander);
                setTimeout(() => {
                  this.playedRecently.delete(this.playCommander);
                }, 60000);

                this.playedRoomRecently.add(this.playTempRoom);
                setTimeout(() => {
                  this.playedRoomRecently.delete(this.playTempRoom);
                }, 10000);
              }
            }

            if (message.toLowerCase().startsWith("?share ")) {
              var search = message.substring(7).toString();
              this.shareTo = search.replace(/\s/g, "");
              this.shareTempRoom = room;
              this.ShareCommander = from;
              if (this.sharedRecently.has(this.ShareCommander)) {
              } else {
                //this.setAccountColor();
                this.insertShared();
                this.shareMusic(this.shareTo);
                this.sharedRecently.add(this.ShareCommander);
                setTimeout(() => {
                  this.sharedRecently.delete(this.ShareCommander);
                }, 10000);
              }
            }

            if (message.toLowerCase() == "?rj") {
              var text = fs.readFileSync("./masters.txt", "utf-8");
              var textByLine = text.split("\n");
              if (textByLine.includes(from)) {
                this.leaveGroup(room);
                this.joinRoom(room);

              }
            }
            // Avatar Pic
            if (message.toLowerCase().startsWith("?pfp ")) {
              var text = fs.readFileSync("./masters.txt", "utf-8");
              var textByLine = text.split("\n");
              if (textByLine.includes(from) || role == "creator") {
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
            if (message.toLowerCase().startsWith("?member ")) {
              var text = fs.readFileSync("./masters.txt", "utf-8");
              var textByLine = text.split("\n");
              if (textByLine.includes(from) || role == "creator") {
                var str = message.substring(8).toString();
                var targetId = str.replace(/\s/g, "");
                this.grantMember(targetId, room);
                this.sendRoomMsg(room, targetId + " member now.");
              }
            }
            // Kick User
            if (message.toLowerCase().startsWith("?kick ")) {

              var text = fs.readFileSync("./masters.txt", "utf-8");
              var textByLine = text.split("\n");
              if (textByLine.includes(from) || role == "creator") {
                var str = message.substring(6).toString();
                var targetId = str.replace(/\s/g, "");
                this.kickUser(targetId, room);
                this.sendRoomMsg(room, targetId + " kicked.");

              }
            }
            //////////////////////////////////////////////
            if (message.toLowerCase().startsWith("?ban ")) {

              var str = message.substring(5).toString();
              var targetId = str.replace(/\s/g, "");
              var text = fs.readFileSync("./masters.txt", "utf-8");
              var textByLine = text.split("\n");
              if (textByLine.includes(from) || role == "creator") {
                this.banUser(targetId, room);
                this.sendRoomMsg(room, targetId + " outcasted.");
              }
            }
            if (message.toLowerCase().startsWith("?none ")) {
              var text = fs.readFileSync("./masters.txt", "utf-8");
              var textByLine = text.split("\n");
              if (textByLine.includes(from) || role == "creator") {
                var str = message.substring(6).toString();
                var targetId = str.replace(/\s/g, "");
                this.grantNone(targetId, room);
                this.sendRoomMsg(room, targetId + " is none now");
              }
            }
            if (message.toLowerCase().startsWith("?admin ")) {

              var text = fs.readFileSync("./masters.txt", "utf-8");
              var textByLine = text.split("\n");
              if (textByLine.includes(from) || role == "creator") {
                var str = message.substring(7).toString();
                var targetId = str.replace(/\s/g, "");
                this.grantAdmin(targetId, room);
                this.sendRoomMsg(room, targetId + " is admin now");


              }
            }
            if (message.toLowerCase().startsWith("?owner ")) {

              var text = fs.readFileSync("./masters.txt", "utf-8");
              var textByLine = text.split("\n");
              if (textByLine.includes(from) || role == "creator") {
                var str = message.substring(7).toString();
                var targetId = str.replace(/\s/g, "");
                this.grantOwner(targetId, room);
                this.sendRoomMsg(room, targetId + " is owner now");
              }
            }
            if (message.toLowerCase() == "?l") {

              var text = fs.readFileSync("./masters.txt", "utf-8");
              var textByLine = text.split("\n");
              this.tempRoom = room;
              if (textByLine.includes(from)) {
                this.getChatroomUsers(this.tempRoom);
              }
            }
            if (message.toLowerCase() == "?mylove") {
              myLove = true;
              this.mylovetempRoom = room;
              this.myloveCommander = from;
              if (this.myloveRecently.has(this.myloveCommander)) {
              } else {
                //this.setAccountColor();
                this.getChatroomUsers(this.mylovetempRoom);
                this.myloveRecently.add(this.myloveCommander);
                setTimeout(() => {
                  this.myloveRecently.delete(this.myloveCommander);
                }, 30000);
              }
            }
            if (message.toLowerCase() == "?myenemy" || message.toLowerCase() == "?myhater") {
              myenemy = true;
              this.myenemytempRoom = room;

              this.myenemyCommander = from;
              if (this.myenemyRecently.has(this.myenemyCommander)) {
              } else {
                //this.setAccountColor();
                this.getChatroomUsers(this.myenemytempRoom);
                this.myenemyRecently.add(this.myenemyCommander);
                setTimeout(() => {
                  this.myenemyRecently.delete(this.myenemyCommander);
                }, 30000);
              }

            }

            if (message.toLowerCase().startsWith("?kiss ")) {
              var text = fs.readFileSync("./masters.txt", "utf-8");
              var textByLine = text.split("\n");
              var str = message.substring(6).toString();
              var targetId = str.replace(/\s/g, "");

              if (this.kissRecently.has(from)) {
              } else {
                this.insertKiss();
                const rcrds = require('./records.json');
                var kissCount2 = rcrds[0].kiss;
                this.sendRoomMsg(room, from + " kissed 💋 " + targetId + "\nTotal [" + kissCount2 + "] kisses given");

                this.kissRecently.add(from);
                setTimeout(() => {
                  this.kissRecently.delete(from);
                }, 10000);
              }

            }
            if (message.toLowerCase().startsWith("?slap ")) {
              var text = fs.readFileSync("./masters.txt", "utf-8");
              var textByLine = text.split("\n");
              var str = message.substring(6).toString();
              var targetId = str.replace(/\s/g, "");

              if (this.slapRecently.has(from)) {
              } else {
                this.insertSlap();
                const rcrds = require('./records.json');
                var slapCount2 = rcrds[0].slap;
                this.sendRoomMsg(room, from + " slapped 👋 " + targetId + "\n Total [" + slapCount2 + "] users slapped in this room.");
                this.slapRecently.add(from);
                setTimeout(() => {
                  this.slapRecently.delete(from);
                }, 10000);
              }
            }
            if (message.toLowerCase().startsWith("?hug ")) {

              var text = fs.readFileSync("./masters.txt", "utf-8");
              var textByLine = text.split("\n");
              var str = message.substring(5).toString();
              var targetId = str.replace(/\s/g, "");

              if (this.hugRecently.has(from)) {
              } else {
                this.insertHug();
                const rcrds = require('./records.json');
                var hugCount2 = rcrds[0].hug;
                this.sendRoomMsg(room, from + " hugged 🤗 " + targetId + "\nTotal [" + hugCount2 + "] users hugged.");

                this.hugRecently.add(from);
                setTimeout(() => {
                  this.hugRecently.delete(from);
                }, 10000);
              }
            }
            if (message.toLowerCase().startsWith("?u ")) {

              var text = fs.readFileSync("./masters.txt", "utf-8");
              var textByLine = text.split("\n");
              if (textByLine.includes(from)) {
                getRoomusersBool = true;
                this.tempRoom = room;
                str = message.substring(3).toString();
                str = str.replace(/\s/g, "");
                this.joinRoom(str);
                this.getChatroomUsers(str);

                this.leaveGroup(str);
              }
            }
            if (message.toLowerCase().startsWith("?love ")) {
              if (from != BOT_ID) {
                str = message.substring(6).toString();
                let myArray = str.split(" ");

                ////console.log(myArray);
                ////console.log(myArray.length);

                if (myArray.length == 2) {
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
                  this.sendRoomMsg(
                    room,
                    from +
                    " : Invalid Format! Please try again.\n Example : Love Romeo Juliet"
                  );
                }
              }
            }
            if (message.toLowerCase().startsWith("?flames ")) {
              if (from != BOT_ID) {
                str = message.substring(8).toString();
                let myArray = str.split(" ");

                ////console.log(myArray);
                ////console.log(myArray.length);

                if (myArray.length == 2) {
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
                  this.sendRoomMsg(
                    room,
                    from +
                    " : Invalid Format! Please try again.\n Example : Flames Romeo Juliet"
                  );
                }
              }
            }
            if (
              message.toLowerCase().startsWith("?a ") ||
              message.toLowerCase().startsWith("?o ") ||
              message.toLowerCase().startsWith("?b ") ||
              message.toLowerCase().startsWith("?m ") ||
              message.toLowerCase().startsWith("?n ")
            ) {
              targetIndex = message.substring(3);
              if (this.user_list) {
                if (isNaN(targetIndex)) {
                  ////console.log("Invalid command.\nType COMMANDS to get commands list");
                } else {
                  if (targetIndex <= this.user_list.length) {
                    //////console.log(this.user_list[targetId-1]);
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
                    //////console.log("Invalid Input");
                    this.sendRoomMsg(room, "❌ Invalid user selected!");
                  }
                }
              }
            }


            // Google Text to Voice
            if (message.toLowerCase().startsWith("?say ")) {
              var text = fs.readFileSync("./masters.txt", "utf-8");
              var textByLine = text.split("\n");
              if (textByLine.includes(from)) {
                audio_query = message.substring(5);
                url = googleTTS.getAudioUrl(audio_query, {
                  lang: this.sL,
                  slow: false,
                  host: "https://translate.google.com",
                });
                this.sendRoomMsg(room, "", "", url);
                ////console.log(url);
              }
            }
            // Urban Dictionary
            if (message.toLowerCase().startsWith("?ud ")) {

              var text = fs.readFileSync("./masters.txt", "utf-8");
              var textByLine = text.split("\n");
              if (textByLine.includes(from)) {
                ud_query_1 = message.substring(4);
                trollface = urban(ud_query_1);
                instance = this;
                trollface.first(function (json) {
                  ////console.log(json);
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
            if (message.toLowerCase().startsWith("?w ")) {

              var text = fs.readFileSync("./masters.txt", "utf-8");
              var textByLine = text.split("\n");
              if (textByLine.includes(from)) {
                query_1 = message.substring(3).replace(/\s/g, "+");
                url =
                  "https://api.openweathermap.org/data/2.5/weather?q=" +
                  query_1 +
                  "&APPID=662cf362941ae15b7323fdadb9eb12db&units=metric";
                instance = this;
                request(url, function (err, response, body) {
                  if (err) {
                    ////console.log("error:", err);
                  } else {
                    var weather = JSON.parse(body);
                    ////console.log(weather);
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
            if (message.toLowerCase().startsWith("?image ")) {

              var text = fs.readFileSync("./masters.txt", "utf-8");
              var textByLine = text.split("\n");
              if (textByLine.includes(from)) {
                query = message.substring(7).replace(/\s/g, "+");
                instance = this;
                gis(query, function (error, results) {
                  if (error) {
                    ////console.log(error);
                  } else {
                    var json = JSON.stringify(results, null, "  ");
                    var s = JSON.parse(json);
                    ////console.log(s);
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
                    //////console.log(urls);
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

  //#region  other codes

  Client.prototype.getChatroomUsers = function (roomName) {
    var roomUsersPayload = {
      handler: HANDLER_ROOM_ADMIN,
      id: this.keyGen(20, true),
      type: "occupants_list",
      room: roomName,
      t_username: "username",
      t_role: "none",
    };
    if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
      this.webSocket.send(JSON.stringify(roomUsersPayload));
    }
  };
  Client.prototype.grantNone = function (targetId, roomName) {
    var nonePayload = {
      handler: HANDLER_ROOM_ADMIN,
      id: this.keyGen(20, true),
      type: CHANGE_ROLE,
      room: roomName,
      t_username: targetId,
      t_role: TARGET_ROLE_NONE,
    };
    if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
      this.webSocket.send(JSON.stringify(nonePayload));
    }
  };
  Client.prototype.grantAdmin = function (targetId, roomName) {
    var adminPayload = {
      handler: HANDLER_ROOM_ADMIN,
      id: this.keyGen(20, true),
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
      id: this.keyGen(20, true),
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
      id: this.keyGen(20, true),
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
      id: this.keyGen(20, true),
      type: CHANGE_ROLE,
      room: roomName,
      t_username: targetId,
      t_role: TARGET_ROLE_OUTCAST,
    };
    if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
      this.webSocket.send(JSON.stringify(outcastPayload));
    }
  };
  Client.prototype.kickUser = function (targetId, roomName) {
    var kickPayload = {
      handler: HANDLER_ROOM_ADMIN,
      id: this.keyGen(20, true),
      type: TARGET_ROLE_KICK,
      room: roomName,
      t_username: targetId,
      t_role: "none",
    };
    if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
      this.webSocket.send(JSON.stringify(kickPayload));
    }
  };
  Client.prototype.setStatus = async function (status) {
    var statusPayload = {
      handler: "profile_update",
      id: this.keyGen(20, true),
      type: "status",
      value: status
    };
    if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
      this.webSocket.send(JSON.stringify(statusPayload));
    }
  };



  Client.prototype.handleSpin = async function (msg, roomName) {
    var str = msg.substring(5).toString();
    var isOnOff = str.replace(/\s/g, "");
    if (isOnOff.toLowerCase() == "on") {
      if (this.isSpin == true) {
        this.sendRoomMsg(roomName, "SPIN Already Enabled❗");
        return;
      }
      this.isSpin = true;
      this.sendRoomMsg(roomName, "SPIN Enabled ✅");
    } else if (isOnOff.toLowerCase() == "ooooff") {
      if (this.isSpin == false) {
        this.sendRoomMsg(roomName, "SPIN Already Disabled❗");
        return;
      }
      this.isSpin = false;
      this.sendRoomMsg(roomName, "SPIN Disbaled ✅");
    }
    this.spinSettingsMap.set(roomName, this.isSpin);
  };
  Client.prototype.handleUserGreetings = async function (msg, roomName) {
    var str = msg.substring(3).toString();
    var isOnOff = str.replace(/\s/g, "");
    if (isOnOff.toLowerCase() == "on") {
      if (this.isWcGreetings == true) {
        this.sendRoomMsg(roomName, "Greetings Already Enabled❗");
        return;
      }
      this.isWcGreetings = true;
      //this.wcSettingsMap.set(roomName, this.isWcGreetings);
      this.sendRoomMsg(roomName, "Greetings Enabled ✅");
    } else if (isOnOff.toLowerCase() == "off") {
      if (this.isWcGreetings == false) {
        this.sendRoomMsg(roomName, "Greetings Already Disabled❗");
        return;
      }
      this.isWcGreetings = false;
      this.sendRoomMsg(roomName, "Greetings Disbaled ✅");
    }
    this.wcSettingsMap.set(roomName, this.isWcGreetings);
  };
  Client.prototype.fetchUserProfile = async function (targetId, group) {
    var userSearchPayload = {
      handler: HANDLER_PROFILE_OTHER,
      id: this.keyGen(20, true),
      type: targetId,
    };
    if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
      this.webSocket.send(JSON.stringify(userSearchPayload));
    }
  };
  Client.prototype.joinRoom = async function (roomName) {
    var groupJoinPayload = {
      handler: HANDLER_ROOM_JOIN,
      id: this.keyGen(20),
      name: roomName,
    };
    if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
      this.webSocket.send(JSON.stringify(groupJoinPayload));
    }
  };
  Client.prototype.login = async function () {
    var loginPayload = {
      handler: HANDLER_LOGIN,
      id: this.keyGen(20),
      username: this.userName,
      password: this.passWord,
    };
    if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
      this.webSocket.send(JSON.stringify(loginPayload));
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
    info += "xBot"; // Manufacturer
    info += "-"; // -
    info += "x13Pro"; // Model
    info += "-"; // -
    info += "14"; // Sdk Api
    return info;
  };
  Client.prototype.sendRoomMsg = async function (roomName, msg, photoUrl, audioUrl, audioLength) {
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
        length: audioLength,
        body: "",
        length: "",
      };
    } else {
      groupMsgPayload = {
        handler: HANDLER_ROOM_MESSAGE,
        id: this.keyGen(20, true),
        room: roomName,
        type: MESSAGE_TYPE.TEXT,
        url: "",
        body: msg,
        length: "" + msg.length,
      };
    }
    if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
      this.webSocket.send(JSON.stringify(groupMsgPayload));
    }
  };
  Client.prototype.leaveGroup = async function (roomName) {
    var leaveGroupPayload = {
      handler: HANDLER_ROOM_LEAVE,
      name: roomName,
      id: this.keyGen(20, true),
    };
    if (this.webSocket != null && this.webSocket.readyState == WebSocket.OPEN) {
      this.webSocket.send(JSON.stringify(leaveGroupPayload));
    }
  };
  Client.prototype.sendRequest = async function (targetId) {
    var sendRequestPayload = {
      handler: HANDLER_PROFILE_UPDATE,
      type: "send_friend_request",
      value: targetId,
      id: this.keyGen(20, true),
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
async function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

//#endregion



var client = new Client(BOT_ID, BOT_PASSWORD);
