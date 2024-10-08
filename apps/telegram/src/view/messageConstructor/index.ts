import * as fs from "fs";
import { cwd } from "process";
import { Markup, Scenes } from "telegraf";

import { User } from "./../../models/all.js";
import { Message } from "./../../models/entity/Message.js";
import { InformerContext } from "./../context.js";

export const SceneMessageConstructor = new Scenes.BaseScene<InformerContext>(
  "messageConstructor",
);

SceneMessageConstructor.enter(async (ctx) => {
  await ctx.reply(
    "Отправьте сообщение, которое вы хотите разослать",
    Markup.keyboard([["Отмена"]]).resize(),
  );
});
SceneMessageConstructor.hears("Отмена", (ctx) => {
  ctx.navigator.goto("Admin");
});
SceneMessageConstructor.on("text", async (ctx) => {
  await ctx.replyWithDocument({
    source: fs.createReadStream(cwd() + "/src/media/images/samin.gif"),
    filename: "sure.gif",
  });

  await ctx.reply("итоговый вариант:");
  await ctx.reply(ctx.message.text, {
    parse_mode: "Markdown",
  });

  await ctx.reply(
    ctx.message.text,
    Markup.inlineKeyboard([Markup.button.callback("Разослать💀", "да")]),
  );
});

SceneMessageConstructor.action("да", async (ctx) => {
  if (!ctx.callbackQuery.message) {
    return;
  }
  await ctx.editMessageReplyMarkup({
    inline_keyboard: [],
  });

  const users = await User.find({
    where: { isAgreed: true, isBlocked: false },
  });

  const sendedMessage = new Message();
  sendedMessage.content = (ctx.callbackQuery.message as any).text;

  const msgIds: { chatId: number; msgId: number }[] = [];

  for (const user of users) {
    try {
      const sended = await ctx.telegram.sendMessage(
        user.chatId,
        (ctx.callbackQuery.message as any).text,
        { parse_mode: "Markdown" },
      );
      msgIds.push({
        chatId: sended.chat.id,
        msgId: sended.message_id,
      });
    } catch (e) {
      console.log("user " + user.userName + " blocked bot");
      user.isBlocked = true;
      await user.save();
    }
  }

  sendedMessage.messageIds = JSON.stringify(msgIds);
  sendedMessage.sendetAt = new Date();
  sendedMessage.save();

  await ctx.navigator.goto("Admin");
});
