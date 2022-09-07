let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Allpay
│ •  [0882-1105-3089]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler