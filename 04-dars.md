---
title: 04 - Asosiy Buyruqlar
description: Ayrim foydali buyruqlar bilan tanishamiz.
sort: 4
author: Khumoyun (@comoyun)
tags:
  - nmap
  - shebang
  - ping
---
## `ping` so'rov yuborish

`ping` buyrug‘i server yoki boshqa tarmoq qurilmasining ishlayotganligini tekshirish uchun qo‘llaniladi. Bu buyruq serverga so‘rov yuboradi va javob qaytishini kutadi. `-c` (count) opsiyasi so‘rovlar sonini belgilaydi. Agar bu parametrni qo‘shmasangiz, `ping` to‘xtovsiz so‘rov yuboraveradi; kunning oxirida serverning ishdan chiqish xavfi ham bor. 🙂

Misol:

```bash
$ ping -c 5 google.com
```

Bu yerda `google.com` manziliga 5 marta ping yuboradi.

## `grep` bilan filterlash

`grep` matndagi ma'lum bir terminni topish uchun ishlatiladi va topilgan satrlarni chiqaradi. `cat` faylni ko'rsatadi, `|` esa uning natijasini `grep`ga uzatadi.

```bash
$ ping -c 5 192.168.43.2 > ip.txt
$ cat ip.txt | grep "64 bytes"
```

Bu misolda, `ping` natijalari `ip.txt`ga yoziladi va `grep "64 bytes"` "64 bytes" yozilgan qatorlarni chiqaradi.

## `cut` bilan matnni ajratish

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

Bu yerda `70.70.70.70` IP manzilida 80 (http) va 443 (https) portlarida veb-server mavjudligini tekshiradi.

Agar `nmap` o'rnatilmagan bo'lsa yoki muammolarga duch kelsangiz, uni qayta o'rnating:

```bash
$ sudo apt remove nmap
$ sudo apt install nmap -y
```

>`-y` opsiyasi o'rnatish jarayonida barcha so'rovlarga avtomatik "ha" javobini beradi.

## Shebang

Shebang dasturni qanday turkumdaligini aniqlash uchun kodning boshiga qo'yiladi. Bu, skriptning qaysi interpreter yordamida bajarilishi kerakligini belgilaydi. Misol uchun, `#!/bin/bash` Bash skriptlari uchun, `#!/usr/bin/env python3` Python skriptlari uchun ishlatiladi. Shebang-ni quyidagi tarzda ko'rishingiz mumkin:

```bash
#!/bin/bash
```

Shebang qatorini yo'q qilsangiz, skriptni bajarish uchun har doim to'g'ri interpreterni manual ko'rsatishingiz kerak bo'ladi.

Shebang `#/usr/bin/env dastur` ko‘rinishida ifodalanishi lozim, chunki Python singari dasturlar turli tizimlarda turlicha joylarga o‘rnatilgan bo‘ladi. Misol uchun, biror kishining Python dasturi `/usr/bin`-da emas, balki virtual muhit ichida joylashgan bo‘lishi mumkin. `env` buyrug‘i esa to‘g‘ri yo‘lni avtomatik tarzda topadi.

---

## Topshiriq

1. `grep` buyrug'idan foydalanib, `ping` so'rovi natijalarida ma'lum bir kalit so'zni qanday qidirish mumkinligini tajriba qiling. Misol uchun, `ping` so'rovidan keyin "timeout" kalit so'zini qidirish. 
2. `cal`, `date` `free`, `df` va `exit` kabi oddiy buyruqlarni terminalga yozib ko'ring.

**Keyingi dars:** [[05-dars]]
