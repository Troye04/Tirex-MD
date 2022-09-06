let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/ded516f2da95001148bf7.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let troyye = '6285156784562@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/ded516f2da95001148bf7.jpg")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/ded516f2da95001148bf7.jpg")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *• SEWA BOT = FREE PREMIUM •*
        
╭━〔 *_Group / 7 Hari_*〕━⬣
│━⬡ Rp. 2.000-5.000
│⬡ [Pulsa]
│━⬡ Rp. 1.000-2.000
│⬡ [Dana/Ovo/Gopay/Spay]
╰━━━━━━━━━━━⬣
═════════════♡᭄ 
╭━〔 *_Group / 30 Hari_*〕━⬣
│━⬡ Rp. 7.000-15.000
│⬡ [Pulsa]
│━⬡ Rp. 5.000-10.000
│⬡ [Dana/Ovo/Gopay/Spay]
╰━━━━━━━━━━━⬣
═════════════♡᭄ 
╭━〔 *_Group / 360 Hari_*〕━⬣
│━⬡ Rp. 50.000-90.000
│⬡ [Pulsa]
│━⬡ Rp. 40.000-90.000
│⬡ [Dana/Ovo/Gopay/Spay]
╰━━━━━━━━━━━⬣  
═════════════♡
╭━〔 *_JADIBOT 30d_*〕━⬣
│━⬡ Rp. 30.000
│⬡ [Pulsa]
│━⬡ Rp. 25.000
│⬡ [Dana/Ovo/Gopay/Spay]
╰━━━━━━━━━━━⬣

Minat? Chat Owner👇
wa.me/${owner[0]}?text=Min+mau+sewa+bot
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'-'}]}],
  headerImage: { productId: '-',
  jpegThumbnail: baper },
  businessOwnerJid: `6289654360447@s.whatsapp.net`
  },
  footerText: 'https://github.com/Troye04',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
