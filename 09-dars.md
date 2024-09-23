---
tags:
  - xizmatlar
title: 09 - Xizmatlar Boshqaruvi
description: Xizmatlar boshqaruvi va qanday qilib "service" yaratishni o'rganamiz.
sort: 9
---
## Avtomatik ishga tushuvchi xizmatlar

Linux tizimida ba'zi dasturlar, masalan Apache2, OpenSSH va MySQL, kompyuter qayta ishga tushirilganda avtomatik ravishda ishga tushadi. Misol uchun, Apache2 dasturini o'rnatganingizda:

```bash
$ sudo apt install apache2
```

Shundan so‘ng, brauzeringizda ’localhost’ manziliga kirsangiz, Apache2 veb-serverining sahifasi ko‘rinadi.

### Avtomatik ishga tushuvchi xizmatlarni aniqlash

Avtomatik ishga tushadigan xizmatlarni aniqlash uchun quyidagi buyruqni ishlatamiz:

```bash
$ sudo systemctl is-enabled apache2
```

Agar bu buyruq `enabled` deb javob bersa, demak xizmat avtomatik ravishda ishga tushadi.

### Avtomatik ishga tushuvchi xizmatlarni o'chirish

Xizmatni avtomatik ishga tushishni o'chirish uchun quyidagi buyruqni ishlatamiz:

```bash
$ sudo systemctl disable apache2
```

Yoki

```bash
$ sudo systemctl disable apache2.service
```

### Xizmat konfiguratsiyasini qayta yuklash

Xizmatni o'chirmasdan konfiguratsiyasini qayta yuklash uchun quyidagi buyruqdan foydalanamiz:

```bash
$ sudo systemctl reload <xizmat nomi>
```

### Barcha yuklangan xizmatlar ro'yxatini ko'rsatish

Tizimdagi barcha xizmatlarni ko'rsatish uchun quyidagi buyruqni ishlatamiz:

```bash
$ sudo systemctl list-units --type=service
```

Avtomatik ishga tushadigan xizmatlarni filtrlash uchun:

```bash
$ sudo systemctl list-units --type=service | grep enabled
```

### Yangi xizmat yaratish

Yangi xizmat yaratish uchun `/etc/systemd/system/` katalogida `.service` kengaytmali fayl yarating. Misol: `myservice.service`

```bash
$ sudo nano /etc/systemd/system/myservice.service
```

Fayl ichiga quyidagi konfiguratsiyalarni yozing:

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
1. **Description** - Xizmat tavsifi.
2. **After** - Agar xizmat boshqa bir xizmatga bog'liq bo'lsa.
3. **ExecStart** - Xizmatni ishga tushiradigan buyruq yoki skript.
4. **Restart** - Xizmatni qayta ishga tushirish harakati.

Faylni saqlang va matn muharriridan chiqing. Keyin tizimga yangi xizmatlar haqida xabar berish uchun:

```bash
$ sudo systemctl daemon-reload
```

Yangi xizmatni ishga tushiring:

```bash
$ sudo systemctl start myservice
```

Xizmatni avtomatik ishga tushirishni yoqish:

```bash
$ sudo systemctl enable myservice
```

Xizmat holatini tekshirish uchun:

```bash
$ sudo systemctl status myservice
```

## Bonus

Tizimni to'liq yoqish vaqti haqida ma'lumot olish uchun:

```bash
$ systemd-analyze
```

Agar siz WSL foydalanuvchisi bo'lsangiz, `systemd` muammosiga duch kelishingiz mumkin. Bunday holatda VirtualBox yoki VMWare dasturlaridan foydalanishni tavsiya qilaman. Yoki Linux-ga butunlay o'tish vaqti kelgandir?

![install-linux](images/install-linux-meme.png)

**Keyingi dars:** [[10-dars]]