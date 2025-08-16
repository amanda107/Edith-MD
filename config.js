const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUtWYWNZVkxqYzB4ejlRVmxaY2lSZUIwUm1sWmxNTkZUOGRKZGM1cGZHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamZCQTRPd3g3dDVWU3JoRjJMN0VaQzBjdTFnZG1TcDRIOUhMRTM3UkdHST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRkVzVFZOdE96ZmlrSWlRZklVZHZ5U010cjVFQlFwVUk0N25SSmFmSUdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWcG90cXBEc0Z5T3UyMFpHU3VKZnlYN3NJOGRJVEUzVU9yQW1MSXJsMWxrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9LUHFWb2RnWGxWUE41MGFDTzZaL2dXN015aUx5OGJzNk53UzJ1VW82R0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVqc1VVTDF4Q3dEM3dmS3BpNitVSmZUdlRPSm14bjIySlpHM3BibUxEd009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0l6MVByUWl5cHBiTzZJcmZqS0w5RllaNlljdDhBVE5QNEpPb0R6cmRsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFphSGVMWHhFbGc5L0daM1NETTJSbkx0ZlNDMWhWcGhmYUJUaStOZjRIVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNONkp5cXloQXdxdVRPQ0JzZy9VcTNDSHBuWnBUVnl6dVlGQXBnTFZWWjdqcFZ2ckhLY0hWZS9zbGNFQUUrVEpNNld2dVUwUTFOZU1UaElmSlgyQWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ2LCJhZHZTZWNyZXRLZXkiOiJsMmVNVVp1K01sUVlDYUw3TGZkems1RkkyVytLN2hTMlJ5K0Yzam9MTVE0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxNDczOTQyMjRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzExMTVBMUE0QTI0QUFCNzNFRTQ5QjgxNzQ1MjAzQzgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTMwODUwMH1dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRURJVEgxMjMiLCJtZSI6eyJpZCI6IjIzNDgxNDczOTQyMjQ6NDdAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMTE2MDQ4NjgyMjI5ODA6NDdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOK2QxdVlDRU12RC84UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGK0dYb3krYnpDaHYxK1RsQnlkUlVFaGVMWkR3Y3QxZWFFcUdzSDlwZ0FVPSIsImFjY291bnRTaWduYXR1cmUiOiIxVGRWNTAwMS85b2wwWEFpakdCQkVLSCtBSVlFYWZ1UUN1STFQOUZFeWh2Zmt3TFNDTU5WMkwyZXYxMGFBMWJFbmFLdkpYUmhqV0crSzdqNk1wVkJCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiblV3TGI5Sm5sdGVOYmxYMGVWbXpFRUthTVJ5SnBWQ0dIU012QkpxOHhqczlaQ1ZCM0htYWNPTVRSYWtrQTdVd0RUTytISWVGUTVNTEJTNG1zRy94aXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTQ3Mzk0MjI0OjQ3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJmaGw2TXZtOHdvYjlmazVRY25VVkJJWGkyUThITGRYbWhLaHJCL2FZQUYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTMwODQ5NCwibGFzdFByb3BIYXNoIjoiMkc0QW11In0=",
  START_IMG: process.env.START_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS EDITH-MD*",
  WELCOME: process.env.WELCOME || "false",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  PREFIX: process.env.PREFIX || ".",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  BOT_NAME: process.env.BOT_NAME || "EDITH-MD",
  STICKER_NAME: process.env.STICKER_NAME || "EDITH-MD",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "2348147394224",
  OWNER_NAME: process.env.OWNER_NAME || "Kunlez",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Bandaheali*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *EDITH-MD*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  READ_CMD: process.env.READ_CMD || "false",
  DEV: process.env.DEV || "923253617422",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
