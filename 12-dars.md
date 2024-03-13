---
tags:
  - terminal
  - personallashtirish
title: 12 - Terminal Personallashtirish
description: Linux foydalanuvchilari ko'p vaqtlarini terminalda o'tkazadilar. Shu sababli, terminal oynasini personallashtirish, yoqimli temalar qo'yish nafaqat odamni ilhomlantiradi balki ishga bo'lgan ishtiyoqni ham ko'taradi deb o'ylayman. Demak, ishni sozlamalarni titkilashdan boshlaymiz.
sort: 12
---


![ohmyzsh](images/ohmyzsh.png)

Linux foydalanuvchilari ko'p vaqtlarini terminalda o'tkazadilar. Shu sababli, terminal oynasini personallashtirish, yoqimli temalar qo'yish nafaqat odamni ilhomlantiradi balki ishga bo'lgan ishtiyoqni ham ko'taradi deb o'ylayman. Demak, ishni sozlamalarni titkilashdan boshlaymiz.

Menda Windows Terminal - *Microsoft Store orqali o'rnatishingiz mumkin*

![windows-terminal-docker](images/windows-terminal-docker.png)

`CTRL + ,` tugmalarini bosish orqali sozlamalar bo'limiga o'ting va standart profil sifatida **Command Prompt** ni tanlang chunki Powershell ancha sekin ishlaydi.

![windows-terminal-cmd-default](images/windows-terminal-cmd-default.png)

Endi  **Profiles > Command Prompt** bo'limiga o'tib pastga biroz aylantirsangiz, **Appearance** bo'limini ko'rishingiz mumkin. U yerda ranglar palletasi, font, blur effektlar va orqa fon rasmiga oid maydonlarni xohishingizga ko'ra o'zgartirsangiz bo'ladi.

![windows-terminal-cmd-customization](images/windows-terminal-cmd-customization.png)

>Ko'pchilik Windows ishlatgani tufayli, Windows Terminaldan misol keltirdim. Lekin to'g'risini aytsam, Ubuntu kabi distributivlarda personallashtirish uchun bundanda ko'proq erkinlik beriladi.

Endi, dastlabki terminal oynasiga o'tib standart bash shell'dan zsh shell'ga o'tamiz - bu huddi CMD'dan Powershell'ga o'tganday gap.

>Agar ba'zi buyruqlar sizga tushunarsiz bo'lsa, hammasi joyida! bu buyruqlar rasmiy veb-saytlarda shunchaki nusxalab & tashlash niyatida berilgan. Shunchaki jarayonni o'rganing va iloji bo'lsa buyruqlarni qo'lda yozib chiqing. Bu mushak xotirasini yaxshilaydi.

```bash
$ sudo apt install zsh curl git -y
```

- `curl` orqali `ohmyzsh` dasturini tortib olamiz chunki u ilova menejerida mavjud emas.
- `git` orqali ayrim plaginlarni GitHub'dan tortib olamiz.

`ohmyzsh` o'rnatish:

```bash
$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Sizdan *standart shell'ni zsh'ga o'zgartirish vaqti keldimi?* deb so'raydi. Siz esa `Y` va Enter'ni bosing.

**Oh My -**

![ohmyzsh-lol.png](images/ohmyzsh-lol.png)

Bu juda ajoyib! lekin biz terminalni maksimal darajada o'zgartirishni hoxlaymiz va `highlighter` plaginini o'rnatamiz. Bu plagin yozgan buyruqlarimizni chiroyli qilib bo'yab beradi. Buyruq nomini xato yozadigan bo'lsak, oldindan ogohlantirib turadi - juda kerakli vosita!

Avval plaginni GitHub'dan klonlaymiz (avtomatik plaginni kerakli joyga klonlaydi):

```shell
$ git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

Menda yuqoridagi buyruq muvaffaqiyatli yadarslanganini ko'rishingiz mumkin:

![successfull clone](images/highlighter-plugin-success.png)

Plagin tayyor. Hammasi joyida. Endi faqat uni faollashtirish qoldi holos. Buni amalga oshirish uchun `~/.zshrc` faylida `plugins` nomli massivga `zsh-syntax-highlighting` satrini qo'shsak bo'ldi.

```
$ nano ~/.zshrc
```

Keling yo'l-yo'lakay temani o'zgartirib ketamiz - `ZSH_THEME`. Standart ravishda `robbyrussell` temasi tanlangan. Siz o'zingizga kerakli temani  [bu yerdan](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes) topishingiz mumkin. Darvoqe, bu ortiqcha plagin talab qilmaydi - hammasi allaqachon kompyuteringizga o'rnatilgan!

![theme choosing](images/ohmyzsh-theme.png)

Shaxsan menga `flazz` temasi yoqadi chunki u minimalist va ortiqcha detallarsiz. Shunday qilib men `flazz` ga o'zgartiraman.

![theme choosing](images/ohmyzsh-theme-flazz.png)

Mana endi plaginni qo'shsak ham bo'ladi.

![zsh-syntax-highlighting](images/zsh-syntax-highlighting.png)

> Yuqorida izohlarda aytib o'tilganidek, ko'plab plaginlarni qo'shish orqali terminalni ishga tushirishni og'irlashtirasiz. Hozirda juda ko'p plaginlar mavjud - autocomplete, rails, ruby, adb va h.k

`CTRL + S` tugmalarini bosib faylni saqlang va `CTRL + X` tugmalarini bosib fayldan chiqib keting. Natija ish berishi uchun terminaldan chiqib qayta kirishingiz yoki quyidagi buyruqni yozib terminalga "restart" berishingiz mumkin:

```bash
$ source ~/.zshrc
```

Manabuni terminal desa bo'ladi! 🔥

![terminal-result](images/terminal-result.png)

Uddalagan bo'lsangiz hursandman 

**Keyingi dars:** [[13-dars]]