const fs = require('fs')

exports.groupResponse_Remove = async (conn, update) => {
try {
ppuser = await conn.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await conn.groupMetadata(update.id)
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'remove'){
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'bay👋'}, type: 1 }]
await conn.sendMessage(
update.id, 
{
	image: { url: ppuser }, 
caption: `╭━━━━━━━━━━━━━━━┅•ิ.•ஐ\n│ *📌Leave To ${metadata.subject}* \n└┬────────────┾•ิ.•┽\ntelah berpulang ke asalnya\nyang bernama @${num.split("@")[0]}\nsemoga amalnya ibadahnya diterima\n└────────────┾•ิ.•┽`,
buttons: button,
footer: metadata.subject, 
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Welcome = async (conn, update) => {
try {
ppuser = await conn.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await conn.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'add') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat datang👋'}, type: 1 }]
await conn.sendMessage(
update.id, 
{ 
	image: { url: ppuser }, 
caption: `╭━━━━━━━━━━━━━━━┅•ิ.•ஐ\n│ *📌 Assalamualaikum | Welcome To ${metadata.subject}* \n└┬────────────┾•ิ.•┽\n┌┤Haii👋 @${num.split("@")[0]}\n││ \n││——[ *ɪɴᴛʀᴏ* ]——\n││ Nama:\n││ Umur:\n││ Askot: \n││ Nama Ayang:\n││ Nama Ayah\n││ Nama Ibu:\n││ TTL:\n||└────────────┾•ิ.•┽`,
buttons: button, 
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Promote = async (conn, update) => {  
const metadata = await conn.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'promote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat🎉'}, type: 1 }]
await conn.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Naik jabatan jadi penanggung beban grup*`,
buttons: button, 
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Demote = async (conn, update) => {  
const metadata = await conn.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'demote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Cie beban grup🎉'}, type: 1 }]
await conn.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Turun jabatan menjadi beban grup*`,
buttons: button, 
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}