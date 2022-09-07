let handler = async m => m.reply(` • SEWA ROBOT = FREE PREMIUM •
       
╭━〔 *_Sewa Group_*〕━⬣
│⬡ 7 Days
│━⬡ Rp. 5.000
│⬡ 30 Days
│━⬡ Rp. 15.000
╰━━━━━━━━━━━⬣
═════════════♡᭄ 
╭━〔 *_Jadi Robot_*〕━⬣
│⬡ 7 Days
│━⬡ Rp. 10.000
│⬡ 30 Days
│━⬡ Rp. 30.000
╰━━━━━━━━━━━⬣
*💰 PAYMENT:*
• *Pulsa:* [085691484348]
• *All  :*[088211053089]
[Dana,Ovo,Gopay,Shopepay]
*Note: Untuk Pembayaran Pulsa +5k*

*Minat? Chat* 👇🏻
https://wa.me/message/3JTF7B2Y5EIBE1


║▌║█ ▌║▌█║▌│║▌█
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa|beli|sewabot|jadibot)$/i

module.exports = handler