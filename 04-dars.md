---
tags:
  - nmap
  - shebang
  - ping
title: 04 - Foydali Buyruqlar
description: Linux-da terminalga oid ayrim faktlar va foydali buyruqlar bilan tanishamiz.
sort: 4
---
## Shebang

Shebang dasturni qanday turkumdaligini aniqlash uchun kodning boshiga qo'yiladi. Bu, skriptning qaysi interpreter yordamida bajarilishi kerakligini belgilaydi. Misol uchun, `#!/bin/bash` Bash skriptlari uchun, `#!/usr/bin/env python3` Python skriptlari uchun ishlatiladi. Shebang ni quyidagi tarzda ko'rishingiz mumkin:

```bash
#!/bin/bash
```

Bu shebang orqali tizimga bu faylni Bash yordamida bajarishni aytasiz. Shebang qatorini yo'q qilsangiz, skriptni bajarish uchun har doim to'g'ri interpreterni qo'lda ko'rsatishingiz kerak bo'ladi.

## Serverga "ping" so'rov yuborish

`ping` buyrug'i server yoki boshqa tarmoq qurilmasining ishlayotganligini tekshirish uchun ishlatiladi. Bu buyruq serverga so'rov yuboradi va javobni qaytarishini kutadi. `-c` (count) opsiyasi so'rovlar sonini belgilaydi. Agar bu opsiyani qo'shmasangiz, `ping` to'xtovsiz so'rov yuboradi.

Misol:

```bash
$ ping -c 5 google.com
```

Bu yerda `google.com` manziliga 5 marta ping so'rovi yuboriladi.

## `grep` orqali filterlash

`grep` buyrug'i matn ichida ma'lum bir qidiruv terminini izlash uchun ishlatiladi. `grep` qidirayotgan terminni topgan satrlarni chiqaradi. `cat` buyrug'i fayl mazmunini ko'rsatadi, va `|` (pipe) operatori `cat` orqali olingan ma'lumotni `grep`ga uzatadi.

Misol:

```bash
$ ping -c 5 192.168.43.2 > ip.txt
$ cat ip.txt | grep "64 bytes"
```

Bu yerda, ping so'rovi natijalari `ip.txt` faylga saqlanadi va `grep "64 bytes"` orqali 64 baytli javoblar filtrlash orqali chiqariladi.

## Linux - `cut`

`cut` buyrug'i matnni ajratish va kerakli maydonlarni olish uchun ishlatiladi. `-d` opsiyasi ajratgich belgi, `-f` opsiyasi esa chiqarilishi kerak bo'lgan maydonni belgilaydi.

Misol:

```bash
$ echo "a b c d e" | cut -d " " -f 4
```

Bu yerda matn bo'shliqqa ko'ra ajratiladi va 4-maydon ekranga chiqariladi. Natija "d" bo'ladi.

## Skriptni ishga tushirish

Skriptni ishga tushirishdan avval uning bajarish huquqi borligini tekshiring. `chmod +x` buyrug'i skriptni bajarish huquqini beradi.

Misol:

```bash
$ chmod +x script.sh
$ ./script.sh
```

Bu yerda `script.sh` skripti bajarish huquqini oladi va keyin ishga tushiriladi.

## `nmap` orqali IP manzilda veb-server borligini tekshirish

`nmap` buyrug'i tarmoq qurilmalarini skanerlash va ularda ochiq portlarni aniqlash uchun ishlatiladi. `-p` opsiyasi tekshiriladigan portlarni belgilaydi.

Misol:

```bash
$ nmap -p 80,443 70.70.70.70
```

Bu yerda 70.70.70.70 IP manzilida 80 (http) va 443 (https) portlarida veb-server mavjudligini tekshiradi.

Agar `nmap` o'rnatilmagan bo'lsa yoki muammolarga duch kelsangiz, uni qayta o'rnating:

```bash
$ sudo apt install nmap -y
```

**P.S.** `-y` opsiyasi o'rnatish jarayonida barcha so'rovlarga avtomatik ravishda "ha" javobini beradi.

---

## Topshiriq

1. `ping` buyruq yordamida tarmoqda muammolarni aniqlash uchun yana qanday qo'shimcha parametrlarni ishlatish mumkinligini o'rganing.

2. `grep` buyrug'idan foydalanib, `ping` so'rovi natijalarida ma'lum bir kalit so'zni qanday qidirish mumkinligini tajriba qilib ko'ring. Misol uchun, `ping` so'rovidan keyin  `timeout` kalit so'zini qidirish. 

**Keyingi dars:** [[05-dars]]
