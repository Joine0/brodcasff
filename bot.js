const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)
	client.user.setGame(`R-bchelp , R-bcinv`)
    client.user.setStatus("idle")
});
   
       client.on("message", message => {
        if (message.author.id === client.user.id) return;
        if (message.guild) {
            var prefix = "R-"
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] ==prefix + "bc1") {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`محتوى البرودكاست \n\`${args}\` 
__إذا تريد إكمآل الإرسآل أضغط على الصح__
__إذآ لم ترغب بإرسآلها أضغط الخطأ__
    `).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... 
تم إرسآل الرسآلة إلى ${message.guild.members.size} عضو `).then(m => m.delete(8000));
    message.guild.members.forEach(m => {
m.send(`» السيرفر ⇏ 
${message.guild.name}
» الرسآلة ⇏ 
${args}


${m}`);
msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`** تم إلغآء إرسآل البرودكاست **`).then(m => m.delete(5000));
    msg.delete();
})
})
}
}
});

       client.on("message", message => {
        if (message.author.id === client.user.id) return;
        if (message.guild) {
            var prefix = "R-"
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] ==prefix + "bc2") {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`محتوى البرودكاست \n\`${args}\` 
    إذا تريد إكمآل الإرسآل أضغط على الصح
    إذآ لم ترغب بإرسآلها أضغط الخطأ`).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... 
تم إرسآل الرسآلة إلى ${message.guild.members.size} عضو `).then(m => m.delete(8000));
    message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر ⇏ ', `${message.guild.name}`)
            .addField(' » الرسالة ⇏  ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`** تم إلغآء إرسآل البرودكاست **`).then(m => m.delete(5000));
    msg.delete();
})
})
}
}
});



       client.on("message", message => {
        if (message.author.id === client.user.id) return;
        if (message.guild) {
            var prefix = "R-"
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] ==prefix + "bco2") {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`محتوى البرودكاست \n\`${args}\` 
__إذا تريد إكمآل الإرسآل أضغط على الصح__
__إذآ لم ترغب بإرسآلها أضغط الخطأ__
`).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... 
تم إرسآل الرسآلة إلى ${message.guild.members.filter(m => m.presence.status !== 'online').size} عضو `).then(m => m.delete(8000));
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر ⇏ ', `${message.guild.name}`)
            .addField(' » الرسالة ⇏  ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`** تم إلغآء إرسآل البرودكاست **`).then(m => m.delete(5000));
    msg.delete();
})
})
}
}
});

       client.on("message", message => {
        if (message.author.id === client.user.id) return;
        if (message.guild) {
            var prefix = "R-"
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] ==prefix + "bco1") {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
        let args = message.content.split(' ').slice(1).join(' ');
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`محتوى البرودكاست \n\`${args}\` 
__إذا تريد إكمآل الإرسآل أضغط على الصح__
__إذآ لم ترغب بإرسآلها أضغط الخطأ__
`).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... 
تم إرسآل الرسآلة إلى ${message.guild.members.filter(m => m.presence.status !== 'online').size} عضو `).then(m => m.delete(8000));
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
m.send(`» السيرفر ⇏ 
${message.guild.name}
» الرسآلة ⇏ 
${args}


${m}`);
msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`** تم إلغآء إرسآل البرودكاست **`).then(m => m.delete(5000));
    msg.delete();
})
})
}
}
});

client.on('message', message => {
      var prefix = "R-";
  if(message.author.bot) return;

  if(message.content.startsWith(prefix + "bcowner")) {
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("** R-bcowner <message> **")
        return;
    }      

  var rebel = new Discord.RichEmbed()
  .setColor("#000000")
		.setDescription(`
تم إرسآل لك رسآلة من السيرفر الخاص بك 
${message.guild.name}

الرسآلة 
${args}
		
		
		`)
		.setFooter(` بوآسطة ${message.author.username}#${message.author.discriminator}`)
      message.guild.owner.send(rebel);
      message.channel.send("**تم إرسآل الرسآلة إلى أونر السيرفر**")
}
});


client.on('message' , message => {
  var prefix = "R-";
  if(message.author.bot) return;

  if(message.content.startsWith(prefix + "bcrole")) {
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("قم بمنشنة الرتبة | R-bcrole @admin message")
        return;
    }      
        if (!args[1]) return message.reply('**قم بكتابة الرسالة | R-bcrole @admin message**');message.channel.send(`محتوى البرودكاست \n\`${args}\` 
__إذا تريد إكمآل الإرسآل أضغط على الصح__
__إذآ لم ترغب بإرسآلها أضغط الخطأ__
    `).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    
          var role = message.mentions.roles.first();
            if(!role) {
              message.reply("لا توجد رتبة بهذا الاسم")
                return;
            }

    
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... 
        لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`).then(m => m.delete(8000));
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
n.send(`» السيرفر ⇏ 
${message.guild.name}
» الرسآلة ⇏ 
${args[1]}


${n}`);
msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`** تم إلغآء إرسآل البرودكاست **`).then(m => m.delete(5000));
    msg.delete();

    });
    });
  }
});

client.on('message', msg => {
var prefix = "R-";
 if (msg.content.startsWith(prefix + '1send')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**ألرجآء منشنت الشخص المراد إرسأل له رساله وكتآبة الرسآلة**`)
      if (!args[1]) return msg.reply(`**الرجآء كتابة محتوى الرسالة**`)
      let rebel = msg.mentions.members.first()
      if (!rebel) return msg.reply(`**يجب منشن شخص**`)
      let Rrebel = new Discord.RichEmbed()
  .setColor("#000000")
		.setDescription(`
رسآلة جديدة
${args}
		`)
		.setFooter(` بوآسطة ${msg.author.username}#${msg.author.discriminator}`)
      msg.guild.owner.send(rebel);
      client.users.get(`${rebel.id}`).send(Rrebel)
      msg.reply(`تم إرسآل الرسألة`)
    }
});

client.on('message', msg => {
var prefix = "R-";
 if (msg.content.startsWith(prefix + '2send')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**ألرجآء منشنت الشخص المراد إرسأل له رساله وكتآبة الرسآلة**`)
      if (!args[1]) return msg.reply(`**الرجآء كتابة محتوى الرسالة**`)
      let rebel = msg.mentions.members.first()
      if (!rebel) return msg.reply(`**يجب منشن شخص**`)
      let Rrebel = new Discord.RichEmbed()
  .setColor("#000000")
		.setDescription(`
رسآلة جديدة
${args}
		`)
      msg.guild.owner.send(rebel);
      client.users.get(`${rebel.id}`).send(Rrebel)
      msg.reply(`تم إرسآل الرسألة`)
    }
});


client.on("message", message => {
 if (message.content === "R-bchelp") {

  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(` 
   ** بوت R-bc أوآمر **
        للتفعيل 
R-bc1    ⇏ لإرسآل رسالة لجميع أعضآء السيرفر بدون امبيد
R-bc2    ⇏  لإرسآل رسالة لجميع أعضآء السيرفر بإمبيد
R-bco1   ⇏  لإرسآل رسالة للأون لاين فقط بدون امبيد
R-bco2   ⇏  لإرسآل رسالة للأون لاين فقط بإمبيد
R-bcowner ⇏  لإرسآل رسآلة لأونر السيرفر 
R-bcrole ⇏  لإرسآل رسالة لرتبة محدده 
ex :   R-bcrole @admin message
R-1send  ⇏ لإرسآل رسآلة لشخص عن طريق البوت مع ظهور أسمك 
R-2send  ⇏ لإرسآل رسآلة لشخص عن طريق البوت بدون ظهور أسمك 
`);


message.channel.sendEmbed(embed)

}
}); 

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('R-bcc.')){
 if(!message.author.id !== '274923685985386496') return;
message.channel.sendMessage('جار ارسال الرسالة');
message.channel.sendMessage(`[ ${client.users.size} / ${client.users.filter(m => m.presence.status !== 'online').size} ] عدد المستلمين `);

client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on("guildCreate", guild => {
client.channels.get("425722377406644224").send(`
R-bc added :white_check_mark: 
${guild.name} اسم السيرفر
${guild.owner.user.username} اونر السيرفر
${guild.memberCount} أعضآء السيرفر
`)
});

client.on("guildDelete", guild => {
client.channels.get("425722377406644224").send(`
R-bc Kicked :x: 
${guild.name} اسم السيرفر
${guild.owner.user.username} اونر السيرفر
${guild.memberCount} أعضآء السيرفر
`)
});

 client.on('message' , message => {
    if (message.content === "R-bcinvite") {
        if(!message.channel.guild) return message.reply('**This Command is Only For Servers**');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)     
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle('Click Here To Invite The Bot | انقر هنا لاضافة البوت')
 .setURL('https://discordapp.com/api/oauth2/authorize?client_id=445713545582084096&permissions=34881&scope=bot')
  message.channel.sendEmbed(embed);
   }
});
 client.on('message' , message => {
    if (message.content === "R-bcinv") {
        if(!message.channel.guild) return message.reply('**This Command is Only For Servers**');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)     
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle('Click Here To Invite The Bot | انقر هنا لاضافة البوت')
 .setURL('https://discordapp.com/api/oauth2/authorize?client_id=445713545582084096&permissions=34881&scope=bot')
  message.channel.sendEmbed(embed);
   }
});

client.login(process.env.BOT_TOKEN);
