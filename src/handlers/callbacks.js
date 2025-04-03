export const exampleCallback = (bot, query) => {
  const { data, message } = query;

  let responseText = "Invalid option.";
  let options = {};

  if (data === "location") {
    responseText = "📍 *Location:*\n" +
      "[Google Maps](https://goo.gl/maps/NHT9WZ3N6LXDqg6q9)\n" +
      "📍 WQXM+CW3, Addis Ababa 1111\n" +
      "🏢 3rd floor, Refenti Apartments, Bole Bulbula, District 12, Addis Ababa, Ethiopia.";
  } 
  else if (data === "pricing") {
    responseText = "💰 *Pricing Plans:*\n" +
      "- Hot Desk Daily: *450 Br.*\n" +
      "- Hot Desk Monthly: *6500 Br.*\n" +
      "- Virtual Office: *13750 Br.*\n" +
      "- Training Room (20+): *400 Br. per person*\n" +
      "- Training Room (15-20 person):*300 Br. per person*\n" +
      "- Hot Desk Annual: 5500 Br.*\n" +
      "- Bi-Weekly (14 Days): 4500 Br.*\n" +
      "- Private Office P-2 (24.94 m2): 54868 Br. / Furnished, 37410 Br. / Unfurnished*\n" +
      "- Private Office P-4 (24.83 m2): 54626 Br. / Furnished, 37245 Br. / Unfurnished*\n" +
      "- Private Office P-7 (23.43 m2): 51546 Br. / Furnished, 37488 Br. / Unfurnished*\n" +
      "- Meeting Room: *500 Br. per person*";
  } 
  else if (data === "facilities") {
    responseText = "🏢 *Facilities and Amenities:*\n" +
      "- Free 4G WiFi 📶\n" +
      "- Free Water 💧\n" +
      "- Refreshment Areas ☕\n" +
      "- Lunch Areas 🍽️\n" +
      "- Group Discussion Areas 🗣️\n" +
      "- Free Generator for Premium Subscribers ⚡";
  }
  else if (data === "hours") {
    responseText = "*Operating Hours:*\n" +
      "7AM - 9PM\n";
  } 
  else if (data === "membership") {
    responseText = "🎟 *Membership Plans:*\n" +
      "*Gold:* 6500 Br./Month (6 months) ✅\n" +
      "*Silver:* 7000 Br./Month (3 months) 🔥\n" +
      "*Premium:* 6000 Br./Month (12 months) 🎉\n" +
      "- Free monthly Hot Desk\n" +
      "- 1 hour meeting room per day\n" +
      "- Free Water, Coffee, WiFi ☕";
  } 
  else if (data === "contact") {
    responseText = "📞 *Contact Info:*\n" +
      "- Phone: *0956475750*\n" +
      "- Address: *Bole Bulbula, Rifenti Apt Complex 3rd F.*\n" +
      "- Email: *info@hub-bits.com* 📧";
  } 
  else if (data === "faqs") {
    responseText = "❓ *FAQs:*\n" +
      "- *What is Hub Bits?*\n" +
      "  Hub Bits is a coworking space providing flexible workspace solutions.";
  }

  bot.sendMessage(message.chat.id, responseText, { parse_mode: "Markdown", ...options });

  bot.answerCallbackQuery(query.id);
};
