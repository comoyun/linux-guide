---
tags:
  - xizmatlar
title: 09 - Xizmatlar Boshqaruvi
description: Xizmatlar boshqaruvi va qanday qilib "service" yaratishni o'rganamiz.
sort: 9
---
## Avtomatik ishga tushuvchi xizmatlar

Apache2, OpenSSH va MySQL kabi dasturlarni yuklab olishingiz bilanoq, tizim qayta ishga tushirilganda o'sha xizmatlar avtomatik ravishda ishga tushadi. Misol uchun:

```bash
$ sudo apt install apache2
```

Endi, brovzeringizni `localhost` manziliga yo'naltiring:

![apache-server](images/apache2-web-server.png)

Siz dasturga avtomatik ravishda ishga tushish haqida aytmagan bo'lsangiz ham, u o'rnatish jarayonining bir qismi sifatida sozlangan bo'lishi mumkin.

### Avtomatik ishga tushuvchi xizmatlarni aniqlash

```bash
$ sudo systemctl is-enabled apache2
enabled
```

Shundan so'ng, kompyuter avtomatik ravishda ishga tushadimi yoki yo'qligini aytadi.

### Avtomatik ishga tushuvchi xizmatlarni o'chirish

Quyidagi buyruq ko'zlangan natijani beradi:

```bash
$ sudo systemctl disable apache2.service
```

yoki

```bash
$ sudo systemctl disable apache2
```

## Xizmat konfiguratsiyasini qayta yuklash

Ushbu buyruq ishlayotgan xizmatni o'chirmasdan konfiguratsiyasini qayta yuklaydi:

```bash
$ sudo systemctl reload <xizmat nomi>
```

## Barcha yuklangan xizmatlar ro'yxatini olish

```bash
$ sudo systemctl list-units --type=service
```

Biz `grep` orqali tizim yonganda avtomatik ishga tushadigan xizmatlarni saralay olamiz:

```bash
$ sudo systemctl list-units --type=service | grep enabled
```

## `service` yaratish

Keling, oddiy `service` ya'ni xizmat yaratish uchun umumiy qadamlar bilan tanishib chiqamiz. Avval  `/etc/systemd/system/` katalogida `.service` kengaytmali fayl yarating. Masalan: `myservice.service`

```bash
$ sudo nano /etc/systemd/system/myservice.service
```

Endi esa fayl ichida ayrim zaruriy konfiguratsiyalarni yozishingiz kerak. Quyidagi shablonga nazar soling:

```
[Unit]
Description=Oddiy xizmat
After=network.target

[Service]
ExecStart=/skript/manzili
Restart=always

[Install]
WantedBy=default.target
```

Bu yerda:
1. **Description** -  xizmat tavsifi.
2. **After** - Agar xizmat boshqa bir xizmatga bog'liq bo'lsa (masalan, `network.target`), `After` dan foydalanish belgilangan xizmatdan (bu holda `network.target`) oldin ishga tushirilishini ta'minlaydi. Bu faqat xizmatlarni ishga tushirish tartibini nazorat qilishning bir usuli.
3. **ExecStart** - xizmatni ishga tushiradigan buyruq yoki skript.
4. **Restart** - Qayta ishga tushirish harakatini belgilaydi.

Faylni saqlang va matn muharriridan chiqing. Keyingi qadam tizimga bu o'zgarishlar haqida xabar berish:

```bash
$ sudo systemctl daemon-reload
```

Endi bemalol o'zimiz yaratgan xizmatdan foydalana olamiz:

```bash
$ sudo systemctl start myservice
```

Xizmatni tizim yonganda avtomatik ishga tushirishni yoqish:

```bash
$ sudo systemctl enable myservice
```

Xizmat ishlayotganiga ishonch hosil qilish uchun uning holatini tekshiring:

```
$ sudo systemctl status myservice
```

## Mashqlar

1. Tizimdagi `httpd` (Apache Web Server) serverining holatini tekshiring.
2. Agar u ishlayotgan bo'lsa, uni to'xtating va yana tekshiring.
3. Xizmatni yana ishga tushiring va holatini tekshiring.

>Shahar: `systemctl <status/start/stop> <xizmat>`

## Bonus

Ushbu buyruq tizimni to'liq yonishi uchun qancha vaqt sarflaganligi haqida ma'lumot beradi.

```bash
$ systemd-analyze
```

>Agar siz WSL foydalanuvchisi bo'lsangiz, quyidagi xatolikka duch kelasiz:
>
>`System has not been booted with systemd as init system (PID 1). Can't operate.`
>`Failed to connect to bus: Host is down`
>
>Bu holda, VirtualBox yoki VMWare bepul dasturlari orqali virtual Linux ishlatishni yoki butunlay Linux'ga o'tishingizni maslahat beraman.

![install-linux](images/install-linux-meme.png)

**Keyingi dars:** [[10-dars]]
