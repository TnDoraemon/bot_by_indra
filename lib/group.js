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
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'bay๐'}, type: 1 }]
await conn.sendMessage(
update.id, 
{
	image: { url: ppuser }, 
caption: `โญโโโโโโโโโโโโโโโโโขเธด.โขเฎ\nโ *๐Leave To ${metadata.subject}* \nโโฌโโโโโโโโโโโโโพโขเธด.โขโฝ\ntelah berpulang ke asalnya\nyang bernama @${num.split("@")[0]}\nsemoga amalnya ibadahnya diterima\nโโโโโโโโโโโโโโพโขเธด.โขโฝ`,
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
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat datang๐'}, type: 1 }]
await conn.sendMessage(
update.id, 
{ 
	image: { url: ppuser }, 
caption: `โญโโโโโโโโโโโโโโโโโขเธด.โขเฎ\nโ *๐ Assalamualaikum | Welcome To ${metadata.subject}* \nโโฌโโโโโโโโโโโโโพโขเธด.โขโฝ\nโโคHaii๐ @${num.split("@")[0]}\nโโ \nโโโโ[ *ษชษดแดสแด* ]โโ\nโโ Nama:\nโโ Umur:\nโโ Askot: \nโโ Nama Ayang:\nโโ Nama Ayah\nโโ Nama Ibu:\nโโ TTL:\n||โโโโโโโโโโโโโโพโขเธด.โขโฝ`,
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
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat๐'}, type: 1 }]
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
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Cie beban grup๐'}, type: 1 }]
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